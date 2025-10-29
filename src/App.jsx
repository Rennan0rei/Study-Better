// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Home
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionWave from "./components/SectionWave";
import SobreNos from "./components/SobreNos";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AuthModals from "./components/AuthModals";
import LazySection from "./components/LazySection";

// Conteúdo das Matérias
import ConteudoMatematica from "./pages/ConteudoMatematica";
import ConteudoPortugues from "./pages/ConteudoPortugues";
import ConteudoCiencias from "./pages/ConteudoCiencias";
import ConteudoHistoria from "./pages/ConteudoHistoria";
import ConteudoGeografia from "./pages/ConteudoGeografia";
import ConteudoFilosofia from "./pages/ConteudoFilosofia";
import ConteudoSociologia from "./pages/ConteudoSociologia";
import ConteudoRedacao from "./pages/ConteudoRedacao";
import ConteudoTecnologia from "./pages/ConteudoTecnologia";

//Matemática
import FuncoesMatematica from "./pages/FuncoesMatematica";
import ExercicioTrigonometria from "./pages/ExercicioTrigonometria";

// Páginas e Componentes
import LoginPage from "./pages/LoginPage";
import Simulados from "./components/Simulados";
import SimuladoEnem from "./components/SimuladoEnem";
import SimuladoFuvest from "./components/SimuladoFuvest"; // ✅ novo import
import SubjectsPage from "./pages/SubjectsPage";

// Planos
import PlansPage from "./pages/PlansPage";
import PlanoEnem from "./pages/PlanoEnem";
import PlanoFuvest from "./pages/PlanoFuvest";
import PlanoUnicamp from "./pages/PlanoUnicamp";
import PlanoTech from "./pages/PlanoTech";

const App = () => {
  return (
    <Router>
      <div className="App font-sans">
        <Navbar />

        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Hero />

                <LazySection>
                  <SectionWave color="#ffffff" />
                </LazySection>

                <LazySection>
                  <SobreNos />
                </LazySection>

                <LazySection>
                  <SectionWave flip color="#f9fafb" />
                </LazySection>

                <LazySection>
                  <Testimonials />
                </LazySection>

                <LazySection>
                  <CTA />
                </LazySection>
              </>
            }
          />

          {/* Matérias */}
          <Route path="/materias" element={<SubjectsPage />} />
          <Route path="/materias/matematica" element={<ConteudoMatematica />} />
          <Route path="/materias/portugues" element={<ConteudoPortugues />} />
          <Route path="/materias/ciencias" element={<ConteudoCiencias />} />
          <Route path="/materias/historia" element={<ConteudoHistoria />} />
          <Route path="/materias/geografia" element={<ConteudoGeografia />} />
          <Route path="/materias/filosofia" element={<ConteudoFilosofia />} />
          <Route path="/materias/sociologia" element={<ConteudoSociologia />} />
          <Route path="/materias/redacao" element={<ConteudoRedacao />} />
          <Route path="/materias/tecnologia" element={<ConteudoTecnologia />} />

          {/* Conteúdos matemática */}
          <Route path="/materias/matematica/funcoes" element={<FuncoesMatematica />} />
          <Route path="/materias/matematica/trigonometria" element={<ExercicioTrigonometria />} />

          {/* Simulados */}
          <Route path="/simulados" element={<Simulados />} />
          <Route path="/simulados/enem" element={<SimuladoEnem />} />
          <Route path="/simulados/fuvest" element={<SimuladoFuvest />} /> {/* ✅ nova rota */}

          {/* Planos */}
          <Route path="/planos" element={<PlansPage />} />
          <Route path="/planos/enem" element={<PlanoEnem />} />
          <Route path="/planos/fuvest" element={<PlanoFuvest />} />
          <Route path="/planos/unicamp" element={<PlanoUnicamp />} />
          <Route path="/planos/tecnologia" element={<PlanoTech />} />

          {/* Login */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        <Footer />
       
      </div>
    </Router>
  );
};

export default App;
