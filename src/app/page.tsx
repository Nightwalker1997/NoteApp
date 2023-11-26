import ThemeBTN from '@/components/buttons/themebtn';
import AddModals from '@/components/modals/addModals';

import RegLog from '@/components/modals/user/register_login';
import PagintionControl from '@/components/buttons/pagination';
import DeleteBTN from '@/components/buttons/deletebtn';

const getNotes = async () => {
    try {
        const res = await fetch(`${process.env.NOTE_BASE_URL}/api/notes` , {method: "GET", cache: "no-store"});
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
    
    const {Notes} = await getNotes();

    const perPage = 10;

    const page = searchParams['page'] ?? '1';

    const start = (Number(page) - 1) * perPage;
    const end = start + perPage;
    
    if(!Notes) return <div>Loading ...</div>;
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
                        
                        {Notes 
                            ? 
                            Notes.map((Note: any, index: number) => {
                                return(<tr key={Note._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {Note.title}
                                </td>
                                <td>
                                    <p className="truncate w-11/12">
                                        {Note.description}
                                    </p>
                                </td>
                                <td>
                                    {Note.createdAt}
                                </td>

                                <td 
                                    className="inline-flex items-center hover:cursor-pointer hover:text-red-500"

                                >
                                    <DeleteBTN _id={Note._id} />
                                </td>

                            </tr>)})
                            :
                            null    
                        }      
                        
                    </tbody>
                </table>
            </div>    
            {
                Notes.length >= 10 
                ? 
                    <PagintionControl 
                        hasNextPage = {end < Notes.length} 
                        hasPerviousPage = {start > 0}
                        DataLength = {Notes.length}
                        perPage={perPage}
                    />
                : 
                    null
            }
            
        </main>
  )
}
