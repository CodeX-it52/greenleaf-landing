import React, {ReactNode} from "react";
import Header from "@layout/header";
import Footer from "@layout/footer";

interface ComponentProps {
    children: ReactNode
}
const Layout : React.FC<ComponentProps> = ({children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;