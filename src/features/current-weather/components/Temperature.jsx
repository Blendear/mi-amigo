//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";

const Temperature = ({ temperature, isDefault }) => {
  console.log(isDefault);
  return isDefault ? (
    <div style={{ fontSize: "1.25rem", textAlign: "center" }}>
      {"Loading GPS data..."}
    </div>
  ) : (
    <div>{temperature} &#8451; </div>
  );
};
export default Temperature;

//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//
