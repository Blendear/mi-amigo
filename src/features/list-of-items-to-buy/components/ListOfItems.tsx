//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import SingleItemToBuy from "./SingleItemToBuy";
import { useState } from "react";
import { Modal, Backdrop } from "../../../components";
import { ItemDetails } from "../../add-or-edit-item";
import { ItemFromDB } from "../../../types";
import FiltersForItems from "./FiltersForItems";

const ListOfItemsToBuy = ({ itemsFromDB }: ItemFromDB) => {
  //hook2 - comment this into thte table of cotnent \/
  const [openedItem, setOpenedItem] = useState<ItemFromDB>();
  const [isItemDetailsModalOpen, setIsItemDetailsModalOpen] =
    useState<boolean>(false);
  const [nameToFilterBy, setNameToFilterBy] = useState<string>("");
  const [isGreen, setIsGreen] = useState<boolean>(false);
  const [isYellow, setIsYellow] = useState<boolean>(false);
  const [isRed, setIsRed] = useState<boolean>(false);

  // 1. - nameToFilterBy.length > 0? = filter by name (and check step 2. for colors - becausy i might have 10 items weith "kitchen" string-part and want to noly see the red ones)
  //
  // 2. - filter by colors:
  //      a) no colors chcecked = dont filter
  //      b) 1,2 or 3 colors checked = filter by those colors
  console.log("rerender list of items");
  return (
    <>
      {/* //       _._. Filters - name and/or color-checkbox'es for filtering the list of items */}
      <FiltersForItems
        handlers={{ setNameToFilterBy, setIsGreen, setIsYellow, setIsRed }}
      />
      <div>{nameToFilterBy}</div>
      <ul className={styles["landing-page__list-of-items-container"]}>
        {itemsFromDB
          .filter((item) => item.amountCurrent < item.amountMaxExpected * 0.66)
          .map((item, index) => (
            <li key={index} className={styles["item-edit-view__container"]}>
              {/* //       _._. Single item, clickable container - onClick opens "ItemDetails" modal as "variant : edit-item" */}
              <SingleItemToBuy
                variant="list-view"
                itemAlreadyExists={true}
                itemSingle={item}
                handleOnClick={() => {
                  setOpenedItem(item), setIsItemDetailsModalOpen(true);
                }}
              />
            </li>
          ))}
      </ul>

      {isItemDetailsModalOpen && (
        <>
          <Modal variant="information">
            <button
              onClick={() => {
                setIsItemDetailsModalOpen(false),
                  (document.body.style.overflow = "unset"); // enables page-scrolling
              }}
            >
              x
            </button>
            <ItemDetails
              isCreatingNewItem={false}
              openedItemData={openedItem}
            />
          </Modal>
          <Backdrop
            onClose={() => setIsItemDetailsModalOpen(false)}
            isStatic={true}
            variant="black-50-opacity"
          />
        </>
      )}
    </>
  );
};
export default ListOfItemsToBuy;

// hook2 - table of cotnent isnt mpemented in the code
//
//~~ _.  List of items to buy in the currently active shop || all shops - depends on the chosen image
//
//       _._. Filters - name and/or color-checkbox'es for filtering the list of items
//
//       _._. Single item, clickable container - onClick opens "ItemDetails" modal as "variant : edit-item"
//
