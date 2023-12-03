import React from "react";
import Header from "./Header";
import { CarouselCustomArrows } from "./CarouselCustomArrows";
import GoogleMaps from "./GoogleMaps";
import Footer from "./Footer";
import { Link } from 'react-router-dom'

function Index() {

  return (
    <div className="w-full h-screen relative">
      <div>
        <Header
          item1="Categorías" ref1="/categorias"
          item2="Iniciar Sesión" ref2="/iniciar-sesion"
          item3="Registrarse" ref3="/registro"
          item4="Paquetes" ref4="/paquetes"
          item5="Crud" ref5="/crud"
      
        />
        <div className="h-[36rem] w-screen">
        <CarouselCustomArrows />
        </div>
      </div>
      <div className="flex flex-row gap-6 m-auto py-10 overflow-hidden">
        <div className="w-full min-h-[25rem] border border-gray-300 rounded-md">
          <div className="bg-[url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fjuanlievano.com%2Fplayas%2Fplayas-de-la-libertad-en-el-salvador%2F&psig=AOvVaw3RVMVvFKxUjCBe9OHNZml9&ust=1701663870181000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiFuKG28oIDFQAAAAAdAAAAABAH')] h-1/2 bg-cover "></div>
          <div className="h-1/2 px-4">
            <h1 className="uppercase text-xl text-center py-2 font-medium text-[#55595c]">PLAYAS</h1>
            <p className="pb-2 text-[#55595c]">El Salvador es uno de los destinos de Centroamérica que cuenta con hermosas playas que se adaptan a todo tipo de turistas.</p>
            <div>
            <Link to="/mas"><input type="submit" value="Ver más" className="py-3 px-7 bg-[#070707] border-[#010000] hover:bg-black text-white hover:cursor-pointer"/></Link>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[25rem] border border-gray-300 rounded-md">
          <div className="bg-[url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fpassporterapp.com%2Fes%2Fblog%2Fel-salvador%2Flago-coatepeque-que-ver%2F&psig=AOvVaw3074AkB2FVLNoFRnNF7JpH&ust=1701663911028000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDD-ba28oIDFQAAAAAdAAAAABAY')] h-1/2 bg-cover "></div>
          <div className="h-1/2 px-4">
            <h1 className="uppercase text-xl text-center py-2 font-medium text-[#55595c]">LAGOS Y LAGUNAS</h1>
            <p className="pb-2 text-[#55595c]">El Salvador es uno de los destinos de Centroamérica que cuenta con hermosas playas que se adaptan a todo tipo de turistas.</p>
            <div>
            <Link to="/mas"><input type="submit" value="Ver más" className="py-3 px-7 bg-[#070707] border-[#010000] hover:bg-black text-white hover:cursor-pointer"/></Link>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[25rem] border border-gray-300 rounded-md" >
          <div className="bg-[url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fhistorico.elsalvador.com%2Fhistorico%2F208834%2F7-espectaculares-montanas-y-volcanes-en-el-salvador.html&psig=AOvVaw31PoUnnNcqBX1YDY0KzLFE&ust=1701663986859000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjaqtm28oIDFQAAAAAdAAAAABAD')] h-1/2 bg-cover "></div>
          <div className="h-1/2 px-4">
            <h1 className="uppercase text-xl text-center py-2 font-medium text-[#55595c]">Montañas</h1>
            <p className="pb-2 text-[#55595c]">El Salvador es uno de los destinos de Centroamérica que cuenta con hermosas playas que se adaptan a todo tipo de turistas.</p>
            <div>
              <Link to="/mas"><input type="submit" value="Ver más" className="py-3 px-7 bg-[#070707] border-[#010000] hover:bg-black text-white hover:cursor-pointer"/></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-6">
        <GoogleMaps/>
      </div>
      <div className="w-full flex flex-col gap-6 py-20">
        <h1 className="w-full text-center text-xl">" Gracias por tan buena página web, los paquetes tienen buen precio y teimpo de respuesta en correo es inmediata. "</h1>
        <p className="text-center text-[#55595c] text-lg w-full">-- Carlos Miranda</p>
      </div>
      <Footer/>
    </div>
  );
}

export default Index;
