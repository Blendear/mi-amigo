//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//

import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";

const ShopToVisitSingle = ({ isActive }) => {
  return (
    isActive && (
      <Image
        src={`/images/testing/kotlet.png`}
        alt={`nie pyklo zdjecie`}
        layout="fill"
        objectFit="cover"
      />
    )
  );
};
export default ShopToVisitSingle;
