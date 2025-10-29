// src/pages/ConteudoRedacao.jsx
import React, { useState } from "react";

const todosConteudos = [
  { titulo: "Estrutura da Redação", descricao: "Introdução, desenvolvimento e conclusão.", rota: "/materias/redacao/estrutura" },
  { titulo: "Tese e Argumentação", descricao: "Como construir uma tese clara e argumentos consistentes.", rota: "/materias/redacao/tese" },
  { titulo: "Coesão e Coerência", descricao: "Conectivos, progressão textual e clareza de ideias.", rota: "/materias/redacao/coesao" },
  { titulo: "Proposta de Intervenção", descricao: "Como elaborar soluções viáveis e detalhadas.", rota: "/materias/redacao/intervencao" },
  { titulo: "Temas do ENEM", descricao: "Análise de temas anteriores e possíveis abordagens.", rota: "/materias/redacao/temas" },
  { titulo: "Erros Comuns", descricao: "Principais falhas que prejudicam a nota e como evitá-las.", rota: "/materias/redacao/erros" },
  { titulo: "Dicas de Linguagem", descricao: "Vocabulário, formalidade e estilo adequado.", rota: "/materias/redacao/linguagem" },
  { titulo: "Modelos de Redação", descricao: "Exemplos comentados com nota máxima.", rota: "/materias/redacao/modelos" }
];

const ConteudoRedacao = () => {
  const [busca, setBusca] = useState("");

  const conteudosFiltrados = todosConteudos.filter((c) =>
    c.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-purple-700">
          Conteúdos de Redação
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {conteudosFiltrados.map((tema, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
              onClick={() => window.location.href = tema.rota}
            >
              <div className="h-32 bg-purple-600 flex items-center justify-center">
                <i className="fas fa-pencil-alt text-white text-4xl"></i>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{tema.titulo}</h3>
                <p className="text-gray-600 mb-4">{tema.descricao}</p>
                <span className="text-purple-600 font-medium hover:text-purple-800 transition">
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

export default ConteudoRedacao;
