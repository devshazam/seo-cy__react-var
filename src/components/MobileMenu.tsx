import React from 'react';

const MobileMenu = () => {
    return (
            <>
                <div className="l-sidebar js-sidebar js-sidebar-hide"></div>
                    <div className="l-sidebar_inner js-sidebar-inner">
                        <div className="b-sidebar">
                            <div className="sidebar__item sidebar__contacts">
                                <div className="b-head-contacts">
                                    <div className="head-contacts__phone"><a href="tel:+79093802519">+7 (909) 380-25-19</a></div>
                                    <noindex>
                                        <div className="head-contacts__email"><a className="disabled" rel="nofollow" href="#">9:00-21:00</a>
                                        </div>
                                    </noindex>
                                </div>
                            </div>
                            <div className="sidebar__item sidebar__menu">


                                <ul>
                                    <li><a href="/razrabotka-saitov/"><span>
                                        <img src="/files/110/ficon3.png" alt="" /> 
                                                    </span>Разработка сайтов</a></li>
                                    <li><a href="/razrabotka-saitov/landing-page/"><span>
                                            </span>Лендинги</a></li>
                                    <li><a href="/razrabotka-saitov/site-vizitka/"><span> 
                                            </span>Визитки</a></li>
                                    <li><a href="/razrabotka-saitov/site-katalog/"><span> 
                                        </span>Сайты-Каталоги</a>
                                    </li>
                                    <li><a href="/razrabotka-saitov/site-magazin/"><span> 
                                        </span>Сайты-Магазины</a>
                                    </li>
                                    <li><a href="/poiskovoe-prodvizenie/"><span>
                                        <img src="/files/110/ficon3.png" alt="" /> 
                                                    </span>SEO продвижение</a></li>
                                    <li><a href="/poiskovoe-prodvizenie/seo-prodvizenie-yandex/"><span>
                                            </span>SEO для Яндекс</a></li>
                                    <li><a href="/poiskovoe-prodvizenie/seo-prodvizenie-google/"><span> 
                                            </span>SEO для Google</a></li>
                                    <li><a href="/digital-reklama/"><span>
                                        <img src="/files/110/ficon3.png" alt="" /> 
                                                    </span>Digital Реклама</a></li>
                                    <li><a href="/digital-reklama/yandex-direct/"><span>
                                            </span>Яндекс Директ</a></li>


                                </ul>
                            </div>
                        
                            <div className="sidebar__item">
                            
                                <p className="pilot__btn hide-on-desktop hide-on-tablet"><a className="header_button js-sidebar-link"
                                        href="">Заказать услуги</a></p>
                            </div>
                        </div>
                    </div>
            </>
    );
};

export default MobileMenu;