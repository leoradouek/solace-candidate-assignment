import { or } from "drizzle-orm/expressions";
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
        sql`${advocates.specialties} @> ${sql`to_jsonb(array[${search}])`}`,
      ];

      if (!isNaN(years)) {
        conditions.push(advocates.yearsOfExperience.equals(years));
      }

      query = query.where(() => or(...conditions));
    }

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
