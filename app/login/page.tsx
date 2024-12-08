"use client"

import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
    return(
        <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">

        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <form>
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold text-center">Bienvenido</span>
            <span className="font-light text-gray-400 mb-8 text-center pt-2 text-xl">
              Porfavor ingrese sus datos
            </span>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Contraseña</span>
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" 
              />
            </div>
            <div className="flex justify-center w-full py-4">
             <span className="font-bold text-md text-center">Olvidaste tu contraseña</span>
            </div>
              <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                Iniciar Sesión
              </button>
          <div className="text-center text-gray-400">
            No tienes cuenta? <Link href="/register"><span className="font-bold text-black">Registrate gratis</span></Link>
          </div>
          </div>
        </form>
        {/* right side */}
          <div className="relative">
            <Image
                  src="/paisaje2.jpg"
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