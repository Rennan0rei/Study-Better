// src/pages/ConteudoTecnologia.jsx
import React, { useState } from "react";

const todosConteudos = [
  { titulo: "Lógica de Programação", descricao: "Algoritmos, variáveis, estruturas de decisão e repetição.", rota: "/materias/tecnologia/logica" },
  { titulo: "HTML e CSS", descricao: "Estruturação e estilização de páginas web.", rota: "/materias/tecnologia/html-css" },
  { titulo: "JavaScript", descricao: "Interatividade, funções, eventos e manipulação do DOM.", rota: "/materias/tecnologia/javascript" },
  { titulo: "Banco de Dados", descricao: "Modelagem, SQL e operações com dados.", rota: "/materias/tecnologia/banco-de-dados" },
  { titulo: "Redes de Computadores", descricao: "Protocolos, topologias, IPs e segurança da informação.", rota: "/materias/tecnologia/redes" },
  { titulo: "Cultura Digital", descricao: "Impactos sociais da tecnologia e cidadania digital.", rota: "/materias/tecnologia/cultura-digital" },
  { titulo: "Desenvolvimento Web", descricao: "Front-end, back-end e integração de sistemas.", rota: "/materias/tecnologia/web" },
  { titulo: "Pensamento Computacional", descricao: "Abstração, decomposição e reconhecimento de padrões.", rota: "/materias/tecnologia/computacional" }
];

const ConteudoTecnologia = () => {
  const [busca, setBusca] = useState("");

  const conteudosFiltrados = todosConteudos.filter((c) =>
    c.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Conteúdos de Tecnologia
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {conteudosFiltrados.map((tema, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
              onClick={() => window.location.href = tema.rota}
            >
              <div className="h-32 bg-gray-700 flex items-center justify-center">
                <i className="fas fa-laptop-code text-white text-4xl"></i>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{tema.titulo}</h3>
                <p className="text-gray-600 mb-4">{tema.descricao}</p>
                <span className="text-gray-700 font-medium hover:text-gray-900 transition">
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

export default ConteudoTecnologia;
