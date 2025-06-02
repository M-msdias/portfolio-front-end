import CardFormacao from "@/app/componentes/cardFormacao";

export default function Formacoes() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex flex-col gap-y-12 sm:gap-y-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1E1F] text-center mt-16 sm:mt-[104px]">
          Formações acadêmicas
        </h1>
        <section className="flex justify-center flex-col items-center gap-4 sm:gap-5">
          <CardFormacao
            background="bg-[#FFE0DD]"
            conteudo="Tecnólogo em Sistemas para Internet pela UNICAP - Universidade Católica de Pernambuco"
          />
          <CardFormacao
            background="bg-[#FFD2D5]"
            conteudo="Graduação em Licenciatura em Expressão Gráfica pela UFPE - Universidade Federal de Pernambuco (Em andamento)"
          />
          <CardFormacao
            background="bg-[#FFC2D2]"
            conteudo="Técnico em Administração pela Escola Técnica José Alencar Gomes da Silva (2019-2021)"
          />
        </section>
      </main>
    </div>
  );
}