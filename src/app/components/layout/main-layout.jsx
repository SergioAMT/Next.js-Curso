import React from "react";
import { FooterPage } from "../footer/footer";
import { HeaderComponent } from "../header/header";
import '../../globals.css'

export const MainLayout = ({children}) => {
    return (
        <>
            <HeaderComponent />
            {children}
            <FooterPage />
        </>
    )
}