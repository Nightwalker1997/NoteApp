"use client";

import {FC} from 'react';


import { useRouter, useSearchParams } from "next/navigation";

interface pageProps{
    hasNextPage: boolean;
    hasPerviousPage: boolean;
    DataLength: Number;
    perPage: Number;
}

const PagintionControl : FC<pageProps> = ({
    hasNextPage, 
    hasPerviousPage,
    DataLength,
    perPage
}) =>
{

    const router = useRouter();
    const searchParams = useSearchParams();

    const page = Number(searchParams.get('page')) ?? 1;


    return (            
        <div className='flex justify-center my-6 b-0'>
            <nav aria-label="Page navigation">
                <ul className="inline-flex -space-x-px text-base h-10">
                    <li>
                        <button 
                            disabled={!hasPerviousPage}  
                            className="Pagitination_btn"
                            onClick={() => {
                                router.push(`/?page=${page - 1 }`)
                            }}
                        >
                            Previous
                        </button>
                    </li>
                    
                    <li>
                        <a aria-current="page" className="Pagitination_btn_current">
                            {page <= 1 ? 1 : page}
                        </a>
                    </li>
                    
                    
                    <li>
                        <button 
                            disabled={!hasNextPage}  
                            className="Pagitination_btn"
                            onClick={() => {
                                router.push(`/?page=${page + 1 }`)
                            }}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>    
        </div>
    );
}


export default PagintionControl;