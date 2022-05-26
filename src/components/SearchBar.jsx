const SearchBar = ({ params }) => {
  console.log(params);
  const [searchParams, updateSearchParams, updateSearchOrder] = params;

  return (
    <form
      className="search-bar"
      onSubmit={(e) => e.preventDefault()}
      tabIndex="0"
    >
      <input
        type="text"
        id="beer_name"
        onChange={updateSearchParams}
        placeholder="Search by name"
      ></input>
      <fieldset>
        <legend>
          Alcohol {searchParams.abv_gt}-{searchParams.abv_lt}
        </legend>
        <label htmlFor="abv_lt">max</label>
        <input
          type="range"
          id="abv_lt"
          max={20}
          defaultValue={20}
          onChange={updateSearchParams}
        ></input>
        <label htmlFor="abv_gt">min</label>
        <input
          type="range"
          id="abv_gt"
          max={20}
          defaultValue={0}
          onChange={updateSearchParams}
        ></input>
      </fieldset>
      <fieldset>
        <legend>
          Color {searchParams.ebc_gt}-{searchParams.ebc_lt}
        </legend>
        <label htmlFor="ebc_lt">max</label>
        <input
          type="range"
          id="ebc_lt"
          max={90}
          defaultValue={90}
          onChange={updateSearchParams}
        ></input>
        <label htmlFor="ebc_gt">min</label>
        <input
          type="range"
          id="ebc_gt"
          max={90}
          defaultValue={0}
          onChange={updateSearchParams}
        ></input>
      </fieldset>
      <fieldset>
        <legend>
          IBU {searchParams.ibu_gt}-{searchParams.ibu_lt}
        </legend>
        <label htmlFor="ibu_lt">max</label>
        <input
          type="range"
          id="ibu_lt"
          max={200}
          defaultValue={200}
          onChange={updateSearchParams}
        ></input>
        <label htmlFor="ibu_gt">min</label>
        <input
          type="range"
          id="ibu_gt"
          max={200}
          defaultValue={0}
          onChange={updateSearchParams}
        ></input>
      </fieldset>
      <fieldset
        className="order"
        onChange={(event) =>
          updateSearchOrder(event.target.id, event.target.value)
        }
      >
        <legend>Order by:</legend>
        <label htmlFor="ibu-asc">IBU asc:</label>
        <input type="radio" name="orderby" id="ibu-asc" />
        <label htmlFor="ibu-desc">desc:</label>
        <input type="radio" name="orderby" id="ibu-desc" />
        <label htmlFor="color-dark">Color dark:</label>
        <input type="radio" name="orderby" id="ebc-desc" />
        <label htmlFor="color-light">light:</label>
        <input type="radio" name="orderby" id="ebc-asc" />
        <label htmlFor="abv-asc">Alcohol asc:</label>
        <input type="radio" name="orderby" id="abv-asc" />
        <label htmlFor="abv-desc">desc:</label>
        <input type="radio" name="orderby" id="abv-desc" />
      </fieldset>
    </form>
  );
};
export default SearchBar;
