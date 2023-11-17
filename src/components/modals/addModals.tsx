"use client";
import { useState } from 'react';

const AddModals = () => {
    const [ AddModalVisible, setAddModalVisible ] = useState<boolean>(false);
    
    return (<>
        <button type='button' title='Add Note' className="btn" onClick={(e) =>{setAddModalVisible(true)}}>
            <svg className='w-6' aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>
        {   
            AddModalVisible 
                ?
                    <div tabIndex={-1} aria-hidden="true" className="fixed inset-0 bg-black dark:bg-gray-600 opacity-100 filter blur-0 backdrop-blur-sm flex justify-center items-center">

                        <div className="bg-white p-2 text-black rounded text-center items-center ">
                            <div className='my-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white'> 
                                Modal
                            </div>
                            <hr className='h-px my-4 bg-gray-500 border-0'/>
                                
                                <form>
                                    <textarea 
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="Write your thoughts here..."
                                        name="note" 
                                        id="note" 
                                        cols={30} 
                                        rows={10} 
                                        title='NoteArea'
                                    >
                                       
                                    </textarea>
                                </form>

                            <hr className='h-px my-4 bg-gray-500 border-0'/>
                            <div className='my-5'>
                                <button 
                                    className='btn' 
                                    onClick={()=> {setAddModalVisible(false)}}
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

export default AddModals;