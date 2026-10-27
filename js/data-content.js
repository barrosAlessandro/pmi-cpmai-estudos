/**
 * PMI-CPMAI™ (PMI Certified Professional in Managing AI)
 * Base de Conhecimento Oficial, Guia de Referência, Cronograma de 8 Semanas,
 * Discussão Arquitetural do Time, Mindset de Prova e Guia GitHub Pages.
 *
 * Exposto globalmente em `window.STUDY_CONTENT` (compatível com GitHub Pages e ES6+).
 */

window.STUDY_CONTENT = {
  meta: {
    title: "Academia PMI-CPMAI™ — Plataforma Completa de Preparação",
    version: "7.0.0",
    certification: "PMI Certified Professional in Managing AI (PMI-CPMAI™)",
    methodology: "CPMAI™ v7 (Cognitive Project Management for AI)",
    lastUpdated: "2026",
    language: "pt-BR"
  },

  /* ==========================================================================
   * 1. REGISTRO DA DISCUSSÃO DO TIME DE ESPECIALISTAS (TEAM DISCUSSION)
   * ========================================================================== */
  teamDiscussion: {
    title: "Bastidores da Engenharia & Pedagogia: Como Projetamos sua Aprovação",
    subtitle: "Reunião de arquitetura e alinhamento pedagógico dos 4 especialistas responsáveis pela construção desta plataforma de estudos para o exame PMI-CPMAI™.",
    summary: "O exame PMI-CPMAI™ não testa quem decora código em Python, mas sim quem domina a tomada de decisão gerencial em projetos de IA usando a metodologia CPMAI v7 e os 5 domínios do ECO. Nosso time multidisciplinar desenhou esta aplicação para unir rigor metodológico, microaprendizagem mobile-first, arquitetura zero-dependências para GitHub Pages e auditoria estatística no padrão Pearson VUE.",
    architectureConsensus: [
      "Fidelidade 100% ao PMI-CPMAI Exam Content Outline (ECO) com distribuição exata de pesos: Domínio I (15%), Domínio II (26%), Domínio III (26%), Domínio IV (16%) e Domínio V (17%).",
      "Abordagem Data-Centric AI e Iterativa: ênfase em questões situacionais de Go/No-Go onde a resposta correta exige recuar de fase (ex.: da Fase V para a Fase III ou Fase I) em vez de forçar o deploy de modelos enviesados ou sem alinhamento ao negócio.",
      "Arquitetura SPA Vanilla ES6+ sem etapa de build (Zero-Build Static Web App): funciona instantaneamente no GitHub Pages ou abrindo localmente, com suporte a PWA e persistência integral em localStorage + sincronização via JSON.",
      "Duplo motor de simulados: Modo Tutor (feedback pedagógico imediato alternativa por alternativa) e Modo Exame Real Pearson VUE (cronômetro regressivo, bloqueio de gabarito até o envio e análise de ritmo de 1m20s por questão)."
    ],
    members: [
      {
        id: "ai-specialist",
        role: "Especialista em IA & PMI-CPMAI™",
        name: "Dr. Rafael Mendes, PMP, PMI-CPMAI",
        badge: "Metodologia CPMAI v7 & ECO",
        avatar: "🧠",
        color: "#6366f1",
        focus: "Metodologia CPMAI v7, ECO de 5 domínios, 6 fases iterativas, 7 Padrões de IA, Data-Centric AI e decisões de Go/No-Go.",
        quote: "Na prova do PMI-CPMAI, o candidato que tenta resolver um problema de dados ou de negócio ajustando hiperparâmetros na Fase IV cai na armadilha clássica. IA bem-sucedida é 80% negócio e dados, e 100% iterativa.",
        summary: "Estruturou todo o conteúdo teórico e o racional das questões em torno da Metodologia CPMAI v7 (evolução do CRISP-DM para IA), dos 7 Padrões de IA da Cognilytica/PMI e da filosofia Data-Centric AI.",
        keyDecisions: [
          "Mapeamento cruzado entre os 5 Domínios do ECO (15%, 26%, 26%, 16%, 17%) e as 6 Fases Iterativas da CPMAI (Business Understanding → Data Understanding → Data Preparation → Model Development → Model Evaluation → Model Operationalization).",
          "Inclusão de cenários de Go/No-Go Gates em todas as fases: ensinar ao aluno exatamente quando voltar da Fase IV/V para a Fase III (dados sujos/vazamento), Fase II (dados inexistentes/inacessíveis) ou Fase I (mudança de KPI de negócio ou solução que não exige IA).",
          "Cobertura profunda dos 7 Padrões de IA (Hiperpersonalização, Sistemas Autônomos, Análise Preditiva, Conversação, Padrões e Anomalias, Reconhecimento e Sistemas Orientados a Objetivos) e como projetos reais combinam múltiplos padrões.",
          "Integração de IA Generativa moderna (LLMs, RAG vs Fine-Tuning, Prompt Engineering, Alucinações, Guardrails) com os frameworks globais de governança exigidos na prova (NIST AI RMF 1.0, EU AI Act e ISO/IEC 42001)."
        ],
        detailedContribution: "Garantiu que esta plataforma responda de forma definitiva à dúvida de todo gestor ('Qual é o PMBOK da IA?'), destrinchando o CPMAI Workbook v7 como guia central e traduzindo conceitos matemáticos complexos (Matriz de Confusão, Precision vs Recall, ROC-AUC, Data Drift vs Concept Drift, Shadow vs Canary Deploy) para a linguagem de tomada de decisão executiva cobrada pelo PMI."
      },
      {
        id: "ux-designer",
        role: "Product & UI/UX Designer",
        name: "Clara Vasconcelos, Lead Product Designer",
        badge: "Mobile-First & Microlearning",
        avatar: "🎨",
        color: "#0ea5e9",
        focus: "Experiência mobile-first, microaprendizagem no celular, Bottom Navigation, Dark/Light mode, @container queries, flashcards ativos e modos de simulado.",
        quote: "Um profissional que se prepara para o PMI-CPMAI estuda no metrô, no intervalo do almoço pelo celular e à noite no notebook. A interface precisa se adaptar ao contexto cognitivo do aluno sem fricção.",
        summary: "Desenhou um sistema de design focado em leitura confortável, retenção ativa (Active Recall) e ergonomia mobile com navegação inferior (Bottom Navigation) e suporte nativo a tema claro e escuro.",
        keyDecisions: [
          "Arquitetura Mobile-First com Bottom Navigation no celular e Sidebar executiva no desktop, garantindo alcance ergonômico do polegar (tap targets mínimos de 48x48px).",
          "Uso de CSS moderno com Custom Properties (variáveis para Dark/Light mode sem flash de tela) e `@container` queries para que tabelas comparativas, matrizes de confusão e cartões das 6 fases CPMAI se reorganizem de acordo com o espaço do componente.",
          "Microaprendizagem (Microlearning): divisão da teoria em pílulas visuais, Flashcards Interativos 3D com autoavaliação de domínio e Glossário pesquisável em tempo real.",
          "Separação clara da UX de Simulados em dois modos: 'Modo Tutor' (aprendizado ativo com explicação imediata do porquê cada alternativa está certa ou errada) e 'Modo Exame Real Pearson VUE' (foco total, timer de 160 min, marcação de questões para revisão e relatório pós-prova)."
        ],
        detailedContribution: "Criou hierarquia visual semântica com badges por domínio do ECO, barras de progresso animadas, cartões de comparação rápida (ex.: RAG vs Fine-Tuning, Data Drift vs Concept Drift) e gráficos de desempenho por domínio para identificar lacunas de estudo em segundos."
      },
      {
        id: "software-engineer",
        role: "Engenheiro de Software Sênior",
        name: "Lucas Andrade, Staff Frontend Architect",
        badge: "Web Architecture & PWA",
        avatar: "⚡",
        color: "#10b981",
        focus: "Arquitetura SPA estática 100% compatível com GitHub Pages sem build complexo, PWA instalável, persistência em localStorage e sincronização JSON.",
        quote: "A melhor arquitetura para o estudante é aquela que nunca quebra: HTML5 semântico, CSS moderno e JavaScript Vanilla modular que roda direto no GitHub Pages com carregamento instantâneo e suporte offline.",
        summary: "Implementou uma Single Page Application (SPA) resiliente, sem dependências externas frágeis ou necessidade de Node/Webpack para deploy, pronta para hospedagem gratuita no GitHub Pages.",
        keyDecisions: [
          "Arquitetura Zero-Build para GitHub Pages: arquivos estáticos puros (`index.html`, `css/styles.css`, `js/*.js`, `manifest.json`, `sw.js`) utilizando caminhos relativos (`./`) para funcionar perfeitamente tanto na raiz quanto em subdiretórios (`usuario.github.io/nome-do-repo/`).",
          "Camada de Persistência Completa em `localStorage`: salvamento automático do checklist das 8 semanas, histórico detalhado de simulados, estatísticas acumuladas por domínio, flashcards dominados, questões favoritas e Caderno de Erros.",
          "Sincronização Multi-Dispositivo (PC ↔ Celular) via Exportação e Importação de Backup JSON: como o `localStorage` é local a cada navegador, o aluno pode exportar seu arquivo `.json` no computador e importar no celular em 2 cliques.",
          "Progressive Web App (PWA): inclusão de Web App Manifest e Service Worker para instalação na tela inicial do iOS (Safari) e Android (Chrome), proporcionando experiência de aplicativo nativo."
        ],
        detailedContribution: "Desenvolveu o motor de simulados capaz de filtrar, embaralhar questões e alternativas opcionalmente, pausar/retomar sessões em andamento, calcular métricas por domínio em tempo real e exportar relatórios completos de estudo."
      },
      {
        id: "qa-engineer",
        role: "QA & Pedagogical Quality Engineer",
        name: "Marina Costa, Senior QA & EdTech Specialist",
        badge: "Auditoria ECO, A11y & Caderno de Erros",
        avatar: "🛡️",
        color: "#f59e0b",
        focus: "Validação da proporção dos 5 domínios do ECO [15%, 26%, 26%, 16%, 17%], auditoria pedagógica dos distratores, acessibilidade com text-scale e Caderno de Erros automático.",
        quote: "Uma questão de simulado só é excelente quando os distratores parecem plausíveis para quem não domina a metodologia CPMAI, e quando a explicação ensina por que as outras três alternativas estão incorretas.",
        summary: "Auditou a distribuição estatística do banco de questões frente ao ECO oficial do PMI, a qualidade pedagógica dos gabaritos comentados e os requisitos de acessibilidade e rastreamento de erros.",
        keyDecisions: [
          "Validação rigorosa dos pesos do ECO: Domínio I (15%), Domínio II (26%), Domínio III (26%), Domínio IV (16%) e Domínio V (17%), refletindo que Negócios + Dados somam 52% de toda a prova.",
          "Auditoria de Distratores: todas as questões possuem 4 alternativas (A, B, C, D) sem 'todas as anteriores' ou 'nenhuma das anteriores' (padrão PMI), com distratores baseados em erros reais de gestores tradicionais (ex.: pular a Fase I/II, usar precisão em vez de recall em diagnósticos críticos, ou fazer Fine-Tuning quando RAG resolve).",
          "Rastreamento Automático do Caderno de Erros: toda questão errada em qualquer simulado vai automaticamente para o Caderno de Erros, permitindo gerar baterias de revisão focadas exclusivamente nas vulnerabilidades do aluno até que ele acerte e domine o conceito.",
          "Acessibilidade Web (a11y): suporte a escalonamento de fonte do sistema (`<meta name=\"text-scale\" content=\"scale\">`), navegação por teclado (atalhos 1-4 / A-D nos simulados), contraste WCAG AA/AAA e semântica ARIA."
        ],
        detailedContribution: "Implementou o algoritmo de diagnóstico de prontidão para o exame (Readiness Score), que exige não apenas média global ≥ 75%, mas também equilíbrio mínimo em todos os 5 domínios do ECO antes do agendamento na Pearson VUE."
      }
    ]
  },

  /* ==========================================================================
   * 2. VISÃO GERAL DO EXAME (EXAM OVERVIEW & 5 DOMAINS OF THE ECO)
   * ========================================================================== */
  examOverview: {
    title: "Raio-X Oficial do Exame PMI-CPMAI™",
    subtitle: "Entenda a estrutura da prova na Pearson VUE, regras de pontuação, pré-requisitos e os 5 Domínios do Exam Content Outline (ECO).",
    certificationName: "PMI Certified Professional in Managing AI (PMI-CPMAI™)",
    issuingBody: "Project Management Institute (PMI) — baseado na metodologia CPMAI™ v7 (Cognitive Project Management for AI)",
    description: "A certificação PMI-CPMAI™ valida a competência de gerentes de projetos, líderes de produto, arquitetos de negócios, analistas e gestores de tecnologia para planejar, estruturar, governar e operacionalizar iniciativas de Inteligência Artificial e Machine Learning que entregam valor real de negócio de forma ética, confiável e sustentável.",
    format: {
      totalQuestions: 120,
      scoredQuestions: 100,
      unscoredQuestions: 20,
      unscoredExplanation: "Das 120 questões, 100 são pontuadas (scored) e 20 são questões pré-teste (unscored) usadas pelo PMI para calibrar futuros exames. Elas não são identificadas e estão espalhadas aleatoriamente ao longo da prova — trate todas as 120 questões com a mesma seriedade.",
      durationMinutes: 160,
      durationFormatted: "160 minutos (2 horas e 40 minutos)",
      timePerQuestionSeconds: 80,
      timePerQuestionFormatted: "~1 minuto e 20 segundos (80s) por questão",
      scheduledBreaks: "Nenhum intervalo programado (No scheduled breaks). Caso você saia da cadeira no centro de testes, o cronômetro continua rodando; no modo Online Proctored (OnVUE), sair do campo de visão da webcam pode cancelar seu exame!",
      questionFormat: "Múltipla escolha com 4 alternativas (A, B, C, D) e apenas 1 resposta correta, fortemente baseada em cenários situacionais ('O que o gerente de projeto CPMAI deve fazer PRIMEIRO / A SEGUIR?').",
      deliveryMethod: "Pearson VUE — Disponível em Centro de Testes Presencial (Test Center) ou Online Supervisionado por Webcam (OnVUE Online Proctored).",
      targetPassingScore: "O PMI utiliza pontuação em escala psicométrica (scaled score). Na preparação, nossa meta de segurança recomendada nos simulados é atingir consistentemente ≥ 75% a 80% de acerto em todos os 5 domínios."
    },
    quickStats: [
      { label: "Total de Questões", value: "120", detail: "100 pontuadas + 20 pré-teste ocultas", icon: "📝" },
      { label: "Tempo de Prova", value: "160 min", detail: "2h40min (sem pausa programada)", icon: "⏱️" },
      { label: "Ritmo Ideal", value: "1m 20s", detail: "80 segundos por questão em média", icon: "⚡" },
      { label: "Domínios do ECO", value: "5 Domínios", detail: "Negócios + Dados somam 52% da prova", icon: "🎯" },
      { label: "Fases da CPMAI", value: "6 Fases", detail: "Metodologia iterativa centrada em dados", icon: "🔄" },
      { label: "Padrões de IA", value: "7 Padrões", detail: "Taxonomia oficial de problemas de IA", icon: "🧩" }
    ],
    prerequisites: [
      {
        title: "Treinamento Oficial PMI-CPMAI (21 Horas)",
        required: true,
        icon: "🎓",
        description: "Conclusão do curso oficial de preparação PMI-CPMAI™ (que inclui o acesso ao CPMAI™ v7 Workbook oficial e templates da metodologia)."
      },
      {
        title: "Zero Exigência de Programação (Sem Código Python/R)",
        required: false,
        icon: "💻",
        description: "Você NÃO precisa escrever linhas de código em Python, R ou SQL na prova. Porém, DEVE compreender os conceitos técnicos (como funcionam algoritmos supervisionados vs não supervisionados, RAG vs Fine-Tuning, Matriz de Confusão, Data Leakage e Drift) para liderar cientistas e engenheiros de dados."
      },
      {
        title: "Foco em Gestão de IA, Dados, Governança e Valor de Negócio",
        required: true,
        icon: "📊",
        description: "Capacidade de avaliar viabilidade de IA (Se precisa mesmo de IA!), traduzir problemas de negócio nos 7 Padrões de IA, garantir qualidade/governança de dados e gerenciar o ciclo de vida contínuo do modelo em produção."
      }
    ],
    domains: [
      {
        id: "D1",
        number: "I",
        name: "Apoiar Iniciativas de IA Responsável e Confiável",
        englishName: "Support Responsible and Trustworthy AI Initiatives",
        weight: 15,
        percentage: "15%",
        approxQuestions: 18,
        color: "#8b5cf6",
        cpmaiPhasesRelated: "Transversal a todas as 6 Fases (Fase I à Fase VI)",
        summary: "Cobre ética em IA, mitigação de vieses (bias), transparência, explicabilidade (XAI), privacidade de dados (LGPD/GDPR), segurança, conformidade regulatória (EU AI Act, NIST AI RMF, ISO/IEC 42001) e governança contínua.",
        tasks: [
          "Tarefa 1.1: Estabelecer diretrizes de governança e ética em IA alinhadas aos valores organizacionais e regulamentações vigentes (EU AI Act, GDPR, LGPD).",
          "Tarefa 1.2: Identificar, avaliar e mitigar vieses (históricos, de representação, de medição, algorítmicos) nos dados e nos modelos ao longo de todo o ciclo CPMAI.",
          "Tarefa 1.3: Definir o nível adequado de Explicabilidade (XAI) e Interpretabilidade exigido pelo caso de uso e pelas partes interessadas (stakeholders e reguladores).",
          "Tarefa 1.4: Garantir privacidade, segurança, proteção de PII (Informações Pessoais Identificáveis) e proteção contra ataques adversariais ou Prompt Injection.",
          "Tarefa 1.5: Implementar supervisão humana (Human-in-the-Loop / Human-on-the-Loop) e mecanismos de responsabilização (Accountability) e auditoria."
        ],
        deliverables: [
          "Matriz de Riscos de IA e Avaliação de Impacto Algorítmico (baseada no NIST AI RMF: Govern, Map, Measure, Manage)",
          "Classificação de Risco Regulatório (Inaceitável, Alto Risco, Risco Limitado, Risco Mínimo segundo o EU AI Act)",
          "Política de Privacidade, Anonimização/Pseudonimização e Consentimento de Dados (PII/PHI)",
          "Requisitos de Explicabilidade (XAI - ex.: SHAP, LIME ou escolha de modelos intrinsecamente interpretáveis)",
          "Model Cards e Datasheets for Datasets documentando limitações, vieses conhecidos e uso pretendido"
        ],
        examScenarios: [
          {
            scenario: "Um banco desenvolveu uma rede neural profunda (Deep Learning) com 96% de acurácia para aprovação de crédito imobiliário, mas o órgão regulador exige que cada negativa de crédito seja explicada de forma auditável ao cliente.",
            decision: "O gestor CPMAI deve reconhecer o trade-off entre Precisão e Explicabilidade. Em setores altamente regulados, deve-se optar por modelos intrinsecamente interpretáveis (ex.: Árvores de Decisão/Regressão Logística) ou aplicar técnicas de XAI (SHAP/LIME) validadas pelo compliance antes de aprovar o Go/No-Go.",
            trap: "Seguir para produção apenas porque a acurácia técnica é alta (96%), ignorando o requisito legal de explicabilidade da Fase I."
          },
          {
            scenario: "Um modelo de triagem de currículos treinado com os últimos 10 anos de contratações da empresa começa a penalizar candidatas mulheres para vagas de liderança.",
            decision: "Identificar como Viés Histórico/Amostral presente nos dados de treinamento. A simples remoção da coluna 'gênero' não basta se houver variáveis proxy (ex.: clubes, escolas femininas, lacunas de maternidade). É preciso voltar à Fase II/III para auditar e rebalancear os dados e aplicar métricas de justiça (Fairness).",
            trap: "Achar que remover o atributo sensível ('gênero') elimina automaticamente o viés (conceito falho de 'fairness through unawareness')."
          }
        ],
        keyConcepts: ["NIST AI RMF 1.0", "EU AI Act", "ISO/IEC 42001", "Viés (Bias) & Variáveis Proxy", "Explicabilidade (XAI - SHAP/LIME)", "Human-in-the-Loop (HITL)", "Privacidade & PII", "Guardrails & Prompt Injection"]
      },
      {
        id: "D2",
        number: "II",
        name: "Identificar Necessidades e Soluções de Negócio",
        englishName: "Identify Business Needs and Solutions",
        weight: 26,
        percentage: "26%",
        approxQuestions: 31,
        color: "#0ea5e9",
        cpmaiPhasesRelated: "Fase I: Business Understanding (Entendimento do Negócio)",
        summary: "Empatado com Dados como o maior domínio da prova (26%). Avalia se o problema realmente precisa de IA, define o caso de negócio (ROI/TCO), mapeia o problema nos 7 Padrões de IA e estabelece os critérios de sucesso e Go/No-Go da Fase I.",
        tasks: [
          "Tarefa 2.1: Avaliar o problema de negócio e determinar se a Inteligência Artificial / Machine Learning é a abordagem apropriada (ou se automação tradicional baseada em regras / RPA resolve melhor).",
          "Tarefa 2.2: Mapear as necessidades de negócio para um ou mais dos 7 Padrões de IA (7 Patterns of AI) para estruturar o escopo correto.",
          "Tarefa 2.3: Construir o Caso de Negócio (Business Case), analisando ROI, Custo Total de Propriedade (TCO), custos contínuos de inferência/re-treinamento e alinhamento estratégico.",
          "Tarefa 2.4: Definir KPIs de Negócio claros e mensuráveis antes de definir métricas técnicas de modelo.",
          "Tarefa 2.5: Avaliar a prontidão organizacional, gestão de mudanças (Change Management), partes interessadas e conduzir o Gate Go/No-Go da Fase I."
        ],
        deliverables: [
          "Declaração do Problema de Negócio e Avaliação 'Precisamos mesmo de IA?' (AI Suitability Assessment)",
          "Mapeamento dos 7 Padrões de IA (identificando o padrão primário e padrões secundários em fases iterativas)",
          "Business Case de IA (ROI, TCO incluindo custos de nuvem/GPU, rotulagem de dados, manutenção de drift e MLOps)",
          "Definição de KPIs de Sucesso de Negócio (ex.: reduzir churn em 12%, reduzir falsos positivos de fraude em 20%)",
          "Decisão formal de Go/No-Go da Fase I"
        ],
        examScenarios: [
          {
            scenario: "O diretor financeiro pede um sistema de 'IA de última geração' para extrair campos fixos de notas fiscais padronizadas em PDF e lançar no ERP seguindo regras fiscais imutáveis.",
            decision: "Na Fase I (Business Understanding), o gestor CPMAI deve recomendar NÃO usar Machine Learning complexo, pois um fluxo determinístico baseado em regras ou RPA resolve o problema com menor custo, zero risco de alucinação e 100% de previsibilidade.",
            trap: "Iniciar a Fase II (Coleta de Dados) ou contratar cientistas de dados para criar uma rede neural sem antes questionar se a IA é necessária."
          },
          {
            scenario: "Uma varejista quer criar um sistema completo que reconheça clientes por câmera na loja, converse com eles por voz e faça ofertas personalizadas em tempo real.",
            decision: "Decompor a visão em múltiplos Padrões de IA (Reconhecimento + Conversação + Hiperpersonalização) e aplicar a abordagem iterativa CPMAI: começar com um escopo enxuto de alto valor e menor risco (ex.: Hiperpersonalização no app) antes de acoplar múltiplos padrões complexos.",
            trap: "Tentar construir todos os 3 padrões simultaneamente em um projeto monolítico ('Big Bang')."
          }
        ],
        keyConcepts: ["Fase I: Business Understanding", "7 Padrões de IA", "IA vs Regra/RPA", "ROI & TCO de IA", "KPIs de Negócio vs Métricas Técnicas", "Decomposição Iterativa (Bite-sized chunks)", "Go/No-Go Gate Fase I"]
      },
      {
        id: "D3",
        number: "III",
        name: "Identificar as Necessidades de Dados",
        englishName: "Identify Data Needs",
        weight: 26,
        percentage: "26%",
        approxQuestions: 31,
        color: "#10b981",
        cpmaiPhasesRelated: "Fase II: Data Understanding & Fase III: Data Preparation",
        summary: "Representa 26% do exame. Foca na filosofia Data-Centric AI: descoberta, acesso, qualidade, governança, limpeza, transformação, enriquecimento, rotulagem (labeling), engenharia de atributos (feature engineering) e prevenção de Data Leakage.",
        tasks: [
          "Tarefa 3.1: Identificar as fontes de dados necessárias (internas, externas, estruturadas, não estruturadas, em lote ou streaming) e validar permissões de acesso e direitos de uso (Fase II).",
          "Tarefa 3.2: Avaliar a qualidade dos dados (completude, acurácia, consistência, atualidade, representatividade e volume suficiente para o padrão de IA escolhido).",
          "Tarefa 3.3: Planejar e executar a limpeza, tratamento de valores ausentes (missing values), remoção de duplicatas e tratamento de outliers (Fase III).",
          "Tarefa 3.4: Gerenciar processos de anotação e rotulagem de dados (Data Labeling / Ground Truth), garantindo consistência entre anotadores (Inter-Annotator Agreement) e participação de especialistas de domínio (SMEs).",
          "Tarefa 3.5: Executar transformação de dados, Engenharia de Atributos (Feature Engineering), balanceamento de classes (oversampling/SMOTE, undersampling) e divisão correta em Treino, Validação e Teste sem Data Leakage."
        ],
        deliverables: [
          "Inventário e Mapa de Fontes de Dados (Data Inventory & Lineage)",
          "Relatório de Qualidade e Viabilidade dos Dados (Fase II Go/No-Go)",
          "Diretrizes de Rotulagem (Annotation Guidelines) e validação de Ground Truth com SMEs",
          "Dataset Limpo, Transformado e Versionado (Pronto para Modelagem na Fase IV)",
          "Particionamento seguro em conjuntos de Treinamento (Training), Validação (Validation) e Teste (Test/Holdout)"
        ],
        examScenarios: [
          {
            scenario: "Durante a Fase II (Data Understanding), a equipe descobre que os dados históricos de manutenção das turbinas existem apenas em relatórios em papel manuscritos ilegíveis e que metade dos sensores nunca foi instalada.",
            decision: "Acionar o Gate No-Go na Fase II e retornar à Fase I (Business Understanding) para redefinir o escopo do projeto ou iniciar primeiro uma iniciativa de instrumentação e coleta de dados antes de tentar treinar modelos.",
            trap: "Prosseguir para a Fase IV (Model Development) gerando dados sintéticos aleatórios sem base real."
          },
          {
            scenario: "O cientista de dados normalizou todo o dataset (calculando média e desvio padrão de 100% das linhas) ANTES de dividir os dados em conjuntos de treino e teste.",
            decision: "Intervir imediatamente: ocorreu Data Leakage (Vazamento de Dados). Estatísticas do conjunto de teste vazaram para o treinamento, o que inflará artificialmente as métricas na Fase IV/V e causará falha em produção. A normalização deve ser ajustada (fit) apenas no conjunto de treino.",
            trap: "Aceitar a alta acurácia no teste sem auditar como o pipeline de preparação de dados (Fase III) foi construído."
          }
        ],
        keyConcepts: ["Fase II: Data Understanding", "Fase III: Data Preparation", "Data-Centric AI", "Ground Truth & Inter-Annotator Agreement", "Feature Engineering", "Data Leakage (Vazamento de Dados)", "Classes Desbalanceadas (SMOTE)", "Split Treino / Validação / Teste"]
      },
      {
        id: "D4",
        number: "IV",
        name: "Gerenciar o Desenvolvimento e Avaliação de Modelos de IA",
        englishName: "Manage AI Model Development and Evaluation",
        weight: 16,
        percentage: "16%",
        approxQuestions: 19,
        color: "#f59e0b",
        cpmaiPhasesRelated: "Fase IV: Model Development & Fase V: Model Evaluation",
        summary: "Foca na seleção da abordagem algorítmica (Supervisionado, Não Supervisionado, Reforço, Deep Learning, GenAI/RAG/Fine-Tuning), prevenção de Overfitting/Underfitting e avaliação técnica e de negócio (Matriz de Confusão, Precision, Recall, F1, ROC-AUC).",
        tasks: [
          "Tarefa 4.1: Selecionar a abordagem de modelagem adequada (aprendizado supervisionado, não supervisionado, por reforço, transfer learning, RAG ou Fine-Tuning de modelos fundacionais) considerando restrições de negócio, custo, latência e explicabilidade.",
          "Tarefa 4.2: Supervisionar a experimentação iterativa de modelos, ajuste de hiperparâmetros e validação cruzada (k-fold cross-validation), prevenindo Overfitting e Underfitting.",
          "Tarefa 4.3: Selecionar e interpretar as métricas técnicas corretas (Precision, Recall, F1-Score, ROC-AUC, RMSE, MAE) de acordo com o custo de Falsos Positivos e Falsos Negativos para o negócio.",
          "Tarefa 4.4: Conduzir a Avaliação do Modelo (Fase V) confrontando o desempenho técnico com os KPIs de negócio definidos na Fase I, além de realizar testes de estresse, justiça (fairness) e segurança (Red Teaming para GenAI).",
          "Tarefa 4.5: Decidir no Gate Go/No-Go da Fase V se o modelo está pronto para operacionalização (Fase VI) ou se deve retornar a fases anteriores."
        ],
        deliverables: [
          "Modelos Candidatos Treinados e Comparados contra um Modelo Baseline (linha de base simples)",
          "Registro de Experimentos, Hiperparâmetros e Linhagem de Dados/Modelos",
          "Relatório de Avaliação Técnica e de Negócio (Matriz de Confusão, curvas ROC/PR, análise de erros por subgrupo)",
          "Relatório de Red Teaming / Testes de Robustez e Alucinação (para soluções de IA Generativa)",
          "Aprovação formal no Gate Go/No-Go da Fase V"
        ],
        examScenarios: [
          {
            scenario: "Em um sistema de detecção de fraude onde apenas 0,5% das transações são fraudulentas, a equipe comemora um modelo com 99,5% de Acurácia (Accuracy).",
            decision: "Rejeitar a métrica de Acurácia isolada (Paradoxo da Acurácia). Um modelo inútil que classifica 100% das transações como 'legítimas' terá 99,5% de acurácia e 0% de detecção de fraude. O gestor deve exigir análise da Matriz de Confusão, Recall, Precision e F1-Score.",
            trap: "Aprovar o modelo na Fase V baseando-se apenas na alta acurácia global em um dataset desbalanceado."
          },
          {
            scenario: "A empresa quer um assistente baseado em LLM que responda dúvidas de funcionários usando políticas internas de RH que mudam toda semana, exigindo citação exata do parágrafo da política e baixo orçamento.",
            decision: "Escolher RAG (Retrieval-Augmented Generation) em vez de Fine-Tuning. O RAG busca os documentos atualizados em banco vetorial no momento da pergunta, reduz alucinações, permite citar a fonte e evita re-treinar o modelo a cada mudança de documento.",
            trap: "Gastar alto orçamento fazendo Fine-Tuning semanal do LLM para tentar 'memorizar' fatos dinâmicos."
          }
        ],
        keyConcepts: ["Fase IV: Model Development", "Fase V: Model Evaluation", "Baseline Model", "Overfitting vs Underfitting", "Matriz de Confusão (Precision, Recall, F1)", "Paradoxo da Acurácia", "RAG vs Fine-Tuning vs Prompt Engineering", "Validação Cruzada (Cross-Validation)"]
      },
      {
        id: "D5",
        number: "V",
        name: "Operacionalizar a Solução de IA",
        englishName: "Operationalize the AI Solution",
        weight: 17,
        percentage: "17%",
        approxQuestions: 21,
        color: "#ec4899",
        cpmaiPhasesRelated: "Fase VI: Model Operationalization",
        summary: "Cobre a implantação segura em produção (Shadow, Canary, Blue-Green, A/B Testing), integração com fluxos de trabalho reais, adoção pelos usuários, MLOps, monitoramento contínuo de Data Drift / Concept Drift e governança do ciclo de vida (re-treinamento ou aposentadoria).",
        tasks: [
          "Tarefa 5.1: Definir a estratégia de implantação (Batch vs Real-time/Streaming, Cloud vs Edge) e o padrão de rollout seguro (Shadow, Canary, Blue-Green, A/B Testing).",
          "Tarefa 5.2: Implementar práticas de MLOps (versionamento de dados, código e modelos, pipelines CI/CD/CT, Model Registry e plano de rollback imediato).",
          "Tarefa 5.3: Monitorar continuamente o modelo em produção quanto a degradação de desempenho (Model Decay), Data Drift, Concept Drift, latência, custos de inferência e vieses emergentes.",
          "Tarefa 5.4: Liderar a gestão de mudanças organizacionais (Change Management), treinamento dos usuários finais e integração da IA nos processos de trabalho humanos.",
          "Tarefa 5.5: Gerenciar o ciclo de vida contínuo pós-produção: acionar novas iterações CPMAI para re-treinamento, atualização de dados ou desativação segura (Model Retirement/Decommissioning)."
        ],
        deliverables: [
          "Plano de Implantação em Produção e Estratégia de Rollback / Contingência",
          "Pipeline de MLOps e Monitoramento de Produção (alertas de Data Drift, Concept Drift e KPIs de negócio)",
          "Plano de Gestão de Mudanças, Treinamento de Usuários e Operação Human-in-the-Loop",
          "Critérios de Re-treinamento Contínuo (Continuous Training) e Plano de Descomissionamento do Modelo",
          "Medição de Valor Realizado em Produção (comparando resultados reais com o Business Case da Fase I)"
        ],
        examScenarios: [
          {
            scenario: "Um hospital vai implantar um novo modelo de IA para priorização de pacientes na emergência e precisa validar seu comportamento com dados reais em tempo real sem colocar nenhum paciente em risco.",
            decision: "Utilizar Shadow Deployment (Implantação em Modo Sombra): o modelo recebe os dados reais em paralelo ao protocolo médico atual, registra suas previsões para auditoria da equipe, mas não interfere nas decisões clínicas reais até ser comprovado.",
            trap: "Fazer um rollout total imediato ou um Teste A/B direto em um cenário de risco de vida sem validação prévia em modo sombra."
          },
          {
            scenario: "Seis meses após o lançamento, o modelo de previsão de demanda de uma rede de supermercados perde precisão drasticamente devido a uma nova lei econômica que alterou os hábitos de compra das famílias.",
            decision: "Diagnosticar como Concept Drift (a relação entre as variáveis de entrada e o comportamento de compra mudou). Como a dinâmica de negócio e os padrões de dados mudaram estruturalmente, o gestor deve iniciar uma nova iteração do ciclo CPMAI revisando as Fases I, II e III antes de re-treinar.",
            trap: "Achar que um modelo de IA é igual a um software tradicional que, uma vez entregue na Fase VI, nunca mais precisa ser atualizado."
          }
        ],
        keyConcepts: ["Fase VI: Model Operationalization", "Shadow, Canary, Blue-Green & A/B Testing", "MLOps (CI/CD/CT)", "Data Drift vs Concept Drift", "Model Decay (Degradação)", "Change Management & Adoção", "Edge AI vs Cloud Inference", "Model Retirement (Descomissionamento)"]
      }
    ]
  },

  /* ==========================================================================
   * 3. MATERIAL DE REFERÊNCIA ("EXISTE UM PMBOK PARA IA?", CPMAI, 7 PADRÕES, GUIA TÉCNICO)
   * ========================================================================== */
  referenceMaterial: {
    pmbokAnswer: {
      question: "Existe um 'PMBOK®' para a certificação de IA do PMI (PMI-CPMAI™)?",
      shortAnswer: "Sim! Enquanto a certificação PMP® se baseia no PMBOK® Guide, a certificação PMI-CPMAI™ tem como sua 'Bíblia / PMBOK da IA' a Metodologia CPMAI™ v7 (Cognitive Project Management for AI) Workbook & Guia Oficial do PMI, criada originalmente pela Cognilytica e adquirida pelo PMI. Ela é combinada na prova com o PMI-CPMAI Exam Content Outline (ECO), sua base histórica CRISP-DM e os principais frameworks internacionais de governança de IA (NIST AI RMF 1.0, EU AI Act, ISO/IEC 42001) e princípios do PMBOK® Guide 7ª Edição.",
      whyTraditionalPmbokIsNotEnough: "Projetos de software tradicional são determinísticos (você escreve regras em código: Entrada + Regras = Saída previsível). Já projetos de IA são probabilísticos e orientados a dados (Entrada + Saída Histórica = Modelo treinado que descobre padrões). Por isso, gerenciar IA apenas com Waterfall ou Scrum tradicional falha: você não sabe de antemão se os dados têm qualidade ou sinal estatístico suficiente até explorá-los nas Fases II e III.",
      corePillars: [
        {
          id: "pillar-cpmai",
          title: "1. Metodologia CPMAI™ v7 Workbook (O 'PMBOK da IA')",
          badge: "Referência Central (Peso Máximo)",
          description: "É a metodologia padrão-ouro do PMI para gestão de projetos de IA e Machine Learning. Estruturada em 6 fases iterativas centradas em dados e nos 7 Padrões de IA, com portões de decisão (Go/No-Go Gates) em cada fase.",
          examFocus: "Cobra a ordem lógica das 6 fases, os entregáveis de cada fase, o mapeamento dos 7 Padrões de IA e, principalmente, para qual fase retornar quando algo dá errado."
        },
        {
          id: "pillar-eco",
          title: "2. PMI-CPMAI™ Exam Content Outline (ECO)",
          badge: "Estrutura Oficial da Prova",
          description: "Documento oficial do PMI que divide as 120 questões nos 5 Domínios: IA Responsável (15%), Negócios (26%), Dados (26%), Desenvolvimento/Avaliação (16%) e Operacionalização (17%).",
          examFocus: "Define todas as tarefas gerenciais cobradas nas questões situacionais."
        },
        {
          id: "pillar-crispdm",
          title: "3. CRISP-DM (Cross-Industry Standard Process for Data Mining)",
          badge: "Fundação Metodológica",
          description: "Criado em 1996/1999 para mineração de dados, o CRISP-DM deu origem à estrutura de 6 fases que a CPMAI modernizou e expandiu especificamente para Inteligência Artificial, Governança Ética, MLOps e IA Generativa.",
          examFocus: "A prova cobra por que o CRISP-DM puro era insuficiente para IA moderna (faltavam os 7 Padrões de IA, governança/ética transversal e operacionalização contínua com MLOps/Drift) e como a CPMAI preenche essas lacunas."
        },
        {
          id: "pillar-nist",
          title: "4. NIST AI Risk Management Framework (AI RMF 1.0)",
          badge: "Governança & Risco (Domínio I)",
          description: "Framework do Instituto Nacional de Padrões e Tecnologia dos EUA estruturado em 4 funções principais: GOVERN (Governar - cultura e políticas transversalmente), MAP (Mapear - contexto e riscos), MEASURE (Medir - métricas de risco, viés e robustez) e MANAGE (Gerenciar - resposta e mitigação contínua).",
          examFocus: "Questões sobre gestão de riscos de IA, confiabilidade e as 4 funções (Govern, Map, Measure, Manage)."
        },
        {
          id: "pillar-eu-iso",
          title: "5. EU AI Act, ISO/IEC 42001 & Leis de Privacidade (GDPR/LGPD)",
          badge: "Regulação & Ética (Domínio I)",
          description: "O EU AI Act classifica sistemas de IA por níveis de risco (Risco Inaceitável/Proibido, Alto Risco, Risco Limitado/Transparência e Risco Mínimo). A ISO/IEC 42001 define o Sistema de Gestão de IA (AIMS).",
          examFocus: "Identificar práticas proibidas (ex.: pontuação social governamental, manipulação subliminar), obrigações de sistemas de Alto Risco (saúde, crédito, recrutamento, infraestrutura crítica) e proteção de PII."
        },
        {
          id: "pillar-pmbok7",
          title: "6. PMBOK® Guide (7ª Edição) & Agile Practice Guide",
          badge: "Gestão de Projetos & Stakeholders",
          description: "Princípios de entrega de valor (Value Delivery), engajamento de partes interessadas, liderança servidora, ciclos iterativos/incrementais (sprints de experimentação) e gestão de mudanças organizacionais.",
          examFocus: "Alinhamento estratégico, comunicação com executivos não-técnicos e adoção da solução pelos usuários finais."
        }
      ],
      comparisonTable: {
        headers: ["Dimensão", "Software Tradicional (SDLC / Agile Puro)", "Projetos de IA (Metodologia CPMAI™ v7)"],
        rows: [
          ["Lógica Central", "Determinística: o desenvolvedor programa as regras explícitas (Código = Lógica).", "Probabilística e Orientada a Dados (Data-Centric): o algoritmo aprende padrões a partir dos dados."],
          ["Causa Raiz de Falhas", "Bugs no código, requisitos mal levantados ou arquitetura de servidor.", "Dados inexistentes, sujos, enviesados, vazamento de dados (Data Leakage) ou problema que não precisava de IA."],
          ["Previsibilidade de Escopo", "Alta: se a regra de negócio é conhecida, é possível codificar a funcionalidade.", "Incerta até as Fases II e III: só sabemos se o modelo é viável após inspecionar e preparar os dados reais."],
          ["Testes e Validação", "Testes unitários e de integração (Passou / Falhou binário).", "Avaliação estatística (Matriz de Confusão, Precision, Recall, F1, ROC-AUC, testes de viés e alucinação)."],
          ["Pós-Lançamento (Produção)", "O código não se degrada sozinho se ninguém alterá-lo.", "Modelos sofrem degradação natural (Model Decay) por Data Drift e Concept Drift, exigindo monitoramento e re-treinamento contínuo."]
        ]
      }
    },

    /* ----------------------------------------------------------------------
     * AS 6 FASES DA METODOLOGIA CPMAI™ v7
     * ---------------------------------------------------------------------- */
    cpmaiPhases: [
      {
        phaseNumber: 1,
        roman: "I",
        name: "Entendimento do Negócio",
        englishName: "Business Understanding",
        ecoDomainMapping: "Domínio II (26%) & Domínio I (15%)",
        tagline: "Qual problema estamos resolvendo e realmente precisamos de IA?",
        objective: "Definir claramente o problema de negócio, validar se a IA é a solução adequada (ou se regras/RPA bastam), mapear o caso nos 7 Padrões de IA, construir o Business Case (ROI/TCO), estabelecer KPIs de negócio e avaliar riscos éticos/regulatórios iniciais.",
        keyQuestions: [
          "Qual é o objetivo de negócio mensurável e como o sucesso será medido em termos financeiros/operacionais?",
          "Este problema realmente exige IA/Machine Learning ou pode ser resolvido com software determinístico/automação simples?",
          "Qual(is) dos 7 Padrões de IA descreve(m) este caso de uso?",
          "Quais são os requisitos éticos, legais, de privacidade (PII) e de explicabilidade (XAI) exigidos?",
          "A organização tem prontidão cultural, orçamento (incluindo TCO de manutenção) e patrocínio executivo?"
        ],
        activities: [
          "Realizar workshops de descoberta com patrocinadores, usuários finais e especialistas de domínio (SMEs).",
          "Executar a triagem de adequação de IA (AI Suitability) e decompor visões complexas em fases iterativas menores (bite-sized chunks).",
          "Mapear os requisitos nos 7 Padrões de IA.",
          "Elaborar análise de ROI e Custo Total de Propriedade (TCO: dados, nuvem, inferência, MLOps, equipe).",
          "Mapear riscos éticos iniciais (NIST AI RMF: Govern & Map) e classificação regulatória (EU AI Act)."
        ],
        deliverables: [
          "Declaração do Problema e KPIs de Sucesso do Negócio",
          "Mapeamento dos 7 Padrões de IA",
          "Business Case aprovado (ROI / TCO)",
          "Avaliação Preliminar de Riscos Éticos, Privacidade e Explicabilidade",
          "Decisão do Gate Go/No-Go da Fase I"
        ],
        goNoGoCriteria: [
          "GO: Problema claro, IA é necessária, caso de negócio positivo, patrocinador comprometido e riscos éticos gerenciáveis.",
          "NO-GO (Parar ou Redirecionar): Problema pode ser resolvido com regras simples/RPA, ROI negativo, uso de IA classificado como risco inaceitável/ilegal ou ausência de patrocínio."
        ],
        whenToIterateBack: "A Fase I é o ponto de retorno sempre que as fases seguintes revelarem que os dados necessários não existem e não podem ser obtidos (vindo da Fase II), ou quando o melhor modelo possível não atinge o KPI mínimo de negócio (vindo da Fase V), exigindo redefinir o escopo ou o objetivo do projeto.",
        commonPitfalls: [
          "Começar comprando ferramentas ou treinando modelos antes de definir o problema de negócio ('Solução procurando um problema').",
          "Definir apenas métricas técnicas (ex.: 'queremos 90% de F1-Score') sem conectá-las a um KPI de negócio (ex.: 'reduzir perdas com fraude em R$ 2 milhões/ano')."
        ]
      },
      {
        phaseNumber: 2,
        roman: "II",
        name: "Entendimento dos Dados",
        englishName: "Data Understanding",
        ecoDomainMapping: "Domínio III (26%) & Domínio I (15%)",
        tagline: "Temos acesso aos dados certos, em volume e qualidade suficientes?",
        objective: "Identificar onde estão os dados necessários para o padrão de IA escolhido na Fase I, obter acesso legal e técnico a essas fontes, explorar os dados (EDA) e auditar sua qualidade, representatividade, vieses e restrições de privacidade.",
        keyQuestions: [
          "Quais dados são necessários para resolver o problema definido na Fase I e onde eles residem?",
          "Temos permissão legal, contratual e de privacidade (LGPD/GDPR) para usar esses dados no treinamento de IA?",
          "Os dados possuem qualidade, histórico e volume suficientes? Eles contêm rótulos confiáveis (Ground Truth)?",
          "Existem vieses históricos ou sub-representação de grupos demográficos/cenários críticos na amostra?"
        ],
        activities: [
          "Mapear fontes de dados internas (ERP, CRM, Data Warehouse, logs) e externas (APIs, dados públicos, fornecedores).",
          "Realizar Análise Exploratória de Dados (EDA) com estatísticas descritivas e visualizações.",
          "Auditar os 6 pilares de qualidade de dados: Completude, Consistência, Acurácia, Atualidade, Validade e Unicidade.",
          "Verificar a presença de PII (Informações Pessoais Identificáveis) e restrições de soberania/residência de dados.",
          "Avaliar se existem rótulos (labels) para aprendizado supervisionado ou se será necessário criar um projeto de rotulagem."
        ],
        deliverables: [
          "Inventário de Fontes de Dados e Dicionário de Dados",
          "Relatório de Análise Exploratória (EDA) e Qualidade dos Dados",
          "Auditoria de Viés de Dados e Conformidade de Privacidade (PII)",
          "Decisão do Gate Go/No-Go da Fase II"
        ],
        goNoGoCriteria: [
          "GO: Dados acessíveis, legalmente liberados, representativos do problema real e com potencial estatístico suficiente para seguir à preparação.",
          "NO-GO: Dados inacessíveis, proibidos por lei/contrato, completamente corrompidos ou inexistentes."
        ],
        whenToIterateBack: "Se na Fase II for constatado que os dados necessários NÃO existem ou não podem ser usados legalmente, você DEVE voltar à Fase I (Business Understanding) para ajustar o escopo do problema ou iniciar uma etapa prévia de coleta/aquisição de dados.",
        commonPitfalls: [
          "Assumir que 'porque temos um Data Lake gigante, temos os dados certos para este modelo'.",
          "Ignorar que os dados de treinamento refletem apenas um período atípico ou excluem um segmento inteiro de clientes."
        ]
      },
      {
        phaseNumber: 3,
        roman: "III",
        name: "Preparação dos Dados",
        englishName: "Data Preparation",
        ecoDomainMapping: "Domínio III (26%)",
        tagline: "Transformando dados brutos em combustível limpo, rotulado e sem vazamentos (Data-Centric AI).",
        objective: "Limpar, transformar, integrar, anonimizar, rotular (labeling), criar novos atributos preditivos (Feature Engineering), balancear classes e particionar os dados em Treino, Validação e Teste sem permitir Data Leakage.",
        keyQuestions: [
          "Como trataremos valores ausentes (missing values), duplicatas, ruídos e outliers sem distorcer a realidade?",
          "Quem fará a rotulagem dos dados (SMEs humanos, crowdsourcing, rotulagem programática) e como garantiremos a concordância entre anotadores?",
          "Quais novas variáveis (features) podem ser criadas com o conhecimento dos especialistas de negócio para facilitar o aprendizado do modelo?",
          "A divisão entre Treino, Validação e Teste foi feita ANTES de qualquer normalização ou agregação para evitar Data Leakage?"
        ],
        activities: [
          "Limpeza de dados (Data Cleansing): imputação ou remoção fundamentada de nulos, padronização de formatos e deduplicação.",
          "Anonimização, mascaramento ou pseudonimização de PII antes de disponibilizar o dataset para modelagem.",
          "Rotulagem de dados (Data Labeling) e validação de Ground Truth com medição de Inter-Annotator Agreement (ex.: Kappa de Cohen).",
          "Engenharia de Atributos (Feature Engineering) e Seleção de Atributos (Feature Selection) em parceria com SMEs.",
          "Balanceamento de classes desbalanceadas (ex.: SMOTE/Oversampling apenas no conjunto de treino, ou ajuste de pesos).",
          "Divisão estrita em conjuntos de Treinamento (Training), Validação (Validation) e Teste (Test/Holdout)."
        ],
        deliverables: [
          "Pipeline Reprodutível de Limpeza e Transformação de Dados",
          "Dataset Rotulado e Auditado (Ground Truth validado)",
          "Catálogo de Features (Feature Store) documentado",
          "Conjuntos de Treino, Validação e Teste devidamente isolados (Zero Data Leakage)",
          "Decisão do Gate Go/No-Go da Fase III"
        ],
        goNoGoCriteria: [
          "GO: Dados limpos, anonimizados, rotulados com alta confiabilidade, formatados para os algoritmos e livres de vazamento de dados.",
          "NO-GO: Descoberta de falhas graves nas fontes originais ou concordância muito baixa nos rótulos."
        ],
        whenToIterateBack: "Se durante a limpeza ou junção de tabelas na Fase III a equipe perceber que faltam chaves de ligação ou que uma fonte de dados complementar é indispensável, retorna-se à Fase II (Data Understanding) para buscar novas fontes. Nota de Prova: A Fase II e a Fase III costumam consumir de 70% a 80% do tempo total de um projeto de IA!",
        commonPitfalls: [
          "Cometer Data Leakage aplicando normalização (MinMax/StandardScaler) ou SMOTE no dataset inteiro antes de separar o conjunto de Teste.",
          "Incluir variáveis anacrônicas (Target Leakage), ou seja, dados que só existem no banco de dados DEPOIS que o evento que queremos prever já aconteceu."
        ]
      },
      {
        phaseNumber: 4,
        roman: "IV",
        name: "Desenvolvimento do Modelo",
        englishName: "Model Development",
        ecoDomainMapping: "Domínio IV (16%)",
        tagline: "Selecionando algoritmos, treinando modelos candidatos e ajustando hiperparâmetros.",
        objective: "Selecionar as técnicas de modelagem adequadas ao Padrão de IA e às restrições de negócio, criar um modelo Baseline simples para comparação, treinar modelos candidatos, ajustar hiperparâmetros e combater Overfitting e Underfitting.",
        keyQuestions: [
          "Qual é o modelo Baseline mais simples (ex.: heurística ou regressão linear/árvore simples) que nossos modelos complexos precisam superar?",
          "A abordagem deve ser Supervisionada, Não Supervisionada, por Reforço, Deep Learning ou IA Generativa (Prompting / RAG / Fine-Tuning)?",
          "O modelo está sofrendo de Overfitting (decorando o treino) ou Underfitting (incapaz de aprender)?",
          "Na abordagem Data-Centric AI, melhorar a qualidade dos dados/rótulos traz mais ganho do que trocar de algoritmo?"
        ],
        activities: [
          "Construir um Modelo Baseline para servir de referência mínima de desempenho e custo.",
          "Treinar múltiplos algoritmos candidatos utilizando o conjunto de Treinamento.",
          "Utilizar Validação Cruzada (k-fold Cross-Validation) e o conjunto de Validação para ajuste de hiperparâmetros (Hyperparameter Tuning).",
          "Aplicar técnicas de regularização (L1/Lasso, L2/Ridge, Dropout, Early Stopping) caso haja sinais de Overfitting.",
          "Para projetos de IA Generativa: configurar engenharia de prompts, pipelines de RAG (chunking, embeddings, busca vetorial) ou Fine-Tuning quando justificável.",
          "Registrar todos os experimentos (versão do dado, código, hiperparâmetros e métricas) para reprodutibilidade."
        ],
        deliverables: [
          "Modelo Baseline documentado",
          "Modelos Candidatos Treinados e Versionados",
          "Relatório Comparativo de Experimentos e Hiperparâmetros",
          "Documentação de Explicabilidade Técnica (importância de variáveis / SHAP)",
          "Decisão do Gate Go/No-Go da Fase IV"
        ],
        goNoGoCriteria: [
          "GO: Pelo menos um modelo candidato supera significativamente o Baseline com bom equilíbrio entre viés e variância.",
          "NO-GO: Nenhum algoritmo consegue aprender padrões úteis ou todos apresentam Overfitting severo devido a limitações nos dados."
        ],
        whenToIterateBack: "Se nenhum modelo candidato atingir desempenho aceitável ou se for detectado que atributos/rótulos estão com ruído ou vazamento, NÃO insista infinitamente em ajustar hiperparâmetros: retorne à Fase III (Data Preparation) para melhorar as features/rótulos ou à Fase II para obter mais dados (Abordagem Data-Centric AI).",
        commonPitfalls: [
          "Usar o conjunto de Teste (Holdout) repetidas vezes para escolher hiperparâmetros — isso contamina o teste! Para ajuste de hiperparâmetros, usa-se o conjunto de Validação (ou Cross-Validation).",
          "Escolher uma rede neural complexa e cara quando um algoritmo mais simples (ex.: Random Forest ou XGBoost) entrega a mesma performance com menor custo e maior explicabilidade."
        ]
      },
      {
        phaseNumber: 5,
        roman: "V",
        name: "Avaliação do Modelo",
        englishName: "Model Evaluation",
        ecoDomainMapping: "Domínio IV (16%) & Domínio I (15%)",
        tagline: "O modelo técnico resolve o problema de negócio de forma justa, segura e confiável?",
        objective: "Avaliar rigorosamente o modelo vencedor no conjunto de Teste inédito (Holdout), confrontar as métricas técnicas com os KPIs de negócio da Fase I, auditar justiça/viés por subgrupos, testar robustez/segurança e decidir se o modelo pode ir para produção.",
        keyQuestions: [
          "Como o modelo se comporta no conjunto de Teste (Holdout) nunca visto antes?",
          "A métrica escolhida (Precision vs Recall vs F1 vs ROC-AUC) reflete o custo real de negócio dos Falsos Positivos e Falsos Negativos?",
          "O modelo atinge os KPIs de negócio, latência, custo de inferência e explicabilidade definidos na Fase I?",
          "O modelo apresenta desempenho justo (Fairness) entre diferentes grupos demográficos ou sofre de viés e alucinações?"
        ],
        activities: [
          "Executar a avaliação final no conjunto de Teste isolado (Holdout dataset).",
          "Analisar a Matriz de Confusão e ajustar o limiar de decisão (Decision Threshold) conforme o custo de FP vs FN junto aos stakeholders de negócio.",
          "Realizar auditoria de Fairness/Viés desagregada por subgrupos protegidos e testes de explicabilidade (XAI).",
          "Para IA Generativa: conduzir Red Teaming, testes de alucinação, fidelidade à fonte (groundedness), toxicidade e resistência a Prompt Injection.",
          "Preencher o Model Card oficial documentando métricas, uso pretendido e limitações conhecidas."
        ],
        deliverables: [
          "Relatório de Avaliação Técnica e Alinhamento aos KPIs de Negócio",
          "Auditoria de Viés, Fairness, Segurança e Explicabilidade aprovada",
          "Model Card completo para governança",
          "Decisão Formal no Gate Go/No-Go da Fase V (Autorização para Produção)"
        ],
        goNoGoCriteria: [
          "GO: Modelo atende aos critérios técnicos, KPIs de negócio da Fase I, limites de risco ético/regulatório e SLAs operacionais.",
          "NO-GO: Modelo falha nos KPIs de negócio, apresenta viés discriminatório inaceitável, vulnerabilidade de segurança ou custo operacional inviável."
        ],
        whenToIterateBack: "A Fase V é o grande portão de qualidade antes da produção: (1) Se precisar apenas ajustar algoritmos/limiares, volte à Fase IV; (2) Se o erro vier de features ruins, classes mal balanceadas ou rótulos inconsistentes, volte à Fase III; (3) Se faltarem dados representativos, volte à Fase II; (4) Se as condições de negócio mudaram ou a meta da Fase I era irrealista, volte à Fase I!",
        commonPitfalls: [
          "Avaliar apenas métricas matemáticas (ex.: ROC-AUC ou RMSE) sem validar o impacto financeiro e operacional junto ao dono do negócio.",
          "Olhar apenas para a média global do modelo e ignorar que ele falha gravemente em um segmento específico de clientes (viés oculto)."
        ]
      },
      {
        phaseNumber: 6,
        roman: "VI",
        name: "Operacionalização do Modelo",
        englishName: "Model Operationalization",
        ecoDomainMapping: "Domínio V (17%)",
        tagline: "Implantação segura, adoção humana, MLOps e monitoramento contínuo de Drift.",
        objective: "Implantar o modelo no ambiente de produção real, integrá-lo aos sistemas e fluxos de trabalho humanos, capacitar os usuários, monitorar continuamente Data Drift, Concept Drift e KPIs de negócio, e gerenciar o ciclo de re-treinamento ou descomissionamento.",
        keyQuestions: [
          "Qual estratégia de deploy minimiza o risco para o negócio: Shadow Mode, Canary, Blue-Green ou A/B Testing?",
          "Os usuários finais confiam na ferramenta e sabem como agir sobre as recomendações do modelo (Human-in-the-Loop)?",
          "Como detectaremos rapidamente Data Drift, Concept Drift ou degradação do modelo (Model Decay) em produção?",
          "Qual é o gatilho automático ou periódico para re-treinar o modelo (nova iteração CPMAI) ou aposentá-lo?"
        ],
        activities: [
          "Executar o deploy gradual e seguro (Shadow Deployment, Canary Release, Blue-Green ou A/B Testing) com plano de rollback imediato.",
          "Operacionalizar pipelines de MLOps (CI/CD/CT, registro de modelos, monitoramento de telemetria, latência e custos de nuvem/tokens).",
          "Executar o plano de Gestão de Mudanças (Change Management) e treinamento das equipes operacionais.",
          "Monitorar indicadores de Data Drift (mudança na distribuição das entradas) e Concept Drift (mudança na relação entrada-saída).",
          "Coletar feedback real de produção (novos rótulos/correções humanas) para alimentar a próxima iteração do ciclo CPMAI."
        ],
        deliverables: [
          "Solução de IA em Produção integrada aos processos de negócio",
          "Painel de Monitoramento MLOps (Performance, Drift, Custos, Guardrails e KPIs de Negócio)",
          "Equipes treinadas e processos Human-in-the-Loop operacionais",
          "Gatilhos de Re-treinamento (Nova Iteração CPMAI) ou Plano de Descomissionamento (Model Retirement)"
        ],
        goNoGoCriteria: [
          "MANTER EM PRODUÇÃO: Modelo estável, entregando o ROI esperado e dentro dos limites éticos e técnicos.",
          "ACIONAR NOVA ITERAÇÃO / ROLLBACK: Detecção de Data/Concept Drift severo, queda de KPI de negócio ou incidente ético/segurança."
        ],
        whenToIterateBack: "Na metodologia CPMAI, a Fase VI NUNCA é o fim estático do projeto! O mundo real muda: quando o monitoramento detecta Data Drift ou Concept Drift, ou quando surgem novas necessidades de negócio, a Fase VI dispara uma nova iteração voltando à Fase I (novos objetivos), Fase II/III (novos dados de produção) ou Fase IV (re-treinamento).",
        commonPitfalls: [
          "Mentalidade 'Deploy and Forget' (implantar e esquecer): tratar modelos de IA como software tradicional estático sem monitorar a degradação (Model Decay).",
          "Entregar um modelo tecnicamente perfeito que a equipe de ponta boicota ou ignora por falta de Change Management e treinamento."
        ]
      }
    ],

    /* ----------------------------------------------------------------------
     * OS 7 PADRÕES DE IA (7 PATTERNS OF AI - COGNILYTICA / PMI-CPMAI)
     * ---------------------------------------------------------------------- */
    sevenPatterns: [
      {
        id: "pattern-1",
        number: 1,
        name: "Hiperpersonalização",
        englishName: "Hyperpersonalization",
        icon: "🎯",
        color: "#6366f1",
        definition: "Utiliza Machine Learning para criar um perfil individualizado e dinâmico de cada pessoa (cliente, paciente, aluno ou colaborador) e adaptar ofertas, conteúdos, preços, tratamentos ou recomendações especificamente para aquele indivíduo único (Segmento de Um).",
        coreMechanism: "Aprende continuamente com o histórico de comportamento, contexto atual e preferências individuais em vez de agrupar pessoas apenas em faixas demográficas amplas.",
        classicUseCases: [
          "Sistemas de recomendação hiperpersonalizados (Netflix, Spotify, Amazon).",
          "Medicina de precisão e planos terapêuticos personalizados com base no histórico clínico e genômico do paciente.",
          "Trilhas de aprendizagem adaptativas que ajustam a dificuldade e o formato do conteúdo para cada estudante.",
          "Ofertas financeiras e limites de crédito ajustados dinamicamente ao momento de vida de cada cliente."
        ],
        typicalAlgorithms: [
          "Filtragem Colaborativa (Collaborative Filtering) e Sistemas de Recomendação Baseados em Conteúdo",
          "Deep Learning Recommendation Models (DLRM) e Contextual Bandits",
          "Clustering dinâmico combinado com Classificação/Ranking"
        ],
        typicalMetrics: [
          "Taxa de Conversão (Conversion Rate), CTR (Click-Through Rate) e Engajamento",
          "Precision@K, Recall@K, NDCG (Normalized Discounted Cumulative Gain)",
          "Lifetime Value (LTV) e redução de Churn"
        ],
        examTraps: "Não confunda segmentação de marketing tradicional ('mulheres de 25 a 35 anos em São Paulo') com Hiperpersonalização. Na Hiperpersonalização, o sistema trata cada indivíduo como um segmento único ('Segment of One'). Além disso, atenção redobrada à privacidade (LGPD/GDPR), consentimento de uso de dados pessoais e criação de 'bolhas de filtro'.",
        combinationPatterns: "Frequentemente combinado com o Padrão 4 (Conversação) para criar assistentes virtuais que oferecem recomendações personalizadas durante o chat, e com o Padrão 3 (Análise Preditiva) para prever a propensão de compra."
      },
      {
        id: "pattern-2",
        number: 2,
        name: "Sistemas Autônomos",
        englishName: "Autonomous Systems",
        icon: "🤖",
        color: "#0ea5e9",
        definition: "Sistemas físicos (hardware/robótica) ou processos de software que percebem o ambiente, tomam decisões e executam ações de ponta a ponta com intervenção humana mínima ou nula para atingir um objetivo operacional.",
        coreMechanism: "Ciclo contínuo de Percepção → Planejamento/Decisão → Ação no mundo físico ou digital, operando com alto grau de autonomia.",
        classicUseCases: [
          "Veículos autônomos, drones de inspeção e robôs móveis autônomos (AMRs) em armazéns logísticos.",
          "Sistemas autônomos de controle industrial (ajuste automático de turbinas, resfriamento de data centers).",
          "Agentes autônomos de software (Agentic AI) que executam fluxos transacionais complexos sem supervisão passo a passo.",
          "Equipamentos agrícolas autônomos para plantio e colheita."
        ],
        typicalAlgorithms: [
          "Aprendizado por Reforço Profundo (Deep Reinforcement Learning)",
          "Fusão de Sensores (Sensor Fusion - LiDAR, Radar, Visão Computacional)",
          "Sistemas de Controle Preditivo e Planejamento de Trajetória"
        ],
        typicalMetrics: [
          "Taxa de Desengajamento (Disengagement Rate — frequência com que o humano precisa assumir o controle)",
          "MTBF (Mean Time Between Failures), Segurança Operacional (Zero Colisões/Incidentes) e Latência de Resposta em Tempo Real (Edge AI)"
        ],
        examTraps: "Na prova, Sistemas Autônomos de alto impacto são quase sempre classificados como Alto Risco (EU AI Act). A armadilha clássica é implantá-los direto em autonomia total (Nível 5): a metodologia CPMAI exige evolução gradual começando com Human-in-the-Loop (humano aprova), passando por Human-on-the-Loop (humano supervisiona e pode intervir com botão de parada/kill switch) e testes extensivos em simulação/Shadow Mode.",
        combinationPatterns: "Quase sempre depende do Padrão 6 (Reconhecimento — visão computacional para enxergar obstáculos) e do Padrão 7 (Sistemas Orientados a Objetivos — aprendizado por reforço para otimizar rotas)."
      },
      {
        id: "pattern-3",
        number: 3,
        name: "Análise Preditiva e Suporte à Decisão",
        englishName: "Predictive Analytics & Decision Support",
        icon: "📈",
        color: "#10b981",
        definition: "Utiliza dados históricos e atuais para prever eventos futuros, estimar probabilidades ou valores contínuos (Regressão/Classificação) com o objetivo explícito de auxiliar um tomador de decisão humano a escolher a melhor ação.",
        coreMechanism: "A IA gera a previsão ou pontuação de risco (score), mas a decisão final ou o processo de negócio utiliza esse insight como suporte (Human-in-the-Loop).",
        classicUseCases: [
          "Previsão de rotatividade de clientes (Customer Churn Prediction) para orientar a equipe de retenção.",
          "Manutenção preditiva (prever probabilidade de falha de uma máquina nos próximos 7 dias).",
          "Previsão de demanda de estoque, fluxo de caixa e vendas sazonais.",
          "Suporte à decisão clínica (estimar risco de readmissão hospitalar de um paciente para o médico decidir a conduta)."
        ],
        typicalAlgorithms: [
          "Regressão Linear e Logística, Árvores de Decisão, Random Forest, XGBoost / LightGBM",
          "Modelos de Séries Temporais (ARIMA, Prophet, LSTM, Temporal Fusion Transformers)"
        ],
        typicalMetrics: [
          "Para Classificação: Precision, Recall, F1-Score, ROC-AUC, PR-AUC",
          "Para Regressão: MAE (Erro Absoluto Médio), RMSE (Raiz do Erro Quadrático Médio), MAPE e R²"
        ],
        examTraps: "A principal diferença entre o Padrão 3 (Análise Preditiva e Suporte à Decisão) e o Padrão 2 (Sistemas Autônomos) na prova é QUEM toma a ação: no Padrão 3, a IA auxilia/recomenda ao humano (Decision Support); por isso, Explicabilidade (XAI) e confiança do usuário (Change Management) são cruciais para que o especialista humano não ignore as previsões do modelo.",
        combinationPatterns: "Combina-se com o Padrão 5 (Padrões e Anomalias) para identificar fatores de risco ocultos antes de prever o desfecho futuro."
      },
      {
        id: "pattern-4",
        number: 4,
        name: "Conversação e Interação Humana",
        englishName: "Conversation & Human Interaction",
        icon: "💬",
        color: "#f59e0b",
        definition: "Sistemas de IA projetados para compreender, processar e gerar linguagem humana natural (texto ou voz), permitindo interação fluida entre máquinas e seres humanos.",
        coreMechanism: "Baseia-se em Processamento de Linguagem Natural (NLP), Entendimento de Linguagem Natural (NLU), Geração de Linguagem Natural (NLG) e Grandes Modelos de Linguagem (LLMs).",
        classicUseCases: [
          "Assistentes virtuais e chatbots de atendimento ao cliente em múltiplos canais (texto e voz).",
          "Copilotos corporativos baseados em LLMs + RAG para consulta de bases de conhecimento internas.",
          "Tradução simultânea de idiomas, sumarização de reuniões e geração assistida de relatórios/e-mails.",
          "Análise de sentimento e intenção em mensagens de suporte ou redes sociais."
        ],
        typicalAlgorithms: [
          "Transformers, LLMs (Large Language Models), Arquiteturas RAG (Retrieval-Augmented Generation)",
          "Modelos de NLU para classificação de intenção (Intent) e extração de entidades (NER)"
        ],
        typicalMetrics: [
          "Taxa de Resolução no Primeiro Contato (FCR) e Taxa de Transbordo para Humano (Escalation/Containment Rate)",
          "CSAT (Satisfação do Cliente), Groundedness (Fidelidade à fonte sem alucinação), BLEU/ROUGE e Latência de resposta"
        ],
        examTraps: "Duas regras obrigatórias de prova para o Padrão 4: (1) Transparência (EU AI Act): o usuário humano DEVE sempre ser informado claramente de que está interagindo com uma IA e não com uma pessoa; (2) Em sistemas baseados em LLMs, é obrigatório implementar Guardrails contra alucinações, Prompt Injection, vazamento de dados sensíveis e prever transbordo suave (graceful handoff) para um atendente humano quando o bot não souber responder.",
        combinationPatterns: "Frequentemente acoplado ao Padrão 6 (Reconhecimento de Voz / Speech-to-Text) e ao Padrão 1 (Hiperpersonalização do atendimento)."
      },
      {
        id: "pattern-5",
        number: 5,
        name: "Padrões e Anomalias",
        englishName: "Patterns & Anomalies",
        icon: "🔍",
        color: "#ec4899",
        definition: "Utiliza algoritmos de Machine Learning para descobrir correlações ocultas, agrupamentos naturais (clusters) em grandes volumes de dados ou identificar eventos raros e desvios comportamentais (outliers/anomalias) que fogem do padrão normal.",
        coreMechanism: "Aprende o que é o 'comportamento normal' ou a estrutura intrínseca dos dados (muitas vezes via aprendizado não supervisionado ou semi-supervisionado) para sinalizar o que é comum ou o que é anômalo.",
        classicUseCases: [
          "Detecção de fraude em cartões de crédito, lavagem de dinheiro (AML) e ataques cibernéticos (IDS/SIEM).",
          "Detecção de defeitos raros ou leituras anômalas de vibração/temperatura em sensores de IoT industrial.",
          "Descoberta de cestas de compras (Market Basket Analysis — quem compra X também compra Y).",
          "Auditoria contábil automatizada para identificar lançamentos fora do padrão histórico."
        ],
        typicalAlgorithms: [
          "Não Supervisionados: Isolation Forest, One-Class SVM, Autoencoders, K-Means, DBSCAN, Regras de Associação (Apriori)",
          "Supervisionados (quando há histórico de fraudes rotuladas): XGBoost / Random Forest com tratamento de classes desbalanceadas"
        ],
        typicalMetrics: [
          "Precision, Recall, F1-Score e PR-AUC (Área sob a curva Precision-Recall — ideal para classes raras!)",
          "Taxa de Falsos Alarmes (False Positive Rate) vs Taxa de Detecção (True Positive Rate)"
        ],
        examTraps: "Armadilha número 1 da prova: em detecção de anomalias/fraudes, a classe positiva é raríssima (ex.: 0,1% dos casos). NUNCA use Acurácia (Accuracy) como métrica principal! Além disso, lembre-se de que fraudadores mudam de tática constantemente, gerando Concept Drift acelerado na Fase VI.",
        combinationPatterns: "Trabalha em conjunto com o Padrão 3 (Análise Preditiva) para bloquear ou pontuar transações suspeitas em tempo real."
      },
      {
        id: "pattern-6",
        number: 6,
        name: "Reconhecimento",
        englishName: "Recognition",
        icon: "👁️",
        color: "#8b5cf6",
        definition: "Capacidade de sistemas de IA identificarem, classificarem e localizarem objetos, pessoas, textos, sons, gestos ou padrões específicos dentro de dados não estruturados de sensores (imagens, vídeos, áudio, sinais biométricos).",
        coreMechanism: "Converte sinais brutos não estruturados (pixels de imagem, ondas sonoras) em identificações estruturadas com nível de confiança (Confidence Score).",
        classicUseCases: [
          "Visão Computacional em medicina: detecção de tumores em exames de raio-X, tomografia ou ressonância magnética.",
          "Inspeção visual automatizada de qualidade em linhas de montagem industrial (identificar peças trincadas).",
          "Reconhecimento Óptico de Caracteres inteligente (OCR/ICR) para leitura de documentos manuscritos e placas de veículos (LPR).",
          "Reconhecimento de fala (Speech-to-Text), identificação de locutor e biometria facial."
        ],
        typicalAlgorithms: [
          "Redes Neurais Convolucionais (CNNs - ResNet, YOLO, Mask R-CNN) e Vision Transformers (ViT)",
          "Modelos acústicos profundos (Whisper, Conformer) e Transfer Learning a partir de modelos pré-treinados"
        ],
        typicalMetrics: [
          "IoU (Intersection over Union) e mAP (mean Average Precision) para detecção de objetos em imagens",
          "WER (Word Error Rate) para reconhecimento de voz, além de Precision/Recall/Sensibilidade/Especificidade"
        ],
        examTraps: "No exame PMI-CPMAI, o Padrão de Reconhecimento exige atenção máxima a dois pontos: (1) Viés de Representação nos dados de treinamento (ex.: câmeras de reconhecimento facial treinadas apenas com um tom de pele ou iluminação de estúdio falham no mundo real); (2) Restrições severas do EU AI Act e leis de privacidade sobre identificação biométrica remota em espaços públicos.",
        combinationPatterns: "Serve como a 'visão e audição' (entrada de dados) para o Padrão 2 (Sistemas Autônomos) e para o Padrão 4 (Conversação por voz)."
      },
      {
        id: "pattern-7",
        number: 7,
        name: "Sistemas Orientados a Objetivos",
        englishName: "Goal-Driven Systems",
        icon: "🏆",
        color: "#ef4444",
        definition: "Sistemas que aprendem por tentativa e erro (Aprendizado por Reforço) a encontrar a sequência ótima de ações para atingir um objetivo complexo, maximizando uma função de recompensa (Reward Function) e minimizando penalidades dentro de um ambiente dinâmico.",
        coreMechanism: "Iteração baseada em Agente → Ação no Ambiente → Mudança de Estado → Recebimento de Recompensa Positiva ou Negativa (Reinforcement Learning).",
        classicUseCases: [
          "IA campeã em jogos estratégicos complexos (AlphaGo, Xadrez, simulações militares).",
          "Otimização dinâmica de rotas logísticas, malhas aéreas e cadeias de suprimentos globais.",
          "Otimização em tempo real do consumo de energia em redes elétricas inteligentes (Smart Grids) e resfriamento industrial.",
          "Leilões programáticos em tempo real (Real-Time Bidding) e alocação dinâmica de recursos."
        ],
        typicalAlgorithms: [
          "Aprendizado por Reforço (Reinforcement Learning - Q-Learning, Deep Q-Networks / DQN, Policy Gradient, PPO)",
          "Busca em Árvore de Monte Carlo (MCTS) e Otimização Evolucionária"
        ],
        typicalMetrics: [
          "Recompensa Acumulada Total (Cumulative Reward) e Velocidade de Convergência da Política",
          "Eficiência de Custo/Recursos (ex.: % de economia de combustível ou energia alcançada sem violar restrições)"
        ],
        examTraps: "Cuidado com o fenômeno de 'Reward Hacking' (Especificação Incorreta da Recompensa): se você definir mal a função de recompensa na Fase I/IV, o agente encontrará um 'atalho antiético ou perigoso' para ganhar pontos (ex.: um robô de limpeza recompensado apenas por 'não ver sujeira' pode simplesmente desligar sua câmera!). Definir restrições de segurança (Safety Constraints) é obrigatório.",
        combinationPatterns: "Frequentemente fornece o 'cérebro de planejamento ótimo' para o Padrão 2 (Sistemas Autônomos)."
      }
    ],

    /* ----------------------------------------------------------------------
     * GUIA TÉCNICO ESSENCIAL PARA GESTORES (SEM CÓDIGO)
     * ---------------------------------------------------------------------- */
    technicalGuide: [
      {
        id: "tech-supervised-unsupervised",
        title: "1. Paradigmas de Machine Learning: Supervisionado, Não Supervisionado e Reforço",
        badge: "Domínios III & IV",
        summary: "Como gestor CPMAI, você não precisa programar o algoritmo, mas DEVE saber qual paradigma escolher com base no problema de negócio e na existência (ou não) de dados rotulados.",
        content: [
          {
            subtitle: "Aprendizado Supervisionado (Supervised Learning)",
            text: "Exige **dados históricos rotulados (Labeled Data / Ground Truth)**, onde já conhecemos a resposta correta ($Y$) para cada exemplo de entrada ($X$). Divide-se em duas grandes famílias:",
            bullets: [
              "**Classificação (Classification)**: A saída prevista é uma **categoria discreta**. Pode ser *Binária* (Sim/Não, Fraude/Legítimo, Doente/Saudável, Churn/Ativo) ou *Multiclasse* (classificar um chamado em Financeiro, Técnico ou Comercial). Algoritmos comuns: Regressão Logística (apesar do nome, é classificação!), Árvores de Decisão, Random Forest, XGBoost, SVM.",
              "**Regressão (Regression)**: A saída prevista é um **número contínuo**. Exemplos: prever o preço de venda de um imóvel em R$, estimar a temperatura de uma caldeira ou o volume de vendas do próximo mês. Algoritmos comuns: Regressão Linear, Ridge/Lasso, Random Forest Regressor, Gradient Boosting Regressor."
            ]
          },
          {
            subtitle: "Aprendizado Não Supervisionado (Unsupervised Learning)",
            text: "Trabalha com **dados NÃO rotulados (Unlabeled Data)**. O algoritmo explora a estrutura oculta dos dados por conta própria. Principais aplicações na prova:",
            bullets: [
              "**Agrupamento (Clustering)**: Divide os registros em grupos por similaridade sem que você diga quais são os grupos de antemão (ex.: segmentação de clientes com *K-Means*, *DBSCAN* ou *Clustering Hierárquico*).",
              "**Redução de Dimensionalidade**: Comprime centenas de colunas correlacionadas em poucos componentes principais mantendo a informação essencial, combatendo a *Maldição da Dimensionalidade* (ex.: *PCA - Principal Component Analysis*, *t-SNE*, *UMAP*).",
              "**Descoberta de Associações & Anomalias**: Encontrar itens comprados juntos (*Apriori / Market Basket*) ou pontos fora da curva (*Isolation Forest*)."
            ]
          },
          {
            subtitle: "Aprendizado Semi-Supervisionado e Auto-Supervisionado (Self-Supervised)",
            text: "Muito cobrado quando rotular milhões de registros com especialistas humanos é caro demais: o **Semi-Supervisionado** combina uma pequena fração de dados rotulados com um grande volume de dados não rotulados. Já o **Auto-Supervisionado** (base dos LLMs modernos) aprende prevendo partes ocultas do próprio dado (ex.: prever a próxima palavra da frase)."
          },
          {
            subtitle: "Trade-off Crítico de Prova: Explicabilidade (White-Box) vs Performance (Black-Box)",
            text: "Modelos simples como **Árvores de Decisão** e **Regressão Linear/Logística** têm **alta interpretabilidade intrínseca** (fácil explicar ao regulador por que uma decisão foi tomada). Já **Deep Learning (Redes Neurais Profundas)** e grandes **Ensembles** têm altíssima capacidade preditiva em dados complexos, mas funcionam como **Caixa-Preta (Black-Box)**, exigindo ferramentas pós-hoc de XAI (*SHAP*, *LIME*) caso haja exigência de explicabilidade."
          }
        ]
      },
      {
        id: "tech-genai-rag-finetuning",
        title: "2. IA Generativa, LLMs, Prompt Engineering, RAG vs Fine-Tuning e Guardrails",
        badge: "Domínios I, II & IV (Alta Incidência)",
        summary: "Um dos temas mais quentes do exame PMI-CPMAI atual: como escolher a arquitetura certa para Grandes Modelos de Linguagem (LLMs) equilibrando precisão, custo, atualização de dados e segurança.",
        content: [
          {
            subtitle: "Quando usar Prompt Engineering vs RAG vs Fine-Tuning vs Treinar do Zero?",
            text: "Na prova, siga sempre a **hierarquia de menor custo e complexidade** que resolve o problema:",
            bullets: [
              "**1º Prompt Engineering (Zero-Shot / Few-Shot / Chain-of-Thought)**: Primeira opção! Não altera os pesos do modelo e tem custo mínimo. Você instrui o modelo no próprio prompt, dando exemplos (*Few-Shot*) ou pedindo raciocínio passo a passo (*Chain-of-Thought*). Ideal para tarefas gerais imediatas.",
              "**2º RAG (Retrieval-Augmented Generation — Geração Aumentada por Recuperação)**: **A resposta certa na maioria das questões corporativas da prova!** Quando a empresa precisa que o LLM responda com base em **documentos internos, privados ou que mudam frequentemente** (políticas de RH, catálogo de produtos, manuais técnicos) e exige **citação das fontes e redução de alucinações**. O RAG converte documentos em vetores (*Embeddings*), busca os trechos relevantes em um Banco Vetorial e os injeta no contexto do prompt.",
              "**3º Fine-Tuning (Ajuste Fino — ex.: LoRA / PEFT)**: Altera os pesos de um modelo pré-treinado usando um dataset rotulado específico. Use quando precisar **ensinar um estilo de escrita, tom de voz específico, jargão técnico profundo (médico/jurídico) ou formato estruturado estrito**, e não para atualizar fatos diários (pois é mais caro e o conhecimento fica congelado na data do treino).",
              "**4º Treinar um Foundation Model do Zero (Pre-training)**: Exige milhões de dólares, bilhões de tokens e meses de GPUs. Raramente é a resposta certa para uma empresa comum na prova, exceto para gigantes de tecnologia ou soberania nacional extrema."
            ]
          },
          {
            subtitle: "Riscos de IA Generativa e Guardrails Obrigatórios",
            text: "Projetos de GenAI exigem controles específicos nas Fases I, V e VI:",
            bullets: [
              "**Alucinação (Hallucination / Confabulation)**: O LLM gera informações falsas com total aparência de confiança estatística. Mitigação: usar RAG com verificação de *Groundedness*, reduzir a *Temperatura* (parâmetro de aleatoriedade próximo de zero para respostas factuais) e exigir supervisão humana (*HITL*).",
              "**Prompt Injection (Direto e Indireto) & Jailbreak**: Usuários mal-intencionados (ou documentos externos lidos pelo modelo) inserem comandos ocultos para ignorar as regras de segurança e vazar dados ou executar ações indevidas. Mitigação: **Guardrails de Entrada e Saída**, sanitização de contexto e princípio do privilégio mínimo para agentes.",
              "**Vazamento de Propriedade Intelectual e PII**: Enviar código-fonte secreto ou dados de clientes para APIs públicas de LLMs que usam os prompts para treinar modelos públicos. Mitigação: usar instâncias corporativas privadas com garantia contratual de *Zero Data Retention* e mascaramento prévio de PII."
            ]
          }
        ]
      },
      {
        id: "tech-confusion-matrix-metrics",
        title: "3. Matriz de Confusão e Métricas de Avaliação (Precision, Recall, F1, ROC-AUC, RMSE)",
        badge: "Domínio IV (Questão Certa na Prova!)",
        summary: "Entenda de uma vez por todas quando o negócio precisa maximizar Recall (Sensibilidade) e quando precisa maximizar Precision, além de escapar da armadilha da Acurácia.",
        content: [
          {
            subtitle: "Os 4 Quadrantes da Matriz de Confusão",
            text: "Em qualquer problema de classificação binária (Positivo = evento que buscamos detectar, ex.: Doença ou Fraude; Negativo = normal):",
            bullets: [
              "**Verdadeiro Positivo (VP / TP - True Positive)**: Era positivo e o modelo acertou prevendo positivo.",
              "**Verdadeiro Negativo (VN / TN - True Negative)**: Era negativo e o modelo acertou prevendo negativo.",
              "**Falso Positivo (FP - Erro Tipo I / Alarme Falso)**: Era negativo na realidade, mas o modelo previu positivo (ex.: bloqueou o cartão de um cliente honesto ou mandou um e-mail importante do chefe para a caixa de Spam).",
              "**Falso Negativo (FN - Erro Tipo II / Omissão Crítica)**: Era positivo na realidade, mas o modelo deixou passar como negativo (ex.: paciente tinha câncer e o modelo disse que estava saudável; peça da turbina tinha rachadura e o modelo aprovou)."
            ]
          },
          {
            subtitle: "Qual Métrica Escolher na Prova? (A Regra de Ouro do Custo do Erro)",
            text: "As questões do PMI descrevem um cenário de negócio e perguntam qual métrica o gerente deve priorizar na Fase V:",
            bullets: [
              "**Recall (Sensibilidade / Revocação) = $\\frac{VP}{VP + FN}$**: Mede a capacidade de encontrar TODOS os casos positivos reais. **Priorize Recall quando o Falso Negativo (FN) for catastrófico, perigoso ou caríssimo!** Exemplos clássicos de prova: triagem médica de câncer/doenças graves, detecção de rachaduras em aeronaves/pontes, detecção de invasão de segurança ou fraude de alto valor.",
              "**Precision (Precisão) = $\\frac{VP}{VP + FP}$**: De tudo que o modelo apontou como positivo, quantos realmente eram positivos? **Priorize Precision quando o Falso Positivo (FP) tiver custo inaceitável!** Exemplos clássicos de prova: filtro de Spam (você não pode perder um e-mail de contrato legítimo na lixeira), sistema automático de bloqueio definitivo de conta ou recomendação jurídica punitiva.",
              "**F1-Score = Média Harmônica entre Precision e Recall**: Use quando você tem **classes desbalanceadas** e precisa de um **equilíbrio sólido entre Falsos Positivos e Falsos Negativos**.",
              "**Paradoxo da Acurácia (Accuracy Trap)**: A Acurácia ($\\frac{VP + VN}{Total}$) é **enganosa em datasets desbalanceados**! Se 99% das peças da fábrica são boas e 1% tem defeito, um modelo cego que diz 'tudo é bom' tem 99% de acurácia e 0% de utilidade.",
              "**ROC-AUC vs PR-AUC**: A curva ROC-AUC avalia a capacidade de separação do modelo em todos os limiares (thresholds). Para classes extremamente raras/desbalanceadas, a curva **PR-AUC (Precision-Recall AUC)** é mais informativa.",
              "**Métricas de Regressão (Previsão Numérica)**: **MAE** (Erro Absoluto Médio — fácil de explicar em R$ ou unidades ao negócio) vs **RMSE** (Raiz do Erro Quadrático Médio — eleva os erros ao quadrado antes de tirar a raiz, portanto **penaliza fortemente grandes erros/outliers!**)."
            ]
          }
        ]
      },
      {
        id: "tech-overfitting-leakage",
        title: "4. Overfitting vs Underfitting e os 3 Tipos de Data Leakage (Vazamento de Dados)",
        badge: "Domínios III & IV",
        summary: "Como diagnosticar se o modelo decorou os dados ou se houve contaminação entre treino e teste.",
        content: [
          {
            subtitle: "Overfitting (Sobreajuste) vs Underfitting (Subajuste)",
            text: "O equilíbrio entre Viés (Bias) e Variância (Variance):",
            bullets: [
              "**Overfitting (Alta Variância)**: O modelo vai **muito bem nos dados de Treinamento (ex.: 99% de acerto), mas despenca nos dados de Validação/Teste (ex.: 62% de acerto)**. Ele 'decorou' o ruído e as particularidades do treino e perdeu a capacidade de generalizar. **Como resolver na prova**: obter mais dados variados (Fase II/III), reduzir o número de atributos irrelevantes (Feature Selection), simplificar o modelo, aplicar Regularização (L1/L2, Dropout) ou Early Stopping.",
              "**Underfitting (Alto Viés)**: O modelo vai **mal tanto no Treinamento (ex.: 55%) quanto no Teste (ex.: 53%)**. O modelo é simples demais ou as variáveis não têm informação suficiente para capturar o padrão. **Como resolver**: usar um algoritmo mais expressivo, criar melhores variáveis (Feature Engineering na Fase III) ou reduzir a regularização excessiva."
            ]
          },
          {
            subtitle: "Data Leakage (Vazamento de Dados): O Inimigo Silencioso",
            text: "Ocorre quando informações que NÃO estarão disponíveis no momento real da previsão em produção vazam para o treinamento, gerando um modelo 'bom demais para ser verdade' na Fase IV/V que fracassa totalmente na Fase VI:",
            bullets: [
              "**1. Target Leakage (Anacronismo Temporal)**: Incluir no treinamento uma coluna que só é preenchida DEPOIS do evento ocorrer (ex.: prever se um cliente vai atrasar o empréstimo usando a coluna 'data_de_envio_para_cobranca_judicial').",
              "**2. Vazamento de Pré-processamento**: Calcular média/desvio padrão para normalização, imputar valores ausentes pela média global ou aplicar SMOTE no dataset inteiro ANTES de separar Treino e Teste.",
              "**3. Vazamento de Grupo/Séries Temporais**: Em séries temporais, misturar dados do futuro no treino para prever o passado (em vez de fazer corte temporal estrito), ou colocar exames do mesmo paciente tanto no treino quanto no teste."
            ]
          }
        ]
      },
      {
        id: "tech-deploy-drift-mlops",
        title: "5. Estratégias de Deploy (Shadow, Canary, Blue-Green, A/B), Drift e MLOps",
        badge: "Domínio V (Operacionalização)",
        summary: "Como colocar modelos em produção com segurança e mantê-los saudáveis ao longo do tempo na Fase VI da CPMAI.",
        content: [
          {
            subtitle: "Comparativo das 4 Estratégias de Implantação (Deploy)",
            text: "Saiba diferenciar exatamente cada estratégia para acertar as questões do Domínio V:",
            bullets: [
              "**Shadow Deployment (Implantação em Modo Sombra)**: O modelo novo roda em produção recebendo dados reais em tempo real em paralelo ao sistema atual, mas **suas respostas NÃO são mostradas ao usuário nem afetam o negócio** (ficam apenas registradas em log para comparação). **Quando escolher na prova**: cenários de alto risco (saúde, aviação, crédito crítico, sistemas autônomos) onde você precisa provar que o modelo funciona no mundo real com **risco zero**.",
              "**Canary Deployment (Lançamento Canário)**: O novo modelo é liberado inicialmente para uma **pequena fração real dos usuários (ex.: 1% a 5%)**. Se os indicadores técnicos e de negócio estiverem saudáveis, aumenta-se gradualmente (10% → 50% → 100%). **Quando escolher**: mitigar risco em lançamentos de produção limitando o raio de impacto (blast radius).",
              "**Blue-Green Deployment**: Mantêm-se dois ambientes de produção idênticos: *Blue* (versão atual ativa) e *Green* (nova versão validada). O roteador vira a chave do tráfego de Blue para Green; se algo falhar, o **rollback para o ambiente Blue é instantâneo**.",
              "**A/B Testing (Teste A/B)**: O tráfego é dividido (ex.: 50% Grupo Controle com Modelo A vs 50% Grupo Tratamento com Modelo B) durante um período para **comparar estatisticamente qual modelo gera melhor KPI de negócio** (ex.: maior conversão ou receita)."
            ]
          },
          {
            subtitle: "Data Drift vs Concept Drift (Degradação do Modelo / Model Decay)",
            text: "Todo modelo em produção sofre degradação com o tempo porque o mundo muda:",
            bullets: [
              "**Data Drift (Covariate Shift / Feature Drift)**: A **distribuição estatística dos dados de entrada ($X$) mudou**, embora a regra fundamental do mundo continue parecida. Exemplo: uma loja que atendia público de 40-60 anos faz uma campanha no TikTok e passa a receber jovens de 18-22 anos (perfil nunca visto no treino); ou uma câmera de inspeção fica embaçada por poeira na fábrica.",
              "**Concept Drift**: O **significado ou relação entre as entradas e a saída real ($X \\rightarrow Y$) mudou no mundo real**. Exemplo: o que significava 'comportamento normal de compra' ou 'padrão de fraude' mudou drasticamente após uma crise econômica, pandemia ou nova lei. Exige reavaliação profunda e retorno às fases iniciais da CPMAI."
            ]
          },
          {
            subtitle: "Pilares de MLOps (Machine Learning Operations)",
            text: "Une DevOps, Engenharia de Dados e Ciência de Dados para automatizar e governar o ciclo de vida: **CI** (Integração Contínua de código e testes de dados), **CD** (Entrega Contínua do pipeline/modelo) e **CT (Continuous Training — Treinamento Contínuo)** acionado por gatilhos de Drift, além de **Model Registry** (versionamento de modelos) e **Feature Store** (repositório padronizado de variáveis para evitar distorção entre treino e produção — *Training-Serving Skew*)."
          }
        ]
      }
    ],

    /* ----------------------------------------------------------------------
     * FLASHCARDS INTERATIVOS (28 FLASHCARDS ESSENCIAIS)
     * ---------------------------------------------------------------------- */
    flashcards: [
      {
        id: "fc-01",
        category: "Metodologia CPMAI",
        domain: "D2",
        difficulty: "Essencial",
        front: "Quais são as 6 Fases da Metodologia CPMAI™ v7 na ordem correta?",
        back: "Fase I: Business Understanding (Entendimento do Negócio)\nFase II: Data Understanding (Entendimento dos Dados)\nFase III: Data Preparation (Preparação dos Dados)\nFase IV: Model Development (Desenvolvimento do Modelo)\nFase V: Model Evaluation (Avaliação do Modelo)\nFase VI: Model Operationalization (Operacionalização do Modelo)\n\n💡 Lembrete: O ciclo é 100% ITERATIVO e centrado em dados!"
      },
      {
        id: "fc-02",
        category: "ECO & Pesos",
        domain: "D2",
        difficulty: "Essencial",
        front: "Qual é o peso percentual de cada um dos 5 Domínios no exame PMI-CPMAI™?",
        back: "• Domínio I (IA Responsável e Confiável): 15%\n• Domínio II (Necessidades e Soluções de Negócio): 26%\n• Domínio III (Necessidades de Dados): 26%\n• Domínio IV (Desenvolvimento e Avaliação de Modelos): 16%\n• Domínio V (Operacionalização da Solução de IA): 17%\n\n🎯 Negócios (26%) + Dados (26%) = 52% de toda a prova!"
      },
      {
        id: "fc-03",
        category: "Formato da Prova",
        domain: "D2",
        difficulty: "Essencial",
        front: "Quantas questões tem a prova PMI-CPMAI™, quantas valem ponto e qual o tempo total?",
        back: "• Total: 120 questões de múltipla escolha.\n• Pontuadas: 100 questões.\n• Pré-teste (unscored): 20 questões ocultas espalhadas pela prova.\n• Tempo: 160 minutos (2h40min) — média de 1m20s (80s) por questão, sem intervalo programado."
      },
      {
        id: "fc-04",
        category: "7 Padrões de IA",
        domain: "D2",
        difficulty: "Essencial",
        front: "Quais são os 7 Padrões de IA (7 Patterns of AI) da metodologia CPMAI?",
        back: "1. Hiperpersonalização (Hyperpersonalization)\n2. Sistemas Autônomos (Autonomous Systems)\n3. Análise Preditiva e Suporte à Decisão (Predictive Analytics & Decision Support)\n4. Conversação e Interação Humana (Conversation & Human Interaction)\n5. Padrões e Anomalias (Patterns & Anomalies)\n6. Reconhecimento (Recognition)\n7. Sistemas Orientados a Objetivos (Goal-Driven Systems)"
      },
      {
        id: "fc-05",
        category: "Go/No-Go & Iteração",
        domain: "D3",
        difficulty: "Difícil",
        front: "Na Fase II (Data Understanding), a equipe descobre que os dados necessários não existem e não há como coletá-los a curto prazo. Para qual fase voltar?",
        back: "Acionar o Gate No-Go e retornar imediatamente para a FASE I (Business Understanding) para redefinir o escopo do problema de negócio ou planejar uma iniciativa prévia de coleta/aquisição de dados. Nunca avance para a Fase III/IV sem dados viáveis!"
      },
      {
        id: "fc-06",
        category: "Go/No-Go & Iteração",
        domain: "D4",
        difficulty: "Difícil",
        front: "Na Fase V (Model Evaluation), o modelo tem boa programação, mas erra muito porque os rótulos tinham inconsistências e faltam variáveis preditivas. Para qual fase voltar?",
        back: "Retornar para a FASE III (Data Preparation) para corrigir a rotulagem (Ground Truth) com especialistas de domínio (SMEs) e realizar Engenharia de Atributos (Feature Engineering). Esta é a essência da abordagem Data-Centric AI."
      },
      {
        id: "fc-07",
        category: "Métricas (Domínio IV)",
        domain: "D4",
        difficulty: "Essencial",
        front: "Quando priorizar RECALL (Sensibilidade) em vez de Precision na avaliação de um modelo?",
        back: "Priorize RECALL (VP / [VP + FN]) quando o custo de um FALSO NEGATIVO (FN) for gravíssimo ou inaceitável!\n\nExemplos de prova: Diagnóstico de câncer/doenças graves, detecção de falha em freios/turbinas de avião, triagem de segurança e fraudes críticas."
      },
      {
        id: "fc-08",
        category: "Métricas (Domínio IV)",
        domain: "D4",
        difficulty: "Essencial",
        front: "Quando priorizar PRECISION em vez de Recall na avaliação de um modelo?",
        back: "Priorize PRECISION (VP / [VP + FP]) quando o custo de um FALSO POSITIVO (FP / alarme falso) for muito alto!\n\nExemplos de prova: Filtro de Spam (não pode jogar e-mail legítimo importante no lixo), bloqueio automático irreversível de clientes ou acusação formal."
      },
      {
        id: "fc-09",
        category: "Métricas (Domínio IV)",
        domain: "D4",
        difficulty: "Médio",
        front: "O que é o 'Paradoxo da Acurácia' (Accuracy Paradox) e como resolvê-lo na prova?",
        back: "Em datasets muito desbalanceados (ex.: 99% transações normais e 1% fraude), um modelo inútil que chuta 'normal' para tudo atinge 99% de Acurácia, mas detecta 0% das fraudes.\n\nSolução: Avaliar a Matriz de Confusão usando Precision, Recall, F1-Score e PR-AUC."
      },
      {
        id: "fc-10",
        category: "IA Generativa",
        domain: "D4",
        difficulty: "Essencial",
        front: "Qual a diferença prática entre usar RAG (Retrieval-Augmented Generation) e Fine-Tuning em um projeto com LLMs?",
        back: "• RAG: Conecta o LLM a uma base de documentos atualizável (busca vetorial). Ideal para dados dinâmicos/privados, reduz alucinações, permite citar fontes e tem menor custo.\n• Fine-Tuning: Re-treina pesos do modelo. Ideal para ensinar estilo, tom de voz, jargão específico ou formatação estrita, mas não serve para fatos que mudam todo dia."
      },
      {
        id: "fc-11",
        category: "Dados (Domínio III)",
        domain: "D3",
        difficulty: "Essencial",
        front: "O que é Data Leakage (Vazamento de Dados) e quais seus exemplos mais cobrados?",
        back: "É quando informações do conjunto de Teste ou do 'futuro' vazam para o Treinamento, criando métricas ilusoriamente perfeitas na Fase IV/V que falham em produção (Fase VI).\n\nExemplos: (1) Normalizar ou aplicar SMOTE antes de dividir Treino/Teste; (2) Incluir variáveis que só são geradas após o evento alvo ocorrer (Target Leakage)."
      },
      {
        id: "fc-12",
        category: "Modelagem (Domínio IV)",
        domain: "D4",
        difficulty: "Médio",
        front: "Como diferenciar Overfitting de Underfitting olhando para as métricas de Treino e Teste?",
        back: "• Overfitting (Sobreajuste / Alta Variância): Excelente no Treino (ex.: 98%) e ruim no Teste/Validação (ex.: 65%). O modelo decorou o treino.\n• Underfitting (Subajuste / Alto Viés): Ruim no Treino (ex.: 58%) e ruim no Teste (ex.: 56%). O modelo é simples demais ou faltam boas features."
      },
      {
        id: "fc-13",
        category: "Operacionalização (Domínio V)",
        domain: "D5",
        difficulty: "Essencial",
        front: "Qual a diferença entre Data Drift e Concept Drift na Fase VI?",
        back: "• Data Drift (Covariate Shift): Mudança na distribuição estatística dos dados de entrada P(X) (ex.: mudança na faixa etária dos clientes que acessam o app).\n• Concept Drift: Mudança na relação real entre as entradas e a saída esperada P(Y|X) (ex.: mudança estrutural no que configura comportamento de compra ou fraude)."
      },
      {
        id: "fc-14",
        category: "Operacionalização (Domínio V)",
        domain: "D5",
        difficulty: "Essencial",
        front: "Quando escolher Shadow Deployment vs Canary Deployment na Fase VI?",
        back: "• Shadow Deployment (Modo Sombra): O modelo novo recebe dados reais em paralelo, mas NÃO afeta o usuário final. Escolha para validar cenários de alto risco sem nenhum impacto.\n• Canary Deployment: Libera o modelo novo de verdade para uma pequena porcentagem de usuários (ex.: 2% a 5%) e expande gradualmente se tudo correr bem."
      },
      {
        id: "fc-15",
        category: "Governança (Domínio I)",
        domain: "D1",
        difficulty: "Essencial",
        front: "Quais são as 4 funções centrais do NIST AI Risk Management Framework (AI RMF 1.0)?",
        back: "1. GOVERN (Governar — cultura, políticas, papéis e responsabilidades; função transversal)\n2. MAP (Mapear — entender o contexto de uso, impactos e categorizar riscos)\n3. MEASURE (Medir — avaliar, testar e quantificar riscos, vieses e desempenho)\n4. MANAGE (Gerenciar — priorizar, mitigar, monitorar e responder aos riscos identificados)"
      },
      {
        id: "fc-16",
        category: "Governança (Domínio I)",
        domain: "D1",
        difficulty: "Médio",
        front: "Como o EU AI Act classifica os sistemas de Inteligência Artificial?",
        back: "Abordagem baseada em 4 níveis de risco:\n1. Risco Inaceitável (Proibido: social scoring governamental, manipulação subliminar danosa).\n2. Alto Risco (Saúde, educação, recrutamento, crédito, infraestrutura crítica — exige conformidade rigorosa, governança de dados e supervisão humana).\n3. Risco Limitado (Chatbots, Deepfakes — exige transparência clara ao usuário).\n4. Risco Mínimo (Jogos, filtros de spam — livre uso)."
      },
      {
        id: "fc-17",
        category: "Governança (Domínio I)",
        domain: "D1",
        difficulty: "Médio",
        front: "Qual a diferença entre Human-in-the-Loop (HITL), Human-on-the-Loop (HOTL) e Human-out-of-the-Loop?",
        back: "• HITL (No Loop): O humano participa ativamente aprovando ou validando decisões críticas antes da ação final e ajudando a rotular casos duvidosos.\n• HOTL (Sobre o Loop): O sistema opera autonomamente, mas o humano monitora o painel em tempo real e pode intervir/parar (kill switch).\n• Out-of-the-Loop: Autonomia total sem intervenção humana."
      },
      {
        id: "fc-18",
        category: "7 Padrões de IA",
        domain: "D2",
        difficulty: "Médio",
        front: "Qual Padrão de IA está associado ao Aprendizado por Reforço (Reinforcement Learning) e otimização por tentativa e erro?",
        back: "Padrão 7: Sistemas Orientados a Objetivos (Goal-Driven Systems). O agente interage com o ambiente buscando maximizar uma função de recompensa (Reward Function), como em jogos estratégicos, otimização de rotas ou controle de energia."
      },
      {
        id: "fc-19",
        category: "Dados (Domínio III)",
        domain: "D3",
        difficulty: "Médio",
        front: "Para que servem separadamente os conjuntos de Treinamento, Validação e Teste (Holdout)?",
        back: "• Treinamento (Training Set): Usado pelo algoritmo para ajustar seus parâmetros/pesos.\n• Validação (Validation Set): Usado durante a Fase IV para comparar modelos candidatos e ajustar hiperparâmetros.\n• Teste (Test / Holdout Set): Usado APENAS na Fase V para uma avaliação final imparcial em dados inéditos."
      },
      {
        id: "fc-20",
        category: "Governança (Domínio I)",
        domain: "D1",
        difficulty: "Médio",
        front: "Por que apenas remover a coluna 'raça' ou 'gênero' do dataset não garante que o modelo ficará livre de viés?",
        back: "Devido às Variáveis Proxy (Proxy Variables)! Outras colunas aparentemente neutras (ex.: CEP de residência, escola onde estudou, histórico de compras) podem ter forte correlação estatística com o atributo protegido, permitindo que o modelo reconstrua indiretamente a discriminação."
      },
      {
        id: "fc-21",
        category: "Governança (Domínio I)",
        domain: "D1",
        difficulty: "Médio",
        front: "O que são SHAP e LIME e em qual contexto aparecem na prova PMI-CPMAI?",
        back: "São técnicas de Explicabilidade Pós-Hoc (XAI - Explainable AI) agnósticas ao modelo. Elas ajudam a explicar quais variáveis (features) mais contribuíram para uma decisão específica de um modelo Caixa-Preta (como Deep Learning ou XGBoost), atendendo requisitos de transparência e auditoria."
      },
      {
        id: "fc-22",
        category: "Negócios (Domínio II)",
        domain: "D2",
        difficulty: "Essencial",
        front: "O que é a filosofia Data-Centric AI (IA Centrada em Dados) defendida por Andrew Ng e pela metodologia CPMAI?",
        back: "Em vez de manter o dataset fixo com ruídos e gastar meses tentando inventar ajustes no código do algoritmo (Model-Centric), a abordagem Data-Centric mantém o algoritmo estável e foca sistematicamente em melhorar a qualidade, consistência dos rótulos e cobertura dos DADOS (Fases II e III)."
      },
      {
        id: "fc-23",
        category: "Métricas (Domínio IV)",
        domain: "D4",
        difficulty: "Médio",
        front: "Em problemas de Regressão, qual a diferença prática entre MAE e RMSE?",
        back: "• MAE (Mean Absolute Error): Média simples dos erros absolutos; todos os erros têm peso proporcional.\n• RMSE (Root Mean Squared Error): Eleva os erros ao quadrado antes de tirar a média e a raiz. Por isso, o RMSE penaliza pesadamente GRANDES ERROS (outliers). Se errar por muito for grave para o negócio, use RMSE!"
      },
      {
        id: "fc-24",
        category: "Operacionalização (Domínio V)",
        domain: "D5",
        difficulty: "Médio",
        front: "O que são 'Model Cards' e 'Datasheets for Datasets'?",
        back: "• Model Cards: Documentos padronizados de governança que acompanham um modelo treinado, detalhando seu objetivo pretendido, arquitetura, métricas por subgrupo demográfico e limitações éticas/técnicas.\n• Datasheets for Datasets: Documentam a origem, coleta, consentimento, rotulagem e vieses conhecidos do conjunto de dados."
      },
      {
        id: "fc-25",
        category: "Dados (Domínio III)",
        domain: "D3",
        difficulty: "Médio",
        front: "O que significa 'Inter-Annotator Agreement' (Concordância Entre Anotadores) na Fase III?",
        back: "É a métrica estatística (ex.: Kappa de Cohen ou Krippendorff's Alpha) que mede o grau de consenso entre diferentes especialistas humanos que rotulam os mesmos dados. Se a concordância for baixa, as instruções de rotulagem estão ambíguas e o Ground Truth não é confiável."
      },
      {
        id: "fc-26",
        category: "Operacionalização (Domínio V)",
        domain: "D5",
        difficulty: "Médio",
        front: "Quando optar por Edge AI (Inferência na Borda/Dispositivo) em vez de Cloud AI (Nuvem)?",
        back: "Escolha Edge AI quando o caso de uso exigir:\n1. Latência ultra-baixa em tempo real (ex.: freio de carro autônomo ou robô cirúrgico).\n2. Funcionamento offline / sem conectividade confiável com a internet (ex.: mina subterrânea, navio, lavoura remota).\n3. Privacidade estrita onde o vídeo/áudio bruto não pode sair do dispositivo local."
      },
      {
        id: "fc-27",
        category: "Negócios (Domínio II)",
        domain: "D2",
        difficulty: "Essencial",
        front: "O que deve compor o cálculo de TCO (Custo Total de Propriedade) de um projeto de IA na Fase I?",
        back: "Além do desenvolvimento inicial, o TCO de IA deve incluir obrigatoriamente:\n• Custos de aquisição, limpeza e rotulagem de dados.\n• Custos contínuos de computação/GPU e chamadas de API/tokens em produção (inferência).\n• Custos de monitoramento MLOps e ciclos periódicos de re-treinamento contra Drift.\n• Treinamento de usuários e governança/auditoria."
      },
      {
        id: "fc-28",
        category: "IA Generativa",
        domain: "D1",
        difficulty: "Médio",
        front: "O que é 'Prompt Injection Indireto' e como mitigá-lo?",
        back: "Ocorre quando um LLM ou Agente lê uma fonte externa (um site web, um PDF ou um e-mail recebido) que contém instruções maliciosas ocultas para sequestrar o comportamento do modelo. Mitigação: isolar dados não confiáveis de instruções de sistema, usar Guardrails de validação e exigir confirmação humana (HITL) antes que o agente execute ações sensíveis."
      }
    ],

    /* ----------------------------------------------------------------------
     * GLOSSÁRIO OFICIAL PMI-CPMAI (40 TERMOS FUNDAMENTAIS)
     * ---------------------------------------------------------------------- */
    glossary: [
      {
        id: "gl-01",
        term: "A/B Testing (Teste A/B)",
        englishTerm: "A/B Testing",
        category: "Operacionalização",
        domain: "D5",
        definition: "Experimento controlado em produção onde o tráfego de usuários é dividido entre duas versões (Modelo A atual vs Modelo B novo) para comparar estatisticamente qual entrega melhor resultado em um KPI de negócio.",
        examContext: "Usado na Fase VI quando se deseja comprovar ganho de negócio real (ex.: conversão, engajamento) entre dois modelos já validados tecnicamente."
      },
      {
        id: "gl-02",
        term: "Acurácia (Accuracy)",
        englishTerm: "Accuracy",
        category: "Métricas",
        domain: "D4",
        definition: "Proporção total de previsões corretas (Verdadeiros Positivos + Verdadeiros Negativos) dividida pelo total de exemplos avaliados.",
        examContext: "Cuidado! Nunca use Acurácia isoladamente quando as classes forem desbalanceadas (Paradoxo da Acurácia)."
      },
      {
        id: "gl-03",
        term: "Alucinação (Hallucination / Confabulation)",
        englishTerm: "Hallucination",
        category: "IA Generativa",
        domain: "D4",
        definition: "Fenômeno em que um modelo de IA Generativa (LLM) produz texto plausível e fluente, porém factualmente incorreto, inventado ou sem embasamento nos dados reais.",
        examContext: "Mitigada com arquitetura RAG, redução do parâmetro Temperature, Guardrails de verificação de fatos (Groundedness) e revisão humana (HITL)."
      },
      {
        id: "gl-04",
        term: "Aprendizado Não Supervisionado",
        englishTerm: "Unsupervised Learning",
        category: "Machine Learning",
        domain: "D4",
        definition: "Abordagem de ML em que o algoritmo analisa dados não rotulados (sem variável resposta prévia) para encontrar agrupamentos naturais (Clustering), reduzir dimensionalidade (PCA) ou detectar anomalias.",
        examContext: "Escolhido quando não há rótulos históricos disponíveis e o objetivo é segmentar clientes ou descobrir padrões ocultos."
      },
      {
        id: "gl-05",
        term: "Aprendizado por Reforço",
        englishTerm: "Reinforcement Learning (RL)",
        category: "Machine Learning",
        domain: "D4",
        definition: "Paradigma no qual um agente aprende a tomar decisões sequenciais interagindo com um ambiente por tentativa e erro, recebendo recompensas positivas ou penalidades.",
        examContext: "Diretamente associado ao Padrão 7 da CPMAI (Goal-Driven Systems) e a Sistemas Autônomos."
      },
      {
        id: "gl-06",
        term: "Aprendizado Supervisionado",
        englishTerm: "Supervised Learning",
        category: "Machine Learning",
        domain: "D4",
        definition: "Paradigma de ML que treina algoritmos utilizando dados históricos rotulados (pares de entrada X e saída conhecida Y) para realizar Classificação (categorias) ou Regressão (números contínuos).",
        examContext: "Exige Ground Truth confiável preparado nas Fases II e III."
      },
      {
        id: "gl-07",
        term: "Baseline Model (Modelo de Linha de Base)",
        englishTerm: "Baseline Model",
        category: "Modelagem",
        domain: "D4",
        definition: "Modelo simples, rápido e interpretável (ou heurística de negócio atual) construído no início da Fase IV para servir como referência mínima de desempenho.",
        examContext: "Um modelo complexo e caro só justifica ir para produção se superar significativamente o Baseline Model."
      },
      {
        id: "gl-08",
        term: "Blue-Green Deployment",
        englishTerm: "Blue-Green Deployment",
        category: "Operacionalização",
        domain: "D5",
        definition: "Estratégia de implantação que mantém dois ambientes de produção idênticos (Blue = atual ativo; Green = nova versão), permitindo alternar o tráfego instantaneamente e fazer rollback imediato se houver erro.",
        examContext: "Ideal na Fase VI para garantir continuidade operacional e tempo zero de inatividade (zero downtime)."
      },
      {
        id: "gl-09",
        term: "Canary Deployment (Lançamento Canário)",
        englishTerm: "Canary Deployment",
        category: "Operacionalização",
        domain: "D5",
        definition: "Estratégia de rollout progressivo que direciona apenas uma pequena porcentagem do tráfego real (ex.: 2% a 5%) para o novo modelo, expandindo gradualmente após validar a estabilidade.",
        examContext: "Reduz o raio de impacto (blast radius) ao lançar atualizações de modelos em produção."
      },
      {
        id: "gl-10",
        term: "Concept Drift (Deriva de Conceito)",
        englishTerm: "Concept Drift",
        category: "Operacionalização",
        domain: "D5",
        definition: "Mudança estrutural na relação estatística entre as variáveis de entrada e o resultado real esperado P(Y|X) ao longo do tempo devido a transformações no comportamento humano, mercado ou regras externas.",
        examContext: "Mais profundo que o Data Drift; exige reavaliação do problema e retorno às Fases I, II e III da CPMAI."
      },
      {
        id: "gl-11",
        term: "CPMAI™ (Cognitive Project Management for AI)",
        englishTerm: "CPMAI Methodology v7",
        category: "Metodologia",
        domain: "D2",
        definition: "Metodologia oficial do PMI para gestão de projetos de IA, baseada no CRISP-DM e estruturada em 6 fases iterativas centradas em dados, 7 Padrões de IA e governança ética transversal.",
        examContext: "É a espinha dorsal ('o PMBOK') de todo o exame PMI-CPMAI."
      },
      {
        id: "gl-12",
        term: "CRISP-DM",
        englishTerm: "Cross-Industry Standard Process for Data Mining",
        category: "Metodologia",
        domain: "D2",
        definition: "Modelo de processo aberto de 6 fases criado na década de 1990 para projetos de mineração de dados, que serviu de base estrutural para a evolução da metodologia CPMAI.",
        examContext: "A CPMAI expande o CRISP-DM adicionando foco específico em IA, os 7 Padrões de IA, ética/IA responsável e operacionalização contínua (MLOps)."
      },
      {
        id: "gl-13",
        term: "Data-Centric AI (IA Centrada em Dados)",
        englishTerm: "Data-Centric AI",
        category: "Dados",
        domain: "D3",
        definition: "Abordagem que prioriza a melhoria sistemática da qualidade, consistência de rótulos e representatividade dos dados em vez de focar apenas em alterar códigos de algoritmos.",
        examContext: "Quando um modelo estagna na Fase IV/V, a resposta correta na prova geralmente é voltar à Fase III/II para aprimorar os dados."
      },
      {
        id: "gl-14",
        term: "Data Drift (Covariate Shift)",
        englishTerm: "Data Drift",
        category: "Operacionalização",
        domain: "D5",
        definition: "Mudança na distribuição estatística das variáveis de entrada P(X) observadas em produção em comparação com os dados usados no treinamento.",
        examContext: "Monitorado na Fase VI (ex.: via Population Stability Index - PSI) para acionar re-treinamento com dados recentes."
      },
      {
        id: "gl-15",
        term: "Data Leakage (Vazamento de Dados)",
        englishTerm: "Data Leakage",
        category: "Dados",
        domain: "D3",
        definition: "Erro metodológico em que informações externas ao conjunto de treinamento (como dados do conjunto de teste ou variáveis do futuro) são usadas na criação do modelo.",
        examContext: "Causa métricas artificialmente perfeitas durante o treino/avaliação, mas falha severa quando o modelo vai para produção."
      },
      {
        id: "gl-16",
        term: "Datasheets for Datasets",
        englishTerm: "Datasheets for Datasets",
        category: "Governança",
        domain: "D1",
        definition: "Documento de transparência e governança que registra a motivação, composição, processo de coleta, pré-processamento, rotulagem e limitações de um conjunto de dados.",
        examContext: "Par complementar do Model Card para garantir rastreabilidade e auditoria de dados nos Domínios I e III."
      },
      {
        id: "gl-17",
        term: "Edge AI (IA na Borda)",
        englishTerm: "Edge AI",
        category: "Operacionalização",
        domain: "D5",
        definition: "Execução de modelos de IA diretamente em dispositivos locais (sensores, câmeras, smartphones, veículos) sem depender de envio constante para servidores em nuvem.",
        examContext: "Essencial quando o cenário exige latência em milissegundos, operação sem internet ou privacidade local estrita."
      },
      {
        id: "gl-18",
        term: "EU AI Act (Lei de IA da União Europeia)",
        englishTerm: "EU AI Act",
        category: "Governança",
        domain: "D1",
        definition: "Marco regulatório pioneiro que classifica sistemas de IA em quatro níveis de risco: Inaceitável (proibido), Alto Risco (fortemente regulado), Risco Limitado (transparência) e Risco Mínimo.",
        examContext: "Cobrado no Domínio I para identificar sistemas proibidos e requisitos obrigatórios de sistemas de Alto Risco."
      },
      {
        id: "gl-19",
        term: "Explicabilidade (XAI - Explainable AI)",
        englishTerm: "Explainable AI (XAI)",
        category: "Governança",
        domain: "D1",
        definition: "Conjunto de processos e métodos (como SHAP e LIME) que permitem aos seres humanos compreenderem e auditarem como e por que um modelo de IA chegou a determinada previsão.",
        examContext: "Requisito crítico em setores regulados (finanças, saúde, jurídico, setor público)."
      },
      {
        id: "gl-20",
        term: "F1-Score",
        englishTerm: "F1-Score",
        category: "Métricas",
        domain: "D4",
        definition: "Média harmônica entre Precision e Recall: 2 * (Precision * Recall) / (Precision + Recall).",
        examContext: "Métrica ideal quando há desbalanceamento de classes e tanto Falsos Positivos quanto Falsos Negativos são importantes."
      },
      {
        id: "gl-21",
        term: "Feature Engineering (Engenharia de Atributos)",
        englishTerm: "Feature Engineering",
        category: "Dados",
        domain: "D3",
        definition: "Processo realizado na Fase III, em colaboração com especialistas de domínio (SMEs), para criar, transformar e selecionar variáveis preditivas que destaquem os padrões para o algoritmo.",
        examContext: "Uma boa engenharia de atributos na Fase III frequentemente supera a troca por algoritmos mais complexos na Fase IV."
      },
      {
        id: "gl-22",
        term: "Feature Store (Repositório de Atributos)",
        englishTerm: "Feature Store",
        category: "Operacionalização",
        domain: "D5",
        definition: "Repositório centralizado que armazena, documenta e serve variáveis (features) padronizadas tanto para o treinamento de modelos quanto para a inferência em produção.",
        examContext: "Evita o retrabalho entre equipes e elimina o 'Training-Serving Skew' (diferença de cálculo da variável entre treino e produção)."
      },
      {
        id: "gl-23",
        term: "Fine-Tuning (Ajuste Fino)",
        englishTerm: "Fine-Tuning",
        category: "IA Generativa",
        domain: "D4",
        definition: "Processo de continuar o treinamento de um modelo pré-treinado (Foundation Model) com um conjunto menor de dados específicos para adaptar seu estilo, formato ou vocabulário de domínio.",
        examContext: "Na prova, não use Fine-Tuning apenas para consultar documentos que mudam toda semana — para isso, use RAG!"
      },
      {
        id: "gl-24",
        term: "Go/No-Go Gate (Portão de Decisão)",
        englishTerm: "Go/No-Go Gate",
        category: "Metodologia",
        domain: "D2",
        definition: "Ponto de verificação formal ao final de cada fase da metodologia CPMAI onde o gerente e os stakeholders avaliam se os critérios foram atingidos para avançar, iterar para uma fase anterior ou cancelar o projeto.",
        examContext: "Impede que projetos de IA desperdicem recursos avançando com dados ruins ou sem alinhamento ao negócio."
      },
      {
        id: "gl-25",
        term: "Ground Truth (Verdade Fundamental)",
        englishTerm: "Ground Truth",
        category: "Dados",
        domain: "D3",
        definition: "Os rótulos reais, verificados e confiáveis no conjunto de dados que representam a resposta correta que o modelo supervisionado deve aprender a prever.",
        examContext: "Se o Ground Truth estiver incorreto ou enviesado na Fase III, o modelo aprenderá errado ('Garbage In, Garbage Out')."
      },
      {
        id: "gl-26",
        term: "Guardrails (Barreiras de Proteção)",
        englishTerm: "AI Guardrails",
        category: "Governança",
        domain: "D1",
        definition: "Camadas programáticas de validação aplicadas às entradas (prompts) e saídas de modelos de IA para bloquear conteúdo tóxico, vazamento de PII, alucinações ou ataques de Prompt Injection.",
        examContext: "Indispensáveis na arquitetura de aplicações corporativas baseadas em LLMs e Agentes."
      },
      {
        id: "gl-27",
        term: "Holdout Dataset (Conjunto de Teste Isolado)",
        englishTerm: "Holdout / Test Set",
        category: "Modelagem",
        domain: "D4",
        definition: "Fração do conjunto de dados separada na Fase III e mantida intocada durante todo o treinamento e ajuste de hiperparâmetros, sendo usada apenas na Fase V para avaliar a capacidade real de generalização.",
        examContext: "Garante avaliação honesta e livre de sobreajuste ao conjunto de validação."
      },
      {
        id: "gl-28",
        term: "Human-in-the-Loop (HITL)",
        englishTerm: "Human-in-the-Loop",
        category: "Governança",
        domain: "D1",
        definition: "Modelo operacional em que especialistas humanos revisam, aprovam ou corrigem previsões de baixa confiança ou alto impacto do modelo, retroalimentando o ciclo de aprendizado.",
        examContext: "Mitiga riscos éticos, legais e operacionais em decisões sensíveis."
      },
      {
        id: "gl-29",
        term: "Inter-Annotator Agreement (Concordância entre Anotadores)",
        englishTerm: "Inter-Annotator Agreement (IAA)",
        category: "Dados",
        domain: "D3",
        definition: "Medida estatística de quão consistentemente dois ou mais rotuladores humanos atribuem o mesmo rótulo aos mesmos dados.",
        examContext: "Baixo IAA na Fase III indica que as regras de rotulagem precisam ser esclarecidas com os SMEs antes de treinar modelos."
      },
      {
        id: "gl-30",
        term: "ISO/IEC 42001",
        englishTerm: "ISO/IEC 42001 (AIMS)",
        category: "Governança",
        domain: "D1",
        definition: "Primeiro padrão internacional certificável para Sistemas de Gestão de Inteligência Artificial (AI Management System - AIMS) nas organizações.",
        examContext: "Referência global de governança organizacional e melhoria contínua em IA ao lado do NIST AI RMF."
      },
      {
        id: "gl-31",
        term: "MLOps (Machine Learning Operations)",
        englishTerm: "MLOps",
        category: "Operacionalização",
        domain: "D5",
        definition: "Conjunto de práticas que combina DevOps, Engenharia de Dados e ML para automatizar o versionamento, deploy, monitoramento de drift e re-treinamento contínuo (CI/CD/CT) de modelos em produção.",
        examContext: "Garante que a Fase VI da CPMAI seja sustentável, auditável e escalável."
      },
      {
        id: "gl-32",
        term: "Model Card (Cartão do Modelo)",
        englishTerm: "Model Card",
        category: "Governança",
        domain: "D1",
        definition: "Documento conciso que acompanha um modelo de IA descrevendo seu propósito, arquitetura, dados de treino, métricas de avaliação por grupo demográfico, limitações e recomendações de uso seguro.",
        examContext: "Entregável essencial de transparência entre as Fases V e VI."
      },
      {
        id: "gl-33",
        term: "NIST AI RMF 1.0",
        englishTerm: "NIST AI Risk Management Framework",
        category: "Governança",
        domain: "D1",
        definition: "Framework voluntário para gestão de riscos de IA estruturado em quatro funções fundamentais: Govern (Governar), Map (Mapear), Measure (Medir) e Manage (Gerenciar).",
        examContext: "Altamente cobrado nas questões do Domínio I sobre estruturação de governança e avaliação de riscos."
      },
      {
        id: "gl-34",
        term: "Overfitting (Sobreajuste)",
        englishTerm: "Overfitting",
        category: "Modelagem",
        domain: "D4",
        definition: "Condição em que o modelo ajusta-se excessivamente aos detalhes e ruídos dos dados de treinamento, apresentando excelente performance no treino, mas baixa capacidade de generalização em dados novos.",
        examContext: "Combatido com mais dados, simplificação de features, validação cruzada e regularização."
      },
      {
        id: "gl-35",
        term: "PII (Informações Pessoais Identificáveis)",
        englishTerm: "Personally Identifiable Information (PII)",
        category: "Governança",
        domain: "D1",
        definition: "Qualquer dado que possa identificar direta ou indiretamente um indivíduo (CPF, nome, e-mail, biometria, localização precisa).",
        examContext: "Deve ser identificado na Fase II e anonimizado/mascarado na Fase III para cumprir LGPD/GDPR."
      },
      {
        id: "gl-36",
        term: "Precision (Precisão)",
        englishTerm: "Precision",
        category: "Métricas",
        domain: "D4",
        definition: "Proporção de previsões positivas corretas em relação ao total de previsões positivas feitas pelo modelo: VP / (VP + FP).",
        examContext: "Métrica prioritária quando o custo de um Falso Positivo (alarme falso) é muito elevado."
      },
      {
        id: "gl-37",
        term: "RAG (Retrieval-Augmented Generation)",
        englishTerm: "Retrieval-Augmented Generation",
        category: "IA Generativa",
        domain: "D4",
        definition: "Arquitetura que consulta uma base de conhecimento externa (geralmente via busca vetorial/embeddings) antes de enviar a pergunta ao LLM, ancorando a resposta em documentos reais e atualizados.",
        examContext: "Solução padrão na prova para conectar LLMs a dados corporativos dinâmicos com baixo custo e baixa alucinação."
      },
      {
        id: "gl-38",
        term: "Recall (Sensibilidade / Revocação)",
        englishTerm: "Recall / Sensitivity",
        category: "Métricas",
        domain: "D4",
        definition: "Proporção de casos positivos reais que foram corretamente detectados pelo modelo: VP / (VP + FN).",
        examContext: "Métrica prioritária quando o Falso Negativo (deixar passar uma doença grave ou falha crítica) é inaceitável."
      },
      {
        id: "gl-39",
        term: "Shadow Deployment (Implantação em Modo Sombra)",
        englishTerm: "Shadow Deployment",
        category: "Operacionalização",
        domain: "D5",
        definition: "Técnica de deploy em que o novo modelo processa requisições reais de produção em paralelo ao sistema legado, mas suas saídas são apenas gravadas para análise sem impactar o usuário.",
        examContext: "Escolha mais segura na Fase VI para validar modelos críticos antes de dar poder decisório a eles."
      },
      {
        id: "gl-40",
        term: "Variável Proxy (Proxy Variable)",
        englishTerm: "Proxy Variable",
        category: "Governança",
        domain: "D1",
        definition: "Atributo aparentemente neutro (ex.: CEP, código postal, histórico escolar) que possui forte correlação com um atributo sensível protegido (ex.: raça, renda ou gênero), podendo perpetuar viés discriminatório no modelo.",
        examContext: "Explica por que apenas excluir colunas sensíveis explícitas não elimina o viés algorítmico."
      }
    ],

    /* ----------------------------------------------------------------------
     * CURADORIA DE VÍDEOS, CURSOS E SITES NA WEB (WEB RESOURCES)
     * ---------------------------------------------------------------------- */
    webResources: [
      {
        id: "res-official-pmi",
        category: "Oficial PMI & CPMAI",
        title: "Página Oficial da Certificação PMI-CPMAI™ (PMI.org)",
        provider: "Project Management Institute (PMI)",
        type: "Documentação Oficial",
        url: "https://www.pmi.org/certifications/certified-professional-in-managing-ai-cpmai",
        description: "Página oficial da certificação com acesso ao Exam Content Outline (ECO), regras de elegibilidade, agendamento Pearson VUE e informações do curso oficial de 21 horas.",
        mustRead: true
      },
      {
        id: "res-cognilytica-aitoday",
        category: "Oficial PMI & CPMAI",
        title: "AI Today Podcast — Série Metodologia CPMAI & 7 Patterns of AI",
        provider: "Cognilytica (Kathleen Walch & Ronald Schmelzer)",
        type: "Podcast / Áudio & Artigos",
        url: "https://www.cognilytica.com/ai-today-podcast/",
        description: "Criado pelos autores originais da metodologia CPMAI. Os episódios sobre as 6 Fases da CPMAI, os 7 Padrões de IA e casos reais de falha em projetos de IA são ouro puro para internalizar o mindset da prova.",
        mustRead: true
      },
      {
        id: "res-pmi-genai-courses",
        category: "Cursos Gratuitos PMI",
        title: "Generative AI Overview for Project Managers (Curso Gratuito PMI)",
        provider: "Project Management Institute (PMI)",
        type: "Curso Online",
        url: "https://www.pmi.org/shop/p-/elearning/generative-ai-overview-for-project-managers/el083",
        description: "Curso introdutório oficial do PMI sobre como aplicar IA Generativa na gestão de projetos, alinhado ao vocabulário cobrado pela instituição.",
        mustRead: false
      },
      {
        id: "res-nist-airmf",
        category: "Governança & Regulação (Domínio I)",
        title: "NIST AI Risk Management Framework (AI RMF 1.0 & Playbook)",
        provider: "NIST (U.S. Department of Commerce)",
        type: "Framework Oficial",
        url: "https://www.nist.gov/itl/ai-risk-management-framework",
        description: "Guia oficial das 4 funções (Govern, Map, Measure, Manage) e características de uma IA Confiável (válida, confiável, segura, resiliente, explicável, com privacidade e justa/com viés gerenciado).",
        mustRead: true
      },
      {
        id: "res-eu-ai-act",
        category: "Governança & Regulação (Domínio I)",
        title: "EU Artificial Intelligence Act — Resumo dos Níveis de Risco",
        provider: "Comissão Europeia / EU AI Act Portal",
        type: "Guia Regulatório",
        url: "https://artificialintelligenceact.eu/high-level-summary/",
        description: "Resumo claro da pirâmide de risco do EU AI Act (Risco Inaceitável, Alto Risco, Risco Limitado e Risco Mínimo) e obrigações de transparência para IA de propósito geral (GPAI).",
        mustRead: true
      },
      {
        id: "res-deeplearning-datacentric",
        category: "YouTube & Conceitos Técnicos",
        title: "DeepLearning.AI (Andrew Ng) — Machine Learning Engineering for Production (MLOps) & Data-Centric AI",
        provider: "DeepLearning.AI / YouTube",
        type: "Canal de Vídeo",
        url: "https://www.youtube.com/@Deeplearningai",
        description: "Vídeos de Andrew Ng explicando por que a abordagem Data-Centric AI (melhorar dados e consistência de rótulos na Fase III) supera o ajuste infinito de modelos.",
        mustRead: true
      },
      {
        id: "res-statquest",
        category: "YouTube & Conceitos Técnicos",
        title: "StatQuest with Josh Starmer — Matriz de Confusão, ROC-AUC, Overfitting e Árvores de Decisão",
        provider: "StatQuest / YouTube",
        type: "Canal de Vídeo",
        url: "https://www.youtube.com/@statquest",
        description: "O melhor canal do mundo para entender visualmente e sem dor conceitos como Matriz de Confusão, Precision vs Recall, ROC-AUC, Validação Cruzada, Bias-Variance e algoritmos de ML.",
        mustRead: true
      },
      {
        id: "res-ibm-technology",
        category: "YouTube & Conceitos Técnicos",
        title: "IBM Technology — RAG vs Fine-Tuning, LLMs, Guardrails e Governança de IA",
        provider: "IBM Technology / YouTube",
        type: "Canal de Vídeo",
        url: "https://www.youtube.com/@IBMTechnology",
        description: "Vídeos curtos (5 a 10 minutos) no quadro branco explicando arquiteturas corporativas de IA Generativa, RAG vs Fine-Tuning, MLOps e ética em IA com foco executivo.",
        mustRead: false
      },
      {
        id: "res-google-cloud-tech",
        category: "YouTube & Conceitos Técnicos",
        title: "Google Cloud Tech — MLOps, Feature Store, Model Monitoring & Responsible AI",
        provider: "Google Cloud Tech / YouTube",
        type: "Canal de Vídeo",
        url: "https://www.youtube.com/@GoogleCloudTech",
        description: "Excelente fonte visual para entender pipelines de operacionalização (Fase VI), detecção de Data Drift / Concept Drift e estratégias de deploy (Shadow, Canary, Blue-Green).",
        mustRead: false
      }
    ]
  },

  /* ==========================================================================
   * 4. CRONOGRAMA DETALHADO SEMANA A SEMANA (8 SEMANAS COMPLETAS)
   * ========================================================================== */
  studySchedule: [
    {
      week: 1,
      id: "week-1",
      title: "Semana 1: Fundamentos da Metodologia CPMAI™ v7 e Entendimento do Negócio (Parte 1)",
      subtitle: "Por que projetos de IA falham, diferença entre Software Tradicional e IA, CRISP-DM vs CPMAI e início da Fase I.",
      domainFocus: "Domínio II (26%) — Identificar Necessidades e Soluções de Negócio",
      objective: "Dominar a estrutura das 6 fases iterativas da CPMAI v7, compreender por que o gerenciamento tradicional falha em IA e aprender a avaliar na Fase I quando um problema realmente precisa (ou NÃO precisa) de Inteligência Artificial.",
      suggestedHours: "8 a 10 horas na semana (~1h20 por dia)",
      examTarget: "Realizar o Simulado Dirigido do Domínio II (Modo Tutor) atingindo ≥ 70%.",
      deliverables: [
        "Mapa mental das 6 Fases da CPMAI v7 e seus portões Go/No-Go",
        "Domínio do checklist 'Precisamos mesmo de IA vs Regras/RPA'"
      ],
      tasks: [
        {
          id: "w1-t1",
          day: "Dia 1 (Segunda)",
          title: "Raio-X da Prova PMI-CPMAI™ e o 'PMBOK da IA'",
          description: "Ler a seção Visão Geral do Exame (120 questões, 160 min, pesos dos 5 domínios) e entender como o CPMAI Workbook v7, ECO, CRISP-DM e NIST AI RMF formam a base da prova.",
          type: "theory",
          estimatedMinutes: 60,
          domain: "D2"
        },
        {
          id: "w1-t2",
          day: "Dia 2 (Terça)",
          title: "Software Determinístico vs IA Probabilística (Data-Centric AI)",
          description: "Estudar a tabela comparativa entre SDLC/Agile tradicional e CPMAI v7. Entender por que escopo e viabilidade em IA dependem dos dados e não apenas de código.",
          type: "theory",
          estimatedMinutes: 75,
          domain: "D2"
        },
        {
          id: "w1-t3",
          day: "Dia 3 (Quarta)",
          title: "Visão Geral das 6 Fases Iterativas da CPMAI e Portões Go/No-Go",
          description: "Estudar o fluxo completo da Fase I à Fase VI e memorizar as setas de retorno (quando voltar para uma fase anterior em vez de forçar o avanço).",
          type: "theory",
          estimatedMinutes: 80,
          domain: "D2"
        },
        {
          id: "w1-t4",
          day: "Dia 4 (Quinta)",
          title: "Fase I (Business Understanding): Triagem de Viabilidade de IA",
          description: "Analisar cenários de prova onde a resposta correta é NÃO usar IA (preferindo automação por regras/RPA) e como definir KPIs de negócio antes de métricas técnicas.",
          type: "practice",
          estimatedMinutes: 75,
          domain: "D2"
        },
        {
          id: "w1-t5",
          day: "Dia 5 (Sexta)",
          title: "Construção do Business Case de IA: ROI e Custo Total de Propriedade (TCO)",
          description: "Estudar os custos ocultos de projetos de IA (aquisição/rotulagem de dados, GPUs, custo de inferência/tokens em produção, monitoramento de drift e re-treinamento).",
          type: "theory",
          estimatedMinutes: 70,
          domain: "D2"
        },
        {
          id: "w1-t6",
          day: "Dia 6 (Sábado)",
          title: "Flashcards da Semana 1 + Prática Dirigida",
          description: "Revisar os flashcards de Metodologia CPMAI e Negócios, e resolver as primeiras questões situacionais de Fase I no Modo Tutor.",
          type: "quiz",
          estimatedMinutes: 90,
          domain: "D2"
        }
      ]
    },
    {
      week: 2,
      id: "week-2",
      title: "Semana 2: Os 7 Padrões de IA e Decomposição Iterativa (Domínio II Completo)",
      subtitle: "Dominando a taxonomia oficial dos 7 Padrões de IA e como decompor projetos complexos em entregas iterativas.",
      domainFocus: "Domínio II (26%) — Identificar Necessidades e Soluções de Negócio",
      objective: "Identificar instantaneamente qual dos 7 Padrões de IA se aplica a qualquer estudo de caso da prova, saber combiná-los sem cair na armadilha do projeto monolítico ('Big Bang') e concluir o Domínio II.",
      suggestedHours: "8 a 10 horas na semana",
      examTarget: "Concluir o Simulado Dirigido do Domínio II com aproveitamento ≥ 80%.",
      deliverables: [
        "Quadro resumo dos 7 Padrões de IA (Definição, Casos de Uso, Métricas e Armadilhas)",
        "Bateria completa do Domínio II resolvida e revisada"
      ],
      tasks: [
        {
          id: "w2-t1",
          day: "Dia 1 (Segunda)",
          title: "Padrões 1, 2 e 3: Hiperpersonalização, Sistemas Autônomos e Análise Preditiva",
          description: "Estudar a diferença entre 'Segmento de Um' (Padrão 1), autonomia com ação direta (Padrão 2) e suporte à decisão humana (Padrão 3).",
          type: "theory",
          estimatedMinutes: 80,
          domain: "D2"
        },
        {
          id: "w2-t2",
          day: "Dia 2 (Terça)",
          title: "Padrões 4, 5, 6 e 7: Conversação, Padrões/Anomalias, Reconhecimento e Objetivos",
          description: "Dominar os casos de uso, algoritmos típicos e armadilhas de prova de NLP/LLMs (Padrão 4), Fraude/Outliers (Padrão 5), Visão/Áudio (Padrão 6) e Reforço (Padrão 7).",
          type: "theory",
          estimatedMinutes: 85,
          domain: "D2"
        },
        {
          id: "w2-t3",
          day: "Dia 3 (Quarta)",
          title: "Combinação de Padrões e Decomposição em 'Bite-Sized Chunks'",
          description: "Aprender como a prova cobra projetos que envolvem múltiplos padrões de IA (ex.: carro autônomo ou atendimento omnichannel) priorizando entregas incrementais.",
          type: "practice",
          estimatedMinutes: 70,
          domain: "D2"
        },
        {
          id: "w2-t4",
          day: "Dia 4 (Quinta)",
          title: "Prontidão Organizacional, Stakeholders, SMEs e Gate Go/No-Go da Fase I",
          description: "Estudar o papel crítico dos Especialistas de Domínio (SMEs), patrocinadores executivos e critérios de parada na Fase I.",
          type: "theory",
          estimatedMinutes: 65,
          domain: "D2"
        },
        {
          id: "w2-t5",
          day: "Dia 5 (Sexta)",
          title: "Simulado Dirigido: Domínio II (Necessidades e Soluções de Negócio)",
          description: "Realizar a bateria completa de questões focadas no Domínio II (26% da prova) e analisar cada justificativa de gabarito.",
          type: "quiz",
          estimatedMinutes: 90,
          domain: "D2"
        },
        {
          id: "w2-t6",
          day: "Dia 6 (Sábado)",
          title: "Revisão do Caderno de Erros do Domínio II",
          description: "Rever todas as questões marcadas ou erradas na semana e consolidar os 7 Padrões de IA nos Flashcards.",
          type: "review",
          estimatedMinutes: 60,
          domain: "D2"
        }
      ]
    },
    {
      week: 3,
      id: "week-3",
      title: "Semana 3: IA Responsável, Confiável, Ética e Governança Global (Domínio I Completo)",
      subtitle: "Mitigação de vieses, Explicabilidade (XAI), Privacidade (PII), NIST AI RMF 1.0, EU AI Act e ISO/IEC 42001.",
      domainFocus: "Domínio I (15%) — Apoiar Iniciativas de IA Responsável e Confiável",
      objective: "Dominar as exigências éticas, legais e de governança transversal cobradas no Domínio I, aprendendo a identificar vieses ocultos (variáveis proxy), escolher o nível certo de XAI e aplicar o NIST AI RMF e o EU AI Act.",
      suggestedHours: "8 a 10 horas na semana",
      examTarget: "Concluir o Simulado Dirigido do Domínio I com aproveitamento ≥ 80%.",
      deliverables: [
        "Domínio das 4 funções do NIST AI RMF (Govern, Map, Measure, Manage) e pirâmide do EU AI Act",
        "Checklist de mitigação de vieses, XAI e proteção de PII"
      ],
      tasks: [
        {
          id: "w3-t1",
          day: "Dia 1 (Segunda)",
          title: "Tipos de Viés (Bias) em IA e a Armadilha das Variáveis Proxy",
          description: "Estudar viés histórico, de representação/amostragem, de medição e de confirmação. Entender por que apenas apagar a coluna 'gênero/raça' não elimina o viés.",
          type: "theory",
          estimatedMinutes: 75,
          domain: "D1"
        },
        {
          id: "w3-t2",
          day: "Dia 2 (Terça)",
          title: "Explicabilidade (XAI), Interpretabilidade e Trade-off Caixa-Preta vs Caixa-Branca",
          description: "Quando exigir modelos intrinsecamente interpretáveis vs quando usar SHAP/LIME em modelos complexos. Impacto em setores regulados (saúde, finanças, justiça).",
          type: "theory",
          estimatedMinutes: 75,
          domain: "D1"
        },
        {
          id: "w3-t3",
          day: "Dia 3 (Quarta)",
          title: "NIST AI RMF 1.0 (Govern, Map, Measure, Manage) e ISO/IEC 42001",
          description: "Memorizar as 4 funções do NIST AI RMF e como elas se conectam às 6 fases da CPMAI, além da documentação via Model Cards e Datasheets for Datasets.",
          type: "theory",
          estimatedMinutes: 80,
          domain: "D1"
        },
        {
          id: "w3-t4",
          day: "Dia 4 (Quinta)",
          title: "EU AI Act (4 Níveis de Risco), Privacidade (LGPD/GDPR) e Segurança em IA",
          description: "Estudar a classificação de risco da União Europeia, proteção de PII (anonimização vs pseudonimização), ataques adversariais, Data Poisoning e Prompt Injection.",
          type: "theory",
          estimatedMinutes: 80,
          domain: "D1"
        },
        {
          id: "w3-t5",
          day: "Dia 5 (Sexta)",
          title: "Supervisão Humana (HITL vs HOTL) + Simulado Dirigido do Domínio I",
          description: "Estudar os modelos de intervenção humana e resolver a bateria completa de questões do Domínio I (IA Responsável e Confiável).",
          type: "quiz",
          estimatedMinutes: 90,
          domain: "D1"
        },
        {
          id: "w3-t6",
          day: "Dia 6 (Sábado)",
          title: "Auditoria de Erros (Domínios I e II)",
          description: "Revisar todas as questões do Caderno de Erros acumuladas até aqui e praticar os Flashcards de Governança.",
          type: "review",
          estimatedMinutes: 60,
          domain: "D1"
        }
      ]
    },
    {
      week: 4,
      id: "week-4",
      title: "Semana 4: Fase II (Data Understanding) — Descoberta, Qualidade e Governança de Dados",
      subtitle: "Iniciando o Domínio III (26% da prova): fontes de dados, EDA, os 6 pilares de qualidade e o Gate Go/No-Go da Fase II.",
      domainFocus: "Domínio III (26%) — Identificar as Necessidades de Dados (Parte 1)",
      objective: "Saber avaliar se os dados existentes são acessíveis, legais, representativos e suficientes para o projeto, diagnosticando quando acionar o No-Go na Fase II e retornar à Fase I.",
      suggestedHours: "8 a 10 horas na semana",
      examTarget: "Atingir ≥ 75% nos exercícios práticos de Fase II e Qualidade de Dados.",
      deliverables: [
        "Domínio dos 6 pilares de qualidade de dados e análise exploratória (EDA)",
        "Mapeamento de cenários de retorno da Fase II para a Fase I"
      ],
      tasks: [
        {
          id: "w4-t1",
          day: "Dia 1 (Segunda)",
          title: "Fase II (Data Understanding): Tipos e Fontes de Dados para IA",
          description: "Dados estruturados, semiestruturados e não estruturados; ingestão em lote (Batch) vs tempo real (Streaming); dados internos vs externos/terceiros.",
          type: "theory",
          estimatedMinutes: 70,
          domain: "D3"
        },
        {
          id: "w4-t2",
          day: "Dia 2 (Terça)",
          title: "Os 6 Pilares de Qualidade de Dados e Análise Exploratória (EDA)",
          description: "Completude, Consistência, Acurácia, Atualidade (Timeliness), Validade e Unicidade. Como identificar problemas antes de tentar preparar ou modelar.",
          type: "theory",
          estimatedMinutes: 75,
          domain: "D3"
        },
        {
          id: "w4-t3",
          day: "Dia 3 (Quarta)",
          title: "Governança de Dados, Linhagem (Data Lineage), Soberania e Direitos de Uso",
          description: "Verificar se a empresa possui consentimento e licença legal para treinar modelos com determinados dados (copyright, PII, segredo industrial e residência geográfica).",
          type: "theory",
          estimatedMinutes: 75,
          domain: "D3"
        },
        {
          id: "w4-t4",
          day: "Dia 4 (Quinta)",
          title: "Critérios de Go/No-Go da Fase II e Quando Voltar à Fase I",
          description: "Estudar cenários de prova onde os dados estão inacessíveis, em silos políticos ou não contêm o sinal necessário, exigindo retorno imediato à Fase I.",
          type: "practice",
          estimatedMinutes: 70,
          domain: "D3"
        },
        {
          id: "w4-t5",
          day: "Dia 5 (Sexta)",
          title: "Dados Sintéticos e Aumento de Dados (Data Augmentation): Quando Usar e Riscos",
          description: "Entender quando dados sintéticos ajudam (privacidade, eventos raros, visão computacional) e quando são perigosos (não substituem dados reais inexistentes na Fase II).",
          type: "theory",
          estimatedMinutes: 65,
          domain: "D3"
        },
        {
          id: "w4-t6",
          day: "Dia 6 (Sábado)",
          title: "Prática de Questões de Fase II + Revisão de Flashcards",
          description: "Resolver questões situacionais sobre descoberta e qualidade de dados no Modo Tutor.",
          type: "quiz",
          estimatedMinutes: 80,
          domain: "D3"
        }
      ]
    },
    {
      week: 5,
      id: "week-5",
      title: "Semana 5: Fase III (Data Preparation) — Rotulagem, Feature Engineering e Data Leakage",
      subtitle: "Concluindo o Domínio III (26%): limpeza, Ground Truth, classes desbalanceadas e divisão Treino/Validação/Teste.",
      domainFocus: "Domínio III (26%) — Identificar as Necessidades de Dados (Parte 2)",
      objective: "Dominar a fase que mais consome tempo nos projetos reais de IA (Fase III), garantindo excelência na rotulagem de dados, engenharia de atributos e prevenção absoluta de Data Leakage.",
      suggestedHours: "9 a 10 horas na semana",
      examTarget: "Concluir o Simulado Dirigido do Domínio III com aproveitamento ≥ 80% e realizar o 1º Simulado Completo.",
      deliverables: [
        "Checklist anti-Data Leakage memorizado",
        "Domínio de Ground Truth, Inter-Annotator Agreement e balanceamento de classes"
      ],
      tasks: [
        {
          id: "w5-t1",
          day: "Dia 1 (Segunda)",
          title: "Limpeza de Dados (Data Cleansing): Nulos, Outliers e Padronização",
          description: "Estratégias corretas para tratar valores ausentes (imputação vs exclusão) e outliers (erro de sensor vs anomalia real que queremos detectar!).",
          type: "theory",
          estimatedMinutes: 75,
          domain: "D3"
        },
        {
          id: "w5-t2",
          day: "Dia 2 (Terça)",
          title: "Rotulagem de Dados (Data Labeling), Ground Truth e Inter-Annotator Agreement",
          description: "Como organizar projetos de anotação com SMEs, crowdsourcing e rotulagem assistida, medindo a concordância entre anotadores para garantir qualidade.",
          type: "theory",
          estimatedMinutes: 75,
          domain: "D3"
        },
        {
          id: "w5-t3",
          day: "Dia 3 (Quarta)",
          title: "Feature Engineering, Seleção de Atributos e Classes Desbalanceadas (SMOTE)",
          description: "Como transformar dados brutos em variáveis preditivas poderosas e como lidar com classes raras (Oversampling, Undersampling, pesos de classe).",
          type: "theory",
          estimatedMinutes: 80,
          domain: "D3"
        },
        {
          id: "w5-t4",
          day: "Dia 4 (Quinta)",
          title: "Divisão Treino / Validação / Teste e os 3 Tipos de Data Leakage",
          description: "Estudo profundo de Target Leakage (anacronismo temporal), vazamento na normalização pré-split e vazamento em séries temporais/grupos.",
          type: "theory",
          estimatedMinutes: 80,
          domain: "D3"
        },
        {
          id: "w5-t5",
          day: "Dia 5 (Sexta)",
          title: "Simulado Dirigido: Domínio III (Necessidades de Dados)",
          description: "Resolver a bateria completa do Domínio III e revisar detalhadamente cada alternativa.",
          type: "quiz",
          estimatedMinutes: 90,
          domain: "D3"
        },
        {
          id: "w5-t6",
          day: "Dia 6 (Sábado)",
          title: "1º Simulado no Formato da Prova (Diagnóstico Geral)",
          description: "Realizar o Simulado Completo 1 para testar resistência e medir seu domínio atual nos 52% da prova já estudados (Domínios I, II e III).",
          type: "exam",
          estimatedMinutes: 120,
          domain: "ALL"
        }
      ]
    },
    {
      week: 6,
      id: "week-6",
      title: "Semana 6: Desenvolvimento e Avaliação de Modelos — ML, GenAI/RAG e Matriz de Confusão",
      subtitle: "Domínio IV Completo (16%): Fase IV (Model Development) e Fase V (Model Evaluation).",
      domainFocus: "Domínio IV (16%) — Gerenciar o Desenvolvimento e Avaliação de Modelos de IA",
      objective: "Saber selecionar algoritmos (Supervisionado, Não Supervisionado, Reforço, DL, RAG vs Fine-Tuning), combater Overfitting/Underfitting e dominar completamente a Matriz de Confusão (Precision vs Recall vs F1).",
      suggestedHours: "9 a 10 horas na semana",
      examTarget: "Concluir o Simulado Dirigido do Domínio IV com ≥ 80% e realizar o 2º Simulado no Formato da Prova.",
      deliverables: [
        "Domínio absoluto de quando escolher Recall vs Precision vs F1-Score vs RMSE",
        "Árvore de decisão rápida: Prompt Engineering vs RAG vs Fine-Tuning"
      ],
      tasks: [
        {
          id: "w6-t1",
          day: "Dia 1 (Segunda)",
          title: "Fase IV: Seleção de Algoritmos (Supervisionado, Não Supervisionado, Reforço e DL)",
          description: "Estudar o Guia Técnico Sem Código: Classificação vs Regressão, Clustering, Redução de Dimensionalidade, Transfer Learning e criação do Modelo Baseline.",
          type: "theory",
          estimatedMinutes: 85,
          domain: "D4"
        },
        {
          id: "w6-t2",
          day: "Dia 2 (Terça)",
          title: "Arquitetura de IA Generativa: Prompting, RAG vs Fine-Tuning e Guardrails",
          description: "Dominar os critérios de escolha entre RAG e Fine-Tuning na prova, controle de Temperatura, Embeddings, Red Teaming e prevenção de alucinações.",
          type: "theory",
          estimatedMinutes: 85,
          domain: "D4"
        },
        {
          id: "w6-t3",
          day: "Dia 3 (Quarta)",
          title: "Overfitting vs Underfitting, Validação Cruzada (k-fold) e Ajuste de Hiperparâmetros",
          description: "Como diagnosticar viés vs variância pelas métricas de treino e validação, regularização e quando parar de mexer no modelo e voltar à Fase III (Data-Centric).",
          type: "theory",
          estimatedMinutes: 75,
          domain: "D4"
        },
        {
          id: "w6-t4",
          day: "Dia 4 (Quinta)",
          title: "Fase V: Matriz de Confusão, Precision, Recall, F1, ROC-AUC, MAE e RMSE",
          description: "Treinar intensivamente cenários de negócio onde Falso Negativo é fatal (Recall) vs onde Falso Positivo é inaceitável (Precision), e o Gate Go/No-Go da Fase V.",
          type: "practice",
          estimatedMinutes: 90,
          domain: "D4"
        },
        {
          id: "w6-t5",
          day: "Dia 5 (Sexta)",
          title: "Simulado Dirigido: Domínio IV (Desenvolvimento e Avaliação de Modelos)",
          description: "Resolver a bateria completa do Domínio IV e revisar o Caderno de Erros.",
          type: "quiz",
          estimatedMinutes: 90,
          domain: "D4"
        },
        {
          id: "w6-t6",
          day: "Dia 6 (Sábado)",
          title: "2º Simulado no Formato da Prova",
          description: "Realizar o Simulado Completo 2 no Modo Exame Real e comparar sua evolução por domínio.",
          type: "exam",
          estimatedMinutes: 120,
          domain: "ALL"
        }
      ]
    },
    {
      week: 7,
      id: "week-7",
      title: "Semana 7: Operacionalização da Solução de IA — Deploy, MLOps, Drift e Adoção",
      subtitle: "Domínio V Completo (17%): Fase VI (Model Operationalization) e o ciclo contínuo pós-produção.",
      domainFocus: "Domínio V (17%) — Operacionalizar a Solução de IA",
      objective: "Fechar 100% do edital dominando estratégias de implantação segura (Shadow, Canary, Blue-Green, A/B), MLOps, diagnóstico de Data Drift vs Concept Drift, gestão de mudanças e descomissionamento de modelos.",
      suggestedHours: "9 a 10 horas na semana",
      examTarget: "Concluir o Simulado Dirigido do Domínio V com ≥ 80% e realizar os Simulados Completos 3 e 4.",
      deliverables: [
        "Quadro comparativo das 4 estratégias de Deploy e Data Drift vs Concept Drift",
        "100% dos 5 Domínios do ECO estudados e praticados"
      ],
      tasks: [
        {
          id: "w7-t1",
          day: "Dia 1 (Segunda)",
          title: "Estratégias de Implantação: Shadow, Canary, Blue-Green e A/B Testing",
          description: "Aprender a escolher a estratégia de deploy ideal na prova de acordo com o risco operacional, necessidade de rollback e validação estatística.",
          type: "theory",
          estimatedMinutes: 80,
          domain: "D5"
        },
        {
          id: "w7-t2",
          day: "Dia 2 (Terça)",
          title: "MLOps (CI/CD/CT), Feature Store, Model Registry e Cloud vs Edge AI",
          description: "Estudar a infraestrutura de operação contínua, prevenção de Training-Serving Skew e critérios para rodar modelos na borda (Edge) vs nuvem.",
          type: "theory",
          estimatedMinutes: 75,
          domain: "D5"
        },
        {
          id: "w7-t3",
          day: "Dia 3 (Quarta)",
          title: "Monitoramento Pós-Produção: Model Decay, Data Drift vs Concept Drift",
          description: "Diferenciar com precisão cirúrgica Data Drift de Concept Drift e saber para qual fase da CPMAI iterar quando a performance em produção cai.",
          type: "theory",
          estimatedMinutes: 80,
          domain: "D5"
        },
        {
          id: "w7-t4",
          day: "Dia 4 (Quinta)",
          title: "Gestão de Mudanças (Change Management), Adoção Humana e Aposentadoria do Modelo",
          description: "Como superar a resistência dos usuários finais, integrar o modelo ao fluxo de trabalho e quando desativar (decommission/retire) um modelo obsoleto.",
          type: "theory",
          estimatedMinutes: 70,
          domain: "D5"
        },
        {
          id: "w7-t5",
          day: "Dia 5 (Sexta)",
          title: "Simulado Dirigido: Domínio V (Operacionalizar a Solução de IA)",
          description: "Resolver a bateria completa do Domínio V e zerar dúvidas sobre a Fase VI.",
          type: "quiz",
          estimatedMinutes: 90,
          domain: "D5"
        },
        {
          id: "w7-t6",
          day: "Dia 6 (Sábado)",
          title: "3º e 4º Simulados no Formato da Prova",
          description: "Realizar os Simulados Completos 3 e 4 para consolidar a integração entre todos os 5 domínios.",
          type: "exam",
          estimatedMinutes: 150,
          domain: "ALL"
        }
      ]
    },
    {
      week: 8,
      id: "week-8",
      title: "Semana 8: Reta Final — Maratona de Simulados, Caderno de Erros e Mindset Pearson VUE",
      subtitle: "Lapidação final de velocidade (1m20s/questão), eliminação de pontos cegos e preparação para o dia do exame.",
      domainFocus: "Todos os 5 Domínios do ECO (Revisão Integrada 100%)",
      objective: "Atingir média consistente ≥ 80% nos simulados finais sob condição estrita de tempo, zerar o Caderno de Erros e dominar as 15 Regras de Ouro do Mindset PMI-CPMAI.",
      suggestedHours: "10 a 12 horas na semana",
      examTarget: "Atingir ≥ 80% nos Simulados 5 e 6 (Simulação Oficial Completa) e zerar o Caderno de Erros.",
      deliverables: [
        "Caderno de Erros 100% revisado e dominado",
        "Check-in técnico e logístico pronto para o exame na Pearson VUE"
      ],
      tasks: [
        {
          id: "w8-t1",
          day: "Dia 1 (Segunda)",
          title: "Leitura Ativa das 15 Regras de Ouro do Mindset PMI-CPMAI e Armadilhas de Prova",
          description: "Revisar a seção 'Dicas & Mindset' focando em como eliminar distratores rapidamente e identificar palavras-chave no enunciado ('PRIMEIRO', 'MELHOR', 'EVITAR').",
          type: "review",
          estimatedMinutes: 75,
          domain: "ALL"
        },
        {
          id: "w8-t2",
          day: "Dia 2 (Terça)",
          title: "5º Simulado no Formato da Prova (Modo Exame Real Cronometrado)",
          description: "Executar o Simulado 5 sem pausas, treinando o ritmo de 80 segundos por questão e a técnica de marcação para revisão.",
          type: "exam",
          estimatedMinutes: 130,
          domain: "ALL"
        },
        {
          id: "w8-t3",
          day: "Dia 3 (Quarta)",
          title: "Operação Limpeza no Caderno de Erros + Revisão Geral do Glossário",
          description: "Gerar um simulado personalizado apenas com as questões do seu Caderno de Erros e Favoritas até acertar 100% delas compreendendo o racional.",
          type: "review",
          estimatedMinutes: 90,
          domain: "ALL"
        },
        {
          id: "w8-t4",
          day: "Dia 4 (Quinta)",
          title: "6º Simulado Oficial Completo (Prova Geral de Fogo - 120 Questões / 160 Min)",
          description: "Realizar o Grande Simulado Completo 6 simulando exatamente a experiência real da Pearson VUE de ponta a ponta.",
          type: "exam",
          estimatedMinutes: 160,
          domain: "ALL"
        },
        {
          id: "w8-t5",
          day: "Dia 5 (Sexta)",
          title: "Revisão Leve de Flashcards (28 Cartões) e Tabelas de Retorno de Fase CPMAI",
          description: "Passar pelos 28 flashcards, revisar os pesos dos domínios e as condições de Go/No-Go das 6 fases sem estresse cognitivo.",
          type: "review",
          estimatedMinutes: 60,
          domain: "ALL"
        },
        {
          id: "w8-t6",
          day: "Dia 6 (Sábado / Véspera)",
          title: "Checklist Logístico Pearson VUE (System Test / Documento) e Descanso Mental",
          description: "Testar equipamento (se OnVUE online) ou conferir rota (se Test Center), separar documento oficial com foto, descansar a mente e confiar na sua preparação!",
          type: "review",
          estimatedMinutes: 45,
          domain: "ALL"
        }
      ]
    }
  ],

  /* ==========================================================================
   * 5. DICAS DE OURO E O "MINDSET PMI-CPMAI™" (EXAM TIPS & GOLDEN RULES)
   * ========================================================================== */
  examTips: {
    title: "O Mindset PMI-CPMAI™: 15 Regras de Ouro para Acertar Questões Difíceis",
    subtitle: "Como pensar exatamente como os elaboradores da prova do PMI, evitar as armadilhas clássicas que reprovam gestores experientes e controlar os 160 minutos na Pearson VUE.",
    introduction: "Na prova PMI-CPMAI™, raramente você encontrará uma questão pedindo uma definição decorada de dicionário. Quase todas as 120 questões apresentam uma situação prática em que algo deu errado ou uma decisão estratégica precisa ser tomada. Quem tenta responder com a intuição de 'projetos de software tradicional' erra; quem aplica as 15 Regras de Ouro do Mindset CPMAI abaixo elimina duas ou três alternativas incorretas em segundos.",
    goldenRules: [
      {
        number: 1,
        title: "Negócio Sempre Vem Antes da Tecnologia (Business First!)",
        rule: "Nunca inicie coleta de dados, compre ferramentas ou escolha algoritmos antes de definir claramente o problema de negócio e os KPIs de sucesso na Fase I.",
        wrongThinking: "Comprar GPUs ou contratar cientistas de dados para 'ver o que conseguimos descobrir no nosso Data Lake'.",
        rightMindset: "Todo projeto de IA começa na Fase I (Business Understanding) com um problema claro, avaliação de ROI/TCO e alinhamento estratégico.",
        examExample: "Se um stakeholder pede para 'usar Deep Learning ou GenAI', a primeira ação do gestor é entender qual problema de negócio ele quer resolver."
      },
      {
        number: 2,
        title: "Pergunte Sempre: 'Precisamos Mesmo de IA?'",
        rule: "Se o processo segue regras fixas, determinísticas e bem conhecidas, a resposta correta na prova é NÃO usar Machine Learning.",
        wrongThinking: "Usar IA para tudo porque o patrocinador tem orçamento e quer inovação.",
        rightMindset: "Use software tradicional, automação baseada em regras ou RPA para tarefas determinísticas; reserve a IA para problemas probabilísticos, complexos e orientados a padrões.",
        examExample: "Cálculo de impostos com regras fixas ou transferência de campos padronizados entre planilhas → recomende RPA/Regras na Fase I."
      },
      {
        number: 3,
        title: "Pense de Forma Data-Centric (Dados > Ajustes de Algoritmo)",
        rule: "Quando um modelo apresenta baixo desempenho na Fase IV ou V, a causa raiz quase sempre está na qualidade, representatividade ou rotulagem dos DADOS (Fases II e III), e não na falta de um algoritmo mais exótico.",
        wrongThinking: "Trocar de Random Forest para uma Rede Neural de 100 camadas quando os dados estão cheios de ruído e rótulos inconsistentes.",
        rightMindset: "Voltar à Fase III (Data Preparation) para auditar o Ground Truth com SMEs, limpar ruídos e melhorar a Engenharia de Atributos.",
        examExample: "Dois modelos diferentes erram os mesmos casos → pare o tuning de hiperparâmetros e inspecione os rótulos na Fase III."
      },
      {
        number: 4,
        title: "Domine a Arte de Voltar de Fase nos Portões Go/No-Go",
        rule: "Na metodologia CPMAI, recuar para uma fase anterior não é fracasso: é a decisão gerencial correta quando um pré-requisito fundamental falha.",
        wrongThinking: "Seguir em frente para cumprir o cronograma mesmo sabendo que os dados não existem ou que o modelo reprovou na avaliação.",
        rightMindset: "Sem dados viáveis na Fase II → volte à Fase I. Dados sujos/vazados na Fase IV/V → volte à Fase III. Mudança na estratégia de negócio na Fase V/VI → volte à Fase I.",
        examExample: "Questões sobre Go/No-Go premiam a alternativa que interrompe o avanço prematuro e retorna exatamente à fase onde nasceu o problema."
      },
      {
        number: 5,
        title: "Decomponha Visões Gigantes em Entregas Iterativas ('Bite-Sized Chunks')",
        rule: "Quando o cliente pedir uma solução monumental combinando vários Padrões de IA ao mesmo tempo, divida em iterações menores começando pelo padrão de maior valor e menor risco.",
        wrongThinking: "Planejar um cronograma monolítico de 2 anos entregando Reconhecimento + Conversação + Autonomia tudo de uma vez no final.",
        rightMindset: "Aplicar ciclos iterativos da CPMAI: entregar e validar o primeiro padrão em produção, colher aprendizado e expandir nas iterações seguintes.",
        examExample: "Em projetos multi-padrão, escolha a alternativa que prioriza um MVP focado em um padrão primário viável."
      },
      {
        number: 6,
        title: "Recall vs Precision: Avalie Sempre o Custo do Erro para o Negócio",
        rule: "Se deixar passar um caso positivo (Falso Negativo) for perigoso ou caríssimo, escolha RECALL. Se dar um alarme falso (Falso Positivo) for inaceitável, escolha PRECISION.",
        wrongThinking: "Escolher sempre a alternativa que fala em 'maximizar a Acurácia global'.",
        rightMindset: "Saúde grave, segurança física, rachadura estrutural, fraude crítica = Recall. Filtro de spam, bloqueio definitivo de cliente = Precision. Equilíbrio em classes desbalanceadas = F1-Score.",
        examExample: "Em qualquer questão com classes raras (< 5% da amostra), descarte imediatamente a alternativa que usa Acurácia como métrica única."
      },
      {
        number: 7,
        title: "Para Dados Corporativos Dinâmicos em LLMs, Prefira RAG a Fine-Tuning",
        rule: "Quando o cenário exigir que um LLM responda sobre documentos internos que mudam com frequência, cite fontes e reduza alucinações com baixo custo, a resposta certa é RAG.",
        wrongThinking: "Fazer Fine-Tuning do LLM toda semana ou treinar um LLM próprio do zero para ler manuais da empresa.",
        rightMindset: "Prompt Engineering para ajustes simples → RAG para conhecimento factual dinâmico e citação de fontes → Fine-Tuning apenas para estilo, tom ou formato específico.",
        examExample: "Chatbot de políticas internas ou suporte técnico atualizado diariamente → escolha RAG."
      },
      {
        number: 8,
        title: "Previna Data Leakage Isolando o Conjunto de Teste Antes de Tudo",
        rule: "Qualquer transformação estatística (normalização, imputação pela média, SMOTE/oversampling) deve ser calculada APENAS no conjunto de Treinamento DEPOIS da divisão Treino/Validação/Teste.",
        wrongThinking: "Normalizar ou balancear a tabela inteira no começo da Fase III e só depois dividir 80% treino e 20% teste.",
        rightMindset: "Separar o Holdout/Teste primeiro e nunca usar variáveis que só existem após o evento acontecer (Target Leakage).",
        examExample: "Modelo com 99,9% de acerto no teste e péssimo resultado em produção → suspeite imediatamente de Data Leakage na Fase III."
      },
      {
        number: 9,
        title: "Transparência, Explicabilidade e Ética Não São Opcionais (Domínio I)",
        rule: "Em decisões de Alto Risco (crédito, contratação, saúde, justiça), a capacidade de explicar a decisão (XAI) e provar ausência de viés supera ganhos marginais de acurácia em modelos caixa-preta.",
        wrongThinking: "Implantar uma rede neural inexplicável em um banco porque ela tem 2% a mais de precisão que um modelo auditável.",
        rightMindset: "Cumprir EU AI Act, NIST AI RMF e LGPD/GDPR desde a Fase I; auditar variáveis proxy e documentar tudo em Model Cards.",
        examExample: "Se o regulador exige explicação individual por decisão, use modelos interpretáveis ou técnicas XAI (SHAP/LIME) validadas pelo compliance."
      },
      {
        number: 10,
        title: "Em Cenários de Alto Risco na Fase VI, Valide Primeiro com Shadow Deployment",
        rule: "Quando um erro do novo modelo em produção puder causar dano grave (físico, médico ou financeiro severo), implante primeiro em Modo Sombra (Shadow Mode).",
        wrongThinking: "Fazer substituição total imediata ou Teste A/B direto expondo metade dos pacientes/clientes ao risco sem validação real prévia.",
        rightMindset: "Shadow Mode (risco zero, roda em paralelo sem afetar o usuário) → Canary Release (1% a 5% com monitoramento) → Rollout completo com plano de rollback.",
        examExample: "Triagem hospitalar ou controle industrial crítico indo para produção pela primeira vez → escolha Shadow Deployment."
      },
      {
        number: 11,
        title: "A Fase VI Nunca é o Fim: Monitore Data Drift e Concept Drift",
        rule: "Modelos de IA degradam no mundo real (Model Decay). Um projeto CPMAI em produção exige MLOps, monitoramento contínuo e gatilhos para novas iterações.",
        wrongThinking: "Encerrar e desmobilizar toda a governança do modelo no dia seguinte ao Go-Live, como em um projeto tradicional.",
        rightMindset: "Monitorar continuamente entradas (Data Drift), relação entrada-saída (Concept Drift) e KPIs de negócio para re-treinar ou aposentar o modelo.",
        examExample: "Queda repentina de performance após mudança econômica ou comportamental dos clientes → diagnosticar Concept Drift e iniciar nova iteração CPMAI."
      },
      {
        number: 12,
        title: "Nunca Ignore os Especialistas de Domínio (SMEs) e os Usuários Finais",
        rule: "Cientistas de dados não trabalham sozinhos no vácuo: os SMEs (médicos, engenheiros, analistas de fraude) são indispensáveis nas Fases I, II, III e V.",
        wrongThinking: "Deixar os cientistas de dados adivinharem sozinhos o que significa cada coluna do banco ou criarem rótulos sem conhecer o negócio.",
        rightMindset: "Envolver SMEs para definir o problema (Fase I), validar regras de rotulagem e features (Fase III), interpretar erros (Fase V) e liderar a adoção/Change Management (Fase VI).",
        examExample: "Se os usuários finais estão ignorando as recomendações do modelo em produção, faltou engajamento precoce, XAI e Change Management."
      },
      {
        number: 13,
        title: "Sempre Crie um Modelo Baseline Simples na Fase IV",
        rule: "Antes de treinar algoritmos complexos e caros, estabeleça uma linha de base simples (Baseline) para ter um referencial claro de comparação.",
        wrongThinking: "Começar direto pelo modelo mais complexo e pesado disponível no mercado.",
        rightMindset: "Comece simples (Baseline), meça o ganho incremental de modelos mais sofisticados e só adote complexidade se o ganho justificar o custo e a perda de interpretabilidade.",
        examExample: "Na Fase IV, a primeira referência de comparação de um modelo candidato deve ser o Baseline Model."
      },
      {
        number: 14,
        title: "Supervisão Humana (HITL) é a Melhor Resposta para Incerteza e Casos Limítrofes",
        rule: "Quando o modelo tiver baixa confiança (Confidence Score baixo) em uma previsão específica ou quando a decisão tiver impacto irreversível sobre pessoas, escale para um humano (Human-in-the-Loop).",
        wrongThinking: "Forçar o modelo a decidir sozinho mesmo quando o score de confiança está próximo de 50%, ou descartar toda a solução de IA por causa de 5% de casos difíceis.",
        rightMindset: "Automatizar os casos de alta confiança dentro dos Guardrails e rotear casos limítrofes para revisão humana (que também gera novos rótulos valiosos!).",
        examExample: "Chatbot corporativo ou sistema de aprovação que encontra um caso fora do padrão → acionar fluxo Human-in-the-Loop."
      },
      {
        number: 15,
        title: "Leia a Última Frase do Enunciado Primeiro e Caçe os Qualificadores",
        rule: "Muitas questões trazem um parágrafo longo de contexto. Leia primeiro a pergunta final para saber se o PMI pede o que fazer 'PRIMEIRO', 'A SEGUIR', 'PARA PREVENIR' ou 'MELHOR'.",
        wrongThinking: "Marcar uma alternativa que é tecnicamente verdadeira, mas que pertence à Fase VI quando a questão perguntava o que fazer na Fase II.",
        rightMindset: "Identifique em qual das 6 Fases da CPMAI a história está acontecendo agora e escolha a ação que pertence ao momento atual do ciclo.",
        examExample: "Duas alternativas parecem certas? Verifique qual delas resolve a causa raiz na fase atual antes de dar o próximo passo."
      }
    ],

    classicTraps: [
      {
        id: "trap-1",
        trap: "A Armadilha da 'Escalada de Compromisso Técnico'",
        whyCandidatesFall: "O enunciado diz que a equipe já gastou 3 meses na Fase IV tentando 15 algoritmos e nenhum funcionou. Uma alternativa sugere 'tentar um algoritmo de Deep Learning mais moderno'.",
        howToSpot: "Alternativas que insistem em continuar na Fase IV quando há sinais claros de que os dados (Fase II/III) ou o escopo (Fase I) são o problema.",
        correctAction: "Pausar a modelagem e retornar à Fase III (Data Preparation) ou Fase II (Data Understanding) — ou mesmo à Fase I se o problema for inviável."
      },
      {
        id: "trap-2",
        trap: "A Armadilha do 'Fairness Through Unawareness' (Cegueira Artificial)",
        whyCandidatesFall: "Acreditar que basta deletar a coluna 'sexo', 'idade' ou 'etnia' do banco de dados para que o modelo fique 100% livre de viés discriminatório.",
        howToSpot: "Alternativas simplistas que dizem 'remover o atributo sensível e publicar o modelo imediatamente'.",
        correctAction: "Auditar variáveis proxy correlacionadas (ex.: CEP, histórico), medir métricas de equidade (Fairness) entre subgrupos na Fase V e rebalancear os dados na Fase III."
      },
      {
        id: "trap-3",
        trap: "A Armadilha do 'Fine-Tuning para Tudo em GenAI'",
        whyCandidatesFall: "Achar que para um LLM responder sobre documentos internos da empresa é obrigatório re-treinar ou fazer Fine-Tuning do modelo.",
        howToSpot: "Cenários com documentos atualizados frequentemente, restrição de orçamento e necessidade de citar a página/fonte da resposta.",
        correctAction: "Escolher RAG (Retrieval-Augmented Generation) combinado com Prompt Engineering e Guardrails."
      },
      {
        id: "trap-4",
        trap: "A Armadilha da 'Acurácia de 99% em Eventos Raros'",
        whyCandidatesFall: "Ver um número alto (99% de acurácia) e achar que o modelo está pronto para o Gate Go da Fase V.",
        howToSpot: "O enunciado menciona detecção de fraude, defeito raro ou doença rara (classes fortemente desbalanceadas).",
        correctAction: "Questionar a acurácia e exigir avaliação via Matriz de Confusão (Recall, Precision, F1-Score, PR-AUC)."
      },
      {
        id: "trap-5",
        trap: "A Armadilha de 'Pular a Governança para Ganhar Velocidade'",
        whyCandidatesFall: "Em cenários com pressão de prazo do patrocinador, escolher atalhos que deixam a análise de privacidade (PII), ética ou explicabilidade 'para depois do lançamento'.",
        howToSpot: "Alternativas que sugerem lançar em produção primeiro e verificar conformidade/LGPD/EU AI Act na versão 2.0.",
        correctAction: "No exame do PMI, ética, privacidade, segurança e conformidade regulatória NUNCA são negociáveis por prazo."
      }
    ],

    timeManagement: {
      totalMinutes: 160,
      totalQuestions: 120,
      secondsPerQuestion: 80,
      strategySummary: "Você tem 160 minutos para 120 questões sem intervalo programado — exatamente 1 minuto e 20 segundos (80 segundos) por questão. O segredo para não faltar tempo no final é usar a Estratégia de 3 Passadas com Checkpoints de Relógio a cada 30 questões.",
      checkpoints: [
        { questionMilestone: "Questão 30", elapsedMinutes: "40 min passados", remainingTimer: "120 min restantes no relógio", action: "25% da prova concluída. Mantenha o ritmo fluido sem travar em questões longas." },
        { questionMilestone: "Questão 60", elapsedMinutes: "80 min passados", remainingTimer: "80 min restantes no relógio", action: "Metade exata da prova! Respire fundo na cadeira por 15 segundos para oxigenar o cérebro." },
        { questionMilestone: "Questão 90", elapsedMinutes: "120 min passados", remainingTimer: "40 min restantes no relógio", action: "75% da prova concluída. Atenção para não perder o foco por fadiga de leitura." },
        { questionMilestone: "Questão 120", elapsedMinutes: "145–150 min passados", remainingTimer: "10–15 min restantes para revisão", action: "Use os últimos 10 a 15 minutos exclusivamente para revisar as questões que você marcou com a bandeira (Flag for Review)." }
      ],
      threePassMethod: [
        "1ª Passada (Questões Diretas — 45 a 60 segundos): Leia a última frase primeiro, identifique a fase CPMAI / domínio, aplique a Regra de Ouro e marque a resposta com confiança.",
        "2ª Passada (Questões Longas ou Duvidosas — máximo 90 segundos): Se ficar entre 2 alternativas após eliminar as outras duas, marque a melhor opção (NUNCA deixe em branco!), acione o botão 'Flag for Review' (Marcar para Revisão) e avance imediatamente. Não gaste 4 minutos em uma única questão — ela pode inclusive ser uma das 20 questões pré-teste (unscored)!",
        "3ª Passada (Últimos 10–15 minutos): Revise apenas as questões marcadas com Flag. Só mude sua resposta inicial se tiver certeza absoluta de que leu algum detalhe errado no enunciado."
      ],
      pearsonVueChecklist: [
        "Online Proctored (OnVUE em casa/escritório): Faça o System Test oficial no mesmo computador e rede na véspera; mesa 100% limpa, apenas 1 monitor permitido, sem fones de ouvido, sem relógio de pulso, sem ler as questões mexendo os lábios ou em voz alta, e NUNCA saia do enquadramento da webcam durante os 160 minutos.",
        "Centro de Testes Presencial (Pearson VUE Test Center): Chegue com 30 minutos de antecedência levando documento oficial original com foto e assinatura válido; lembre-se de que não há pausa programada (se for ao banheiro, o cronômetro continua correndo)."
      ]
    }
  },

  /* ==========================================================================
   * 6. GUIA PASSO A PASSO PARA PUBLICAR NO GITHUB PAGES E INSTALAR NO CELULAR
   * ========================================================================== */
  githubGuide: {
    title: "Guia Passo a Passo: Publicar no GitHub Pages & Usar no Celular (PWA)",
    subtitle: "Hospede sua plataforma gratuitamente na nuvem em menos de 3 minutos e instale como aplicativo no iPhone (iOS) ou Android.",
    introduction: "Esta plataforma foi engenheirada com arquitetura 100% estática (Zero-Build Vanilla ES6+), caminhos relativos e suporte a Progressive Web App (PWA). Isso significa que você não precisa configurar servidores pagos nem rodar comandos complexos de compilação: basta enviar os arquivos para um repositório no GitHub e ativar o GitHub Pages gratuitamente!",
    whyGithubPages: [
      "Hospedagem 100% gratuita, rápida e com certificado de segurança HTTPS automático (`https://seu-usuario.github.io/pmi-cpmai/`).",
      "Acesso imediato de qualquer lugar: estude pelo computador em casa e pelo celular no trabalho ou no transporte.",
      "Instalável como Aplicativo (PWA) na tela inicial do iOS e Android com funcionamento offline após o primeiro acesso.",
      "Sincronização simples e privada: use o botão 'Exportar / Importar Progresso (JSON)' da plataforma para transferir seu histórico entre o PC e o celular sem depender de banco de dados externo."
    ],
    methodBrowser: {
      title: "Opção A: Publicar pelo Navegador Web (Sem usar Terminal — Mais Fácil!)",
      estimatedTime: "3 minutos",
      steps: [
        {
          step: 1,
          title: "Criar um novo repositório no GitHub",
          description: "Acesse https://github.com/new na sua conta do GitHub. Em 'Repository name', digite um nome simples como `pmi-cpmai-prep`. Marque a opção **Public** (necessário para o GitHub Pages gratuito) e clique no botão verde **Create repository**."
        },
        {
          step: 2,
          title: "Enviar os arquivos do projeto (Upload files)",
          description: "Na tela do repositório recém-criado, clique no link **uploading an existing file** (ou em *Add file > Upload files*). Arraste TODOS os arquivos e pastas deste diretório (`index.html`, `manifest.json`, `sw.js`, pasta `css/`, pasta `js/`, pasta `assets/` se houver) para a área de upload do navegador."
        },
        {
          step: 3,
          title: "Confirmar o envio (Commit changes)",
          description: "Aguarde a barra de upload carregar todos os arquivos. No campo inferior 'Commit changes', escreva `Primeira versao da plataforma PMI-CPMAI` e clique no botão verde **Commit changes**."
        },
        {
          step: 4,
          title: "Ativar o GitHub Pages",
          description: "No menu superior do seu repositório no GitHub, clique em **Settings** (Configurações ⚙️) e, no menu lateral esquerdo, clique em **Pages**. Em **Build and deployment > Source**, mantenha `Deploy from a branch`. Em **Branch**, selecione `main` (ou `master`), mantenha a pasta `/ (root)` e clique em **Save**."
        },
        {
          step: 5,
          title: "Acessar seu site publicado!",
          description: "Aguarde cerca de 1 a 2 minutos e atualize a página *Settings > Pages*. O GitHub exibirá um banner no topo com o seu link oficial no ar: `https://SEU-USUARIO.github.io/pmi-cpmai-prep/`!"
        }
      ]
    },
    methodTerminal: {
      title: "Opção B: Publicar via Comandos Git no Terminal (macOS / Windows / Linux)",
      estimatedTime: "2 minutos",
      description: "Se você já tem o Git instalado no seu Mac ou PC, basta abrir o Terminal dentro da pasta do projeto e executar os comandos abaixo:",
      commandsBlock: `# 1. Inicializar o repositório Git na pasta do projeto
git init

# 2. Adicionar todos os arquivos da plataforma
git add .

# 3. Criar o primeiro commit
git commit -m "feat: plataforma completa de preparacao PMI-CPMAI"

# 4. Definir a branch principal como main
git branch -M main

# 5. Conectar ao seu repositório criado no GitHub (substitua SEU-USUARIO e NOME-DO-REPO)
git remote add origin https://github.com/SEU-USUARIO/pmi-cpmai-prep.git

# 6. Enviar os arquivos para o GitHub
git push -u origin main`,
      postPushNote: "Após o comando `git push -u origin main`, acesse a aba **Settings > Pages** do repositório no GitHub, selecione a branch `main` / `/ (root)` e clique em **Save**."
    },
    mobileInstall: {
      title: "Como Instalar como Aplicativo no Celular (PWA)",
      ios: {
        device: "iPhone / iPad (Safari — iOS)",
        icon: "🍎",
        steps: [
          "1. Abra o link do seu GitHub Pages (`https://seu-usuario.github.io/...`) usando o navegador **Safari** no iPhone.",
          "2. Toque no ícone de **Compartilhar** (o quadrado com uma seta apontando para cima na barra inferior do Safari).",
          "3. Role a lista de opções para baixo e toque em **Adicionar à Tela de Início** (*Add to Home Screen*).",
          "4. Confirme tocando em **Adicionar** no canto superior direito. Pronto! O ícone da Academia PMI-CPMAI™ aparecerá na tela do seu iPhone em tela cheia como um app nativo."
        ]
      },
      android: {
        device: "Smartphone / Tablet Android (Google Chrome)",
        icon: "🤖",
        steps: [
          "1. Abra o link do seu GitHub Pages usando o navegador **Google Chrome** no Android.",
          "2. Toque no menu de **três pontos (⋮)** no canto superior direito do Chrome.",
          "3. Toque em **Instalar aplicativo** (ou **Adicionar à tela inicial**).",
          "4. Confirme a instalação. O aplicativo ficará disponível na sua gaveta de apps e na tela inicial, funcionando inclusive offline!"
        ]
      }
    },
    syncProgress: {
      title: "Como Sincronizar seu Progresso entre Computador e Celular",
      description: "Para garantir privacidade total e custo zero de servidor, seu progresso fica salvo no armazenamento local (`localStorage`) do aparelho em uso. Quando quiser transferir seu progresso do PC para o celular (ou vice-versa):",
      steps: [
        "1. No aparelho onde você estudou por último, clique no botão **Backup / Sincronizar (JSON)** no topo da plataforma e clique em **Exportar Progresso (.json)**.",
        "2. Envie o pequeno arquivo `.json` gerado para o outro aparelho (via WhatsApp para você mesmo, AirDrop, Telegram, Google Drive ou e-mail).",
        "3. No outro aparelho, abra a plataforma, clique em **Importar Progresso (.json)** e selecione o arquivo recebido. Todas as suas tarefas concluídas, histórico de simulados, estatísticas por domínio e Caderno de Erros serão restaurados instantaneamente!"
      ]
    },
    troubleshooting: [
      {
        issue: "Ao abrir o link do GitHub Pages aparece erro 404",
        solution: "Aguarde de 1 a 3 minutos após ativar na aba Settings > Pages (o primeiro deploy do GitHub Actions leva alguns segundos) e verifique se o arquivo `index.html` está na raiz do repositório (e não escondido dentro de uma subpasta extra)."
      },
      {
        issue: "Atualizei um arquivo no GitHub mas o celular ainda mostra a versão antiga",
        solution: "Como o PWA faz cache para funcionar offline, basta recarregar a página forçando atualização (ou fechar e reabrir o app com internet ativa) para o Service Worker atualizar os arquivos."
      }
    ]
  }
};
