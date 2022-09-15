import { ChangeEventHandler, FormEventHandler } from "react";
import { SearchBeerParams } from "../types";

interface SearchBarProps {
  params: SearchBeerParams;
  updateParams: ChangeEventHandler;
  updateOrderParams: FormEventHandler;
}

const SearchBar: React.FC<SearchBarProps> = ({
  params,
  updateParams,
  updateOrderParams,
}) => {
  return (
    <form
      className="search-bar"
      onSubmit={(e) => e.preventDefault()}
      tabIndex={0}
    >
      <input
        type="text"
        id="beer_name"
        onChange={updateParams}
        placeholder="Search by name"
      ></input>
      <fieldset>
        <legend>
          Alcohol {params.abv_gt}-{params.abv_lt}
        </legend>
        <label htmlFor="abv_lt">max</label>
        <input
          type="range"
          id="abv_lt"
          max={20}
          defaultValue={params.abv_lt}
          onChange={updateParams}
        ></input>
        <label htmlFor="abv_gt">min</label>
        <input
          type="range"
          id="abv_gt"
          max={20}
          defaultValue={params.abv_gt}
          onChange={updateParams}
        ></input>
      </fieldset>
      <fieldset>
        <legend>
          Color {params.ebc_gt}-{params.ebc_lt}
        </legend>
        <label htmlFor="ebc_lt">max</label>
        <input
          type="range"
          id="ebc_lt"
          max={90}
          defaultValue={params.ebc_lt}
          onChange={updateParams}
        ></input>
        <label htmlFor="ebc_gt">min</label>
        <input
          type="range"
          id="ebc_gt"
          max={90}
          defaultValue={params.ebc_gt}
          onChange={updateParams}
        ></input>
      </fieldset>
      <fieldset>
        <legend>
          IBU {params.ibu_gt}-{params.ibu_lt}
        </legend>
        <label htmlFor="ibu_lt">max</label>
        <input
          type="range"
          id="ibu_lt"
          max={200}
          defaultValue={params.ibu_lt}
          onChange={updateParams}
        ></input>
        <label htmlFor="ibu_gt">min</label>
        <input
          type="range"
          id="ibu_gt"
          max={200}
          defaultValue={params.ibu_gt}
          onChange={updateParams}
        ></input>
      </fieldset>
      <fieldset className="order" onChange={updateOrderParams}>
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
