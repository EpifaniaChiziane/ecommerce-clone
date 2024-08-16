import Image from 'next/image'
import Rating from './shared/Rating'
import {useRouter } from 'next/navigation'

export default function ProductCard({product}:{product:any}){
    const router = useRouter();
    return(
        <div>
            <div className='cursor-pointer' onClick={()=>{
                router.push(`/product/${product.id}`)
            }}>
                <div className='flex bg-gray-100 h-fit justify-center items-center rounded-md overflow-hidden'>
                    <Image className='mix-blend-multiply p-8 mx-auto' src={product.image} width={200} height={200} alt={product.title}/>
                </div>
                <h1 className='font-bold text-sm'>{product.title}</h1>
                <p className='text-sm'>{`${product.description.substring(0,50)}...`}</p>
                <Rating ratings={product.rating}/>
                <p className='font-bold'>{`$${product.price}`}</p>
            </div>
        </div>
    )
}