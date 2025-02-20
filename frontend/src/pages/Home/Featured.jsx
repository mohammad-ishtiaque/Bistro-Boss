import React from 'react'
import SectionTitle from './../../components/SectionTitle';
import featuredImg from '../../assets/home/featured.jpg'

const Featured = () => {
  return (
    <div className="mt-16 min-h-[300px] md:min-h-[400px] lg:min-h-[500px] w-full  bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 sm:p-6 md:p-8 opacity-70 bg-fixed" style={{ backgroundImage: `url(${featuredImg})` }}>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center ">

        <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
        {/* grid */}
        <div className=" grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mt-8">

          <div className="relative h-[300px] sm:h-[400px] w-full">
            <img
              src={featuredImg}
              alt="Featured dish"
              fill
              className="object-cover rounded-lg shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>


          <div className="text-white space-y-4">
            <time className="text-sm sm:text-base opacity-80">March 20, 2024</time>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">WHERE CAN I GET SOME?</h3>
            <p className="text-sm sm:text-base opacity-90 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores
              quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis
              ullam maxime tenetur.
            </p>
            <button className="cursor-pointer px-6 py-3 border-b-2 border-white uppercase text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
