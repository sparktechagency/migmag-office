// app/components/DashboardProvider.tsx
'use client';

import { Provider } from 'react-redux';
import { store } from '@/app/store';

interface Props {
    children: React.ReactNode;
}

const DashboardProvider: React.FC<Props> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default DashboardProvider;
