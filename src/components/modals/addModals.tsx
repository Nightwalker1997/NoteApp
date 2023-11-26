"use client";

import { useState, MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const AddModals = () => {
    const [ AddModalVisible, setAddModalVisible ] = useState<boolean>(false);
    
    const [ title, setTitle ] = useState<string>();
    const [ description, setDescription ] = useState<string>();
    const [ alert, setAlert ] = useState<boolean>(false);

    const router = useRouter();

    const handleSubmit = async (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if(!title || !description){
            setAlert(true);
        }
        console.log("address: ", process.env.NEXT_PUBLIC_NOTE_BASE_URL + "/api/notes");
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_NOTE_BASE_URL + "/api/notes", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: "1", 
                    title, 
                    description
                })
            })
            console.log("response: ", res);
            if (res.ok) {
                setAddModalVisible(false);
                
                router.refresh();
                
            }else{
                throw new Error("Failed to add Note!!")
            }
        }catch (error){
            console.error("Error: ", error);
        }
    }

    return (<>
        <button type='button' title='Add Note' className="btn" onClick={(e) =>{setAddModalVisible(true)}}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
        {   
            AddModalVisible 
                ?
                    <div tabIndex={-1} aria-hidden="true" className="fixed inset-0 bg-black dark:bg-gray-600 opacity-100 filter blur-0 backdrop-blur-sm flex justify-center items-center">

                        <div className="bg-white p-2 text-black rounded text-center items-center ">
                            <form>
                                <div className='my-5 block mb-2 text-3xl font-bold text-gray-700'> 
                                    Add your notes here.
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
                                        id="title" 
                                        type="text" 
                                        placeholder="Title"
                                        title='Title'
                                        onChange={(e => {
                                            setTitle(e.target.value);
                                        })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea 
                                        className="shadow appearance-none block py-2 px-3 w-full text-sm leading-tight focus:outline-none focus:shadow-outline text-gray-700 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="Write your thoughts here..."
                                        name="descreption" 
                                        id="descreption" 
                                        cols={30} 
                                        rows={10} 
                                        title='Descreption'
                                        onChange={(e => {
                                            setDescription(e.target.value);
                                        })}
                                    >
                                    </textarea>
                                </div>
                                <hr className='h-px my-4 bg-gray-500 border-0'/>
                                <div className='my-5'>
                                    <button 
                                        className='btn' 
                                        onClick={()=> {
                                            setAddModalVisible(false)
                                            setAlert(false);
                                        }}
                                    >
                                        close
                                    </button>
                                    <button 
                                        className='btn' 
                                        onClick={handleSubmit}
                                    >
                                        save
                                    </button>
                                </div>
                            </form>
                         
                        </div>
                    </div>
                :
                    null
        }

    </>
    )
}

export default AddModals;