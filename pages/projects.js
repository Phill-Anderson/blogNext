import React from 'react'
import Layout from 'components/layout'
const projects = () => {
    return (
        <Layout title='Миний төслүүд' description='js хөгжүүлэгч Phill Anderson - ны төслүүд'>
            <div className="mt-5">
                <h3>Төслүүд</h3>
                <div className="post mt-5">
                    <div className="project-image">
                        <h4>LEVELUP.MN / хувилбар 0.3 /</h4>
                    </div>
                    <div className="project-title"><h4><a className="grey" href="https://online-course-web-site-6tahngowf-phill-anderson.vercel.app/" target="_blank">LEVELUP.MN - онлайн сургалтын платформ</a></h4></div>
                    <div className="project-tech">Ашигласан технологи:  REACTJS, BOOTSTRAP, NODEJS, MYSQL</div>
                    <div className="project-details">
                        <ul>
                            <li>1.Админы хялбар удирдлага</li>
                            <li>2.Худалдан авалтыг оператор бүртгэнэ</li>
                            <li>3.Багш бүр өөрийн профайлыг хөгжүүлэх боломж</li>
                            <li>4.Суралцагч нь хичээлийг урьдчилсан захиалгаар авах боломж</li>
                            <li>5.Суралцагч нь  платформ дээр түвшин тогтоох шалгалт өгөх боломжтой</li>
                        </ul>
                    </div>
                </div>
                <div className="post mt-5">
                    <div className="project-image">
                        <h4>LEVEL-UP.MN / хувилбар 1.0 /</h4>
                    </div>
                    <div className="project-title"><h4><a className="grey" href="https://www.level-up.mn" target="_blank">LEVEL-UP.MN - онлайн сургалтын платформ</a></h4></div>
                    <div className="project-tech">Ашигласан технологи:  NEXTJS, MaterialUI, NODEJS, sequelize, MYSQL</div>
                    <div className="project-details">
                        <ul>
                            <li>1.Домэйн хаягыг level-up.mn болгож солисон</li>
                            <li>2.Админы хялбар удирдлага</li>
                            <li>3.Админны хэсэгт сервэр талын хуудаслалт</li>
                            <li>3.Худалдан авалтыг оператор бүртгэнэ</li>
                            <li>4.Багш бүр өөрийн профайлыг хөгжүүлэх боломж</li>
                            <li>5.Суралцагч нь хичээлийг урьдчилсан захиалгаар авах боломж</li>
                            <li>6.Өмнөх хувилбараас төслийн цар хүрээг хумиж өгсөн</li>
                            <li>7.Цөөн тооны нэг ангилалд хамаарах сургалт оруулна</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default projects
