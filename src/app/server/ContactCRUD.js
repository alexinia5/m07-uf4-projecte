'use server'

import prisma from '@/lib/prisma'

export async function GetContactId (id) {
    const contact = await prisma.contact.findUnique({
      where: {id}
    });
    return contact;
}

export async function CreateContact (formData) {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    console.log('PRISMA.CONTACT:', prisma.contact);

    await prisma.contact.create({ 
        data: { 
                firstName, 
                lastName,
                email,
                phone,
                message,
            } 
    });
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