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
              <h3>Más sabor por poco</h3>
              <h1>Taste the Difference</h1>
              <h2 className="w-72 text-center">
                Dejamos que el sabor hable por sí solo.
                Y que tú decidas qué lo hace diferente.
              </h2>
            </div>
            <Link href="/reservation">RESERVAR UNA MESA</Link>
          </div>
        </section>
        <section className="about-us">
          <div className="flex justify-center items-center gap-5 p-10">
            <Image src="/home/home-about-us.jpeg" width={400} height={500} alt="" />
            <div className="about-info text-white p-6 w-3xl text-center flex flex-col items-center gap-8">
              <h1 className="text-5xl text-[#190A02] font-semibold">Bienvenidos a nuestro restaurante</h1>
              <div className="text-[#0F1D00] w-100">
                <p>Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Dicta ducimus rerum veritatis
                  vel unde? Nemo praesentium earum aliquam explicabo
                  maiores voluptas inventore numquam facere. Ea
                  inventore eaque ratione tempora cum.</p>

                <p className="mt-4">Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Dicta ducimus rerum veritatis
                  vel unde? Nemo praesentium earum aliquam explicabo
                  maiores voluptas inventore numquam facere. Ea
                  inventore eaque ratione tempora cum.</p>
              </div>
            </div>
            <Image src="/home/about-home.jpeg" width={450} height={500} alt="" />
          </div>
        </section>
        <section className="our-menu mt-14 flex flex-col justify-center items-center gap-8">
          <div className="menu-descrip-h text-stone-100 text-center flex flex-col justify-center items-center w-sm">
            <h1 className="mb-4 text-4xl text-[#b8b156]">Descubre nuestro menú</h1>
            <p className="text-sm w-75 text-[#ced6cb]">
              Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Dicta ducimus rerum veritatis
              vel unde? Nemo praesentium earum aliquam explicabo
              maiores voluptas inventore numquam facere.</p>
          </div>
          <div className="flex flex-row gap-10 bg-[#DBD8D0] p-7 rounded-3xl">
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
          border-white text-stone-50 px-8 py-2 transition-all hover:bg-stone-300 hover:border-stone-300 hover:text-stone-900">VER MÁS</Link>
        </section>
        <section className="link-reservation"></section>
      </main>
      <Footer />
    </div>
  );
}