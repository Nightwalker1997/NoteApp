import ThemeBTN from '@/components/buttons/themebtn';
import AddModals from '@/components/modals/addModals';

import RegLog from '@/components/modals/user/register_login';
import PagintionControl from '@/components/buttons/pagination';
import NoteData from '@/data/note';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export default function Home(
    {
        searchParams, 
    }: 
    {
        searchParams : {
            [key: string]: string | string[] | undefined}
    })
{
    
    
    const perPage = 10;

    const page = searchParams['page'] ?? '1';

    const start = (Number(page) - 1) * perPage;
    const end = start + perPage;
    
    const pageData = NoteData.slice(start, end);




    return (
        <main className="mt-6">
            <div className="flex justify-around">
                <RegLog />
            
                <AddModals />


                <ThemeBTN />
    
            </div>
            

            <hr className="h-px my-4 bg-gray-100 border-0" />
        
            <div className="flex justify-center">

                <table className="table-fixed">
                    <thead>
                        <tr>
                            <th>row</th>
                            <th>note</th>
                            <th>date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageData.map(({id, note, date}, index) => {
                            return(<tr key={index}>
                            <td>
                                {id}
                            </td>
              
                            <td>
                                <p className="truncate w-11/12">
                                    {note}
                                </p>
                            </td>
                            <td>
                                {date}
                            </td>

                            <td className="inline-flex items-center hover:cursor-pointer hover:text-red-500">
                                <FontAwesomeIcon icon={faTrash} />
                            </td>

                        </tr>);})}
                        
                   
                    </tbody>
                </table>
            </div>    
            
            <PagintionControl 
                hasNextPage = {end < NoteData.length} 
                hasPerviousPage = {start > 0}
                DataLength = {NoteData.length}
                perPage={perPage}
            />
        </main>
  )
}
