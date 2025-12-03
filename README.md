# Agenda Magnética - Landing Page

Landing page para o sistema Agenda Magnética, especializado em automação de agendamentos para clínicas de estética.

## 🚀 Características

- **Design Premium**: Fundo escuro com gradientes laranja/roxo
- **Totalmente Responsivo**: Otimizado para desktop e mobile
- **Componentes Modulares**: Estrutura organizada e reutilizável
- **Formulário de Captura**: Integração preparada para Google Sheets
- **SEO Otimizado**: Meta tags e estrutura semântica

## 📋 Seções da Landing Page

1. **Header/Hero Section** - Apresentação principal com CTA
2. **Seção de Problema** - Dores do público-alvo
3. **Seção de Solução** - Apresentação da Agenda Magnética
4. **Método C.A.R.E** - Metodologia exclusiva
5. **Benefícios** - Resultados e estatísticas
6. **Como Funciona** - Fluxo do sistema
7. **Diferenciais** - Vantagens competitivas
8. **FAQ** - Perguntas frequentes
9. **Planos** - Opções de preços
10. **CTA Final** - Chamada para ação principal
11. **Formulário de Lead** - Captura de contatos
12. **Footer** - Informações de contato

## 🔧 Integração com Google Sheets

### Configuração Atual
O formulário está configurado para capturar leads com os seguintes campos:
- Nome completo
- E-mail
- Telefone (WhatsApp)
- Timestamp
- Fonte (Landing Page)

### Para Ativar a Integração

1. **Criar Google Apps Script**:
   - Acesse [script.google.com](https://script.google.com)
   - Crie um novo projeto
   - Cole o código do webhook (disponível em `/src/lib/googleSheets.ts`)

2. **Configurar Planilha**:
   - Crie uma planilha no Google Sheets
   - Configure as colunas: Nome | Email | Telefone | Timestamp | Fonte
   - Anote o ID da planilha

3. **Atualizar o Código**:
   - Substitua a URL no `LeadForm.tsx` pela URL do seu Google Apps Script
   - Configure as credenciais conforme o briefing fornecido

### Credenciais Fornecidas
As credenciais do Google Service Account já estão incluídas no projeto conforme especificado no briefing.

## 🎨 Design System

### Cores Principais
- **Background**: `#121212` (Dark premium)
- **Primary**: `#F97316` (Orange)
- **Secondary**: `#A855F7` (Purple)
- **Text**: `#E0E0E0` (Light gray)

### Gradientes
- **Primary Gradient**: Orange → Purple
- **Glow Effects**: Sombras com cores primárias
- **Card Premium**: Fundo translúcido com blur

### Componentes Customizados
- `.btn-premium`: Botão com gradiente e efeitos
- `.gradient-text`: Texto com gradiente
- `.card-premium`: Cards com efeito premium
- `.glow-effect`: Efeito de brilho

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: Tailwind CSS padrão (sm, md, lg, xl)
- **Navegação**: Menu responsivo com scroll suave
- **Formulários**: Inputs otimizados para touch

## 🔍 SEO

- **Meta Tags**: Título, descrição e keywords otimizados
- **Open Graph**: Configurado para redes sociais
- **Twitter Cards**: Suporte para compartilhamento
- **Estrutura Semântica**: HTML5 semântico
- **Performance**: Otimizado para Core Web Vitals

## 📞 Contato

- **WhatsApp**: (51) 99440-8307
- **Desenvolvedor**: Alisson Rosa
- **Especialidade**: Automação para Estética
- **CNPJ**: 56.419.023/0001-90

## 🛡️ Garantias

- **15 dias de garantia** para teste sem compromisso
- **Suporte completo** durante implementação
- **LGPD Compliance** para proteção de dados
- **Uptime garantido** com servidores profissionais