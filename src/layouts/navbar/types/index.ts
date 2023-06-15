// import { Dispatch, SetStateAction } from "react";

export type MenuItemSingleProps = {
  svg: string;
  title: string;
  isActive: boolean;
  handleClick: any; // hook1 - resolve the error of Dispatch<SetStateAction<string>>;
  /*
    handleClick={() => {setShowAsActive("itemsToBuy")}}
  */
};
