import Link from "next/link";
import Image from "next/image";

function Footer () {
    return (
    <div className="footer flex flex-col gap-10 p-15">
        <div className="flex justify-between">
            <div className="address flex flex-col gap-5 text-stone-300 p-4 w-xs">
                <div>
                    <h1 className="mb-5">📍Ubicación</h1>
                    <h2>Restaurante Domus</h2>
                    <p>Paseo del Paladar Nº 45</p>
                    <p>Barrio de Salamanca, 28001 — Madrid, España</p>
                </div>
                <Image src="/gallery/maps.jpeg" width={300} height={90} alt=""/>
            </div>
            <div className="horario text-stone-300 p-4">
                <h1>🕰️ Horario de Servicio</h1>
                <div className="flex flex-col gap-5 mt-5">
                    <div>
                        <h2>De lunes a viernes</h2>
                        <p>Comidas: 13:30h – 16:0h</p>
                        <p>Cenas: 20:00h – 23:30h</p>
                    </div>
                    <div>
                        <h2>Fines de semana y festivos</h2>
                        <p>Comidas: 13:00h – 17:00h</p>
                        <p>Cenas: 19:00h – 22:00h</p>
                    </div>
                </div>
            </div>
            <div className="info text-stone-300 p-4 w-xs">
                <h1 className="mb-5">✨ Servicios Adicionales</h1>
                <ul>
                    <li>• Se recomienda realizar reserva con antelación.</li>
                    <li>• Aparcamiento privado disponible para clientes.</li>
                    <li>• Ambiente climatizado y espacios para eventos privados.</li>
                    <li>• Opciones vegetarianas, sin gluten y menús personalizados.</li>
                    <li>• Atención trilingüe: Español, Catalán e Inglés.</li>
                </ul>
            </div>
            <div className="social-media flex flex-col gap-10 text-stone-300 p-4">
                <div>
                    <Link href="/contact"><h1>Contacta con nosotros</h1></Link>
                    <p className="mt-5">📞 Reservas: +34 912 345 678</p>
                    <p>✉️ info@domusrestaurant.com</p>
                </div>
                <div>
                    <Link href="https://www.instagram.com">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="25" viewBox="0 0 448 512">
                        {/* <!-- Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                            <path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
        <div className="text-center border-t text-stone-300 border-t-stone-400 pt-5">
            <div className="text-sm">
                <p>© 2025 <strong>Restaurante Domus</strong>. Todos los derechos reservados.</p>
            </div>
            <div className="mt-4 text-xs">
                <Link href="/privacidad" className="text-gray-400 hover:text-white">Política de Privacidad </Link> |  
                <Link href="/cookies" className="text-gray-400 hover:text-white">  Aviso de Cookies</Link>
            </div>
        </div>
    </div>
  );
} 

export default Footer;