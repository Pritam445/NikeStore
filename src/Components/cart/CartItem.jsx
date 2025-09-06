import React from 'react'
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { setDecreaseItemQuantity, setIncreaseItemQuantity, setRemoveItemFromCart } from '../../app/CartSlice';

const CartItem = ({ item: { id, title,text,img,color,shadow,price, cartQuantity } }) => {

  const dispatch = useDispatch();

  const onRemoveItemFromCart = () => {
    dispatch(setRemoveItemFromCart({id,title,text,img,color,shadow,price, cartQuantity}));
  }

  const onIncreaseItemQuantity = () => {
    dispatch(setIncreaseItemQuantity({id,title,text,img,color,shadow,price, cartQuantity}));
  }
  const onDecreaseItemQuantity = () => {
    dispatch(setDecreaseItemQuantity({id,title,text,img,color,shadow,price, cartQuantity}));
  }

  return (
    <>
      <div className='flex items-center justify-between w-full px-5'>
        <div className='flex items-center gap-5'>
          <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
            <img src={img} alt={`img/cart-item/${id}`} className='w-36 h-auto object-fill lg:w-28' />
            <div className='absolute right-1 top-1 bg-white/80  text-xs px-1 rounded blur-theme-effect font-medium text-slate-900'>${price}</div>
          </div>
          <div className='grid items-center gap-4'>
            <div className='grid items-center leading-none'>

              <h1 className='font-medium text-lg text-slate-900 lg:text-sm'>{title}</h1>
              <p className='text-sm text-slate-800 lg:text-xs'>{text}</p>

            </div>
            <div className='flex items-center justify-around w-full min-w-[100px] lg:min-w-[80px]'>

              <button type='button' className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center icon-style' onClick={onDecreaseItemQuantity}><FaMinus className='w-4 h-4 lg:w-4 lg:h-4 text-slate-100 stroke-[2]' /></button>

              <div className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center text-white'>{cartQuantity}</div>

              <button type='button' className='bg-theme-cart rounded  w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center icon-style' onClick={onIncreaseItemQuantity}><FaPlus className='w-4 h-4 lg:w-4 lg:h-4 text-slate-100 stroke-[2]' /></button>

            </div>
            

          </div>
        </div>
        <div className='grid items-center gap-5'>
          
          <div className='grid items-center justify-items-center'>
            <h1 className='texqt-lg font-medium text-slate-900 lg:text-base'>
              ${price * cartQuantity}
            </h1>
          </div>
          <div className='grid items-center justify-items-center'>
            <button className='bg-theme-cart rounded  w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center icon-style ' type='button' onClick={onRemoveItemFromCart}><FaTrash  /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem