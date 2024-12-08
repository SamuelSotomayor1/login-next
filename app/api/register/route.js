import Client from "@/models/userModel";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(request){
    const{ name, email, password } = await request.json();
    await connect();

    const existingClient = await Client.findOne({email});

    if(existingClient){
        return new NextResponse("El email ya está en uso", {status: 400});
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newClient = new Client({
        name,
        email,
        password: hashedPassword,
    });

    try {
        await newClient.save();
        return NextResponse.json({message: "User agregated"}, {status: 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error en el registro' }, { status: 500 });
    }
}
