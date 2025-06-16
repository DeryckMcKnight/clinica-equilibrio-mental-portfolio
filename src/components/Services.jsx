import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Users, 
  Shield, 
  Brain, 
  Video, 
  MapPin, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Stethoscope,
  UserCheck
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Stethoscope,
      title: 'Consultas Psiquiátricas',
      description: 'Diagnóstico, prevenção e tratamento de transtornos mentais com médicos especialistas.',
      features: ['Atendimento presencial', 'Telemedicina', 'Acompanhamento medicamentoso', 'Planos personalizados'],
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Psicoterapia',
      description: 'Processo terapêutico para compreender e lidar com pensamentos, emoções e comportamentos.',
      features: ['Terapia individual', 'Terapia de casal', 'Terapia familiar', 'Diversas abordagens'],
      color: 'secondary'
    },
    {
      icon: UserCheck,
      title: 'Avaliação Diagnóstica',
      description: 'Avaliações detalhadas e multidisciplinares para diagnóstico preciso.',
      features: ['Entrevistas clínicas', 'Testes psicológicos', 'Análise de histórico', 'Plano personalizado'],
      color: 'accent'
    }
  ];

  const modalityFeatures = [
    {
      icon: MapPin,
      title: 'Atendimento Presencial',
      description: 'Consultas em nossa clínica com toda a infraestrutura e conforto necessários.'
    },
    {
      icon: Video,
      title: 'Telemedicina',
      description: 'Consultas online seguras e privadas, com a mesma qualidade do atendimento presencial.'
    },
    {
      icon: Clock,
      title: 'Acompanhamento Contínuo',
      description: 'Monitoramento regular da evolução do tratamento e ajustes quando necessário.'
    }
  ];

  const conditions = [
    {
      name: 'Depressão',
      description: 'Tratamento para superar tristeza profunda, falta de energia e desinteresse pela vida.',
      icon: Heart
    },
    {
      name: 'Ansiedade',
      description: 'Suporte para lidar com preocupações excessivas, medos e ataques de pânico.',
      icon: Brain
    },
    {
      name: 'Transtorno Bipolar',
      description: 'Acompanhamento para estabilizar oscilações de humor e promover qualidade de vida.',
      icon: Shield
    },
    {
      name: 'Burnout',
      description: 'Recuperação do esgotamento físico e mental causado pelo estresse crônico no trabalho.',
      icon: Clock
    },
    {
      name: 'TOC',
      description: 'Tratamento para Transtorno Obsessivo-Compulsivo com técnicas especializadas.',
      icon: CheckCircle
    },
    {
      name: 'Transtornos Alimentares',
      description: 'Abordagem integrada para questões relacionadas à alimentação e imagem corporal.',
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Nossos Serviços Especializados
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Oferecemos uma gama completa de serviços em saúde mental, desenvolvidos para 
              atender às suas necessidades individuais com excelência e cuidado.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Principais Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa abordagem é integrada e personalizada, combinando as melhores práticas 
              da psiquiatria e da psicologia.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <div className={`w-16 h-16 bg-${service.color}/10 rounded-full flex items-center justify-center`}>
                    <service.icon className={`h-8 w-8 text-${service.color}`} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Características:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Modalidades de Atendimento
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos flexibilidade para que você escolha a modalidade que melhor 
              se adapta às suas necessidades e preferências.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {modalityFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Transtornos que Tratamos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa equipe é especializada no tratamento de uma ampla gama de transtornos mentais, 
              oferecendo abordagens terapêuticas eficazes e atualizadas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <condition.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{condition.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{condition.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Não encontrou o que procura? Entre em contato conosco para saber mais sobre 
              outros transtornos e condições que tratamos.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/contato">
                Fale Conosco
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Medication Management */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Acompanhamento Medicamentoso
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Quando indicado, o acompanhamento medicamentoso é realizado de forma 
                  cuidadosa e individualizada. Nossos psiquiatras prescrevem e ajustam 
                  medicações com base nas mais recentes evidências científicas.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Prescrição Baseada em Evidências</h3>
                    <p className="text-muted-foreground">Medicações prescritas seguindo as mais recentes pesquisas científicas.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Monitoramento Contínuo</h3>
                    <p className="text-muted-foreground">Acompanhamento regular da evolução e possíveis efeitos colaterais.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Diálogo Transparente</h3>
                    <p className="text-muted-foreground">Comunicação aberta sobre o tratamento, benefícios e riscos.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center space-y-6">
                <Stethoscope className="h-16 w-16 text-primary mx-auto" />
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Cuidado Personalizado</h3>
                  <p className="text-muted-foreground">
                    Cada plano medicamentoso é único, desenvolvido especificamente para 
                    suas necessidades e características individuais.
                  </p>
                </div>
                <Badge variant="secondary" className="text-sm">
                  Sempre com acompanhamento médico especializado
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Seu Bem-estar é Nossa Prioridade
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Conte conosco para encontrar o caminho para uma vida mais equilibrada e plena. 
              Agende sua consulta e inicie sua jornada de cuidado.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/agendamento">
                Agendar Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/equipe">Conheça Nossa Equipe</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

