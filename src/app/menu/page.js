"use client";
import { useState } from 'react';

import Header from '.././components/Header'
import Footer from '.././components/Footer'
import BtnTypeMeal from '../components/TypeButton';
import BoxMeal from '../components/BoxMeal';
import getMealsByType from '../api/menu/route';

export default function Menu() {
  const [meals, setMeals] = useState([]);

  async function searchMeals (type) {
    const mealsSearched = await getMealsByType(type);
    setMeals(mealsSearched);
  }

  return (
    <div>
      <Header/>
      <main>
        <section className="menu flex flex-col justify-center items-center">
          <div className="backdrop absolute inset-0 bg-black/45 z-0"></div>
          <div className="reserv-info relative z-10 w-2xl text-white flex flex-col justify-center items-center gap-7">
            <div className="flex flex-col justify-center items-center gap-10 h-72">
              <h1 className="text-5xl text-center text-[#0E0E10] italic">El arte de la cocina clásica con un giro contemporáneo</h1>
              <p className="text-bs text-center w-lg text-[#122414]">
                Aquí no solo servimos comida, servimos recuerdos con un giro moderno.
                Nuestro menú mezcla lo que amamos de siempre con lo que hoy nos inspira.
                Cada bocado tiene historia... y sorpresa. 
              </p>
            </div>
          </div>
        </section>
        <section className="mt-7">
          <div className="flex flex-col justify-center items-center gap-7 mb-12">
            <h1 className="text-4xl text-center  text-[#8B6D3F]">Descubre nuestros platos</h1>
             <p className="w-xl text-center text-sm text-[#356167]">
              Te invitamos a descubrir nuestros platos, donde cada receta combina lo mejor de la tradición con un toque contemporáneo. 
              Sabores auténticos, ingredientes frescos y una presentación cuidada hacen de cada opción una experiencia única. 
              Déjate sorprender por una cocina que respeta el pasado, pero vive en el presente.
            </p>
          </div>
         
          <BtnTypeMeal searchTypes={searchMeals}/>
          <BoxMeal meals={meals}/>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
