// src/pages/ConteudoPortugues.jsx
import React, { useState } from "react";

const todosConteudos = [
  { titulo: "Gramática", descricao: "Classes gramaticais, sintaxe e ortografia.", rota: "/materias/portugues/gramatica" },
  { titulo: "Literatura", descricao: "Escolas literárias, autores e obras.", rota: "/materias/portugues/literatura" },
  { titulo: "Interpretação de Texto", descricao: "Compreensão, inferência e análise textual.", rota: "/materias/portugues/interpretacao" },
  { titulo: "Redação", descricao: "Estrutura, argumentação e temas do ENEM.", rota: "/materias/portugues/redacao" },
  { titulo: "Figuras de Linguagem", descricao: "Metáfora, metonímia, antítese e mais.", rota: "/materias/portugues/figuras" },
  { titulo: "Semântica", descricao: "Significado das palavras e relações de sentido.", rota: "/materias/portugues/semantica" }
];

const ConteudoPortugues = () => {
  const [busca, setBusca] = useState("");

  const conteudosFiltrados = todosConteudos.filter((c) =>
    c.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-indigo-700">
          Conteúdos de Português
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Digite o nome do conteúdo que deseja estudar.
        </p>

        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Buscar conteúdo..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {conteudosFiltrados.map((tema, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
              onClick={() => window.location.href = tema.rota}
            >
              <div className="h-32 bg-blue-600 flex items-center justify-center">
                <i className="fas fa-book text-white text-4xl"></i>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{tema.titulo}</h3>
                <p className="text-gray-600 mb-4">{tema.descricao}</p>
                <span className="text-blue-600 font-medium hover:text-blue-800 transition">
                  Acessar conteúdo →
                </span>
              </div>
            </div>
          ))}
          {conteudosFiltrados.length === 0 && (
            <p className="text-center col-span-full text-gray-500">Nenhum conteúdo encontrado.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConteudoPortugues;
