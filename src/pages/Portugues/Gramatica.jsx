// src/pages/Portugues/Gramatica.jsx
import React, { useState } from "react";

const exercicios = [
  {
    pergunta: "1. Qual é a classe da palavra 'casa'?",
    alternativas: ["Verbo", "Substantivo", "Adjetivo", "Advérbio"],
    resposta: 1,
    explicacao: "'Casa' é um substantivo, pois nomeia um objeto."
  },
  {
    pergunta: "2. Qual é a classe da palavra 'feliz'?",
    alternativas: ["Substantivo", "Verbo", "Adjetivo", "Pronome"],
    resposta: 2,
    explicacao: "'Feliz' é um adjetivo, pois caracteriza algo ou alguém."
  },
  {
    pergunta: "3. Qual é a classe da palavra 'rapidamente'?",
    alternativas: ["Advérbio", "Adjetivo", "Verbo", "Substantivo"],
    resposta: 0,
    explicacao: "'Rapidamente' é um advérbio, pois indica modo."
  }
];

const Gramatica = () => {
  const [respostas, setRespostas] = useState(Array(exercicios.length).fill(null));
  const [corrigido, setCorrigido] = useState(false);

  const corrigir = () => setCorrigido(true);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">📚 Gramática</h2>

        {/* Explicação */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <h3 className="text-2xl font-semibold text-blue-600">📘 Classes de Palavras</h3>
          <p className="text-gray-700">
            As palavras da língua portuguesa se dividem em classes gramaticais. As principais são:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Substantivo:</strong> nomeia seres, objetos, lugares (ex: casa, carro, João)</li>
            <li><strong>Verbo:</strong> indica ação, estado ou fenômeno (ex: correr, estar, chover)</li>
            <li><strong>Adjetivo:</strong> caracteriza o substantivo (ex: bonito, feliz, rápido)</li>
            <li><strong>Advérbio:</strong> modifica verbo, adjetivo ou outro advérbio (ex: rapidamente, muito, ontem)</li>
          </ul>
        </div>

        {/* Exercícios */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">🧪 Exercícios</h3>
          {exercicios.map((ex, idx) => (
            <div key={idx} className="mb-8">
              <p className="font-medium text-gray-800 mb-2">{ex.pergunta}</p>
              <div className="space-y-2">
                {ex.alternativas.map((alt, i) => (
                  <label key={i} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`q${idx}`}
                      disabled={corrigido}
                      checked={respostas[idx] === i}
                      onChange={() => {
                        const novas = [...respostas];
                        novas[idx] = i;
                        setRespostas(novas);
                      }}
                      className="accent-blue-600"
                    />
                    <span className="text-gray-700">{alt}</span>
                    {corrigido && respostas[idx] === i && (
                      <span className={`ml-2 text-sm font-medium ${i === ex.resposta ? "text-green-600" : "text-red-600"}`}>
                        {i === ex.resposta ? "✔ Você acertou!" : "✘ Você errou"}
                      </span>
                    )}
                  </label>
                ))}
              </div>
              {corrigido && (
                <div className="mt-2 text-sm text-gray-600">
                  <strong>Explicação:</strong> {ex.explicacao}
                  <br />
                  <strong>Sua resposta:</strong> {respostas[idx] !== null ? ex.alternativas[respostas[idx]] : "Não respondida"}
                  <br />
                  <strong>Resposta correta:</strong> {ex.alternativas[ex.resposta]}
                </div>
              )}
            </div>
          ))}
          {!corrigido && (
            <button
              onClick={corrigir}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Corrigir respostas
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gramatica;
