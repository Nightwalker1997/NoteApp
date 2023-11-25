import ThemeBTN from '@/components/buttons/themebtn';
import AddModals from '@/components/modals/addModals';

import RegLog from '@/components/modals/user/register_login';
import PagintionControl from '@/components/buttons/pagination';
import NoteData from '@/data/note';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { headers } from 'next/headers';

const getNotes = async () => {
    try {
        
        // console.log("headersList: ", { headersList });
        // console.log("Domin: ", headersList.get('host'));
        // console.log("Refere: ", headersList.get('referer'));
        // console.log("URL: ", headersList.get('next-url'));
        // console.log("user-agent: ", headersList.get('user-agent'));
        // console.log("content-type: ", headersList.get('content-type'));
        // console.log("x-access-token: ", headersList.get('x-access-token'));
        // console.log("authorization: ", headersList.get('authorization'));
        
        const headersList = headers();
        const Refere = headersList.get('referer') || 'http://localhost:3000';
        const URL = headersList.get('next-url') || '';
        const HostAdress = Refere.replace(URL, '')

        const res = await fetch(`${HostAdress}/api/notes` , {method: "GET", cache: "no-store"});
        if(!res.ok) throw new Error("failed to fetch notes");
        return res.json();

    }catch(e) {
        console.error("fetching data error: ", e);
    }
}

export default async function Home(
    {
        searchParams
    }: 
    {  
        searchParams : {
            [key: string]: string | string[] | undefined}
    })
{
    
    const {Notes} = await getNotes() ?? [];

    const perPage = 10;

    const page = searchParams['page'] ?? '1';

    const start = (Number(page) - 1) * perPage;
    const end = start + perPage;
    
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
                            <th>title</th>
                            <th>note</th>
                            <th>date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Notes.map(({_id, title, description, createdAt}: {_id:string, title:string, description:string, createdAt:string}, index: number) => {
                            return(<tr key={_id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {title}
                            </td>
                            <td>
                                <p className="truncate w-11/12">
                                    {description}
                                </p>
                            </td>
                            <td>
                                {createdAt}
                            </td>

                            <td 
                                className="inline-flex items-center hover:cursor-pointer hover:text-red-500"
                                // onClick={() => {
                                //     console.log("DELETED: ", _id);

                                // }}
                            >
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
