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
import { db } from "../../../features/authentication/lib/init-firebase";
import {
  addDoc,
  collection, // gets a reference to a chosen collection
  getDocs,
  updateDoc,
  doc, // gets a reference to a chosen document
  deleteDoc,
} from "firebase/firestore";
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

  //hook2 add this code to table of contents \/

  // Get reference the document we want - by passing : databaseReference, collectionName, documentName
  const collectionReference = collection(
    db,
    "shopping-assistant", //col
    "test-user", // col.doc
    "items" // col.doc.col
  );
  // (CRUD - Create)
  const createItemInsideDB = async (newItemData) => {
    await addDoc(collectionReference, newItemData);
  };
  //hook2 - \/ export this creat/eedit funcitons to separate files
  const handleCreateNewItem = () => {
    console.log("created item");
    //     hook1 - (redux jednak?) check if a item with this name exisits - if yes, tell the user to change the name or chekc if the item isnt already inside of it

    setItemData({ itemName: "carrot", test: "approved" }); // should be set with form data & TEST IF react-hook-form wil prevent the onSubmit to work, if the data isnt valid
    console.log("item data: ", itemData);
    createItemInsideDB(itemData);
    //     hook1 - close itemDetails modal
  };

  const handleEditExistingItem = () => {
    console.log("edited item ");
  };

  const handleSubmitForm = (event) => {
    isCreatingNewItem === false
      ? handleEditExistingItem()
      : handleCreateNewItem();
    event.preventDefault();
    // dispatch(
    //   urlSliceActions.setURL({
    //     newURL: photo,
    //   })
    // );
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
          defaultValue={
            isCreatingNewItem === false ? itemData.numberOfMeasurement : ""
          }
          placeholder="0"
          className={
            styles["item-create-or-edit-view__prices-in-shops__header__amount"]
          }
        ></input>
        <input
          type="text"
          defaultValue={
            isCreatingNewItem === false ? itemData.unitOfMeasurement : ""
          }
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
        {itemData.pricesInShops ? (
          itemData.pricesInShops.map((item, index) => (
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
          ))
        ) : (
          <div
            className={
              styles[
                "item-create-or-edit-view__prices-in-shops__list-of-prices__no-prices-text"
              ]
            }
          >
            No prices added yet
          </div>
        )}
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
