import BussinesCard from "@/components/BusinessCard/BusinessCard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";
import Formulario from "./form";

const page = async () => {
  const session = await getServerSession(authOptions);

  
    <Formulario />
    
  if (session?.user) {
     return <h2 className="text-2x1">Presentación Page - Bienvenido {session?.user.username}</h2>
  }

  return <h2>Por favor acceder, para ver tu pagina de presentación</h2>;
};

export default page;
