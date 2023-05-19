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
import { useState } from "react";

const GodzinyOtwarcia = () => {
  //nazwy kolejnych akordeonów. Kratywnie, ik.
  const [isOpenM, setIsOpenM] = useState(false);
  const [isOpenK, setIsOpenK] = useState(false);
  const [isOpenKoedu, setIsOpenKoedu] = useState(false);

  const handleClick = (ktoryAccordion) => {
    switch (ktoryAccordion) {
      case "M":
        console.log("M");
        setIsOpenM(!isOpenM);
        console.log(isOpenM);

        break;
      case "K":
        console.log("K");
        setIsOpenK(!isOpenK);
        console.log(isOpenK);

        break;
      case "Koedu":
        console.log("Koedu");
        setIsOpenKoedu(!isOpenKoedu);
        console.log(isOpenKoedu);
        break;
    }
  };

  return (
    <h1 className={styles["layout-strona-glowna__godziny-otwarcia"]}>
      <div className={styles["layout-strona-glowna__godziny-otwarcia--sauna"]}>
        <div
          className={
            styles["layout-strona-glowna__godziny-otwarcia--sauna--tytul-napis"]
          }
        >
          SAUNA
        </div>
        <div
          className={
            styles["layout-strona-glowna__godziny-otwarcia--sauna--lista-plci"]
          }
        >
          <div
            className={
              styles[
                "layout-strona-glowna__godziny-otwarcia--sauna--lista-plci--mezczyzni"
              ]
            }
          >
            {/* //hook1 - rozdzial z dodawaniem ikonek - doslownie coy paste z heroicon "copy jsx" */}
            {/* <div onClick={setA(tue)}> /> */}
            {/* hook1 - /\ NIE WYWOLUJESZ w onlcik. tylko podajesz samą nazwę  funkcji. W niej zrobimy wywołanie set statea*/}
            <div className={styles["accordion__trigger-od-niego"]}>
              <svg
                // className={styles["accordion__trigger-od-niego"]}
                onClick={() => {
                  handleClick("M");
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </div>

            <div> | mezczyzni</div>
          </div>
          <div
            className={
              styles[
                `layout-strona-glowna__godziny-otwarcia--sauna--lista-plci--accordion${
                  isOpenM === false ? "--closed" : "--open"
                }`
              ]
            }
          >
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>a</div>
            <div>b</div>
            <div>c</div>
          </div>
          <div
            className={
              styles[
                "layout-strona-glowna__godziny-otwarcia--sauna--lista-plci--kobiety"
              ]
            }
          >
            <div className={styles["accordion__trigger-od-niego"]}>
              <svg
                onClick={() => {
                  handleClick("K");
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </div>
            <div> | kobiety</div>
          </div>
          <div
            className={
              styles[
                `layout-strona-glowna__godziny-otwarcia--sauna--lista-plci--accordion${
                  isOpenK === false ? "--closed" : "--open"
                }`
              ]
            }
          >
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>a</div>
            <div>b</div>
            <div>c</div>
          </div>
          <div
            className={
              styles[
                "layout-strona-glowna__godziny-otwarcia--sauna--lista-plci--koedukacja"
              ]
            }
          >
            <div className={styles["accordion__trigger-od-niego"]}>
              <svg
                onClick={() => {
                  handleClick("Koedu");
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </div>
            <div> | koedukacja</div>
          </div>
          <div
            className={
              styles[
                `layout-strona-glowna__godziny-otwarcia--sauna--lista-plci--accordion${
                  isOpenKoedu === false ? "--closed" : "--open"
                }`
              ]
            }
          >
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>a</div>
            <div>b</div>
            <div>c</div>
          </div>
        </div>
      </div>
      <div
        className={styles["layout-strona-glowna__godziny-otwarcia--klub"]}
      ></div>
    </h1>
  );
};
export default GodzinyOtwarcia;
