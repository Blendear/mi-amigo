//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//

import styles from "src/styles/sass/styles-all.module.scss";
import ReactDOM from "react-dom";

const Modal = ({ children, variant }) => {
  const modalContent = (
    <aside className={styles["modal__overlay"]}>
      <div className={styles[`modal-${variant}__container`]}>
        <div className={styles["modal-information__body"]}>{children}</div>
      </div>
    </aside>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById("modal"));
};
export default Modal;
