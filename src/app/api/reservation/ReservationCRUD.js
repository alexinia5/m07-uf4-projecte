'use server'

import prisma from '@/lib/prisma'

export async function GetReservationById (id) {
    const reservation = await prisma.reservation.findUnique({
      where: {id}
    });
    return reservation;
}

export async function CreateReservation (formData) {
    try {
        const data = {
            firstName: formData.get('fName'),
            lastName: formData.get('lName'),
            guest: parseInt(formData.get('guest')),
            date: formData.get('date'),
            hour: formData.get('time'),
            parking: formData.get('radio1'),
        }

        await prisma.reservation.create({ 
            data: data
        });

        return {
            success: true,
            msg: 'Tu reserva ha sido confirmada correctamente.'
        }

    } catch(error) {
        console.log(error);

        return {
            success: false,
            msg: 'No se ha podido hacer la reserva.'
        }
    }
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