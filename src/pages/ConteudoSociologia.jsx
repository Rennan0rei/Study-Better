// src/pages/ConteudoSociologia.jsx
import React, { useState } from "react";

const todosConteudos = [
  { titulo: "Cultura", descricao: "Diversidade cultural, identidade, etnocentrismo e relativismo.", rota: "/materias/sociologia/cultura" },
  { titulo: "Estrutura Social", descricao: "Classes sociais, mobilidade, desigualdade e estratificação.", rota: "/materias/sociologia/estrutura-social" },
  { titulo: "Movimentos Sociais", descricao: "Lutas por direitos, ativismo, protestos e transformações sociais.", rota: "/materias/sociologia/movimentos-sociais" },
  { titulo: "Política e Sociedade", descricao: "Estado, poder, cidadania e democracia.", rota: "/materias/sociologia/politica" },
  { titulo: "Trabalho e Economia", descricao: "Relações de trabalho, capitalismo e sociologia do consumo.", rota: "/materias/sociologia/trabalho" },
  { titulo: "Família e Gênero", descricao: "Transformações familiares, papéis sociais e questões de gênero.", rota: "/materias/sociologia/familia-genero" },
  { titulo: "Educação", descricao: "Funções sociais da escola, meritocracia e reprodução social.", rota: "/materias/sociologia/educacao" },
  { titulo: "Teorias Sociológicas", descricao: "Marx, Durkheim, Weber e correntes contemporâneas.", rota: "/materias/sociologia/teorias" }
];

const ConteudoSociologia = () => {
  const [busca, setBusca] = useState("");

  const conteudosFiltrados = todosConteudos.filter((c) =>
    c.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-pink-700">
          Conteúdos de Sociologia
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {conteudosFiltrados.map((tema, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
              onClick={() => window.location.href = tema.rota}
            >
              <div className="h-32 bg-pink-600 flex items-center justify-center">
                <i className="fas fa-users text-white text-4xl"></i>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{tema.titulo}</h3>
                <p className="text-gray-600 mb-4">{tema.descricao}</p>
                <span className="text-pink-600 font-medium hover:text-pink-800 transition">
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

export default ConteudoSociologia;
