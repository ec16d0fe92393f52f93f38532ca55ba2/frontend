import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@shared/types/store';

import { User } from '../types/user';

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: () => initialState,
        updateProfile: (state, action: PayloadAction<Partial<User>>) => {
            if (state.user) state.user = { ...state.user, ...action.payload };
        },
    },
});

export const { setUser, removeUser, updateProfile } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
