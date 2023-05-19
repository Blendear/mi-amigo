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

const EfitnessStronaGlowna = () => {
  return (
    <h1 className={styles["layout-strona-glowna__efitness-app"]}>
      <div
        className={
          styles["layout-strona-glowna__efitness-app--prawa-fota--opis-tytul"]
        }
      >
        <div>ZAPISUJ SIĘ NA ZAJĘCIA DZIĘKI APLIKACJI MOBILNEJ EFITNESS APP</div>
        <ul
          className={
            styles[
              "layout-strona-glowna__efitness-app--prawa-fota--opis-punkty"
            ]
          }
        >
          <li style={{ paddingTop: "10px" }}>
            &#8226; Czytelny grafik zajęć i łatwe wyszukiwanie według typu zajęć
            lub instruktora
          </li>
          <li style={{ paddingTop: "10px" }}>
            &#8226; Płatności bezgotówkowe - możecie opłacić swój karnet w
            każdej chwili
          </li>
          <li style={{ paddingTop: "10px" }}>
            &#8226; Widoczne postępy - możecie obserwować liczbę swoich wizyt i
            czasu spędzonego w klubie oraz śledzić swoje postępy treningów
          </li>
        </ul>
      </div>
      <div
        className={
          styles["layout-strona-glowna__efitness-app--prawa-fota--app-store"]
        }
      >
        <Image
          src={`/images/1-strona-glowna/1-5-efitness/appstore.png`}
          //
          alt={`nie pykło`}
          width={200}
          height={72}
        ></Image>
      </div>
      <div
        className={
          styles["layout-strona-glowna__efitness-app--prawa-fota--google"]
        }
      >
        <Image
          src={`/images/1-strona-glowna/1-5-efitness/google.png`}
          alt={`nie pykło`}
          width={200}
          height={72}
        ></Image>
      </div>
      <div
        className={
          styles["layout-strona-glowna__efitness-app--lewa-fota--telefony"]
        }
      >
        <Image
          src={`/images/1-strona-glowna/1-5-efitness/eFitness-system-aplikacja-mobilna-klub-fitness.png`}
          alt={`nie pykło`}
          width={1080}
          height={1204}
        ></Image>
      </div>
      <div className={styles["layout-strona-glowna__efitness-app--tlo"]}>
        <Image
          src={`/images/1-strona-glowna/1-5-efitness/tlo-pattern.png`}
          alt={`nie pykło`}
          layout="fill"
          objectFit="contain"
        ></Image>
      </div>
    </h1>
  );
};
export default EfitnessStronaGlowna;
