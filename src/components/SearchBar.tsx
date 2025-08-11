type Props = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export default function SearchBar({ searchTerm, setSearchTerm }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onReset = () => {
    setSearchTerm("");
  };

  return (
    <div>
      <input
        className="border border-black w-[80vw] p-2  mr-[10px] text-[#1d4339] rounded"
        value={searchTerm}
        onChange={onChange}
        placeholder="Search by name, city, degree or specialty"
      />
      <button
        onClick={onReset}
        aria-label="Clear search"
      >
        Reset
      </button>
      <br />
      <br />
    </div>
  );
}