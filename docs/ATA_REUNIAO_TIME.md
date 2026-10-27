# Ata da Reunião de Concepção & Arquitetura — Portal de Estudos PMI-CPMAI™

> **Projeto:** Plataforma Web Interativa e Mobile-First para a Certificação de IA do PMI (**PMI-CPMAI™ — PMI Certified Professional in Managing AI**)  
> **Time Multidisciplinar:**
> - 🧠 **Especialista em IA & Certificação PMI-CPMAI™** (*Conteúdo Programático, ECO, Metodologia CPMAI v7, Simulados*)
> - 🎨 **Product & UI/UX Designer Educacional** (*Design System, Mobile-First Experience, Visualização Didática*)
> - 💻 **Engenheiro de Software Sênior** (*Arquitetura Web GitHub Pages, PWA, Motor de Simulados, Persistência Local*)
> - 🛡️ **Engenheiro de QA (Quality Assurance)** (*Auditoria Pedagógica, Fidelidade ao Exame, Responsividade & Acessibilidade*)

---

## 1. Pauta da Reunião

Definir a melhor forma de apresentação, arquitetura pedagógica e modelo técnico para um portal completo de estudos para a certificação de Inteligência Artificial do PMI (**PMI-CPMAI™**), garantindo:
1. Explicação detalhada sobre **como é a prova** e **o que é avaliado** (os 5 Domínios do ECO e seus pesos).
2. Seção completa de **Material de Referência ("O PMBOK da IA")**, esclarecendo quais são os guias oficiais equivalentes ao PMBOK para esta certificação, resumo profundo dos conceitos-chave e curadoria de vídeos, cursos e referências na web.
3. **Cronograma detalhado semana a semana** (8 semanas) com checklist interativo.
4. **6 Simulados no formato da prova** (além de um Super Simulado Oficial de 120 questões / 160 minutos) + **Simulados dirigidos por Domínio do Conhecimento**.
5. **Dicas de prova e Mindset PMI-CPMAI™**.
6. Acesso perfeito em **qualquer dispositivo móvel** via **GitHub Pages**, com instruções passo a passo de publicação.

---

## 2. Discussão e Decisões por Especialista

### 🧠 Especialista em IA & Certificação PMI-CPMAI™
**Diagnóstico sobre a Certificação e o "PMBOK da IA":**
- *"Muitos candidatos vêm do PMP procurando um 'PMBOK da IA'. Precisamos deixar muito claro logo na seção de Referência que, para a certificação **PMI-CPMAI™**, o documento central equivalente ao PMBOK é o **CPMAI™ v7 Workbook & Methodology Guide (Cognitive Project Management for AI)** aliado ao **PMI-CPMAI Examination Content Outline (ECO)**. Além disso, a metodologia CPMAI é uma evolução específica para IA do clássico **CRISP-DM**, combinada com governança baseada no **NIST AI Risk Management Framework (AI RMF 1.0)**, **ISO/IEC 42001** e **EU AI Act / LGPD**."*
- **Estrutura de Conteúdo Obrigatória definida pelo Especialista:**
  1. **Os 5 Domínios do Exame (ECO) e seus Pesos Reais:**
     - **Domínio I:** Apoiar Iniciativas de IA Responsável e Confiável (*Support Responsible & Trustworthy AI Efforts*) — **15%**
     - **Domínio II:** Identificar Necessidades e Soluções de Negócio (*Identify Business Needs & Solutions*) — **26%**
     - **Domínio III:** Identificar as Necessidades de Dados (*Identify Data Needs*) — **26%**
     - **Domínio IV:** Gerenciar o Desenvolvimento e Avaliação de Modelos de IA (*Manage Model Development & Evaluation*) — **16%**
     - **Domínio V:** Operacionalizar a Solução de IA (*Operationalize AI Solution*) — **17%**
     - *Insight crucial para o aluno:* Somando os Domínios II e III, **52% da prova** acontece **antes** mesmo de treinar o modelo!
  2. **As 6 Fases Iterativas da Metodologia CPMAI:**
     - Fase I (*Business Understanding*) $\leftrightarrow$ Fase II (*Data Understanding*) $\leftrightarrow$ Fase III (*Data Preparation*) $\leftrightarrow$ Fase IV (*Model Development*) $\leftrightarrow$ Fase V (*Model Evaluation*) $\leftrightarrow$ Fase VI (*Model Operationalization*).
     - A prova cobra exaustivamente os **Go/No-Go Gates** e a capacidade do gerente de projetos de **retroceder para uma fase anterior** (ex.: se na Fase V o modelo falha nas métricas de negócio por falta de dados representativos, não se vai para a Fase VI; volta-se para a Fase II ou III!).
  3. **Os 7 Padrões de IA (*7 Patterns of AI*):**
     - Hiperpersonalização, Sistemas Autônomos, Análise Preditiva e Suporte à Decisão, Conversação e Interação Humana, Padrões e Anomalias, Reconhecimento e Sistemas Orientados a Objetivos.
  4. **Arquitetura dos Simulados:**
     - **6 Simulados no Formato da Prova** (distribuídos exatamente conforme os pesos dos 5 domínios do ECO, além da opção de rodar o **Exame Oficial Completo de 120 Questões em 160 Minutos**).
     - **6 Simulados Dirigidos por Domínio do Conhecimento** (um para cada um dos 5 Domínios do ECO + 1 Simulado Especial focado nas 6 Fases CPMAI & 7 Padrões de IA).

