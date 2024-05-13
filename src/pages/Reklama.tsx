import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import LinkParam from '../links';
import Helmet from "react-helmet"

const Page = () => {
    const { cat } = useParams<{cat?: string}>();
    const [ds, setDs] = React.useState({
        h1: 'Разработка интернет рекламы «под ключ»',
        img: '3',
        textUp: 'Интернет-реклама является эффективным и популярным средством привлечения внимания к бренду, продукту или услуге в онлайн-среде. Она позволяет компаниям и владельцам бизнесов достичь широкой аудитории, улучшить узнаваемость и повысить конверсию.',
        price: '20000',
        h2: 'Лучшая интернет реклама!',
        textMain: 'Одним из наиболее распространенных типов интернет-рекламы является контекстная реклама. Контекстная реклама показывается в поисковых системах, соответствуя запросам пользователей. Например, Google Ads и Яндекс.Директ позволяют размещать рекламные объявления на страницах результатов поиска, которые отображаются, когда пользователь вводит определенные ключевые слова. Это позволяет компаниям быть видимыми в момент, когда пользователи активно ищут продукты или услуги, связанные с их бизнесом.<br>Еще один популярный тип интернет-рекламы - баннерная реклама. Баннеры отображаются на веб-сайтах и могут содержать текст, изображения, анимацию или видео. Они могут быть размещены на специализированных рекламных площадках или на партнерских веб-сайтах, привлекая внимание пользователей и направляя их на сайт рекламодателя.',
        title: 'Интернет реклама в Волгограде по Выгодным ценам! компания SEO-FiRST', 
        description: 'Закажите интернет рекламу SEO продвижение у нас! Большое портфолио. Выполняем сложные и уникальные работы.'
    });
    useEffect(() => {
        if(!cat)return;
        setDs(LinkParam[cat]);
        
    }, [cat])

    return (

        <>
         <Helmet
            title={ds.title}
            meta={[
            {"name": "description", "content": ds.description}
            ]}
            />
                <div className="container">
                    <div className="b-title b-title--2" style={{background: `url(/files/3/${ds.img}.jpg) 50% 0 no-repeat`}}>
                        <h1>{ds.h1}</h1>
                    </div>
                </div>  

                <div className="b-solution-fancy b-solution-fancy_det">
                    <div className="container">

                    <div className="grid__row">
                        <div className="col-1-1">
                            <div className="b-headblock2 b-headblock2--mag">
                                <div className="headblock2__inner">
                                    <div className="headblock2__content">
                                        <p itemProp="description">{ds.textUp}
                                        </p>
                                    </div>
                                    <div className="headblock2__tarif">
                                        <p><span className="headblock2__price">от {ds.price}<span className="headblock2__time">/
                                                    14 дней</span></span></p>
                                        <div className="headblock2__btnbox"><a className="headblock2__btn" href="#form">Заказать</a></div>
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                        <h2 className="b-center">Преимущества сотрудничества с SEO-First</h2>
                        <div className="b-site">
                            <div className="grid__row">
                                <div className="col-1-3 tablet-col-1-2">
                                    <div className="site__item">
                                        <div className="site__img"><img alt="Индивидуальный дизайн"
                                                src="/files/110/visit4-big.png" /></div>
                                        <div className="site__title">Индивидуальный подход</div>
                                        <p>К каждому клиенту у нас индивидуальный подход. Мы стараемся учесть все ваши пожелания.</p>
                                    </div>
                                </div>
                                <div className="col-1-3 tablet-col-1-2">
                                    <div className="site__item">
                                        <div className="site__img"><img alt="Быстрая скорость запуска"
                                                src="/files/110/visit5-big.png" /></div>
                                        <div className="site__title">Быстрый запуск</div>
                                        <p>Мы гарантируем сроки выполнения и запуска проектов иначе пересчитаем стоимость!</p>
                                    </div>
                                </div>
                                <div className="col-1-3 tablet-col-1-2">
                                    <div className="site__item">
                                        <div className="site__img"><img alt="Функциональность"
                                                src="/files/110/visit6-big.png" /></div>
                                        <div className="site__title">Функциональность</div>
                                        <p>Все наши проекты являются масштабируемы и расширяемы, в любой момент вы можете добавить новую функциональность..</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="container">
                        <div className="b-benefitsblock b-benefitsblock_context">
                            <div className="grid__row">
                                <div className="push-4-12 col-8-12">
                                    <div className="benefitsblock__inner">
                                        <h2>{ds.h2}</h2>
                                        <div className="benefitsblock__list"  dangerouslySetInnerHTML={{__html: ds.textMain}}>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                        <div className="b-gray-block" style={{backgroundColor: '#ffffff'}}>
                            <h2 className="b-price-h2">Наши конкурентные преимущества</h2>
                            <div className="b-plus">
                                <div className="plus__item">
                                    <div className="plus__title">
                                        <div className="plus__img"><img src="/files/110/plus-1-big.png" /></div>
                                        <div className="plus__name">Повышение продаж</div>
                                    </div>
                                    <div className="plus__txt">Мы нацелены на конверсионную работу с клиентом - от звонка до заказа.</div>
                                </div>
                                <div className="plus__item">
                                    <div className="plus__title">
                                        <div className="plus__img"><img src="/files/110/plus-2-big.png" /></div>
                                        <div className="plus__name">Быстрый запуск</div>
                                    </div>
                                    <div className="plus__txt">Отлаженный производственный процесс SEO-First позволяет
                                        запускать проекты быстро.</div>
                                </div>
                                <div className="plus__item">
                                    <div className="plus__title">
                                        <div className="plus__img"><img src="/files/110/plus-3-big.png" /></div>
                                        <div className="plus__name">Внедрение новых технологий</div>
                                    </div>
                                    <div className="plus__txt">Мы постоянно ищем новые решения для повышения эффективности и снижения издержек.</div>
                                </div>
                                <div className="plus__item">
                                    <div className="plus__title">
                                        <div className="plus__img"><img src="/files/110/plus-4-big.png" /></div>
                                        <div className="plus__name">Поисковая оптимизация</div>
                                    </div>
                                    <div className="plus__txt">В каждом проекте мы в первую очередь преследуем цель найти целевого потребителя.</div>
                                </div>
                                <div className="plus__item">
                                    <div className="plus__title">
                                        <div className="plus__img"><img src="/files/110/plus-5-big.png" /></div>
                                        <div className="plus__name">Лучшие цены</div>
                                    </div>
                                    <div className="plus__txt">Мы предлагаем лучшие цены на рынке, потому что у нас гибкий подход.
                                    </div>
                                </div>
                                <div className="plus__item">
                                    <div className="plus__title">
                                        <div className="plus__img"><img src="/files/110/plus-6-big.png" /></div>
                                        <div className="plus__name">Тестирование</div>
                                    </div>
                                    <div className="plus__txt">Каждый продукт компании проходит тщательное тестирование перед запуском в online.</div>
                                </div>
                            </div>
                        </div>
                </div>
                </div>


                
        </>
    );
};

export default Page;