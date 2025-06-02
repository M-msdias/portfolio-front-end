import Image from "next/image";

export default function CardFormacao ({ conteudo, background }) {
    return (
        <div className={`flex items-center justify-start gap-12 p-6 font-bold ${background} rounded-full max-w-[800px] w-11/12`}>
            <Image src="formacao.svg" height={76} width={76} alt="Jogos ícone" className=""/> 
            {conteudo}
        </div>
    )
}