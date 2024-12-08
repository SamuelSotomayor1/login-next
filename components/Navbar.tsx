"use client"

import {signOut} from 'next-auth/react';

export default function Navbar() {
    return (
    <>
    <div className="w-full">
        <nav className="flex w-full h-28 pt-0 text-white bg-slate-900 shadow-md lg:px-8 lg:py-3">
            <div className="flex w-full items-center justify-center text-gray-100">
                <div className="mr-4 block py-1.5 text-gray-200 font-bold text-2xl">
                    App Login
                </div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                    signOut();
                }}
                >
                    Cerrar Sesión
                </button>
            </div>
        </nav>
    </div>
    </>
    );
}