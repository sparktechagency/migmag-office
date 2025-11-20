import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/authApi/authApi';
import { websiteApi } from './api/websiteApi/websiteApi';
import { paymentApi } from './api/paymentApi/paymentApi';

export const store = configureStore({
    reducer: {
        // RTK Query reducers
        [authApi.reducerPath]: authApi.reducer,
        [websiteApi.reducerPath]: websiteApi.reducer,
        [paymentApi.reducerPath]: paymentApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            websiteApi.middleware,
            paymentApi.middleware,
        ),
});

// TypeScript helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
