import React from 'react'

const MenuItems = ({ item }) => {
    const { name, image, price, recipe, id } = item;

    return (
        <div key={id} className="flex gap-4 sm:gap-6 md:gap-8 group">
            {/* Image */}
            <div style={{borderRadius: '0 200px 200px 200px'}} className="relative w-[100px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[118px] md:h-[118px] rounded-full overflow-hidden bg-gray-200 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 90px, (max-width: 768px) 100px, 118px"
                />
            </div>

            {/* Content */}
            <div className="flex-1 pt-1 sm:pt-2">
                <div className="flex justify-between items-center gap-2 sm:gap-4">
                    <h3 className="font-serif text-base sm:text-lg md:text-xl tracking-wider group-hover:text-[#E8B10D] transition-colors duration-300">
                        {name}
                        <span className="text-gray-300 ml-2 hidden sm:inline-block">
                            {"-".repeat(Math.max(1, Math.floor(20 - name.length / 2)))}
                        </span>
                    </h3>
                    <span className="text-[#E8B10D] font-medium whitespace-nowrap text-base sm:text-lg md:text-xl">
                        ${price}
                    </span>
                </div>
                <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {recipe}
                </p>
            </div>
        </div>
    )
}

export default MenuItems
