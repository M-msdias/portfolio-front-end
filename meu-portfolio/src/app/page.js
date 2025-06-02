import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-12">
        <section className="h-96 bg-[#FFE0DD] flex flex-col justify-between px-6 py-4">
          <h1 className="text-3xl font-bold text-[#695f5e]">Marcela Dias <br /> Desenvolvedora e Designer</h1>
          <div className="flex gap-x-6">
            <a href="#" target="_blank"><Image src="email.svg" height={47} width={47} alt="Email ícone" /></a>
            <a href="#" target="_blank"><Image src="github.svg" height={47} width={47} alt="Github ícone" /></a>
            <a href="#" target="_blank"><Image src="linkedin.svg" height={47} width={47} alt="Linkedin ícone" /></a>
          </div>
        </section>
        <section className="flex items-center justify-center gap-12">
          <div className="w-[248px] h-[248px] bg-[#FEF0B3] flex flex-col justify-center gap-4 items-center rounded-2xl">
            <div className="w-[125] h-[125] bg-white rounded-full flex justify-center items-center">
              <Image src="jogos.svg" height={76} width={76} alt="Jogos ícone" className=""/> 
            </div>
            <p className="font-bold text-2xl">Jogos</p>
          </div>
          <div className="w-[248px] h-[248px] bg-[#FFE5CC] flex flex-col justify-center gap-4 items-center rounded-2xl">
            <div className="w-[125] h-[125] bg-white rounded-full flex justify-center items-center">
              <Image src="formacao.svg" height={76} width={76} alt="Jogos ícone" className=""/> 
            </div>
            <p className="font-bold text-2xl">Formação</p>
          </div>
           <div className="w-[248px] h-[248px] bg-[#FFE0DD] flex flex-col justify-center gap-4 items-center rounded-2xl">
            <div className="w-[125] h-[125] bg-white rounded-full flex justify-center items-center">
              <Image src="perfil.svg" height={76} width={76} alt="Jogos ícone" className=""/> 
            </div>
            <p className="font-bold text-2xl">Perfil</p>
          </div>
           <div className="w-[248px] h-[248px] bg-[#FFD2D5] flex flex-col justify-center gap-4 items-center rounded-2xl">
            <div className="w-[125] h-[125] bg-white rounded-full flex justify-center items-center">
              <Image src="profissional.svg" height={76} width={76} alt="Jogos ícone" className=""/> 
            </div>
            <p className="font-bold text-2xl">Formação</p>
          </div>
        </section>
      </main>
    </div>
  );
}
