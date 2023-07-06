//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import ReactDOM from "react-dom";
// hook2 - make the html semantic

const Modal = ({ children, variant }) => {
  const modalContent = (
    //       _._. Overlay - for positioning the container in the middle (easy way)
    <aside className={styles["modal__overlay"]}>
      {/* //       _._. Container (empty) & Custom body - content is taken from the parent, through the "children" prop*/}
      <div className={styles[`modal-${variant}__container`]}>{children}</div>
    </aside>
  );
  //       _._. Portal - needed for putting the component on the top level of HTML <body> element
  return ReactDOM.createPortal(modalContent, document.getElementById("modal"));
};
export default Modal;

//
//~~ _.  Modal
//
//       _._. Portal - needed for putting the component on the top level of HTML <body> element
//
//       _._. Overlay - for positioning the container in the middle (easy way)
//
//       _._. Container (empty) & Custom body - content is taken from the parent, through the "children" prop
//

// how to test this modal with jest
// https://stackoverflow.com/questions/58017801/how-to-test-react-portals-with-jest-and-enzyme
