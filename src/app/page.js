"use client";
import Link from "next/link";
import Image from "next/image";

import Header from './components/Header';
import Footer from './components/Footer';


export default function Home() {
  return (
    <div>
      <Header/>
      <main className="main">
        <section className="mainLanding flex justify-center items-center">
            <div className="backdrop absolute inset-0 bg-black/50 backdrop-brightness-90 z-0"></div>
            <div className="main-info relative z-10 text-white flex flex-col justify-center items-center gap-7">
              <div className="flex flex-col justify-center items-center gap-3">
                <h3>Más sabor por poco</h3>
                <h1>Taste the Difference</h1>
                <h2 className="w-72 text-center">
                  No buscamos impresionar con palabras.
                  Dejamos que el sabor hable por sí solo.
                  Y que tú decidas qué lo hace diferente.
                </h2>
              </div>
              <Link href="#menu">RESERVAR UNA MESA</Link>
            </div>
        </section>
        <section className="about-us p-10">
          <div className="flex justify-center items-center gap-8 p-10">
            <Image className="rounded-lg" src="/main/home-about-us.jpeg" width={500} height={500} alt=""/>
            <div className="about-info text-white p-6 rounded-lg">
              <h1 className="text-2xl">Bienvenidos a nuestro restaurante</h1>
            </div>
          </div>
        </section>
        <section className="our-menu"></section>
        <section className="link-reservation"></section>
      </main>
      <Footer/>
    </div>
  );
}
