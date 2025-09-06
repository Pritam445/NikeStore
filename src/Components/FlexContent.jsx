import React from 'react'

const FlexContent = ({ifExists,endpoint: {heading,title,text,btn,url,img}}) => {
  return (
    <>
    <div className={` flex items-center justify-between  nike-container border-2 border-slate-100 shadow-xl shadow-slate-400 p-5 rounded-2xl ${ifExists ? 'flex-row-reverse': 'flex-row'}`}>

        <div className='max-w-lg lg:max-w-[600px] w-full  grid items-center '>
            <h1 className='text-4xl lg:text-[40px] sm:3xl font-bold text-gradient '>{heading}</h1>
            <h1 className='text-5xl lg:text-[50px] md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h1>

            <p style={{fontSize: "16px"}} className='xl:text-sm my-4 text-slate-900'>{text}</p>
            <a className='flex items-center' target={"_blank"} role='button' href={url}>
                <button type='button' className='button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'>{btn}</button>
            </a>
      </div>
      <div className='flex items-center justify-center max-w-xl relative lg:max-w-[513px] w-full'>
            <img src={img} alt={`img/${heading}`} className={`w-auto object-fill transitions-theme ${ifExists ? 'h-60 lg:h-56 md:h-52 sm:h-44 rotate-6 hover:-rotate-12':'h-72 lg:h-64 md:h-60 sm:h-48 rotate-[19deg] hover:rotate-12'}`} />
      </div>

    </div>
      
    </>
  )
}

export default FlexContent