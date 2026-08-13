import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Página inicial WEG Academy">
          <Image src="/logo-weg.png" alt="Logo WEG" width={110} height={32} className="h-8 w-auto" priority />
          <span className="text-sm font-bold text-weg-dark">Academy</span>
        </Link>
        <nav className="flex items-center gap-2 text-sm font-semibold text-slate-600" aria-label="Navegação principal">
          <Link href="/#cursos" className="rounded-full px-3 py-2 hover:bg-weg-light hover:text-weg-dark">Cursos</Link>
          <Link href="/sobre" className="rounded-full px-3 py-2 hover:bg-weg-light hover:text-weg-dark">Sobre a WEG</Link>
        </nav>
      </div>
    </header>
  );
}
