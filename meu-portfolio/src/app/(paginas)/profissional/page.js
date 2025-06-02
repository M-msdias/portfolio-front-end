import CardProfissional from "@/app/componentes/cardProfissional";

export default function Profissional () {
    return (
        <div>
            <main className="flex flex-col gap-y-20">
                <h1 className="text-4xl font-bold text-[#1C1E1F] text-center mt-[104px]">Formações acadêmicas</h1>
                <section className="flex justify-center flex-col items-center gap-5">
                    <CardProfissional background={"bg-[#FFF1B4]"} conteudo="Monitora do evento II Semana de Sistemas para Internet - UNICAP 2024" />
                    <CardProfissional background={"bg-[#FFE4CC]"} conteudo="Monitora do projeto de extensão GREA3D Móvel - UFPE 2024-2025 " />
                </section>
            </main>
        </div>
    )
}