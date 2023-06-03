//
//~~ _.  Single item, clickable container - onClick opens "ItemDetails" modal as "variant : edit-item"
//
//       _._. Variant name - "list view" or "create/edit item view", used depending on "does the user see it on the laning page as a list item, or when he tries to create/edit an item?"
//
//       _._. Variant "list-view"
//
//       _._. Variant "create-edit-view"
//
//       _._. Image
//
//       _._. Title
//
//       _._. Needed amount
//
//           _._._. Background - dynamicaly changing color, depending on the "current amount" / "needed amount" ratio
//
//           _._._. Amount you need to buy (Number, Text) - with unit of measurment
//
//           _._._. Current amount in your supplies, at home (Number)
//
//           _._._. Wanted amount in total
//

import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";
const SingleItemToBuy = ({ variant }) => {
  //
  //       _._. Variant name - "list view" or "create/edit item view", used depending on "does the user see it on the laning page as a list item, or when he tries to create/edit an item?"
  //
  return {
    //
    "list-view": (
      //       _._. Variant "list-view"
      //

      <>
        <div className={styles["item-edit-view__img"]}>
          {/* 
          //       _._. Image
          */}
          <Image
            src={`/images/testing/kotlet.png`}
            alt={`nie pyklo zdjecie`}
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* 
      //       _._. Title
      */}
        <div className={styles["item-edit-view__title"]}>title</div>
        {/* 
      //       _._. Needed amount
      //
      //           _._._. Background - dynamicaly changing color, depending on the "current amount" / "needed amount" ratio
      */}
        <div className={styles["item-edit-view__amounts-container"]}>
          {/* 
        //           _._._. Amount you need to buy (Number, Text) - with unit of measurment
        */}
          <div className={styles["item-edit-view__amount-to-buy"]}>9 szt.</div>
          {/* 
        //           _._._. Current amount in your supplies, at home (Number)
        */}
          <div className={styles["item-edit-view__amount-current"]}>3</div>
          <div className={styles["item-edit-view__slash-divider"]}>/</div>
          {/* 
        //           _._._. Wanted amount in total
        */}
          <div className={styles["item-edit-view__amount-wanted"]}>12</div>
        </div>
      </>
    ),
    //
    "create-or-edit-view": (
      //       _._. Variant "create-edit-view"
      //
      //       _._. Container
      //
      <>
        <div className={styles["item-create-or-edit-view__img"]}>
          {/* 
          //       _._. Image
          */}
          <Image
            src={`/images/testing/kotlet.png`}
            alt={`nie pyklo zdjecie`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* 
      //       _._. Title
      */}
        <div className={styles["item-create-or-edit-view__title"]}>title</div>
        {/* 
      //       _._. Needed amount
      //
      //           _._._. Background - dynamicaly changing color, depending on the "current amount" / "needed amount" ratio
      */}
        <div className={styles["item-create-or-edit-view__amounts-container"]}>
          {/* 
        //           _._._. Amount you need to buy (Number, Text) - with unit of measurment
        */}
          <div className={styles["item-create-or-edit-view__amount-to-buy"]}>
            9 szt.
          </div>
          {/* 
        //           _._._. Current amount in your supplies, at home (Number)
        */}
          <div className={styles["item-create-or-edit-view__amount-current"]}>
            3
          </div>
          <div className={styles["item-create-or-edit-view__slash-divider"]}>
            /
          </div>
          {/* 
        //           _._._. Wanted amount in total
        */}
          <div className={styles["item-create-or-edit-view__amount-wanted"]}>
            12
          </div>
        </div>
      </>
    ),
  }[variant];
};
export default SingleItemToBuy;
