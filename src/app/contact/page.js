/* eslint-disable jsx-a11y/alt-text */
"use client";
import Image from 'next/image';

import Header from '.././components/Header';
import Footer from '.././components/Footer';
import ContactForm from '../components/form_contact';
import CardForm from '../components/card';
import CardInfo from '../components/card_info';

export default function Contact() {
  return (
    <div>
      <Header/>
      <main>
        <section className="contact flex justify-center items-center">
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="reserv-info relative z-10 text-white flex flex-col justify-center items-center gap-7">
            <div className="flex flex-col justify-center items-center gap-3 w-xl h-36">
              <h1>Contacta con nosotros</h1>
              <h2 className="text-center px-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing 
                elit. Dicta ducimus rerum veritatis vel unde? Nemo 
                praesentium earum aliquam explicabo maiores voluptas.
              </h2>
            </div>
          </div>
        </section>
        <section className="contact-info flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col">
            <ContactForm/>
            <CardForm/>
          </div>
          <CardInfo/>
          <div className='relative w-4xl h-72'>
            <Image src="/home/maps.jpeg" alt="Mapa" fill className="rounded-3xl object-cover" style={{ objectPosition: 'center' }}/>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
