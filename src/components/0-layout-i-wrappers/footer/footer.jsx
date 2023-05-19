// //
// //  Footer = Dopisek na dole mojej strony (np. kontakt, copyright etc.)
////
////
////~~ A.  Historyjka - co rozwiązuję tutaj? - Word'owski rozdział name wklejony
////
////       A.1. parent rozdział nr 1
// //
// //           A.1.1. child rozdział nr 1
// //
////~~ B.  Historyjka druga ...
////

// 1. Importujesz componenty         -    Z którego zbudujesz kod tej stornki. NIE piszesz tu całego oryginalnego kodu
// ||
// 1.B. Piszesz już kod oryginalny   -    Bo gdzieś musisz w końcu zacząć go pisac. Nie można dzielić na componenty w nieskończoność
// 2. Containeruję                   -    Tworzę 1 <div> główny i 1 dla każdego fragmentu danej strony
// 3. Style'uję containery           -    Po kolei copy pastujac classy z bliźniaczo nazwanego pliku CSS'owskiego

import styles from "src/styles/sass/styles-all.module.scss";

// import {aComponent, bComponent} from "...COMPONENT folder..."

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
