import React from 'react'

const SocialLinks = ({icons}) => {
  return (
    <div>
        <img src={icons} alt="img/icons" className='w-9 h-9 flex items-center md:w-7 md:h-7 sm:w-5 sm:h-5 transition-all duration-300 hover:scale-110' />
    </div>
  )
}

export default SocialLinks