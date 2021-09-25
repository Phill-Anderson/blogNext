import React from 'react'
import Layout from "components/layout";
const profile = () => {

    return (
        <Layout classes="profile">
            <div classname="post mt-5 mb-5">
                <h4 classname="text-center">Миний CV:</h4>
                <h5>Үндсэн мэдээлэл</h5>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Талбар</th>
                            <th scope="col">Утга</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Овог:</th>
                            <td>Санжаажамц</td>
                        </tr>
                        <tr>
                            <th scope="row">Нэр:</th>
                            <td>Энхтайван</td>
                        </tr>
                        <tr>
                            <th scope="row">Нас:</th>
                            <td>30</td>
                        </tr>
                        <tr>
                            <th scope="row">Хүйс:</th>
                            <td>эр</td>
                        </tr>
                        <tr>
                            <th scope="row">Яс, үндэс:</th>
                            <td>Халх</td>
                        </tr>
                        <tr>
                            <th scope="row">Гэр бүлийн байдал:</th>
                            <td>Ганц бие</td>
                        </tr>
                        <tr>
                            <th scope="row">Боловсрол:</th>
                            <td>Комьютерийн ухааны бакалавр</td>
                        </tr>
                        <tr>
                            <th scope="row">Мэргэжил:</th>
                            <td>Мэдээллийн технологи, Менежмэнт</td>
                        </tr>
                        <tr>
                            <th scope="row">Төгссөн сургууль:</th>
                            <td>Монгол Улсын Их Сургууль / 2009 -2013 он /</td>
                        </tr>
                    </tbody>
                </table>
                <h5>Мэдлэг чадвар</h5>
                <div style={{}}>
                    <p>
                        Би 2020 оноос эхэлж Javascript хэлийг гүнзгийрүүлэн судалж улмаар Javascript - ийн Front-End технологиуд болох<br /> <b>REACTJS :</b>
                        <ul>
                            <li>Functional components</li>
                            <li>React hooks</li>
                            <li>React Context Api</li>
                            <li>React Redux</li>
                            <li>Framer-Motion</li>
                        </ul>
                        <b> React Framework NEXTJS :</b>
                        <ul>
                            <li>Server Side Rendering</li>
                            <li>Static Site Generation</li>
                            <li>Swr</li>
                        </ul>
                        -ийг сурч эзэмшсэн.
                    </p>
                    <p>
                        <b> Back-End талаас :</b>
                        <ul>
                            <li>NODEJS</li>
                            <li>EXPRESS вэб сэрвэр</li>
                            <li>REST API</li>
                            <li>MYSQL / SEQUELIZE /</li>
                            <li>MONGODB / MONGOOSE /</li>
                        </ul>
                        -ийг судалж эзэмшсэн.
                    </p>
                    <p>
                        <b>SOURCE CONTROL :</b><br />
                        GIT, GITHUB  платформ дээр ажиллах чадвартай.
                    </p>
                    <p><b>Програмчлалын хэрэгжүүлдэг зарчмуудаас :</b>
                        <ul>
                            <li>DRY /Dont Repeat Yourself/</li>
                            <li>KISS / Keep It Stupid Simple /</li>
                        </ul>
                    </p>
                    <p> Англи хэлний дундаас дээш түвшинтэй. / upper-Intermediate / </p>
                </div>
                <h5>Хэлэх дуртай үг:</h5>
                <p>Нухаж байтал аяндаа болно доо!!!</p>
                <h5>Он цагийн хэлхээс</h5>
                <div classname="container">
                    <div className="timeline">
                        <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                            <div className="timeline__event__icon ">
                                <i className="lni-cake" />
                                <div className="timeline__event__date">
                                    1999 - 2009 он
                                </div>
                            </div>
                            <div className="timeline__event__content ">
                                <div className="timeline__event__title">
                                    "Дэлгэрэх" бүрэн дунд сургууль
                                </div>
                                <div className="timeline__event__description">
                                    <p>Математик, Англи хэлний гүнзгийрүүлсэн сургалттай</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                            <div className="timeline__event__icon">
                                <i className="lni-burger" />
                                <div className="timeline__event__date">
                                    2009-2013 он
                                </div>
                            </div>
                            <div className="timeline__event__content">
                                <div className="timeline__event__title">
                                    Монгол Улсын Их Сургууль
                                </div>
                                <div className="timeline__event__description">
                                    <p>МУИС - ийн харьяа "Математик, Комьютерийн Сургууль" - ийг Мэдээллийн системийн удирдлага мэргэжлээр төгсөв.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                            <div className="timeline__event__icon">
                                <i className="lni-slim" />
                                <div className="timeline__event__date">
                                    2013-2014 он
                                </div>
                            </div>
                            <div className="timeline__event__content">
                                <div className="timeline__event__title">
                                    "Цэргийн жинхэнэ алба" - ыг хаав
                                </div>
                                <div className="timeline__event__description">
                                    <p>Иргэний үүргээ биелүүлэн Дорноговь аймгийн Замын-Үүд суман дахь хилийн цэргийн 0108 - р ангид цэргийн алба хаав.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline__event animated fadeInUp timeline__event--type1">
                            <div className="timeline__event__icon">
                                <i className="lni-cake" />
                                <div className="timeline__event__date">
                                    2015-2016 он
                                </div>
                            </div>
                            <div className="timeline__event__content">
                                <div className="timeline__event__title">
                                    "Классик Мото" ххк
                                </div>
                                <div className="timeline__event__description">
                                    <p>Уул уурхай, санхүүгийн чиглэлээр үйл ажиллагаа явуулдаг байгууллагад баяжуулалтын техникч.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                            <div className="timeline__event__icon">
                                <i className="lni-burger" />
                                <div className="timeline__event__date">
                                    2017-2018 он
                                </div>
                            </div>
                            <div className="timeline__event__content">
                                <div className="timeline__event__title">
                                    "BID SOLUTION" ХХК
                                </div>
                                <div className="timeline__event__description">
                                    <p>Вэб кодер, програмист</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                            <div className="timeline__event__icon">
                                <i className="lni-cake" />
                                <div className="timeline__event__date">
                                    2019 - 2020 он
                                </div>
                            </div>
                            <div className="timeline__event__content">
                                <div className="timeline__event__title">
                                    "MKIT" ХХК
                                </div>
                                <div className="timeline__event__description">
                                    <p>Солонгосийн аутсорсинг төслүүд дээр Javascript хэл дээр дадлага хийв.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline__event animated fadeInUp timeline__event--type1">
                            <div className="timeline__event__icon">
                                <i className="lni-slim" />
                                <div className="timeline__event__date">
                                    2020 - оноос одоог хүртэл
                                </div>
                            </div>
                            <div className="timeline__event__content">
                                <div className="timeline__event__title">
                                    LEVELUP.MN
                                </div>
                                <div className="timeline__event__description">
                                    <p>LevelUp.mn - онлайн сургалтын платформын хөгжүүлэлт</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default profile
