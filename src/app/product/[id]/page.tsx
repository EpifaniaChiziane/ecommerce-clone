"use client"
import SingleProduct from "@/components/SingleProduct";
import { useSupabase } from "@/lib/supabase/hooks/useSupabase";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function ProductId(){
    const {id} = useParams();
    const {singleProduct, getSingleProduct} = useSupabase();

    useEffect(()=>{
        getSingleProduct(Number(id));
    }, [])

    return(
        <div>
            <SingleProduct singleProduct={singleProduct}/>
        </div>
    )
} 