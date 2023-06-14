//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import { ColorRing } from "react-loader-spinner";

const LoaderSingle = ({ propA, propB }) => {
  return (
    //       _._. AA
    <div className={styles["container__css-class-name"]}>
      {/* // _._._.AAA */}
      <ColorRing
        className={styles["child__css-class-name"]}
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};
export default LoaderSingle;

//~~ _. A
//
//       _._. AA
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
