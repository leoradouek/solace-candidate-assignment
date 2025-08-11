import { or, eq, asc } from "drizzle-orm/expressions";
import { sql } from "drizzle-orm";
import db from "../../../db";
import { advocates } from "../../../db/schema";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const years = Number(search);

    let query = db.select().from(advocates);

    if (search) {
      const term = `%${search}%`;

      const conditions = [
        sql`LOWER(${advocates.firstName}) LIKE LOWER(${term})`,
        sql`LOWER(${advocates.lastName}) LIKE LOWER(${term})`,
        sql`LOWER(${advocates.city}) LIKE LOWER(${term})`,
        sql`LOWER(${advocates.degree}) LIKE LOWER(${term})`,
      ];

      if (!isNaN(years)) {
        conditions.push(eq(advocates.yearsOfExperience, years));
      }

      query = query.where(or(...conditions));
    }

    query = query.orderBy(asc(advocates.lastName), asc(advocates.firstName));

    const data = await query;
    return Response.json({ data });
  } catch (error) {
    console.error("Error in GET /api/advocates:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
