//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "../../../store/redux/hooks";

const placeholderImageURL =
  "https://www.bjcconnect.com.au/hubfs/Placeholder%20Square.png";
//hook2 - /\ add it to the table of  contents later

const SingleItemToBuy = ({
  variant,
  itemAlreadyExists,
  itemSingle,
  handleOnClick,
}) => {
  //hook2 - add this redux code to the table of contentd comments
  const reduxStateImageURL = useAppSelector((state) => state.urlReducer);

  //hook1 - remake this, because i have two nearly the same copies of JSX below. maybe its cleaner to waytch, bot iuts not DRY code
  return {
    //       _._. Variant name - "list view" or "create/edit item view", used depending on "does the user see it on the laning page as a list item, or when he tries to create/edit an item?"
    //           _._._. Variant : "list-view"
    "list-view": (
      <>
        {/* hook2 - change "item-edit-view" to "item-list-view". i misspelled the name at the beginning */}

        <button
          onFocus={handleOnClick}
          className={styles["item-edit-view__img"]}
        >
          <Image
            src={itemAlreadyExists ? itemSingle.imageURL : placeholderImageURL}
            alt={`nie pyklo zdjecie`}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPs+3j4PwAHmgNDkGNxigAAAABJRU5ErkJggg==" //hook2 - write this down, sweet placeholder technique
          />
        </button>

        <button className={styles["item-edit-view__title"]}>
          {itemAlreadyExists ? itemSingle.name : "Item name"}
        </button>
        <div className={styles["item-edit-view__amounts-container"]}>
          <div className={styles["item-edit-view__amount-to-buy"]}>
            <div className={styles["item-edit-view__amount-to-buy__number"]}>
              {itemAlreadyExists
                ? itemSingle.amountMaxExpected - itemSingle.amountCurrent
                : "?"}
            </div>
            <div
              className={
                styles["item-edit-view__amount-to-buy__unit-of-measurment"]
              }
            >
              {itemAlreadyExists ? itemSingle.unitOfMeasurement : ""}
            </div>
          </div>
          <div
            className={styles["item-edit-view__amount-current-and-expected"]}
          >
            {itemAlreadyExists ? itemSingle.amountCurrent : "?"}
            {" / "}
            {itemAlreadyExists ? itemSingle.amountMaxExpected : "?"}
          </div>
        </div>
      </>
    ),
    //           _._._. Variant : "create-edit-view"
    "create-or-edit-view": (
      <>
        <div className={styles["item-create-or-edit-view__img"]}>
          <Image
            src={itemAlreadyExists ? itemSingle.imageURL : placeholderImageURL}
            alt={`nie pyklo zdjecie`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles["item-create-or-edit-view__title"]}>
          {itemAlreadyExists ? itemSingle.name : "Item name"}
        </div>
        <div className={styles["item-create-or-edit-view__amounts-container"]}>
          <div className={styles["item-create-or-edit-view__amount-to-buy"]}>
            <div
              className={
                styles["item-create-or-edit-view__amount-to-buy__number"]
              }
            >
              {itemAlreadyExists
                ? itemSingle.amountMaxExpected - itemSingle.amountCurrent
                : "?"}
            </div>
            <div
              className={
                styles[
                  "item-create-or-edit-view__amount-to-buy__unit-of-measurment"
                ]
              }
            >
              {itemAlreadyExists ? itemSingle.unitOfMeasurement : ""}
            </div>
          </div>
          <div
            className={
              styles["item-create-or-edit-view__amount-current-and-expected"]
            }
          >
            {itemAlreadyExists ? itemSingle.amountCurrent : "?"}
            {" / "}
            {itemAlreadyExists ? itemSingle.amountMaxExpected : "?"}
          </div>
        </div>
      </>
    ),
  }[variant];
};
export default SingleItemToBuy;

//hook1 - add geting the data from reduxm, which takes the data from firestore
//
//~~ _.  Single item, clickable container (visible as variant "list-view" at the start) - onClick opens "ItemDetails" modal, changing the variant to "edit-item"
//
//       _._. Variant name - "list view" or "create/edit item view", used depending on "does the user see it on the laning page as a list item, or when he tries to create/edit an item?"
//
//           _._._. Variant : "list-view"
//
//           _._._. Variant : "create-edit-view"
//
