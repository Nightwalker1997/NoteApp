import { NextRequest, 
         NextResponse } from "next/server";
import ConnectMongoDB   from "@/mongo";
import User             from "@/models/user";

//type error fixed by changing import statements to require:
const bcryptjs   = require('bcryptjs');
const validator  = require('validator');



export async function POST(req: NextRequest, res: Response){

    const reqBody = await req.json();
    const { email, password} = reqBody;
    
    const validEmail    = validator.isEmail(email);
    const validPassWord = validator.isLength(password, { min: 8, max: 32 });

    if(!validPassWord || !validEmail ) return NextResponse.json({msg: "Invalid Data :("}, {status: 401})

    await ConnectMongoDB();
    //check if email already exists
    try {

        const user = await User.findOne({ email: email});

        if (!user) {
            return NextResponse.json({error: "User Not found!"}, {status: 400});
        }else{
            const validLogin = await bcryptjs.compare(password, user.password);
            if (!validLogin) { 
                return NextResponse.json({error: "Wrong Password or username"}, {status: 401});
            }else{
                console.log("loging successful");
                return NextResponse.json({
                    msg:"user founded.",
                    sucess: true,
                    user
                }, {status: 200});
            }
        }
    }
    catch (err) {
        return NextResponse.json({error: err}, {status: 500});
    }

}