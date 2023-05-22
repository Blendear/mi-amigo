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

import Link from "next/link";

const RozwijaneMenu = ({ pozycjaMenuProperty }) => {
  const [showRozwijaneMenu, setShowRozwijaneMenu] = useState(false);

  console.log(pozycjaMenuProperty);
  const showSubnav = () => setShowRozwijaneMenu(!showRozwijaneMenu);

  return (
    <>
      {/* <Link
        href={pozycjaMenuProperty.path}
        replace
        onClick={pozycjaMenuProperty.subNav && showSubnav}
      >
        <a className={styles["..."]}>
          <div>
            {pozycjaMenuProperty.icon}
            <div>{pozycjaMenuProperty.title}</div>
          </div>
          <div>
            {pozycjaMenuProperty.subNav && showRozwijaneMenu
              ? pozycjaMenuProperty.iconOpened
              : pozycjaMenuProperty.subNav
              ? pozycjaMenuProperty.iconClosed
              : null}
          </div>
        </a>
      </Link> */}
      <div onClick={pozycjaMenuProperty.subNav && showSubnav}>
        {/* <div>
          {pozycjaMenuProperty.icon}
          <div>{pozycjaMenuProperty.title}</div>
        </div> */}

        {/* 
        sss - jeśli pozycja menu MA submenu - wyświetl pozycję jako tekst - INACZEJ jako next'owy Link 
        */}
        <div>
          {!pozycjaMenuProperty.subNav ? (
            <Link href={pozycjaMenuProperty.path} replace>
              <div>
                {pozycjaMenuProperty.icon}
                <div>{pozycjaMenuProperty.title}</div>
              </div>
            </Link>
          ) : (
            <div>
              {pozycjaMenuProperty.icon}
              <div>{pozycjaMenuProperty.title}</div>
            </div>
          )}
        </div>
        {/* 
        sss - jeśli pozycja menu MA submenu - wyświetl STRZALKE gora/dol
        */}
        <div>
          {pozycjaMenuProperty.subNav && showRozwijaneMenu
            ? pozycjaMenuProperty.iconOpened
            : pozycjaMenuProperty.subNav
            ? pozycjaMenuProperty.iconClosed
            : null}
        </div>
      </div>
      {/* 
      sss - jeśli pozycja menu MA submenu - wyświetl to submenu, INACZEJ nic, null return'nij
      */}
      {showRozwijaneMenu &&
        pozycjaMenuProperty.subNav.map(
          (pozycjaRozwijanegoMenu, indexPozycjiRozwijanegoMenu) => {
            return (
              // <div key={indexPozycjiRozwijanegoMenu}>
              //   {pozycjaRozwijanegoMenu.icon}
              //   <div>{pozycjaRozwijanegoMenu.title}</div>
              // </div>
              <div key={indexPozycjiRozwijanegoMenu}>
                <Link href={pozycjaRozwijanegoMenu.path} replace>
                  <div>
                    {pozycjaRozwijanegoMenu.icon}
                    <div>{pozycjaRozwijanegoMenu.title}</div>
                  </div>
                </Link>
              </div>
            );
          }
        )}
    </>
  );
};

export default RozwijaneMenu;
