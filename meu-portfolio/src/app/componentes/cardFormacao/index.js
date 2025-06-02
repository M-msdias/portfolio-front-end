import Image from "next/image";

export default function CardFormacao({ conteudo, background }) {
  return (
    <div
      className={`flex items-center justify-start gap-6 sm:gap-12 p-4 sm:p-6 font-bold ${background} rounded-2xl sm:rounded-full w-full max-w-[400px] sm:max-w-[800px]`}
    >
      <Image
        src="/formacao.svg"
        height={48}
        width={48}
        alt="Formação ícone"
        className="sm:w-[76px] sm:h-[76px]"
      />
      <span className="text-base sm:text-lg">{conteudo}</span>
    </div>
  );
}