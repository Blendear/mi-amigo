//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";
// import { useAppSelector, useAppDispatch } from "../../../store/redux/hooks";
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
  // variant="list-view"
  // itemAlreadyExists={true}
  // itemSingle={item}
  //hook2 - add this redux code to the table of contentd comments
  // const reduxStateImageURL = useAppSelector((state) => state.urlReducer);
  const amountToBuy = itemSingle.amountMaxExpected - itemSingle.amountCurrent;
  const colorOfAmountToBuy =
    itemSingle.amountCurrent > itemSingle.amountMaxExpected * 0.66
      ? "bg-color--success"
      : itemSingle.amountCurrent > itemSingle.amountMaxExpected * 0.15
      ? "bg-color--warning"
      : "bg-color--danger";
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

              <input
                type="text"
                name="itemName"
                value={itemAlreadyExists ? itemSingle.itemName : "Item name"}
                onFocus={handleOnClick}
                className={styles["item-edit-view__title"]}
              ></input>
              {/* ccc */}
              <div
                className={`${styles[`item-edit-view__amounts-container`]} ${
                  styles[`${colorOfAmountToBuy}`]
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
                  {/* {console.log(itemSingle)} */}
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
                // onFocus={handleOnClick}
                className={styles["item-create-or-edit-view__title"]}
              ></input>

              <div
                className={
                  styles["item-create-or-edit-view__amounts-container"]
                }
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
                    defaultValue={
                      itemAlreadyExists ? itemSingle.amountCurrent : "?"
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
                    defaultValue={
                      itemAlreadyExists ? itemSingle.amountMaxExpected : "?"
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
