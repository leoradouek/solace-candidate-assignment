"use client";

import { useState } from "react";
import AdvocatesTable from "@/components/AdvocatesTable";
import SearchBar from "@/components/SearchBar";
import { useAdvocates } from "@/hooks/useAdvocates";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { advocates, loading, error, totalCount } = useAdvocates({search: searchTerm});

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <br />
      <br />
      <AdvocatesTable advocates={advocates}/>
    </main>
  );
}
