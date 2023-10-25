import { configureStore } from "@reduxjs/toolkit";
import  * as api from '/api'

export const store = configureStore({
    reducer: {
    //   todos: todoReducer,
    //   filter: filterReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
  });