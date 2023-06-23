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

import { MdLocationOff } from "react-icons/md";

const DynamicWeatherIcon = ({ weatherDescription }) => {
  return {
    default: <MdLocationOff size="80%" color="#c08285" />,
    Clear: <TiWeatherSunny size="80%" color="#c08285" />,
    Clouds: <TiWeatherCloudy size="80%" color="#c08285" />,
    Mist: <TiWeatherCloudy size="80%" color="#c08285" />,
    Drizzle: <TiWeatherShower size="80%" color="#c08285" />,
    Rain: <TiWeatherShower size="80%" color="#c08285" />,
    Extreme: <TiWeatherShower size="80%" color="#c08285" />,
    Thunderstorm: <TiWeatherStormy size="80%" color="#c08285" />,
    Snow: <TiWeatherSnow size="80%" color="#c08285" />,
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
