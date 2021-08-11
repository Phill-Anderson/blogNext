import React from 'react'
import Layout from "components/layout";
const profile = () => {
    return (
        <Layout classes="profile">
            <div className="post mt-5 mb-5">
                <h4 className="text-center">Миний CV:</h4>
                <h5>Үндсэн мэдээлэл</h5>
                <table class="table table-bordered">
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
                            <td>Монгол Улсын Их Сургууль / 2009 он /</td>
                        </tr>
                    </tbody>
                </table>
                <h5>Мэдлэг чадвар</h5>
                <div style={{}}>
                    <p>
                        Би 2020 оноос эхэлж Javascript хэлийг гүнзгийрүүлэн судалж улмаар Javascript - ийн фронт-энд фреймворкууд болох REACTJS, NEXTJS  технологиудыгсурч эзэмшсэн.
                        Мөн back-end талаас нь NODEJS, EXPRESS JS, REST API, MYSQL, MONGODB болон өгөгдлийн сантай харьцах ORM - уудаас SEQUELIZE7, MONGOOSE зэрэг сангуудыг судалж эзэмшсэн.
                        SOURCE CONTROL - ийн талаас GIT, GITHUB  платформ дээр ажиллах чадвартай. Англи хэлний дундаас дээш түвшинтэй.
                    </p>
                </div>
                <h5>Хэлэх дуртай үг:</h5>
                <p>Нухаж байтал аяндаа болно доо!!!</p>


                <h5>Он цагийн хэлхээс</h5>
                <div className="container">
                    <div class="timeline">
                        <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                            <div class="timeline__event__icon ">
                                <i class="lni-cake"></i>
                                <div class="timeline__event__date">
                                    1999 - 2009 он
                                </div>
                            </div>
                            <div class="timeline__event__content ">
                                <div class="timeline__event__title">
                                    "Дэлгэрэх" бүрэн дунд сургууль
                                </div>
                                <div class="timeline__event__description">
                                    <p>Математик, Англи хэлний гүнзгийрүүлсэн сургалттай</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                            <div class="timeline__event__icon">
                                <i class="lni-burger"></i>
                                <div class="timeline__event__date">
                                    2009-2013 он
                                </div>
                            </div>
                            <div class="timeline__event__content">
                                <div class="timeline__event__title">
                                    Монгол Улсын Их Сургууль
                                </div>
                                <div class="timeline__event__description">
                                    <p>МУИС - ийн харьяа "Математик, Комьютерийн Сургууль" - ийг Мэдээллийн системийн удирдлага мэргэжлээр төгсөв.</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                            <div class="timeline__event__icon">
                                <i class="lni-slim"></i>
                                <div class="timeline__event__date">
                                    2013-2014 он
                                </div>
                            </div>
                            <div class="timeline__event__content">
                                <div class="timeline__event__title">
                                    "Цэргийн жинхэнэ алба" - ыг хаав
                                </div>
                                <div class="timeline__event__description">
                                    <p>Иргэний үүргээ биелүүлэн Дорноговь аймгийн Замын-Үүд суман дахь хилийн цэргийн 0108 - р ангид цэргийн алба хаав.</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline__event animated fadeInUp timeline__event--type1">
                            <div class="timeline__event__icon">
                                <i class="lni-cake"></i>
                                <div class="timeline__event__date">
                                    2015-2016 он
                                </div>
                            </div>
                            <div class="timeline__event__content">
                                <div class="timeline__event__title">
                                    "Классик Мото" ххк
                                </div>
                                <div class="timeline__event__description">
                                    <p>Уул уурхай, санхүүгийн чиглэлээр үйл ажиллагаа явуулдаг байгууллагад баяжуулалтын техникч.</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                            <div class="timeline__event__icon">
                                <i class="lni-burger"></i>
                                <div class="timeline__event__date">
                                    2017-2018 он
                                </div>
                            </div>
                            <div class="timeline__event__content">
                                <div class="timeline__event__title">
                                    "BID SOLUTION" ХХК
                                </div>
                                <div class="timeline__event__description">
                                    <p>Вэб кодер, програмист</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                            <div class="timeline__event__icon">
                                <i class="lni-cake"></i>
                                <div class="timeline__event__date">
                                    2019 - 2020 он
                                </div>
                            </div>
                            <div class="timeline__event__content">
                                <div class="timeline__event__title">
                                    "MKIT" ХХК
                                </div>
                                <div class="timeline__event__description">
                                    <p>Солонгосийн аутсорсинг төслүүд дээр Javascript хэл дээр дадлага хийв.</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline__event animated fadeInUp timeline__event--type1">
                            <div class="timeline__event__icon">
                                <i class="lni-slim"></i>
                                <div class="timeline__event__date">
                                    2020 - оноос одоог хүртэл
                                </div>
                            </div>
                            <div class="timeline__event__content">
                                <div class="timeline__event__title">
                                    LEVELUP.MN
                                </div>
                                <div class="timeline__event__description">
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
