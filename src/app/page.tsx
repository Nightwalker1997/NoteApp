import ThemeBTN from '@/components/buttons/themebtn'

export default function Home() {
    return (
        <main className="mt-6">
            <div className="flex justify-around">
                <button className="btn">login</button>

                <button type='button' title='Add Note' className="btn">
                    <svg className='w-6' aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>

                <ThemeBTN />
    
            </div>
            
            <hr className="h-px my-4 bg-gray-100 border-0" />
        
            <div className="flex justify-center">

                <table className="table-auto border-white border-2">
                    <thead>
                        <tr>
                            <th>row</th>
                            <th>note</th>
                            <th>date</th>
                            <th>E d i t</th>
                            <th>Delete</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
              
                            <td>
                                <p className="truncate w-96">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, atque sequi debitis dolorem doloribus velit impedit? Suscipit voluptates quidem voluptatum, veniam, quam maiores, dolore accusantium ducimus eius delectus fuga numquam?
                                </p>
                            </td>
                            <td>1923/12/11</td>
                            <td className="px-2 py-1 hover:cursor-pointer hover:text-red-500">
                                <svg  aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </td>
                            <td className="inline-flex items-center hover:cursor-pointer hover:text-red-500">
                                <svg className="w-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />


            
        </main>
  )
}
