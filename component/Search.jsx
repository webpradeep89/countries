const Search = ({setSearchQueary}) => {
  return (
    <>
      <div className="search">
        <i className="icon-search"></i>
        <input type="text" onChange={(e) => setSearchQueary(e.target.value.toLowerCase())} placeholder="Search for a country..." />
      </div>
    </>
  );
};

export default Search;
