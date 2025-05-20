"use client";
import Header from '.././components/Header'
import Footer from '.././components/Footer'
import BtnTypeMeal from '../components/TypeButton';

export default function Menu() {
  return (
    <div className="">
      <Header/>
      <main className="">
        <section></section>
        <section>
          <BtnTypeMeal />
        </section>
      </main>
      <Footer/>
    </div>
  );
}
