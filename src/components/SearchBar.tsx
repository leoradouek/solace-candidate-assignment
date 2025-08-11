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
      <p>Search</p>
      <p>
        Searching for: <span>{searchTerm}</span>
      </p>
      <input
        style={{ border: "1px solid black" }}
        value={searchTerm}
        onChange={onChange}
        placeholder="Search..."
      />
      <button onClick={onReset}>Reset Search</button>
      <br />
      <br />
    </div>
  );
}