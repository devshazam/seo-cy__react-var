import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import LinkParam from '../links';
import Helmet from "react-helmet"

const Page = () => {
    const { cat } = useParams<{cat?: string}>();
    const [ds, setDs] = React.useState( {
        h1: 'Разработка сайта «под ключ» в Волгограде',
        img: '1',
        textUp: 'Разработка сайтов – это комплексный процесс создания веб-проекта, который включает в себя несколько важных этапов. В современном мире веб-сайт является неотъемлемой частью бизнеса, он позволяет компаниям представить свои продукты и услуги в онлайн-пространстве, привлечь новых клиентов и поддерживать взаимодействие с уже существующими.',
        price: '8000',
        h2: 'Разработка сайта с гарантиями!',
        textMain: 'Первым шагом в разработке сайта является анализ и планирование. Здесь необходимо определить цели и задачи сайта, целевую аудиторию, исследовать конкурентов и провести анализ их веб-присутствия. На основе этих данных создается концепция и структура сайта, а также определяются основные функциональные и дизайнерские требования.<br>Следующим этапом является разработка дизайна. Дизайн сайта играет важную роль в создании привлекательного и удобного интерфейса для пользователей. Это включает выбор цветовой схемы, шрифтов, компоновку элементов и создание визуального контента, такого как логотипы, изображения и иллюстрации. Важно учесть, что дизайн сайта должен быть адаптивным, чтобы корректно отображаться на различных устройствах и экранах.<br>После этого следует этап программирования и разработки технической части сайта. Здесь создаются веб-страницы, функциональные модули, базы данных и другие технические элементы. Применяются языки программирования, такие как HTML, CSS, JavaScript, а также используются современные фреймворки и CMS (системы управления контентом) для упрощения процесса разработки.',
        title: 'Разработка сайтов в Волгограде по Выгодным ценам! компания SEO-FiRST', 
        description: 'Доступные цены на разработку сайтов в Волгограде. Большое портфолио и качественное портфолио! Самые конкурентные цены и сроки. Строгие гарантии на результат и сроки со 100% возвратом денег!'
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