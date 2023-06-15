//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";

const ToggleShopsFilterMethodSingle = ({ isActive, title }) => {
  return (
    <button className={styles[`${isActive ? "btn--active" : "btn-disabled"}`]}>
      {title}
    </button>
  );
};
export default ToggleShopsFilterMethodSingle;

//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//
