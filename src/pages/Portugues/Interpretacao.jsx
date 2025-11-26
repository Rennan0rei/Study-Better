// src/pages/Portugues/Interpretacao.jsx
import React, { useState } from "react";

const exercicios = [
  {
    pergunta: "1. Em um texto, o 'tema' corresponde a:",
    alternativas: [
      "A opinião do autor",
      "O assunto principal tratado",
      "A conclusão do texto",
      "Um detalhe secundário"
    ],
    resposta: 1,
    explicacao: "O tema é o assunto central do texto, aquilo sobre o que ele fala."
  },
  {
    pergunta: "2. Quando o autor usa ironia em um texto, ele está:",
    alternativas: [
      "Falando de forma literal",
      "Exagerando uma ideia",
      "Dizendo o contrário do que realmente pensa",
      "Repetindo palavras para dar ênfase"
    ],
    resposta: 2,
    explicacao: "A ironia é uma figura de linguagem em que se diz o contrário do que se quer expressar."
  },
  {
    pergunta: "3. Se um texto afirma: 'Apesar da chuva, o jogo continuou', qual é a relação estabelecida?",
    alternativas: [
      "Causa e consequência",
      "Contraste/oposição",
      "Conclusão",
      "Explicação"
    ],
    resposta: 1,
    explicacao: "A conjunção 'apesar de' indica oposição entre a chuva e a continuidade do jogo."
  }
];

const Interpretacao = () => {
  const [respostas, setRespostas] = useState(Array(exercicios.length).fill(null));
  const [corrigido, setCorrigido] = useState(false);

  const corrigir = () => setCorrigido(true);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">📖 Interpretação de Texto</h2>

        {/* Explicação teórica */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600">📘 O que é interpretação de texto?</h3>
          <p className="text-gray-700">
            Interpretar um texto significa compreender seu sentido, identificar o tema, as ideias principais e secundárias, além de perceber recursos de linguagem como figuras de linguagem e relações lógicas.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Tema:</strong> assunto central do texto</li>
            <li><strong>Ideia principal:</strong> mensagem mais importante</li>
            <li><strong>Ideias secundárias:</strong> informações que complementam</li>
            <li><strong>Recursos de linguagem:</strong> metáfora, ironia, comparação etc.</li>
            <li><strong>Relações lógicas:</strong> causa, consequência, oposição, conclusão</li>
          </ul>

          {/* Exemplo resolvido */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-600 mb-2">✍️ Exemplo</h4>
            <p className="text-gray-700">
              Texto: “Mesmo cansado, João terminou o trabalho.”  
              Interpretação: Há uma relação de oposição entre o cansaço e a ação de terminar o trabalho.  
              ✅ Ideia principal: João concluiu o trabalho apesar do cansaço.
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

export default Interpretacao;
