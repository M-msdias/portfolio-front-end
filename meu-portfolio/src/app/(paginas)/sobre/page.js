import Image from "next/image";

export default function Sobre() {
    return (
        <div className="h-screen">
            <main className="w-full h-[610px] bg-[#FFF1B499] flex items-center justify-around px-6 py-4 mt-20">
                <section className="flex flex-col justify-between px-6 py-4 text-center w-[476px] gap-[36px]">
                    <h1 className="text-4xl font-bold text-[#1C1E1F]">Sobre mim</h1>
                    <p>Sou Marcela, estudante de Sistemas para Internet na UNICAP, com interesse em tecnologia, design e desenvolvimento web.</p>
                    <h2 className="text-4xl font-bold text-[#1C1E1F]">Sobre o projeto:</h2>
                    <p>O site inclui 5 páginas: Inicio, perfil, experiências acadêmicas, experiências profissionais  e jogos. 
                        A interface foi feita com Tailwind CSS, para o visual e responsividade . A integração  foi feita com o GitHub API . 
                        O Jogo da Senha permite tentativas com feedback, histórico e botão de reinício. A lógica utiliza os hooks useState , com organização em componentes reutilizáveis. O projeto foi publicado pelo Vercel.
                    </p>
                    <div className="flex justify-center items-center gap-2">
                        <Image src="html.svg" height={36} width={36} alt="Jogos ícone" className=""/> 
                        <Image src="css.svg" height={36} width={36} alt="Jogos ícone" className=""/> 
                        <Image src="javascript.svg" height={36} width={36} alt="Jogos ícone" className=""/> 
                    </div>
                </section>
                <section className="w-[488px] bg-white rounded-4xl flex flex-col justify-center items-center p-12 gap-6">
                    <h2 className="text-4xl font-bold text-[#1C1E1F]">Contato:</h2>
                    <div className="flex gap-6 items-center justify-center">
                        <Image src="email.svg" height={36} width={36} alt="E-mail ícone" className=""/> 
                        <a href="mailto:ddiasmarcela@gmail.com">ddiasmarcela@gmail.com</a>
                    </div>
                    <h2 className="text-4xl font-bold text-[#1C1E1F]">Localização</h2>
                    <div className="flex gap-6 items-center justify-center">
                        <Image src="localizacao.svg" height={36} width={36} alt="Jogos ícone" className=""/> 
                        <a href="mailto:ddiasmarcela@gmail.com">Recife/Pernambuco</a>
                    </div>
                </section>
            </main>
        </div>
    )
}