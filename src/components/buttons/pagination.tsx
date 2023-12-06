"use client";

import {FC}                from 'react';
import { useRouter, 
         useSearchParams } from "next/navigation";

interface pageProps{
    DataLength: Number;
    perPage: Number;
}

const PagintionControl : FC<pageProps> = ({
    DataLength,
    perPage
}) =>
{

    const router = useRouter();
    const searchParams = useSearchParams();

    const page = Number(searchParams.get('page')) ?? 1;


    return (     
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 text-gray-900 whitespace-nowrap dark:text-white">
            <span className="text-sm">
                Showing&nbsp;
                <span 
                    className="font-bold text-base"
                >
                    {((page-1)* Number(perPage)) + 1}
                </span> 
                &nbsp;to&nbsp;
                <span 
                    className="font-bold text-base"
                >
                    {((page-1) * Number(perPage)) + Number(perPage)}
                </span> 
                &nbsp;of&nbsp;
                <span 
                    className="font-bold text-base"
                >
                    {Number(DataLength)}
                </span> 
                &nbsp;Notes
            </span>

            <div className="inline-flex my-1 xs:mt-0">
                <button 
                    className="btn"
                    disabled={page <= 1}
                    onClick={() => {
                        router.push(`/?page=${page - 1 }`)
                    }}
                >
                    
                    Prev
                </button>
                <button 
                    className="btn"
                    disabled={page >= (Number(DataLength) / Number(perPage))}
                    onClick={() => {
                        router.push(`/?page=${page + 1 }`)
                    }}
                >
                    Next
                </button>
            </div>
        </div>       
    );
}


export default PagintionControl;