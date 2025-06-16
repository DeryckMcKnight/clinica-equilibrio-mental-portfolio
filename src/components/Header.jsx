import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Equipe', href: '/equipe' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(XX) XXXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@equilibriomental.com.br</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Segunda a Sexta: 08:00 às 18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Clínica Equilíbrio Mental</h1>
              <p className="text-sm text-muted-foreground">Saúde Mental e Bem-estar</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link to="/agendamento">Agendar Consulta</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-accent hover:bg-accent/90 mt-4">
                <Link to="/agendamento" onClick={() => setIsMenuOpen(false)}>
                  Agendar Consulta
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

