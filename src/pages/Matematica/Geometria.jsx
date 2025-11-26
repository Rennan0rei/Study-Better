// src/pages/Geometria.jsx
import React, { useState } from "react";

const exercicios = [
  {
    pergunta: "1. Qual é a área de um quadrado com lado de 5 cm?",
    alternativas: ["10 cm²", "20 cm²", "25 cm²", "30 cm²"],
    resposta: 2,
    explicacao: "Área do quadrado = lado × lado = 5 × 5 = 25 cm²."
  },
  {
    pergunta: "2. Um retângulo tem 4 cm de largura e 6 cm de comprimento. Qual é o perímetro?",
    alternativas: ["20 cm", "24 cm", "18 cm", "22 cm"],
    resposta: 0,
    explicacao: "Perímetro = 2 × (largura + comprimento) = 2 × (4 + 6) = 2 × 10 = 20 cm."
  },
  {
    pergunta: "3. Qual é a fórmula da área do triângulo?",
    alternativas: [
      "base × altura",
      "(base × altura) / 2",
      "lado × lado",
      "π × raio²"
    ],
    resposta: 1,
    explicacao: "Área do triângulo = (base × altura) / 2."
  }
];

const Geometria = () => {
  const [respostas, setRespostas] = useState(Array(exercicios.length).fill(null));
  const [corrigido, setCorrigido] = useState(false);

  const corrigir = () => setCorrigido(true);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">📐 Geometria</h2>

        {/* Explicação teórica */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600">📘 O que é geometria?</h3>
          <p className="text-gray-700">
            Geometria é a área da matemática que estuda formas, tamanhos, posições e propriedades das figuras no espaço. Os conceitos mais comuns são:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Área:</strong> medida da superfície de uma figura</li>
            <li><strong>Perímetro:</strong> soma dos lados de uma figura</li>
            <li><strong>Volume:</strong> espaço ocupado por um sólido</li>
          </ul>

          {/* Exemplo resolvido */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-600 mb-2">✍️ Exemplo</h4>
            <p className="text-gray-700">
              Um triângulo tem base de 8 cm e altura de 5 cm. Qual é sua área?
              <br />
              Área = (base × altura) / 2 → (8 × 5) / 2 = 40 / 2 = 20 cm²
              <br />
              ✅ A área do triângulo é <strong>20 cm²</strong>.
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

export default Geometria;
