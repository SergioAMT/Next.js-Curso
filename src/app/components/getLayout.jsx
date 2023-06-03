import { ReactElement } from 'react';
import { MainLayout } from './layout/main-layout';



export const getLayout = (page) => {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}