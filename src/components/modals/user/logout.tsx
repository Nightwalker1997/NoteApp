"use client";
import { useState } from 'react';

const Login = () => {
    const [ logInModalVisible, setLogInModalVisible ] = useState<boolean>(false);
    
    return (<>
        <button type='button' title='Add Note' className="btn" onClick={(e) =>{setLogInModalVisible(true)}}>
            Login
        </button>
        {   
            logInModalVisible 
                ?
                    <div tabIndex={-1} aria-hidden="true" className="fixed inset-0 bg-black dark:bg-gray-600 opacity-100 filter blur-0 backdrop-blur-sm flex justify-center items-center">

                        <div className="bg-white p-2 text-black rounded text-center items-center ">
                            <div className='my-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white'> 
                                Login
                            </div>
                            <hr className='h-px my-4 bg-gray-500 border-0'/>
                                
                                <form>
                                    
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
                    null
        }

    </>
    )
}

export default Login;