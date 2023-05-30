//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//

import styles from "src/styles/sass/styles-all.module.scss";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children }) => {
  const modalContent = (
    <div className={styles["modal__overlay"]}>
      <div className={styles["modal-information__container"]}>
        <div className={styles["modal-information__body"]}>{children}</div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById("modal"));
};
export default Modal;
