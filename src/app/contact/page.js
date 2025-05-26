/* eslint-disable jsx-a11y/alt-text */
"use client";

import Header from '.././components/Header';
import Footer from '.././components/Footer';
import ContactForm from '../components/FormContact';
import Image from 'next/image';

export default function Contact() {
  return (
    <div>
      <Header/>
      <main>
        <section className="contact flex justify-center items-center">
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="reserv-info relative z-10 text-white flex flex-col justify-center items-center gap-7">
            <div className="flex flex-col justify-center items-center gap-3 w-xl h-36">
              <h1 className="text-[#030104] text-5xl">Contacta con nosotros</h1>
              <h2 className="text-center px-6 text-sm w-96 text-[#030104]">
                Estamos aquí para ayudarte con atención cálida.
                ¡Escríbenos o visítanos, será un placer atenderte!
              </h2>
            </div>
          </div>
        </section>
        <section className="contact-info flex flex-col justify-center items-center">
          <h1 className="text-[#6B5B42] text-4xl">Contestaremos lo antes posible</h1>
          <div className="flex flex-row gap-12 mt-11">
            <ContactForm/>
            <Image src={"/contact/contact2.jpg"} width={500} height={500} alt=''/>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
