// src/pages/FuncoesMatematica.jsx
import React, { useState } from "react";

const exercicios = [
  {
    pergunta: "Dada a função f(x) = 3x - 2, calcule f(0), f(2) e f(-1). Qual é o valor de f(2)?",
    alternativas: ["4", "5", "6", "7"],
    resposta: 2,
    explicacao: "f(2) = 3×2 - 2 = 6 - 2 = 4. A alternativa correta é 4."
  },
  {
    pergunta: "Qual é o gráfico da função f(x) = x²?",
    alternativas: ["Reta", "Parábola", "Circunferência", "Hipérbole"],
    resposta: 1,
    explicacao: "Funções quadráticas têm gráfico em forma de parábola, com concavidade para cima ou para baixo."
  },
  {
    pergunta: "Qual é o domínio da função f(x) = 1 / (x - 1)?",
    alternativas: ["Todos os reais", "x ≠ 1", "x > 1", "x < 1"],
    resposta: 1,
    explicacao: "O denominador não pode ser zero, então x ≠ 1."
  }
];

const FuncoesMatematica = () => {
  const [respostas, setRespostas] = useState(Array(exercicios.length).fill(null));
  const [corrigido, setCorrigido] = useState(false);

  const corrigir = () => setCorrigido(true);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">Funções Matemáticas</h2>

        {/* Aula teórica */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">📘 Conceito de função</h3>
            <p className="text-gray-700">
              Uma função é uma regra que associa cada elemento de um conjunto chamado <strong>domínio</strong> a um único elemento de outro conjunto chamado <strong>contradomínio</strong>. O valor associado é chamado de <strong>imagem</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">✍️ Notação</h3>
            <p className="text-gray-700">
              f: A → B<br />
              A: domínio (valores de entrada)<br />
              B: contradomínio (valores de saída)<br />
              f(x): imagem do elemento x pela função f
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🔢 Exemplos</h3>
            <p className="text-gray-700 mb-2">
              <strong>1. Função do primeiro grau:</strong> f(x) = 2x + 3<br />
              Se x = 1 → f(1) = 2×1 + 3 = 5, 
              como foi definido que x é igual a 1, substituimos o x por 1 e realizamos a conta: 2 vezes 1 mais 3 é igual a 5.
            </p>
            <p className="text-gray-700">
              <strong>2. Função do segundo grau:</strong> f(x) = x² − 4x + 3<br />
              Se x = 2 → f(2) = 2² − 4×2 + 3 = 4 − 8 + 3 = -1
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">📊 Gráfico de uma função</h3>
            <p className="text-gray-700">
              O gráfico de uma função é o conjunto de pontos (x, f(x)) no plano cartesiano.<br />
              Funções do primeiro grau têm gráficos em forma de <strong>reta</strong>.<br />
              Funções do segundo grau têm gráficos em forma de <strong>parábola</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🧠 Tipos de funções</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Injetora:</strong> cada imagem é associada a no máximo um elemento do domínio.</li>
              <li><strong>Sobrejetora:</strong> todas as imagens possíveis são atingidas.</li>
              <li><strong>Bijetora:</strong> é injetora e sobrejetora ao mesmo tempo.</li>
            </ul>
          </div>
        </div>

        {/* Exercícios interativos */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">🧪 Exercícios</h3>
          {exercicios.map((ex, idx) => (
            <div key={idx} className="mb-8">
              <p className="font-medium text-gray-800 mb-2">{idx + 1}. {ex.pergunta}</p>
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

export default FuncoesMatematica;
