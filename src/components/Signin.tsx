"use client"
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '@/lib/supabase/products'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function Signin(){
    return (
        <div className='absolute top-0 w-full bg-white py-12 '>
            <div className='w-[24%] mx-auto'>
                <Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                   
                />

            </div>
        </div>
    )
}