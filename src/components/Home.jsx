import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Shield, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Heart,
      title: 'Consultas Psiquiátricas',
      description: 'Diagnóstico e tratamento especializado com acompanhamento medicamentoso quando necessário.',
    },
    {
      icon: Users,
      title: 'Psicoterapia',
      description: 'Terapia individual, de casal e familiar para desenvolvimento pessoal e resolução de conflitos.',
    },
    {
      icon: Shield,
      title: 'Avaliação Diagnóstica',
      description: 'Avaliações detalhadas para identificar necessidades e criar planos de tratamento personalizados.',
    },
  ];

  const benefits = [
    'Atendimento presencial e online',
    'Equipe multidisciplinar qualificada',
    'Abordagem baseada em evidências',
    'Ambiente acolhedor e seguro',
    'Tratamento personalizado',
    'Sigilo e confidencialidade',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Cuidando da sua{' '}
                  <span className="text-primary">saúde mental</span> com ética, ciência e acolhimento
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Na Clínica Equilíbrio Mental, oferecemos atendimento psiquiátrico e psicoterapêutico 
                  de excelência, com uma equipe multidisciplinar dedicada ao seu bem-estar integral.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/agendamento">
                    Agendar Consulta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/sobre">Conheça Nossa Clínica</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Heart className="h-24 w-24 text-primary mx-auto" />
                  <p className="text-lg font-medium text-foreground">
                    Sua jornada para o equilíbrio começa aqui
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossos Serviços Principais
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços especializados em saúde mental, 
              desenvolvidos para atender às suas necessidades individuais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Sobre a Clínica Equilíbrio Mental
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Clínica Equilíbrio Mental nasceu do desejo de oferecer um espaço de cuidado 
                  integral para a saúde mental. Com uma abordagem que une a ciência e a humanização, 
                  buscamos desmistificar o tratamento psiquiátrico e psicológico.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nossa missão é ser um porto seguro para aqueles que buscam equilíbrio e bem-estar, 
                  promovendo a conscientização e o acesso a serviços de qualidade em saúde mental.
                </p>
              </div>
              
              <Button asChild>
                <Link to="/sobre">
                  Conheça Nossa História
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">15+</h3>
                <p className="text-muted-foreground">Anos de Experiência</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">1000+</h3>
                <p className="text-muted-foreground">Pacientes Atendidos</p>
              </Card>
              <Card className="p-6 text-center">
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">4</h3>
                <p className="text-muted-foreground">Especialistas</p>
              </Card>
              <Card className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">100%</h3>
                <p className="text-muted-foreground">Confidencial</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Priorize sua Saúde Mental
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Agende agora mesmo sua consulta e dê o primeiro passo em direção a uma vida 
              mais equilibrada e feliz. Estamos prontos para te acolher.
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
              <Link to="/contato">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

