// src/pages/ConteudoMatematica.jsx
import React, { useState } from "react";

const todosConteudos = [
  { titulo: "Funções", descricao: "Função afim, quadrática, exponencial e logarítmica.", rota: "/materias/matematica/funcoes" },
  { titulo: "Trigonometria", descricao: "Seno, cosseno, tangente e relações trigonométricas.", rota: "/materias/matematica/trigonometria" },
  { titulo: "Geometria", descricao: "Áreas, volumes, ângulos e polígonos.", rota: "/materias/matematica/geometria" },
  { titulo: "Probabilidade", descricao: "Eventos, espaço amostral e cálculo de probabilidades.", rota: "/materias/matematica/probabilidade" },
  { titulo: "Estatística", descricao: "Média, mediana, moda e gráficos.", rota: "/materias/matematica/estatistica" },
  { titulo: "Álgebra", descricao: "Expressões algébricas, fatoração e produtos notáveis.", rota: "/materias/matematica/algebra" },
  { titulo: "Equações", descricao: "Equações do 1º e 2º grau, sistemas lineares.", rota: "/materias/matematica/equacoes" },
  { titulo: "Progressões", descricao: "PA, PG e fórmulas de soma.", rota: "/materias/matematica/progressoes" },
  { titulo: "Matrizes", descricao: "Operações, determinantes e sistemas.", rota: "/materias/matematica/matrizes" },
  { titulo: "Logaritmos", descricao: "Definição, propriedades e aplicações.", rota: "/materias/matematica/logaritmos" },
  { titulo: "Números Complexos", descricao: "Forma algébrica e trigonométrica.", rota: "/materias/matematica/complexos" },
  { titulo: "Análise Combinatória", descricao: "Permutação, combinação e arranjo.", rota: "/materias/matematica/combinatoria" }
];

const ConteudoMatematica = () => {
  const [busca, setBusca] = useState("");

  const conteudosFiltrados = todosConteudos.filter((c) =>
    c.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-red-700">
          Conteúdos de Matemática
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {conteudosFiltrados.map((tema, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
              onClick={() => window.location.href = tema.rota}
            >
              <div className="h-32 bg-red-600 flex items-center justify-center">
                <i className="fas fa-book-open text-white text-4xl"></i>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{tema.titulo}</h3>
                <p className="text-gray-600 mb-4">{tema.descricao}</p>
                <span className="text-red-600 font-medium hover:text-red-800 transition">
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

export default ConteudoMatematica;
