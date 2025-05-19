'use server'

import prisma from '@/lib/prisma'

export async function GetReservationById (id) {
    const reservation = await prisma.reservation.findUnique({
      where: {id}
    });
    return reservation;
}

export async function CreateReservation (formData) {
    const firstName = formData.get('fName');
    const lastName = formData.get('lName');
    const guest = parseInt(formData.get('guest'));
    const date = formData.get('date');
    const hour = formData.get('time');
    const parkingRaw = formData.get('radio1');

    let parking = parkingRaw === "Sí" || parkingRaw === "on"

    await prisma.reservation.create({ 
        data: { 
                firstName, 
                lastName,
                guest,
                date,
                hour,
                parking
            } 
    });
}

export async function UpdateReservation (id, data) {
    await prisma.reservation.update({ 
        where: { id },
        data: data
    });
}

export async function DeleteReservation (id) {
    await prisma.reservation.delete({ where: { id } });
}