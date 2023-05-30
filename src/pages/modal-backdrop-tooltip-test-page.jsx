//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//

import styles from "src/styles/sass/styles-all.module.scss";
import { useState } from "react";

import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";

const ModalBackdropTooltipTestingPage = () => {
  const [showModalAndBackdrop, setShowModalAndBackdrop] = useState(false);

  const handleCloseClick = (e) => {
    e.preventDefault();
    setShowModalAndBackdrop(false);
  };

  return (
    <div>
      <button
        onClick={() => {
          setShowModalAndBackdrop(true);
        }}
      >
        Open Modal with Backdrop
      </button>
      {showModalAndBackdrop && (
        <Modal variant="information">
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
          <div>title</div> <div>content a</div>
          <div>content b</div>
        </Modal>
      )}
      {showModalAndBackdrop && (
        <Backdrop
          onClose={() => setShowModalAndBackdrop(false)}
          variant="black-50-opacity"
        />
      )}
    </div>
  );
};
export default ModalBackdropTooltipTestingPage;
