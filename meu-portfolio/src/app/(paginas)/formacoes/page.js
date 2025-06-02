import CardFormacao from "@/app/componentes/cardFormacao";

export default function Formacoes () {
    return (
        <div>
            <main className="flex flex-col gap-y-20">
                <h1 className="text-4xl font-bold text-[#1C1E1F] text-center mt-[104px]">Formações acadêmicas</h1>
                <section className="flex justify-center flex-col items-center gap-5">
                    <CardFormacao background={"#FFE0DD"} conteudo="Tecnológo em Sistemas para Internet  pela UNICAP-Universidade Católica de Pernambuco" />
                    <CardFormacao background={"#FFD2D5"} conteudo="Graduação em  Licenciatura em expressão gráfica  pela UFPE - Universidade Federal de Pernambuco Em andamento" />
                    <CardFormacao background={"#FFC2D2"} conteudo="Técnico em administração  pela Escola Técnica José Alencar Gomes da Silva 2019-2021" />
                </section>
            </main>
        </div>
    )
}