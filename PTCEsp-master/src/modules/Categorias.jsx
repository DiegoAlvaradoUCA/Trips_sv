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

const Categorias = () => {
  const imgArray = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.viator.com%2Fes-ES%2Ftours%2FSan-Salvador%2FDay-Trip-to-El-Tunco-Beach-from-San-Salvador%2Fd5585-6699P50&psig=AOvVaw2q5Ljwh48lLjnBSU0dvZP8&ust=1701662588713000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiHksCx8oIDFQAAAAAdAAAAABAI",
    "https://guanacos.com/wp-content/uploads/2023/08/GUANACOS-LAGO-DE-COATEPEQUE-3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvt--564FdI3_csIfi4SOYgkLCq8eAQaVMkFold8NHeSLYdB8Shxon6EuvNCTEpcAqV-I&usqp=CAU",
    "./src/assets/Fotos/arqueo.jpg",
    "./src/assets/Fotos/necro.jpg",
    "./src/assets/Fotos/agro.jpg",
    "./src/assets/Fotos/eco.jpg",
    "./src/assets/Fotos/etno.jpg",
    "./src/assets/Fotos/comu.jpg",
  ];

  const titleArray = [
    "Playas",
    "Lagos y lagunas",
    "Montañas",
    "Sitios arqueológicos",
    "Necroturismo",
    "Agroturismo",
    "Ecoturismo",
    "Etnoturismo",
    "Turismo comunitario",
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

export default Categorias;
