import React from 'react';
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import Navbar from '@/components/Navbar';

export default async function Dashboard () {
    const session = await getServerSession();
    if(!session){
        redirect("/login")
    }
    return (
        <>
            <Navbar/>
            <div>Bienvenido</div>
            <h1>{session!.user?.name}</h1>
            <h1>{session!.user?.email}</h1>
        </>
    );
}