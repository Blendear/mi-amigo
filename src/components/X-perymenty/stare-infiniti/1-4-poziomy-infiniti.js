//
//~~ A.  Historyjka - Dynamiczna list of <Image>
//
//       A.1. array of objects with data o danym image'u
//
//       A.2. Map() po data /\, żeby dla każdego elementu stworzyć <Image> & ułożyć w miejscu grid-area dzięki "className"
//
//       A.3. - | | - /\, ale teraz opisy dla fot
//
//       A.4. Returnujemy wszystkie /\ do wspólnego HTML elementu & układamy w miejscu grid-area dzięki "className"
//

import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";

//
//       A.1. array of objects with data o danym image'u
//

const data = [
  {
    id: 1,
    levelName: "-1",

    fotaPath: "poziom-minus-1",
    classTejFoty: "layout-strona-glowna__poziomy-infiniti-levle--minus-1--fota",
    classOpisuPoziomuDlaTejFoty:
      "layout-strona-glowna__poziomy-infiniti-levle--minus-1--napis",
  },
  {
    id: 1,
    levelName: "0",
    fotaPath: "poziom-0",
    classTejFoty: "layout-strona-glowna__poziomy-infiniti-levle--0--fota",
    classOpisuPoziomuDlaTejFoty:
      "layout-strona-glowna__poziomy-infiniti-levle--0--napis",
  },
  {
    id: 2,
    levelName: "1",
    fotaPath: "poziom-1",
    classTejFoty: "layout-strona-glowna__poziomy-infiniti-levle--1--fota",
    classOpisuPoziomuDlaTejFoty:
      "layout-strona-glowna__poziomy-infiniti-levle--1--napis",
  },
  {
    id: 3,
    levelName: "2",
    fotaPath: "poziom-2",
    classTejFoty: "layout-strona-glowna__poziomy-infiniti-levle--2--fota",
    classOpisuPoziomuDlaTejFoty:
      "layout-strona-glowna__poziomy-infiniti-levle--2--napis",
  },
];

//
//       A.2. Map() po data /\, żeby dla każdego elementu stworzyć <Image> & ułożyć w miejscu grid-area dzięki "className"
//
const MapujemyFoty = data.map((i) => (
  <div key={i.id} className={styles[i.classTejFoty]}>
    <Image
      src={`/images/1-strona-glowna/1-4-poziomy-infiniti/${i.fotaPath}.png`}
      //
      alt={`nie pykło z poziomem ${i.id}`}
      width={70}
      height={60}
    ></Image>
  </div>
));

//
//       A.3. - | | - /\, ale teraz opisy dla fot
//
const MapujemyOpisyDlaFot = data.map((i) => (
  <div key={i.id} className={styles[i.classOpisuPoziomuDlaTejFoty]}>
    {`Poziom ${i.levelName}`}
  </div>
));

//
//       A.4. Returnujemy wszystkie /\ do wspólnego HTML elementu & układamy w miejscu grid-area dzięki "className"
//
const PoziomyInfiniti = () => {
  return (
    <div className={styles["layout-strona-glowna__poziomy-infiniti-levle"]}>
      {MapujemyFoty}
      {MapujemyOpisyDlaFot}
    </div>
  );
};

export default PoziomyInfiniti;
