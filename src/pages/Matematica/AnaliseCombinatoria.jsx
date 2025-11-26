// src/pages/AnaliseCombinatoria.jsx
import React, { useState } from "react";

const exercicios = [
  {
    pergunta: "1. De quantas formas diferentes podemos formar uma senha de 3 dígitos usando os números de 0 a 9, sem repetir?",
    alternativas: ["720", "1000", "504", "120"],
    resposta: 2,
    explicacao: "Princípio multiplicativo: 10 × 9 × 8 = 720. Mas como a pergunta é sobre 3 dígitos sem repetição, temos 10 opções para o primeiro, 9 para o segundo e 8 para o terceiro → 10 × 9 × 8 = 720."
  },
  {
    pergunta: "2. Quantas anagramas podemos formar com a palavra 'MELÃO'?",
    alternativas: ["60", "120", "240", "720"],
    resposta: 1,
    explicacao: "A palavra tem 5 letras distintas → permutação simples: 5! = 120."
  },
  {
    pergunta: "3. De um grupo de 6 pessoas, quantos grupos de 2 pessoas diferentes podemos formar?",
    alternativas: ["12", "15", "30", "20"],
    resposta: 1,
    explicacao: "Combinação de 6 elementos tomados de 2 em 2: C(6,2) = 6! / (2! × 4!) = 15."
  }
];

const AnaliseCombinatoria = () => {
  const [respostas, setRespostas] = useState(Array(exercicios.length).fill(null));
  const [corrigido, setCorrigido] = useState(false);

  const corrigir = () => setCorrigido(true);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">🔢 Análise Combinatória</h2>

        {/* Explicação teórica */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600">📘 O que é análise combinatória?</h3>
          <p className="text-gray-700">
            É a área da matemática que estuda as diferentes maneiras de agrupar ou organizar elementos de um conjunto, respeitando certas condições.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Princípio multiplicativo:</strong> se uma tarefa pode ser feita de m formas e outra de n formas, juntas podem ser feitas de m × n formas.</li>
            <li><strong>Permutação:</strong> arranjos de todos os elementos de um conjunto. Ex: 3 letras → 3! = 6 arranjos.</li>
            <li><strong>Combinação:</strong> seleção de elementos sem se importar com a ordem. Ex: escolher 2 pessoas entre 5 → C(5,2).</li>
          </ul>

          {/* Exemplos resolvidos */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-4">
            <div>
              <h4 className="font-semibold text-blue-600 mb-1">✍️ Exemplo de permutação</h4>
              <p className="text-gray-700">
                Quantos anagramas da palavra “CASA”?<br />
                A palavra tem 4 letras, com A repetido → P = 4! / 2! = 24 / 2 = 12
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-1">✍️ Exemplo de combinação</h4>
              <p className="text-gray-700">
                Quantos pares podemos formar com 5 pessoas?<br />
                C(5,2) = 5! / (2! × 3!) = 10
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

export default AnaliseCombinatoria;
