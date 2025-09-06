import React, { useEffect, useState } from 'react'
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartTotalQuantity, setOpenCart } from '../app/CartSlice';


const Nav = () => {

    const [navState,setNavState]=useState(false)
    const dispatch = useDispatch();
    const totalQty = useSelector(selectCartTotalQuantity)

    const onCartToggle = () => {
        dispatch(setOpenCart({cartState:true}))
    }

    const onNavScroll = () => {
        if(window.scrollY > 30){

            setNavState(true)

        } else{
            setNavState(false)
        }
        
    }

    useEffect(() => {

        window.addEventListener('scroll',onNavScroll);

        return () => {
            window.removeEventListener('scroll' , onNavScroll);
        }

    },[])
  return (
     <>
    
            <header className={ !navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'}>
                <nav className='flex items-center justify-between nike-container'>
                    <div className='flex items-center '>
    

                    <img src={logo} alt="logo/img" className={`w-16 h-auto ${navState && "filter brightness-0"}`} />

                    </div>
                    
    
                    <ul className='flex items-center justify-items-center gap-2'>
                        <li className='grid items-center'>
    
                            <CiSearch className={`icon-style h-7 w-7 ${navState && "text-slate-900 transition-all duration-300"}`} />
    
    
                        </li>
    
                        <li className='grid items-center'>
                            <CiHeart className={`icon-style h-7 w-7 ${navState && "text-slate-900 transition-all duration-300"}`}  />
                        </li>
    
                        <li className='grid items-center'>
                            <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-100 transition-all duration-300 relative'>

                                <BsHandbag className={`icon-style h-7 w-7 ${navState && "text-slate-900 transition-all duration-300"}`}  />
                                <div className={`absolute top-3 -right-2 w-5 h-5 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100 shadow shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow shadow-slate-100'}`}>{totalQty}</div>
    
                            </button>
                            
                        </li>
                    </ul>
                    
                </nav>
            </header>
        </>
  )
}

export default Nav