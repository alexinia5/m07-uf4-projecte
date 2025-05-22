"use client";
import { useState } from 'react';

import Header from '.././components/Header'
import Footer from '.././components/Footer'
import BtnTypeMeal from '../components/TypeButton';
import TableProduct from '../components/TableProduct';
import getMealsByType from '../api/menu/route';

export default function Menu() {
  const [meals, setMeals] = useState([]);

  async function searchMeals (type) {
    const mealsSearched = await getMealsByType(type);
    setMeals(mealsSearched);
  }

  return (
    <div className="">
      <Header/>
      <main className="">
        <section></section>
        <section>
          <BtnTypeMeal searchTypes={searchMeals}/>
          <TableProduct meals={meals}/>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
