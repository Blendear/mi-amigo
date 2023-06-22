//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import DynamicWeatherIcon from "./DynamicWeatherIcon";
import Temperature from "./Temperature";
import { useEffect, useState } from "react";
import { getWeatherCurrent } from "../../../utils";

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState({
    main: {
      temp: 29.05,
      feels_like: 29.49,
    },
  });

  useEffect(() => {
    getWeatherCurrent(setWeatherData);
  }, []);

  return (
    <div className={styles["landing-page__weather-container"]}>
      <DynamicWeatherIcon />
      <Temperature temperature={weatherData.main.temp.toFixed(1)} />
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
