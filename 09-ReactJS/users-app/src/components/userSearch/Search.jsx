function Search({ onSearch, onReset, searchVal }) {
  return (
    <div className="container p-5">
      <form
        className="d-flex"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(searchVal);
        }}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search by Email"
          value={searchVal}
          onChange={(e) => onSearch(e.target.value)} 
          aria-label="Search"
        />
        <button className="btn btn-outline-primary me-2" type="submit">
          Search
        </button>
        {searchVal && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onReset}
          >
            Reset
          </button>
        )}
      </form>
    </div>
  );
}

export default Search;
