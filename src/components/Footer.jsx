import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Shield,
  FileText
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Equipe', href: '/equipe' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' }
  ];

  const services = [
    { name: 'Consultas Psiquiátricas', href: '/servicos' },
    { name: 'Psicoterapia Individual', href: '/servicos' },
    { name: 'Terapia de Casal', href: '/servicos' },
    { name: 'Terapia Familiar', href: '/servicos' },
    { name: 'Telemedicina', href: '/servicos' },
    { name: 'Avaliação Diagnóstica', href: '/servicos' }
  ];

  const legalLinks = [
    { name: 'Política de Privacidade', href: '/politica-privacidade' },
    { name: 'Termos de Uso', href: '/termos-uso' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/equilibriomental', 
      icon: Facebook 
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/equilibriomental', 
      icon: Instagram 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/equilibriomental', 
      icon: Linkedin 
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Clínica Equilíbrio Mental</h3>
                  <p className="text-sm text-muted">Saúde Mental e Bem-estar</p>
                </div>
              </div>
              
              <p className="text-muted leading-relaxed">
                Cuidando da sua saúde mental com ética, ciência e acolhimento. 
                Uma equipe multidisciplinar dedicada ao seu bem-estar integral.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm">(XX) XXXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">contato@equilibriomental.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm">
                  <p>Rua da Paz, 123 - Sala 405</p>
                  <p>Bairro Harmonia, Cidade Feliz</p>
                  <p>Estado - CEP 12345-678</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold">Conecte-se conosco</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-muted hover:text-primary transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Legal */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Horário de Atendimento</h4>
              <div className="space-y-2 text-sm text-muted">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span>08:00 às 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span>09:00 às 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Informações Legais</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted hover:text-primary transition-colors duration-200 flex items-center space-x-2"
                    >
                      {link.name === 'Política de Privacidade' ? (
                        <Shield className="h-4 w-4" />
                      ) : (
                        <FileText className="h-4 w-4" />
                      )}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted">
                © {currentYear} Clínica Equilíbrio Mental. Todos os direitos reservados.
              </p>
              <p className="text-xs text-muted mt-1">
                <strong>CRM Responsável Técnico:</strong> Dr. João Silva - CRM/SP 123456
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-xs text-muted">
                Desenvolvido com ❤️ para promover a saúde mental
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="bg-amber-600 text-amber-50">
        <div className="container-custom py-3">
          <div className="text-center">
            <p className="text-sm">
              <strong>Em caso de emergência:</strong> CVV - 188 | SAMU - 192 | 
              Procure o serviço de emergência mais próximo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

