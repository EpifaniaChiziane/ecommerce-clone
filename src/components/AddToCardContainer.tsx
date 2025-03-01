import Image from 'next/image'
import prime from '../../public/prime-logo.png'
import { useAppDispatch } from '@/lib/supabase/hooks/redux'
import {addToCart} from '@/redux/cartSlice'
import { useRouter } from 'next/navigation';

export default function AddToCardContainer({product}:{product:any}){
    const dispach = useAppDispatch();
    const router = useRouter();
    return(
        <div className="border border-gray-300 rounded-md h-fit text-sm">
            <div className="p-4">
                <Image src={prime} width={40} height={40} alt={"prime"} />
            </div>

           <div className="p-4">
                <h1> <span className='text-[#147C8F]'>FREE delivery</span> Thursday, 21 March. <span className='text-[#147C8F]'>Details</span></h1>
                <h1 className='mt-4'>Or fastest delivery Tomorrow, 20 March. Order within 15 hrs 53 mins. Details</h1>
                <p className='text-[#147C8F] my-2'>Deliver to Surendra - Jalandhar 144411‌</p>

                <button onClick={() => {dispach(addToCart(product)); router.push(`/cart`) }} className='bg-[#FFD814] w-full rounded-full py-1'>Add to Cart</button>
                <button className='bg-[#FFA41C] w-full rounded-full py-1 my-2'>Buy Now</button>
           </div>
        </div>
    )
}