"use client";
import Link from "next/link";
import Image from "next/image";

import Header from './components/Header';
import Footer from './components/Footer';


export default function Home() {
  return (
    <div>
      <Header />
      <main className="main">
        <section className="mainLanding flex justify-center items-center mb-14">
          <div className="backdrop absolute inset-0 bg-black/45 z-0"></div>
          <div className="main-info relative z-10 text-white flex flex-col justify-center items-center gap-7">
            <div className="flex flex-col justify-center items-center gap-3">
              <h1 className="text-7xl text-[#f7e6c1]">Taste the Difference</h1>
              <h2 className="w-72 text-center text-bs italic">
                Dejamos que el sabor hable por sí solo y que tú decidas qué lo hace diferente.
              </h2>
            </div>
          </div>
        </section>
        <section className="about-us mt-25">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex justify-center items-start gap-5 p-10">
              <Image src="/home/home-about-us.jpeg" width={400} height={500} alt="" />
                <div className="about-info bg-[#1F1F25] text-center p-6 flex flex-col justify-center items-center gap-8">
                  <div className="w-sm text-white">
                  <h1 className="mb-6 font-light text-5xl text-center">TRADICIONAL & MODERNO</h1>
                    <p className="text-sm italic">Un espacio donde lo tradicional y lo moderno se fusionan con sabor.
                      Respetamos las recetas clásicas con un toque creativo y actual.
                      Cada plato es una experiencia que combina historia e innovación.
                      Descubre una cocina auténtica, fresca y sorprendente.</p>
                  </div>
                </div>
              <Image src="/home/about-home.jpeg" width={400} height={500} alt="" />
            </div>
          </div>
        </section>
        <section className="our-menu mt-14 flex flex-col justify-center items-center gap-8">
          <div className="menu-descrip-h text-stone-100 text-center flex flex-col justify-center items-center w-sm">
            <h1 className="mb-4 text-4xl text-[#5e5c45]">Descubre nuestro menú</h1>
            <p className="text-sm w-75 text-[#393832]">
              Nuestro menú combina sabor, frescura y tradición en cada plato.
              Ofrecemos entradas, principales y postres para todos los gustos.
              Ingredientes de calidad y preparación casera nos definen.
              Disfruta una experiencia gastronómica única y auténtica.

              </p>
          </div>
          <div className="flex flex-row gap-10">
            <div className="starters">
              <Image src="/starters/meataballs.jpeg" width={282} height={280} alt="" />
              <h2 className="text-center font-semibold mt-3">ENTRANTES</h2>
            </div>
            <div className="mains">
              <Image src="/home/main-h.jpeg" width={300} height={280} alt="" />
              <h2 className="text-center font-semibold mt-3">PRINCIPALES</h2>
            </div>
            <div className="desserts">
              <Image src="/desserts/cinnamon bun.jpeg" width={282} height={20} alt="" />
              <h2 className="text-center font-semibold mt-3">POSTRES</h2>
            </div>
            <div className="drinks">
              <Image src="/drinks/drinks-h.jpeg" width={270} height={300} alt="" />
              <h2 className="text-center font-semibold mt-3">BEBIDAS</h2>
            </div>
          </div>
          <Link href="/menu" className="rounded-3xl border font-semibold text-sm 
          border-[#693F0C] text-[#693F0C] px-8 py-2 transition-all hover:bg-[#493c33] hover:text-stone-300">MENÚ</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}