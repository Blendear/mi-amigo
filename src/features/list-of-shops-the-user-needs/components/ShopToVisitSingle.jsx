//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "../../../store/redux/hooks";

const ShopToVisitSingle = ({ isActive }) => {
  //hook2 - add this redux code to the table of contentd comments
  const reduxStateImageURL = useAppSelector((state) => state.urlReducer);

  return (
    isActive && (
      <Image
        src={reduxStateImageURL.photoPlaceholderURL}
        alt={`nie pyklo zdjecie`}
        layout="fill"
        objectFit="cover"
      />
    )
  );
};
export default ShopToVisitSingle;

//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//
