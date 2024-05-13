import React from "react";
import { Outlet } from "react-router-dom";

import HeaderMenu from "./components/HeaderMenu";
import FooterForm from "./components/FooterForm";
import FooterSert from "./components/FooterSert";
import FooterMenu from "./components/FooterMenu";
import MobileMenu from "./components/MobileMenu";

import BackBanner from "./components/BackBanner";

import Helmet from "react-helmet"

export default function Layout() {


    React.useEffect(() => {
        const event = new Event('rendered')
        document.dispatchEvent(event)
    }, [])
    return (
        

        <>

        <div className="l-site_wrap js-body">
            <div className="l-site js-site">
                <div className="b-scrolltop js-scrolltop"></div>

                <HeaderMenu />


                <Outlet />
                <FooterForm />
                <FooterSert />
                <FooterMenu />


            </div>
        <MobileMenu />
        </div>

        <BackBanner />


        </>
    );
}





// ====================

