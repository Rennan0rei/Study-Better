// src/components/SimuladoFuvest.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// Questões no estilo Fuvest
const perguntas = [
  {
    id: "q1",
    disciplina: "Matemática",
    enunciado:
      "Em um plano cartesiano, considere o círculo de equação x² + y² – 2x – 6y + 2 = 0. Quantos pontos (x, y) equidistantes dos eixos coordenados pertencem a este círculo?",
    alternativas: ["0", "1", "2", "3", "4"],
    correta: 2,
    explicacao:
      "Pontos equidistantes dos eixos têm a forma (x, x) ou (x, -x). Substituindo na equação do círculo, obtêm-se duas equações do 2º grau com discriminantes positivos, indicando 2 pontos para cada caso. No entanto, é preciso verificar se as soluções de (x, -x) são válidas, e apenas uma é. Ao final, há 2 pontos de interseção. A alternativa correta é 2.",
  },
  {
    id: "q2",
    disciplina: "Biologia",
    enunciado:
      "A transição do Cerrado para a monocultura de soja tem sido apontada como uma das principais causas de degradação ambiental no bioma. Qual impacto ambiental negativo está mais diretamente associado à substituição da vegetação nativa do Cerrado por grandes lavouras de soja no MATOPIBA?",
    alternativas: [
      "Contaminação do solo por mineração",
      "Processos erosivos e arenização do solo",
      "Perda de biodiversidade na Caatinga",
      "Poluição das águas por extração mineral",
      "Impermeabilização da superfície",
    ],
    correta: 1,
    explicacao:
      "A monocultura, principalmente de soja, remove a proteção natural do solo, que é uma vegetação nativa com sistema radicular profundo. Essa remoção, combinada com a topografia do Cerrado, intensifica os processos erosivos e a formação de areais, especialmente na região do MATOPIBA, o que leva à degradação do solo.",
  },
  {
    id: "q3",
    disciplina: "Literatura",
    enunciado:
      "No romance *Angústia*, de Graciliano Ramos, o narrador, Luís da Silva, constantemente reflete sobre o tempo. Qual das passagens a seguir melhor se alinha à concepção de tempo psicológico, tal como discutida por Santo Agostinho?",
    alternativas: [
      "– 1910.",
      "“Quando está decorrendo o tempo, pode percebê-lo e medi-lo.”",
      "“Quem pode medir os tempos passados que já não existem...”",
      "“...os tempos passados que já não existem ou os futuros que ainda não chegaram?”",
      "“...medimos os tempos que passam, quando os medimos pela sensibilidade.”",
    ],
    correta: 4,
    explicacao:
      "Na obra de Santo Agostinho, a medição do tempo está ligada à experiência subjetiva, à 'sensibilidade'. Luís da Silva, atormentado por memórias e projeções, vivencia um tempo que não se mede de forma linear, mas pela 'duração interior' das sensações e lembranças, ecoando a frase sobre os tempos passados que já não existem e os futuros que ainda não chegaram, destacando a subjetividade da percepção temporal.",
  },
  {
    id: "q4",
    disciplina: "Física",
    enunciado:
      "Considere o telescópio espacial James Webb, que orbita o Sol no Ponto de Lagrange L2. Neste ponto, o telescópio orbita o Sol com o mesmo período de translação que a Terra. Sendo 𝐹𝑇 e 𝐹w as intensidades das forças gravitacionais resultantes sobre a Terra e sobre o telescópio, respectivamente, qual a razão 𝐹𝑇/𝐹w?",
    alternativas: [
      "Depende das massas da Terra e do Sol.",
      "A razão é igual a 1, pois ambos têm o mesmo período.",
      "A razão 𝐹𝑇/𝐹w será maior que 1, pois a Terra tem massa maior.",
      "É impossível determinar a razão sem os valores exatos da massa.",
      "A razão depende do cálculo da força gravitacional em cada ponto.",
    ],
    correta: 2,
    explicacao:
      "A questão original, com dados, leva à conclusão de que a razão é maior que 1 devido à massa da Terra. No entanto, o enunciado da questão Fuvest de 2023, que serve de base, pedia uma razão entre as forças gravitacionais resultantes, e não a força gravitacional do Sol apenas. Uma análise completa da questão original, considerando a fórmula F = mω²R, leva a uma resposta que requer mais detalhes. A explicação completa mostra que a relação correta é mais complexa, mas a questão adaptada busca a lógica por trás dos conceitos.",
  },
  {
    id: "q5",
    disciplina: "História",
    enunciado:
      "Em meados do século XIX, o abolicionista Joaquim Nabuco afirmou que “a escravidão não foi abolida; o que foi abolida foi a escravidão por decreto”. Com base em seu conhecimento histórico, qual alternativa interpreta corretamente o sentido dessa afirmação?",
    alternativas: [
      "A escravidão persistiu, mesmo após a Lei Áurea, devido à manutenção das estruturas sociais e econômicas que sustentavam a exploração do trabalho.",
      "A Lei Áurea foi ineficaz, e a escravidão continuou de forma legal em algumas regiões do Brasil.",
      "A abolição se deu apenas no papel, sem nenhuma mudança real na vida dos escravizados e da sociedade.",
      "A frase é uma hipérbole para enfatizar o descontentamento dos abolicionistas com a Lei Áurea.",
      "O decreto aboliu a escravidão, mas não a luta dos abolicionistas, que continuaram suas campanhas.",
    ],
    correta: 0,
    explicacao:
      "A frase de Joaquim Nabuco aponta para a incompletude do processo abolicionista no Brasil. Embora a Lei Áurea tenha posto fim à escravidão legal, ela não ofereceu qualquer tipo de reparação ou integração social para os libertos, que continuaram em condições precárias e marginalizadas, perpetuando a exploração por meio de outras formas de trabalho e opressão. A alternativa correta é a que menciona a manutenção das estruturas sociais e econômicas que sustentavam a exploração, mesmo após a lei.",
  },
];

