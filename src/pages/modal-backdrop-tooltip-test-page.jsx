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
        <Modal
          onClose={() => setShowModalAndBackdrop(false)}
          variant="information"
        >
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
