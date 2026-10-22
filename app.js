// Renderizador compartilhado: a home e os estudos de caso usam projects.js.
// Nenhuma edição manual de cartões no HTML é necessária.
(() => {
  'use strict';

  const projects = (window.PROJECTS || []).filter(project => project.visible !== false);
  const siteText = window.SITE_TEXT || {};
  const $ = (selector) => document.querySelector(selector);
  const safeStorage = {
    get(key) { try { return localStorage.getItem(key); } catch (_) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (_) { /* private mode */ } }
  };
  let lang = safeStorage.get('portfolio-language') === 'en' ? 'en' : 'pt';
  let theme = safeStorage.get('portfolio-theme') === 'light' ? 'light' : 'dark';
  const page = document.body.dataset.page || 'home';
  const currentId = new URLSearchParams(window.location.search).get('id');

  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
  const safeUrl = (url) => /^(https:\/\/|mailto:)/i.test(url || '') ? escapeHtml(url) : '#';
  const t = (key) => siteText[lang]?.[key] || key;
  const localized = (value) => typeof value === 'string' ? value : (value?.[lang] || value?.pt || '');
  const projectText = (project) => project?.content?.[lang] || project?.content?.pt || {};
  const projectHref = (project) => `project.html?id=${encodeURIComponent(project.id)}`;
  const tags = (project, max = 4) => `<ul class="tag-list" aria-label="Technologies">${(project.tools || []).slice(0, max).map(tag => `<li>${escapeHtml(tag)}</li>`).join('')}</ul>`;
  const projectStyle = (project) => `style="--project-accent:${escapeHtml(project.accent || '#d7f875')};--image-position:${escapeHtml(project.imagePosition || 'center')}"`;
  const image = (project, className, lazy = true) => `<img class="${className}" src="${escapeHtml(project.image)}" alt="${escapeHtml(lang === 'pt' ? `Imagem do projeto ${project.title}` : `Screenshot of ${project.title}`)}" ${lazy ? 'loading="lazy"' : ''}>`;
  const inlineLink = (project) => `<a href="${projectHref(project)}" class="project-link"><span>${escapeHtml(t('viewCase'))}</span><span aria-hidden="true">↗</span></a>`;

  function setTheme(nextTheme) {
    theme = nextTheme;
    document.documentElement.dataset.theme = theme;
    const button = $('#theme-toggle');
    if (button) button.setAttribute('aria-label', lang === 'pt' ? (theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro') : (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'));
    const icon = $('#theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? '☼' : '◐';
    const themeColor = $('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === 'dark' ? '#101310' : '#f5f5ee';
    safeStorage.set('portfolio-theme', theme);
  }

  function setLanguage(nextLang) {
    lang = nextLang;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    safeStorage.set('portfolio-language', lang);
    document.querySelectorAll('.language-button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
    });
    document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = t(element.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      // Apenas frases de interface definidas localmente em lang.js.
      element.innerHTML = t(element.dataset.i18nHtml);
    });
    if (page === 'home') renderHome();
    if (page === 'project') renderDetail();
    setTheme(theme);
  }

  function featuredCard(project, index) {
    const content = projectText(project);
    return `<article class="featured-project" ${projectStyle(project)}>
      <a href="${projectHref(project)}" class="featured-media" aria-label="${escapeHtml(`${t('viewCase')}: ${project.title}`)}">
        ${image(project, 'featured-image')}
        <span class="media-corner">${String(index + 1).padStart(2, '0')} / ${escapeHtml(project.year)}</span>
      </a>
      <div class="featured-info">
        <span class="featured-label">${escapeHtml(localized(project.label))}</span>
        <h3>${escapeHtml(project.title)}</h3>
        <p class="project-summary">${escapeHtml(content.summary)}</p>
        ${tags(project, 3)}
        ${inlineLink(project)}
      </div>
    </article>`;
  }

  function smallCard(project) {
    const content = projectText(project);
    return `<article class="other-project" ${projectStyle(project)}>
      <a href="${projectHref(project)}" class="other-project-media" aria-label="${escapeHtml(`${t('openProject')}: ${project.title}`)}">${image(project, 'other-image')}</a>
      <div class="other-project-info">
        <div class="other-project-top"><span>${escapeHtml(localized(project.label))}</span><span>${escapeHtml(project.year)}</span></div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(content.summary)}</p>
        ${inlineLink(project)}
      </div>
    </article>`;
  }

  function renderHome() {
    const featured = projects.filter(project => project.featured);
    const others = projects.filter(project => !project.featured);
    $('#featured-projects').innerHTML = featured.map(featuredCard).join('');
    $('#other-projects').innerHTML = others.map(smallCard).join('');
    document.title = lang === 'pt' ? 'José Viveiros — Desenvolvedor de Jogos' : 'José Viveiros — Game Developer';
    const description = $('meta[name="description"]');
    if (description) description.content = lang === 'pt'
      ? 'Portfólio de José Carlos de Viveiros Junior: programação de gameplay, Unity, Godot e projetos de jogos.'
      : 'José Carlos de Viveiros Junior — Game developer portfolio featuring Unity, Godot and gameplay programming projects.';
  }

  function detailSection(number, title, content) {
    if (!content) return '';
    return `<section class="case-section"><span class="case-section-number">${String(number).padStart(2, '0')} /</span><h2>${escapeHtml(title)}</h2><p>${escapeHtml(content)}</p></section>`;
  }

  function detailListSection(number, title, items) {
    if (!items?.length) return '';
    return `<section class="case-section"><span class="case-section-number">${String(number).padStart(2, '0')} /</span><h2>${escapeHtml(title)}</h2><ul class="case-list">${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>`;
  }

  function renderDetail() {
    const target = $('#project-detail');
    const project = projects.find(item => item.id === currentId);
    if (!project) {
      document.title = t('projectMissingTitle');
      target.innerHTML = `<section class="container not-found"><p class="eyebrow">404 / ERROR</p><h1>${escapeHtml(t('projectMissingTitle'))}</h1><p>${escapeHtml(t('projectMissingText'))}</p><a class="button button-primary" href="index.html#work">${escapeHtml(t('allProjects'))} ↗</a></section>`;
      return;
    }
    const content = projectText(project);
    const projectIndex = projects.findIndex(item => item.id === project.id);
    const next = projects[(projectIndex + 1) % projects.length];
    const nextNext = projects[(projectIndex + 2) % projects.length];
    const related = [next, nextNext].filter(item => item && item.id !== project.id);
    const links = (project.links || []).filter(link => link.url);
    document.title = `${project.title} — José Viveiros`;
    const description = $('meta[name="description"]');
    if (description) description.content = content.summary;
    const meta = (label, value) => `<div class="detail-meta-item"><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong></div>`;
    const sections = [
      detailSection(1, t('sectionOverview'), content.overview),
      detailSection(2, t('sectionChallenge'), content.challenge),
      detailSection(3, t('sectionSolution'), content.solution),
      detailListSection(4, t('sectionHighlights'), content.highlights),
      detailListSection(5, t('sectionOutcome'), content.outcomes)
    ].join('');

    const gallery = (project.gallery || [])
    .map(src => `
      <figure class="gallery-item">
        <img src="${escapeHtml(src)}" alt="Imagem de ${escapeHtml(project.title)}" loading="lazy">
      </figure>
    `).join('');


    const videoCards = (project.videos || [])
      .filter(video => video.type === 'youtube' && video.src)
      .map(video => `
        <figure class="project-video">

          <div class="project-video-frame ${video.orientation === 'portrait' ? 'portrait' : 'landscape'}">

            <iframe
              src="${safeUrl(video.src)}"
              title="${escapeHtml(localized(video.title))}"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen>
            </iframe>

          </div>

          <figcaption>
            ${escapeHtml(localized(video.title))}
          </figcaption>

        </figure>
      `).join('');

    const videoSection = videoCards ? `
      <section class="container project-videos">

        <div class="project-videos-header">
          <p class="eyebrow">
            ${escapeHtml(localized({
              pt: 'VÍDEOS DO PROJETO',
              en: 'PROJECT VIDEOS'
            }))}
          </p>

          <h2>
            ${escapeHtml(localized({
              pt: 'Veja o jogo em ação',
              en: 'See the game in action'
            }))}
          </h2>
        </div>

        <div class="project-videos-grid">
          ${videoCards}
        </div>

      </section>
    ` : '';

    target.innerHTML = `<section class="container detail-intro" ${projectStyle(project)}>
        <div class="breadcrumb"><a href="index.html#work">${escapeHtml(t('allProjects'))}</a><span aria-hidden="true">/</span><span>${escapeHtml(project.title)}</span></div>
        <div class="detail-intro-grid"><div><p class="detail-kicker">${escapeHtml(localized(project.label))} / ${escapeHtml(project.year)}</p><h1>${escapeHtml(project.title)}</h1><p class="detail-summary">${escapeHtml(content.summary)}</p></div>
        ${links.length ? `<a class="button button-primary detail-action" href="${safeUrl(links[0].url)}" target="_blank" rel="noopener noreferrer"><span>${escapeHtml(localized(links[0].title))}</span><span aria-hidden="true">↗</span></a>` : ''}
        </div>
        ${image(project, 'detail-cover', false)}
        <div class="detail-meta">
          ${meta(t('role'), localized(project.role))}
          ${meta(t('tools'), (project.tools || []).join(' / '))}
          ${meta(t('year'), project.year)}
          ${meta(t('type'), localized(project.type))}
        </div>
      </section>
      <section class="container case-study" aria-label="${escapeHtml(t('viewCase'))}">
        <aside class="case-study-aside"><p class="aside-title">${escapeHtml(t('portfolioLabel'))}</p><h2>${escapeHtml(project.title)}</h2><p>${escapeHtml(content.summary)}</p>${tags(project)}
          ${links.length ? `<div class="case-links">${links.map(link => `<a class="project-link" href="${safeUrl(link.url)}" target="_blank" rel="noopener noreferrer"><span>${escapeHtml(localized(link.title))}</span><span aria-hidden="true">↗</span></a>`).join('')}</div>` : ''}
        </aside><div class="case-study-body">${sections}</div>
      </section>
      
      ${gallery ? `
        <section class="container project-gallery">
          <div class="gallery-grid">
            ${gallery}
          </div>
        </section>
      ` : ''}

      ${videoSection}

      
      ${related.length ? `<section class="container more-cases"><div class="more-cases-head"><div><span class="section-index">${escapeHtml(t('nextProject'))}</span><h2>${escapeHtml(t('otherProjects'))}</h2></div><a class="text-link" href="index.html#work"><span>${escapeHtml(t('allProjects'))}</span><span aria-hidden="true">↗</span></a></div><div class="other-projects">${related.map(smallCard).join('')}</div></section>` : ''}
      <section class="detail-cta"><div class="container detail-cta-inner"><div><h2>${escapeHtml(t('projectFooter'))}</h2><p>${escapeHtml(t('projectFooterText'))}</p></div><a class="button button-primary" href="mailto:viveiros.jose02@gmail.com"><span>${escapeHtml(t('getInTouch'))}</span><span aria-hidden="true">↗</span></a></div></section>`;
  }

  function initialize() {
    document.querySelectorAll('.language-button').forEach(button => {
      button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });
    $('#theme-toggle')?.addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark'));
    const year = $('#current-year');
    if (year) year.textContent = new Date().getFullYear();
    setLanguage(lang);
  }

  initialize();
})();
