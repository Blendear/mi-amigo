//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//

import styles from "src/styles/sass/styles-all.module.scss";
import ReactDOM from "react-dom";

const Backdrop = ({ onClose, variant }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const backdropContent = (
    <aside
      onClick={handleCloseClick}
      className={styles[`backdrop--${variant}`]}
    />
  );

  return ReactDOM.createPortal(
    backdropContent,
    document.getElementById("backdrop")
  );
};
export default Backdrop;
