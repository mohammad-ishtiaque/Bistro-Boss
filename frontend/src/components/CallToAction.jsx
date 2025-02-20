import React from 'react'

const CallToAction = () => {
    return (
        <div className="bg-black w-full py-8 sm:py-10 md:py-12 mt-8 max-w-screen-xl mx-auto">
            <div className="container mx-auto px-4">
                <a href="tel:+8801923456789" className="flex justify-center items-center gap-2 text-white group">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide">Call Us:</span>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide group-hover:text-[#E8B10D] transition-colors duration-300">
                        +88 01829909900
                    </span>
                </a>
            </div>
        </div>
    )
}

export default CallToAction
