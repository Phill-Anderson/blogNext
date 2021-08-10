import Link from 'next/link'
import React from 'react'
import Badge from 'react-bootstrap/Badge'

const Categories = ({ categories }) => {

    return (
        <div>
            {/*  <pre>{JSON.stringify(categories, null, 2)}</pre> */}
            {categories && categories.length > 0 && categories.map((category) => (
                <Link href="/">
                    <a className='badge'>{category.title}</a>
                </Link>
            ))
            }
        </div>
    )
}

export default Categories
