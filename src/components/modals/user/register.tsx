"use client";
import { 
    FC, 
    useState, 
    MouseEvent } from 'react';
import validator from 'validator';

interface Config{
    setRegisterModalVisible: (params: any) => any,
    setLogInModalVisible:    (params: any) => any,
}
const RegisterForm:FC<Config>  = ({
    setRegisterModalVisible, 
    setLogInModalVisible
}) => {

    const [ userNameAlert, setUserNameAlert] = useState<boolean>(false);
    const [ emailAlert,    setEmailAlert]    = useState<boolean>(false);
    const [ passwordAlert, setPasswordAlert] = useState<boolean>(false);

    const [ username, setUserName]  = useState<string>("");
    const [ email   , setEmail]     = useState<string>("");
    const [ password, setPassword]  = useState<string>("");

    const handleSubmit = async (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        
        setUserNameAlert(!validator.isLength(username, { min: 3, max: 32 })); 
        setEmailAlert(!validator.isEmail(email));
        setPasswordAlert(!validator.isLength(password, { min: 8, max: 32 }));

        if(!userNameAlert && !emailAlert && !passwordAlert){
            try{
                const res = await fetch(process.env.NEXT_PUBLIC_NOTE_BASE_URL+"/api/users/signup", { 
                    method: 'POST',
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                    })
                })
                
                if(!res.ok) throw new Error("Error in registration");
                else{
                    setRegisterModalVisible(false);
                    setLogInModalVisible(true);

                }

            }catch(error){
                console.log("error registering new user: ", error);
            }
        }
    }


    return(
        <div tabIndex={-1} aria-hidden="true" className="fixed inset-0 bg-black dark:bg-gray-600 opacity-100 filter blur-0 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-2 w-96 text-black rounded text-center items-center ">
                <form>
                    <div className='my-5 block mb-2 text-3xl font-bold text-gray-700'> 
                        Register From
                    </div>

                    <hr className='h-px my-4 bg-gray-500 border-0'/>
                    
                    <div className="mb-4">
                        <input 
                            className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            id="username" 
                            type="text" 
                            placeholder="Username"
                            title='Username'
                            onChange={(e => {
                                setUserName(e.target.value);
                            })}
                            autoFocus={true}
                            minLength={3}
                        />
                        {
                            userNameAlert
                            ?
                                <label htmlFor='username' className='text-xs text-red-500'>
                                    UserName atleast must be three characters long.
                                </label>
                            :
                                null
                        }
                    </div>

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
                            onChange={(e => {
                                setPassword(e.target.value);
                            })}
                            minLength={8}
                            maxLength={32}
                        />
                        {
                            passwordAlert
                            ?
                                <label htmlFor='password' className='text-xs text-red-500'>
                                    Your PassWord is weak. <br />
                                    It should contain atleast eight characters.
                                </label>
                            :
                                null
                        }
                    </div>

                    <div 
                        className='my-5 block mb-2 text-sm cursor-pointer font-bold text-blue-600 hover:text-blue-300 underline text-bold'
                        onClick={() => {
                            setRegisterModalVisible(false);
                            setLogInModalVisible(true);
                        }}
                    > 
                        Already have an accont?
                    </div>

                    <hr className='h-px my-4 bg-gray-500 border-0'/>
                    <div className='my-5'>
                        <button 
                            className='btn' 
                            onClick={()=> {
                                setRegisterModalVisible(false);
                            }}
                        >
                            Cansel
                        </button>
                        <button 
                            className='btn' 
                            onClick={handleSubmit}
                        >
                            Register
                        </button>
                    </div>
                </form>
            
            </div>
        </div>
    );
}

export default RegisterForm;