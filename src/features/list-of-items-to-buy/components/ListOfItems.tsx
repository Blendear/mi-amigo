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

//hook2 - export to "types" folder
type checkboxesStates = {
  success: string;
  warning: string;
  danger: string;
};

const ListOfItemsToBuy = ({ itemsFromDB }: ItemFromDB) => {
  const [openedItem, setOpenedItem] = useState<ItemFromDB>();
  const [isItemDetailsModalOpen, setIsItemDetailsModalOpen] =
    useState<boolean>(false);
  const [nameToFilterBy, setNameToFilterBy] = useState<string>("");
  const [colorsToFilterBy, setColorsToFilterBy] = useState<checkboxesStates>({
    success: "__",
    warning: "__",
    danger: "__",
  });

  console.log("rerender list of items");
  return (
    <>
      {/* <button
        onClick={() => {
          console.log("state current : ", colorsToFilterBy);
        }}
      >
        console log
      </button> */}
      {/* //       _._. Filters for the user*/}
      <FiltersForItems handlers={{ setNameToFilterBy, setColorsToFilterBy }} />
      <ul className={styles["landing-page__list-of-items-container"]}>
        {itemsFromDB
          //           _._._. Filter by string of text input
          .filter((item) => {
            return nameToFilterBy.length > 0
              ? item.itemName.toLowerCase().includes(nameToFilterBy)
              : true;
          })

          //           _._._. Filter by colors of active chechboxes
          .filter((item) => {
            if (
              colorsToFilterBy.success === "__" &&
              colorsToFilterBy.warning === "__" &&
              colorsToFilterBy.danger === "__"
            ) {
              return true;
            } else if (
              item.colorOfCurrentAmount.includes(colorsToFilterBy.success)
            ) {
              return true;
            } else if (
              item.colorOfCurrentAmount.includes(colorsToFilterBy.warning)
            ) {
              return true;
            } else if (
              item.colorOfCurrentAmount.includes(colorsToFilterBy.danger)
            ) {
              return true;
            }
            return false;

            //trap1 - || STOPS after first "true" case - for example "return item, if item.name.includes("a" || "b")" will ONLY RETURN items with "a", SINCE it wont need to check if "b" is also good
          })

          .map((item, index) => (
            <li key={index} className={styles["item-edit-view__container"]}>
              {/* //       _._. Single item, clickable container - onClick opens "ItemDetails" modal as "variant : edit-item" */}
              <SingleItemToBuy
                variant="list-view"
                itemAlreadyExists={true}
                itemSingle={item}
                handleOnClick={() => {
                  setOpenedItem(item), setIsItemDetailsModalOpen(true);
                  console.log(item);
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
//       _._. Filters for the user
//
//           _._._. Filter by colors of active chechboxes
//
//           _._._. Filter by string of text input
//
//       _._. Single item, clickable container - onClick opens "ItemDetails" modal as "variant : edit-item"
//
