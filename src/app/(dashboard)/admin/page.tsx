import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);

    
  if (session?.user) {
     return <h2 className="text-2x1">Presentación Page - Bienvenido {session?.user.username}</h2>
  }

  return <h2>Por favor acceder, para ver tu pagina de presentación</h2>;
};

export default page;
