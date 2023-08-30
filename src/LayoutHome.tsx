import React from "react";
import { Outlet } from "react-router-dom";

import HeaderMenu from "./components/HeaderMenu";
import FooterForm from "./components/FooterForm";
import FooterSert from "./components/FooterSert";
import FooterMenu from "./components/FooterMenu";
import MobileMenu from "./components/MobileMenu";
import Whatsapp from "./components/Whatsapp";
import BackBanner from "./components/BackBanner";
import MainBanner from "./components/MainBanner";

export default function Layout() {
    return (
        <>
        <div className="l-site_wrap js-body">
            <div className="l-site js-site">
                <div className="b-scrolltop js-scrolltop"></div>

                <HeaderMenu />

                {/* <div className="container">
                    <div className="b-title b-title--2">
                        <h1>Разработка сайта-визитки «под ключ»</h1>
                    </div>
                </div>   */}

                <MainBanner />  

                <div className="b-solution-fancy b-solution-fancy_det">
                    <Outlet />
                </div>
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

