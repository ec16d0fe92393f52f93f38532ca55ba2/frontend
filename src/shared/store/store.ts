import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { userSlice } from '@entities/user';

import mainApi from '@shared/api/mainApi';
import { MOCK_USER } from '@shared/mocks';

const rootReducer = combineReducers({
    [mainApi.reducerPath]: mainApi.reducer,
    user: userSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
        user: { user: MOCK_USER },
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
