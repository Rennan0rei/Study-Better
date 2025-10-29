// src/pages/Estatistica.jsx
import React, { useState } from "react";

const exercicios = [
  {
    pergunta: "1. Qual é a média dos números: 4, 6, 8, 10?",
    alternativas: ["7", "8", "6", "9"],
    resposta: 0,
    explicacao: "Média = (4 + 6 + 8 + 10) / 4 = 28 / 4 = 7."
  },
  {
    pergunta: "2. Qual é a mediana da sequência: 3, 7, 9, 11, 15?",
    alternativas: ["7", "9", "11", "15"],
    resposta: 1,
    explicacao: "A mediana é o valor central. Como há 5 números, o terceiro é 9."
  },
  {
    pergunta: "3. Qual é a moda da sequência: 2, 4, 4, 6, 8?",
    alternativas: ["2", "4", "6", "8"],
    resposta: 1,
    explicacao: "Moda é o número que mais aparece. O número 4 aparece duas vezes."
  }
];

const Estatistica = () => {
  const [respostas, setRespostas] = useState(Array(exercicios.length).fill(null));
  const [corrigido, setCorrigido] = useState(false);

  const corrigir = () => setCorrigido(true);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">📊 Estatística</h2>

        {/* Explicação teórica */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600">📘 O que é estatística?</h3>
          <p className="text-gray-700">
            Estatística é a área da matemática que analisa dados numéricos para entender padrões, tendências e distribuições. Os conceitos mais comuns são:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Média:</strong> soma dos valores dividida pela quantidade</li>
            <li><strong>Mediana:</strong> valor central de uma sequência ordenada</li>
            <li><strong>Moda:</strong> valor que mais se repete</li>
          </ul>

          {/* Exemplo resolvido */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-600 mb-2">✍️ Exemplo</h4>
            <p className="text-gray-700">
              Dada a sequência: 5, 7, 7, 9, 10
              <br />
              Média = (5 + 7 + 7 + 9 + 10) / 5 = 38 / 5 = 7,6
              <br />
              Mediana = 7 (valor central)
              <br />
              Moda = 7 (valor que mais aparece)
              <br />
              ✅ Resultado: média = 7,6, mediana = 7, moda = 7
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

export default Estatistica;
