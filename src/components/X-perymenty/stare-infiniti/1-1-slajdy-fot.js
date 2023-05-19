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
import StronaZAnimacjaRTG from "../../pages/X-perymenty/X-peryment-animacji-1";

const SlajdyFot = () => {
  return <StronaZAnimacjaRTG />;
  // <h1
  //   className={
  //     styles["layout-strona-glowna__animowany-slide-in-fot-infiniti"]
  //   }
  // >

  {
    /* <div
        className={
          styles[
            "layout-strona-glowna__animowany-slide-in-fot-infiniti--miejsce-na-foty"
          ]
        }
      > */
  }

  {
    /* <Image
        src={`/images/1-strona-glowna/1-1-slajdy-fot/slide-6.jpg`}
        alt={`nie pykło`}
        layout="fill"
        objectFit="cover"
      ></Image> */
  }
  {
    /* </div> */
  }
  // </h1>
};
export default SlajdyFot;
