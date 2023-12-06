"use client"

import { FC }       from "react";
import RegLog       from "./modals/user/register_login";
import AddModals    from "./modals/addModals";
import ThemeBTN     from "./buttons/themebtn";
import Logout       from './modals/user/logout';

interface config{
    user: object | undefined;
}

const Navbar:FC<config> = ({ user }) => {
    return (<>
            <div className="flex justify-around">
                {
                    user === undefined 
                    ?
                        <RegLog />
                    :
                        <Logout />  
                }
                <AddModals />
                <ThemeBTN />
            </div>
            

            <hr className="h-px my-4 bg-gray-100 border-0" />
    </>);
}

export default Navbar;