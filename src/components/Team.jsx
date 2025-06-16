import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Users, Heart } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Dr. João Silva',
      specialty: 'Psiquiatra',
      registration: 'CRM/SP 123456',
      image: '/api/placeholder/300/400',
      education: [
        'Graduado em Medicina pela Universidade de São Paulo (USP)',
        'Residência em Psiquiatria pelo Hospital das Clínicas da USP',
        'Pós-graduado em Psiquiatria da Infância e Adolescência'
      ],
      experience: '15+ anos de experiência',
      specialties: ['Transtornos de Humor', 'Ansiedade', 'Psicose'],
      description: 'Especialista no tratamento de transtornos de humor, ansiedade e psicose. Sua abordagem combina o rigor científico com uma escuta atenta e humanizada, buscando sempre o plano terapêutico mais adequado para cada paciente.',
      associations: ['Associação Brasileira de Psiquiatria']
    },
    {
      name: 'Dra. Maria Oliveira',
      specialty: 'Psicóloga Clínica',
      registration: 'CRP/SP 05/78901',
      image: '/api/placeholder/300/400',
      education: [
        'Graduada em Psicologia pela Pontifícia Universidade Católica de São Paulo (PUC-SP)',
        'Mestre em Psicologia Clínica pela Universidade Federal de São Paulo (UNIFESP)',
        'Especialista em Terapia Cognitivo-Comportamental (TCC)'
      ],
      experience: '10 anos de experiência',
      specialties: ['Terapia Cognitivo-Comportamental', 'Ansiedade', 'Depressão', 'Terapia de Casal'],
      description: 'Atua com psicoterapia individual e de casal, com foco em transtornos de ansiedade, depressão e questões de relacionamento. Sua prática é pautada na TCC, auxiliando os pacientes a desenvolverem novas estratégias de pensamento e comportamento.',
      associations: ['Conselho Regional de Psicologia']
    },
    {
      name: 'Dr. Pedro Costa',
      specialty: 'Psiquiatra',
      registration: 'CRM/SP 987654',
      image: '/api/placeholder/300/400',
      education: [
        'Graduado em Medicina pela Universidade Federal de Minas Gerais (UFMG)',
        'Residência em Psiquiatria pelo Instituto de Psiquiatria do Hospital das Clínicas da FMUSP',
        'Especialista em Transtornos Alimentares'
      ],
      experience: '12 anos de experiência',
      specialties: ['Transtornos Alimentares', 'Obesidade', 'Ansiedade', 'Depressão'],
      description: 'Possui vasta experiência no tratamento de transtornos alimentares e obesidade, além de atuar com transtornos de ansiedade e depressão. Sua abordagem é integrativa, considerando os aspectos biológicos, psicológicos e sociais do paciente.',
      associations: ['Pesquisador e palestrante na área de saúde mental']
    },
    {
      name: 'Dra. Ana Santos',
      specialty: 'Psicóloga Clínica',
      registration: 'CRP/SP 06/23456',
      image: '/api/placeholder/300/400',
      education: [
        'Graduada em Psicologia pela Universidade Estadual Paulista (UNESP)',
        'Pós-graduada em Psicologia Hospitalar e da Saúde',
        'Especialista em Terapia Familiar e de Casal'
      ],
      experience: '8 anos de experiência',
      specialties: ['Terapia Familiar', 'Terapia de Casal', 'Luto e Perdas', 'Transições de Vida'],
      description: 'Dedica-se à psicoterapia familiar e de casal, auxiliando na resolução de conflitos, melhoria da comunicação e fortalecimento dos laços familiares. Também atua com psicoterapia individual, com foco em questões de luto, perdas e transições de vida.',
      associations: ['Abordagem Sistêmica']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Nossa Equipe Especializada
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conheça os profissionais dedicados que fazem da Clínica Equilíbrio Mental 
              um espaço de confiança, excelência e transformação.
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Profissionais de Excelência
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na Clínica Equilíbrio Mental, temos orgulho de contar com uma equipe multidisciplinar 
              de profissionais altamente qualificados e dedicados, prontos para oferecer o melhor 
              cuidado em saúde mental. Nossos especialistas são selecionados não apenas por sua 
              excelência acadêmica e experiência clínica, mas também por seu compromisso com a 
              ética, a empatia e o acolhimento.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acreditamos que a diversidade de especialidades e abordagens enriquece o tratamento, 
              permitindo uma visão mais completa e integrada das necessidades de cada paciente.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-5 gap-6">
                  {/* Photo */}
                  <div className="md:col-span-2">
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <Users className="h-16 w-16 text-primary mx-auto" />
                        <p className="text-sm text-muted-foreground">Foto Profissional</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="md:col-span-3 p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{member.specialty}</Badge>
                        <Badge variant="outline">{member.registration}</Badge>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Award className="h-5 w-5 text-primary" />
                        <span className="font-medium text-foreground">{member.experience}</span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="h-5 w-5 text-secondary" />
                          <span className="font-medium text-foreground">Formação:</span>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                          {member.education.map((edu, eduIndex) => (
                            <li key={eduIndex}>• {edu}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Heart className="h-5 w-5 text-accent" />
                          <span className="font-medium text-foreground">Especialidades:</span>
                        </div>
                        <div className="flex flex-wrap gap-1 ml-7">
                          {member.specialties.map((specialty, specIndex) => (
                            <Badge key={specIndex} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>

                      {member.associations && (
                        <div className="text-xs text-muted-foreground">
                          <strong>Associações:</strong> {member.associations.join(', ')}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Nosso Compromisso com Você
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Cada membro da nossa equipe está comprometido em oferecer um atendimento 
                personalizado e de alta qualidade, respeitando a individualidade e a 
                privacidade de cada paciente.
              </p>
            </div>
            
            <div className="text-lg opacity-90 leading-relaxed space-y-4">
              <p>
                Acreditamos na importância da relação terapêutica como ferramenta de 
                transformação e estamos aqui para caminhar ao seu lado em sua jornada 
                rumo ao equilíbrio mental e bem-estar.
              </p>
              <p>
                Nossa equipe se mantém constantemente atualizada com as mais recentes 
                pesquisas e técnicas em saúde mental, garantindo que você receba o 
                melhor cuidado disponível.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

