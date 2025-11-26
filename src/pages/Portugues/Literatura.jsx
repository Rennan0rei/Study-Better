// src/pages/Portugues/Literatura.jsx
import React, { useState } from "react";

const exercicios = [
  {
    pergunta: "1. Qual escola literária valorizava a razão e a harmonia, surgindo no século XVI?",
    alternativas: ["Romantismo", "Classicismo", "Barroco", "Modernismo"],
    resposta: 1,
    explicacao: "O Classicismo surgiu no século XVI, inspirado nos modelos greco-latinos e valorizando a razão."
  },
  {
    pergunta: "2. Qual movimento literário brasileiro teve como marco a Semana de Arte Moderna de 1922?",
    alternativas: ["Romantismo", "Modernismo", "Realismo", "Barroco"],
    resposta: 1,
    explicacao: "O Modernismo brasileiro começou oficialmente com a Semana de Arte Moderna de 1922."
  },
  {
    pergunta: "3. Quem é considerado o maior representante do Romantismo brasileiro na poesia?",
    alternativas: ["Machado de Assis", "José de Alencar", "Castro Alves", "Carlos Drummond de Andrade"],
    resposta: 2,
    explicacao: "Castro Alves é o grande poeta do Romantismo brasileiro, conhecido como 'poeta dos escravos'."
  }
];

const Literatura = () => {
  const [respostas, setRespostas] = useState(Array(exercicios.length).fill(null));
  const [corrigido, setCorrigido] = useState(false);

  const corrigir = () => setCorrigido(true);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">📖 Literatura</h2>

        {/* Explicação teórica */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600">📘 Escolas Literárias</h3>
          <p className="text-gray-700">
            A literatura brasileira e portuguesa se desenvolveu em diferentes períodos, chamados de escolas literárias. Cada uma tem características próprias:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Classicismo:</strong> século XVI, valorização da razão e da harmonia.</li>
            <li><strong>Barroco:</strong> século XVII, contraste entre espiritual e material, uso de antíteses.</li>
            <li><strong>Romantismo:</strong> século XIX, valorização da emoção, nacionalismo e liberdade criativa.</li>
            <li><strong>Realismo:</strong> segunda metade do século XIX, crítica social e objetividade.</li>
            <li><strong>Modernismo:</strong> século XX, inovação estética, ruptura com o passado, Semana de Arte Moderna (1922).</li>
          </ul>

          {/* Exemplo resolvido */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-600 mb-2">✍️ Exemplo</h4>
            <p className="text-gray-700">
              Pergunta: Qual escola literária brasileira teve como marco inicial a Semana de Arte Moderna de 1922?<br />
              Resposta: O <strong>Modernismo</strong>, que trouxe inovação estética e ruptura com os modelos anteriores.
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

export default Literatura;
