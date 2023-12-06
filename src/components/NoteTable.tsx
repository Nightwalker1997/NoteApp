"use client";
import { FC }               from "react";
import { useSearchParams }  from 'next/navigation';
import DeleteBTN            from '@/components/buttons/deletebtn';
import PagintionControl     from '@/components/buttons/pagination';

interface TableConfig{
    Notes: object[];
}

const NoteTable: FC<TableConfig> = ({ Notes }) => {

    const searchParams = useSearchParams()
    const perPage = 10;
    const page = searchParams.get('page') ?? '1';
    const start = (Number(page) - 1) * perPage;
    const end = start + perPage;
    const PageNotes = Notes.slice(start, end);

    return(
    <div className="flex justify-center">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Row
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Created At
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Delete</span>
                        </th>
                    </tr>
                </thead>
               <tbody>
                    {
                        PageNotes.map((Note: any, index: number) => {

                            const options = {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            };

                            const NoteDate = Note.createdAt.toLocaleDateString(undefined, options);

                            return (  
                                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600" key={Note._id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                         {(Number(page)-1) * perPage + index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {Note.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        {Note.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {NoteDate}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <DeleteBTN _id={Note._id} />
                                    </td> 
                                </tr>)
                            })
                    }      
                        
                </tbody>
            </table>
            
            {
                Notes.length >= 10 
                ? 
                    <PagintionControl 
                        DataLength = {Notes.length}
                        perPage={perPage}
                    />
                : 
                    null
            }
            
        </div> 
    </div>
)}

export default NoteTable;