//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import SingleItemToBuy from "../../list-of-items-to-buy/components/SingleItemToBuy";
import ShopPrice from "./ShopPrice";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/redux/hooks";
import { urlSliceActions } from "../../../store/redux/store-redux";
import { ImCheckmark } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";

const ItemDetails = ({ isCreatingNewItem }) => {
  //
  const shopPricesToRender = [{ name: "A" }, { name: "B" }];
  const [photo, setPhoto] = useState("");

  // const reduxStateImageURL = useAppSelector((state) => state.urlReducer);
  // console.log(reduxStateImageURL);

  //hook2 - add this redux code to the table of contentd comments
  const dispatch = useAppDispatch();
  //hook2 add this code to table of contents
  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(
      urlSliceActions.setURL({
        newURL: photo,
      })
    );
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className={styles["item-create-or-edit-view__container"]}>
        <SingleItemToBuy variant="create-or-edit-view" />
      </div>
      {/* //       _._. Repeatability type toggler (Button) */}
      <select required>
        <option value="Repeatability">Repeatability</option>
        <option value="Unique">Unique</option>
        <option value="Traditional">Traditional</option>
      </select>
      {/* //       _._. Expiration date (Date Picker, Button) - date is chosen by hand or automaticcly, after clicking "Open item" */}
      <div>
        <div>Earliest expiration date:</div>
        <input type="date"></input>
        <input type="time"></input>
        <button
          onClick={(e) => {
            e.preventDefault(), console.log("click");
          }}
        >
          Unused
        </button>
      </div>
      {/*//       _._. Prices in specific shops - by chosen amount and unit of measurment*/}
      <div>
        <div>Cena w sklepach</div>
        <input type="number" placeholder="1"></input>
        <input type="text" placeholder="pc."></input>
        {/* /\ //hook1 add default value, not just palceholder */}
        <button
          onClick={(e) => {
            e.preventDefault(), console.log("click");
          }}
        >
          +
        </button>
      </div>
      {shopPricesToRender.map((item) => (
        <li
          key={item.name}
          // className={styles[""]}
          style={{
            position: "relative",
            height: "4rem",
            width: "4rem",
            display: "grid",
            "grid-auto-flow": "column",
          }}
        >
          <ShopPrice />
        </li>
      ))}
      <div>a</div>
      {/* //       _._. Delete & Save item (Buttons) */}
      <button>
        <MdDeleteForever />
      </button>
      <button>
        <ImCheckmark />
      </button>

      {/* hook1 - change onChange to an action that only ocurs after save button of the item modal is clicked */}
      {/*  // hook2 - add info about "only use free license images from  https://images.unsplash.com, */}
      <input
        type="text"
        onChange={(event) => {
          setPhoto(event.target.value);
        }}
        placeholder="paste new url here"
      ></input>
      <input type="submit"></input>
    </form>
  );
};
export default ItemDetails;

//
//~~ _.  Details of an item - it's a submit form
//
//       _._. Image, title and needed amounts - by literally adding "SingleItemToBuy" container as "create/edit view" variant
//
//       _._. Repeatability type toggler (Button) - "single" or "traditional", depending on "does the user wants to buy this item once, or repeatably?"
//
//       _._. Expiration date (Date Picker, Button) - date is chosen by hand or automaticcly, after clicking "Open item"
//
//       _._. Prices in specific shops - by chosen amount and unit of measurment
//
//       _._. Delete & Save item (Buttons)
//