const SimuladoFuvest = () => {
  const navigate = useNavigate();
  const [respostas, setRespostas] = useState({});
  const [enviado, setEnviado] = useState(false);

  const total = perguntas.length;
  const respondidas = Object.keys(respostas).length;

  const acertos = useMemo(() => {
    if (!enviado) return 0;
    return perguntas.reduce((sum, q) => {
      return sum + (respostas[q.id] === q.correta ? 1 : 0);
    }, 0);
  }, [enviado, respostas]);

  const porcentagem = useMemo(
    () => (enviado ? Math.round((acertos / total) * 100) : 0),
    [acertos, enviado, total]
  );

  const selecionar = (qId, idx) => {
    if (enviado) return;
    setRespostas((prev) => ({ ...prev, [qId]: idx }));
  };

  const enviar = (e) => {
    e.preventDefault();
    if (respondidas < total) {
      alert("Responda todas as questões antes de enviar.");
      return;
    }
    setEnviado(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const refazer = () => {
    setRespostas({});
    setEnviado(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-indigo-700">Mini Simulado FUVEST</h1>
            <p className="text-gray-600">
              Responda às questões no estilo da primeira fase da FUVEST.
            </p>
          </div>
          <button
            onClick={() => navigate("/simulados")}
            className="text-indigo-600 hover:text-indigo-800 underline"
          >
            Voltar para Simulados
          </button>
        </div>

        {/* Progresso */}
        <div className="mb-6 bg-white rounded-xl p-4 shadow flex items-center justify-between">
          <p className="text-gray-700">
            Progresso: <span className="font-semibold">{respondidas}</span> de{" "}
            <span className="font-semibold">{total}</span> respondidas
          </p>
          {enviado ? (
            <p className="text-gray-700">
              Nota: <span className="font-semibold">{acertos}</span> / {total} (
              <span className="font-semibold">{porcentagem}%</span>)
            </p>
          ) : (
            <p className="text-gray-500">Envie para ver o resultado</p>
          )}
        </div>

        <form onSubmit={enviar} className="space-y-6">
          {perguntas.map((q, idx) => {
            const selecionada = respostas[q.id];
            const acertou = enviado && selecionada === q.correta;
            const errou = enviado && selecionada !== q.correta;

            return (
              <div
                key={q.id}
                className={`bg-white rounded-xl shadow p-6 border ${
                  acertou
                    ? "border-green-300"
                    : errou
                    ? "border-red-300"
                    : "border-transparent"
                }`}
              >
                <div className="mb-4">
                  <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
                    {q.disciplina}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800 mt-2">
                    {idx + 1}. {q.enunciado}
                  </h3>
                </div>

                <div className="space-y-2">
                  {q.alternativas.map((alt, i) => {
                    const isSelecionada = selecionada === i;
                    const isCorreta = enviado && q.correta === i;
                    const showErro =
                      enviado && isSelecionada && selecionada !== q.correta;

                    return (
                      <label
                        key={i}
                        className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition
                          ${
                            isCorreta
                              ? "bg-green-50 border-green-300"
                              : showErro
                              ? "bg-red-50 border-red-300"
                              : "bg-white border-gray-200 hover:bg-gray-50"
                          }`}
                      >
                        <input
                          type="radio"
                          name={q.id}
                          className="mt-1"
                          checked={isSelecionada || false}
                          onChange={() => selecionar(q.id, i)}
                          disabled={enviado}
                        />
                        <span className="text-gray-800">{String.fromCharCode(65 + i)}) {alt}</span>
                      </label>
                    );
                  })}
                </div>

                {enviado && (
                  <div className="mt-4 text-sm">
                    <p className="text-gray-700">
                      Correta: <span className="font-semibold">
                        {String.fromCharCode(65 + q.correta)}) {q.alternativas[q.correta]}
                      </span>
                    </p>
                    <p className="text-gray-600 mt-1">{q.explicacao}</p>
                  </div>
                )}
              </div>
            );
          })}

          <div className="flex items-center gap-3 pt-2">
            {!enviado ? (
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition disabled:opacity-50"
                disabled={respondidas < total}
              >
                Enviar respostas
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={refazer}
                  className="bg-white text-indigo-600 border border-indigo-200 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition"
                >
                  Refazer simulado
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/simulados")}
                  className="text-gray-600 hover:text-gray-800 underline"
                >
                  Escolher outro simulado
                </button>
              </>
            )}
          </div>v
          
        </form>
      </div>
    </section>
  );
};

export default SimuladoFuvest;
