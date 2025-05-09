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
                        <p>Cenas: 20:00h – 00:30h</p>
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
                    <h1 className="mb-5">Síguenos</h1>
                    <Link href="https://www.instagram.com" target="_blank"></Link>
                    <Link href="https://www.facebook.com/" target="_blank"></Link>
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