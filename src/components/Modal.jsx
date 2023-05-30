//
//~~ _.  Modal
//
//       _._. Portal - needed for putting the component on the top level of HTML <body> element
//
//       _._. Overlay - for positioning the container in the middle (easy way)
//
//       _._. Container (empty) & Custom body - content is taken from the parent, through the "children" prop
//

// hook2 - make the html semantic

import styles from "src/styles/sass/styles-all.module.scss";
import ReactDOM from "react-dom";

const Modal = ({ children, variant }) => {
  const modalContent = (
    //
    //       _._. Overlay - for positioning the container in the middle (easy way)
    //
    <aside className={styles["modal__overlay"]}>
      {/* 
      //       _._. Container (empty) & Custom body - content is taken from the parent, through the "children" prop
      */}
      <div className={styles[`modal-${variant}__container`]}>
        <div className={styles["modal-information__body"]}>{children}</div>
      </div>
    </aside>
  );
  //
  //       _._. Portal - needed for putting the component on the top level of HTML <body> element
  //
  return ReactDOM.createPortal(modalContent, document.getElementById("modal"));
};
export default Modal;
