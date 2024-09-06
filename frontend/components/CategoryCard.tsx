import React from 'react'
import Link from 'next/link'

// import { categories } from '@/app/constants'
import { useQueryCategory } from '@/app/hook/useQueryCategory'

const CategoryCard = () => {

    const { data, isLoading } = useQueryCategory()

    return (
        <div className='flex flex-col gap-3'>
            {/* <ul>
                <li className='flex flex-row gap-5 justify-between'>
                    {categories.map((category, index) => (
                        <div key={index} className='bg-primary py-2 px-4 rounded-lg'>
                            <Link href={category.link}>
                                {category.label}
                            </Link>
                        </div>
                    ))}
                </li>
            </ul> */}
            {isLoading ? 'Loading...' : data.map((data, index) => (
                <div key={index} className='flex flex-row gap-5 justify-between'>
                    <div className='bg-primary py-2 px-4 rounded-lg flex flex-col gap-10'>
                        {/* <Link href={data.name}> */}
                        {data.name}
                        {/* </Link> */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategoryCard