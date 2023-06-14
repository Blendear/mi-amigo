export type SingleItemProps = {
  variant: string;
  itemAlreadyExists: boolean;
  itemSingle: any; // hook1 - add the specific type after finishing the archoitecture of an item object
  handleOnClick: any; // hook1 - You DONT need to say its "onFocus" type- BUT you need to ad types for props - trace back what the function (TWO SEPARATE FUNCTIONS?) is and create the type
};
