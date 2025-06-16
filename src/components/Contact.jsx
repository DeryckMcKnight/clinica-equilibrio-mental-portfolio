import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Accessibility,
  Send,
  Navigation,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Erro de conexão. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(XX) XXXX-XXXX',
      description: 'Ligue para agendar ou tirar dúvidas'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      content: '(XX) XXXXX-XXXX',
      description: 'Clique aqui para iniciar uma conversa'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@equilibriomental.com.br',
      description: 'Envie sua mensagem ou dúvida'
    }
  ];

  const businessHours = [
    { day: 'Segunda a Sexta-feira', hours: '08:00 às 18:00' },
    { day: 'Sábados', hours: '09:00 às 13:00', note: '(apenas com agendamento prévio)' },
    { day: 'Domingos e Feriados', hours: 'Fechado' }
  ];

  const accessibilityFeatures = [
    'Acesso para cadeirantes',
    'Banheiros adaptados',
    'Elevador',
    'Sinalização em Braille'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para ajudar você a encontrar o equilíbrio e o bem-estar. 
              Entre em contato conosco para agendar sua consulta ou tirar dúvidas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{info.title}</h3>
                    <p className="text-lg font-medium text-primary">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    {info.title === 'WhatsApp' ? 'Iniciar Conversa' : 
                     info.title === 'E-mail' ? 'Enviar E-mail' : 'Ligar Agora'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Address and Map */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Address */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Nosso Endereço
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="font-semibold text-foreground">Clínica Equilíbrio Mental</p>
                      <p className="text-muted-foreground">Rua da Paz, 123 - Sala 405</p>
                      <p className="text-muted-foreground">Bairro Harmonia</p>
                      <p className="text-muted-foreground">Cidade Feliz, Estado - CEP 12345-678</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground flex items-center">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  Horário de Atendimento
                </h3>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <div className="text-right">
                        <span className="text-muted-foreground">{schedule.hours}</span>
                        {schedule.note && (
                          <p className="text-xs text-muted-foreground">{schedule.note}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Directions Button */}
              <Button className="w-full sm:w-auto">
                <Navigation className="mr-2 h-5 w-5" />
                Ver no Google Maps
              </Button>
            </div>

            {/* Map Placeholder */}
            <Card className="h-96">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="h-16 w-16 text-primary mx-auto" />
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Mapa Integrado</p>
                      <p className="text-sm text-muted-foreground">
                        Localização da Clínica Equilíbrio Mental
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Envie-nos uma Mensagem
              </h2>
              <p className="text-xl text-muted-foreground">
                Se preferir, utilize o formulário abaixo para nos enviar uma mensagem. 
                Responderemos o mais breve possível.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-green-800">Mensagem Enviada!</h4>
                        <p className="text-green-700 text-sm">{submitMessage}</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="h-6 w-6 text-red-600" />
                      <div>
                        <h4 className="font-semibold text-red-800">Erro no Envio</h4>
                        <p className="text-red-700 text-sm">{submitMessage}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Assunto da sua mensagem"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Digite sua mensagem aqui..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Accessibility className="h-16 w-16 text-secondary mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Acessibilidade
              </h2>
              <p className="text-xl text-muted-foreground">
                A Clínica Equilíbrio Mental está comprometida em oferecer um ambiente 
                acessível a todos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Recursos de Acessibilidade</h3>
                  <ul className="space-y-2">
                    {accessibilityFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Assistência Especial</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Caso necessite de alguma assistência especial, por favor, nos informe 
                    no momento do agendamento para que possamos providenciar o suporte 
                    necessário e garantir que sua visita seja confortável e acessível.
                  </p>
                  <Button variant="outline">
                    Solicitar Assistência
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="section-padding bg-amber-50 border-t border-amber-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
              <Phone className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-amber-800">Em Caso de Emergência</h3>
            <p className="text-lg text-amber-700 leading-relaxed">
              Se você está passando por uma crise ou emergência psiquiátrica, procure 
              imediatamente o serviço de emergência mais próximo ou ligue para o CVV 
              (Centro de Valorização da Vida): <strong>188</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                CVV - 188
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50">
                SAMU - 192
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

