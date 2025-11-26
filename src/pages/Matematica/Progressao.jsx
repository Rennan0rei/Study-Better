// src/pages/Progressoes.jsx
import React, { useState } from "react";

const exercicios = [
  {
    pergunta: "1. Qual é o 5º termo da PA: 2, 5, 8, ...?",
    alternativas: ["11", "12", "13", "14"],
    resposta: 1,
    explicacao: "Razão r = 3. Fórmula: a₅ = a₁ + (5 - 1) × r = 2 + 4 × 3 = 2 + 12 = 14."
  },
  {
    pergunta: "2. Qual é o 4º termo da PG: 2, 4, 8, ...?",
    alternativas: ["12", "14", "16", "32"],
    resposta: 3,
    explicacao: "Razão q = 2. Fórmula: a₄ = a₁ × q³ = 2 × 2³ = 2 × 8 = 16."
  },
  {
    pergunta: "3. Qual é a soma dos 4 primeiros termos da PA: 1, 3, 5, 7?",
    alternativas: ["16", "14", "12", "18"],
    resposta: 0,
    explicacao: "Soma = (1 + 3 + 5 + 7) = 16. Ou usando fórmula: S₄ = (a₁ + a₄) × 4 / 2 = (1 + 7) × 2 = 16."
  }
];

const Progressoes = () => {
  const [respostas, setRespostas] = useState(Array(exercicios.length).fill(null));
  const [corrigido, setCorrigido] = useState(false);

  const corrigir = () => setCorrigido(true);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">📈 Progressões</h2>

        {/* Explicação teórica */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600">📘 O que são progressões?</h3>
          <p className="text-gray-700">
            Progressões são sequências numéricas que seguem uma regra fixa. As mais comuns são:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Progressão Aritmética (PA):</strong> cada termo é obtido somando uma constante (razão) ao anterior.</li>
            <li><strong>Progressão Geométrica (PG):</strong> cada termo é obtido multiplicando o anterior por uma constante (razão).</li>
          </ul>

          {/* Exemplos resolvidos */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-4">
            <div>
              <h4 className="font-semibold text-blue-600 mb-1">✍️ Exemplo de PA</h4>
              <p className="text-gray-700">
                PA: 3, 6, 9, ...<br />
                Razão r = 3<br />
                5º termo: a₅ = a₁ + (5 - 1) × r = 3 + 4 × 3 = 15
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-1">✍️ Exemplo de PG</h4>
              <p className="text-gray-700">
                PG: 2, 4, 8, ...<br />
                Razão q = 2<br />
                4º termo: a₄ = a₁ × q³ = 2 × 8 = 16
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

export default Progressoes;
