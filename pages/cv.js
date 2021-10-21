import React from 'react'
import NextImage from 'next/image'
import { CgCalendarDates } from 'react-icons/cg'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { AiOutlineGithub } from 'react-icons/ai'

const cv = () => {
    return (
        <div className="cvContainer">
            <div className="leftSide">
                <div style={{ textAlign: 'center' }}>
                    <NextImage src="/images/profile.jpg" width="200" height="100" height="200" layout="intrinsic" />
                </div>
                <div className="details">
                    <div className="item"><CgCalendarDates /> 1991/05/18</div>
                    <div className="item"><FaPhoneAlt /> 99950869</div>
                    <div className="item"><AiOutlineMail /> eaglesquad86@gmail.com</div>
                    <div className="item"><MdLocationOn /> Улаанбаатар хот</div>
                    <div className="item"><IoMdInformationCircleOutline /> facebook.com/phill.neo</div>
                    <div className="item"><AiOutlineGithub /> github.com/Phill-Anderson</div>
                </div>
                <div className="details">
                    <div className="item-header item-header--red">Чадвар / hard skills/</div>
                    <div className="item">
                        <div>HTML - 100%</div>
                        <div className="bar"></div>
                    </div>
                    <div className="item">
                        <div>CSS - 90%</div>
                        <div className="bar"></div>
                    </div>
                    <div className="item">
                        <div>JAVASCRIPT - 80%</div>
                        <div className="bar"></div>
                    </div>
                    <div className="item">
                        <div>REACT - 85%</div>
                        <div className="bar"></div>
                    </div>
                    <div className="item">
                        <div>NEXTJS - 70%</div>
                        <div className="bar"></div>
                    </div>
                    <div className="item">
                        <div>NODEJS /Express/ - 80%</div>
                        <div className="bar"></div>
                    </div>
                    <div className="item">
                        <div>SOCKET.IO - 75%</div>
                        <div className="bar"></div>
                    </div>
                    <div className="item">
                        <div>MYSQL - 70%</div>
                        <div className="bar"></div>
                    </div>
                    <div className="item">
                        <div>MONGODB - 65%</div>
                        <div className="bar"></div>
                    </div>
                    <div className="item">
                        <div>GIT, GITHUB - 50%</div>
                        <div className="bar"></div>
                    </div>
                    <div className="item">
                        <div>TAILWIND CSS - 75%</div>
                        <div className="bar"></div>
                    </div>
                    <div className="item">
                        <div>FRAMER MOTION - 70%</div>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="details">
                    <div className="item-header item-header--red">Хобби</div>
                    <div className="item">
                        <span>Ном унших, ууланд алхах. </span>
                    </div>
                </div>
            </div>
            <div className="rightSide">
                <div className="details bg-red color-white">
                    <div className="item-header item-header--gutter">Санжаажамц Энхтайван</div>
                    <div className="item-header--gutter">MERN STACK ХӨГЖҮҮЛЭГЧ</div>
                    <div className="b-bottom"></div>
                    <div>
                        <p className="item-header--gutter" style={{ lineHeight: '20px' }}>
                            Javascript хэл дээр сүүлийн 2 жилийн хугацаанд ойролцоогоор 3200 хүн/цагийг зарцуулсан бөгөөд : <br /> backend талд nodejs, express, mongoose, sequelize ашиглан rest Api бичих чадвартай.<br />
                            Front-End талд react, nextjs, framer-motion, bootstrap, material-ui, tailwindcss , SASS, BEM ашиглан аливаа системийн интерфейсийг өгөгдсөн дизайны дагуу код болгон бичих чадвартай.
                        </p>
                    </div>
                </div>
                <div className="details">
                    <div className="item-header item-header--red item-header--gutter">Ажлын Туршлага</div>
                    <div className="b-bottom b-bottom--red"></div>
                    <div className="item-header--gutter">
                        <div className="item-header--md item-header--red">Вэб Хөгжүүлэгч</div>
                        <div className="item-header--md">'BID SOLUTION' ххк</div>
                        <div className="item-header--red">2018/1 - 2018/10</div>
                        <div className="content">
                            <p>-humanities.edu.mn сайт руу тогтмол мэдээ оруулах, сайтын хэвийн үйл ажиллагааг хангах</p>
                            <p>-aspnet, c# ашиглан хийгдсэн систем дээр mvc архитекторын дагуу код бичих</p>
                        </div>
                    </div>
                    <div className="item-header--gutter">
                        <div className="item-header--md item-header--red">Дадлагажигч ажилтан</div>
                        <div className="item-header--md">'MKIT' ххк</div>
                        <div className="item-header--red">2018/10-2019/2</div>
                        <div className="content">
                            <p> -Солонгосын аутсорсинг төслүүд дээр дадлагажигч ажилтанаар ажиллах хугацаандаа аливаа төслийг backend, frontEnd болгон салгаж хөгжүүлэх, BEM, дахин ашиглагдах css код, дизайныг html css болгон хөрвүүлэх зэрэг чадварыг эзэмшсэн.</p>
                        </div>
                    </div>
                    <div className="item-header--gutter">
                        <div className="item-header--md item-header--red">Mern Stack хөгжүүлэгч</div>
                        <div className="item-header--md">'Level-up' онлайн сургалтын платформ</div>
                        <div className="item-header--red">2020/3- одоог хүртэл</div>
                        <div className="content">
                            <p> - 100 орчим endpoint -той Rest-Api сервисийг nodejs express ашиглан  2 branch - аар хөгжүүлсэн. </p>
                            <p> - jwt token бүхий authentication, authorization, cookie, cors тохиргоо, mongoose болон sequelize бүхий модел бичих, контроллер функцууд, Mysql, Sequelize ORM,  MongoDB, Mongoose Orm, database seeder, express сервисийн нууцлал, хамгаалалт. / rate limiter, xss, brute force, injection гэх мэт / </p>
                            <p>- Level-up платформын front-End талыг 3 үе шаттайгаар reactjs ашиглан хөгжүүлж ирэв.</p>
                            <p>- Level-up платформын front-end талын сүүлийн хөгжүүлэлт NextJs ашиглан бичсэн.</p>
                            <p>- bearer token бүхий login систем, платформын дотоод төлвийг notification мессэж байдлаар харуулах, хичээлүүдийн лист бүхий video player,
                                swr ашиглан татсан өгөгдлүүд, server side rendering, static generation хуудсуудыг бичсэн.
                            </p>
                            <p>- Level-up платформын админы панелыг reactjs ашиглан бичсэн.</p>
                            <p>- React-context-api, react-router-dom, hooks, server-side-pagination бүхий custom dataTable, системийн бүх моделиудыг front-End талаас CRUD хийх хуудсуудыг бичсэн.  </p>
                        </div>
                    </div>
                </div>
                <div className="details">
                    <div className="item-header item-header--red item-header--gutter">Хамрагдсан сургалт</div>
                    <div className="b-bottom b-bottom--red"></div>
                    <div className="item-header--gutter">
                        <div>1. Mkit, програмчлалын сургалт ( 2017/10-2018/1 )</div>
                        <div>2. Mkit, мэргэшсэн програмистын сургалт ( 2018/10-2019/2 )</div>
                        <div>3. Udemy, NodeJs Complete Guide - Maximilian Shwarz ( 2019/12 )</div>
                        <div>4. Reactjs, Nextjs - Цэндийн Амарбат (2020/3)</div>
                    </div>
                </div>
                <div className="details">
                    <div className="item-header item-header--red item-header--gutter">Боловсрол</div>
                    <div className="b-bottom b-bottom--red"></div>
                    <div className="item-header--gutter">
                        <div className="item-header item-header--red">Мэдээллийн системийн удирдлага - / Бакалавр /</div>
                        <div className="item-header">Монгол Улсын Их Сургууль</div>
                        <div className="item-header--red">2009 - 2013 он</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cv
