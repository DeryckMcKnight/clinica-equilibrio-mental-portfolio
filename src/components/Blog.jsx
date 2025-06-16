import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, User, ArrowRight, Heart, Brain, Shield, Users } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Compreendendo a Depressão: Sintomas, Causas e Tratamentos',
      excerpt: 'A depressão é mais do que apenas tristeza. Entenda os sinais, as causas e as opções de tratamento disponíveis para superar este transtorno.',
      category: 'Depressão',
      readTime: '8 min',
      author: 'Dr. João Silva',
      date: '15 de Maio, 2024',
      icon: Heart,
      color: 'primary'
    },
    {
      id: 2,
      title: 'Ansiedade no Dia a Dia: Como Lidar e Quando Buscar Ajuda Profissional',
      excerpt: 'Aprenda a identificar os sintomas de ansiedade, técnicas de manejo e quando é importante procurar ajuda especializada.',
      category: 'Ansiedade',
      readTime: '6 min',
      author: 'Dra. Maria Oliveira',
      date: '10 de Maio, 2024',
      icon: Brain,
      color: 'secondary'
    },
    {
      id: 3,
      title: 'A Importância do Autocuidado para a Saúde Mental',
      excerpt: 'Descubra práticas simples e eficazes de autocuidado que podem fazer uma grande diferença no seu bem-estar mental.',
      category: 'Bem-estar',
      readTime: '5 min',
      author: 'Dra. Ana Santos',
      date: '5 de Maio, 2024',
      icon: Heart,
      color: 'accent'
    },
    {
      id: 4,
      title: 'Burnout: Como Identificar os Sinais e Prevenir o Esgotamento',
      excerpt: 'O burnout é uma realidade crescente. Saiba como reconhecer os sintomas e implementar estratégias de prevenção.',
      category: 'Burnout',
      readTime: '7 min',
      author: 'Dr. Pedro Costa',
      date: '1 de Maio, 2024',
      icon: Shield,
      color: 'primary'
    },
    {
      id: 5,
      title: 'Relacionamentos Tóxicos: Como Identificar e se Proteger',
      excerpt: 'Entenda os sinais de relacionamentos prejudiciais e aprenda estratégias para se proteger e buscar relacionamentos saudáveis.',
      category: 'Relacionamentos',
      readTime: '9 min',
      author: 'Dra. Ana Santos',
      date: '25 de Abril, 2024',
      icon: Users,
      color: 'secondary'
    },
    {
      id: 6,
      title: 'O Papel da Psicoterapia na Busca pelo Equilíbrio Emocional',
      excerpt: 'Descubra como a psicoterapia pode ser uma ferramenta poderosa para o autoconhecimento e desenvolvimento pessoal.',
      category: 'Psicoterapia',
      readTime: '6 min',
      author: 'Dra. Maria Oliveira',
      date: '20 de Abril, 2024',
      icon: Brain,
      color: 'accent'
    }
  ];

  const categories = [
    { name: 'Todos', count: blogPosts.length },
    { name: 'Depressão', count: blogPosts.filter(post => post.category === 'Depressão').length },
    { name: 'Ansiedade', count: blogPosts.filter(post => post.category === 'Ansiedade').length },
    { name: 'Bem-estar', count: blogPosts.filter(post => post.category === 'Bem-estar').length },
    { name: 'Burnout', count: blogPosts.filter(post => post.category === 'Burnout').length },
    { name: 'Relacionamentos', count: blogPosts.filter(post => post.category === 'Relacionamentos').length },
    { name: 'Psicoterapia', count: blogPosts.filter(post => post.category === 'Psicoterapia').length }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Blog Educativo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Informações relevantes e acessíveis sobre saúde mental, bem-estar e qualidade de vida, 
              elaboradas por nossa equipe de profissionais especializados.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Conhecimento que Transforma
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Este espaço foi criado com o objetivo de compartilhar informações relevantes e 
                acessíveis sobre saúde mental, bem-estar e qualidade de vida. Acreditamos que a 
                informação é uma ferramenta poderosa para a promoção da saúde e para a 
                desmistificação de temas importantes relacionados à mente e ao comportamento humano.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-amber-800">Importante</h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    O conteúdo apresentado aqui tem caráter meramente educativo e informativo. 
                    Ele não substitui, em hipótese alguma, a consulta com um profissional de saúde 
                    mental qualificado. Em casos de emergência ou necessidade de diagnóstico e 
                    tratamento, procure sempre um médico ou psicólogo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted/30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "secondary"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className={`bg-${post.color}/10 p-6 space-y-4`}>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{post.category}</Badge>
                      <post.icon className={`h-6 w-6 text-${post.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span>{post.date}</span>
                    </div>

                    {/* Read More */}
                    <div className="pt-2">
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                        Ler artigo completo
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Carregar Mais Artigos
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Receba Conteúdos Exclusivos
              </h2>
              <p className="text-xl opacity-90">
                Inscreva-se em nossa newsletter e receba artigos, dicas e novidades 
                sobre saúde mental diretamente em seu e-mail.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white border-0 focus:ring-2 focus:ring-primary-foreground"
              />
              <Button variant="secondary" size="lg">
                Inscrever-se
              </Button>
            </div>

            <p className="text-sm opacity-75">
              Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Temas que Abordamos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore nossos artigos sobre diversos aspectos da saúde mental e bem-estar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Transtorno Bipolar: Mitos e Verdades', icon: Brain },
              { title: 'Como a Terapia Familiar Pode Fortalecer os Laços', icon: Users },
              { title: 'Técnicas de Mindfulness para o Dia a Dia', icon: Heart },
              { title: 'Quando Procurar Ajuda Profissional', icon: Shield }
            ].map((topic, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <topic.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{topic.title}</h3>
                  <Button variant="ghost" size="sm">
                    Em breve
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

