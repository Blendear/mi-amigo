//
//
//~~ A.  Historyjka - co rozwiązuję tutaj? - Word'owski rozdział name wklejony
//
//       A.1. Tworzymy dwa <Image> & układamy je chcianym miejscu grid-area dzięki "className"
//
//       A.2. Returnujemy wszystkie /\ do wspólnego HTML elementu & układamy w miejscu grid-area dzięki "className"
//

import Image from "next/image";

import styles from "src/styles/sass/styles-all.module.scss";

const DwieFotyMarketingowe = () => {
  return (
    <h1 className={styles["layout-strona-glowna__foty-marketingowe"]}>
      <div
        className={styles["layout-strona-glowna__foty-marketingowe--lewa-fota"]}
      >
        <Image
          src={`/images/1-strona-glowna/1-2-dwie-foty-marketingowe copy/banner-www-jestesmyotwarci.png`}
          //
          alt={`nie pykło`}
          height="220px"
          width="585px"
        ></Image>
      </div>
      <div
        className={
          styles["layout-strona-glowna__foty-marketingowe--prawa-fota"]
        }
      >
        <Image
          src={`/images/1-strona-glowna/1-2-dwie-foty-marketingowe copy/panel-klienta-tlo2.png`}
          alt={`nie pykło`}
          height="220px"
          width="585px"
        ></Image>
      </div>
    </h1>
  );
};
export default DwieFotyMarketingowe;
