import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userSlice } from '@entities/user';
import mainApi from '@shared/lib/store/api/mainApi.ts';

const rootReducer = combineReducers({
    [mainApi.reducerPath]: mainApi.reducer,
    user: userSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware),
    devTools: true,
});

