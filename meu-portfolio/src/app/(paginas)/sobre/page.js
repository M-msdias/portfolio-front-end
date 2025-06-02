import Image from "next/image";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="w-full h-auto bg-[#FFF1B499] flex flex-col sm:flex-row items-center justify-around px-4 sm:px-6 py-3 sm:py-4 mt-4 sm:mt-20">
        <section className="flex flex-col justify-between px-4 sm:px-6 py-3 sm:py-4 text-center w-full sm:w-[476px] gap-6 sm:gap-[36px]">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1E1F]">
            Sobre mim
          </h1>
          <p className="text-base sm:text-lg">
            Sou Marcela, estudante de Sistemas para Internet na UNICAP, com interesse em tecnologia, design e desenvolvimento web.
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1E1F]">
            Sobre o projeto:
          </h2>
          <p className="text-base sm:text-lg">
            O site inclui 5 páginas: Início, Perfil, Experiências Acadêmicas, Experiências Profissionais e Jogos.
            A interface foi feita com Tailwind CSS, para o visual e responsividade. A integração foi feita com a GitHub API.
            O Jogo da Senha permite tentativas com feedback, histórico e botão de reinício. A lógica utiliza os hooks useState, com organização em componentes reutilizáveis. O projeto foi publicado pelo Vercel.
          </p>
          <div className="flex justify-center items-center gap-2 sm:gap-4">
            <Image src="/html.svg" height={32} width={32} alt="HTML ícone" className="sm:w-[36px] sm:h-[36px]" />
            <Image src="/css.svg" height={32} width={32} alt="CSS ícone" className="sm:w-[36px] sm:h-[36px]" />
            <Image src="/javascript.svg" height={32} width={32} alt="JavaScript ícone" className="sm:w-[36px] sm:h-[36px]" />
          </div>
        </section>
        <section className="w-full sm:w-[488px] bg-white rounded-4xl flex flex-col justify-center items-center p-6 sm:p-12 gap-4 sm:gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1E1F]">
            Contato:
          </h2>
          <div className="flex gap-4 sm:gap-6 items-center justify-center">
            <Image src="/email.svg" height={32} width={32} alt="E-mail ícone" className="sm:w-[36px] sm:h-[36px]" />
            <a href="mailto:ddiasmarcela@gmail.com" className="text-base sm:text-lg text-[#1C1E1F]">
              ddiasmarcela@gmail.com
            </a>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1E1F]">
            Localização
          </h2>
          <div className="flex gap-4 sm:gap-6 items-center justify-center">
            <Image src="/localizacao.svg" height={32} width={32} alt="Localização ícone" className="sm:w-[36px] sm:h-[36px]" />
            <span className="text-base sm:text-lg text-[#1C1E1F]">
              Recife/Pernambuco
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}