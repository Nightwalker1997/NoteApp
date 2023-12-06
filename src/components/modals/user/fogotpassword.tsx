"use client";
import { FC, 
         useState, 
         MouseEvent } from 'react';


interface Config{
    setForgotModalVisible: (params: any) => any,
}


const ForgotPasswordForm:FC<Config>  = ({
    setForgotModalVisible
}) => {
 
    const [ alert,    setAlert]    = useState<boolean>(false);
    const [ email,    setEmail]    = useState<string>();
    const [ password, setPassword] = useState<string>();

    const handleSubmit = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        console.log('Hello My old friend:)');
    }


    return(
        <div tabIndex={-1} aria-hidden="true" className="fixed inset-0 bg-black dark:bg-gray-600 opacity-100 filter blur-0 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-2 w-96 text-black rounded text-center items-center ">
                <form>
                    <div className='my-5 block mb-2 text-3xl font-bold text-gray-700'> 
                        Register From
                    </div>

                    <hr className='h-px my-4 bg-gray-500 border-0'/>
                    {alert 
                    ? 
                        <div 
                            className="w-full p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" 
                            role="alert"
                        >
                            <span className="font-medium">Error:</span> 
                            Please fill out the information field below!!
                        </div>
                    :
                        null
                    }

                    <div className="mb-4">
                        <input 
                            className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            id="email" 
                            type="email" 
                            placeholder="Email Address"
                            title='Email Address'
                            onChange={(e => {
                                setEmail(e.target.value);
                            })}
                            autoFocus={true}

                        />
                    </div>

                    <hr className='h-px my-4 bg-gray-500 border-0'/>
                    <div className='my-5'>
                        <button 
                            className='btn' 
                            onClick={()=> {
                                setForgotModalVisible(false);
                                setAlert(false);
                            }}
                        >
                            Cansel
                        </button>
                        <button 
                            className='btn' 
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            
            </div>
        </div>
    );
}

export default ForgotPasswordForm;