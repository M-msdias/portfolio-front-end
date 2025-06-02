import Link from "next/link";

export default function Header () {
    return (
        <header>
            <nav>
                <ul className="text-lg font-bold text-white flex gap-x-7 justify-end px-12 py-6 border-b-4 border-pink-300">
                    <li><Link href="/" className="w-24 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border-1 border-pink-300 rounded-sm p-2">Início</Link></li>
                    <li><Link href="/experienciaAcademica" className="w-24 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border-1 border-pink-300 rounded-sm p-2">Perfil</Link></li>
                    <li><Link href="/experienciaProfissional" className="w-24 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border-1 border-pink-300 rounded-sm p-2">Formações</Link></li>
                    <li><Link href="/projetos" className="w-24 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border-1 border-pink-300 rounded-sm p-2">Jogos</Link></li>
                    <li><Link href="/sobre" className="w-24 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border-1 border-pink-300 rounded-sm p-2">Profissional</Link></li>
                </ul>
            </nav>
        </header>
    )
}