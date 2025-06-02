import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex flex-col gap-8 sm:gap-12">
        <section className="h-64 sm:h-96 bg-[#FFE0DD] flex flex-col justify-between px-4 sm:px-6 py-3 sm:py-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#695f5e]">
            Marcela Dias <br /> Desenvolvedora e Designer
          </h1>
          <div className="flex gap-x-4 sm:gap-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/email.svg" height={40} width={40} alt="Email ícone" className="sm:w-[47px] sm:h-[47px]" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/github.svg" height={40} width={40} alt="Github ícone" className="sm:w-[47px] sm:h-[47px]" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.svg" height={40} width={40} alt="Linkedin ícone" className="sm:w-[47px] sm:h-[47px]" />
            </a>
          </div>
        </section>
        <section className="flex flex-wrap justify-center gap-6 sm:gap-12 px-4 sm:px-8">
          <Link href="/jogos" className="transform transition-transform duration-300 hover:scale-105">
            <div className="w-[160px] h-[160px] sm:w-[248px] sm:h-[248px] bg-[#FEF0B3] flex flex-col justify-center gap-4 items-center rounded-2xl">
              <div className="w-[80px] h-[80px] sm:w-[125px] sm:h-[125px] bg-white rounded-full flex justify-center items-center">
                <Image src="/jogos.svg" height={48} width={48} alt="Jogos ícone" className="sm:w-[76px] sm:h-[76px]" />
              </div>
              <p className="font-bold text-xl sm:text-2xl text-[#1C1E1F] text-center">Jogos</p>
            </div>
          </Link>
          <Link href="/formacoes" className="transform transition-transform duration-300 hover:scale-105">
            <div className="w-[160px] h-[160px] sm:w-[248px] sm:h-[248px] bg-[#FFE5CC] flex flex-col justify-center gap-4 items-center rounded-2xl">
              <div className="w-[80px] h-[80px] sm:w-[125px] sm:h-[125px] bg-white rounded-full flex justify-center items-center">
                <Image src="/formacao.svg" height={48} width={48} alt="Formação ícone" className="sm:w-[76px] sm:h-[76px]" />
              </div>
              <p className="font-bold text-xl sm:text-2xl text-[#1C1E1F] text-center">Formação</p>
            </div>
          </Link>
          <Link href="/profissional" className="transform transition-transform duration-300 hover:scale-105">
            <div className="w-[160px] h-[160px] sm:w-[248px] sm:h-[248px] bg-[#FFD2D5] flex flex-col justify-center gap-4 items-center rounded-2xl">
              <div className="w-[80px] h-[80px] sm:w-[125px] sm:h-[125px] bg-white rounded-full flex justify-center items-center">
                <Image src="/profissional.svg" height={48} width={48} alt="Profissional ícone" className="sm:w-[76px] sm:h-[76px]" />
              </div>
              <p className="font-bold text-xl sm:text-2xl text-[#1C1E1F] text-center">Profissional</p>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}