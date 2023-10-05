import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

// Define a schema for input validation
const userSchema = z.object({
  username: z.string().min(1, "El usuario es requerido").max(100),
  email: z.string().min(1, "El Email es requerido").email("Email Invalido"),
  password: z
    .string()
    .min(1, "Se requiere una contraseña")
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    //Comprobar el correo
    const existeCorreo = await db.user.findUnique({
      where: { email: email },
    });

    if (existeCorreo) {
      return NextResponse.json(
        { user: null, message: "Ese correo ya existe" },
        { status: 409 }
      );
    }

    //Comprobar el usuario
    const existeUsuaro = await db.user.findUnique({
      where: { username: username },
    });

    if (existeUsuaro) {
      return NextResponse.json(
        { user: null, message: "Ese usuario ya existe" },
        { status: 409 }
      );
    }

    const passwordhash = await hash(password, 10);
    const nuevoUsuario = await db.user.create({
      data: {
        username,
        email,
        password: passwordhash,
      },
    });

    const { password: newUserPassword, ...rest } = nuevoUsuario;

    return NextResponse.json(
      { user: rest, message: "Usuario creado exitosamente" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err, success: false });
  }
}
