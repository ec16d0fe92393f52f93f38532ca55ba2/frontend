export interface RefreshResponse {
    accessToken: string;
    refreshToken?: string;
}

export type { RootState, AppDispatch } from '@shared/store/store';
