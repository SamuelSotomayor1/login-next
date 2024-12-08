import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import Client from "@/models/userModel";
import connect from "@/utils/db";

export const authOptions: any = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                email: { label: "Email", type:"text"},
                password: { label: "Password", type:"password"},
            },
            async authorize(credentials: any){
                await connect();
                try {
                    const client = await Client.findOne({ email: credentials.email});
                    if (client) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            client.password
                        );
                        if(isPasswordCorrect){
                            return client;
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ client, account}: {client: AuthUser; account: Account}){
            if(account?.provider == "credentials"){
                return true;
            }
        },
    },
};

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};