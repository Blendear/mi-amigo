import styles from "src/styles/sass/styles-all.module.scss";
import { useState } from "react";
import { Modal, Backdrop } from "../../components";
import { ItemDetails } from "../../features/add-or-edit-item/index";
import { MdAddShoppingCart } from "react-icons/md";
import { MdSettings } from "react-icons/md";

const Footer = () => {
  const [
    showCreateNewItemModalAndBackdrop,
    setShowCreateNewItemModalAndBackdrop,
  ] = useState<boolean>(false);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  //hook2 - refactor the footer into separate files. It isn't a clean, readable code right now
  return (
    <div className={styles["footer__container"]}>
      {showSettingsModal && (
        <>
          <Modal variant="information">
            <button
              onClick={() => {
                setShowSettingsModal(false),
                  (document.body.style.overflow = "unset"); // enables page-scrolling
              }}
            >
              x
            </button>
            <h1>Placeholder for settings</h1>
          </Modal>
          <Backdrop
            onClose={() => setShowSettingsModal(false)}
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

      <MdSettings
        role="button-settings"
        className={styles["footer__svg-button--left"]}
        onClick={() => {
          setShowSettingsModal(true), (document.body.style.overflow = "hidden"); // disables page-scrolling
        }}
      />
      <MdAddShoppingCart
        role="button-new-item"
        className={styles["footer__svg-button--right"]}
        onClick={() => {
          setShowCreateNewItemModalAndBackdrop(true),
            (document.body.style.overflow = "hidden"); // disables page-scrolling
        }}
      />
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
