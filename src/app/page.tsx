"use client";

import { useEffect, useState } from "react";
import AdvocatesTable from "@/components/AdvocatesTable";
import SearchBar from "@/components/SearchBar";
import { Advocate } from "@/types/advocates";

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredAdvocates(advocates);
      return;
    }

    const term = searchTerm.toLowerCase();

    const filtered = advocates.filter((a: Advocate) => {
      return (
        a.firstName.toLowerCase().includes(term) ||
        a.lastName.toLowerCase().includes(term) ||
        a.city.toLowerCase().includes(term) ||
        a.degree.toLowerCase().includes(term) ||
        a.specialties.some((s) => s.toLowerCase().includes(term)) ||
        a.yearsOfExperience === Number(term)
      );
    });

    setFilteredAdvocates(filtered);
  }, [searchTerm, advocates]);

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <br />
      <br />
      <AdvocatesTable advocates={filteredAdvocates}/>
    </main>
  );
}
