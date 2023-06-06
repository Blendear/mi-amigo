//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "../../../store/redux/hooks";

const SingleItemToBuy = ({ variant, itemID }) => {
  //hook2 - add this redux code to the table of contentd comments
  const reduxStateImageURL = useAppSelector((state) => state.urlReducer);

  return {
    //       _._. Variant name - "list view" or "create/edit item view", used depending on "does the user see it on the laning page as a list item, or when he tries to create/edit an item?"
    //           _._._. Variant : "list-view"
    "list-view": (
      <>
        <div className={styles["item-edit-view__img"]}>
          <Image
            src={reduxStateImageURL.photoPlaceholderURL}
            alt={`nie pyklo zdjecie`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles["item-edit-view__title"]}>title</div>
        <div className={styles["item-edit-view__amounts-container"]}>
          <div className={styles["item-edit-view__amount-to-buy"]}>9 </div>
          <div className={styles["item-edit-view__unit-of-measurment"]}>
            szt.
          </div>
          <div className={styles["item-edit-view__amount-current"]}>3</div>
          <div className={styles["item-edit-view__slash-divider"]}>/</div>
          <div className={styles["item-edit-view__amount-wanted"]}>12</div>
        </div>
      </>
    ),
    //           _._._. Variant : "create-edit-view"
    "create-or-edit-view": (
      <>
        <div className={styles["item-create-or-edit-view__img"]}>
          <Image
            src={reduxStateImageURL.photoPlaceholderURL}
            alt={`nie pyklo zdjecie`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles["item-create-or-edit-view__title"]}>title</div>
        <div className={styles["item-create-or-edit-view__amounts-container"]}>
          <div className={styles["item-create-or-edit-view__amount-to-buy"]}>
            9
          </div>
          <div
            className={styles["item-create-or-edit-view__unit-of-measurment"]}
          >
            szt.
          </div>
          <div className={styles["item-create-or-edit-view__amount-current"]}>
            3
          </div>
          <div className={styles["item-create-or-edit-view__slash-divider"]}>
            /
          </div>
          <div className={styles["item-create-or-edit-view__amount-wanted"]}>
            12
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
