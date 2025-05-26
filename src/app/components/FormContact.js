"use client";

import { useState } from 'react';
import { CreateContact } from '@/app/api/contact/route';
import ModalConfirmation from './modalConfirmation';

export default function ContactForm() {
    const [openModal, setOpenModal] = useState(false);
    const [message, setMessage] = useState('');

    async function handleSubmit (e) {
        e.preventDefault();
        let formData = new FormData(e.target)

        let result = await CreateContact(formData);
        setMessage(result.msg);

        if (result.success) {
            setOpenModal(true);
        } else {
            console.log(result.msg)
        }
    }

    const closeModal = () => setOpenModal(false);
 
    return (
        <div>
            <form onSubmit={handleSubmit} method="post" className="mx-auto max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <input type="text" name="firstName" id="first-name" placeholder="Nombre" className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-400" />
                    </div>
                    <div>
                        <input type="text" name="lastName" id="last-name" placeholder="Apellido" className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-400" />
                    </div>
                    <div className="sm:col-span-2">
                        <input type="email" name="email" id="email" autoComplete="email" placeholder="Email" className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-400" />
                    </div>
                    <div className="sm:col-span-2">
                        <div className="flex rounded-2xl bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-stone-400">
                            <input type="text" name="phone" id="phone-number" className="block min-w-0 grow py-1.5 p-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="123-456-7890" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <textarea name="message" id="message" rows="4" placeholder="Mensage" className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-400"></textarea>
                    </div>
                    <button type="submit" className="block w-full rounded-2xl bg-stone-400 px-3 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400">ENVIAR</button>
                </div>
            </form>
            {openModal && <ModalConfirmation message={message} closeModal={closeModal}/>}
        </div>
    );
}