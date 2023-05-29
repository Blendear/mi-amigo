//

//       _._. Save all current users data, through API html request, to Firestore Database (Button)   &   show current progress of the request
//      hook1 - OR HOW TO CHOOSE ONLY UPDATED DATA? PROPERTY WITH "THIS DATA CONTAINER SHOUDL BE UPDATED - BOOLEAN"
//           _._._. ...
//
//           _._._. ...
//
//           _._._. ...
//
//       _._. Add new item to "myNeededSupplies" (Button, Modal) - onClick opens "ItemDetails" modal as "variant : create-item"
//

import styles from "src/styles/sass/styles-all.module.scss";

const Footer = () => {
  return (
    <div
      className={`${styles["layout__footer__caly-container"]} ${styles["...wyglad..."]}`}
    >
      <div
        className={`${styles["layout__footer__caly-container__fragment-1-np-kontaktowe-info"]} ${styles["...wyglad..."]}`}
      >
        {/* <aComponent/> */}
        FOOTER
      </div>

      <div
        className={`${styles["layout__footer__caly-container__fragment-2-np-ikonki partnerów"]} ${styles["...wyglad..."]}`}
      >
        {/* <bComponent/> */}
      </div>
    </div>
  );
};
export default Footer;
