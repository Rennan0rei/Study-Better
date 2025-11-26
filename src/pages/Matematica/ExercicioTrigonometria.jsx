// src/pages/ExercicioTrigonometria.jsx
import React, { useState } from "react";

const exercicios = [
  {
    pergunta: "1. Qual é o valor do seno de 30°?",
    alternativas: ["0,5", "0,866", "1", "0,707"],
    resposta: 0,
    explicacao: "O seno de 30° é 0,5. Essa é uma razão trigonométrica clássica em triângulos retângulos."
  },
  {
    pergunta: "2. Em um triângulo retângulo, se o cateto oposto mede 6 cm e a hipotenusa 10 cm, qual é o seno do ângulo?",
    alternativas: ["0,6", "0,8", "1,2", "0,75"],
    resposta: 0,
    explicacao: "sen(θ) = cateto oposto / hipotenusa = 6 / 10 = 0,6."
  },
  {
    pergunta: "3. Qual razão trigonométrica representa cateto oposto sobre cateto adjacente?",
    alternativas: ["Seno", "Cosseno", "Tangente", "Secante"],
    resposta: 2,
    explicacao: "Tangente é definida como cateto oposto dividido pelo cateto adjacente."
  }
];

const ExercicioTrigonometria = () => {
  const [respostas, setRespostas] = useState(Array(exercicios.length).fill(null));
  const [corrigido, setCorrigido] = useState(false);

  const corrigir = () => setCorrigido(true);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">📐 Trigonometria</h2>

        {/* Explicação teórica */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600">📘 O que é trigonometria?</h3>
          <p className="text-gray-700">
            Trigonometria é o estudo das relações entre os lados e os ângulos de triângulos. Em triângulos retângulos, usamos razões trigonométricas para calcular medidas:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Seno:</strong> cateto oposto / hipotenusa</li>
            <li><strong>Cosseno:</strong> cateto adjacente / hipotenusa</li>
            <li><strong>Tangente:</strong> cateto oposto / cateto adjacente</li>
          </ul>

          {/* Exemplo resolvido */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-600 mb-2">✍️ Exemplo</h4>
            <p className="text-gray-700">
              Um avião decola sob um ângulo de 40° e percorre 8000 metros em linha reta. Qual é a altura atingida?
              <br />
              sen(40°) = altura / 8000 → 0,6428 ≈ altura / 8000 → altura ≈ 0,6428 × 8000 = 5142,4 m
              <br />
              ✅ A altura aproximada é <strong>5120 metros</strong>.
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

export default ExercicioTrigonometria;
