import CardProfissional from "@/app/componentes/cardProfissional";

export default function Profissional() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex flex-col gap-y-12 sm:gap-y-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1E1F] text-center mt-16 sm:mt-[104px]">
          Experiências profissionais
        </h1>
        <section className="flex justify-center flex-col items-center gap-4 sm:gap-5">
          <CardProfissional
            background="bg-[#FFF1B4]"
            conteudo="Monitora do evento II Semana de Sistemas para Internet - UNICAP 2024"
          />
          <CardProfissional
            background="bg-[#FFE4CC]"
            conteudo="Monitora do projeto de extensão GREA3D Móvel - UFPE 2024-2025"
          />
        </section>
      </main>
    </div>
  );
}