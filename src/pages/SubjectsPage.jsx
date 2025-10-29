// src/pages/SubjectsPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const todasMaterias = [
  {
    name: "Matemática",
    description: "Álgebra, Geometria, Trigonometria e mais.",
    icon: "fas fa-square-root-alt",
    gradient: "from-red-500 to-pink-500",
    route: "/materias/matematica"
  },
  {
    name: "Português",
    description: "Gramática, Literatura e Interpretação de Texto.",
    icon: "fas fa-book",
    gradient: "from-blue-500 to-cyan-500",
    route: "/materias/portugues"
  },
  {
    name: "Ciências",
    description: "Física, Química e Biologia para o ENEM.",
    icon: "fas fa-flask",
    gradient: "from-green-500 to-emerald-500",
    route: "/materias/ciencias"
  },
  {
    name: "História",
    description: "Brasil, mundo, Idade Média, Moderna e Contemporânea.",
    icon: "fas fa-landmark",
    gradient: "from-yellow-600 to-orange-500",
    route: "/materias/historia"
  },
  {
    name: "Geografia",
    description: "Geopolítica, clima, relevo, população e economia.",
    icon: "fas fa-map-marked-alt",
    gradient: "from-green-600 to-lime-500",
    route: "/materias/geografia"
  },
  {
    name: "Filosofia",
    description: "Pensadores, ética, lógica e história da filosofia.",
    icon: "fas fa-brain",
    gradient: "from-purple-600 to-indigo-500",
    route: "/materias/filosofia"
  },
  {
    name: "Sociologia",
    description: "Sociedade, cultura, política e movimentos sociais.",
    icon: "fas fa-users",
    gradient: "from-pink-600 to-rose-500",
    route: "/materias/sociologia"
  },
  {
    name: "Redação",
    description: "Estrutura, argumentação e temas do ENEM.",
    icon: "fas fa-pencil-alt",
    gradient: "from-purple-500 to-indigo-500",
    route: "/materias/redacao"
  },
  {
    name: "Tecnologia",
    description: "Lógica, programação e cultura digital.",
    icon: "fas fa-laptop-code",
    gradient: "from-gray-500 to-slate-500",
    route: "/materias/tecnologia"
  }
];


const SubjectsPage = () => {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  const materiasFiltradas = todasMaterias.filter((m) =>
    m.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-indigo-700">
          Explore as matérias
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Digite o nome da matéria que deseja estudar.
        </p>

        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Buscar matéria..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {materiasFiltradas.map((subj, idx) => (
            <div
              key={idx}
              onClick={() => navigate(subj.route)}
              className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className={`h-40 bg-gradient-to-r ${subj.gradient} flex items-center justify-center`}>
                <i className={`${subj.icon} text-white text-5xl`}></i>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{subj.name}</h3>
                <p className="text-gray-600 mb-4">{subj.description}</p>
                <span className="text-indigo-600 font-medium hover:text-indigo-800 transition">
                  Acessar conteúdo →
                </span>
              </div>
            </div>
          ))}
          {materiasFiltradas.length === 0 && (
            <p className="text-center col-span-full text-gray-500">Nenhuma matéria encontrada.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubjectsPage;
