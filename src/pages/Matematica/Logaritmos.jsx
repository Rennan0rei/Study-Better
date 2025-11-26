// src/pages/Logaritmos.jsx
import React, { useState } from "react";

const exercicios = [
  {
    pergunta: "1. Qual é o valor de log₂(8)?",
    alternativas: ["2", "3", "4", "5"],
    resposta: 1,
    explicacao: "2³ = 8, então log₂(8) = 3."
  },
  {
    pergunta: "2. Qual é o valor de log₁₀(100)?",
    alternativas: ["1", "2", "3", "10"],
    resposta: 1,
    explicacao: "10² = 100, então log₁₀(100) = 2."
  },
  {
    pergunta: "3. Qual é o valor de log₅(25)?",
    alternativas: ["2", "3", "4", "5"],
    resposta: 0,
    explicacao: "5² = 25, então log₅(25) = 2."
  }
];

const Logaritmos = () => {
  const [respostas, setRespostas] = useState(Array(exercicios.length).fill(null));
  const [corrigido, setCorrigido] = useState(false);

  const corrigir = () => setCorrigido(true);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">📚 Logaritmos</h2>

        {/* Teoria e exemplo */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600">📘 Definição</h3>
          <p className="text-gray-700">
            O logaritmo de um número é o expoente ao qual a base deve ser elevada para resultar nesse número. Exemplo:
            <br />
            <span className="font-mono text-blue-700">log₂(8) = 3 → porque 2³ = 8</span>
          </p>
          <h4 className="text-xl font-semibold text-blue-600 mt-4">🔧 Propriedades</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>logₐ(x · y) = logₐ(x) + logₐ(y)</li>
            <li>logₐ(x / y) = logₐ(x) - logₐ(y)</li>
            <li>logₐ(xⁿ) = n · logₐ(x)</li>
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

export default Logaritmos;
