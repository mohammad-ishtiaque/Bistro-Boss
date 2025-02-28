import React from 'react'
import MenuItems from '../../components/MenuItems'
import Cover from '../../components/Cover'

const MenuCategory = ({ items, title, coverImg, description }) => {
    return (
        <div className=''>
            {title && <Cover img={coverImg} title={title} description={description} />}
            <div className='max-w-screen-xl mx-auto pt-10 pb-10'>
            <div className="grid md:grid-cols-2 gap-y-8 sm:gap-y-10 md:gap-y-12 gap-x-8 md:gap-x-12 lg:gap-x-16">
                {items.map((item, index) => (
                    <MenuItems key={index} item={item} />
                ))}
            </div>
            </div>
        </div>
    )
}

export default MenuCategory
