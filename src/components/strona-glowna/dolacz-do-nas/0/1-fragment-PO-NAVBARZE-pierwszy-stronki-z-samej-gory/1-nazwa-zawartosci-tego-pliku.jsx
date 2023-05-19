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

// import styles from "src/styles/sass/styles-all.module.scss";
// import aComponent from "... Z COMPONENTOWEGO FOLDERU, czyli folderu obok "pages""
// import bComponent from - I I -

// TO JEST Strona glowna najczesciej & wchodiz sie na nia wlasnie slugiem takim,
// jaknazwa fdolderu - tu np. "strona-glowna"
//
// const FragmentAkaComponentDanejStrony = () => {
//   return (
//
//          <div className={`${styles["layout__strona-glowna__cala-strona"]} ${styles["...wyglad..."]}`}>
//
//                  <div className={`${styles["layout__strona-glowna__fragment-1-np-baner-startowy"]} ${styles["...wyglad..."]}`}>
//
//                          <aComponent/>
//                          ||
//                          Kod oryginalny, bo bez sensu go już dalej dzielić na dalsze componenty
//
//
//                  </div>
//
//                  <div className={`${styles["layout__strona-glowna__fragment-2-galeria-carousel"]} ${styles["...wyglad..."]}`}>
//
//                          <bComponent/>
//                          ||
//                          Kod oryginalny, bo bez sensu go już dalej dzielić na dalsze componenty
//
//                  </div>
//          </div>
//
//          )
// };
// export default FragmentAkaComponentDanejStrony;
