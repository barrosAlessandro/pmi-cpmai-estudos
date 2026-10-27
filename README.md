# 🎓 PMI-CPMAI™ Prep Hub — Portal Completo de Estudos & Simulados

Plataforma web educacional, interativa e **100% Mobile-First (PWA)** desenvolvida para preparação completa para a certificação de Inteligência Artificial do PMI: **PMI-CPMAI™ (*PMI Certified Professional in Managing AI*)**.

---

## ✨ O Que Este Portal Inclui

1. **👥 Discussão do Time Multidisciplinar (Especialista IA, UX Designer, Engenheiro de Software e QA):**
   - Documentação transparente das decisões pedagógicas, visuais e arquiteturais do projeto.
2. **📋 Raio-X Completo da Prova PMI-CPMAI™:**
   - Estrutura oficial do exame (120 questões de múltipla escolha, sendo 100 pontuadas e 20 pré-teste; 160 minutos de duração; aplicação Pearson VUE Online ou Presencial).
   - Detalhamento profundo dos **5 Domínios do ECO (*Examination Content Outline*)** e seus pesos oficiais:
     - **Domínio I:** Apoiar Iniciativas de IA Responsável e Confiável (**15%**)
     - **Domínio II:** Identificar Necessidades e Soluções de Negócio (**26%**)
     - **Domínio III:** Identificar as Necessidades de Dados (**26%**)
     - **Domínio IV:** Gerenciar o Desenvolvimento e Avaliação de Modelos de IA (**16%**)
     - **Domínio V:** Operacionalizar a Solução de IA (**17%**)
3. **📚 O "PMBOK da IA" — Guia de Referência, Conceitos & Vídeos na Web:**
   - Explicação clara sobre os materiais oficiais de referência da certificação (**CPMAI™ v7 Workbook**, **PMI-CPMAI ECO**, **CRISP-DM**, **NIST AI RMF 1.0**, **ISO/IEC 42001**, **EU AI Act / LGPD** e **PMBOK® 7ª Edição**).
   - Guia detalhado das **6 Fases da Metodologia CPMAI** (com entregáveis, perguntas-chave e *Go/No-Go Gates*).
   - Guia completo dos **7 Padrões de IA (*7 Patterns of AI*)**.
   - Resumo técnico sem código para gestores: *Machine Learning* (Supervisionado, Não Supervisionado, Reforço), *Data-Centric AI*, Métricas (*Precision, Recall, F1, ROC-AUC, RMSE*), *Data Leakage*, *Data Drift vs. Concept Drift*, *GenAI / LLMs / RAG* e *MLOps*.
   - **Flashcards 3D Interativos**, **Glossário Pesquisável** e **Curadoria de Vídeos, Canais e Cursos na Web**.
4. **📅 Cronograma Detalhado de Estudos Semana a Semana (8 Semanas):**
   - Plano estruturado de 8 semanas com metas diárias, checklist interativo salvo automaticamente no seu dispositivo e barra de progresso em tempo real.
5. **📝 Central de Simulados (Formato da Prova + Dirigidos por Domínio):**
   - **6 Simulados Completos no Formato da Prova** (distribuídos proporcionalmente aos 5 Domínios do ECO) + **Super Simulado Oficial Completo (120 Questões / 160 Minutos)**.
   - **6 Simulados Dirigidos por Domínio do Conhecimento** (Domínios I a V + Simulado Especial das 6 Fases CPMAI & 7 Padrões de IA).
   - **Dois Modos de Execução:**
     - *Modo Estudo / Tutor:* Feedback imediato a cada questão com explicação detalhada e dica de prova.
     - *Modo Prova Real:* Cronômetro regressivo, marcação de questões para revisão e relatório final por domínio.
   - **Caderno de Erros Automático:** Revisa e treina exclusivamente as questões que você errou.
6. **💡 Dicas de Ouro & Mindset PMI-CPMAI™:**
   - As regras de ouro para pensar como o PMI na hora de resolver cenários complexos.

---

## 🚀 Como Subir Este Projeto no Seu GitHub (GitHub Pages)

Você pode publicar este site gratuitamente no **GitHub Pages** em menos de 3 minutos para acessá-lo pelo celular, tablet ou computador de qualquer lugar.

### Opção A: Pelo Navegador Web (Mais Fácil — Sem Usar Terminal)

1. Acesse [github.com](https://github.com) e faça login na sua conta.
2. No canto superior direito, clique no ícone **`+`** e selecione **New repository** (Novo repositório).
3. Em **Repository name**, digite, por exemplo: `pmi-cpmai-estudos`.
4. Marque a opção **Public** (Público — necessário para o GitHub Pages gratuito) e clique em **Create repository**.
5. Na página do repositório criado, clique no link **uploading an existing file** (ou em **Add file** $\rightarrow$ **Upload files**).
6. Arraste **todos os arquivos e pastas** deste diretório (`index.html`, `manifest.json`, `sw.js`, `README.md`, e as pastas `css/`, `js/` e `docs/`) para a área de upload do GitHub.
7. Aguarde o carregamento e clique no botão verde **Commit changes** no final da página.
8. Agora, no menu superior do seu repositório, clique em **Settings** (Configurações).
9. No menu lateral esquerdo, clique em **Pages**.
10. Em **Build and deployment** $\rightarrow$ **Branch**, selecione a branch **`main`** (ou `master`), mantenha a pasta **`/ (root)`** e clique em **Save**.
11. Aguarde cerca de 1 a 2 minutos e atualize a página. O GitHub mostrará o link oficial do seu site:
    `https://SEU-USUARIO.github.io/pmi-cpmai-estudos/`

---

### Opção B: Pelo Terminal (Usando Git)

Abra o terminal na pasta `/Users/alessandrosouzadebarros/Downloads/IA PMI` e execute:

```bash
# 1. Inicializa o repositório Git local
git init

# 2. Adiciona todos os arquivos do projeto
git add .

# 3. Cria o primeiro commit
git commit -m "feat: portal completo de estudos e simulados PMI-CPMAI"

# 4. Define a branch principal como main
git branch -M main

# 5. Conecta ao seu repositório criado no GitHub (substitua SEU-USUARIO e SEU-REPO)
git remote add origin https://github.com/SEU-USUARIO/pmi-cpmai-estudos.git

# 6. Envia os arquivos para o GitHub
git push -u origin main
```

Depois, basta ir em **Settings $\rightarrow$ Pages** no repositório do GitHub, selecionar a branch `main` e clicar em **Save**!

---

## 📱 Como Instalar como Aplicativo no Celular (PWA)

Depois de abrir o link do seu GitHub Pages no celular:
- **No iPhone / iPad (Safari):** Toque no botão **Compartilhar** (ícone de quadrado com seta para cima) e selecione **"Adicionar à Tela de Início"**.
- **No Android (Chrome):** Toque no menu de três pontos **`⋮`** no canto superior direito e selecione **"Adicionar à tela inicial"** ou **"Instalar aplicativo"**.
