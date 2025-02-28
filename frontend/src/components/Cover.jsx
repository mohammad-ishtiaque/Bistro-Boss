import React from 'react'

const Cover = ({img, title, description}) => {
  return (
    <div className='hero h-[700px]' style={{backgroundImage: `url(${img})`}}>
      <div className='hero-overlay opacity-60'></div>
      {/* <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold uppercase'>{title}</h1>
            <p className='mb-5 '>{description}</p>
        </div>
      </div> */}
      <div className="bg-black/40 max-w-[90%] sm:max-w-[85%] md:max-w-[800px] w-full p-6 sm:p-8 md:p-10 lg:p-12 text-center shadow-lg">
        <h1 className="text-3xl sm:text-4xl text-gray-100 md:text-5xl mb-4 sm:mb-5 md:mb-6 font-serif tracking-wide">{title}</h1>
        <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[85%] md:max-w-[650px] mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Cover
