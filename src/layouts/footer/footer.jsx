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

const Footer = () => {
  const [showSavingModalAndBackdrop, setShowSavingModalAndBackdrop] =
    useState(false);
  const [
    showCreateNewItemModalAndBackdrop,
    setShowCreateNewItemModalAndBackdrop,
  ] = useState(false);
  // hook1 - WHY DOES EVENT NOT EXIST NAGLE. BO CHCE DO HANDLEONCLICK PODAC "SAVE" ALBO "CREATE", A NAGLE WYWLAA, ZE "E" NIE ISTNIEJE. A DZIAŁĄŁO
  const handleCloseClick = (e) => {
    e.preventDefault();

    if (closeThisModal === "a") {
      setShowSavingModalAndBackdrop(false);
    }
  };

  return (
    <div className={styles[""]}>
      {showSavingModalAndBackdrop && (
        <>
          {/* 
          //       _._. Modal - variant : information
          */}
          <Modal variant="information">
            <a
              href="#"
              onClick={() => {
                handleCloseClick();
              }}
            >
              x
            </a>
            <h1>Title</h1> <div>Content A</div>
            <div>Content B</div>
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
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
            <h1>Title</h1> <div>Content A</div>
            <div>Content B</div>
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
