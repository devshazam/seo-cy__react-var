import React from 'react';

const Contacts = () => {
    return (
        <div className="container">
            <div className="grid__row">
                <div className="col-1-1">
                    <div className="b-headblock2 b-headblock2--mag">
                        <div className="headblock2__inner" itemScope itemType="http://schema.org/Organization">
                        <h3><span itemProp="name">SEO-First - Разработка сайтов с грарнтией</span></h3>
                            <div className="headblock2__content"  itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                                <p itemProp="description">Наш адрес:<br/> 
                                <span itemProp="addressLocality">г. Волгоград</span>
                                <span itemProp="streetAddress">ул. Петропавловская д. 87</span> (центральный вход со стороны "KopiPrint")
                                <span itemProp="postalCode">400026</span>
                                <br/> 
                                Режим работы: Пн - Пт с 09:00 до 19:00<br/>
                                Вайбер: +7 (909) 380-25-19<br/>
                                Telegramm: +7 (909) 380-25-19<br/>
                                Почта: <span itemProp="email">kopi34@yandex.ru</span>
                                </p>
                            </div>
                            <div className="headblock2__tarif">
                                <a href="tel:+79093802519"><span className="headblock2__price">тел.: <span itemProp="telephone">+7 (909) 380-25-19</span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;