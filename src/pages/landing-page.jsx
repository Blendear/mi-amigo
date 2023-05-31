//
//~~ _.  Which items, in which shops, with which weather preparation do I need to buy
//
//       _._. Which shops do I need to visit
//
//           _._._. Choose method for filtering which shops you need to visit (Buttons)
//
//           _._._. Choose "active shop" from a iterable list of recommended (Left/Right Buttons, Image) - shop list depends on the chosen method   &   the "cheapestAt" and "existsInThisShops" properties on every item in "myNeededSupplies"
//
//       _._. To which weather conditions do I need to prepare myself (clothes / way of transportation)
//       hook1 - KIEDY SIE ODNAWIA REQUEST? ON START APPKI?
//           _._._. GET http request to API - which returns data about current weather in a location set in the settings (default "Wrocław - Poland")
//
//           _._._. Format requested weather data to return and save only : temperature, wind strength, rain chance and cloudiness
//
//           _._._. Show icon and temperature - adequate to intepreted weather data
//
//       _._. List of items to buy in the currently active shop || all shops - depends on the chosen image
//

import styles from "src/styles/sass/styles-all.module.scss";
import {
  ShopsToVisitGallery,
  ShopToVisitSingle,
  ToggleShopsFilterMethodList,
  ToggleShopsFilterMethodSingle,
} from "../features/list-of-shops-the-user-needs/index";

const LandingPage = () => {
  return (
    <div className={styles["container"]}>
      <ShopsToVisitGallery />
    </div>
  );
};
export default LandingPage;
