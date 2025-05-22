'use client'

import { CreateReservation } from '@/app/api/reservation/ReservationCRUD';
import { useState } from 'react';
import ModalConfirmation from './modalConfirmation';

// reutilizar formulario tanto para contacto como para reserva --> añadir campos según la página con children
function ReservationForm() {
    const [openModal, setOpenModal] = useState(false);
    const [message, setMessage] = useState('');

    async function handleSubmit (e) {
        e.preventDefault();
        let formData = new FormData(e.target)

        let result = await CreateReservation(formData);
        setMessage(result.msg);

        if (result.success) {
            setOpenModal(true);
        } else {
            console.log(result.msg)
        }
    }

    const closeModal = () => setOpenModal(false);

    return (
        <div className="flex items-center justify-center mb-2">
            <div className="w-full max-w-[550px]">
                <form onSubmit={ e => handleSubmit(e)}>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="lName"
                                    className="mb-3 block text-sm font-medium text-[#A27343]"
                                >
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="fName"
                                    id="fName"
                                    placeholder="Nombre"
                                    required={true}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-medium text-[#6B7280] outline-none focus:border-[#945868] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="lName"
                                    className="mb-3 block text-sm font-medium text-[#A27343]"
                                >
                                    Apellidos
                                </label>
                                <input
                                    type="text"
                                    name="lName"
                                    id="lName"
                                    placeholder="Apellidos"
                                    required={true}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-medium text-[#6B7280] outline-none focus:border-[#945868] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="guest"
                            className="mb-3 block text-sm font-medium text-[#A27343]"
                        >
                            Cuántas personas vas a traer?
                        </label>
                        <input
                            type="number"
                            name="guest"
                            id="guest"
                            placeholder="5"
                            min="0"
                            required={true}
                            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-medium text-[#6B7280] outline-none focus:border-[#945868] focus:shadow-md"
                        />
                    </div>

                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="date"
                                    className="mb-3 block text-sm font-medium text-[#A27343]"
                                >
                                    Fecha
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    required={true}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-medium text-[#6B7280] outline-none focus:border-[#945868] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="time"
                                    className="mb-3 block text-sm font-medium text-[#A27343]"
                                >
                                    Hora
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    required={true}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-medium text-[#6B7280] outline-none focus:border-[#945868] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-sm font-medium text-[#A27343]">
                            Vas a querer plaza de párquing?
                        </label>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="radio1"
                                    required={true}
                                    id="yes"
                                    className="h-5 w-5"
                                    value={"Sí"}
                                />
                                <label
                                    htmlFor="yes"
                                    className="pl-3 text-sm font-medium text-[#A27343]"
                                >
                                    Sí
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="radio1"
                                    id="no"
                                    className="h-5 w-5"
                                    value={"No"}
                                />
                                <label
                                    htmlFor="no"
                                    className="pl-3 text-sm font-medium text-[#A27343]"
                                >
                                    No
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <button type='submit' data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                            className="hover:shadow-form rounded-3xl bg-[#27211c] py-2 px-4 text-center text-sm font-semibold text-white outline-none transition-all hover:bg-[#b7a57c]"
                        >RESERVAR</button>
                    </div>
                    {openModal && <ModalConfirmation show={openModal} message={message} closeModal={closeModal}/>}
                </form>
            </div>
        </div>
    );
}

export default ReservationForm;