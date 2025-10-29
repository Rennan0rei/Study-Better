// src/pages/SubjectsPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const subjects = [
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
    name: "Humanas",
    description: "História, Geografia, Filosofia e Sociologia.",
    icon: "fas fa-globe-americas",
    gradient: "from-yellow-500 to-amber-500",
    route: "/materias/humanas"
  },
];

const SubjectsPage = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-indigo-700">
          Explore as matérias
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Conteúdos completos e organizados para você dominar todas as áreas do conhecimento.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`h-40 bg-gradient-to-r ${subj.gradient} flex items-center justify-center`}>
                <i className={`${subj.icon} text-white text-6xl`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{subj.name}</h3>
                <p className="text-gray-600 mb-4">{subj.description}</p>
                <button
                  onClick={() => navigate(subj.route)}
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition"
                >
                  Acessar conteúdo →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsPage;