---

### 🎨 Product & UI/UX Designer Educacional
**Proposta de Apresentação e Experiência Mobile-First:**
- *"Como o usuário vai acessar o portal pelo celular em qualquer lugar (no transporte, em intervalos, no sofá) e também no computador, um PDF estático ou uma página longa sem interação seria cansativo. Proponho um **Learning Hub Interativo estilo App Mobile (PWA)**."*
- **Decisões de Design aprovadas pelo time:**
  1. **Navegação Dual (Desktop Topbar + Mobile Bottom Navigation Bar):** No celular, uma barra inferior fixa ao alcance do polegar com 5 áreas claras: **Prova & Time**, **Referência (PMBOK IA)**, **Cronograma**, **Simulados** e **Dicas & GitHub**.
  2. **Dois Modos de Simulado:**
     - **Modo Estudo / Tutor (Aprendizado Ativo):** Ao selecionar uma alternativa, o aluno recebe feedback imediato com cores semânticas (Verde Esmeralda para acerto, Rosa para erro), justificativa detalhada do gabarito e uma "Dica de Prova".
     - **Modo Prova Real (Simulação Pearson VUE):** Cronômetro regressivo real, botão de *"Marcar para Revisão (Flag)"*, mapa de questões navegável e bloqueio do gabarito até a entrega final, gerando um **Relatório de Desempenho por Domínio do ECO** ao concluir.
  3. **Ferramentas de Estudo Ativo:**
     - **Flashcards 3D com Flip** para memorização rápida no celular.
     - **Glossário Inteligente com Busca Instantânea** em tempo real.
     - **Tabelas Responsivas com `@container` queries** que se transformam automaticamente em cards empilhados em telas estreitas de smartphone, mantendo cabeçalhos fixos (`sticky`) no desktop.
     - **Suporte Nativo à Escala de Texto do Sistema Operacional (`<meta name="text-scale" content="scale">`)** e alternância entre **Modo Escuro (Dark Mode)** e **Modo Claro (Light Mode)** para conforto visual em leituras noturnas.

---

### 💻 Engenheiro de Software Sênior
**Arquitetura Técnica para GitHub Pages:**
- *"Para que o usuário suba o projeto no GitHub com zero dor de cabeça (inclusive arrastando os arquivos direto pela interface web do GitHub se preferir), a arquitetura deve ser **Static-First (HTML5 + CSS3 Moderno + Vanilla ES6+ JavaScript)**, sem necessidade de servidor backend, banco de dados externo ou pipeline complexo de compilação."*
- **Recursos Técnicos Implementados:**
  1. **Persistência Automática (`localStorage`):** Todo o progresso do aluno (tarefas concluídas nas 8 semanas do cronograma, histórico de notas dos simulados, questões salvas no **Caderno de Erros** e tema preferido) fica salvo automaticamente no navegador.
  2. **Sincronização Multi-Dispositivo (Exportar/Importar JSON):** Caso o aluno estude no computador e queira levar seu progresso para o celular (ou vice-versa), há um botão de exportação e importação de backup em 1 clique.
  3. **Progressive Web App (PWA):** Com `manifest.json` e `sw.js` (Service Worker), o aluno pode clicar em *"Adicionar à Tela de Início"* no iPhone (Safari) ou Android (Chrome) e usar o portal como um aplicativo nativo, inclusive com cache offline.

---

### 🛡️ Engenheiro de QA (Quality Assurance)
**Critérios de Aceite e Auditoria Pedagógica:**
- *"Nossa matriz de qualidade exige que nenhuma questão seja superficial ou decoreba pura. A prova PMI-CPMAI é situacional. Por isso, auditei todos os simulados para garantir enunciados de cenário ('Você é o gerente de um projeto de IA no setor financeiro/saúde/varejo... Qual deve ser sua PRÓXIMA ação?')."*
- **Checklist de Qualidade Validado:**
  - [x] **6 Simulados no Formato da Prova** completos e balanceados pelos 5 domínios do ECO + **Modo Maratona 120 Questões (160 min)**.
  - [x] **6 Simulados Dirigidos por Domínio** (Domínios I, II, III, IV, V + Especial CPMAI & 7 Padrões).
  - [x] **Caderno de Erros Automático:** Toda questão que o aluno errar em qualquer simulado é automaticamente catalogada na aba "Caderno de Erros" para que ele possa refazer apenas seus pontos fracos.
  - [x] **Cronograma de 8 Semanas** detalhado com tarefas práticas verificáveis.
  - [x] **Seção de Referência ("O PMBOK da IA")** com explicação completa dos guias, conceitos, vídeos e links oficiais.
  - [x] **Guia Passo a Passo de Publicação no GitHub Pages** testado para iniciantes e avançados.
