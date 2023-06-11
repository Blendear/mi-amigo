//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import SingleItemToBuy from "./SingleItemToBuy";
import { useState } from "react";
// \/ hook2 - remake this separete imports into a singl index.js file export-import & corretc all modal/backdrop imports in other files
import Modal from "../../../components/Modal";
import Backdrop from "../../../components/Backdrop";
//
import { ItemDetails } from "../../add-or-edit-item/index.js";

const ListOfItemsToBuy = ({ itemsFromDB }) => {
  //hook2 - comment this into thte table of cotnent \/
  const [openedItem, setOpenedItem] = useState();
  const [isItemDetailsModalOpen, setIsItemDetailsModalOpen] = useState(false);

  // const handleOpenItemDetailsModal = () => {
  //   setIsItemDetailsModalOpen(true);
  // };
  // /\
  return (
    <>
      <ul className={styles["landing-page__list-of-items-container"]}>
        {itemsFromDB.map((item) => (
          <li key={item.name} className={styles["item-edit-view__container"]}>
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
      {/*   //hook2 - comment this into thte table of cotnent \/ */}
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
      {/* /\ */}
    </>
  );
};
export default ListOfItemsToBuy;

// hook2 - table of cotnent isnt mpemented in the code
//
//~~ _.  List of items to buy in the currently active shop || all shops - depends on the chosen image
//
//       _._. Single item, clickable container - onClick opens "ItemDetails" modal as "variant : edit-item"
//
