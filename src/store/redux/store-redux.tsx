//
// Table of content for this file is written at the bottom
//
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
//  _.  Interfaces
//      _._. Initial states interfaces (expected properties and their types of values)
type PriceInShopSingle = {
  imageURL: string; // hook1 - usert shuld be able to create "my shops list", so that he dont need to find url's eveyr time, but just choose an image url for the list
  name: string;
  price: number;
  currency: string;
};
type ItemDetails = {
  //hook1 - paste inetrfaces and types to dedicated folder - global or feature "types"
  _id: string; // hook1 - replace with "name" or is additional "_id" it necessary?  because I will need to filter out specific items without talking with the dataabse during each filtering process
  imageURL: string;
  name: string;
  unitOfMeasurement: string;
  amountNeeded: number;
  amountCurrent: number;
  amountMaxExpected: number;
  repeatability: string;
  expirationDate: string; //hook1 how to format from / to string (locale string?)  &  how to get date and time separately - link : https://stackoverflow.com/questions/40526102/how-do-you-format-a-date-time-in-typescript
  isOpen: boolean;
  pricesInShops: PriceInShopSingle[];
  cheapestInThisShop: string; //so that the app doesnt need to filter every time the user choses "cheap" shopping - it just reads this prop
};
type URLState = {
  photoPlaceholderURL: string;
};
type Auth = {
  isAuthenticated: boolean;
};
//  _.  Slices with Reducers bound to them (fragments of all the data which redux stores & "setters" which manipulate the given data)
//      _._. Initial states of slices
const initialListOfItems: ItemDetails[] | {} = {}; //can be an empty object if there are no items of this user
const initialURLState: URLState = {
  photoPlaceholderURL:
    "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
};
const initialAuthState: Auth = { isAuthenticated: false };
//      _._. Slices with Reducers - creation
const listOfItemsSlice = createSlice({
  name: "listOfItemsSlice",
  initialState: initialListOfItems,
  reducers: {
    testAction(state, action: PayloadAction<{ testPayload: string }>) {
      console.log(`current state : ${state}`);
      console.log(`current payload : ${action.payload.testPayload}`);
    },
  },
});
const urlSlice = createSlice({
  name: "urlSlice",
  initialState: initialURLState,
  reducers: {
    setURL(state, action: PayloadAction<{ newURL: string }>) {
      state.photoPlaceholderURL = action.payload.newURL;
      console.log(`new url set to : ${action.payload.newURL}`);
    },
  },
});
const authSlice = createSlice({
  name: "authenticationSlice",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
//  _.  Store - Redux Toolkit way (combines all the slices and reducers into once place)
const store = configureStore({
  reducer: {
    listOfItemsReducer: listOfItemsSlice.reducer,
    authReducer: authSlice.reducer,
    urlReducer: urlSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>; // Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch; // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export default store;
//  _.  Action Packs - Redux Toolkit way (will be used to activate specific functions - actions - of reducers - to manipulate redux data)
export const listOfItemsActions = listOfItemsSlice.actions;
export const authSliceActions = authSlice.actions;
export const urlSliceActions = urlSlice.actions;

//hook2 - add main title of comment seciotn here & set the title under into one further "_. to _._." etc. To use the same comment style
//
//  _.  Interfaces
//
//      _._. Initial states interfaces (expected properties and their types of values)
//
//  _.  Slices with Reducers bound to them (fragments of all the data which redux stores & "setters" which manipulate the given data)
//
//      _._. Initial states of slices
//
//      _._. Slices with Reducers - creation
//
//  _.  Store - Redux Toolkit way (combines all the slices and reducers into once place)
//
//  _.  Action Packs - Redux Toolkit way (will be used to activate specific functions - actions - of reducers - to manipulate redux data)
//
