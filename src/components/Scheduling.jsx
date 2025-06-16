import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Calendar, 
  Clock, 
  MessageSquare, 
  Phone, 
  Mail, 
  CheckCircle,
  Shield,
  ArrowRight,
  Loader2,
  AlertCircle
} from 'lucide-react';

const Scheduling = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: '',
    specialty: '',
    message: '',
    consent: false
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

  const handleConsentChange = (checked) => {
    setFormData(prev => ({
      ...prev,
      consent: checked
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/appointment', {
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
          phone: '',
          consultationType: '',
          specialty: '',
          message: '',
          consent: false
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

  const consultationTypes = [
    { value: 'primeira-consulta', label: 'Primeira Consulta' },
    { value: 'retorno', label: 'Retorno' },
    { value: 'telemedicina', label: 'Telemedicina' }
  ];

  const specialties = [
    { value: 'psiquiatria', label: 'Psiquiatria' },
    { value: 'psicologia', label: 'Psicologia' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Agendamento de Consultas
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Priorizar sua saúde mental é um passo fundamental para uma vida plena e equilibrada. 
              Agende sua consulta de forma rápida e conveniente.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Agende sua Consulta Online
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nosso formulário de agendamento online foi desenvolvido para ser simples, seguro e 
                em conformidade com a Lei Geral de Proteção de Dados (LGPD). Preencha os campos 
                abaixo e nossa equipe entrará em contato para confirmar seu agendamento.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold text-lg">1</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Preencha o Formulário</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete suas informações básicas e preferências de atendimento.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-secondary font-bold text-lg">2</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Confirmação</h3>
                  <p className="text-sm text-muted-foreground">
                    Nossa equipe entrará em contato para confirmar disponibilidade e horário.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-accent font-bold text-lg">3</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Consulta Agendada</h3>
                  <p className="text-sm text-muted-foreground">
                    Receba todas as orientações necessárias para sua consulta.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Form */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <Calendar className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold text-foreground">Formulário de Agendamento</h3>
                    <p className="text-muted-foreground">
                      Preencha os dados abaixo para agendar sua consulta
                    </p>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                        <div>
                          <h4 className="font-semibold text-green-800">Agendamento Enviado!</h4>
                          <p className="text-green-700 text-sm">{submitMessage}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <AlertCircle className="h-6 w-6 text-red-600" />
                        <div>
                          <h4 className="font-semibold text-red-800">Erro no Agendamento</h4>
                          <p className="text-red-700 text-sm">{submitMessage}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Informações Pessoais</h4>
                      
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Digite seu nome completo"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
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

                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(XX) XXXXX-XXXX"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Consultation Preferences */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Preferências de Consulta</h4>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="consultationType">Tipo de Consulta *</Label>
                          <select
                            id="consultationType"
                            name="consultationType"
                            value={formData.consultationType}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                            required
                            disabled={isSubmitting}
                          >
                            <option value="">Selecione o tipo</option>
                            {consultationTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="specialty">Especialidade Desejada (Opcional)</Label>
                          <select
                            id="specialty"
                            name="specialty"
                            value={formData.specialty}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                            disabled={isSubmitting}
                          >
                            <option value="">Selecione a especialidade</option>
                            {specialties.map((specialty) => (
                              <option key={specialty.value} value={specialty.value}>
                                {specialty.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem (Opcional)</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Dúvidas ou informações adicionais..."
                          rows={4}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    {/* LGPD Consent */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={handleConsentChange}
                          required
                          disabled={isSubmitting}
                        />
                        <div className="space-y-1">
                          <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                            Declaro que li e concordo com a{' '}
                            <a href="/politica-privacidade" className="text-primary hover:underline">
                              Política de Privacidade
                            </a>{' '}
                            da Clínica Equilíbrio Mental e autorizo o tratamento dos meus dados 
                            para fins de agendamento e comunicação. *
                          </Label>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={!formData.consent || isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Agendamento
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Outras Formas de Agendamento
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Para sua comodidade, também oferecemos agendamento através de nossos 
              canais de comunicação direta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* WhatsApp */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Agendamento via WhatsApp</h3>
                  <p className="text-muted-foreground">
                    Clique no botão abaixo para iniciar uma conversa com nossa equipe via WhatsApp 
                    e agende sua consulta de forma rápida e prática.
                  </p>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Agendar via WhatsApp
                </Button>
                <p className="text-sm text-muted-foreground">
                  Atendimento: Segunda a Sexta, 08:00 às 18:00
                </p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Agendamento via E-mail</h3>
                  <p className="text-muted-foreground">
                    Se preferir, envie um e-mail com suas informações e o tipo de consulta desejada. 
                    Responderemos o mais breve possível.
                  </p>
                </div>
                <Button variant="outline">
                  <Mail className="mr-2 h-5 w-5" />
                  contato@equilibriomental.com.br
                </Button>
                <p className="text-sm text-muted-foreground">
                  Resposta em até 24 horas úteis
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <Shield className="h-16 w-16 mx-auto opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Informações Importantes
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <CheckCircle className="h-8 w-8 mx-auto opacity-90" />
                <h3 className="font-semibold">Confirmação</h3>
                <p className="text-sm opacity-90">
                  Após o envio do formulário, nossa equipe entrará em contato para confirmar 
                  a disponibilidade e o horário da sua consulta.
                </p>
              </div>

              <div className="text-center space-y-3">
                <Clock className="h-8 w-8 mx-auto opacity-90" />
                <h3 className="font-semibold">Telemedicina</h3>
                <p className="text-sm opacity-90">
                  Para consultas online, você receberá um link seguro para a videochamada 
                  no dia e horário agendados.
                </p>
              </div>

              <div className="text-center space-y-3">
                <Phone className="h-8 w-8 mx-auto opacity-90" />
                <h3 className="font-semibold">Suporte</h3>
                <p className="text-sm opacity-90">
                  Em caso de dúvidas ou necessidade de reagendamento, entre em contato 
                  conosco pelos canais indicados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scheduling;

