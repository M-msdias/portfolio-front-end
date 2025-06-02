"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function JogoDaSenha() {
  const [senhaSecreta, setSenhaSecreta] = useState([]);
  const [tentativa, setTentativa] = useState('');
  const [tentativasAnteriores, setTentativasAnteriores] = useState([]);
  const [jogoTerminado, setJogoTerminado] = useState(false);
  const [vitoria, setVitoria] = useState(false);

  const gerarSenhaSecreta = () => {
    const digitos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const senha = [];
    for (let i = 0; i < 4; i++) {
      const indiceAleatorio = Math.floor(Math.random() * digitos.length);
      senha.push(digitos.splice(indiceAleatorio, 1)[0]);
    }
    return senha;
  };

  useEffect(() => {
    setSenhaSecreta(gerarSenhaSecreta());
  }, []);

  const processarTentativa = (e) => {
    e.preventDefault();
    if (jogoTerminado || tentativa.length !== 4 || !/^\d{4}$/.test(tentativa)) {
      alert('Digite exatamente 4 dígitos!');
      return;
    }

    const digitosTentativa = tentativa.split('').map(Number);
    if (new Set(digitosTentativa).size !== 4) {
      alert('A senha deve conter 4 dígitos diferentes!');
      return;
    }

    let touros = 0;
    let vacas = 0;

    for (let i = 0; i < 4; i++) {
      if (digitosTentativa[i] === senhaSecreta[i]) {
        touros++;
      } else if (senhaSecreta.includes(digitosTentativa[i])) {
        vacas++;
      }
    }

    setTentativasAnteriores([{ tentativa, touros, vacas }, ...tentativasAnteriores]);
    setTentativa('');

    if (touros === 4) {
      setVitoria(true);
      setJogoTerminado(true);
    }
    else if (tentativasAnteriores.length + 1 === 10) {
      setJogoTerminado(true);
    }
  };

  const reiniciarJogo = () => {
    setSenhaSecreta(gerarSenhaSecreta());
    setTentativasAnteriores([]);
    setTentativa('');
    setJogoTerminado(false);
    setVitoria(false);
  };

  const mostrarSenhaSecreta = () => {
    alert(`A senha secreta é: ${senhaSecreta.join('')}`);
  };

  return (
    <div className="flex flex-col gap-12 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-[#1C1E1F] text-center mt-[104px]">
        Jogo da Senha
      </h1>
      <main className="flex flex-col items-center justify-center gap-8">
        <div className="w-[366px] h-[366px] bg-[#FFE5CC] rounded-4xl flex flex-col items-center justify-center">
          <Image src="/senha.svg" alt="Ícone senha" height={234} width={234} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <form onSubmit={processarTentativa} className="flex gap-4">
            <input
              type="text"
              value={tentativa}
              onChange={(e) => setTentativa(e.target.value)}
              placeholder="Digite 4 dígitos"
              maxLength={4}
              disabled={jogoTerminado}
              className="border-2 border-gray-300 rounded-lg p-2 text-lg"
            />
            <button
              type="submit"
              disabled={jogoTerminado}
              className="bg-[#1C1E1F] text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
              Enviar
            </button>
          </form>
          <button
            onClick={mostrarSenhaSecreta}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Mostrar Senha
          </button>
          {jogoTerminado && (
            <button
              onClick={reiniciarJogo}
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Novo Jogo
            </button>
          )}
        </div>
        {jogoTerminado && (
          <p className="text-2xl font-bold text-[#1C1E1F]">
            {vitoria
              ? 'Parabéns! Você acertou a senha!'
              : `Fim de jogo! A senha era ${senhaSecreta.join('')}.`}
          </p>
        )}
        <div className="w-[366px] max-h-[300px] overflow-y-auto">
          {tentativasAnteriores.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">Tentativas Anteriores:</h2>
              {tentativasAnteriores.map((tentativa, indice) => (
                <div
                  key={indice}
                  className="flex justify-between bg-white p-2 rounded-lg shadow"
                >
                  <span>{tentativa.tentativa}</span>
                  <span>{tentativa.touros}T {tentativa.vacas}V</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}