import styles from "src/styles/sass/styles-all.module.scss";
import { useState } from "react";
import { Modal, Backdrop } from "../../components";
import { ItemDetails } from "../../features/add-or-edit-item/index";

const Footer = () => {
  const [showSavingModalAndBackdrop, setShowSavingModalAndBackdrop] =
    useState<boolean>(false);
  const [
    showCreateNewItemModalAndBackdrop,
    setShowCreateNewItemModalAndBackdrop,
  ] = useState<boolean>(false);

  return (
    <div className={styles["footer__container"]}>
      {showSavingModalAndBackdrop && (
        <>
          <Modal variant="information">
            <button
              onClick={() => {
                setShowSavingModalAndBackdrop(false),
                  (document.body.style.overflow = "unset"); // enables page-scrolling
              }}
            >
              x
            </button>
            <h1>Saving to Firestore DB</h1>
          </Modal>
          <Backdrop
            onClose={() => setShowSavingModalAndBackdrop(false)}
            isStatic={true}
            variant="black-50-opacity"
          />
        </>
      )}

      {showCreateNewItemModalAndBackdrop && (
        <>
          {/* \/ hook2 - make a sub-component for modals dedicated for item details rendering. its used in 2 places, so its worht it */}
          <Modal variant="information">
            <button
              onClick={() => {
                setShowCreateNewItemModalAndBackdrop(false),
                  (document.body.style.overflow = "unset"); // enables page-scrolling
              }}
            >
              x
            </button>
            <ItemDetails isCreatingNewItem={true} />
          </Modal>
          <Backdrop
            onClose={() => setShowCreateNewItemModalAndBackdrop(false)}
            isStatic={true}
            variant="black-50-opacity"
          />
        </>
      )}
      <button
        className={styles["footer__svg-button"]}
        onClick={() => {
          setShowSavingModalAndBackdrop(true),
            (document.body.style.overflow = "hidden"); // disables page-scrolling
        }}
      >
        save
      </button>
      <button
        className={styles["footer__svg-button"]}
        onClick={() => {
          setShowCreateNewItemModalAndBackdrop(true),
            (document.body.style.overflow = "hidden"); // disables page-scrolling
        }}
      >
        add item
      </button>
    </div>
  );
};
export default Footer;

//
//hook2 - create table of contnet - how to i operate differnet variant of modals etc.
//
//       _._. Save all current users data, through API html request, to Firestore Database (Button)   &   show current progress of the request
//      hook1 - OR HOW TO CHOOSE ONLY UPDATED DATA? PROPERTY WITH "THIS DATA CONTAINER SHOUDL BE UPDATED - BOOLEAN"
//           _._._. ...
//
//           _._._. ...
//
//           _._._. ...
//
//       _._. Add new item to "myNeededSupplies" (Button, Modal) - onClick opens "ItemDetails" modal as "variant : create-item"
//
