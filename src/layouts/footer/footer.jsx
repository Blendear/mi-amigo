//
//hook1 - stworz historyjke - jak warianty modali operuję etc.
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

import styles from "src/styles/sass/styles-all.module.scss";
// import { Modal, Backdrop } from "../../components/index";

import { useState } from "react";

import Modal from "../../components/Modal";
import Backdrop from "../../components/Backdrop";

import { ItemDetails } from "../../features/add-or-edit-item/index";

const Footer = () => {
  const [showSavingModalAndBackdrop, setShowSavingModalAndBackdrop] =
    useState(false);
  const [
    showCreateNewItemModalAndBackdrop,
    setShowCreateNewItemModalAndBackdrop,
  ] = useState(false);

  return (
    <div className={styles[""]}>
      {showSavingModalAndBackdrop && (
        <>
          {/* 
          //       _._. Modal - variant : information
          */}
          <Modal variant="information">
            <button
              onClick={() => {
                setShowSavingModalAndBackdrop(false);
              }}
            >
              x
            </button>
            <div>Saving to Firestore DB</div>
          </Modal>
          {/* 
          //       _._. Backdrop - - variant : black, 50% opacity
          */}
          <Backdrop
            onClose={() => setShowModalAndBackdrop(false)}
            isStatic={true}
            variant="black-50-opacity"
          />
        </>
      )}

      {showCreateNewItemModalAndBackdrop && (
        <>
          {/* 
          //       _._. Modal - variant : information
          */}
          <Modal variant="information">
            <button
              onClick={() => {
                setShowCreateNewItemModalAndBackdrop(false);
              }}
            >
              x
            </button>
            <ItemDetails isCreatingNewItem={true} />
          </Modal>
          {/* 
          //       _._. Backdrop - - variant : black, 50% opacity
          */}
          <Backdrop
            onClose={() => setShowCreateNewItemModalAndBackdrop(false)}
            isStatic={true}
            variant="black-50-opacity"
          />
        </>
      )}
      <button
        onClick={() => {
          setShowSavingModalAndBackdrop(true);
        }}
      >
        save
      </button>
      <button
        onClick={() => {
          setShowCreateNewItemModalAndBackdrop(true);
        }}
      >
        add item
      </button>
    </div>
  );
};
export default Footer;
