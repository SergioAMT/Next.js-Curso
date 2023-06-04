import React from "react";
import { FooterPage } from "../footer/footer";
import { HeaderComponent } from "../header/header";

export const MainLayout = ({children}) => {
    return (
        <>
            <HeaderComponent />
            {children}
            <FooterPage />
        </>
    )
}