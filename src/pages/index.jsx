//
//~~ A.  Historyjka - Zebranie componentów strony głównej w jednym pliku & wyświetlenie wszystkich
//
//       A.1. parent rozdział nr 1
//
//           A.1.1. child rozdział nr 1
//
//~~ B.  Historyjka druga ...
//

import styles from "src/styles/sass/styles-all.module.scss";

import Image from "next/image";

const AComponent = () => {
  return (
    <div className={styles["layout-strona-glowna__cala-strona"]}>
      _app - NIE powinienes widziec tego
    </div>
  );
};
export default AComponent;
