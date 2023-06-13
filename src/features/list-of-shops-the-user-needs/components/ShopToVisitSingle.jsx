//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "../../../store/redux/hooks";

const ShopToVisitSingle = ({ isActive, shopURL }) => {
  //hook2 - add this redux code to the table of contentd comments
  const reduxStateImageURL = useAppSelector((state) => state.urlReducer);

  return (
    isActive && (
      <Image
        src={
          shopURL
            ? shopURL
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPMffp6aWziH9CgHrxbJzUhIV5SEj0_8Y_yps_JPa4pwPMDSAX2RbVsV5seOR32NOBXfI&usqp=CAU"
        }
        alt={`can't load image`}
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
