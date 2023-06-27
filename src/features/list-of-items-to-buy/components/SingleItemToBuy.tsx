//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";
import { SingleItemProps } from "..";

const placeholderImageURL: string =
  "https://www.bjcconnect.com.au/hubfs/Placeholder%20Square.png";
//hook2 - /\ add it to the table of  contents later

const SingleItemToBuy = ({
  variant,
  itemAlreadyExists,
  itemSingle,
  handleOnClick,
}: SingleItemProps) => {
  //
  const amountToBuy =
    itemAlreadyExists &&
    (itemSingle.amountMaxExpected - itemSingle.amountCurrent < 0
      ? 0
      : itemSingle.amountMaxExpected - itemSingle.amountCurrent);

  //hook1 - remake this, because i have two nearly the same copies of JSX below. maybe its cleaner to waytch, bot iuts not DRY code
  return (
    <>
      {
        {
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
                  src={
                    itemAlreadyExists
                      ? itemSingle.imageURL
                      : placeholderImageURL
                  }
                  alt={`can't load image`}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPs+3j4PwAHmgNDkGNxigAAAABJRU5ErkJggg==" //hook2 - write this down, sweet placeholder technique
                />
              </button>

              <div
                // type="text"
                // name="itemName"
                // value={itemAlreadyExists ? itemSingle.itemName : "Item name"}
                onClick={handleOnClick}
                className={styles["item-edit-view__title"]}
              >
                {itemAlreadyExists ? itemSingle.itemName : "Item name"}
              </div>

              <div
                className={`${styles[`item-edit-view__amounts-container`]} ${
                  styles[`${itemSingle.colorOfCurrentAmount}`]
                }`}
              >
                <div className={styles["item-edit-view__amount-to-buy"]}>
                  <div
                    className={styles["item-edit-view__amount-to-buy__number"]}
                  >
                    {itemAlreadyExists ? amountToBuy : "?"}
                  </div>
                  <div
                    className={
                      styles[
                        "item-edit-view__amount-to-buy__unit-of-measurment"
                      ]
                    }
                  >
                    {itemAlreadyExists ? itemSingle.unitOfMeasurement : ""}
                  </div>
                </div>
                <div
                  className={
                    styles["item-edit-view__amount-current-and-expected"]
                  }
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
                  src={
                    itemAlreadyExists
                      ? itemSingle.imageURL
                      : placeholderImageURL
                  }
                  alt={`can't load image`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <input
                type="text"
                name="itemName"
                defaultValue={
                  itemAlreadyExists ? itemSingle.itemName : "Item name"
                }
                className={styles["item-create-or-edit-view__title"]}
              ></input>
              <div
                className={`${
                  styles[`item-create-or-edit-view__amounts-container`]
                } ${
                  styles[
                    `${
                      itemAlreadyExists
                        ? itemSingle.colorOfCurrentAmount
                        : "bg-color--success"
                    }`
                  ]
                }`}
              >
                <div
                  className={styles["item-create-or-edit-view__amount-to-buy"]}
                >
                  <div
                    className={
                      styles["item-create-or-edit-view__amount-to-buy__number"]
                    }
                  >
                    {itemAlreadyExists ? amountToBuy : "?"}
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
                    styles[
                      "item-create-or-edit-view__amount-current-and-expected"
                    ]
                  }
                >
                  <input
                    name="amountCurrent"
                    placeholder="?"
                    defaultValue={
                      itemAlreadyExists ? itemSingle.amountCurrent : ""
                    }
                    className={
                      styles[
                        "item-create-or-edit-view__amount-current-and-expected__current"
                      ]
                    }
                  ></input>
                  <div>/</div>
                  <input
                    name="amountMaxExpected"
                    placeholder="?"
                    defaultValue={
                      itemAlreadyExists ? itemSingle.amountMaxExpected : ""
                    }
                    className={
                      styles[
                        "item-create-or-edit-view__amount-current-and-expected__expected"
                      ]
                    }
                  ></input>
                </div>
              </div>
            </>
          ),
        }[variant]
      }
    </>
  );
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
