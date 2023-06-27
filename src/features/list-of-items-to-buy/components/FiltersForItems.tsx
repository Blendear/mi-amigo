import styles from "src/styles/sass/styles-all.module.scss";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

//hook2 - add types

const FiltersForItems = ({ handlers }: any) => {
  const [filterValue, setFilterValue] = useState<string>("");

  const handleChangeTextValue = (event) => {
    setFilterValue(event.target.value);
  };

  const handleFilterByName = () => {
    handlers.setNameToFilterBy(filterValue.toLowerCase());
  };

  const handleToggleCheckbox = (event) => {
    const colorName = event.target.name;
    handlers.setColorsToFilterBy((prev) => {
      return Object.defineProperty({ ...prev }, colorName, {
        value: event.target.checked === true ? colorName : "__",
      });
    });
  };

  return (
    <div className={styles["landing-page__filters-container"]}>
      <div
        className={styles["landing-page__filters-container__by-name-container"]}
      >
        <input
          // className={styles["landing-page__filters-container__by-name"]}
          id="byName"
          placeholder="Name to filter by"
          type="text"
          onChange={handleChangeTextValue}
        ></input>
        <FaSearch onClick={handleFilterByName} />
      </div>

      <div
        className={
          styles["landing-page__filters-container__checkboxes-container"]
        }
      >
        <input
          className={
            styles[
              "landing-page__filters-container__checkboxes-container--green"
            ]
          }
          name="success"
          type="checkbox"
          onChange={handleToggleCheckbox}
        ></input>
        <input
          className={
            styles[
              "landing-page__filters-container__checkboxes-container--yellow"
            ]
          }
          name="warning"
          type="checkbox"
          onChange={handleToggleCheckbox}
        ></input>
        <input
          className={
            styles["landing-page__filters-container__checkboxes-container--red"]
          }
          name="danger"
          type="checkbox"
          onChange={handleToggleCheckbox}

          //hook1 - herehere - /\ change to a way of saving th state, so it doesnt renrender the whole landing opage. mayeb just add the usestate and filters as part of "list of items"?
        ></input>
      </div>
    </div>
  );
};

export default FiltersForItems;
