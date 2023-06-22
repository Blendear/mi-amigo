//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import DynamicWeatherIcon from "./DynamicWeatherIcon";
import Temperature from "./Temperature";
import { useEffect, useState } from "react";
import { getLocation, getWeatherCurrent } from "../../../utils";

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState({
    main: {
      temp: 29.05,
      feels_like: 29.49,
    },
  });
  const [locationCurrent, setLocationCurrent] = useState({});

  useEffect(() => {
    // console.log("weather");
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${locationCurrent.latitude}&lon=${locationCurrent.longitude}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;
    // hook1 - swap this /\ with this (my own API key)\/, when my API key will be accepted (should be on 23 of June)
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${locationCurrent.latitude}&lon=${locationCurrent.longitude}&appid=079efb8bdec028c18644ef2e63ad721e`;
    // console.log(url);
    getLocation(setLocationCurrent);
    getWeatherCurrent(url, setWeatherData);
  }, []);

  return (
    <div className={styles["landing-page__weather-container"]}>
      <DynamicWeatherIcon />

      <div>{weatherData && weatherData.main.temp.toFixed(1)} &#8451;</div>
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
