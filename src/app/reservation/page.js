"use client";
import Link from "next/link"
import Image from "next/image";

import Header from '.././components/Header'
import Footer from '.././components/Footer'
import ReservationForm from '.././components/form'

export default function Reservation() {
  return (
    <div>
      <Header/>
      <main className="bg-stone-300">
        <section className="cover-reservation flex justify-center items-center">
          <div className="backdrop-reserv absolute inset-0 bg-black/20 z-0"></div>
          <div className="reserv-info relative z-10 text-white flex flex-col justify-center items-center gap-7">
            <div className="flex flex-col justify-center items-center gap-3 w-xl h-36">
              <h1>Rerserva una mesa</h1>
              <h2 className="text-center px-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing 
                elit. Dicta ducimus rerum veritatis vel unde? Nemo 
                praesentium earum aliquam explicabo maiores voluptas.
              </h2>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <div className="inline-flex">
            <Image src="/reservation/form.jpeg" className="relative top-10" width={380} height={300} alt="" />
            <div className="resevation-form bg-white w-lg relative right-15 bottom-15 p-9">
               <h2 className="mb-5">Online Reservation</h2>
               <ReservationForm/>
            </div>
          </div>
        </section>
        <section className="contact-reserv flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3 w-xl h-36">
              <div className="text-white text-center">
                <h2>¿Tienes preguntas?</h2>
                <h1>Contactáctanos</h1>
              </div>
              <Link href="/contact" className="text-white">CONTACTAR</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

