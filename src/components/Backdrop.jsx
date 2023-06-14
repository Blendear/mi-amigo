//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import ReactDOM from "react-dom";
// hook2 - make the html semantic

const Backdrop = ({ onClose, variant, isStatic }) => {
  const backdropContent = isStatic ? (
    //           _._._. Traditional backdrop - onClick closes the modal
    <aside className={styles[`backdrop--${variant}`]} />
  ) : (
    //           _._._. Static backdrop - onClick doesn't close the modal
    <aside onClick={onClose} className={styles[`backdrop--${variant}`]} />
  );
  //       _._. Portal - needed for putting the component on the top level of HTML <body> element
  return ReactDOM.createPortal(
    backdropContent,
    document.getElementById("backdrop")
  );
};
export default Backdrop;

//
//~~ _.  Backdrop - background behind the modal component
//
//       _._. Backdrop container
//
//           _._._. Traditional backdrop - onClick closes the modal
//
//           _._._. Static backdrop - onClick doesn't close the modal
//
//       _._. Portal - needed for putting the component on the top level of HTML <body> element
//
