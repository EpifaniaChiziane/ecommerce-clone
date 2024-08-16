"use client"
import { getCart } from "@/redux/cartSlice";
import ProccedToBuy from "./ProccedToBuy";
import ShoppingCart from "./ShoppingCart";
import { useAppSelector } from "@/lib/supabase/hooks/redux";

export default function Cart(){
    const cart = useAppSelector(getCart);
    let totalPrice = 0, countItem = 0;
    cart.forEach((item:any) => {
        totalPrice += item.price * item.quantity;
        countItem += item.quantity;
    });

    return(
        <div className="w-[80%] mx-auto mt-10">
            <div className="flex w-full justify-between">
                <ShoppingCart cart={cart} totalPrice={totalPrice}/>
                <ProccedToBuy length={countItem} totalPrice={totalPrice}/>
            </div>
        </div>
    )
}