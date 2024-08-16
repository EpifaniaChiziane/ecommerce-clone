"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import amazon from '../../public/amazon-logo-2.webp'
import { BiCart } from 'react-icons/bi'
import { CgSearch } from 'react-icons/cg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/lib/supabase/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import { supabase } from '@/lib/supabase/products';

const itemList = [
    "All",
    "Fresh",
    "Amazon miniTV",
    "Sell",
    "Gift Cards",
    "Baby",
    "Buy Again",
    "Browsing History",
    "Amazon Pay",
    "Gift Ideas",
    "Health, Household & Personal Care"
]


export default function Header(){
    const [query, setQuery] = useState<string>("");
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    const cart = useAppSelector(getCart);
    let count = 0;

    cart.forEach((item:any) => {
        count += item.quantity;
    });

    const searchHandler = () => {
        router.push(`/search/${query}`);
    }

    useEffect(()=>{
        const getUserData = async () => {
            const {data:{user}} = await supabase.auth.getUser();
            setUser(user);
        }
        getUserData();
    },[])

    return(
        <>
            <div className="bg-[#131921] text-white p-2">
                <div className='flex items-center justify-between w-[90%] mx-auto'>
                    <Link href="/" className='w-[10%]'>
                        <Image  src={amazon} width={150} height={150} alt=''/>
                    </Link>
                    <div className='flex w-[60%]'>
                        <input value={query} onChange={(e)=>setQuery(e.target.value)} className='w-full p-2 rounded-l-md text-black outline' type="text" placeholder='Search Amazon.in'/>
                        <div onClick={searchHandler} className='bg-[#FEB069] p-2 cursor-pointer  rounded-r-md hover:bg-[#ffad43]'><CgSearch fontSize={24} className='text-black'/></div>
                    </div>
                    <div onClick={()=> router.push('/signin')} className='flex items-center justify-between w-[20%]'>
                        <div className='cursor-pointer'>
                            <h1 className='text-xs hover:underline'>{`${user ? user?.identities[0]?.identity_data.full_name:"Signin"}`}</h1>
                            <h1 className='font-medium text-sm'>Account & Lists</h1>
                        </div>
                        <div>
                            <p className='text-xs'>Returns</p>
                            <h1>& Orders</h1>
                        </div>
                        <div className='relative -top-1'>
                            <p className='relative top-2 left-3 text-xs'>{count}</p>
                            <div className="flex">
                                <div>
                                    <BiCart fontSize={30} />
                                </div>
                                <h1 className=' mt-1 text-sm'>Cart</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#232F3E] w-full text-white p-2 flex'>
                <div>
                    {
                        itemList.map((link,idx) =>{
                            return(
                                <Link key={idx} href={`/${link}`} className='mx-2 hover:border border border-transparent hover:border-white p-2'>
                                    {link}
                                </Link>
                            )
                        })
                    }
                </div>
                <div className='mr-5'>
                    <h1 onClick={ async ()=>{
                        const {error} = await supabase.auth.signOut();
                        router.push("/");
                        router.refresh();
                    }} className='text-[#FEBD69] font-bold cursor-pointer hover:underline' >Sign out</h1>
                </div>
            </div>
        </>
    )
}