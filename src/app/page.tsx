import { getServerSession } from 'next-auth/next';
import { options }          from "./api/auth/[...nextauth]/options";
import Navbar               from '@/components/navbar';
import NoteTable            from '@/components/NoteTable';
import ConnectMongoDB       from '@/mongo';
import Note                 from "@/models/note";

// const getNotes = (email: string) => {
//     try {
//         const res = fetch(process.env.NOTE_BASE_URL + '/api/notes' , 
//         {
//             method: "GET", 
//             cache: "no-store"
//         }).then(response => response.json())
//         .catch(error => console.log(error));

//         return res;

//     }catch(e) {
//         console.error("fetching data error: ", e);
//     }
// }

export default async function Home(){
    const session = await getServerSession(options);    
    
    const user = session?.user;

    await ConnectMongoDB();
    const Notes = await Note.find({userEmail: user?.email});


    return (
        <main className="mt-6">
            {session ? 
                <Navbar user={session?.user} />
            :
                <h1>YOU SHALL NOT PASS.</h1>
            }
            
            {Notes.length > 0 
                    ?
                        <NoteTable Notes={Notes} />
                    :
                        <div className="text-center text-lg underline justify-center text-red-300 text-semibold">
                            You need to add a Note.
                        </div>
           }

        </main>
  )
}
