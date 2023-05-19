//
//  0.  Interface'y
//
//      0.1. Initial state'y
//

//  1.  Slice'y
//
//      1.1. Initial state'y
//
//      1.2. Sumy Kalorii slice
//
//      1.3. Authentication slice
//
//
//  2.  Store - Redux Toolkit way
//
//
//  3.  Action Packs - Redux Toolkit way
//
//

import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

//sss \/
//
//
//
//
//
//
//
//
//
//
//
//

//
//~~ A.  Timer liczący upływający czas & w momencie X robiący Y
//
//      1.  Biblioteka pod kontrolę czasu - "date-fns" library
//
//      2.  Pokaż ile czassu minęło od startu timera - useEffect "start timera = stwórz czas teraz & co sekundę twórz drugi czas teraz, porównując różnicę wg pierwszego"
//
//               2.1. Rozpocznij timer aka od teraz do X, co sekunde dodawaj cyfrę 1 do timera
//
//               1.1. Zaciągnięcie czasu dla Polski w momencie "start timera"
//
//               1.2. Przerobienie danych zaciągniętyhc na ładny visual timer'a
//
//      2. "Redux" - niech zapisze te dane
//
//          2.1.
//
//          2.1.
//
//          2.1.
//

//
//

import { parseISO, format, compareAsc } from "date-fns";

const initialTimersState = {
  GETnietyStringDataZakonczeniaTimera: "",
  czyTimerIsAktywny: false,
  czasStartuTimera: 0,
  czasNaliczonyOnStartuTimera: 0,
  czasZaIleSekundMaSieSkonczycTimer: 0,
};

const timersSlice = createSlice({
  name: "timersSlice",
  initialState: initialTimersState,
  reducers: {
    // 2.1. Rozpocznij timer aka od teraz do X, co sekunde dodawaj cyfrę 1 do timera
    addJednaSekundeDoTimera(state) {
      state.czasNaliczonyOnStartuTimera += 1;
      console.log(`aktualny czas = ${state.czasNaliczonyOnStartuTimera}`);
    },
    // 2.1. Rozpocznij timer aka od teraz do X, co sekunde dodawaj cyfrę 1 do timera
    rozpocznijTimerODlugosciX(state, action) {
      state.czyTimerIsAktywny = true;
      console.log(`timer aktywowany`);
      setTimeout(() => {
        setInterval(() => {
          store.dispatch(timersSliceActions.addJednaSekundeDoTimera());
        }, 1000);
      }, 250 * action.payload);
    },
    //
    ustawReduxowyTimer(state, action) {
      state.GETnietyStringDataZakonczeniaTimera = action.payload;
      console.log(`GETnieta data : ${action.payload}`);
    },
  },
});

//
//
//
//
//
//
//
//
//
//
//
//

//      0.1. Initial state'y
//

interface typeOfAuthState {
  isAuthenticated: boolean;
}

//
//      1.1. Initial state'y
//

const initialAuthState: typeOfAuthState = { isAuthenticated: false };

//
//      1.3. Auth slice

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
//  2.  Store - Redux Toolkit way
//

const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
    timersReducer: timersSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//
//  3.  Action Packs - Redux Toolkit way
//

export const authSliceActions = authSlice.actions;
export const timersSliceActions = timersSlice.actions;

export default store;
