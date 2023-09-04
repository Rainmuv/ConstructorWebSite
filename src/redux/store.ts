import { configureStore } from '@reduxjs/toolkit';
import constrSite from './sliceConstrSite';


export const store = configureStore({
  reducer: {
    constrSite
  },
})

export type RootState = ReturnType<typeof store.getState>;
