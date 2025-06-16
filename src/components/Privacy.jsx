import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Eye, 
  Lock, 
  UserCheck, 
  Database, 
  AlertTriangle,
  CheckCircle,
  Mail,
  Phone
} from 'lucide-react';

const Privacy = () => {
  const dataTypes = [
    {
      category: 'Dados de Identificação e Contato',
      items: ['Nome completo', 'E-mail', 'Telefone', 'WhatsApp', 'Data de nascimento', 'CPF', 'Endereço'],
      purpose: 'Agendamento de consultas, comunicação e identificação'
    },
    {
      category: 'Dados de Saúde',
      items: ['Histórico de saúde', 'Sintomas', 'Diagnósticos', 'Medicações'],
      purpose: 'Diagnóstico e tratamento adequados',
      sensitive: true
    },
    {
      category: 'Dados de Navegação',
      items: ['Endereço IP', 'Tipo de navegador', 'Páginas visitadas', 'Tempo de permanência'],
      purpose: 'Melhorar a experiência do usuário e analisar o desempenho do site'
    }
  ];

  const userRights = [
    {
      icon: Eye,
      title: 'Confirmação e Acesso',
      description: 'Confirmar a existência de tratamento e acessar seus dados.'
    },
    {
      icon: CheckCircle,
      title: 'Correção',
      description: 'Solicitar a correção de dados incompletos, inexatos ou desatualizados.'
    },
    {
      icon: Shield,
      title: 'Eliminação',
      description: 'Solicitar a eliminação de dados desnecessários ou tratados inadequadamente.'
    },
    {
      icon: Database,
      title: 'Portabilidade',
      description: 'Solicitar a portabilidade dos seus dados a outro fornecedor de serviço.'
    },
    {
      icon: UserCheck,
      title: 'Revogação do Consentimento',
      description: 'Revogar o consentimento a qualquer momento.'
    },
    {
      icon: Lock,
      title: 'Oposição',
      description: 'Opor-se a tratamento realizado em descumprimento à LGPD.'
    }
  ];

  const securityMeasures = [
    'Criptografia de dados em trânsito e em repouso',
    'Controles de acesso rigorosos aos sistemas e informações',
    'Treinamento contínuo da equipe sobre privacidade e segurança',
    'Monitoramento constante de vulnerabilidades e ameaças',
    'Backup regular dos dados'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom text-center space-y-8">
          <div className="space-y-4">
            <Shield className="h-16 w-16 text-primary mx-auto" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Política de Privacidade e LGPD
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Na Clínica Equilíbrio Mental, a privacidade e a segurança dos seus dados são prioridades. 
              Conheça como protegemos suas informações.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Nosso Compromisso com sua Privacidade
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos 
                as informações pessoais que você nos fornece, em conformidade com a Lei Geral de 
                Proteção de Dados (Lei nº 13.709/2018 - LGPD) e demais legislações aplicáveis.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ao utilizar nossos serviços e navegar em nosso site, você concorda com os termos 
                desta Política de Privacidade. Recomendamos que a leia atentamente.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-blue-800">Última Atualização</h3>
                  <p className="text-blue-700 text-sm">
                    Esta política foi atualizada em 11 de junho de 2025 e está em conformidade 
                    com as mais recentes regulamentações de proteção de dados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Coleta de Dados Pessoais
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Coletamos dados pessoais de diversas formas, sempre com o seu consentimento 
                e para finalidades específicas.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {dataTypes.map((dataType, index) => (
                <Card key={index} className={`${dataType.sensitive ? 'border-2 border-amber-200 bg-amber-50' : ''}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-foreground">{dataType.category}</h3>
                      {dataType.sensitive && (
                        <Badge variant="destructive" className="text-xs">
                          Dados Sensíveis
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Tipos de dados:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {dataType.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Finalidade:</h4>
                        <p className="text-sm text-muted-foreground">{dataType.purpose}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Seus Direitos como Titular de Dados
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                De acordo com a LGPD, você possui direitos específicos em relação aos seus dados pessoais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userRights.map((right, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <right.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">{right.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{right.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Para exercer qualquer um desses direitos, entre em contato conosco através dos canais indicados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <Lock className="h-16 w-16 mx-auto opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Segurança dos Dados
              </h2>
              <p className="text-xl opacity-90">
                Adotamos medidas rigorosas de segurança para proteger seus dados pessoais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Medidas de Proteção</h3>
                <ul className="space-y-3">
                  {securityMeasures.map((measure, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 opacity-90" />
                      <span className="text-sm opacity-90">{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Compromisso Contínuo</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Nossa equipe é constantemente treinada sobre as melhores práticas de segurança 
                  e privacidade. Realizamos auditorias regulares de nossos sistemas e processos 
                  para garantir que seus dados estejam sempre protegidos contra acesso não autorizado, 
                  perda, alteração ou divulgação.
                </p>
                <p className="text-sm opacity-90 leading-relaxed">
                  Mantemos parcerias apenas com fornecedores que demonstram o mesmo nível de 
                  compromisso com a proteção de dados que exigimos de nós mesmos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Compartilhamento de Dados
              </h2>
              <p className="text-xl text-muted-foreground">
                A Clínica Equilíbrio Mental não compartilha seus dados pessoais com terceiros, 
                exceto nas situações específicas descritas abaixo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <h3 className="font-bold text-green-800">Quando Compartilhamos</h3>
                  </div>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• Com seu consentimento expresso</li>
                    <li>• Para prestação de serviços essenciais (sob acordos de confidencialidade)</li>
                    <li>• Por obrigação legal ou ordem judicial</li>
                    <li>• Entre profissionais da equipe envolvidos no seu tratamento</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-red-600" />
                    <h3 className="font-bold text-red-800">Nunca Compartilhamos</h3>
                  </div>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• Para fins comerciais ou marketing de terceiros</li>
                    <li>• Com empresas não autorizadas</li>
                    <li>• Sem garantias de segurança adequadas</li>
                    <li>• Fora das finalidades declaradas nesta política</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section-padding bg-amber-50 border-t border-amber-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-200">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-8 w-8 text-amber-600 mt-1 flex-shrink-0" />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-amber-800">Aviso de Responsabilidade</h3>
                    <div className="space-y-3 text-amber-700">
                      <p className="font-semibold">
                        Importante: O conteúdo disponibilizado neste site, incluindo artigos do blog 
                        e informações sobre serviços, tem caráter meramente educativo e informativo.
                      </p>
                      <p>
                        <strong>Ele não substitui, em hipótese alguma, o atendimento médico, psiquiátrico 
                        ou psicológico emergencial ou a consulta com um profissional de saúde qualificado.</strong> 
                        Em caso de emergência, procure imediatamente um serviço de saúde.
                      </p>
                      <p>
                        As informações aqui contidas não devem ser utilizadas para autodiagnóstico ou 
                        automedicação. Sempre consulte um profissional de saúde para obter um diagnóstico 
                        preciso e um plano de tratamento adequado à sua condição.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact DPO */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Contato do Encarregado de Dados (DPO)
              </h2>
              <p className="text-lg text-muted-foreground">
                Para quaisquer dúvidas ou solicitações relacionadas a esta Política de Privacidade 
                ou ao tratamento dos seus dados pessoais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <Mail className="h-12 w-12 text-primary mx-auto" />
                  <div>
                    <h3 className="font-semibold text-foreground">E-mail do DPO</h3>
                    <p className="text-primary">dpo@equilibriomental.com.br</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <Phone className="h-12 w-12 text-secondary mx-auto" />
                  <div>
                    <h3 className="font-semibold text-foreground">Contato Geral</h3>
                    <p className="text-secondary">contato@equilibriomental.com.br</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-700 text-sm">
                <strong>Alterações nesta Política:</strong> A Clínica Equilíbrio Mental reserva-se o direito 
                de modificar esta Política de Privacidade a qualquer momento. As alterações entrarão em vigor 
                imediatamente após a publicação da versão revisada em nosso site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

