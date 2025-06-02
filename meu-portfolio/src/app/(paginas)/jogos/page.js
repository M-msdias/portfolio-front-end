import Image from "next/image";
import Link from "next/link";

export default function Jogos() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col gap-6 sm:gap-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1E1F] text-center mt-16 sm:mt-[104px]">
          Jogos
        </h1>
        <main className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 px-4 sm:px-8">
          <a
            target="_blank"
            href="https://programacao-front-end-atividade-2.vercel.app/"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-8">
              <div className="bg-[#FFF1B4] w-[200px] h-[200px] sm:w-[366px] sm:h-[366px] rounded-2xl sm:rounded-4xl flex flex-col items-center justify-center">
                <Image
                  src="/dados.svg"
                  alt="Dados ícone"
                  height={120}
                  width={120}
                  className="sm:w-[234px] sm:h-[234px]"
                />
              </div>
              <p className="font-bold text-xl sm:text-2xl text-[#1C1E1F] text-center">
                Jogo dos dados
              </p>
            </div>
          </a>
          <Link
            href="/jogos/jogoSenha"
            className="transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-8">
              <div className="w-[200px] h-[200px] sm:w-[366px] sm:h-[366px] bg-[#FFE5CC] rounded-2xl sm:rounded-4xl flex flex-col items-center justify-center">
                <Image
                  src="/senha.svg"
                  alt="Senha ícone"
                  height={120}
                  width={120}
                  className="sm:w-[234px] sm:h-[234px]"
                />
              </div>
              <p className="font-bold text-xl sm:text-2xl text-[#1C1E1F] text-center">
                Jogo da senha
              </p>
            </div>
          </Link>
        </main>
      </div>
    </div>
  );
}