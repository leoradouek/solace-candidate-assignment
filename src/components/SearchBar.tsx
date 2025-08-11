type Props = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

import { useState, useEffect } from "react";

export default function SearchBar({ searchTerm, setSearchTerm }: Props) {
  const [inputValue, setInputValue] = useState(searchTerm);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onReset = () => {
    setInputValue("");
    setSearchTerm("");
  };

  // debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 300);

    // Cleanup the timeout if inputValue changes before 300ms
    return () => clearTimeout(handler);
  }, [inputValue, setSearchTerm]);

  return (
    <div>
      <input
        className="border border-black w-[80vw] p-2 mr-[10px] text-[#1d4339] rounded"
        value={inputValue}
        onChange={onChange}
        placeholder="Search by name, city, degree or specialty"
      />
      <button onClick={onReset} aria-label="Clear search">
        Reset
      </button>
      <br />
      <br />
    </div>
  );
}
