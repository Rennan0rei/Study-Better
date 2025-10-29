import React from "react";

const temasMatematica = [
  {
    titulo: "Funções",
    descricao: "Aprenda sobre função afim, quadrática, exponencial e logarítmica.",
    rota: "/materias/matematica/funcoes"
  },
  {
    titulo: "Trigonometria",
    descricao: "Estude seno, cosseno, tangente e relações trigonométricas.",
    rota: "/materias/matematica/trigonometria"
  },
  {
    titulo: "Geometria",
    descricao: "Explore áreas, volumes, ângulos e polígonos.",
    rota: "/materias/matematica/geometria"
  }
];

const ConteudoMatematica = () => (
  <section className="py-16 container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6 text-center">Conteúdos de Matemática</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {temasMatematica.map((tema, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-md fade-in">
          <h3 className="text-xl font-semibold mb-2">{tema.titulo}</h3>
          <p className="text-gray-600 mb-4">{tema.descricao}</p>
          <a
            href={tema.rota}
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Acessar conteúdo
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default ConteudoMatematica;
