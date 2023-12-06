import { NextRequest, 
         NextResponse } from "next/server";
import ConnectMongoDB   from "@/mongo";
import User             from "@/models/user";
import bcryptjs         from 'bcryptjs';
import validator        from 'validator';


export async function POST(req: NextRequest, res: Response){
    try {
        const reqBody = await req.json();
        const {username, email, password} = reqBody;

        const validuserName = validator.isLength(username, { min: 3, max: 32 });
        const validEmail    = validator.isEmail(email);
        const validPassWord = validator.isLength(password, { min: 8, max: 32 });

        if(!validuserName || !validPassWord || !validEmail ) return NextResponse.json({msg: "Invalid Data :("}, {status: 401})

        await ConnectMongoDB();
        //check if email already exists
        const user = await User.findOne({ email: email});
        if (user) {
            return NextResponse.json({error: "user already exist."}, {status: 400});
        }
        
        const salt = await bcryptjs.genSalt(10);

        const hashpassword = await bcryptjs.hash(password, salt);

        const NewUser = new User({
            username,
            email,
            password: hashpassword
        });

        const savedNewUser = await NewUser.save();
        return NextResponse.json({
            msg:"new user created",
            sucess: true,
            savedNewUser
        }, {status: 201});
    }
    catch (err) {
        return NextResponse.json({error: err}, {status: 500});
    }

}