import React from 'react'
import { chalenges } from '../datas/chalanges'
import Layout from 'components/layout'
const challenges = () => {
    return (
        <Layout>
            <div className="mt-5">
                {
                    chalenges.map(challange => {
                        const { id, name, desc, url } = challange
                        return (
                            <a key={id} href={url} target="_blank" className="challange">
                                <div className="post">
                                    <h4>{name}</h4>
                                    <p>{desc}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default challenges
