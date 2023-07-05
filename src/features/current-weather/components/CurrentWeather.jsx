import styles from "src/styles/sass/styles-all.module.scss";
import DynamicWeatherIcon from "./DynamicWeatherIcon";
import Temperature from "./Temperature";
import { useEffect, useState } from "react";
import { getWeatherCurrent } from "../../../utils";

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState({
    isDefault: true,
    main: {
      temp: 0.0,
      feels_like: 0.0,
    },
    weather: [{ description: "default" }],
  }); // placeholder, needed before the actual data gets fetched

  useEffect(() => {
    getWeatherCurrent(setWeatherData);
  }, []);

  return (
    <div className={styles["landing-page__weather-container"]}>
      <DynamicWeatherIcon
        weatherDescription={
          weatherData.isDefault
            ? weatherData.weather[0].description
            : weatherData.weather[0].main
        }
      />

      <Temperature
        temperature={weatherData.main.temp.toFixed(1)}
        isDefault={weatherData.isDefault ? true : false}
      />
    </div>
  );
};
export default CurrentWeather;

//~~ _.  To which weather conditions do I need to prepare myself (clothes / way of transportation)
