"use client"

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-50">
      <nav className="px-4 sm:px-12 py-6 border-b-4 border-pink-300">
        <div className="flex justify-between items-center">
          <button
            className="sm:hidden text-[#1C1E1F] focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <ul
          className={`text-lg font-bold text-white flex gap-x-8 justify-end mt-4 sm:mt-0 sm:flex sm:gap-x-8 ${
            isMenuOpen ? "flex flex-col gap-y-4 items-center" : "hidden sm:flex"
          }`}
        >
          <li>
            <Link
              href="/"
              className="w-32 sm:w-28 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border border-pink-300 rounded-sm p-1 text-center block"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className="w-32 sm:w-28 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border border-pink-300 rounded-sm p-1 text-center block"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/formacoes"
              className="w-32 sm:w-28 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border border-pink-300 rounded-sm p-1 text-center block"
              onClick={() => setIsMenuOpen(false)}
            >
              Formações
            </Link>
          </li>
          <li>
            <Link
              href="/jogos"
              className="w-32 sm:w-28 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border border-pink-300 rounded-sm p-1 text-center block"
              onClick={() => setIsMenuOpen(false)}
            >
              Jogos
            </Link>
          </li>
          <li>
            <Link
              href="/profissional"
              className="w-32 sm:w-28 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border border-pink-300 rounded-sm p-1 text-center block"
              onClick={() => setIsMenuOpen(false)}
            >
              Profissional
            </Link>
          </li>
          <li>
            <Link
              href="/projetos"
              className="w-32 sm:w-28 bg-pink-300 text-white duration-200 ease-in-out hover:text-pink-300 hover:bg-white border border-pink-300 rounded-sm p-1 text-center block"
              onClick={() => setIsMenuOpen(false)}
            >
              Projetos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}