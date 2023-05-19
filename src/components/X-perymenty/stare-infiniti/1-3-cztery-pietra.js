//
//
//~~ A.  Historyjka - co rozwiązuję tutaj? - Word'owski rozdział name wklejony
//
//       A.1. parent rozdział nr 1
//
//           A.1.1. child rozdział nr 1
//
//~~ B.  Historyjka druga ...
//

import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";

const CzteryPietra = () => {
  return (
    <h1
      className={styles["layout-strona-glowna__poziomy-infiniti-tytul-gorny"]}
    >
      <div
        className={
          styles[
            "layout-strona-glowna__poziomy-infiniti-tytul-gorny--pattern-w-tle-lewy"
          ]
        }
      ></div>
      <div
        className={
          styles["layout-strona-glowna__poziomy-infiniti-tytul-gorny--napis"]
        }
      >
        4 PIĘTRA PEŁNE WRAŻEŃ
      </div>
      <div
        className={
          styles[
            "layout-strona-glowna__poziomy-infiniti-tytul-gorny--pattern-w-tle-prawy"
          ]
        }
      ></div>
    </h1>
  );
};
export default CzteryPietra;
