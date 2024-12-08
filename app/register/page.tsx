"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { NextResponse } from 'next/server';


export default function Register() {

    const [error, setError] = useState("");
    const router = useRouter();

    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
        const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
        const password = (form.elements.namedItem("password") as HTMLInputElement)?.value;


        if (!name || !email || !password) {
            return new NextResponse("Todos los campos son obligatorios", { status: 400 });
        }
        
        if (!isValidEmail(email)){
            setError("Email invalido");
            return;
        }

        if (!password || password.length < 8){
            setError("Contraseña invalida");
            return;
        }

        try {
           const res = await fetch("/api/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
           });

           if (res.status === 400) {
            setError("This email is already registered");
            }

           if(res.status === 200){
                setError("");
                router.push("/login");
           }
        } catch (error) {
            setError("Error, try again");
            console.log(error);
        }
    };

    return(
      <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="absolute top-4 left-4">
                <Link href="/login">
                    <button className="bg-gray-200 hover:bg-gray-300 text-black p-2 rounded-lg">
                        Volver
                    </button>
                </Link>
            </div>
            <div className="relative flex flex-col m-6 space-y-4 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <span className="mb-3 text-4xl font-bold text-center">Registrate</span>
                        <span className="font-light text-gray-400 mb-8 text-center pt-2 text-xl">
                        Porfavor ingrese sus datos
                        </span>
                        <p className="text-red-600 text-[16px] text-center font-bold">{error && error}</p>
                            <div className="py-4">
                            <span className="mb-2 text-md">Nombre de usuario</span>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                    name="name"
                                    required
                                />
                            </div>
                            <div className="py-4">
                            <span className="mb-2 text-md">Email</span>
                                <input
                                    type="email"
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="py-4">
                            <span className="mb-2 text-md">Contraseña</span>
                                <input
                                    type="password"
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                    name="password"
                                    required
                                />
                            </div>
                            <div className="flex justify-center w-full py-4">
                            </div>
                            <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                            Registrarse
                            </button>
                    </div>
                </form>
            {/* right side */}
                <div className="relative">
                    <Image
                        src="/paisaje3.jpg"
                        alt="Paisaje"
                        width={400}
                        height={300}
                        className="hidden rounded-r-2xl md:block object-cover"
                    />
                </div>
            </div>
        </div>
     </>
    );
}