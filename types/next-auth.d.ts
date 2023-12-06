import NextAuth, { Session, DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";


declare module "next-auth" {
    interface Session {
        user: {
          role: string | number | undefined | null
        } & DefaultSession["user"]
    }

  interface User {
    id: string;
    role: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: number;
  }
}