//
//~~ _.  Single item, clickable container - onClick opens "ItemDetails" modal as "variant : edit-item"
//
//       _._. Variant name - "list view" or "create/edit item view", used depending on "does the user see it on the laning page as a list item, or when he tries to create/edit an item?"
//
//       _._. Variant "list-view"
//
//       _._. Variant "create-edit-view"
//
//       _._. Container
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
    "list-view": "a",
    "create-edit-view": "b",
  }[variant] === "a" ? (
    //
    //       _._. Variant "list-view"
    //
    //       _._. Container
    //
    <div
      // className={styles["item-container--list-view"]}
      style={{
        position: "relative",
        height: "auto",
        width: "3rem",
      }}
    >
      {/* /\ jemu daj "position:relative" */}
      <div className={styles["image-styling--list-view"]}>
        {/* /\ jemu daj "position:relative"   &   jemu przypisz classe" */}
        {/* 
          //       _._. Image
          */}
        <Image
          src={`/images/testing/kotlet.png`}
          alt={`nie pyklo zdjecie`}
          height={200}
          width={100}
          layout="responsive"
          objectFit="cover"
        />
        {/* /\ jemu zadnej classy nie dajesz*/}
      </div>

      {/* 
      //       _._. Title
      */}
      <div className={styles["title--list-view"]}>title</div>
      {/* 
      //       _._. Needed amount
      //
      //           _._._. Background - dynamicaly changing color, depending on the "current amount" / "needed amount" ratio
      */}
      <div className={styles["amounts-container--list-view"]}>
        {/* 
        //           _._._. Amount you need to buy (Number, Text) - with unit of measurment
        */}
        <div className={styles["needed-to-buy--list-view"]}>9 szt.</div>
        {/* 
        //           _._._. Current amount in your supplies, at home (Number)
        */}
        <div className={styles["current--list-view"]}>3</div>
        {/* 
        //           _._._. Wanted amount in total
        */}
        <div className={styles["wanted-total--list-view"]}>12</div>
      </div>
    </div>
  ) : (
    //
    //       _._. Variant "create-edit-view"
    //
    //       _._. Container
    //
    <div className={styles["item-container"]}>
      {/* /\ jemu daj "position:relative" */}
      <div className={styles["image-styling"]}>
        {/* /\ jemu daj "position:relative"   &   jemu przypisz classe" */}
        {/* 
          //       _._. Image
          */}
        <Image
          src={`/images/testing/kotlet.png`}
          alt={`nie pyklo zdjecie`}
          height={200}
          width={100}
          layout="responsive"
          objectFit="cover"
        />
        {/* /\ jemu zadnej classy nie dajesz*/}
      </div>
      {/* 
      //       _._. Title
      */}
      <div className={styles["title"]}></div>
      {/* 
      //       _._. Needed amount
      */}
      <div className={styles["amounts-container"]}></div>
    </div>
  );
};
export default SingleItemToBuy;
