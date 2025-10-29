// src/pages/Equacoes.jsx
import React, { useState } from "react";

const exercicios = [
  {
    pergunta: "1. Resolva: x + 5 = 12. Qual é o valor de x?",
    alternativas: ["6", "7", "8", "9"],
    resposta: 2,
    explicacao: "x + 5 = 12 → x = 12 - 5 → x = 7."
  },
  {
    pergunta: "2. Resolva: 3x = 15. Qual é o valor de x?",
    alternativas: ["3", "4", "5", "6"],
    resposta: 2,
    explicacao: "3x = 15 → x = 15 / 3 → x = 5."
  },
  {
    pergunta: "3. Resolva: 2x - 4 = 10. Qual é o valor de x?",
    alternativas: ["6", "7", "8", "9"],
    resposta: 0,
    explicacao: "2x - 4 = 10 → 2x = 14 → x = 14 / 2 → x = 7."
  }
];

const Equacoes = () => {
  const [respostas, setRespostas] = useState(Array(exercicios.length).fill(null));
  const [corrigido, setCorrigido] = useState(false);

  const corrigir = () => setCorrigido(true);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">🧮 Equações</h2>

        {/* Explicação teórica */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600">📘 O que são equações?</h3>
          <p className="text-gray-700">
            Equações são sentenças matemáticas que expressam uma igualdade entre duas expressões. Resolver uma equação significa encontrar o valor da incógnita que torna essa igualdade verdadeira.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Equação do 1º grau:</strong> possui a incógnita elevada à potência 1 (ex: x + 2 = 5)</li>
            <li><strong>Equação do 2º grau:</strong> possui a incógnita elevada à potência 2 (ex: x² - 4x + 3 = 0)</li>
          </ul>

          {/* Exemplo resolvido */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-600 mb-2">✍️ Exemplo</h4>
            <p className="text-gray-700">
              Resolva: 2x + 6 = 14
              <br />
              2x = 14 - 6 → 2x = 8 → x = 8 / 2 → x = 4
              <br />
              ✅ O valor de x é <strong>4</strong>.
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

export default Equacoes;
