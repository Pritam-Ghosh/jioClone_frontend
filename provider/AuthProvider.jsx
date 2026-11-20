"use client"

import React from 'react'
import { useState } from 'react'
import { api, ENDPOINT } from "../lib/api"
import { useDispatch } from "react-redux";
import {userLoggedInDetail} from "../redux/slice/UserSlice"
import { useEffect } from 'react';
function AuthProvider({ children }) {


    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()


    
    const fetcher = async () => {
        try {
          
            const resp = await api.get(ENDPOINT.user)
            if (resp.data.status === "success") {
                dispatch(userLoggedInDetail(resp.data.user))
            }
        } catch (err) {
            console.log(err)
        }
        finally{
              setLoading(false)
        }
    }
useEffect(()=>{
fetcher()
},[dispatch])

if(loading){
    return(
        <>
        <div>
            loading...
        </div>
        </>
    )
}
    return (
        <>

            {children}
        </>
    )
}

export default AuthProvider