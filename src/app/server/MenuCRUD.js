'use server'

import prisma from '@/lib/prisma'

export async function GetAllMeals () {
    const meal = await prisma.meal.findMany();
    return meal;
}

export async function CreateMeal () {
    return await prisma.meal.create({ 
        data: { 
                name, 
                type,
                price,
                allergens,
            } 
    });
}

export async function UpdateMeal (id, data) {
    await prisma.meal.update({ 
        where: { id },
        data: data
    });
}

export async function DeleteMeal (id) {
    await prisma.meal.delete({ where: { id } });
}

export async function getMealsByType (type) {
    const meals = await prisma.meal.findMany({
        where: type
    });
    
    return meals;
}
