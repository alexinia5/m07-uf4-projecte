'use server'

import prisma from '@/lib/prisma'

export async function GetContactId (id) {
    const contact = await prisma.contact.findUnique({
      where: {id}
    });
    return contact;
}

export async function CreateContact (formData) {
    try {
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        }

        await prisma.contact.create({ 
            data: data
        });

        return {
            success: true,
            msg: 'Hemos recibido tu contacto.'
        }

    } catch(error) {
        console.log(error);

        return {
            success: false,
            msg: 'No se ha podido guardar el contacto.'
        }
    }
}

export async function UpdateContact (id, data) {
    await prisma.contact.update({ 
        where: { id },
        data: data
    });
}

export async function DeleteContact (id) {
    await prisma.contact.delete({ where: { id } });
}