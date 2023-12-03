import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom'

const Card = ({ title, image }) => {
  return (
    <div className="w-full min-h-[25rem] border border-gray-300 rounded-md">
      <div className={`bg-[url('${image}')] h-1/2 bg-cover`}></div>
      <div className="h-1/2 px-4">
        <h1 className="uppercase text-xl text-center py-2 font-medium text-[#55595c]">
          {title}
        </h1>
        <p className="pb-2 text-[#55595c]">
          El Salvador es uno de los destinos de Centroamérica que cuenta con
          hermosas playas que se adaptan a todo tipo de turistas.
        </p>
        <div>
        <Link to="/mas"><input type="submit" value="Ver más" className="py-3 px-7 bg-[#070707] border-[#010000] hover:bg-black text-white hover:cursor-pointer"/></Link>
        </div>
      </div>
    </div>
  );
};

const CardList = ({ titles, images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <Card key={index} title={titles[index]} image={image} />
      ))}
    </div>
  );
};

const Paquetes = () => {
  const imgArray = [
    "https://diarioelsalvador.com/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-05-at-2.06.04-PM-2.jpeg",
    "https://turismo.sv/wp-content/uploads/2019/06/lago-suchitlan-1.jpg",
    "https://culturaazul.com/wp-content/uploads/2019/09/Cerros-y-Monta%C3%B1as-de-El-Salvador.jpg",
   // "./src/assets/Fotos/arqueo.jpg",
    //"./src/assets/Fotos/necro.jpg",
   // "./src/assets/Fotos/agro.jpg",
   // "./src/assets/Fotos/eco.jpg",
   // "./src/assets/Fotos/etno.jpg",
    //"./src/assets/Fotos/comu.jpg",
  ];

  const titleArray = [
    //"Playas",
    //"Lagos y lagunas",
    //"Montañas",
    //"Sitios arqueológicos",
    //"Necroturismo",
    //"Agroturismo",
    //"Ecoturismo",
    //"Etnoturismo",
    //"Turismo comunitario",
  ];

  return (
    <div>
      <Header item1="Volver" ref1="/"></Header>
      <div className="p-4 py-10">
        <CardList titles={titleArray} images={imgArray} />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Paquetes;
