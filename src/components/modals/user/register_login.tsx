"use client";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const RegLog = () => {
    const [ logInModalVisible, setLogInModalVisible ] = useState<boolean>(false);
    const [ registerModalVisible, setRegisterModalVisible ] = useState<boolean>(false);

    return (<>
        <div>
        <button type='button' title='Register New User' className="btn" onClick={(e) =>{setLogInModalVisible(true)}}>
            <FontAwesomeIcon icon={faRightToBracket} />
        </button>
        {/* <span>/</span> */}
        <button type='button' title='LogIn ' className="btn" onClick={(e) =>{setRegisterModalVisible(true)}}>
           <FontAwesomeIcon icon={faUserPlus} />
        </button>
        </div>
        {   
            
            logInModalVisible 
                ?
                    <div tabIndex={-1} aria-hidden="true" className="fixed inset-0 bg-black dark:bg-gray-600 opacity-100 filter blur-0 backdrop-blur-sm flex justify-center items-center">

                        <div className="bg-white p-2 text-black rounded text-center items-center ">
                            <div className='my-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white'> 
                                Sign In
                            </div>
                            <hr className='h-px my-4 bg-gray-500 border-0'/>
                                
                                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                            Username
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                            Password
                                        </label>
                                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                            Sign In
                                        </button>
                                        <a 
                                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#"
                                            onClick={() => {
                                                setLogInModalVisible(false);
                                                setRegisterModalVisible(true);
                                            }}
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                </form>

                            <hr className='h-px my-4 bg-gray-500 border-0'/>
                            <div className='my-5'>
                                <button 
                                    className='btn' 
                                    onClick={()=> {setLogInModalVisible(false)}}
                                >
                                    close
                                </button>
                                <button 
                                    className='btn' 
                                    onClick={() => {

                                    }}
                                >
                                    save
                                </button>
                            </div>
                        </div>
                    </div>
                :
                    registerModalVisible 
                    ?
                    
                        <div tabIndex={-1} aria-hidden="true" className="fixed inset-0 bg-black dark:bg-gray-600 opacity-100 filter blur-0 backdrop-blur-sm flex justify-center items-center">
    
                            <div className="bg-white p-2 text-black rounded text-center items-center ">
                                <div className='my-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white'> 
                                    Sign up
                                </div>
                                <hr className='h-px my-4 bg-gray-500 border-0'/>
                                    
                                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                            Username
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                            Email
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                            Password
                                        </label>
                                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                                    </div>
                                    
                                    <div className="flex items-center justify-between">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                            Sign up
                                        </button>
                                        <a 
                                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#"
                                            onClick={() => {
                                                setRegisterModalVisible(false);
                                                setLogInModalVisible(true);
                                            }}
                                        >
                                            already have an account?
                                        </a>
                                    </div>
                                </form>
    
                                <hr className='h-px my-4 bg-gray-500 border-0'/>
                                <div className='my-5'>
                                    <button 
                                        className='btn' 
                                        onClick={()=> {setRegisterModalVisible(false)}}
                                    >
                                        close
                                    </button>
                                    <button 
                                        className='btn' 
                                        onClick={() => {
    
                                        }}
                                    >
                                        save
                                    </button>
                                </div>
                            </div>
                        </div>
                    :
                        null
            }
                

    </>
    )
}

export default RegLog;