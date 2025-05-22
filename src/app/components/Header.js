import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-transparent p-1 fixed top-0 left-0 right-0 z-10">
      <nav className="bg-transparent text-stone-400 p-3 flex justify-between items-center pl-5 pr-5">
        <Link href="/"><Image src="/gallery/logo.png" width="60" height="60" alt=""/></Link>
        <div className="space-x-6">
          <Link href="/menu" className="transition-all hover:text-amber-50">MENÚ</Link>
          <Link href="/contact" className="transition-all hover:text-amber-50">CONTACTO</Link>
          <Link href="/reservation" className="transition-all hover:text-amber-50">RESERVA</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
