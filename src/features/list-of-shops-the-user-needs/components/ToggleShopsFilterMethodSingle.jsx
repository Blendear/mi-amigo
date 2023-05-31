//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
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
