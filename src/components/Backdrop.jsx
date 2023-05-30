//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//

import styles from "src/styles/sass/styles-all.module.scss";
import ReactDOM from "react-dom";

const Backdrop = ({ onClose, children }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const backdropContent = (
    <div
      onClick={handleCloseClick}
      className={styles["backdrop--black-50-opacity"]}
    >
      {/* {children} */}
    </div>
  );

  return ReactDOM.createPortal(
    backdropContent,
    document.getElementById("backdrop")
  );
};
export default Backdrop;
