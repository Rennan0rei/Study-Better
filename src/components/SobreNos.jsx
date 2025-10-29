import React from "react";
import { Link } from "react-router-dom";

const SobreNos = () => {
  return (
    <section className="bg-white text-[#061d41]">
      {/* Introdução */}
      <div className="py-20 px-6 text-center bg-gradient-to-r from-blue-100 to-sky-100">
        <h2 className="text-4xl font-bold mb-4">Estudar com método é estudar com clareza</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          O Study Better foi criado para quem quer parar de se perder em conteúdos soltos e começar a evoluir com foco. Aqui você encontra planos prontos, simulados realistas e uma rotina sustentável.
        </p>
        <Link
          to="/planos"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-md"
        >
          Ver planos disponíveis →
        </Link>
      </div>

      {/* Blocos de valor */}
      <div className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          {
            icon: "📘",
            title: "Planos prontos",
            desc: "Roteiros diários com revisão, simulados e metas semanais."
          },
          {
            icon: "🧠",
            title: "Foco no essencial",
            desc: "Conteúdos-chave organizados por tema e nível de prioridade."
          },
          {
            icon: "📝",
            title: "Simulados realistas",
            desc: "Questões no estilo das bancas, com correção automática."
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Como funciona */}
      <div className="bg-sky-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">Como funciona</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { step: "1", title: "Escolha seu plano", desc: "ENEM, Fuvest, Unicamp ou Tech." },
              { step: "2", title: "Siga o roteiro", desc: "Estude com blocos diários e revisões semanais." },
              { step: "3", title: "Evolua com constância", desc: "Ajuste a carga e foque no que mais cai." }
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-6 border hover:shadow-md transition">
                <div className="text-2xl font-bold text-blue-600 mb-2">Passo {s.step}</div>
                <h4 className="text-lg font-semibold mb-1">{s.title}</h4>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Público-alvo */}
      <div className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">Para quem é o Study Better?</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "ENEM", desc: "Plano completo com redação e simulados.", href: "/planos/enem" },
            { label: "Fuvest", desc: "Foco em questões objetivas e discursivas.", href: "/planos/fuvest" },
            { label: "Unicamp", desc: "Ênfase em interpretação e atualidades.", href: "/planos/unicamp" },
            { label: "Tech", desc: "Base sólida em lógica e programação.", href: "/planos/tecnologia" }
          ].map((p) => (
            <div key={p.label} className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h4 className="text-blue-600 font-semibold mb-1">{p.label}</h4>
              <p className="text-gray-600 text-sm mb-2">{p.desc}</p>
              <Link to={p.href} className="text-blue-600 text-sm hover:underline underline-offset-4">
                Ver plano →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Frase final */}
      <div className="py-10 bg-gradient-to-r from-blue-600 to-sky-600 text-white text-center">
        <p className="text-lg font-medium">
          Estudar com método é o que transforma esforço em resultado. 💡
        </p>
      </div>
    </section>
  );
};

export default SobreNos;
