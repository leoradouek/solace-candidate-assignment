"use client";

import { useState } from "react";
import AdvocatesTable from "@/components/AdvocatesTable/AdvocatesTable";
import SearchBar from "@/components/SearchBar";
import { useAdvocates } from "@/hooks/useAdvocates";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { advocates, loading, error, success, totalCount } = useAdvocates({search: searchTerm});

  return (
    <main className='font-roboto p-8 text-white bg-[#1d4339]'>
      <div className="sticky top-0 bg-[#1d4339] z-20">
        <h1 className="text-4xl text-[#E9CC95] mb-8">Solace Advocates</h1>
        {success && 
          <div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className="font-bold pb-3">{totalCount} Results</div>
          </div>
       }
      </div>
      {loading && <div className= "h-[90vh] flex items-center justify-center">Loading...</div>}
      {error && <div className= "h-[90vh] flex items-center justify-center"> There was an error retrieving the advocates. Please try refreshing the page. </div>}
      {success && advocates.length === 0 && searchTerm && <div className= "h-[80vh] flex items-center justify-center">We couldn&apos;t find any matching results for {searchTerm}. Please try again.</div>}
      {success && advocates.length !== 0 && <AdvocatesTable advocates={advocates}/>}
     
    </main>
  );
}
