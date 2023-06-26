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
import { useState, useEffect } from "react";
import getAllDocumentsFromColl from "../utils/get-all-docs-from-coll-from-DB";
import { Loader } from "../features/loaders-on-page-load";
import { db } from "../features/authentication/lib/init-firebase";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

const LandingPage = () => {
  const [loadingState, setLoadingState] = useState("fetching");
  const [allItemsFromDB, setAllItemsFromDB] = useState([]);

  const [filterCurrent, setFilterCurrent] = useState("");
  // itemSingle.amountCurrent > itemSingle.amountMaxExpected * 0.66
  //hook2 - add to table fo content
  useEffect(() => {
    console.log("useEffect started");

    // protip1 - IT WORKS. You NEED to :
    //
    // 1. Create and run an async function (async, so that we can use await in a second), which...
    //
    // 2. ... AWAITS and, afterwards, saves the return of the actual fetch function (imported from outside of thsi file, for clean code)
    //
    // 3. And you NEED TO RETURN T W I C E - One for returning the whole fetch function & Second for returning the data inside a "then" INSIDE the fetch function
    const getItemsFromDB = async () => {
      const itemsFromDB = await getAllDocumentsFromColl(setLoadingState);
      console.log("useEffect gave us this items: ", itemsFromDB.data);
      setAllItemsFromDB(itemsFromDB.data);
    };
    getItemsFromDB();
  }, []);

  return (
    <div className={styles["landing-page__container"]}>
      <div className={styles["landing-page__shops-and-weather-container"]}>
        <ToggleShopsFilterMethodList />
        <ShopsToVisitGallery />
        <CurrentWeather />
      </div>
      {
        {
          fetching: <Loader />,
          finished: <ListOfItemsToBuy itemsFromDB={allItemsFromDB} />,
        }[loadingState]
      }
    </div>
  );
};
export default LandingPage;

//hook2 - add this title to the code \/
//
//~~ _.  Which items, in which shops, with which weather preparation do I need to buy
//
//       _._. Loader - hidden after item data is fetched
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
