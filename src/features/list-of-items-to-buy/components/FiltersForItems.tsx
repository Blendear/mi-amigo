import styles from "src/styles/sass/styles-all.module.scss";
import { useState } from "react";
//hook2 - add types
// setNameToFilterBy, setIsGreen, setIsYellow, setIsRed

const FiltersForItems = ({ handlers }: any) => {
  const handleFilterByName = () => {
    const filterValue = (document.getElementById("byName") as HTMLInputElement)
      .value;
    console.log(filterValue);
    handlers.setNameToFilterBy(filterValue);
  };

  return (
    <div className={styles["landing-page__filters-container"]}>
      <div
        className={styles["landing-page__filters-container__by-name-container"]}
      >
        <input
          className={styles["hook1"]}
          id="byName"
          placeholder="Name to filter by"
          type="text"
          // onClick={() => {
          //   setFilterCurrent("red-yellow");
          // }}
        ></input>
        <button onClick={handleFilterByName}>\/</button>
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
          name="green"
          type="checkbox"
          // onClick={() => {
          //   setFilterCurrent("red-yellow");
          // }}
        ></input>
        <input
          className={
            styles[
              "landing-page__filters-container__checkboxes-container--yellow"
            ]
          }
          name="yellow"
          type="checkbox"
          // onClick={() => {
          //   setFilterCurrent("red-yellow");
          // }}
        ></input>
        <input
          className={
            styles["landing-page__filters-container__checkboxes-container--red"]
          }
          name="red"
          type="checkbox"
          // onChange={() => {
          //   setIsRed((prev) => {
          //     return !prev;
          //   });
          // }}
          //hook1 - herehere - /\ change to a way of saving th state, so it doesnt renrender the whole landing opage. mayeb just add the usestate and filters as part of "list of items"?
        ></input>
        {/* {console.log(isRed)} */}
      </div>
    </div>
  );
};

export default FiltersForItems;
