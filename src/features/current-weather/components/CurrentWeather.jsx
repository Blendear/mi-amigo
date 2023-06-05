//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import DynamicWeatherIcon from "./DynamicWeatherIcon";
import Temperature from "./Temperature";
const CurrentWeather = () => {
  return (
    <div className={styles["landing-page__weather-container"]}>
      <DynamicWeatherIcon />
      <Temperature />
    </div>
  );
};
export default CurrentWeather;

//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//
