//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import {
  ShopsToVisitGallery,
  ToggleShopsFilterMethodList,
} from "../features/list-of-shops-the-user-needs/index";
import { ListOfItemsToBuy } from "../features/list-of-items-to-buy/index";
import { CurrentWeather } from "../features/current-weather/index";
import { useState, useEffect } from "react";
import getAllDocumentsFromColl from "../utils/get-all-docs-from-coll-from-DB";
import { Loader } from "../features/loaders-on-page-load";
import { useUser } from "@auth0/nextjs-auth0/client";
import { GreetUser } from "../features/greet-user-personally";

const LandingPage = () => {
  const { user, isLoading } = useUser();
  const [loadingState, setLoadingState] = useState("fetching");
  const [allItemsFromDB, setAllItemsFromDB] = useState([]);

  useEffect(() => {
    console.log("useEffect started");
    const getItemsFromDB = async () => {
      const itemsFromDB = await getAllDocumentsFromColl(setLoadingState);
      console.log("useEffect gave us this items: ", itemsFromDB.data);
      setAllItemsFromDB(itemsFromDB.data);
    };
    getItemsFromDB();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {user && (
        <div className={styles["landing-page__container"]}>
          <GreetUser user={user} />
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
      )}
    </>
  );
};
export default LandingPage;

//
//~~ _.  Which items, in which shops, with which weather preparation do I need to buy
//
