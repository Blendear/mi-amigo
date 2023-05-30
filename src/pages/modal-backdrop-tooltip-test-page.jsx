//
//~~ _.  Page for testing the toggling visibility of a Modal with a Backdrop
//
//       _._. Open modal and backdrop (Button) - default behaviour prevented, so that the link doesnt chnge the url
//
//       _._. Modal - variant : information
//
//       _._. Backdrop - - variant : black, 50% opacity
//

import styles from "src/styles/sass/styles-all.module.scss";
import { useState } from "react";

import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";

// hook2 - make the html semantic

const ModalBackdropTooltipTestingPage = () => {
  const [showModalAndBackdrop, setShowModalAndBackdrop] = useState(false);

  const handleCloseClick = (e) => {
    e.preventDefault();
    setShowModalAndBackdrop(false);
  };

  return (
    <div>
      {/*
      //       _._. Open modal and backdrop (Button) - default behaviour prevented, so that the link doesnt chnge the url
      */}
      <button
        onClick={() => {
          setShowModalAndBackdrop(true);
        }}
      >
        Open Modal with Backdrop
      </button>
      {/* 
      //       _._. Modal - variant : information
      */}
      {showModalAndBackdrop && (
        <Modal variant="information">
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
          <h1>Title</h1> <div>Content A</div>
          <div>Content B</div>
        </Modal>
      )}
      {/* 
      //       _._. Backdrop - - variant : black, 50% opacity
      */}
      {showModalAndBackdrop && (
        <Backdrop
          onClose={() => setShowModalAndBackdrop(false)}
          isStatic={false}
          variant="black-50-opacity"
        />
      )}
    </div>
  );
};
export default ModalBackdropTooltipTestingPage;
