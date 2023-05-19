//
//  Navbar = Nawigacja (np. na górze ekranu) mojej strony
//
//~~ A.  Wizual - Ikonki i nazwy w menu głównym   &   Rozwijane Menu
//
//
//       A.-1. Conditional pokazywany / hideowany
//
//            A.-1.0. Upozycjonowanie ikonek
//
//            A.-1.1. Widoczny = Ikonka "|||"   &   stwórz prostokąt z miejscami na menu główne
//
//            A.-1.2. Niewidoczny = Ikonka "X"   &   hide prostokat z miejscami na menu główne
//
//       A.0. | | | - ikonka do rozwinięcia menu
//
//       A.1. Menu główne & (Opconalne) Poszczególne rozwijane menu'sy - ikona i nazwa > podikony i podnazwy
//
//            A.1.1. Import
//
//            A.1.2. Użycie
//
//~~ B.  Data - jakie ikony, nazwy, do jakiej pozycji w menu
//
//       B.1. Import

import styles from "src/styles/sass/styles-all.module.scss";
import { useState } from "react";

//            A.1.1. Import
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";

//       B.1. Import
import { navbarData } from "./navbarData";

//            A.1.1. Import
import RozwijaneMenu from "./RozwijaneMenu";

const Navbar = () => {
  const [navbarWidoczny, setnavbarWidoczny] = useState(false);

  const handlerShowNavbar = () => {
    console.log({ navbarWidoczny });
    setnavbarWidoczny(!navbarWidoczny);
  };

  return (
    <nav></nav>

    // wyłącozne, dopóki nie ustawie gridu layoutu całego
    // ogarne navbar visual na koniec

    //

    // <nav className={styles["layout-strona-glowna__navbar-gorny"]}>
    //   {/*
    //   //            A.-1.0. Upozycjonowanie ikonek
    //   */}
    //   {/*
    //   //            A.-1.1. Widoczny = Ikonka "|||"   &   stwórz prostokąt z miejscami na menu główne
    //   */}
    //   <button
    //     className={
    //       navbarWidoczny
    //         ? styles["layout-strona-glowna__navbar-gorny__III--open"]
    //         : styles["layout-strona-glowna__navbar-gorny__III--closed"]
    //     }
    //     onClick={handlerShowNavbar}
    //   >
    //     <FaIcons.FaBars />
    //   </button>
    //   {/*
    //   //            A.-1.2. Niewidoczny = Ikonka "X"   &   hide prostokat z miejscami na menu główne
    //   */}
    //   <button
    //     className={
    //       !navbarWidoczny
    //         ? styles["layout-strona-glowna__navbar-gorny__X--open"]
    //         : styles["layout-strona-glowna__navbar-gorny__X--closed"]
    //     }
    //     onClick={handlerShowNavbar}
    //   >
    //     <AiIcons.AiOutlineClose />
    //   </button>

    //   {/*
    //   //       A.1. Menu główne & (Opconalne) Poszczególne rozwijane menu'sy - ikona i nazwa > podikony i podnazwy
    //   */}
    //   {navbarData.map((pozycjaMenu, indexPozycjiMenu) => {
    //     return (
    //       <RozwijaneMenu
    //         pozycjaMenuProperty={pozycjaMenu}
    //         key={indexPozycjiMenu}
    //       />
    //     );
    //   })}
    // </nav>
  );
};

export default Navbar;
