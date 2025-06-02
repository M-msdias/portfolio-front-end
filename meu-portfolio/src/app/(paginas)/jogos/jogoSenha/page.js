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
    } else if (tentativasAnteriores.length + 1 === 10) {
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
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col gap-6 sm:gap-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1E1F] text-center mt-16 sm:mt-[104px]">
          Jogo da Senha
        </h1>
        <main className="flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-8">
          <div className="w-[200px] h-[200px] sm:w-[366px] sm:h-[366px] bg-[#FFE5CC] rounded-2xl sm:rounded-4xl flex flex-col items-center justify-center">
            <Image
              src="/senha.svg"
              alt="Senha ícone"
              height={120}
              width={120}
              className="sm:w-[234px] sm:h-[234px]"
            />
          </div>
          <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-[400px] sm:max-w-[600px]">
            <form onSubmit={processarTentativa} className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
              <input
                type="text"
                value={tentativa}
                onChange={(e) => setTentativa(e.target.value)}
                placeholder="Digite 4 dígitos"
                maxLength={4}
                disabled={jogoTerminado}
                className="border-2 border-gray-300 rounded-lg p-1 sm:p-2 text-base sm:text-lg w-full focus:outline-none focus:ring-2 focus:ring-[#1C1E1F]"
              />
              <button
                type="submit"
                disabled={jogoTerminado}
                className="bg-[#1C1E1F] text-white px-4 py-2 rounded-lg disabled:opacity-50 hover:bg-[#2a2e30] w-full sm:w-auto transition-colors duration-200"
              >
                Enviar
              </button>
            </form>
            <button
              onClick={mostrarSenhaSecreta}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 w-full sm:w-auto transition-colors duration-200"
            >
              Mostrar Senha
            </button>
            {jogoTerminado && (
              <button
                onClick={reiniciarJogo}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full sm:w-auto transition-colors duration-200"
              >
                Novo Jogo
              </button>
            )}
          </div>
          {jogoTerminado && (
            <p className="text-xl sm:text-2xl font-bold text-[#1C1E1F] text-center">
              {vitoria
                ? 'Parabéns! Você acertou a senha!'
                : `Fim de jogo! A senha era ${senhaSecreta.join('')}.`}
            </p>
          )}
          <div className="w-full max-w-[300px] sm:w-[366px] max-h-[200px] sm:max-h-[300px] overflow-y-auto">
            {tentativasAnteriores.length > 0 && (
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-[#1C1E1F]">
                  Tentativas Anteriores:
                </h2>
                {tentativasAnteriores.map((tentativa, indice) => (
                  <div
                    key={indice}
                    className="flex justify-between bg-white p-2 rounded-lg shadow text-sm sm:text-base"
                  >
                    <span>{tentativa.tentativa}</span>
                    <span>{tentativa.touros}Bull(s) {tentativa.vacas}Cow(s)</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}