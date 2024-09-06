import React from 'react'
import Link from 'next/link'

import { categories } from '@/app/constants'

const CategoryCard = () => {
    return (
        <div>
            <ul>
                <li className='flex flex-row gap-5 justify-between'>
                    {categories.map((category, index) => (
                        <div key={index} className='bg-primary py-2 px-4 rounded-lg'>
                            <Link href={category.link}>
                                {category.label}
                            </Link>
                        </div>
                    ))}
                </li>
            </ul>
        </div>
    )
}

export default CategoryCard