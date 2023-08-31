import React from "react";
import { Outlet } from "react-router-dom";

import HeaderMenu from "./components/HeaderMenu";
import FooterForm from "./components/FooterForm";
import FooterSert from "./components/FooterSert";
import FooterMenu from "./components/FooterMenu";
import MobileMenu from "./components/MobileMenu";
import Whatsapp from "./components/Whatsapp";
import BackBanner from "./components/BackBanner";

export default function Layout() {
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
        <Whatsapp />
        <BackBanner />


        </>
    );
}





// ====================

