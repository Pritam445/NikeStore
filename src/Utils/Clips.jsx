import React from 'react'
import { FaPlay } from "react-icons/fa";

const Clips = ({clip,imgsrc}) => {
  return (
    <>

       <div className='relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14 '>
            <img 
                src={imgsrc} 
                alt="img/clips"
                className='inset-0 flex h-full w-full object-cover absolute
                rounded-xl opacity-100 z-10 transition-opacity duration-500 ' 
            />
            <div className='bg-white lur-effect-theme absolute top-11 left-12 md:left-9 md:top-[28px] lg:top-8 lg:left-10 sm:top-3 sm:left-4 opacity-100 z-[100] w-8 h-8 md:w-6 lg:h-8 lg:w-8 md:h-6 flex items-center justify-center rounded-full'>
                <FaPlay className='icon-style text-slate-800 md:w-3 md:h-3 sm:h-2 sm:w-2'/>
            </div>
            <video 
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            className='absolute inset-0 h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 '
            >
                <source type='video/mp4' src={clip} />
            </video>
       </div>

    </>
  )
}

export default Clips