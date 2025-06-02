import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="text-lg font-bold text-white flex gap-x-7 justify-end px-12 py-6 border-b-4 border-pink-300">
          <li>
            <Link
              href="/"
              className="w-24 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border-1 border-pink-300 rounded-sm p-2 text-center"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className="w-24 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border-1 border-pink-300 rounded-sm p-2 text-center"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/formacoes"
              className="w-24 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border-1 border-pink-300 rounded-sm p-2 text-center"
            >
              Formações
            </Link>
          </li>
          <li>
            <Link
              href="/jogos"
              className="w-24 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border-1 border-pink-300 rounded-sm p-2 text-center"
            >
              Jogos
            </Link>
          </li>
          <li>
            <Link
              href="/profissional"
              className="w-24 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border-1 border-pink-300 rounded-sm p-2 text-center"
            >
              Profissional
            </Link>
          </li>
           <li>
            <Link
              href="/projetos"
              className="w-24 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border-1 border-pink-300 rounded-sm p-2 text-center"
            >
              Projetos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}