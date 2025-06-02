import Image from "next/image";

export default function Jogos () {
    return (
        <div className="flex flex-col gap-12">
            <h1 className="text-4xl font-bold text-[#1C1E1F] text-center mt-[104px]">Jogos</h1>
            <main className="flex justify-center gap-12">
                <a target="_blank" href="https://programacao-front-end-atividade-2.vercel.app/">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <div className="bg-[#FFF1B4] w-[366px] h-[366px] rounded-4xl flex flex-col items-center justify-center">
                            <Image src="/dados.svg" alt="Ícone dado" height={234} width={234} />
                        </div>
                        <p className="font-bold text-2xl">Jogo dos dados</p>
                    </div>
                </a>
                <a target="_blank" href="/jogos/jogoSenha">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <div className="w-[366px] h-[366px] bg-[#FFE5CC] rounded-4xl flex flex-col items-center justify-center">
                            <Image src="/senha.svg" alt="Ícone dado" height={234} width={234} />
                        </div>
                        <p className="font-bold text-2xl">Jogo da senha</p>
                    </div>
                </a>
            </main>
        </div>
    )
}