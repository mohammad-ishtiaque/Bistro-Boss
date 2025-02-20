import React from 'react'
import bg  from '../../assets/home/chef-service.jpg'

const Hero = () => {
    return (
        <div
        className="min-h-[300px] md:min-h-[400px] lg:min-h-[500px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 sm:p-6 md:p-8 max-w-screen-xl mx-auto"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="bg-white max-w-[90%] sm:max-w-[85%] md:max-w-[800px] w-full p-6 sm:p-8 md:p-10 lg:p-12 text-center shadow-lg">
          <h1 className="text-3xl sm:text-4xl text-black md:text-5xl mb-4 sm:mb-5 md:mb-6 font-serif tracking-wide">BISTRO BOSS</h1>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[85%] md:max-w-[650px] mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt
            ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt
            quibusdam nemo.
          </p>
        </div>
      </div>
    )
}

export default Hero
