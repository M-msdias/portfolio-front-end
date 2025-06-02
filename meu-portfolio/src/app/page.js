import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex flex-col gap-12">
        <section className="h-96 bg-[#FFE0DD] flex flex-col justify-between px-6 py-4">
          <h1 className="text-3xl font-bold text-[#695f5e]">
            Marcela Dias <br /> Desenvolvedora e Designer
          </h1>
          <div className="flex gap-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/email.svg" height={47} width={47} alt="Email ícone" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/github.svg" height={47} width={47} alt="Github ícone" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.svg" height={47} width={47} alt="Linkedin ícone" />
            </a>
          </div>
        </section>
        <section className="flex flex-wrap justify-center gap-12 px-4">
          <Link href="/jogos" className="transform transition-transform duration-300 hover:scale-105">
            <div className="w-[248px] h-[248px] bg-[#FEF0B3] flex flex-col justify-center gap-4 items-center rounded-2xl">
              <div className="w-[125px] h-[125px] bg-white rounded-full flex justify-center items-center">
                <Image src="/jogos.svg" height={76} width={76} alt="Jogos ícone" />
              </div>
              <p className="font-bold text-2xl text-[#1C1E1F] text-center">Jogos</p>
            </div>
          </Link>
          <Link href="/formacoes" className="transform transition-transform duration-300 hover:scale-105">
            <div className="w-[248px] h-[248px] bg-[#FFE5CC] flex flex-col justify-center gap-4 items-center rounded-2xl">
              <div className="w-[125px] h-[125px] bg-white rounded-full flex justify-center items-center">
                <Image src="/formacao.svg" height={76} width={76} alt="Formação ícone" />
              </div>
              <p className="font-bold text-2xl text-[#1C1E1F] text-center">Formação</p>
            </div>
          </Link>
          <Link href="/profissional" className="transform transition-transform duration-300 hover:scale-105">
            <div className="w-[248px] h-[248px] bg-[#FFD2D5] flex flex-col justify-center gap-4 items-center rounded-2xl">
              <div className="w-[125px] h-[125px] bg-white rounded-full flex justify-center items-center">
                <Image src="/profissional.svg" height={76} width={76} alt="Profissional ícone" />
              </div>
              <p className="font-bold text-2xl text-[#1C1E1F] text-center">Profissional</p>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}