import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-transparent p-1 fixed top-0 left-0 right-0 z-10">
      <nav className="bg-transparent text-stone-500 p-3 flex justify-between items-center">
        <Link href="/"><Image src="/gallery/logo.png" width="60" height="60" alt=""/></Link>
        <div className="space-x-6">
          <Link href="/about" className="hover:text-amber-100">NOSOTROS</Link>
          <Link href="/menu" className="hover:text-amber-100">MENÚ</Link>
          <Link href="/gallery" className="hover:text-amber-100">GALERÍA</Link>
          <Link href="/contact" className="hover:text-amber-100">CONTACTO</Link>
        </div>
        <Link href="/reservation" className="bg-transparent text-stone-600 border-1 
        px-4 py-2 rounded-3xl transition-all hover:bg-stone-300">RESERVA</Link>
      </nav>
    </header>
  );
}

export default Header;
