'use client'

import { CreateReservation } from '@/app/server/ReservationCRUD';

// reutilizar formulario tanto para contacto como para reserva --> añadir campos según la página con children
function ReservationForm() {

    return (
        <div className="flex items-center justify-center mb-2">
            <div className="w-full max-w-[550px]">
                <form action={CreateReservation}>
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
                                    id="radioButton1"
                                    className="h-5 w-5"
                                />
                                <label
                                    htmlFor="radioButton1"
                                    className="pl-3 text-sm font-medium text-[#A27343]"
                                >
                                    Sí
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="radio1"
                                    id="radioButton2"
                                    className="h-5 w-5"
                                />
                                <label
                                    htmlFor="radioButton2"
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
                        >
                            RESERVAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReservationForm;