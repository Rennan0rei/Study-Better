import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaClock, FaCalendarAlt, FaBook, FaRedo, FaLightbulb } from "react-icons/fa";

const PlanoUnicamp = () => {
  return (
    <div className="App font-sans">
      <main className="pt-24 bg-gray-50 min-h-screen px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#061d41] mb-6">
            Plano de Estudos para a UNICAMP (3 a 6 meses)
          </h1>
          <p className="text-gray-700 text-lg mb-10 text-center">
            Elaborado pela equipe <strong>Study Better</strong>, este plano é voltado para quem vai prestar a UNICAMP. 
            O foco é no desenvolvimento de interpretação, raciocínio e resolução de questões discursivas, 
            seguindo o estilo característico da banca.
          </p>

          {/* Organização Geral */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaClock className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">⏳ Organização Geral</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Tempo diário: 4 a 6 horas</li>
              <li>6 dias de estudo + 1 de descanso/revisão</li>
              <li>Foco: interpretação e discursivas</li>
            </ul>
          </div>

          {/* Divisão Semanal */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaCalendarAlt className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">🗓️ Divisão Semanal</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Segunda → Matemática + Física</li>
              <li>Terça → Química + Biologia</li>
              <li>Quarta → História + Geografia</li>
              <li>Quinta → Matemática + Redação</li>
              <li>Sexta → Português + Literatura</li>
              <li>Sábado → Revisão + Simulado</li>
            </ul>
          </div>

          {/* Estrutura do Estudo Diário */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaBook className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">📌 Estrutura do Estudo Diário</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Aquecimento (10 min) → revisar apontamentos do dia anterior</li>
              <li>Bloco 1 (50 min) → Teoria</li>
              <li>Bloco 2 (50 min) → Resolução de questões discursivas</li>
              <li>Bloco 3 (50 min) → Segundo tema + exercícios</li>
              <li>Redação (1h, 2x por semana)</li>
              <li>Revisão rápida (20 min) → flashcards, mapas mentais</li>
            </ul>
          </div>

          {/* Conteúdos-Chave */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">📖 Conteúdos-Chave</h2>
            <p className="font-semibold">Matemática</p>
            <ul className="list-disc ml-6">
              <li>Funções, análise combinatória, probabilidade, trigonometria</li>
            </ul>
            <p className="font-semibold mt-4">Ciências da Natureza</p>
            <ul className="list-disc ml-6">
              <li>Física: mecânica, termodinâmica, óptica, eletricidade</li>
              <li>Química: geral, orgânica, físico-química</li>
              <li>Biologia: genética, ecologia, fisiologia</li>
            </ul>
            <p className="font-semibold mt-4">Ciências Humanas</p>
            <ul className="list-disc ml-6">
              <li>História do Brasil e Mundial, Geografia física e humana</li>
            </ul>
            <p className="font-semibold mt-4">Português e Literatura</p>
            <ul className="list-disc ml-6">
              <li>Interpretação, gramática, movimentos literários</li>
              <li>Obras exigidas pela UNICAMP</li>
            </ul>
          </div>

          {/* Revisão */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaRedo className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">📆 Revisão</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Domingo: revisão geral e questões erradas</li>
              <li>Simulados completos a cada 3 semanas</li>
              <li>Uso de revisão espaçada</li>
            </ul>
          </div>

          {/* Dicas Extras */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaLightbulb className="text-[#47a5df] text-2xl" />
              <h2 className="text-2xl font-semibold">🎯 Dicas Extras</h2>
            </div>
            <ul className="list-disc ml-6 space-y-1">
              <li>Praticar questões discursivas anteriores</li>
              <li>Treinar escrita clara e objetiva</li>
              <li>Gerenciar tempo em simulados</li>
              <li>Manter equilíbrio entre teoria e prática</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlanoUnicamp;
