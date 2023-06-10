//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import {
  ShopsToVisitGallery,
  ToggleShopsFilterMethodList,
} from "../features/list-of-shops-the-user-needs/index";
// import {} from "../features/current-weather/index";
import { ListOfItemsToBuy } from "../features/list-of-items-to-buy/index";
import { CurrentWeather } from "../features/current-weather/index";
import { useState } from "react";

const LandingPage = () => {
  const [itemsFromDB, setItemsFromDB] = useState([
    {
      imageURL:
        "https://cdn.shopify.com/s/files/1/0266/5817/7121/products/product-image-535342209_grande.jpg?v=1571720057",
      name: "Carrot",
      unitOfMeasurement: "szt.",
      amountCurrent: 3,
      amountMaxExpected: 12,
    },

    {
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppSddrPcB7SawpZJbtZnA6C5KqppS7YbGs8MQxzRDvPfqwNJ3Qcuyz7HwaAfq6KDIv9E&usqp=CAU",
      name: "Wata",
      unitOfMeasurement: "l",
      amountCurrent: 2,
      amountMaxExpected: 4,
    },
    {
      imageURL:
        "https://i.etsystatic.com/29643476/r/il/50a04e/3121476700/il_fullxfull.3121476700_ayqm.jpg",
      name: "Watamala",
      unitOfMeasurement: "g",
      amountCurrent: 300,
      amountMaxExpected: 400,
    },
  ]);
  return (
    <div className={styles["landing-page__container"]}>
      <div className={styles["landing-page__shops-and-weather-container"]}>
        <ToggleShopsFilterMethodList />
        <ShopsToVisitGallery />
        <CurrentWeather />
      </div>
      <ListOfItemsToBuy itemsFromDB={itemsFromDB} />
    </div>
  );
};
export default LandingPage;

//hook2 - add this title to the code \/
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
