import type { NextAuthOptions } from "next-auth";
//providers
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google';

import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
    providers: [
       
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
            //   username: { label: "Username", type: "text", placeholder: "UserName", title: "Username" },
              email: { label: "Email", type: "email", placeholder: "Email"},
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              // You need to provide your own logic here that takes the credentials
              // submitted and returns either a object representing a user or value
              // that is false/null if the credentials are invalid.
              // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
              // You can also use the `req` object to obtain additional parameters
              // (i.e., the request IP address)
              try{
                const res = await fetch(process.env.NEXT_PUBLIC_NOTE_BASE_URL+"/api/users/signin", { 
                    method: 'POST',
                    headers:{
                        Accept: 'application/json, text/plain, */*',
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials)})
                    const user = await res.json()
                
                      // If no error and we have user data, return it
                    if (res.ok && user) {
                        return user
                    }
                      // Return null if user data could not be retrieved
                    return null

                }catch(error){
                    console.log("sign in error: ", error);
                    return null
                
                }

            }
          }),
          GitHubProvider({
            profile(profile) {
                console.log("PROFILE: ", profile)
                let userRole = "GitHub User";
                if (profile && profile?.email == "gholamreza.fallah2208@gmail.com") { userRole = "Admin"; }
                return {
                    ...profile,
                    role : userRole,
                    // id: profile.id.toString(),
                    // image: profile.avatar_url,
                }
            },
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,

      
        }),
        GoogleProvider({
            profile(profile) {
                console.log("PROFILE: ", profile)
                let userRole = "Google User";
                if (profile && profile?.email == "gholamreza.fallah2208@gmail.com") { userRole = "Admin"; }
                return {
                    ...profile,
                    id: profile.sub,
                    role : userRole,
                    // id: profile.id.toString(),
                    // image: profile.avatar_url.toString(),
                }
            },
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),

    ],
    callbacks:{
        async jwt({token, user}){
            if(user) token.role = user.role;
            return token;
        },
        async session({session, token}){
            if(session?.user ) session.user.role = token.role;
            return session;
        }
    }
    // pages: {
    //     signIn: "/users/signin",
    // }
}