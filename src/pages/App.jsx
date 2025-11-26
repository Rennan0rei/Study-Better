// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Home
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionWave from "../components/SectionWave";
import SobreNos from "../components/SobreNos";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import AuthModals from "../components/AuthModals";
import LazySection from "../components/LazySection";

// Conteúdo das Matérias
import ConteudoMatematica from "./ConteudoMatematica";
import ConteudoPortugues from "./ConteudoPortugues";
import ConteudoCiencias from "./ConteudoCiencias";
import ConteudoHistoria from "./ConteudoHistoria";
import ConteudoGeografia from "./ConteudoGeografia";
import ConteudoFilosofia from "./ConteudoFilosofia";
import ConteudoSociologia from "./ConteudoSociologia";
import ConteudoRedacao from "./ConteudoRedacao";
import ConteudoTecnologia from "./ConteudoTecnologia";

//Matemática
import FuncoesMatematica from "./Matematica/FuncoesMatematica";
import ExercicioTrigonometria from "./pages/ExercicioTrigonometria";
import Geometria from "./Matematica/Geometria";
import Probabilidade from "./Matematica/Probabilidade";
import Estatistica from "./pages/Estatistica";
import Progressoes from "./Matematica/Progressao";
import Algebra from "./Matematica/Algebra";
import Matrizes from "./pages/Matrizes";
import NumerosComplexos from "./Matematica/NumerosComplexos";
import Equacoes from "./pages/Equacoes";
import AnaliseCombinatoria from "./pages/AnaliseCombinatoria";
import Logaritmos from "./Matematica/Logaritmos";

//Português
import Gramatica from "./Portugues/Gramatica";
import Literatura from "./Portugues/Literatura";
import Interpretacao from "./Portugues/Interpretacao";

// Páginas e Componentes
import LoginPage from "./LoginPage";
import Simulados from "../components/Simulados";
import SimuladoEnem from "../components/SimuladoEnem";
import SimuladoFuvest from "../components/SimuladoFuvest"; // ✅ novo import
import SubjectsPage from "./SubjectsPage";

// Planos
import PlansPage from "./PlansPage";
import PlanoEnem from "./PlanoEnem";
import PlanoFuvest from "./PlanoFuvest";
import PlanoUnicamp from "./PlanoUnicamp";
import PlanoTech from "./PlanoTech";

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
          <Route path="/materias/matematica/geometria" element={<Geometria />} />
          <Route path="/materias/matematica/probabilidade" element={<Probabilidade />} />
          <Route path="/materias/matematica/estatistica" element={<Estatistica />} />
          <Route path="/materias/matematica/progressoes" element={<Progressoes />} />
          <Route path="/materias/matematica/algebra" element={<Algebra />} />
          <Route path="/materias/matematica/matrizes" element={<Matrizes />} />
          <Route path="/materias/matematica/complexos" element={<NumerosComplexos />} />
          <Route path="/materias/matematica/equacoes" element={<Equacoes />} />
          <Route path="/materias/matematica/combinatoria" element={<AnaliseCombinatoria />} />
          <Route path="/materias/matematica/logaritmos" element={<Logaritmos />} />

          {/* Conteúdos Português */}
          <Route path="/materias/portugues/gramatica" element={<Gramatica />} />
          <Route path="/materias/portugues/literatura" element={<Literatura />} />
          <Route path="/materias/portugues/interpretacao" element={< Interpretacao />} />


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
