//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";

import {
  TiWeatherSunny,
  TiWeatherPartlySunny,
  TiWeatherCloudy,
  TiWeatherShower,
  TiWeatherStormy,
  TiWeatherSnow,
} from "react-icons/ti";

const DynamicWeatherIcon = ({ weatherDescription }) => {
  return {
    "clear sky": <TiWeatherSunny size="80%" color="#c08285" />,
    "few clouds": <TiWeatherPartlySunny size="80%" color="#c08285" />,
    "scattered clouds": <TiWeatherCloudy size="80%" color="#c08285" />,
    "broken clouds": <TiWeatherCloudy size="80%" color="#c08285" />,
    "shower rain": <TiWeatherShower size="80%" color="#c08285" />,
    rain: <TiWeatherShower size="80%" color="#c08285" />,
    thunderstorm: <TiWeatherStormy size="80%" color="#c08285" />,
    snow: <TiWeatherSnow size="80%" color="#c08285" />,
    mist: <TiWeatherCloudy size="80%" color="#c08285" />,
  }[weatherDescription];
};
export default DynamicWeatherIcon;

//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//
