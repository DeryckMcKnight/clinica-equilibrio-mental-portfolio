import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Shield, Target, Eye, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Acolhimento',
      description: 'Criar um ambiente seguro e empático onde todos se sintam compreendidos e respeitados.',
    },
    {
      icon: Shield,
      title: 'Ética',
      description: 'Atuar com integridade, transparência e responsabilidade em todas as nossas relações e práticas.',
    },
    {
      icon: Users,
      title: 'Profissionalismo',
      description: 'Manter a excelência técnica e o aprimoramento contínuo de nossa equipe.',
    },
    {
      icon: Heart,
      title: 'Humanização',
      description: 'Priorizar o indivíduo em sua totalidade, considerando suas emoções, histórias e contextos de vida.',
    },
    {
      icon: Lightbulb,
      title: 'Ciência',
      description: 'Basear nossas práticas nas mais recentes pesquisas e evidências científicas.',
    },
    {
      icon: Shield,
      title: 'Confiança',
      description: 'Construir relacionamentos sólidos e duradouros com nossos pacientes, pautados na credibilidade.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Sobre a Clínica Equilíbrio Mental
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Um espaço de cuidado integral para a saúde mental, onde a ciência e a humanização 
              caminham juntas em busca do seu bem-estar.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Mission */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 text-center space-y-4">
                <Target className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oferecer atendimento psiquiátrico e psicoterapêutico de excelência, promovendo a 
                  saúde mental e o bem-estar integral de nossos pacientes através de uma abordagem 
                  ética, humanizada e baseada em evidências científicas.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-2 border-secondary/20">
              <CardContent className="p-8 text-center space-y-4">
                <Eye className="h-16 w-16 text-secondary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Nossa Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como referência em saúde mental no Brasil, destacando-nos pela 
                  qualidade do atendimento, inovação nas abordagens terapêuticas e pelo impacto 
                  positivo na vida de nossos pacientes e na comunidade.
                </p>
              </CardContent>
            </Card>

            {/* Values Preview */}
            <Card className="border-2 border-accent/20">
              <CardContent className="p-8 text-center space-y-4">
                <Heart className="h-16 w-16 text-accent mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Nossos Valores</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Acolhimento, ética, profissionalismo, humanização, ciência e confiança são os 
                  pilares que fundamentam todas as nossas ações e relacionamentos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Detail */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossos Valores Fundamentais
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estes valores guiam cada decisão, cada atendimento e cada relacionamento que 
              construímos em nossa jornada de cuidado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Abordagem Baseada em Evidências e Humanização
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Adotamos uma abordagem terapêutica que integra o rigor científico com a 
                  sensibilidade humana. Isso significa que nossos tratamentos são fundamentados 
                  nas melhores práticas e pesquisas da psiquiatria e psicologia, garantindo a 
                  eficácia e a segurança dos métodos aplicados.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ao mesmo tempo, valorizamos a individualidade de cada paciente, construindo 
                  planos de tratamento que consideram suas experiências de vida, valores e 
                  objetivos pessoais. Entendemos que a saúde mental não se resume à ausência 
                  de doenças, mas sim a um estado de bem-estar integral.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold text-foreground mb-3">Rigor Científico</h3>
                <p className="text-muted-foreground">
                  Tratamentos baseados nas mais recentes pesquisas e evidências científicas 
                  da psiquiatria e psicologia.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-secondary">
                <h3 className="text-xl font-semibold text-foreground mb-3">Cuidado Individualizado</h3>
                <p className="text-muted-foreground">
                  Planos de tratamento personalizados que consideram a história, valores e 
                  objetivos únicos de cada paciente.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-accent">
                <h3 className="text-xl font-semibold text-foreground mb-3">Bem-estar Integral</h3>
                <p className="text-muted-foreground">
                  Foco no desenvolvimento de habilidades de enfrentamento e na construção 
                  de uma vida com mais significado e propósito.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Nossa História e Propósito
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                A Clínica Equilíbrio Mental foi fundada com o propósito de preencher uma lacuna 
                no cuidado em saúde mental, oferecendo um espaço onde a ciência e a humanização 
                caminham juntas.
              </p>
            </div>
            
            <div className="text-lg opacity-90 leading-relaxed space-y-4">
              <p>
                Percebemos a necessidade de um local que não apenas tratasse os transtornos mentais, 
                mas que também educasse e acolhesse, desmistificando preconceitos e facilitando o 
                acesso a um tratamento de qualidade.
              </p>
              <p>
                Desde a nossa concepção, buscamos construir uma equipe de profissionais apaixonados 
                por sua área, comprometidos com a constante atualização e, acima de tudo, com o 
                bem-estar de cada paciente.
              </p>
              <p>
                Nosso propósito é ser um farol de esperança e apoio para aqueles que enfrentam 
                desafios emocionais e psicológicos, oferecendo um caminho seguro e eficaz para a 
                recuperação e o florescimento pessoal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

