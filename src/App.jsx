import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Blog from './components/Blog';
import Scheduling from './components/Scheduling';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import SEOHead from './components/SEOHead';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <SEOHead 
                  title="Clínica Equilíbrio Mental - Cuidando da sua saúde mental com ética, ciência e acolhimento"
                  description="Clínica especializada em saúde mental com equipe multidisciplinar. Oferecemos consultas psiquiátricas, psicoterapia, terapia de casal e familiar. Agende sua consulta online."
                  keywords="psiquiatra, psicólogo, saúde mental, terapia, consulta psiquiátrica, psicoterapia, ansiedade, depressão, telemedicina, agendamento online"
                  canonical="https://equilibriomental.com.br/"
                />
                <Home />
              </>
            } />
            <Route path="/sobre" element={
              <>
                <SEOHead 
                  title="Sobre a Clínica Equilíbrio Mental - Nossa História e Missão"
                  description="Conheça a história, missão e valores da Clínica Equilíbrio Mental. Uma clínica especializada em saúde mental com abordagem humanizada e baseada em evidências científicas."
                  keywords="sobre clínica, missão, valores, história, saúde mental, equipe multidisciplinar"
                  canonical="https://equilibriomental.com.br/sobre"
                />
                <About />
              </>
            } />
            <Route path="/equipe" element={
              <>
                <SEOHead 
                  title="Equipe Multidisciplinar - Psiquiatras e Psicólogos Especializados"
                  description="Conheça nossa equipe de profissionais especializados em saúde mental: psiquiatras, psicólogos e terapeutas com vasta experiência e formação acadêmica."
                  keywords="equipe médica, psiquiatras, psicólogos, profissionais saúde mental, especialistas"
                  canonical="https://equilibriomental.com.br/equipe"
                />
                <Team />
              </>
            } />
            <Route path="/servicos" element={
              <>
                <SEOHead 
                  title="Serviços de Saúde Mental - Consultas, Terapia e Telemedicina"
                  description="Oferecemos consultas psiquiátricas, psicoterapia individual, terapia de casal e familiar, avaliação diagnóstica e telemedicina. Conheça nossos serviços especializados."
                  keywords="consulta psiquiátrica, psicoterapia, terapia de casal, terapia familiar, telemedicina, avaliação diagnóstica"
                  canonical="https://equilibriomental.com.br/servicos"
                />
                <Services />
              </>
            } />
            <Route path="/blog" element={
              <>
                <SEOHead 
                  title="Blog Educativo - Artigos sobre Saúde Mental e Bem-estar"
                  description="Acesse nosso blog com artigos educativos sobre saúde mental, dicas de bem-estar, informações sobre transtornos mentais e orientações para uma vida mais equilibrada."
                  keywords="blog saúde mental, artigos psicologia, bem-estar, transtornos mentais, dicas saúde mental"
                  canonical="https://equilibriomental.com.br/blog"
                />
                <Blog />
              </>
            } />
            <Route path="/agendamento" element={
              <>
                <SEOHead 
                  title="Agendamento Online - Agende sua Consulta de Saúde Mental"
                  description="Agende sua consulta psiquiátrica ou psicológica online de forma rápida e segura. Formulário protegido e em conformidade com a LGPD."
                  keywords="agendamento online, agendar consulta, consulta psiquiátrica, consulta psicológica, telemedicina"
                  canonical="https://equilibriomental.com.br/agendamento"
                />
                <Scheduling />
              </>
            } />
            <Route path="/contato" element={
              <>
                <SEOHead 
                  title="Contato - Clínica Equilíbrio Mental | Telefone, E-mail e Endereço"
                  description="Entre em contato conosco. Telefone, WhatsApp, e-mail e endereço da Clínica Equilíbrio Mental. Estamos prontos para ajudar você."
                  keywords="contato, telefone, whatsapp, email, endereço, localização"
                  canonical="https://equilibriomental.com.br/contato"
                />
                <Contact />
              </>
            } />
            <Route path="/politica-privacidade" element={
              <>
                <SEOHead 
                  title="Política de Privacidade e LGPD - Clínica Equilíbrio Mental"
                  description="Conheça nossa política de privacidade e como protegemos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD)."
                  keywords="política de privacidade, LGPD, proteção de dados, privacidade"
                  canonical="https://equilibriomental.com.br/politica-privacidade"
                />
                <Privacy />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

