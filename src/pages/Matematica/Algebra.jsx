// src/pages/Matematica/Algebra.jsx
import React, { useState } from "react";

const exercicios = [
  {
    pergunta: "1. Resolva: 2x + 3 = 11. Qual é o valor de x?",
    alternativas: ["3", "4", "5", "6"],
    resposta: 1,
    explicacao: "2x + 3 = 11 → 2x = 8 → x = 4."
  },
  {
    pergunta: "2. Qual é o valor da expressão: 3a - 2b, quando a = 4 e b = 1?",
    alternativas: ["10", "8", "6", "5"],
    resposta: 0,
    explicacao: "3×4 - 2×1 = 12 - 2 = 10."
  },
  {
    pergunta: "3. Qual é o resultado de (x + 2)(x - 2)?",
    alternativas: ["x² - 4", "x² + 4", "x² - 2", "x² + 2"],
    resposta: 0,
    explicacao: "Produto notável: (x + 2)(x - 2) = x² - 4."
  }
];

const Algebra = () => {
  const [respostas, setRespostas] = useState(Array(exercicios.length).fill(null));
  const [corrigido, setCorrigido] = useState(false);

  const corrigir = () => setCorrigido(true);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">🔢 Álgebra</h2>

        {/* Explicação teórica */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600">📘 O que é álgebra?</h3>
          <p className="text-gray-700">
            Álgebra é a área da matemática que usa letras e símbolos para representar números e relações. Ela permite resolver problemas gerais e criar fórmulas.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Expressões algébricas:</strong> combinações de números, letras e operações (ex: 2x + 3)</li>
            <li><strong>Equações:</strong> expressões com sinal de igual, usadas para encontrar valores desconhecidos</li>
            <li><strong>Produtos notáveis:</strong> fórmulas que simplificam multiplicações (ex: (a + b)² = a² + 2ab + b²)</li>
          </ul>

          {/* Exemplo resolvido */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-600 mb-2">✍️ Exemplo</h4>
            <p className="text-gray-700">
              Resolva: 3x - 5 = 10
              <br />
              3x = 15 → x = 5
              <br />
              ✅ O valor de x é <strong>5</strong>.
            </p>
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

export default Algebra;
