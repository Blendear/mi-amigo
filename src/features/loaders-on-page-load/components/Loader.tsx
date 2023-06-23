//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import { ColorRing } from "react-loader-spinner";
import { LoaderProps } from "../types/index";

const Loader = ({ loadingState }: LoaderProps) => {
  return (
    //       _._. AA
    <div className={styles["loader__container"]}>
      {/* // _._._.AAA */}
      {
        {
          fetching: (
            <>
              <h1>{`Step 1 out of 2`}</h1>
              <h2>{`Loading Your items...`}</h2>
            </>
          ),
          filtering: (
            <>
              <h1>{`Step 2 out of 2`}</h1>
              <h2>{`Creating cheap and quick shopping variants...`}</h2>
            </>
          ),
        }[loadingState]
      }

      <ColorRing
        visible={true}
        height="20rem"
        width="20rem"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#d17676", "#f47e60", "#f8b26a", "#9ed176", "#849b87"]}
      />
    </div>
  );
};
export default Loader;

//~~ _. Modal with a loader, which will appear on top of the future "ListOfItems" (at a higher z-index)
//
//       _._. AA
//
//       _._. AA
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
