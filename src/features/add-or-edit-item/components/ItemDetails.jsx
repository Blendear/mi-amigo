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

const ItemDetails = ({ isCreatingNewItem, openedItemData }) => {
  //

  const [photo, setPhoto] = useState("");
  const [itemData, setItemData] = useState(
    isCreatingNewItem ? {} : openedItemData
  );
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

  console.log(openedItemData ? itemData : "no data passed");

  return (
    <form
      onSubmit={handleSubmitForm}
      className={styles["item-create-or-edit-view__container"]}
    >
      {/* \/ hook2 - add to table of contents - "necwessary for using item detialsmodal separately for new item creation and separately for editing existing item" */}
      {isCreatingNewItem === false ? (
        <SingleItemToBuy
          variant="create-or-edit-view"
          itemAlreadyExists={true}
          itemSingle={openedItemData}
        />
      ) : (
        <SingleItemToBuy
          variant="create-or-edit-view"
          itemAlreadyExists={false}
        />
      )}

      {/* //       _._. Repeatability type toggler (Button) */}
      <select
        // hook2 - add to table of content - "checking if the item was opened because user ciced "add item" or "open this item" "
        //hook2 - could this  whole conditional dcontent checker be refactored into a dynamic function? Would it make sense tho?
        defaultValue={
          isCreatingNewItem === false ? openedItemData.repeatability : ""
        }
        className={styles["item-create-or-edit-view__repeatability"]}
      >
        <option
          value="Repeatability"
          style={{ "background-color": "#a8a8a8", color: "#4a4a4a" }}
        >
          Repeatability
        </option>
        <option value="Unique">Unique</option>
        <option value="Traditional">Traditional</option>
      </select>
      {/* //       _._. Expiration date (Date Picker, Button) - date is chosen by hand or automaticcly, after clicking "Open item" */}

      <div className={styles["item-create-or-edit-view__exp-date__title"]}>
        Expiration date :
      </div>
      <div className={styles["item-create-or-edit-view__exp-date__inputs"]}>
        <input
          defaultValue={
            isCreatingNewItem === false ? openedItemData.expirationDateDay : ""
          }
          type="date"
          className={styles["item-create-or-edit-view__exp-date__inputs__date"]}
        ></input>
        <input
          type="time"
          className={styles["item-create-or-edit-view__exp-date__inputs__time"]}
          defaultValue={
            isCreatingNewItem === false ? openedItemData.expirationDateTime : ""
          }
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault(), console.log("toggled opened/unused");
          }}
          className={
            styles[
              `item-create-or-edit-view__exp-date__inputs__btn-toggle-open${
                itemData.isOpen ? "--opened" : ""
              }`
            ]
          }
        >
          {itemData.isOpen ? "Opened" : "Unused"}
        </button>
      </div>

      {/*//       _._. Prices in specific shops - by chosen amount and unit of measurment*/}
      <div
        className={styles["item-create-or-edit-view__prices-in-shops__header"]}
      >
        <div
          className={
            styles["item-create-or-edit-view__prices-in-shops__header__title"]
          }
        >
          Prices for:
        </div>
        <input
          type="number"
          placeholder="1"
          className={
            styles["item-create-or-edit-view__prices-in-shops__header__amount"]
          }
        ></input>
        <input
          type="text"
          placeholder="pc."
          className={
            styles[
              "item-create-or-edit-view__prices-in-shops__header__unit-of-measurment"
            ]
          }
        ></input>
        {/* /\ //hook1 add default value, not just palceholder */}
        <button
          onClick={(e) => {
            e.preventDefault(), console.log("added new price");
          }}
          className={
            styles[
              "item-create-or-edit-view__prices-in-shops__header__btn-add-shop"
            ]
          }
        >
          +
        </button>
      </div>
      <ul
        className={
          styles["item-create-or-edit-view__prices-in-shops__list-of-prices"]
        }
      >
        {itemData.pricesInShops.map((item, index) => (
          <li
            key={index}
            className={
              styles[
                "item-create-or-edit-view__prices-in-shops__list-of-prices__item"
              ]
            }
          >
            <ShopPrice shopData={item} />
          </li>
        ))}
      </ul>
      {/* //       _._. Delete & Save item (Buttons) */}
      <button
        onClick={(e) => {
          e.preventDefault(), console.log("deleted");
        }}
        className={styles["item-create-or-edit-view__btn-delete"]}
      >
        <MdDeleteForever />
      </button>
      <button
        type="submit"
        className={styles["item-create-or-edit-view__btn-save"]}
      >
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
      {/* /\ hook1 - remake it into showing only after clikcing the image or image dedicated edit icon */}
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
