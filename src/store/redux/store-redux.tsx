//hook2 - add main title of comment seciotn here & set the title under into one further "_. to _._." etc. To use the same comment style
//
//  _.  Interfaces
//
//      _._. Initial states interfaces (expected properties and their types of values)
//
//           _._._. URL - Interfaces
//
//           _._._. Auth - Interfaces
//
//  _.  Slices with Reducers bound to them (fragments of all the data which redux stores & "setters" which manipulate the given data)
//
//      _._. Initial states of slices
//
//           _._._. URL - Initial state
//
//           _._._. Auth - Initial state
//
//      _._. Slices with Reducers - creation
//
//           _._._. URL - Slice with Reducers
//
//           _._._. Auth - Slice with Reducers
//
//  _.  Store - Redux Toolkit way (combines all the slices and reducers into once place)
//
//  _.  Action Packs - Redux Toolkit way (will be used to activate specific functions - actions - of reducers - to manipulate redux data)
//

import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
//
//  _.  Interfaces
//
//      _._. Initial states interfaces (expected properties and their types of values)
//
//           _._._. URL - Interfaces
//
interface typeOfURLState {
  photoPlaceholderURL: string;
}
//
//           _._._. Auth - Interfaces
//
interface typeOfAuthState {
  isAuthenticated: boolean;
}
//
//  _.  Slices with Reducers bound to them (fragments of all the data which redux stores & "setters" which manipulate the given data)
//
//      _._. Initial states of slices
//
//           _._._. URL - Initial state
//
const initialURLState = {
  photoPlaceholderURL:
    "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
};
//
//           _._._. Auth - Initial state
//
const initialAuthState: typeOfAuthState = { isAuthenticated: false };
//
//      _._. Slices with Reducers - creation
//
//           _._._. URL - Slice with Reducers
//
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
//
//           _._._. Auth - Slice with Reducers
//
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
//
//  _.  Store - Redux Toolkit way (combines all the slices and reducers into once place)
//
const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
    urlReducer: urlSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>; // Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch; // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

export default store;
//
//  _.  Action Packs - Redux Toolkit way (will be used to activate specific functions - actions - of reducers - to manipulate redux data)
//
export const authSliceActions = authSlice.actions;
export const urlSliceActions = urlSlice.actions;
