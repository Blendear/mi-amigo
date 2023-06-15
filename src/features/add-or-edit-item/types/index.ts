import { ItemFromDB } from "../../../types";

export type ItemDetailsProps = {
  isCreatingNewItem: boolean;
  openedItemData?: ItemFromDB;
};
