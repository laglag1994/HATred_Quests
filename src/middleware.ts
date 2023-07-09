import { error } from "console";
import { NextApiRequest } from "next";

export async function middleware(req: NextApiRequest) {
    // is it defined?
    if (req.cookies) {
        // user have a token?
        const token = req.cookies['user-token'];
        const verifiedToken = token && 
        await verifyAuth(token).catch((error)=>{
            console.log(error)
        })
    }

}

export const config = {
    matcher: ['/dashboard', 'login'],
};
