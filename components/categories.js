import Link from 'next/link'
import React from 'react'
import Badge from 'react-bootstrap/Badge'

const Categories = ({ categories }) => {

    return (
        <div className="mt-5">
            {/*  <pre>{JSON.stringify(categories, null, 2)}</pre> */}
            <h4>Сэдвүүд</h4>
            <hr />
            <div style={{ paddingTop: '20px' }}>
                {categories && categories.length > 0 && categories.map((category) => (
                    <Link href={`/blog?category=${category.title}`}>
                        <a key={category.title} className='catItem'>{category.title}</a>
                    </Link>
                ))
                }
            </div>
        </div>
    )
}

export default Categories
