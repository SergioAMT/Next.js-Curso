import { FooterPage } from "../footer/footer";
import { HeaderComponent } from "../header/header";
import '../../../app/styles/general.sass'

export const MainLayout = ({children}) => {
    return (
        <>
            <HeaderComponent />
            {children}
            <FooterPage />
        </>
    )
}