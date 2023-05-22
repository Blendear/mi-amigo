import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const navbarData = [
  {
    title: "Domeczek",
    path: "/strona-glowna-infiniti",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Dołącz do nas",
    path: "/dolacz-do-nas",
    icon: <AiIcons.AiFillHome />,
  },

  {
    title: "Medical",
    path: "/medical",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Usługi",
        path: "/medical/uslugi",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Cennik",
        path: "/medical/cennik",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Kontakt",
        path: "/medical/kontakt",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Fitness",
    path: "/fitness",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Aktualności",
        path: "/fitness/aktualnosci",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Grafik",
        path: "/fitness/grafik",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Cennik",
        path: "/fitness/cennik",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Kadra",
        path: "/fitness/kadra",
        icon: <IoIcons.IoIosPaper />,
      },

      {
        title: "Do pobrania",
        path: "/fitness/do-pobrania",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Kontakt",
        path: "/fitness/kontakt",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
