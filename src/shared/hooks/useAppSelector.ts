import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '@shared/types/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
