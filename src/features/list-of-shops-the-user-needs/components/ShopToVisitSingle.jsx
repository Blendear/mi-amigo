//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//

import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";

const ShopToVisitSingle = () => {
  return (
    <div
      // className={styles["container"]}   -   uncomment after placeholder \/ isnt needed
      style={{ position: "relative", height: "auto", width: "6rem" }}
    >
      {/* /\ jemu daj "position:relative" */}
      <div className={styles["image-styling"]}>
        {/* /\ jemu daj "position:relative"   &   jemu przypisz classe" */}
        <Image
          src={`/images/testing/kod.png`}
          alt={`error while loading image`}
          height={200}
          width={200}
          layout="responsive"
          objectFit="cover"
        />
        {/* /\ jemu zadnej classy nie dajesz*/}
      </div>
    </div>
  );
};
export default ShopToVisitSingle;
