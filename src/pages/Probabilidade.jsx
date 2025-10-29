// src/pages/Probabilidade.jsx
import React, { useState } from "react";

const exercicios = [
  {
    pergunta: "1. Qual é a probabilidade de sair cara ao lançar uma moeda?",
    alternativas: ["1/2", "1/3", "1/4", "2/3"],
    resposta: 0,
    explicacao: "Uma moeda tem dois lados: cara e coroa. A chance de sair cara é 1 em 2 → 1/2."
  },
  {
    pergunta: "2. Em um dado comum, qual é a probabilidade de sair um número par?",
    alternativas: ["1/2", "1/3", "2/3", "1/6"],
    resposta: 0,
    explicacao: "Números pares no dado: 2, 4, 6 → 3 em 6 → 3/6 = 1/2."
  },
  {
    pergunta: "3. Uma urna tem 3 bolas vermelhas e 2 azuis. Qual é a probabilidade de tirar uma azul?",
    alternativas: ["2/5", "3/5", "1/2", "1/3"],
    resposta: 0,
    explicacao: "Total de bolas: 5. Bolas azuis: 2 → 2/5."
  }
];

const Probabilidade = () => {
  const [respostas, setRespostas] = useState(Array(exercicios.length).fill(null));
  const [corrigido, setCorrigido] = useState(false);

  const corrigir = () => setCorrigido(true);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">🎲 Probabilidade</h2>

        {/* Explicação teórica */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600">📘 O que é probabilidade?</h3>
          <p className="text-gray-700">
            Probabilidade é o estudo da chance de um evento acontecer. Ela é calculada pela razão entre o número de casos favoráveis e o número total de casos possíveis:
          </p>
          <p className="text-gray-700 font-mono">
            Probabilidade = casos favoráveis / casos possíveis
          </p>

          {/* Exemplo resolvido */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-600 mb-2">✍️ Exemplo</h4>
            <p className="text-gray-700">
              Ao lançar um dado, qual é a probabilidade de sair um número maior que 4?
              <br />
              Números maiores que 4: 5 e 6 → 2 casos favoráveis
              <br />
              Total de possibilidades: 6 → Probabilidade = 2/6 = 1/3
              <br />
              ✅ A chance é <strong>1/3</strong>.
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

export default Probabilidade;
