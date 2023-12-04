import Header from "./Header";
import React from "react";
import { Link } from 'react-router-dom'

function Registro() {
  return (
    <div>
      <Header
        item1="Home"
        ref1="/"
        item2="Volver"
        ref2="/"
        //item3=""
        //ref3="/"
      />
     <div className="flex flex-row w-full" >
     <div className="w-3/5" >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/dailypost-73d3c.appspot.com/o/Imagen%20de%20WhatsApp%202023-12-03%20a%20las%2017.55.40_e9e75541.jpg?alt=media&token=f7ca31c5-169b-4df7-b3b1-e7e935e60e00"
          alt="image 1"
          className="h-full w-full object-cover"
          
        />
      </div>
      <div className="w-2/5 pr-8 m-auto">
        <h1 className="uppercase text-2xl tracking-widest m-auto text-center">Ingresar Datos</h1>
        <form action="" method="" className="py-10 m-auto">
            <input type="text" name="username" id="username"  placeholder="Usuario" className="border-2 border-[#55595c] rounded-md w-full py-2 px-3 mt-4 m-auto"/>
            <input type="password" name="password" id="password"  placeholder="Contraseña" className="border-2 border-[#55595c] rounded-md m-auto w-full py-2 px-3 mt-10"/>
            <input type="password" name="reppassword" id="reppassword"  placeholder="Repetir contraseña" className="border-2 border-[#55595c] rounded-md m-auto w-full py-2 px-3 mt-4"/>
            <div className="w-full flex flex-col">
            <input type="submit" value="Registrarse" className="mt-10 w-4/5 bg-[#d9534f] py-4 m-auto text-white uppercase"/>
            </div>
        </form>
        <Link to="../iniciar-sesion"><p className="text-[#008FFF] hover:underline text-center" >Regresar al Login</p></Link>
      </div>
     </div>
    </div>
  );
}

export default Registro;
