"use client"

import { useState, useEffect } from 'react';

export default function Repositorios() {
  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/M-msdias/repos')
      .then(response => response.json())
      .then(data => setRepositorios(data))
      .catch(error => console.error('Erro ao buscar repositórios:', error));
  }, []);

  return (
    <div className="flex flex-col gap-12 min-h-screen bg-gray-50">
      <h1 className="text-5xl font-extrabold text-[#1C1E1F] text-center mt-[104px]">
        Projetos
      </h1>
      <main className="flex flex-wrap justify-center gap-8 px-4">
        {repositorios.map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-105"
          >
            <div className="w-[300px] p-6 bg-gradient-to-br from-[#FFE5CC] to-[#FFF5E6] rounded-3xl shadow-lg hover:shadow-xl">
              <p className="font-bold text-xl text-[#1C1E1F] text-center mb-4">
                {repo.name}
              </p>
              <button className="w-full bg-[#1C1E1F] text-white py-2 rounded-lg hover:bg-[#2a2e30] transition-colors">
                Visitar Repositório
              </button>
            </div>
          </a>
        ))}
      </main>
    </div>
  );
}