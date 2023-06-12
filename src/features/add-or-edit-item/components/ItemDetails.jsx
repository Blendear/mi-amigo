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
  getDoc,
  getDocs,
  updateDoc,
  doc, // gets a reference to a chosen document
  deleteDoc,
  setDoc,
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

  //hook2 add this code to table of contents \/.

  // Get reference the document we want - by passing : databaseReference, collectionName, documentName
  // const collectionReference = collection(
  //   db,
  //   "shopping-assistant", //col
  //   "test-user", // col.doc
  //   "items" // col.doc.col.
  // );
  const collPathString = "shopping-assistant/test-user/items";
  // (CRUD - Create)
  // hook2 - save it into templates. this function updates a doc, OR CREATES, if it doesnt exist. inredibly versatile

  //hook2 - \/ export this creat/eedit funcitons to separate files

  const handleCreateNewItem = async (collPathString, docID, newDocData) => {
    //  check if a item with this name exisits
    const docSnap = await getDoc(doc(db, collPathString, docID));

    if (docSnap.exists()) {
      alert(
        "That item already exists! Change the name or edit the existing item c:",
        docSnap.data()
      );
    } else {
      // create the item in DB
      // setItemData({ newProp: "newData" });
      console.log("created item with item data: ", newDocData);

      await setDoc(
        doc(db, "shopping-assistant/test-user/items", docID),
        newDocData
      );
      alert("Item succesfully created!");
    }
    //     hook1 - close itemDetails modal
  };

  const handleEditExistingItem = () => {
    console.log("edited item ");
  };

  const handleSaveFormDataAsObject = (e) => {
    console.log("form html element :", e.imageURL);
    let formData = new FormData();

    formData.append(e.imageURL.name, e.imageURL.value); //hook2 reamke into separate component or add useref to save the "isURLInputOpen" state?
    formData.append(e.itemName.name, e.itemName.value);
    // formData.append(e.amountCurrent.name, e.amountCurrent.value);
    // formData.append(e.amountMaxExpected.name, e.amountMaxExpected.value);
    formData.append(e.expirationDateDay.name, e.expirationDateDay.value);
    formData.append(e.expirationDateTime.name, e.expirationDateTime.value);
    formData.append(e.numberOfMeasurement.name, e.numberOfMeasurement.value);
    formData.append(e.unitOfMeasurement.name, e.unitOfMeasurement.value);
    formData.append(e.isOpen.name, e.isOpen.value);
    formData.append(e.repeatability.name, e.repeatability.value);
    // formData.append(e._.name, e._.value);

    return Object.fromEntries(formData);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    // hook2 - write it down in table fo cotnents - creating a object from saving the form data with FormData, by manually adding every input field etc to the object - (because just creating a "ref" with useRef doesnt save some of the fields)
    const formDataObject = handleSaveFormDataAsObject(event.target);
    console.log("form data : ", formDataObject);

    isCreatingNewItem === false
      ? handleEditExistingItem()
      : handleCreateNewItem(collPathString, "my-id8", formDataObject);

    // dispatch(
    //   urlSliceActions.setURL({
    //     newURL: photo,
    //   })
    // );
  };

  console.log(openedItemData ? itemData : "opened create item modal");

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
        name="repeatability"
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
          type="date"
          name="expirationDateDay"
          defaultValue={
            isCreatingNewItem === false ? openedItemData.expirationDateDay : ""
          }
          className={styles["item-create-or-edit-view__exp-date__inputs__date"]}
        ></input>
        <input
          type="time"
          name="expirationDateTime"
          className={styles["item-create-or-edit-view__exp-date__inputs__time"]}
          defaultValue={
            isCreatingNewItem === false ? openedItemData.expirationDateTime : ""
          }
        ></input>
        <button
          // type="button"
          name="isOpen"
          // value={itemData.isOpen ? "Opened" : "Unused"}
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
          name="numberOfMeasurement"
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
          name="unitOfMeasurement"
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
        name="imageURL"
        // onChange={(event) => {
        //   setPhoto(event.target.value);
        // }}
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
