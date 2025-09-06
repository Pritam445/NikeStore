import React from 'react'
import { FaAnglesLeft } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const CartCount = ({onCartToggle,onCartEmpty,totalQty}) => {
  return (
    <>

        <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
            <div className='flex items-center gap-3' onClick={onCartToggle}>
                <div className='grid items-center cursor-pointer'>
                    <FaAnglesLeft className=' w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]' />

                </div>
                <div>
                    <h1 className='text-base font-medium'>Your Cart <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-sm'>(<span>{totalQty}</span> Items)</span></h1>
                </div>
            </div>
            <div className='flex items-center'>
                <button type='button' className='rounded bg-theme-cart active:scale-90 p-0.5 ' onClick={onCartEmpty}>
                    <FaXmark className='w-5 h-5 text-white stroke-[2]' />
                </button>
            </div>
        </div>

    </>
  )
}

export default CartCount