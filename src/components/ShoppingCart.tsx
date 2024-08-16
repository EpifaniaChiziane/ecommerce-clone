"use client"
import { useAppDispatch, useAppSelector } from '@/lib/supabase/hooks/redux'
import { getCart, removeFromThecart,  incrementQuantity, decrementQuantity, clearAllCart } from '@/redux/cartSlice'
import Image from 'next/image'
import Subtotal from './shared/Subtotal';

export default function ShoppingCart({cart, totalPrice}:{cart:any, totalPrice:number}){
    const dispatch = useAppDispatch();
    return(
        <div className='w-[70%]'>
            <div className='flex justify-between items-center border-b border-gray-300 py-5'>
                <h1 className="font-bold text-2xl">Shopping Cart</h1>
                <p className='font-medium'>Price</p>
            </div>
            {
                cart.map((product:any)=>{
                    return(
                        <div key={product.id} className='my-4 flex justify-between'>
                            <div className='flex'>
                                <div>
                                    <Image src={product.image} width={100} height={100} alt={``}/>
                                </div>
                                <div className='ml-4'>
                                    <h1 className='font-medium'>{product.title}</h1>
                                    <p className='text-[#007600] font-bold my-1 text-xs'>In Stock</p>
                                    <h1 onClick={() => dispatch(removeFromThecart(product.id))} className='font-bold text-lg text-red-600 cursor-pointer'>REMOVE</h1>

                                    <div className='flex font-medium items-center bg-gray-200 rounded-md my-2 px-4 py-1 w-fit'>
                                        <div  onClick={() => {
                                                product.quantity > 1 && dispatch(decrementQuantity(product));
                                            }} className='cursor-pointer'>-</div>
                                        <div className='cursor-pointer mx-2'>{product.quantity}</div>
                                        <div onClick={() => {
                                                dispatch(incrementQuantity(product));
                                            }} className='cursor-pointer'>+</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className='font-bold text-xl'>{`$${product.price}`}</h1>
                                <p className='text-xs py-1'>M.R.P.: <span className='line-through '>₹3,995.00</span></p>
                            </div>
                     </div>

                    )
                })
            }

            <h1 onClick={()=>{
                dispatch(clearAllCart());
            }} className='text-red-600 font-bold cursor-pointer py-2'>CLEAR ALL</h1>
            <Subtotal left={false} length={cart.length} totalPrice={totalPrice}/>
            
        </div>
    )
}