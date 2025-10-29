// src/pages/NumerosComplexos.jsx
import React, { useState } from "react";

const exercicios = [
  {
    pergunta: "1. Qual é a parte imaginária de z = 5 + 2i?",
    alternativas: ["2", "5", "7", "i"],
    resposta: 0,
    explicacao: "A parte imaginária é o número que acompanha o i → 2."
  },
  {
    pergunta: "2. Qual é o resultado de (3 + i) + (2 + 4i)?",
    alternativas: ["5 + 5i", "6 + 3i", "1 + 5i", "5 + 4i"],
    resposta: 0,
    explicacao: "Soma das partes reais: 3 + 2 = 5. Soma das partes imaginárias: i + 4i = 5i → 5 + 5i."
  },
  {
    pergunta: "3. Qual é o valor de i²?",
    alternativas: ["1", "-1", "i", "0"],
    resposta: 1,
    explicacao: "Por definição, \(i^2 = -1\)."
  }
];

const NumerosComplexos = () => {
  const [respostas, setRespostas] = useState(Array(exercicios.length).fill(null));
  const [corrigido, setCorrigido] = useState(false);

  const corrigir = () => setCorrigido(true);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">🔷 Números Complexos</h2>

        {/* Teoria e exemplos */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600">📘 Definição</h3>
          <p className="text-gray-700">
            Números complexos são expressões da forma <strong>a + bi</strong>, onde a é a parte real e b é a parte imaginária. A unidade imaginária i é definida como <strong>i² = -1</strong>.
          </p>

          <h4 className="text-xl font-semibold text-blue-600 mt-4">✍️ Exemplos</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Soma: (2 + 3i) + (1 + 4i) = 3 + 7i</li>
            <li>Multiplicação: (2 + i)(1 + 3i) = -1 + 7i</li>
          </ul>
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

export default NumerosComplexos;
