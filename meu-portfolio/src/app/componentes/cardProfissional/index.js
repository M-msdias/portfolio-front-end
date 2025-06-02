import Image from "next/image";

export default function CardProfissional ({ conteudo, background }) {
    return (
        <div className={`flex items-center justify-start gap-12 p-6 font-bold bg-[${background}] rounded-full max-w-[800px] w-11/12`}>
            <Image src="mochila.svg" height={76} width={76} alt="Mochila ícone" className=""/> 
            {conteudo}
        </div>
    )
}