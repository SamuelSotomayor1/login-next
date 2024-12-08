"use client";
import React, { ReactNode } from "react";
import { Session } from "next-auth"; // Importar Session desde next-auth
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

interface AuthProviderProps {
    children: ReactNode;
    session: Session | null;  // Aseguramos que session sea de tipo Session o null
}

const AuthProvider = ({ children, session }: AuthProviderProps) => {
    return <NextAuthSessionProvider session={session}>{children}</NextAuthSessionProvider>;
};

export default AuthProvider;