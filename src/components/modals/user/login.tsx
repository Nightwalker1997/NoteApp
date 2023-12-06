"use client";
import { FC, 
         useState, 
         MouseEvent }   from 'react';

//type error fixed by changing import statements to require:
const validator  = require('validator');

interface Config{
    setForgotModalVisible: (params: any) => any,
    setLogInModalVisible:  (params: any) => any,
}

const LoginForm:FC<Config>  = ({setForgotModalVisible, setLogInModalVisible}) => {

    const [ emailAlert,     setEmailAlert]    = useState<boolean>(false);
    const [ passwordAlert,  setPasswordAlert] = useState<boolean>(false);

    const [ email,    setEmail]    = useState<string>();
    const [ password, setPassword] = useState<string>();

    const handleSubmit = async (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        console.log("user submitted");
        setEmailAlert(!validator.isEmail(email));
        setPasswordAlert(!validator.isLength(password, { min: 8, max: 32 }));

        if(!emailAlert && !passwordAlert){
            try{
                const serverResponse = await fetch(process.env.NEXT_PUBLIC_NOTE_BASE_URL+"/api/users/signin", { 
                    method: 'POST',
                    headers:{
                        Accept: 'application/json, text/plain, */*',
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    })})
                    .then(response => response.json())
                    .catch(error => {
                        throw new Error("Error in registration: ", error);
                    });

                    localStorage.setItem("UserInfo", JSON.stringify(serverResponse.user));
                    setLogInModalVisible(false);

            }catch(error){
                console.log("sign in error: ", error);
            }
        }
    }


    return(
        <div tabIndex={-1} aria-hidden="true" className="fixed inset-0 bg-black dark:bg-gray-600 opacity-100 filter blur-0 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-2 w-96 text-black rounded text-center items-center ">
                <form autoComplete="off">
                    <div className='my-5 block mb-2 text-3xl font-bold text-gray-700'> 
                        Login Account
                    </div>

                    <hr className='h-px my-4 bg-gray-500 border-0'/>

                    <div className="mb-4">
                        <input 
                            className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            id="email" 
                            type="email" 
                            placeholder="Email Address"
                            title='Email Address'
                            autoComplete="off"
                            onChange={(e => {
                                setEmail(e.target.value);
                            })}
                            autoFocus={true}
                        />
                        {
                            emailAlert
                            ?
                                <label htmlFor='email' className='text-xs text-red-500'>
                                    Please enter valid Email Address.
                                </label>
                            :
                                null
                        }
                    </div>
                    <div className="mb-4">
                        <input 
                            className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            id="password" 
                            type="password"  
                            placeholder="Password" 
                            title='Password'
                            autoComplete="off"
                            onChange={(e => {
                                setPassword(e.target.value);
                            })}
                        />
                        {
                            passwordAlert
                            ?
                                <label htmlFor='password' className='text-xs text-red-500'>
                                    Your PassWord is weak.
                                </label>
                            :
                                null
                        }
                    </div>

                    <div 
                        className='my-5 block mb-2 text-sm cursor-pointer font-bold text-blue-600 hover:text-blue-300 underline text-bold'
                            onClick={() =>{
                                setForgotModalVisible(true);
                                setLogInModalVisible(false);
                            }}
                    > 
                        
                        Forgot yout Password?
                    </div>


                    <hr className='h-px my-4 bg-gray-500 border-0'/>
                    <div className='my-5'>
                        <button 
                            className='btn' 
                            onClick={()=> {
                                setLogInModalVisible(false);
                            }}
                        >
                            Cansel
                        </button>
                        <button 
                            className='btn' 
                            onClick={handleSubmit}
                        >
                            Login
                        </button>
                    </div>
                </form>
            
            </div>
        </div>
    );
}

export default LoginForm;