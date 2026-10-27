/**
 * ============================================================================
 * PMI-CPMAI™ PREP HUB — INTERACTIVE APPLICATION ENGINE (js/app.js)
 * ============================================================================
 */

(function () {
  'use strict';

  const STORAGE_KEYS = {
    THEME: 'pmi_cpmai_theme_v1',
    TASKS: 'pmi_cpmai_tasks_v1',
    HISTORY: 'pmi_cpmai_exam_history_v1',
    MISTAKES: 'pmi_cpmai_mistakes_v1',
    EXAM_MODE: 'pmi_cpmai_exam_mode_v1'
  };

  const state = {
    currentView: 'overview',
    currentRefTab: 'pmbok-ia',
    currentTipsTab: 'mindset',
    selectedWeekFilter: 'all',
    flashcardCategory: 'all',
    glossaryQuery: '',
    examMode: localStorage.getItem(STORAGE_KEYS.EXAM_MODE) || 'tutor',
    examFilter: 'all',
    completedTasks: loadJson(STORAGE_KEYS.TASKS, {}),
    examHistory: loadJson(STORAGE_KEYS.HISTORY, []),
    mistakesMap: loadJson(STORAGE_KEYS.MISTAKES, {}),
    allExams: [],
    activeSession: null
  };

  function loadJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function saveJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('Não foi possível salvar no localStorage:', e);
    }
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function toArray(val) {
    if (Array.isArray(val)) return val;
    if (val === null || val === undefined || val === '') return [];
    return [val];
  }

  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 250ms ease';
      setTimeout(() => toast.remove(), 260);
    }, 3200);
  }

  function normalizeDomainCode(domainId) {
    if (!domainId) return 'D1';
    const str = String(domainId).trim().toUpperCase();
    if (str === 'D1' || str === '1' || str === 'I') return 'D1';
    if (str === 'D2' || str === '2' || str === 'II') return 'D2';
    if (str === 'D3' || str === '3' || str === 'III') return 'D3';
    if (str === 'D4' || str === '4' || str === 'IV') return 'D4';
    if (str === 'D5' || str === '5' || str === 'V') return 'D5';
    return 'EXTRA';
  }

  const DOMAIN_LABELS = {
    D1: { name: 'Domínio I: IA Responsável e Confiável', weight: 15, examId: 'dominio-1' },
    D2: { name: 'Domínio II: Necessidades e Soluções de Negócio', weight: 26, examId: 'dominio-2' },
    D3: { name: 'Domínio III: Necessidades de Dados', weight: 26, examId: 'dominio-3' },
    D4: { name: 'Domínio IV: Desenvolvimento e Avaliação de Modelos', weight: 16, examId: 'dominio-4' },
    D5: { name: 'Domínio V: Operacionalizar a Solução de IA', weight: 17, examId: 'dominio-5' },
    EXTRA: { name: 'Metodologia CPMAI v7 & 7 Padrões de IA', weight: 100, examId: 'dominio-extra-cpmai' }
  };

  // ==========================================================================
  // 1. INICIALIZAÇÃO DO CATÁLOGO DE SIMULADOS
  // ==========================================================================
  function buildAllExamsCatalog() {
    const full1 = Array.isArray(window.EXAMS_FULL_1) ? window.EXAMS_FULL_1 : [];
    const full2 = Array.isArray(window.EXAMS_FULL_2) ? window.EXAMS_FULL_2 : [];
    const domains = Array.isArray(window.EXAMS_DOMAINS) ? window.EXAMS_DOMAINS : [];

    const fullExams = [...full1, ...full2].map((exam, idx) => ({
      ...exam,
      type: 'full',
      order: idx + 1,
      questions: (exam.questions || []).map((q) => ({
        ...q,
        domainCode: normalizeDomainCode(q.domainId)
      }))
    }));

    const all120Questions = fullExams.flatMap((ex) => ex.questions);
    const superExam = {
      id: 'super-simulado-120',
      title: '🏆 Super Simulado Oficial Completo (120 Questões — Padrão Pearson VUE)',
      subtitle:
        'Maratona completa nas condições exatas do exame PMI-CPMAI™: 120 questões situacionais distribuídas proporcionalmente entre os 5 Domínios do ECO para resolver em 160 minutos.',
      durationMinutes: 160,
      passingScore: 75,
      type: 'full',
      featured: true,
      questions: all120Questions
    };

    const domainExams = domains.map((exam) => ({
      ...exam,
      type: 'domain',
      questions: (exam.questions || []).map((q) => ({
        ...q,
        domainCode: normalizeDomainCode(q.domainId || exam.domainId)
      }))
    }));

    state.allExams = [...fullExams, superExam, ...domainExams];

    const totalUniqueQuestions =
      all120Questions.length + domainExams.reduce((acc, ex) => acc + ex.questions.length, 0);
    const qCountEl = document.getElementById('stat-questions-count');
    if (qCountEl) qCountEl.textContent = String(totalUniqueQuestions);

    const navBadge = document.getElementById('nav-simulados-badge');
    if (navBadge) navBadge.textContent = String(state.allExams.length);

    const allCountBadge = document.getElementById('count-all-exams');
    if (allCountBadge) allCountBadge.textContent = String(state.allExams.length);
  }

  // ==========================================================================
  // 2. GESTÃO DE TEMA (DARK / LIGHT MODE)
  // ==========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
    applyTheme(savedTheme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem(STORAGE_KEYS.THEME, next);
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.getElementById('theme-icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  // ==========================================================================
  // 3. NAVEGAÇÃO SPA (5 SEÇÕES PRINCIPAIS)
  // ==========================================================================
  function initNavigation() {
    document.addEventListener('click', (e) => {
      const navTrigger = e.target.closest('[data-nav-target]');
      if (navTrigger) {
        e.preventDefault();
        const targetView = navTrigger.getAttribute('data-nav-target');
        switchView(targetView);
      }
    });

    const hash = window.location.hash.replace('#', '');
    if (['overview', 'reference', 'schedule', 'simulados', 'tips'].includes(hash)) {
      switchView(hash, false);
    }
  }

  function switchView(viewName, scrollToTop = true) {
    state.currentView = viewName;

    document.querySelectorAll('[data-view-panel]').forEach((panel) => {
      const isMatch = panel.getAttribute('data-view-panel') === viewName;
      panel.classList.toggle('active', isMatch);
    });

    document.querySelectorAll('[data-nav-target]').forEach((btn) => {
      if (btn.classList.contains('nav-btn') || btn.classList.contains('bottom-nav-item')) {
        const isMatch = btn.getAttribute('data-nav-target') === viewName;
        btn.classList.toggle('active', isMatch);
        btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      }
    });

    if (history.replaceState) {
      history.replaceState(null, '', '#' + viewName);
    }

    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ==========================================================================
  // 4. VIEW 1: SOBRE A PROVA, 5 DOMÍNIOS DO ECO & MESA-REDONDA DO TIME
  // ==========================================================================
  function renderOverviewSection() {
    const content = window.STUDY_CONTENT;
    if (!content) return;

    renderExamBlueprint(content.examOverview);
    renderEcoDomains(content.examOverview);
    renderTeamDiscussion(content.teamDiscussion);
  }

  function renderExamBlueprint(examOverview) {
    const container = document.getElementById('exam-overview-container');
    if (!container || !examOverview) return;

    const fmt = examOverview.format || {};
    const prereqs = toArray(examOverview.prerequisites);

    container.innerHTML = `
      <div class="callout callout-info mb-6">
        <span class="callout-icon" aria-hidden="true">🎓</span>
        <div>
          <strong>${escapeHtml(examOverview.certificationName)} — ${escapeHtml(examOverview.issuingBody)}</strong>
          <p style="margin-top: 0.35rem;">${escapeHtml(examOverview.description)}</p>
        </div>
      </div>

      <div class="grid-2 mb-6">
        <div class="card">
          <span class="badge badge-brand mb-2">Formato Oficial Pearson VUE</span>
          <h3 class="card-title mb-4">Regras e Estrutura da Prova</h3>
          <div class="table-wrapper" tabindex="0" role="region" aria-label="Tabela de parâmetros oficiais do exame PMI-CPMAI" style="--label-1: 'Parâmetro'; --label-2: 'Especificação Oficial';">
            <table>
              <thead>
                <tr>
                  <th scope="col">Parâmetro do Exame</th>
                  <th scope="col">Especificação Oficial PMI-CPMAI™</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Total de Questões</th>
                  <td data-label="Especificação"><strong>${fmt.totalQuestions || 120} questões</strong> de múltipla escolha (4 alternativas: A, B, C, D)</td>
                </tr>
                <tr>
                  <th scope="row">Questões Pontuadas vs. Pré-Teste</th>
                  <td data-label="Especificação"><strong>${fmt.scoredQuestions || 100} pontuadas</strong> + <strong>${fmt.unscoredQuestions || 20} pré-teste (não pontuadas)</strong> distribuídas aleatoriamente</td>
                </tr>
                <tr>
                  <th scope="row">Tempo Total de Prova</th>
                  <td data-label="Especificação"><strong>${escapeHtml(fmt.durationFormatted || '160 minutos (2h40min)')}</strong> — média de ${escapeHtml(fmt.timePerQuestionFormatted || '1 min e 20 seg por questão')}</td>
                </tr>
                <tr>
                  <th scope="row">Intervalos Programados</th>
                  <td data-label="Especificação">${escapeHtml(fmt.scheduledBreaks || 'Sem intervalo programado (o relógio não para)')}</td>
                </tr>
                <tr>
                  <th scope="row">Estilo das Questões</th>
                  <td data-label="Especificação">${escapeHtml(fmt.questionFormat || '85%+ baseadas em cenários situacionais de projetos de IA')}</td>
                </tr>
                <tr>
                  <th scope="row">Modalidade de Aplicação</th>
                  <td data-label="Especificação">${escapeHtml(fmt.deliveryMethod || 'Online Proctored (OnVUE) ou Centro Autorizado Pearson VUE')}</td>
                </tr>
                <tr>
                  <th scope="row">Meta Segura nos Simulados</th>
                  <td data-label="Especificação"><span class="badge badge-success">${escapeHtml(fmt.targetPassingScore || 'Acima de 75% a 80% de acerto')}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <span class="badge badge-success mb-2">Elegibilidade &amp; Perfil</span>
          <h3 class="card-title mb-4">Pré-Requisitos e O Que NÃO Cai na Prova</h3>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${prereqs
              .map(
                (p) => `
              <div class="glossary-card">
                <div class="glossary-term">
                  <span>${escapeHtml(p.icon || '✔️')} ${escapeHtml(p.title)}</span>
                  <span class="badge ${p.required ? 'badge-brand' : 'badge-info'}">${p.required ? 'Obrigatório' : 'Importante'}</span>
                </div>
                <p class="glossary-def">${escapeHtml(p.description)}</p>
              </div>
            `
              )
              .join('')}
          </div>
          <div class="callout callout-warning mt-4" style="margin-bottom: 0;">
            <span class="callout-icon" aria-hidden="true">💡</span>
            <div>
              <strong>Atenção sobre as 20 questões Pré-Teste:</strong>
              <p style="font-size: 0.85rem; margin-top: 0.2rem;">${escapeHtml(fmt.unscoredExplanation || '')}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderEcoDomains(examOverview) {
    const container = document.getElementById('eco-domains-container');
    if (!container || !examOverview || !Array.isArray(examOverview.domains)) return;

    const domains = examOverview.domains;

    container.innerHTML = `
      <div class="callout callout-warning mb-6">
        <span class="callout-icon" aria-hidden="true">⚡</span>
        <div>
          <strong>Insight Estratégico do Especialista: 52% da Prova está nos Domínios II e III!</strong>
          <p style="margin-top: 0.25rem;">
            Somando <strong>Identificar Necessidades e Soluções de Negócio (26%)</strong> e <strong>Identificar as Necessidades de Dados (26%)</strong>, mais da metade do exame avalia o que acontece <em>antes</em> do treinamento do modelo. Projetos de IA falham na vida real (e na prova) quando pulam o alinhamento de negócio e a preparação de dados!
          </p>
        </div>
      </div>

      <div class="domains-grid">
        ${domains
          .map((d, idx) => {
            const dCode = normalizeDomainCode(d.id || d.number || idx + 1);
            const domainExamId = (DOMAIN_LABELS[dCode] && DOMAIN_LABELS[dCode].examId) || `dominio-${idx + 1}`;
            const phasesRelated = toArray(d.cpmaiPhasesRelated);
            const scenarios = toArray(d.examScenarios);

            return `
            <article class="domain-card">
              <div class="domain-card-header">
                <div>
                  <span class="badge badge-brand mb-2">Domínio ${escapeHtml(d.number)} • ~${d.approxQuestions || Math.round(1.2 * d.weight)} questões</span>
                  <h3 class="card-title">${escapeHtml(d.name)}</h3>
                  <p class="stat-sub">${escapeHtml(d.englishName)}</p>
                </div>
                <span class="domain-weight-badge">${escapeHtml(d.percentage || d.weight + '%')}</span>
              </div>

              <div class="domain-bar" aria-label="Peso do domínio na prova: ${d.weight}%">
                <div class="domain-bar-fill" style="width: ${Math.min(100, d.weight * 3.2)}%;"></div>
              </div>

              <p style="font-size: 0.9rem;">${escapeHtml(d.summary)}</p>

              <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
                ${phasesRelated.map((ph) => `<span class="badge badge-info">${escapeHtml(ph)}</span>`).join('')}
              </div>

              <div>
                <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.4rem;">
                  O que será avaliado (Tarefas do ECO):
                </h4>
                <ul class="domain-tasks">
                  ${toArray(d.tasks)
                    .map((t) => `<li>${escapeHtml(t)}</li>`)
                    .join('')}
                </ul>
              </div>

              <div class="exam-tip-box" style="margin-top: auto;">
                <strong>🎯 Cenários Típicos de Prova:</strong>
                <ul class="domain-tasks" style="margin-top: 0.35rem;">
                  ${scenarios
                    .map((sc) => {
                      if (typeof sc === 'object' && sc !== null) {
                        return `<li><strong>Cenário:</strong> ${escapeHtml(sc.scenario)}<br/><em>Decisão CPMAI:</em> ${escapeHtml(sc.decision)}</li>`;
                      }
                      return `<li>${escapeHtml(sc)}</li>`;
                    })
                    .join('')}
                </ul>
              </div>

              <button type="button" class="btn btn-secondary btn-sm mt-2" data-start-exam="${escapeHtml(domainExamId)}">
                📝 Resolver Simulado Dirigido do Domínio ${escapeHtml(d.number)}
              </button>
            </article>
          `;
          })
          .join('')}
      </div>
    `;
  }

  function renderTeamDiscussion(teamDiscussion) {
    const container = document.getElementById('team-discussion-container');
    if (!container || !teamDiscussion) return;

    const roleMap = {
      'ai-specialist': 'ai',
      'ux-designer': 'ux',
      'software-engineer': 'eng',
      'qa-engineer': 'qa'
    };

    container.innerHTML = `
      <div class="card mb-6">
        <span class="badge badge-brand mb-2">Consenso Arquitetural &amp; Pedagógico</span>
        <h3 class="card-title mb-2">${escapeHtml(teamDiscussion.title)}</h3>
        <p class="mb-4">${escapeHtml(teamDiscussion.summary)}</p>
        <div class="grid-2">
          ${toArray(teamDiscussion.architectureConsensus)
            .map(
              (item) => `
            <div class="glossary-card" style="flex-direction: row; align-items: flex-start; gap: 0.75rem;">
              <span style="color: var(--success-text); font-weight: 800;">✓</span>
              <p style="font-size: 0.875rem; margin: 0;">${escapeHtml(item)}</p>
            </div>
          `
            )
            .join('')}
        </div>
      </div>

      <div class="team-grid">
        ${toArray(teamDiscussion.members)
          .map((m) => {
            const rKey = roleMap[m.id] || 'ai';
            return `
            <article class="team-card" data-role="${rKey}">
              <div class="team-card-header">
                <div class="avatar-badge" aria-hidden="true">${escapeHtml(m.avatar || '👤')}</div>
                <div class="persona-info">
                  <h3 class="persona-name">${escapeHtml(m.role)}</h3>
                  <span class="role-tag">${escapeHtml(m.name)} • ${escapeHtml(m.badge)}</span>
                </div>
              </div>

              <blockquote class="team-quote">
                "${escapeHtml(m.quote)}"
              </blockquote>

              <p style="font-size: 0.875rem;">${escapeHtml(m.summary)}</p>

              <div>
                <h4 style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.4rem;">
                  Decisões Implementadas neste Portal:
                </h4>
                <ul class="team-decisions">
                  ${toArray(m.keyDecisions)
                    .map((d) => `<li><span>${escapeHtml(d)}</span></li>`)
                    .join('')}
                </ul>
              </div>
            </article>
          `;
          })
          .join('')}
      </div>
    `;
  }

  // ==========================================================================
  // 5. VIEW 2: MATERIAL DE REFERÊNCIA ("O PMBOK DA IA", FASES, PADRÕES, ETC.)
  // ==========================================================================
  function initReferenceSection() {
    const content = window.STUDY_CONTENT;
    if (content && content.referenceMaterial && Array.isArray(content.referenceMaterial.flashcards)) {
      const fcBadge = document.getElementById('flashcards-count-badge');
      if (fcBadge) fcBadge.textContent = String(content.referenceMaterial.flashcards.length);
    }

    const tabsContainer = document.getElementById('reference-subtabs');
    if (tabsContainer) {
      tabsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-ref-tab]');
        if (!btn) return;
        const tabId = btn.getAttribute('data-ref-tab');
        state.currentRefTab = tabId;
        tabsContainer.querySelectorAll('[data-ref-tab]').forEach((b) => {
          const active = b.getAttribute('data-ref-tab') === tabId;
          b.classList.toggle('active', active);
          b.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        renderReferenceActiveTab();
      });
    }

    renderReferenceActiveTab();
  }

  function renderReferenceActiveTab() {
    const container = document.getElementById('reference-content-container');
    const ref = window.STUDY_CONTENT && window.STUDY_CONTENT.referenceMaterial;
    if (!container || !ref) return;

    switch (state.currentRefTab) {
      case 'pmbok-ia':
        renderRefPmbokAndPhases(container, ref);
        break;
      case 'patterns':
        renderRefSevenPatterns(container, ref);
        break;
      case 'tech-concepts':
        renderRefTechnicalGuide(container, ref);
        break;
      case 'flashcards':
        renderRefFlashcards(container, ref);
        break;
      case 'glossary':
        renderRefGlossary(container, ref);
        break;
      case 'videos':
        renderRefWebResources(container, ref);
        break;
      default:
        renderRefPmbokAndPhases(container, ref);
    }
  }

  function renderRefPmbokAndPhases(container, ref) {
    const pmbok = ref.pmbokAnswer || {};
    const phases = toArray(ref.cpmaiPhases);
    const compTable = pmbok.comparisonTable || { headers: [], rows: [] };
    const headers = toArray(compTable.headers);

    container.innerHTML = `
      <div class="card mb-6">
        <span class="badge badge-brand mb-2">Dúvida Clássica Esclarecida</span>
        <h3 class="card-title mb-2">${escapeHtml(pmbok.question)}</h3>
        <div class="callout callout-success">
          <span class="callout-icon" aria-hidden="true">📘</span>
          <div>
            <strong>Resumo Direto: Qual é o "PMBOK" da Certificação PMI-CPMAI™?</strong>
            <p style="margin-top: 0.35rem;">${escapeHtml(pmbok.shortAnswer)}</p>
          </div>
        </div>
        <p class="mb-4">${escapeHtml(pmbok.whyTraditionalPmbokIsNotEnough)}</p>

        <h4 class="mb-4">Os 6 Documentos e Frameworks que Formam o "PMBOK da IA":</h4>
        <div class="patterns-grid">
          ${toArray(pmbok.corePillars)
            .map(
              (pillar, idx) => `
            <article class="guide-card">
              <div class="flex-between">
                <span class="pattern-icon" aria-hidden="true">${escapeHtml(pillar.icon || ['📘', '🧭', '🔄', '🛡️', '⚖️', '🏛️'][idx] || '📄')}</span>
                <span class="badge badge-brand">${escapeHtml(pillar.badge || pillar.role || 'Pilar Oficial')}</span>
              </div>
              <h4 class="card-title">${escapeHtml(pillar.title || pillar.name)}</h4>
              <p style="font-size: 0.875rem;">${escapeHtml(pillar.description)}</p>
              <div class="exam-tip-box" style="margin-top: auto;">
                <strong>Foco na Prova:</strong> ${escapeHtml(pillar.examFocus || pillar.howToUse || '')}
              </div>
            </article>
          `
            )
            .join('')}
        </div>

        <h4 class="mt-6 mb-2">Comparativo Essencial de Prova: Software Tradicional vs. Projetos de IA (CPMAI)</h4>
        <div class="table-wrapper" tabindex="0" role="region" aria-label="Comparação entre Gestão Tradicional e Gestão de IA CPMAI" style="--label-1: 'Dimensão'; --label-2: 'Software Tradicional'; --label-3: 'Projeto de IA (CPMAI)';">
          <table>
            <thead>
              <tr>
                ${headers.map((h) => `<th scope="col">${escapeHtml(h)}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${toArray(compTable.rows)
                .map(
                  (row) => `
                <tr>
                  <th scope="row">${escapeHtml(row[0])}</th>
                  ${row
                    .slice(1)
                    .map(
                      (cell, cIdx) =>
                        `<td data-label="${escapeHtml(headers[cIdx + 1] || 'Detalhe')}">${cIdx === row.length - 2 ? `<strong>${escapeHtml(cell)}</strong>` : escapeHtml(cell)}</td>`
                    )
                    .join('')}
                </tr>
              `
                )
                .join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <span class="badge badge-info mb-2">Coração da Prova • Metodologia Iterativa</span>
        <h3 class="card-title mb-2">As 6 Fases da Metodologia CPMAI™ v7</h3>
        <p class="mb-4">
          Diferente do modelo cascata (Waterfall), o ciclo CPMAI é <strong>100% iterativo e centrado em dados</strong>. Ao final de cada fase existe um portão de decisão (<strong>Go / No-Go Gate</strong>): se os dados forem insuficientes ou o modelo não atingir o KPI de negócio, você <strong>deve retroceder para uma fase anterior</strong>!
        </p>

        <div class="cpmai-flow" role="region" aria-label="Fluxo das 6 Fases do CPMAI">
          ${phases
            .map(
              (p) => `
            <a href="#phase-card-${p.phaseNumber}" class="phase-node">
              <span class="phase-number">Fase ${escapeHtml(p.roman)}</span>
              <strong>${escapeHtml(String(p.name || '').replace(/^Fase [IVX]+:\s*/i, ''))}</strong>
              <span class="stat-sub">${escapeHtml(p.englishName)}</span>
            </a>
          `
            )
            .join('')}
        </div>

        <div class="cpmai-phases-grid">
          ${phases
            .map(
              (p) => `
            <article id="phase-card-${p.phaseNumber}" class="phase-card">
              <div class="flex-between">
                <span class="phase-number">Fase ${escapeHtml(p.roman)} (${p.phaseNumber}/6)</span>
                <span class="badge badge-info">${escapeHtml(p.ecoDomainMapping)}</span>
              </div>
              <div>
                <h4 class="card-title">${escapeHtml(p.name)}</h4>
                <p class="stat-sub">${escapeHtml(p.tagline)}</p>
              </div>
              <p style="font-size: 0.9rem;">${escapeHtml(p.objective)}</p>

              <div>
                <strong style="font-size: 0.825rem; color: var(--brand-primary-hover);">❓ Perguntas-Chave da Fase:</strong>
                <ul class="domain-tasks">
                  ${toArray(p.keyQuestions)
                    .map((q) => `<li>${escapeHtml(q)}</li>`)
                    .join('')}
                </ul>
              </div>

              <div>
                <strong style="font-size: 0.825rem; color: var(--success-text);">📦 Entregáveis Principais:</strong>
                <ul class="domain-tasks">
                  ${toArray(p.deliverables)
                    .map((d) => `<li>${escapeHtml(d)}</li>`)
                    .join('')}
                </ul>
              </div>

              <div class="go-nogo-box">
                <strong>🚦 Portão Go / No-Go (Critério de Decisão):</strong>
                <ul class="domain-tasks" style="margin-bottom: 0.45rem;">
                  ${toArray(p.goNoGoCriteria)
                    .map((g) => `<li>${escapeHtml(g)}</li>`)
                    .join('')}
                </ul>
                <strong>↩️ Quando Iterar (Voltar de Fase):</strong>
                <p style="font-size: 0.825rem;">${escapeHtml(p.whenToIterateBack)}</p>
              </div>
            </article>
          `
            )
            .join('')}
        </div>
      </div>
    `;
  }

  function renderRefSevenPatterns(container, ref) {
    const patterns = toArray(ref.sevenPatterns);

    container.innerHTML = `
      <div class="callout callout-info mb-6">
        <span class="callout-icon" aria-hidden="true">🧩</span>
        <div>
          <strong>Por que os 7 Padrões de IA são tão cobrados na prova PMI-CPMAI™?</strong>
          <p style="margin-top: 0.25rem;">
            Na metodologia CPMAI, você nunca começa escolhendo um algoritmo ("vamos usar Random Forest"). Você identifica qual(is) dos <strong>7 Padrões de IA</strong> resolvem o problema de negócio na Fase I! Projetos complexos combinam múltiplos padrões, mas devem ser implementados <strong>um padrão por iteração</strong>.
          </p>
        </div>
      </div>

      <div class="patterns-grid">
        ${patterns
          .map(
            (pt) => `
          <article class="pattern-card">
            <div class="flex-between">
              <span class="pattern-icon" aria-hidden="true">${escapeHtml(pt.icon || '🤖')}</span>
              <span class="badge badge-brand">Padrão #${pt.number}</span>
            </div>
            <div>
              <h3 class="card-title">${escapeHtml(pt.name)}</h3>
              <p class="stat-sub">${escapeHtml(pt.englishName)}</p>
            </div>
            <p style="font-size: 0.9rem;">${escapeHtml(pt.definition)}</p>

            <div class="glossary-card">
              <strong style="font-size: 0.8rem; color: var(--brand-primary-hover);">⚙️ Mecanismo Central:</strong>
              <p style="font-size: 0.85rem;">${escapeHtml(pt.coreMechanism)}</p>
            </div>

            <div>
              <strong style="font-size: 0.825rem; color: var(--success-text);">💼 Casos de Uso Clássicos na Prova:</strong>
              <ul class="domain-tasks">
                ${toArray(pt.classicUseCases)
                  .map((u) => `<li>${escapeHtml(u)}</li>`)
                  .join('')}
              </ul>
            </div>

            <div>
              <strong style="font-size: 0.825rem; color: var(--info-text);">📊 Métricas &amp; Algoritmos Típicos:</strong>
              <p style="font-size: 0.825rem; margin-top: 0.2rem;">
                <em>Métricas:</em> ${toArray(pt.typicalMetrics).map(escapeHtml).join(' • ')}
              </p>
            </div>

            <div class="go-nogo-box" style="margin-top: auto;">
              <strong>⚠️ Pegadinha de Prova (Cuidado!):</strong>
              <p style="font-size: 0.825rem;">${escapeHtml(pt.examTraps)}</p>
            </div>
          </article>
        `
          )
          .join('')}
      </div>
    `;
  }

  function renderRefTechnicalGuide(container, ref) {
    const guides = toArray(ref.technicalGuide);

    container.innerHTML = `
      <div class="callout callout-success mb-6">
        <span class="callout-icon" aria-hidden="true">🧠</span>
        <div>
          <strong>Guia Técnico de Ciência de Dados, GenAI &amp; MLOps para Gestores (Zero Código!)</strong>
          <p style="margin-top: 0.25rem;">
            Este resumo condensa exatamente o conhecimento técnico exigido nos Domínios I, III, IV e V da prova: escolha de paradigmas de ML, decisão entre Prompt Engineering, RAG e Fine-Tuning, leitura estratégica da Matriz de Confusão, prevenção de Data Leakage e estratégias de deploy seguro em produção.
          </p>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${guides
          .map(
            (g) => `
          <article class="card">
            <div class="flex-between mb-2">
              <span class="badge badge-brand">${escapeHtml(g.badge)}</span>
            </div>
            <h3 class="card-title mb-2">${escapeHtml(g.title)}</h3>
            <p class="mb-4">${escapeHtml(g.summary)}</p>

            <div class="grid-2">
              ${toArray(g.content)
                .map(
                  (sec) => `
                <div class="glossary-card" style="padding: 1.25rem;">
                  <h4 style="color: var(--brand-primary-hover); margin-bottom: 0.35rem;">${escapeHtml(sec.subtitle)}</h4>
                  <p style="font-size: 0.875rem; margin-bottom: 0.65rem;">${escapeHtml(sec.text)}</p>
                  <ul class="domain-tasks">
                    ${toArray(sec.bullets)
                      .map((b) => `<li>${escapeHtml(b)}</li>`)
                      .join('')}
                  </ul>
                </div>
              `
                )
                .join('')}
            </div>
          </article>
        `
          )
          .join('')}
      </div>
    `;
  }

  function renderRefFlashcards(container, ref) {
    const flashcards = toArray(ref.flashcards);
    const categories = ['all', ...new Set(flashcards.map((f) => f.category))];

    const filtered =
      state.flashcardCategory === 'all'
        ? flashcards
        : flashcards.filter((f) => f.category === state.flashcardCategory);

    container.innerHTML = `
      <div class="flex-between mb-4">
        <div>
          <h3 class="card-title">🃏 Flashcards 3D de Memorização Ativa (${filtered.length} cartões)</h3>
          <p class="stat-sub">Toque ou clique em qualquer cartão para virar e revelar a resposta oficial PMI-CPMAI™.</p>
        </div>
        <div class="hero-actions" style="margin-top: 0;">
          <button type="button" id="btn-flip-all-cards" class="btn btn-secondary btn-sm">🔄 Virar Todos</button>
          <button type="button" id="btn-reset-all-cards" class="btn btn-outline btn-sm">↺ Desvirar Todos</button>
        </div>
      </div>

      <div class="filter-pills">
        ${categories
          .map(
            (cat) => `
          <button type="button" class="filter-btn ${state.flashcardCategory === cat ? 'active' : ''}" data-fc-cat="${escapeHtml(cat)}">
            ${cat === 'all' ? 'Todos os Tópicos' : escapeHtml(cat)}
          </button>
        `
          )
          .join('')}
      </div>

      <div class="flashcards-grid">
        ${filtered
          .map(
            (fc, idx) => `
          <button type="button" class="flashcard" data-flashcard-id="${escapeHtml(fc.id)}" aria-pressed="false" aria-label="Flashcard ${idx + 1}: ${escapeHtml(fc.front)}">
            <div class="flashcard-inner">
              <div class="flashcard-front">
                <div class="flex-between">
                  <span class="badge badge-brand">${escapeHtml(fc.category)}</span>
                  <span class="badge">${escapeHtml(fc.domain)}</span>
                </div>
                <div class="flashcard-question">${escapeHtml(fc.front)}</div>
                <div class="flashcard-hint">
                  <span>Nível: ${escapeHtml(fc.difficulty || 'Médio')}</span>
                  <span>👆 Toque para ver a resposta</span>
                </div>
              </div>
              <div class="flashcard-back">
                <div class="flex-between">
                  <span class="badge badge-success">Resposta Oficial</span>
                  <span class="badge">${escapeHtml(fc.domain)}</span>
                </div>
                <div class="flashcard-answer">${escapeHtml(fc.back)}</div>
                <div class="flashcard-hint">
                  <span>✓ Memorizado?</span>
                  <span>👆 Toque para voltar</span>
                </div>
              </div>
            </div>
          </button>
        `
          )
          .join('')}
      </div>
    `;

    container.querySelectorAll('[data-fc-cat]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.flashcardCategory = btn.getAttribute('data-fc-cat');
        renderRefFlashcards(container, ref);
      });
    });

    container.querySelectorAll('.flashcard').forEach((card) => {
      card.addEventListener('click', () => {
        const flipped = card.classList.toggle('is-flipped');
        card.setAttribute('aria-pressed', flipped ? 'true' : 'false');
      });
    });

    const flipAllBtn = document.getElementById('btn-flip-all-cards');
    if (flipAllBtn) {
      flipAllBtn.addEventListener('click', () => {
        container.querySelectorAll('.flashcard').forEach((c) => {
          c.classList.add('is-flipped');
          c.setAttribute('aria-pressed', 'true');
        });
      });
    }

    const resetAllBtn = document.getElementById('btn-reset-all-cards');
    if (resetAllBtn) {
      resetAllBtn.addEventListener('click', () => {
        container.querySelectorAll('.flashcard').forEach((c) => {
          c.classList.remove('is-flipped');
          c.setAttribute('aria-pressed', 'false');
        });
      });
    }
  }

  function renderRefGlossary(container, ref) {
    const glossary = toArray(ref.glossary);

    container.innerHTML = `
      <div class="card mb-4">
        <h3 class="card-title mb-2">🔤 Glossário Oficial PMI-CPMAI™ (${glossary.length} Termos Essenciais)</h3>
        <p class="stat-sub mb-4">Pesquise termos em português ou inglês (ex.: Drift, SHAP, RAG, SMOTE, Leakage, Gate, MLOps) e veja como caem na prova.</p>
        <div class="glossary-search-box">
          <input type="search" id="glossary-search-input" class="search-input" placeholder="🔍 Digite para filtrar termos, siglas ou conceitos..." value="${escapeHtml(state.glossaryQuery)}" aria-label="Buscar termo no glossário" />
        </div>
      </div>
      <div id="glossary-results-list" class="glossary-grid"></div>
    `;

    const input = document.getElementById('glossary-search-input');
    const resultsBox = document.getElementById('glossary-results-list');

    function updateGlossaryList() {
      const q = (state.glossaryQuery || '').trim().toLowerCase();
      const matches = glossary.filter((item) => {
        if (!q) return true;
        return (
          (item.term && item.term.toLowerCase().includes(q)) ||
          (item.englishTerm && item.englishTerm.toLowerCase().includes(q)) ||
          (item.definition && item.definition.toLowerCase().includes(q)) ||
          (item.examContext && item.examContext.toLowerCase().includes(q)) ||
          (item.category && item.category.toLowerCase().includes(q))
        );
      });

      if (matches.length === 0) {
        resultsBox.innerHTML = `
          <div class="card" style="grid-column: 1 / -1; text-align: center;">
            <p style="margin-inline: auto;">Nenhum termo encontrado para "<strong>${escapeHtml(state.glossaryQuery)}</strong>".</p>
          </div>
        `;
        return;
      }

      resultsBox.innerHTML = matches
        .map(
          (item) => `
        <article class="glossary-card">
          <div class="glossary-term">
            <span>${escapeHtml(item.term)}</span>
            <span class="badge badge-brand">${escapeHtml(item.domain || item.category)}</span>
          </div>
          <p class="stat-sub" style="margin-top: -0.25rem;"><em>${escapeHtml(item.englishTerm)}</em> • ${escapeHtml(item.category)}</p>
          <p class="glossary-def">${escapeHtml(item.definition)}</p>
          <div class="exam-tip-box" style="margin-top: auto;">
            <strong>🎯 Na Prova:</strong> ${escapeHtml(item.examContext)}
          </div>
        </article>
      `
        )
        .join('');
    }

    updateGlossaryList();

    if (input) {
      input.addEventListener('input', (e) => {
        state.glossaryQuery = e.target.value;
        updateGlossaryList();
      });
    }
  }

  function renderRefWebResources(container, ref) {
    const resources = toArray(ref.webResources);

    container.innerHTML = `
      <div class="callout callout-info mb-6">
        <span class="callout-icon" aria-hidden="true">🎬</span>
        <div>
          <strong>Curadoria Oficial de Vídeos, Cursos, Podcasts e Documentação na Web</strong>
          <p style="margin-top: 0.25rem;">
            Estes são os recursos mais importantes recomendados pelo nosso Especialista em IA para complementar a leitura do portal com vídeos didáticos, podcasts da Cognilytica/PMI e frameworks oficiais.
          </p>
        </div>
      </div>

      <div class="resources-grid">
        ${resources
          .map(
            (r) => `
          <article class="resource-card">
            <div>
              <div class="flex-between mb-2">
                <span class="badge ${r.mustRead ? 'badge-success' : 'badge-brand'}">${r.mustRead ? '⭐ Essencial' : escapeHtml(r.category)}</span>
                <span class="badge badge-info">${escapeHtml(r.type)}</span>
              </div>
              <h3 class="card-title mb-2">${escapeHtml(r.title)}</h3>
              <p class="stat-sub mb-2"><strong>Fonte / Autor:</strong> ${escapeHtml(r.provider)}</p>
              <p style="font-size: 0.875rem;">${escapeHtml(r.description)}</p>
            </div>
            <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm mt-2">
              🔗 Acessar Recurso na Web ↗
            </a>
          </article>
        `
          )
          .join('')}
      </div>
    `;
  }

  // ==========================================================================
  // 6. VIEW 3: CRONOGRAMA DETALHADO SEMANA A SEMANA (8 SEMANAS)
  // ==========================================================================
  function initScheduleSection() {
    const schedule = toArray(window.STUDY_CONTENT && window.STUDY_CONTENT.studySchedule);
    const filterContainer = document.getElementById('schedule-week-filters');

    if (filterContainer) {
      filterContainer.innerHTML = `
        <button type="button" class="week-filter-btn active" data-week-filter="all">📅 Todas as 8 Semanas</button>
        ${schedule
          .map(
            (w) => `
          <button type="button" class="week-filter-btn" data-week-filter="${w.week}">
            Semana ${w.week}
          </button>
        `
          )
          .join('')}
      `;

      filterContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-week-filter]');
        if (!btn) return;
        state.selectedWeekFilter = btn.getAttribute('data-week-filter');
        filterContainer.querySelectorAll('[data-week-filter]').forEach((b) => {
          b.classList.toggle('active', b.getAttribute('data-week-filter') === state.selectedWeekFilter);
        });
        renderScheduleWeeks();
      });
    }

    const markWeekBtn = document.getElementById('btn-mark-current-week');
    if (markWeekBtn) {
      markWeekBtn.addEventListener('click', () => {
        const targetWeeks =
          state.selectedWeekFilter === 'all'
            ? schedule
            : schedule.filter((w) => String(w.week) === String(state.selectedWeekFilter));
        targetWeeks.forEach((w) => {
          toArray(w.tasks).forEach((t) => {
            state.completedTasks[t.id] = true;
          });
        });
        saveJson(STORAGE_KEYS.TASKS, state.completedTasks);
        renderScheduleWeeks();
        updateGlobalProgressUI();
        showToast('✓ Atividades marcadas como concluídas!');
      });
    }

    const resetBtn = document.getElementById('btn-reset-schedule');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.completedTasks = {};
        saveJson(STORAGE_KEYS.TASKS, state.completedTasks);
        renderScheduleWeeks();
        updateGlobalProgressUI();
        showToast('Checklist do cronograma reiniciado.');
      });
    }

    renderScheduleWeeks();
  }

  function renderScheduleWeeks() {
    const schedule = toArray(window.STUDY_CONTENT && window.STUDY_CONTENT.studySchedule);
    const container = document.getElementById('schedule-weeks-container');
    if (!container) return;

    const visibleWeeks =
      state.selectedWeekFilter === 'all'
        ? schedule
        : schedule.filter((w) => String(w.week) === String(state.selectedWeekFilter));

    container.innerHTML = `
      <div class="weeks-grid">
        ${visibleWeeks
          .map((w) => {
            const tasks = toArray(w.tasks);
            const doneCount = tasks.filter((t) => !!state.completedTasks[t.id]).length;
            const pct = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0;
            const isAllDone = tasks.length > 0 && doneCount === tasks.length;

            return `
            <article class="week-card ${isAllDone ? 'week-completed' : ''}">
              <div class="week-header">
                <div style="width: 100%;">
                  <div class="flex-between mb-2">
                    <span class="badge badge-brand">Semana ${w.week} de 8</span>
                    <span class="badge ${isAllDone ? 'badge-success' : 'badge-info'}">${doneCount}/${tasks.length} (${pct}%)</span>
                  </div>
                  <h3 class="card-title">${escapeHtml(w.title)}</h3>
                  <p class="stat-sub">${escapeHtml(w.subtitle)}</p>
                </div>
              </div>

              <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
                <span class="badge">🎯 Foco: ${escapeHtml(w.domainFocus)}</span>
                <span class="badge">⏱️ Carga: ${escapeHtml(w.suggestedHours)}</span>
              </div>

              <p style="font-size: 0.875rem;">${escapeHtml(w.objective)}</p>

              <div class="callout callout-info" style="padding: 0.75rem 1rem; margin: 0;">
                <div>
                  <strong style="font-size: 0.825rem;">🏆 Meta de Simulado da Semana:</strong>
                  <p style="font-size: 0.825rem; margin-top: 0.15rem;">${escapeHtml(w.examTarget)}</p>
                </div>
              </div>

              <ul class="task-list">
                ${tasks
                  .map((t) => {
                    const checked = !!state.completedTasks[t.id];
                    return `
                    <li>
                      <label class="task-item ${checked ? 'completed' : ''}">
                        <input type="checkbox" class="task-checkbox" data-task-id="${escapeHtml(t.id)}" ${checked ? 'checked' : ''} />
                        <div class="task-label">
                          <div class="flex-between">
                            <strong>${escapeHtml(t.day)} — ${escapeHtml(t.title)}</strong>
                            <span class="badge">${t.estimatedMinutes || 60} min</span>
                          </div>
                          <p style="font-size: 0.825rem; margin-top: 0.25rem; color: var(--text-secondary);">
                            ${escapeHtml(t.description)}
                          </p>
                        </div>
                      </label>
                    </li>
                  `;
                  })
                  .join('')}
              </ul>
            </article>
          `;
          })
          .join('')}
      </div>
    `;

    container.querySelectorAll('[data-task-id]').forEach((cb) => {
      cb.addEventListener('change', (e) => {
        const taskId = e.target.getAttribute('data-task-id');
        if (e.target.checked) {
          state.completedTasks[taskId] = true;
        } else {
          delete state.completedTasks[taskId];
        }
        saveJson(STORAGE_KEYS.TASKS, state.completedTasks);
        renderScheduleWeeks();
        updateGlobalProgressUI();
      });
    });

    updateScheduleProgressSummary();
  }

  function updateScheduleProgressSummary() {
    const schedule = toArray(window.STUDY_CONTENT && window.STUDY_CONTENT.studySchedule);
    const allTasks = schedule.flatMap((w) => toArray(w.tasks));
    const total = allTasks.length;
    const completed = allTasks.filter((t) => !!state.completedTasks[t.id]).length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

    const titleEl = document.getElementById('schedule-progress-title');
    const subEl = document.getElementById('schedule-progress-subtitle');
    const barEl = document.getElementById('schedule-progress-bar');

    if (titleEl) titleEl.textContent = `Seu Progresso no Cronograma: ${pct}% concluído`;
    if (subEl) subEl.textContent = `${completed} de ${total} atividades concluídas nas 8 semanas`;
    if (barEl) barEl.style.width = `${pct}%`;
  }

  // ==========================================================================
  // 7. VIEW 4: CENTRAL DE SIMULADOS & MOTOR INTERATIVO DE PROVA
  // ==========================================================================
  function initSimuladosSection() {
    document.querySelectorAll('[data-exam-mode]').forEach((btn) => {
      const m = btn.getAttribute('data-exam-mode');
      const isSelected = m === state.examMode;
      btn.classList.toggle('active', isSelected);
      btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');

      btn.addEventListener('click', () => {
        state.examMode = m;
        localStorage.setItem(STORAGE_KEYS.EXAM_MODE, m);
        document.querySelectorAll('[data-exam-mode]').forEach((b) => {
          const active = b.getAttribute('data-exam-mode') === m;
          b.classList.toggle('active', active);
          b.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        showToast(
          m === 'tutor'
            ? '🎓 Modo Estudo / Tutor ativado (gabarito comentado imediato)'
            : '⏱️ Modo Prova Real ativado (cronômetro e correção ao final)'
        );
      });
    });

    const filterBar = document.getElementById('exam-category-filters');
    if (filterBar) {
      filterBar.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-exam-filter]');
        if (!btn) return;
        state.examFilter = btn.getAttribute('data-exam-filter');
        filterBar.querySelectorAll('[data-exam-filter]').forEach((b) => {
          b.classList.toggle('active', b.getAttribute('data-exam-filter') === state.examFilter);
        });
        renderSimuladosCatalog();
      });
    }

    document.addEventListener('click', (e) => {
      const startBtn = e.target.closest('[data-start-exam]');
      if (startBtn) {
        const examId = startBtn.getAttribute('data-start-exam');
        const forcedMode = startBtn.getAttribute('data-force-mode') || state.examMode;
        switchView('simulados');
        startExamById(examId, forcedMode);
      }
    });

    renderSimuladosCatalog();
  }

  function updateMistakesBadgeCount() {
    const count = Object.keys(state.mistakesMap || {}).length;
    const badge = document.getElementById('count-mistakes-badge');
    if (badge) badge.textContent = String(count);
  }

  function renderSimuladosCatalog() {
    updateMistakesBadgeCount();
    const container = document.getElementById('exams-catalog-container');
    if (!container) return;

    if (state.examFilter === 'mistakes') {
      renderMistakesNotebookView(container);
      return;
    }

    if (state.examFilter === 'history') {
      renderExamHistoryAnalyticsView(container);
      return;
    }

    const filteredExams = state.allExams.filter((ex) => {
      if (state.examFilter === 'all') return true;
      return ex.type === state.examFilter;
    });

    const fullExams = filteredExams.filter((ex) => ex.type === 'full');
    const domainExams = filteredExams.filter((ex) => ex.type === 'domain');

    let html = '';

    if (fullExams.length > 0) {
      html += `
        <div class="mb-6">
          <div class="flex-between mb-4">
            <div>
              <h3 class="card-title">🏆 Simulados Completos no Formato da Prova (6 Simulados + Super Exame 120Q)</h3>
              <p class="stat-sub">Questões distribuídas exatamente com os pesos dos 5 Domínios do ECO (15%, 26%, 26%, 16%, 17%).</p>
            </div>
          </div>
          <div class="exams-grid">
            ${fullExams.map((ex) => renderExamCardHTML(ex)).join('')}
          </div>
        </div>
      `;
    }

    if (domainExams.length > 0) {
      html += `
        <div class="mb-6">
          <div class="flex-between mb-4">
            <div>
              <h3 class="card-title">🎯 Simulados Dirigidos por Domínio do Conhecimento (ECO I a V + Fases CPMAI)</h3>
              <p class="stat-sub">Treinamento focado em um único domínio por vez para blindar seus pontos fracos.</p>
            </div>
          </div>
          <div class="exams-grid">
            ${domainExams.map((ex) => renderExamCardHTML(ex)).join('')}
          </div>
        </div>
      `;
    }

    container.innerHTML = html;
  }

  function renderExamCardHTML(exam) {
    const historyForExam = state.examHistory.filter((h) => h.examId === exam.id);
    const bestAttempt =
      historyForExam.length > 0
        ? historyForExam.reduce((best, cur) => (cur.percentage > best.percentage ? cur : best), historyForExam[0])
        : null;

    const qCount = toArray(exam.questions).length;
    const isSuper = exam.id === 'super-simulado-120';

    return `
      <article class="exam-card ${isSuper ? 'featured' : ''}">
        <div>
          <div class="flex-between mb-2">
            <span class="badge ${exam.type === 'full' ? 'badge-brand' : 'badge-info'}">
              ${isSuper ? '⭐ Exame Completo 120Q' : exam.type === 'full' ? 'Formato da Prova (ECO)' : 'Dirigido por Domínio'}
            </span>
            ${
              bestAttempt
                ? `<span class="badge ${bestAttempt.percentage >= 75 ? 'badge-success' : 'badge-warning'}">
                    Melhor Nota: ${bestAttempt.percentage}%
                  </span>`
                : `<span class="badge">Não realizado</span>`
            }
          </div>

          <h4 class="card-title mb-2">${escapeHtml(exam.title)}</h4>
          <p style="font-size: 0.875rem; margin-bottom: 0.85rem;">${escapeHtml(exam.subtitle)}</p>

          <div class="exam-meta">
            <span>📋 <strong>${qCount}</strong> questões</span>
            <span>•</span>
            <span>⏱️ <strong>${exam.durationMinutes || 30}</strong> min</span>
            <span>•</span>
            <span>🎯 Meta: <strong>${exam.passingScore || 75}%</strong></span>
          </div>
        </div>

        <div class="hero-actions" style="margin-top: 0.5rem;">
          <button type="button" class="btn btn-primary btn-sm" style="flex: 1;" data-start-exam="${escapeHtml(exam.id)}" data-force-mode="tutor">
            🎓 Modo Estudo
          </button>
          <button type="button" class="btn btn-secondary btn-sm" style="flex: 1;" data-start-exam="${escapeHtml(exam.id)}" data-force-mode="exam">
            ⏱️ Modo Prova Real
          </button>
        </div>
      </article>
    `;
  }

  function renderMistakesNotebookView(container) {
    const mistakeQuestions = Object.values(state.mistakesMap || {});

    if (mistakeQuestions.length === 0) {
      container.innerHTML = `
        <div class="card" style="text-align: center; padding: 2.5rem;">
          <span style="font-size: 2.5rem;">🎉</span>
          <h3 class="card-title mt-2">Seu Caderno de Erros está vazio!</h3>
          <p style="margin-inline: auto; margin-top: 0.5rem;">
            Sempre que você errar uma questão em qualquer simulado, ela será salva automaticamente aqui para você revisar e treinar seus pontos fracos.
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="card mb-6">
        <div class="flex-between">
          <div>
            <span class="badge badge-danger mb-2">Revisão Inteligente de Pontos Fracos</span>
            <h3 class="card-title">📓 Seu Caderno de Erros (${mistakeQuestions.length} questões acumuladas)</h3>
            <p class="stat-sub">Gere um simulado focado apenas nas questões que você errou ou revise o gabarito comentado abaixo.</p>
          </div>
          <div class="hero-actions" style="margin-top: 0;">
            <button type="button" id="btn-start-mistakes-exam" class="btn btn-primary btn-sm">
              🎯 Treinar Questões do Caderno de Erros
            </button>
            <button type="button" id="btn-clear-mistakes" class="btn btn-outline btn-sm">
              🗑️ Limpar Caderno
            </button>
          </div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1rem;">
        ${mistakeQuestions
          .map(
            (q, idx) => `
          <article class="card">
            <div class="flex-between mb-2">
              <span class="badge badge-brand">${escapeHtml(q.domainName || q.domainCode)}</span>
              <button type="button" class="btn btn-outline btn-sm" data-remove-mistake="${escapeHtml(q.id)}">
                ✓ Já Dominei (Remover)
              </button>
            </div>
            <h4 class="mb-2">${idx + 1}. ${escapeHtml(q.question)}</h4>
            <div class="explanation-box is-correct">
              <strong>✓ Resposta Correta (${['A', 'B', 'C', 'D'][q.correct]}):</strong>
              <p>${escapeHtml(q.options && q.options[q.correct])}</p>
              <strong>Explicação Detalhada:</strong>
              <p>${escapeHtml(q.explanation)}</p>
              ${q.examTip ? `<div class="exam-tip-box"><strong>💡 Dica de Prova:</strong> ${escapeHtml(q.examTip)}</div>` : ''}
            </div>
          </article>
        `
          )
          .join('')}
      </div>
    `;

    const startMistakesBtn = document.getElementById('btn-start-mistakes-exam');
    if (startMistakesBtn) {
      startMistakesBtn.addEventListener('click', () => {
        const customExam = {
          id: 'caderno-erros-custom',
          title: '📓 Simulado de Revisão — Caderno de Erros',
          subtitle: 'Treinamento cirúrgico focado nas questões que você errou anteriormente.',
          durationMinutes: Math.max(10, Math.ceil(mistakeQuestions.length * 1.5)),
          passingScore: 75,
          type: 'mistakes',
          questions: mistakeQuestions
        };
        launchExamSession(customExam, 'tutor');
      });
    }

    const clearMistakesBtn = document.getElementById('btn-clear-mistakes');
    if (clearMistakesBtn) {
      clearMistakesBtn.addEventListener('click', () => {
        state.mistakesMap = {};
        saveJson(STORAGE_KEYS.MISTAKES, state.mistakesMap);
        renderSimuladosCatalog();
        showToast('Caderno de erros limpo.');
      });
    }

    container.querySelectorAll('[data-remove-mistake]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const qId = btn.getAttribute('data-remove-mistake');
        delete state.mistakesMap[qId];
        saveJson(STORAGE_KEYS.MISTAKES, state.mistakesMap);
        renderSimuladosCatalog();
        showToast('Questão removida do Caderno de Erros!');
      });
    });
  }

  function renderExamHistoryAnalyticsView(container) {
    if (state.examHistory.length === 0) {
      container.innerHTML = `
        <div class="card" style="text-align: center; padding: 2.5rem;">
          <span style="font-size: 2.5rem;">📊</span>
          <h3 class="card-title mt-2">Nenhum simulado concluído ainda</h3>
          <p style="margin-inline: auto; margin-top: 0.5rem;">
            Conclua seu primeiro simulado para visualizar seu diagnóstico de precisão nos 5 Domínios do ECO e histórico de evolução.
          </p>
        </div>
      `;
      return;
    }

    const aggDomains = {
      D1: { correct: 0, total: 0 },
      D2: { correct: 0, total: 0 },
      D3: { correct: 0, total: 0 },
      D4: { correct: 0, total: 0 },
      D5: { correct: 0, total: 0 }
    };

    state.examHistory.forEach((h) => {
      if (h.domainStats) {
        Object.keys(aggDomains).forEach((dKey) => {
          if (h.domainStats[dKey]) {
            aggDomains[dKey].correct += h.domainStats[dKey].correct || 0;
            aggDomains[dKey].total += h.domainStats[dKey].total || 0;
          }
        });
      }
    });

    container.innerHTML = `
      <div class="card mb-6">
        <span class="badge badge-brand mb-2">Raio-X de Prontidão para a Prova</span>
        <h3 class="card-title mb-4">📈 Desempenho Acumulado nos 5 Domínios do ECO</h3>
        <div class="domain-breakdown">
          ${Object.keys(aggDomains)
            .map((dKey) => {
              const info = DOMAIN_LABELS[dKey];
              const st = aggDomains[dKey];
              const pct = st.total > 0 ? Math.round((st.correct / st.total) * 100) : 0;
              return `
              <div class="domain-result-row">
                <div class="flex-between">
                  <strong>${escapeHtml(info.name)} (Peso ECO: ${info.weight}%)</strong>
                  <span class="badge ${pct >= 75 ? 'badge-success' : pct >= 60 ? 'badge-warning' : 'badge-danger'}">
                    ${st.correct}/${st.total} acertos (${pct}%)
                  </span>
                </div>
                <div class="domain-bar">
                  <div class="domain-bar-fill" style="width: ${pct}%;"></div>
                </div>
              </div>
            `;
            })
            .join('')}
        </div>
      </div>

      <div class="card">
        <h3 class="card-title mb-4">Histórico de Simulados Realizados (${state.examHistory.length})</h3>
        <div class="table-wrapper" tabindex="0" role="region" aria-label="Histórico de simulados realizados" style="--label-1: 'Simulado'; --label-2: 'Data'; --label-3: 'Modo'; --label-4: 'Acertos'; --label-5: 'Status';">
          <table>
            <thead>
              <tr>
                <th scope="col">Simulado</th>
                <th scope="col">Data</th>
                <th scope="col">Modo</th>
                <th scope="col">Pontuação</th>
                <th scope="col">Resultado</th>
              </tr>
            </thead>
            <tbody>
              ${state.examHistory
                .slice()
                .reverse()
                .map(
                  (h) => `
                <tr>
                  <th scope="row">${escapeHtml(h.title)}</th>
                  <td data-label="Data">${escapeHtml(h.date)}</td>
                  <td data-label="Modo">${h.mode === 'exam' ? '⏱️ Prova Real' : '🎓 Estudo Tutor'}</td>
                  <td data-label="Pontuação"><strong>${h.score}/${h.total} (${h.percentage}%)</strong></td>
                  <td data-label="Resultado">
                    <span class="badge ${h.percentage >= 75 ? 'badge-success' : 'badge-warning'}">
                      ${h.percentage >= 75 ? '✓ Pronto (>=75%)' : '⚠️ Reforçar (<75%)'}
                    </span>
                  </td>
                </tr>
              `
                )
                .join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // 8. MOTOR DE EXECUÇÃO DO SIMULADO (EXAM RUNNER)
  // ==========================================================================
  function startExamById(examId, mode) {
    const exam = state.allExams.find((ex) => ex.id === examId);
    if (!exam) {
      showToast('Simulado não encontrado.');
      return;
    }
    launchExamSession(exam, mode || state.examMode);
  }

  function launchExamSession(exam, mode) {
    if (state.activeSession && state.activeSession.timerId) {
      clearInterval(state.activeSession.timerId);
    }

    const questions = toArray(exam.questions).map((q) => ({
      ...q,
      domainCode: normalizeDomainCode(q.domainId || exam.domainId)
    }));

    state.activeSession = {
      exam,
      mode: mode || 'tutor',
      questions,
      currentIndex: 0,
      answers: {},
      flagged: {},
      remainingSeconds: (exam.durationMinutes || 30) * 60,
      totalSeconds: (exam.durationMinutes || 30) * 60,
      timerId: null,
      reviewFilter: 'all'
    };

    document.getElementById('simulados-catalog-view').classList.add('hidden');
    document.getElementById('simulados-results-view').classList.add('hidden');
    const runnerView = document.getElementById('simulados-runner-view');
    runnerView.classList.remove('hidden');

    renderActiveExamQuestion();

    state.activeSession.timerId = setInterval(() => {
      if (!state.activeSession) return;
      state.activeSession.remainingSeconds = Math.max(0, state.activeSession.remainingSeconds - 1);
      updateTimerBadgeUI();
      if (state.activeSession.remainingSeconds === 0 && state.activeSession.mode === 'exam') {
        finishActiveExam();
      }
    }, 1000);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function formatTime(sec) {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;
    if (hrs > 0) {
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function updateTimerBadgeUI() {
    const timerEl = document.getElementById('active-exam-timer');
    if (!timerEl || !state.activeSession) return;
    const rem = state.activeSession.remainingSeconds;
    timerEl.textContent = `⏱️ ${formatTime(rem)}`;
    timerEl.classList.toggle('timer-warning', rem <= 300 && rem > 60);
    timerEl.classList.toggle('timer-critical', rem <= 60);
  }

  function renderActiveExamQuestion() {
    const session = state.activeSession;
    const runnerView = document.getElementById('simulados-runner-view');
    if (!session || !runnerView) return;

    const qIndex = session.currentIndex;
    const q = session.questions[qIndex];
    const totalQ = session.questions.length;
    const answeredCount = Object.keys(session.answers).length;
    const userAnswer = session.answers[qIndex];
    const isAnswered = userAnswer !== undefined;
    const isFlagged = !!session.flagged[qIndex];
    const showFeedbackImmediately = session.mode === 'tutor' && isAnswered;

    runnerView.innerHTML = `
      <div class="exam-runner">
        <div class="exam-topbar">
          <div>
            <span class="badge ${session.mode === 'tutor' ? 'badge-success' : 'badge-brand'}">
              ${session.mode === 'tutor' ? '🎓 Modo Estudo Comentado' : '⏱️ Modo Prova Real Pearson VUE'}
            </span>
            <h3 style="font-size: 1.05rem; margin-top: 0.2rem;">${escapeHtml(session.exam.title)}</h3>
          </div>

          <div class="header-actions">
            <span class="badge badge-info">${answeredCount}/${totalQ} respondidas</span>
            <div id="active-exam-timer" class="exam-timer">⏱️ ${formatTime(session.remainingSeconds)}</div>
            <button type="button" id="btn-Finish-Exam-Top" class="btn btn-primary btn-sm">
              ✓ Finalizar Simulado
            </button>
            <button type="button" id="btn-Exit-Exam" class="btn btn-outline btn-sm">
              ✕ Sair
            </button>
          </div>
        </div>

        <div class="question-map" role="navigation" aria-label="Mapa de questões do simulado">
          ${session.questions
            .map((_, idx) => {
              const ans = session.answers[idx];
              const flg = session.flagged[idx];
              let cls = 'q-dot';
              if (idx === qIndex) cls += ' current';
              if (flg) cls += ' flagged';
              else if (ans !== undefined) {
                if (session.mode === 'tutor') {
                  cls += ans === session.questions[idx].correct ? ' correct' : ' wrong';
                } else {
                  cls += ' answered';
                }
              }
              return `<button type="button" class="${cls}" data-jump-q="${idx}" aria-label="Ir para questão ${idx + 1}">${idx + 1}</button>`;
            })
            .join('')}
        </div>

        <div class="question-body">
          <div class="question-header">
            <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
              <span class="badge badge-brand">Questão ${qIndex + 1} de ${totalQ}</span>
              <span class="badge badge-info">${escapeHtml(q.domainName || (DOMAIN_LABELS[q.domainCode] && DOMAIN_LABELS[q.domainCode].name) || '')}</span>
              ${q.cpmaiPhase ? `<span class="badge">${escapeHtml(q.cpmaiPhase)}</span>` : ''}
              ${q.difficulty ? `<span class="badge">Nível: ${escapeHtml(q.difficulty)}</span>` : ''}
            </div>

            <button type="button" id="btn-toggle-flag" class="flag-btn ${isFlagged ? 'active' : ''}" aria-pressed="${isFlagged ? 'true' : 'false'}">
              🚩 ${isFlagged ? 'Marcada para Revisão' : 'Marcar para Revisão'}
            </button>
          </div>

          <div class="question-stem">
            ${escapeHtml(q.question)}
          </div>

          <div class="options-list" role="radiogroup" aria-label="Alternativas da questão ${qIndex + 1}">
            ${toArray(q.options)
              .map((optText, optIdx) => {
                const letter = ['A', 'B', 'C', 'D'][optIdx] || String(optIdx + 1);
                let optClass = 'option-btn';
                if (showFeedbackImmediately) {
                  if (optIdx === q.correct) optClass += ' correct';
                  else if (optIdx === userAnswer && userAnswer !== q.correct) optClass += ' wrong';
                } else if (userAnswer === optIdx) {
                  optClass += ' selected';
                }

                return `
                <button type="button" class="${optClass}" data-select-opt="${optIdx}">
                  <span class="option-letter">${letter}</span>
                  <span style="flex: 1;">${escapeHtml(optText)}</span>
                </button>
              `;
              })
              .join('')}
          </div>

          ${
            showFeedbackImmediately
              ? `
            <div class="explanation-box ${userAnswer === q.correct ? 'is-correct' : 'is-wrong'}">
              <div class="flex-between">
                <strong style="font-size: 1rem; color: ${userAnswer === q.correct ? 'var(--success-text)' : 'var(--danger-text)'};">
                  ${
                    userAnswer === q.correct
                      ? '✅ Excelente! Você acertou seguindo o Mindset PMI-CPMAI™.'
                      : `❌ Resposta Incorreta. A alternativa correta é a ${['A', 'B', 'C', 'D'][q.correct]}. (Adicionada ao seu Caderno de Erros)`
                  }
                </strong>
              </div>
              <p style="font-size: 0.925rem; color: var(--text-primary);">${escapeHtml(q.explanation)}</p>
              ${
                q.examTip
                  ? `<div class="exam-tip-box"><strong>💡 Dica de Ouro para a Prova:</strong> ${escapeHtml(q.examTip)}</div>`
                  : ''
              }
            </div>
          `
              : ''
          }
        </div>

        <div class="exam-footer">
          <button type="button" id="btn-prev-q" class="btn btn-secondary" ${qIndex === 0 ? 'disabled' : ''}>
            ← Anterior
          </button>

          <span class="stat-sub">
            ${
              session.mode === 'tutor'
                ? 'Modo Estudo: clique em uma opção para ver a explicação detalhada'
                : 'Modo Prova Real: suas respostas serão corrigidas ao finalizar'
            }
          </span>

          ${
            qIndex < totalQ - 1
              ? `<button type="button" id="btn-next-q" class="btn btn-primary">Próxima Questão →</button>`
              : `<button type="button" id="btn-finish-exam-bottom" class="btn btn-success">✓ Concluir e Ver Relatório Final</button>`
          }
        </div>
      </div>
    `;

    runnerView.querySelectorAll('[data-jump-q]').forEach((btn) => {
      btn.addEventListener('click', () => {
        session.currentIndex = parseInt(btn.getAttribute('data-jump-q'), 10);
        renderActiveExamQuestion();
      });
    });

    runnerView.querySelectorAll('[data-select-opt]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const chosen = parseInt(btn.getAttribute('data-select-opt'), 10);
        session.answers[qIndex] = chosen;

        if (chosen !== q.correct) {
          state.mistakesMap[q.id] = q;
          saveJson(STORAGE_KEYS.MISTAKES, state.mistakesMap);
        }

        renderActiveExamQuestion();
      });
    });

    const flagBtn = document.getElementById('btn-toggle-flag');
    if (flagBtn) {
      flagBtn.addEventListener('click', () => {
        session.flagged[qIndex] = !session.flagged[qIndex];
        renderActiveExamQuestion();
      });
    }

    const prevBtn = document.getElementById('btn-prev-q');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (session.currentIndex > 0) {
          session.currentIndex--;
          renderActiveExamQuestion();
        }
      });
    }

    const nextBtn = document.getElementById('btn-next-q');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (session.currentIndex < totalQ - 1) {
          session.currentIndex++;
          renderActiveExamQuestion();
        }
      });
    }

    const finishTop = document.getElementById('btn-Finish-Exam-Top');
    if (finishTop) finishTop.addEventListener('click', finishActiveExam);

    const finishBottom = document.getElementById('btn-finish-exam-bottom');
    if (finishBottom) finishBottom.addEventListener('click', finishActiveExam);

    const exitBtn = document.getElementById('btn-Exit-Exam');
    if (exitBtn) {
      exitBtn.addEventListener('click', () => {
        if (session.timerId) clearInterval(session.timerId);
        state.activeSession = null;
        document.getElementById('simulados-runner-view').classList.add('hidden');
        document.getElementById('simulados-catalog-view').classList.remove('hidden');
        renderSimuladosCatalog();
      });
    }
  }

  // ==========================================================================
  // 9. FINALIZAÇÃO DO SIMULADO & RELATÓRIO DE DESEMPENHO POR DOMÍNIO
  // ==========================================================================
  function finishActiveExam() {
    const session = state.activeSession;
    if (!session) return;

    if (session.timerId) {
      clearInterval(session.timerId);
      session.timerId = null;
    }

    const total = session.questions.length;
    let correctCount = 0;
    const domainStats = {};

    session.questions.forEach((q, idx) => {
      const dCode = q.domainCode || 'D1';
      if (!domainStats[dCode]) {
        domainStats[dCode] = { correct: 0, total: 0 };
      }
      domainStats[dCode].total++;

      const ans = session.answers[idx];
      if (ans === q.correct) {
        correctCount++;
        domainStats[dCode].correct++;
      } else {
        state.mistakesMap[q.id] = q;
      }
    });

    saveJson(STORAGE_KEYS.MISTAKES, state.mistakesMap);

    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const timeSpentSec = Math.max(1, session.totalSeconds - session.remainingSeconds);

    const record = {
      examId: session.exam.id,
      title: session.exam.title,
      mode: session.mode,
      score: correctCount,
      total,
      percentage,
      timeSpentFormatted: formatTime(timeSpentSec),
      date: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      domainStats
    };

    state.examHistory.push(record);
    saveJson(STORAGE_KEYS.HISTORY, state.examHistory);
    updateGlobalProgressUI();

    document.getElementById('simulados-runner-view').classList.add('hidden');
    const resultsView = document.getElementById('simulados-results-view');
    resultsView.classList.remove('hidden');

    renderExamResultsScreen(session, record);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderExamResultsScreen(session, record) {
    const resultsView = document.getElementById('simulados-results-view');
    if (!resultsView) return;

    const passed = record.percentage >= (session.exam.passingScore || 75);

    const filteredQuestions = session.questions
      .map((q, idx) => ({ q, idx, userAns: session.answers[idx], isFlagged: !!session.flagged[idx] }))
      .filter((item) => {
        if (session.reviewFilter === 'wrong') return item.userAns !== item.q.correct;
        if (session.reviewFilter === 'flagged') return item.isFlagged;
        return true;
      });

    resultsView.innerHTML = `
      <div class="card exam-results">
        <div class="flex-between">
          <div>
            <span class="badge ${passed ? 'badge-success' : 'badge-warning'}">
              ${passed ? '🏆 APROVADO NO SIMULADO (>= 75%)' : '⚠️ ABAIXO DA META DE SEGURANÇA (< 75%)'}
            </span>
            <h2 class="section-title mt-2">${escapeHtml(session.exam.title)} — Relatório Final</h2>
          </div>
          <div class="hero-actions" style="margin-top: 0;">
            <button type="button" id="btn-retry-exam" class="btn btn-primary btn-sm">🔄 Refazer Simulado</button>
            <button type="button" id="btn-back-catalog" class="btn btn-secondary btn-sm">📋 Voltar aos Simulados</button>
          </div>
        </div>

        <div class="results-hero">
          <div class="score-circle ${passed ? 'passed' : 'failed'}">
            <span class="score-number">${record.percentage}%</span>
            <span class="stat-sub">${record.score}/${record.total} acertos</span>
          </div>

          <div style="text-align: start; max-width: 36rem;">
            <h3 class="card-title mb-2">
              ${
                passed
                  ? 'Excelente desempenho! Você está alinhado com o Mindset PMI-CPMAI™.'
                  : 'Bom treino! Revise o gabarito comentado abaixo e seu Caderno de Erros.'
              }
            </h3>
            <p style="font-size: 0.9rem;">
              Tempo utilizado: <strong>${record.timeSpentFormatted}</strong> • Modo: <strong>${record.mode === 'exam' ? 'Prova Real' : 'Estudo Comentado'}</strong>.
              Todas as questões que você errou ou deixou em branco foram salvas automaticamente no seu <strong>Caderno de Erros</strong>.
            </p>
          </div>
        </div>

        <div>
          <h3 class="card-title mb-4">📊 Desempenho por Domínio do Conhecimento (ECO)</h3>
          <div class="domain-breakdown">
            ${Object.keys(record.domainStats)
              .map((dKey) => {
                const st = record.domainStats[dKey];
                const dPct = st.total > 0 ? Math.round((st.correct / st.total) * 100) : 0;
                const dInfo = DOMAIN_LABELS[dKey] || { name: dKey };
                return `
                <div class="domain-result-row">
                  <div class="flex-between">
                    <strong>${escapeHtml(dInfo.name)}</strong>
                    <span class="badge ${dPct >= 75 ? 'badge-success' : dPct >= 60 ? 'badge-warning' : 'badge-danger'}">
                      ${st.correct}/${st.total} (${dPct}%)
                    </span>
                  </div>
                  <div class="domain-bar">
                    <div class="domain-bar-fill" style="width: ${dPct}%;"></div>
                  </div>
                </div>
              `;
              })
              .join('')}
          </div>
        </div>

        <div>
          <div class="flex-between mb-4">
            <h3 class="card-title">📝 Gabarito Comentado Questão por Questão (${filteredQuestions.length})</h3>
            <div class="filter-pills" style="margin-bottom: 0;">
              <button type="button" class="filter-btn ${session.reviewFilter === 'all' ? 'active' : ''}" data-rev-filter="all">
                Todas (${session.questions.length})
              </button>
              <button type="button" class="filter-btn ${session.reviewFilter === 'wrong' ? 'active' : ''}" data-rev-filter="wrong">
                ❌ Erradas / Em Branco
              </button>
              <button type="button" class="filter-btn ${session.reviewFilter === 'flagged' ? 'active' : ''}" data-rev-filter="flagged">
                🚩 Marcadas para Revisão
              </button>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            ${filteredQuestions
              .map(({ q, idx, userAns }) => {
                const isCorrect = userAns === q.correct;
                const userLetter = userAns !== undefined ? ['A', 'B', 'C', 'D'][userAns] : 'Não respondida';
                const correctLetter = ['A', 'B', 'C', 'D'][q.correct];

                return `
                <article class="card" style="border-inline-start: 5px solid ${isCorrect ? 'var(--success-solid)' : 'var(--danger-solid)'};">
                  <div class="flex-between mb-2">
                    <span class="badge badge-brand">Questão ${idx + 1} • ${escapeHtml(q.domainName || '')}</span>
                    <span class="badge ${isCorrect ? 'badge-success' : 'badge-danger'}">
                      ${isCorrect ? `✓ Acertou (${correctLetter})` : `✕ Sua resposta: ${userLetter} | Correta: ${correctLetter}`}
                    </span>
                  </div>
                  <h4 class="mb-4">${escapeHtml(q.question)}</h4>
                  <div class="options-list mb-4">
                    ${toArray(q.options)
                      .map((opt, oIdx) => {
                        let cls = 'option-btn';
                        if (oIdx === q.correct) cls += ' correct';
                        else if (oIdx === userAns && !isCorrect) cls += ' wrong';
                        return `
                        <div class="${cls}" style="cursor: default;">
                          <span class="option-letter">${['A', 'B', 'C', 'D'][oIdx]}</span>
                          <span>${escapeHtml(opt)}</span>
                        </div>
                      `;
                      })
                      .join('')}
                  </div>
                  <div class="explanation-box ${isCorrect ? 'is-correct' : 'is-wrong'}">
                    <strong>Explicação Oficial PMI-CPMAI™:</strong>
                    <p>${escapeHtml(q.explanation)}</p>
                    ${q.examTip ? `<div class="exam-tip-box"><strong>💡 Dica de Prova:</strong> ${escapeHtml(q.examTip)}</div>` : ''}
                  </div>
                </article>
              `;
              })
              .join('')}
          </div>
        </div>
      </div>
    `;

    resultsView.querySelectorAll('[data-rev-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        session.reviewFilter = btn.getAttribute('data-rev-filter');
        renderExamResultsScreen(session, record);
      });
    });

    const retryBtn = document.getElementById('btn-retry-exam');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        launchExamSession(session.exam, session.mode);
      });
    }

    const backBtn = document.getElementById('btn-back-catalog');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        state.activeSession = null;
        resultsView.classList.add('hidden');
        document.getElementById('simulados-catalog-view').classList.remove('hidden');
        renderSimuladosCatalog();
      });
    }
  }

  // ==========================================================================
  // 10. VIEW 5: DICAS DE PROVA ("MINDSET PMI-CPMAI") & GUIA GITHUB PAGES
  // ==========================================================================
  function initTipsAndGithubSection() {
    const subtabs = document.getElementById('tips-subtabs');
    if (subtabs) {
      subtabs.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-tips-tab]');
        if (!btn) return;
        state.currentTipsTab = btn.getAttribute('data-tips-tab');
        subtabs.querySelectorAll('[data-tips-tab]').forEach((b) => {
          const active = b.getAttribute('data-tips-tab') === state.currentTipsTab;
          b.classList.toggle('active', active);
          b.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        renderTipsActiveTab();
      });
    }
    renderTipsActiveTab();
  }

  function renderTipsActiveTab() {
    const container = document.getElementById('tips-content-container');
    const content = window.STUDY_CONTENT;
    if (!container || !content) return;

    if (state.currentTipsTab === 'github') {
      renderGithubDeployGuide(container, content.githubGuide);
    } else {
      renderExamTipsAndMindset(container, content.examTips);
    }
  }

  function renderExamTipsAndMindset(container, tips) {
    if (!tips) return;
    const tm = tips.timeManagement || {};

    container.innerHTML = `
      <div class="callout callout-info mb-6">
        <span class="callout-icon" aria-hidden="true">🧠</span>
        <div>
          <strong>${escapeHtml(tips.title)}</strong>
          <p style="margin-top: 0.25rem;">${escapeHtml(tips.introduction)}</p>
        </div>
      </div>

      <h3 class="section-title mb-4">🏆 As 15 Regras de Ouro do "Mindset PMI-CPMAI™"</h3>
      <div class="tips-grid mb-6">
        ${toArray(tips.goldenRules)
          .map(
            (r) => `
          <article class="mindset-card">
            <div>
              <span class="badge badge-brand mb-2">Regra de Ouro #${r.number}</span>
              <h4 class="card-title mb-2">${escapeHtml(r.title)}</h4>
              <p style="font-size: 0.9rem; margin-bottom: 0.75rem;">${escapeHtml(r.rule)}</p>
            </div>

            <div class="glossary-card dont-card">
              <strong style="font-size: 0.8rem; color: var(--danger-text);">❌ Pensamento que Reprova:</strong>
              <p style="font-size: 0.825rem;">${escapeHtml(r.wrongThinking)}</p>
            </div>

            <div class="glossary-card do-card">
              <strong style="font-size: 0.8rem; color: var(--success-text);">✅ Mindset PMI-CPMAI (Acerta na Prova):</strong>
              <p style="font-size: 0.825rem;">${escapeHtml(r.rightMindset)}</p>
            </div>

            <div class="exam-tip-box" style="margin-top: auto;">
              <strong>🎯 Exemplo Real:</strong> ${escapeHtml(r.examExample)}
            </div>
          </article>
        `
          )
          .join('')}
      </div>

      <div class="card mb-6">
        <span class="badge badge-danger mb-2">Atenção Redobrada aos Distratores</span>
        <h3 class="card-title mb-4">⚠️ As 5 Armadilhas Clássicas que Mais Reprovam Candidatos</h3>
        <div class="grid-2">
          ${toArray(tips.classicTraps)
            .map(
              (tr) => `
            <div class="glossary-card dont-card">
              <h4 style="color: var(--danger-text);">${escapeHtml(tr.trap)}</h4>
              <p style="font-size: 0.85rem;"><strong>Por que caem:</strong> ${escapeHtml(tr.whyCandidatesFall)}</p>
              <p style="font-size: 0.85rem;"><strong>Como identificar no enunciado:</strong> ${escapeHtml(tr.howToSpot)}</p>
              <div class="exam-tip-box">
                <strong>✓ Ação Correta:</strong> ${escapeHtml(tr.correctAction)}
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>

      <div class="card">
        <span class="badge badge-info mb-2">Controle de Tempo Pearson VUE</span>
        <h3 class="card-title mb-2">⏱️ Estratégia de Gestão dos 160 Minutos para 120 Questões</h3>
        <p class="mb-4">${escapeHtml(tm.strategySummary || '')}</p>
        <div class="grid-2">
          <div>
            <h4 class="mb-2">Checkpoints de Relógio na Prova:</h4>
            <ul class="domain-tasks">
              ${toArray(tm.checkpoints)
                .map((c) => {
                  if (typeof c === 'object' && c !== null) {
                    return `<li><strong>${escapeHtml(c.questionMilestone)} (${escapeHtml(c.elapsedMinutes)} / ${escapeHtml(c.remainingTimer)}):</strong> ${escapeHtml(c.action)}</li>`;
                  }
                  return `<li>${escapeHtml(c)}</li>`;
                })
                .join('')}
            </ul>
          </div>
          <div>
            <h4 class="mb-2">Checklist de Véspera e Dia do Exame (Pearson VUE):</h4>
            <ul class="domain-tasks">
              ${toArray(tm.pearsonVueChecklist)
                .map((c) => `<li>${escapeHtml(c)}</li>`)
                .join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  function renderGithubDeployGuide(container, gh) {
    if (!gh) return;
    const browserMethod = gh.methodBrowser || { steps: [] };
    const terminalMethod = gh.methodTerminal || {};
    const mobileInstall = gh.mobileInstall || {};

    const renderMobileDeviceCard = (devObj, fallbackTitle) => {
      if (!devObj) return '';
      if (typeof devObj === 'string') {
        return `<div class="glossary-card"><strong>${escapeHtml(fallbackTitle)}</strong><p style="font-size: 0.85rem;">${escapeHtml(devObj)}</p></div>`;
      }
      return `
        <div class="glossary-card">
          <strong>${escapeHtml(devObj.icon || '📱')} ${escapeHtml(devObj.device || fallbackTitle)}</strong>
          <ul class="domain-tasks" style="margin-top: 0.35rem;">
            ${toArray(devObj.steps)
              .map((s) => `<li>${escapeHtml(s)}</li>`)
              .join('')}
          </ul>
        </div>
      `;
    };

    container.innerHTML = `
      <div class="callout callout-success mb-6">
        <span class="callout-icon" aria-hidden="true">🐙</span>
        <div>
          <strong>${escapeHtml(gh.title)}</strong>
          <p style="margin-top: 0.25rem;">${escapeHtml(gh.introduction)}</p>
        </div>
      </div>

      <div class="grid-2 mb-6">
        <div class="card">
          <span class="badge badge-success mb-2">Opção 1 • Mais Fácil (Sem Terminal)</span>
          <h3 class="card-title mb-2">${escapeHtml(browserMethod.title)}</h3>
          <p class="stat-sub mb-4">Tempo estimado: ${escapeHtml(browserMethod.estimatedTime)}</p>
          <div class="steps-list">
            ${toArray(browserMethod.steps)
              .map(
                (st) => `
              <div class="step-card" style="padding: 1rem;">
                <span class="step-number">${st.step}</span>
                <div>
                  <h4>${escapeHtml(st.title)}</h4>
                  <p style="font-size: 0.85rem; margin-top: 0.2rem;">${escapeHtml(st.description || st.detail || '')}</p>
                </div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>

        <div class="card">
          <span class="badge badge-brand mb-2">Opção 2 • Via Linha de Comando (Git CLI)</span>
          <h3 class="card-title mb-2">${escapeHtml(terminalMethod.title)}</h3>
          <p class="stat-sub mb-2">Tempo estimado: ${escapeHtml(terminalMethod.estimatedTime)}</p>
          <p style="font-size: 0.875rem; margin-bottom: 1rem;">${escapeHtml(terminalMethod.description)}</p>

          <div class="code-block">
            <button type="button" class="copy-btn" id="btn-copy-git-cmds">📋 Copiar Comandos</button>
            <pre id="git-cmds-pre">${escapeHtml(terminalMethod.commandsBlock || '')}</pre>
          </div>

          <div class="callout callout-info mt-4">
            <span class="callout-icon" aria-hidden="true">⚙️</span>
            <div>
              <strong>Ativando o GitHub Pages após o Push:</strong>
              <p style="font-size: 0.85rem; margin-top: 0.2rem;">${escapeHtml(terminalMethod.postPushNote || '')}</p>
            </div>
          </div>

          <h3 class="card-title mt-6 mb-2">${escapeHtml(mobileInstall.title || '📱 Como Instalar como App no Celular')}</h3>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${renderMobileDeviceCard(mobileInstall.ios, '🍎 No iPhone / iPad (Safari)')}
            ${renderMobileDeviceCard(mobileInstall.android, '🤖 No Android (Chrome)')}
          </div>
        </div>
      </div>
    `;

    const copyBtn = document.getElementById('btn-copy-git-cmds');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const text = terminalMethod.commandsBlock || '';
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard
            .writeText(text)
            .then(() => showToast('✓ Comandos Git copiados para a área de transferência!'));
        }
      });
    }
  }

  // ==========================================================================
  // 11. PROGRESSO GLOBAL & BACKUP / SINCRONIZAÇÃO JSON (<dialog>)
  // ==========================================================================
  function updateGlobalProgressUI() {
    const schedule = toArray(window.STUDY_CONTENT && window.STUDY_CONTENT.studySchedule);
    const allTasks = schedule.flatMap((w) => toArray(w.tasks));
    const totalTasks = allTasks.length || 1;
    const doneTasks = allTasks.filter((t) => !!state.completedTasks[t.id]).length;
    const taskPct = Math.round((doneTasks / totalTasks) * 100);

    const textEl = document.getElementById('global-progress-text');
    const fillEl = document.getElementById('global-progress-fill');
    const topLineEl = document.getElementById('top-progress-line-fill');

    if (textEl) textEl.textContent = `${taskPct}%`;
    if (fillEl) fillEl.style.width = `${taskPct}%`;
    if (topLineEl) topLineEl.style.width = `${taskPct}%`;

    const scoreEl = document.getElementById('stat-user-score');
    const doneEl = document.getElementById('stat-exams-done');
    if (state.examHistory.length > 0) {
      const avg = Math.round(
        state.examHistory.reduce((acc, h) => acc + h.percentage, 0) / state.examHistory.length
      );
      if (scoreEl) scoreEl.textContent = `${avg}%`;
      if (doneEl) doneEl.textContent = `${state.examHistory.length} simulado(s) concluído(s)`;
    } else {
      if (scoreEl) scoreEl.textContent = '--%';
      if (doneEl) doneEl.textContent = '0 simulados concluídos';
    }
  }

  function initSyncDialog() {
    const dialog = document.getElementById('sync-dialog');
    const openBtn = document.getElementById('btn-open-sync');
    const closeBtn = document.getElementById('btn-close-sync');
    const closeFooterBtn = document.getElementById('btn-close-sync-footer');
    const exportBtn = document.getElementById('btn-export-json');
    const importInput = document.getElementById('input-import-json');
    const clearAllBtn = document.getElementById('btn-clear-all-data');

    if (!dialog) return;

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        if (typeof dialog.showModal === 'function') dialog.showModal();
        else dialog.setAttribute('open', '');
      });
    }

    const closeDialog = () => {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeDialog);
    if (closeFooterBtn) closeFooterBtn.addEventListener('click', closeDialog);

    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const backup = {
          version: '1.0',
          exportedAt: new Date().toISOString(),
          completedTasks: state.completedTasks,
          examHistory: state.examHistory,
          mistakesMap: state.mistakesMap
        };
        const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `pmi-cpmai-progresso-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        showToast('📤 Backup exportado com sucesso!');
      });
    }

    if (importInput) {
      importInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          try {
            const parsed = JSON.parse(ev.target.result);
            if (parsed.completedTasks) {
              state.completedTasks = parsed.completedTasks;
              saveJson(STORAGE_KEYS.TASKS, state.completedTasks);
            }
            if (Array.isArray(parsed.examHistory)) {
              state.examHistory = parsed.examHistory;
              saveJson(STORAGE_KEYS.HISTORY, state.examHistory);
            }
            if (parsed.mistakesMap) {
              state.mistakesMap = parsed.mistakesMap;
              saveJson(STORAGE_KEYS.MISTAKES, state.mistakesMap);
            }
            renderScheduleWeeks();
            renderSimuladosCatalog();
            updateGlobalProgressUI();
            closeDialog();
            showToast('📥 Progresso importado e sincronizado com sucesso!');
          } catch (err) {
            showToast('❌ Arquivo JSON inválido.');
          }
        };
        reader.readAsText(file);
      });
    }

    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', () => {
        state.completedTasks = {};
        state.examHistory = [];
        state.mistakesMap = {};
        saveJson(STORAGE_KEYS.TASKS, state.completedTasks);
        saveJson(STORAGE_KEYS.HISTORY, state.examHistory);
        saveJson(STORAGE_KEYS.MISTAKES, state.mistakesMap);
        renderScheduleWeeks();
        renderSimuladosCatalog();
        updateGlobalProgressUI();
        closeDialog();
        showToast('🗑️ Dados locais apagados.');
      });
    }
  }

  function registerServiceWorker() {
    if (
      'serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || window.location.hostname === 'localhost')
    ) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
  }

  function safeRun(fn, label) {
    try {
      fn();
    } catch (err) {
      console.error('Erro ao inicializar ' + label + ':', err);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    safeRun(initTheme, 'Theme');
    safeRun(buildAllExamsCatalog, 'ExamsCatalog');
    safeRun(initNavigation, 'Navigation');
    safeRun(renderOverviewSection, 'OverviewSection');
    safeRun(initReferenceSection, 'ReferenceSection');
    safeRun(initScheduleSection, 'ScheduleSection');
    safeRun(initSimuladosSection, 'SimuladosSection');
    safeRun(initTipsAndGithubSection, 'TipsAndGithubSection');
    safeRun(initSyncDialog, 'SyncDialog');
    safeRun(updateGlobalProgressUI, 'GlobalProgressUI');
    safeRun(registerServiceWorker, 'ServiceWorker');
  });
})();
