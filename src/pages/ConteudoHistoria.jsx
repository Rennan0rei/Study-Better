// src/pages/ConteudoHistoria.jsx
import React, { useState } from "react";

const conteudos = [
  { titulo: "Brasil Colônia", descricao: "Período colonial, economia e sociedade.", rota: "/materias/historia/brasil-colonia" },
  { titulo: "Era Vargas", descricao: "Governo provisório, constitucional e Estado Novo.", rota: "/materias/historia/era-vargas" },
  { titulo: "Guerras Mundiais", descricao: "Causas, consequências e contexto histórico.", rota: "/materias/historia/guerras-mundiais" },
  { titulo: "Idade Média", descricao: "Feudalismo, Igreja e sociedade medieval.", rota: "/materias/historia/idade-media" }
];

const ConteudoHistoria = () => {
  const [busca, setBusca] = useState("");
  const filtrados = conteudos.filter((c) =>
    c.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-yellow-700">
          Conteúdos de História
        </h2>
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Buscar conteúdo..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtrados.map((tema, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
              onClick={() => window.location.href = tema.rota}
            >
              <div className="h-32 bg-yellow-600 flex items-center justify-center">
                <i className="fas fa-landmark text-white text-4xl"></i>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{tema.titulo}</h3>
                <p className="text-gray-600 mb-4">{tema.descricao}</p>
                <span className="text-yellow-600 font-medium hover:text-yellow-800 transition">
                  Acessar conteúdo →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConteudoHistoria;
