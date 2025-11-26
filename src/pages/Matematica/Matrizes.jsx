// src/pages/Matrizes.jsx
import React, { useState } from "react";

const exercicios = [
  {
    pergunta: "1. Qual é a ordem da matriz A = [[2, 3], [4, 5]]?",
    alternativas: ["1x4", "2x2", "4x1", "2x1"],
    resposta: 1,
    explicacao: "A matriz tem 2 linhas e 2 colunas → ordem 2x2."
  },
  {
    pergunta: "2. Qual é o resultado da soma das matrizes A = [[1, 2], [3, 4]] e B = [[5, 6], [7, 8]]?",
    alternativas: ["[[6, 8], [10, 12]]", "[[4, 8], [6, 12]]", "[[5, 8], [10, 12]]", "[[6, 7], [10, 11]]"],
    resposta: 0,
    explicacao: "Soma elemento a elemento: [[1+5, 2+6], [3+7, 4+8]] = [[6, 8], [10, 12]]."
  },
  {
    pergunta: "3. Qual é o elemento da posição (2,1) na matriz M = [[3, 4], [5, 6]]?",
    alternativas: ["3", "4", "5", "6"],
    resposta: 2,
    explicacao: "Posição (2,1) = linha 2, coluna 1 → valor = 5."
  }
];

const Matrizes = () => {
  const [respostas, setRespostas] = useState(Array(exercicios.length).fill(null));
  const [corrigido, setCorrigido] = useState(false);

  const corrigir = () => setCorrigido(true);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">🧮 Matrizes</h2>

        {/* Explicação teórica */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600">📘 O que são matrizes?</h3>
          <p className="text-gray-700">
            Matrizes são tabelas organizadas em linhas e colunas que armazenam números. Elas são muito usadas em álgebra, estatística e programação.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Ordem:</strong> número de linhas × número de colunas</li>
            <li><strong>Soma:</strong> soma elemento a elemento (mesma ordem)</li>
            <li><strong>Multiplicação:</strong> linha da primeira × coluna da segunda</li>
          </ul>

          {/* Exemplo resolvido */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-4">
            <div>
              <h4 className="font-semibold text-blue-600 mb-1">✍️ Exemplo de soma</h4>
              <p className="text-gray-700">
                A = [[1, 2], [3, 4]]<br />
                B = [[5, 6], [7, 8]]<br />
                A + B = [[6, 8], [10, 12]]
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-1">✍️ Exemplo de multiplicação</h4>
              <p className="text-gray-700">
                A = [[1, 2], [3, 4]]<br />
                B = [[2, 0], [1, 2]]<br />
                A × B = [[1×2 + 2×1, 1×0 + 2×2], [3×2 + 4×1, 3×0 + 4×2]] = [[4, 4], [10, 8]]
              </p>
            </div>
          </div>
        </div>

        {/* Exercícios interativos */}
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

export default Matrizes;
