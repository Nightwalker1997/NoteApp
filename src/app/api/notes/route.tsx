import ConnectMongoDB from '@/mongo';
import Note from "@/models/note";
import { NextRequest, NextResponse } from 'next/server';

export async function POST (req: Request, res: Response){

    const {userId, title, description} = await req.json();
    console.log("Post request: " + userId + " " + title + " " + description);
    await ConnectMongoDB();
    await Note.create({userId, title, description});
    return NextResponse.json({msg: "Note created successfully."} , { status: 201 });

}

export async function GET (req: Request, res: Response){
    
    await ConnectMongoDB();
    const Notes = await Note.find();
    return NextResponse.json({Notes} , { status: 201 });

}

export async function DELETE (req: NextRequest){
    const id = req.nextUrl.searchParams.get("id");
    await ConnectMongoDB();
    await Note.findByIdAndDelete(id);
    return NextResponse.json({msg: "Note Deleted successfully."} , { status: 200 });

}
