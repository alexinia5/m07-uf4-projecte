"use client";
import Link from "next/link"
import Image from "next/image";

import Header from '.././components/Header'
import Footer from '.././components/Footer'
import ReservationForm from '.././components/Form'

export default function Reservation() {
  return (
    <div>
      <Header/>
      <main className="bg-stone-300">
        <section className="cover-reservation flex justify-center items-center">
          <div className="backdrop-reserv absolute inset-0 bg-black/25 z-0"></div>
          <div className="reserv-info relative z-10 text-white flex flex-col justify-center items-center gap-7">
            <div className="flex flex-col justify-center items-center gap-3 w-xl h-44">
              <h1 className="text-6xl text-center text-[#0E0E10]">Rerserva tu mesa</h1>
              <p className="text-sm text-center w-sm text-[#122414]">
                Lorem ipsum dolor sit, amet consectetur adipisicing 
                elit. Dicta ducimus rerum veritatis vel unde? Nemo 
                praesentium earum aliquam explicabo maiores voluptas.
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <div className="inline-flex">
            <Image src="/reservation/form.jpeg" className="relative top-10" width={380} height={300} alt="" />
            <div className="bg-white w-lg h-fit relative right-15 bottom-7 p-8 flex flex-col gap-6">
               <h2 className="text-2xl font-semibold text-[#53473f]">Reserva una experiencia única</h2>
               <ReservationForm/>
            </div>
          </div>
        </section>
        <section className="contact-reserv flex justify-center items-center">
          <div className="reserv-info flex flex-col justify-center items-center gap-9 w-lg h-48">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-[#cebdb3]">¿Tienes preguntas?</h2>
                <h1 className="text-5xl font-semibold text-[#f1eae5]">Contactáctanos</h1>
              </div>
              <Link href="/contact" className="text-white rounded-2xl text-sm bg-[#37312A] px-5 py-2 transition-all hover:bg-[#b89f81] hover:text-black">CONTACTAR</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

