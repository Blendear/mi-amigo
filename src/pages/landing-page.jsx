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
      itemName: "Carrot",
      unitOfMeasurement: "szt.",
      amountCurrent: 3,
      amountMaxExpected: 12,
      repeatability: "Traditional",
      expirationDateDay: "2023-01-01",
      expirationDateTime: "13:13",
      isOpen: false,
      pricesInShops: [
        {
          shopName: "Kaufland",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/6/65/Kaufland_Deutschland.png",
          price: 3.39,
        },
        {
          shopName: "Aldi",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Aldi_Nord_201x_logo.svg/1200px-Aldi_Nord_201x_logo.svg.png",
          price: 6.66,
        },
      ],
      cheapestInThisShop: "Kaufland",
    },

    {
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppSddrPcB7SawpZJbtZnA6C5KqppS7YbGs8MQxzRDvPfqwNJ3Qcuyz7HwaAfq6KDIv9E&usqp=CAU",
      itemName: "Wata",
      unitOfMeasurement: "l",
      amountCurrent: 2,
      amountMaxExpected: 4,
      repeatability: "Traditional",
      expirationDateDay: "2023-02-02",
      expirationDateTime: "14:14",
      isOpen: true,
      pricesInShops: [
        {
          shopName: "Lidl",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lidl-Logo.svg/2048px-Lidl-Logo.svg.png",
          price: 2,
        },
        {
          shopName: "Kaufland",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/6/65/Kaufland_Deutschland.png",
          price: 8.88,
        },
      ],
      cheapestInThisShop: "Lidl",
    },
    {
      imageURL:
        "https://i.etsystatic.com/29643476/r/il/50a04e/3121476700/il_fullxfull.3121476700_ayqm.jpg",
      itemName: "Watamala",
      unitOfMeasurement: "g",
      amountCurrent: 300,
      amountMaxExpected: 400,
      repeatability: "Unique",
      expirationDateDay: "2023-03-03",
      expirationDateTime: "15:15",
      isOpen: false,
      pricesInShops: [
        {
          shopName: "Aldi",
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Aldi_Nord_201x_logo.svg/1200px-Aldi_Nord_201x_logo.svg.png",
          price: 21.37,
        },
      ],
      cheapestInThisShop: "Aldi",
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
