"use client"
import { useSupabase } from "@/lib/supabase/hooks/useSupabase";
import SearchResult from "@/components/SearchResult";
import { useParams } from "next/navigation"
import React, { useEffect } from "react";


export default function Search(){
    const {query} = useParams();
    const {filterData, getFilterData} = useSupabase();
 
    useEffect(() =>{
        getFilterData(query.toString());
    }, [])

    console.log(filterData);
    
    return(
        <div>
            <SearchResult filterData = {filterData}/>
        </div>
    )
}