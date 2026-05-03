// =========================
// lang.js - Conteúdo Original com Suporte a Abas
// =========================

const texts = {
  en: {
    navbar: { about: "About", portfolio: "Portfolio", contact: "Contact" },
    about: `<p>
      I’m a 21-year-old Game Development student at <strong>FIAP</strong>, currently working more with <strong>Unity</strong> in both academic and independent projects.<br><br>
      I completed a <strong>Technical Course in Informatics</strong> at the <strong>Federal Institute of São Paulo (IFSP)</strong>, finishing in 2023. In that time, I gained professional experience through two internships.<br><br>
      First, I worked as a <strong>Web Development intern</strong>, creating and maintaining websites for a language learning platform. Later, I joined as a <strong>Data Analysis intern</strong> using <em>Python</em>, where I focused on handling and visualizing datasets.<br><br>
      In games, I contributed as a programmer on the project <strong>Izzy and Alli</strong>, which received awards such as <em>Change the Game</em> and <em>Sampa Games</em>. I also collaborate with <strong>Purfect Studio</strong>, mainly during Game Jams, prototyping creative and experimental titles.<br><br>
      Based in <strong>São Paulo, Brazil</strong>, I combine programming, data, and web experience with game development, building projects that balance creativity and technical execution.
    </p>`,
    portfolioTitle: "Portfolio",
    tabGames: "My Games",
    tabExternal: "Other Projects",
    projects: [
      {
        title: "Izzy and Alli",
        badge: "Award-winning",
        description: `Top-Down narrative game that won <em>Change the Game</em> and <em>Sampa Games</em>. I contributed as a <strong>Godot programmer</strong> and <strong>audio director</strong>.`,
        button: "Play on Itch.io",
        link: "https://owlstudio.itch.io/izzy-e-alli"
      },
      {
        title: "Paper Birdo",
        badge: "Game Jam",
        description: `Turn-based RPG created in <strong>3 days</strong> for the <em>Bird Game Jam</em>. I worked as a <strong>Unity programmer</strong>.`,
        button: "Play on Itch.io",
        link: "https://purrfectstudio.itch.io/paper-bird"
      },
      {
        title: "Depths of the Sleep",
        badge: "Game Jam",
        description: `Experimental card game made for the <em>Ludum Dare</em> jam. I worked as a <strong>Unity programmer</strong>.`,
        button: "Play on Itch.io",
        link: "https://purrfectstudio.itch.io/dephts-of-the-sleep"
      },
      {
        title: "Paper Forest",
        badge: "Game Concept",
        description: `A game concept of a 2D platformer where a maned wolf saves animals in a paper fire, made for Global Solution FIAP.`,
        button: "See in Figma",
        link: "https://www.figma.com/slides/jEu1diVIqTjek7ipczn5wW/Paper-Forest?node-id=1-81&t=a9P1FQJ9d0iOoItm-1"
      },
      {
        title: "Tentaclysm",
        badge: "Award-winning",
        description: `Tentaclysm is a 2D top-down arena shooter game that puts you in control of Octo on a quest for revenge. Top 10 Challenge Fiap 2025. I worked as a <strong>Unity programmer</strong>`,
        button: "Play on Itch.io",
        link: "https://zecavi.itch.io/tentaclysm?secret=OtYzJw3FPqo6pWuDWhAFGY44Vrc"
      },
      {
        title: "Blank Work",
        badge: "Game Jam",
        description: `BlankWork is a clicker game where your goal is to achieve success, generate money, hire people (or AI), buy stocks, or help NGOs; your choices can change the world. Made for Global Solution, The Future of Work. I worked as a <strong>Unity programmer</strong>`,
        button: "Play on Itch.io",
        link: "https://untitled-gamestudio.itch.io/blank-work"
      },

      {
        title: "Ninja Time",
        badge: "College Assignment",
        description: `Ninja Time is a game about the theme "Time cannot run out". A ninja seeking to overcome inner challenges must defeat versions of himself in a short period of time. I worked as a <strong>Unity programmer</strong> and artist!!`,
        button: "Jogar no Itch.io",
        link: "https://zecavi.itch.io/ninja-time"
      },

      {
        title: "Tech Art / Space",
        badge: "College assignment",
        description: `A short study video about a scene in space, using post-processing, shader lighting, and effects.`,
        button: "See on Youtube",
        link: "https://www.youtube.com/watch?v=_HxHS7afWVE"
      },

      {
        title: "Android / Study",
        badge: "College assignmen",
        description: `A short video about a hypercasual game where the scenery moves automatically and the player must avoid obstacles, made in a few hours on Unity for Android.`,
        button: "See on Youtube",
        link: "https://www.youtube.com/watch?v=L-4NmYMHUTg"
      }
    ],
    contactTitle: "Contact",
    contactSubtitle: "Let’s connect! Feel free to reach out:",
    footer: "&copy; 2025 José Viveiros - Game Developer Portfolio"
  },
  pt: {
    navbar: { about: "Sobre", portfolio: "Portfólio", contact: "Contato" },
    about: `<p>
      Tenho 21 anos e sou estudante de <strong>Desenvolvimento de Jogos Digitais na FIAP</strong>, atualmente trabalhando mais com <strong>Unity</strong> em projetos acadêmicos e independentes.<br><br>
      Concluí o <strong>Curso Técnico em Informática</strong> no <strong>Instituto Federal de São Paulo (IFSP)</strong> em 2023. Nesse tempo, adquiri experiência profissional em dois estágios.<br><br>
      Primeiro, atuei como <strong>estagiário em Desenvolvimento Web</strong>, criando e mantendo sites para uma plataforma de ensino de línguas. Mais tarde, trabalhei como <strong>estagiário em Análise de Dados</strong> com <em>Python</em>, voltado para tratamento e visualização de dados.<br><br>
      No campo dos jogos, fui programador no projeto <strong>Izzy and Alli</strong>, vencedor de prêmios como <em>Change the Game</em> e <em>Sampa Games</em>. Também colaboro com a <strong>Purfect Studio</strong>, principalmente em Game Jams, desenvolvendo protótipos criativos e experimentais.<br><br>
      Moro em <strong>São Paulo</strong> e busco unir minha experiência em programação, dados e web com o desenvolvimento de jogos, sempre equilibrando criatividade e execução técnica.
    </p>`,
    portfolioTitle: "Portfólio",
    tabGames: "Meus Jogos",
    tabExternal: "Outros Projetos",
    projects: [
      {
        title: "Izzy and Alli",
        badge: "Premiado",
        description: `Um jogo Top-Down de narrativa que ganhou <em>Change the Game</em> e <em>Sampa Games</em>. Atuei como <strong>programador Godot</strong> e <strong>diretor de áudio</strong>.`,
        button: "Jogar no Itch.io",
        link: "https://owlstudio.itch.io/izzy-e-alli"
      },
      {
        title: "Paper Birdo",
        badge: "Game Jam",
        description: `RPG por turnos criado em <strong>3 dias</strong> para a <em>Bird Game Jam</em>. Trabalhei como <strong>programador Unity</strong>.`,
        button: "Jogar no Itch.io",
        link: "https://purrfectstudio.itch.io/paper-bird"
      },
      {
        title: "Depths of the Sleep",
        badge: "Game Jam",
        description: `Jogo experimental de cartas feito para o jam <em>Ludum Dare</em>. Trabalhei como <strong>programador Unity</strong>.`,
        button: "Jogar no Itch.io",
        link: "https://purrfectstudio.itch.io/dephts-of-the-sleep"
      },
      {
        title: "Paper Forest",
        badge: "Conceito de Jogo",
        description: `Conceito de jogo 2D onde uma lobo-guará salva animais em um incêndio de papel, feito para Global Solution FIAP.`,
        button: "Ver no Figma",
        link: "https://www.figma.com/slides/jEu1diVIqTjek7ipczn5wW/Paper-Forest?node-id=1-81&t=a9P1FQJ9d0iOoItm-1"
      },
      {
        title: "Tentaclysm",
        badge: "Premiado",
        description: `Tentaclysm é um game arena shooter 2d Top-down onde te coloca no controle de Octo em busca de vingança. Top 10 Challenge Fiap 2025. Trabalhei como <strong>programador Unity</strong>.`,
        button: "Jogar no Itch.io",
        link: "https://zecavi.itch.io/tentaclysm?secret=OtYzJw3FPqo6pWuDWhAFGY44Vrc"
      },
      {
        title: "Blank Work",
        badge: "Game Jam",
        description: `BlankWork é um jogo de cliques onde seu objetivo é alcançar o sucesso, gerar dinheiro, contratar pessoas (ou IA), comprar ações ou ajudar ONGs; suas escolhas podem mudar o mundo. Criado para a Global Solution, O Futuro do Trabalho. Trabalhei como <strong>programador Unity</strong>.`,
        button: "Jogar no Itch.io",
        link: "https://untitled-gamestudio.itch.io/blank-work"
      },

      {
        title: "Ninja Time",
        badge: "Trabalho de Faculdade",
        description: `Ninja Time é um game sobre o tema "O tempo não pode acabar". Um ninja em busca de superar desafios internos deve derrotar versões de si mesmo em um curto período de tempo. Trabalhei como <strong>programador Unity</strong>. e artista!!`,
        button: "Jogar no Itch.io",
        link: "https://zecavi.itch.io/ninja-time"
      },

      {
        title: "Tech Art / Space",
        badge: "Trabalho de Faculdade",
        description: `Um breve video de estudo sobre uma cena no espaço, utilizando post processing, shader luzes e efeitos, feito na unity`,
        button: "Ver no Youtube",
        link: "https://www.youtube.com/watch?v=_HxHS7afWVE"
      },

      {
        title: "Android / Estudo",
        badge: "Trabalho de Faculdade",
        description: `Um breve video de um game hipercasual onde cenario se movimenta sozinho e o player deve desviar de obstaculos, feito em poucas horas na Unity para android`,
        button: "Ver no Youtube",
        link: "https://www.youtube.com/watch?v=L-4NmYMHUTg"
      }
    ],
    contactTitle: "Contato",
    contactSubtitle: "Vamos nos conectar! Fique à vontade para entrar em contato:",
    footer: "&copy; 2025 José Viveiros - Portfólio de José Viveiros"
  }
};

function setLanguage(lang) {
  // Navbar
  document.querySelectorAll('.navbar-nav .nav-link')[0].textContent = texts[lang].navbar.about;
  document.querySelectorAll('.navbar-nav .nav-link')[1].textContent = texts[lang].navbar.portfolio;
  document.querySelectorAll('.navbar-nav .nav-link')[2].textContent = texts[lang].navbar.contact;

  // About
  document.getElementById('about-text').innerHTML = texts[lang].about;

  // Portfolio Header e Abas
  document.querySelector('#portfolio h2').textContent = texts[lang].portfolioTitle;
  // Note: Certifique-se de que os IDs 'games-tab' e 'external-tab' existem no seu HTML
  if(document.getElementById('games-tab')) document.getElementById('games-tab').textContent = texts[lang].tabGames;
  if(document.getElementById('external-tab')) document.getElementById('external-tab').textContent = texts[lang].tabExternal;

  // Cards (Usa o data-index do HTML para garantir que o texto certo vá para o card certo)
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    const dataIndexElement = card.querySelector('[data-index]');
    if (dataIndexElement) {
      const i = dataIndexElement.getAttribute('data-index');
      const project = texts[lang].projects[i];
      
      // Atualiza Título e mantém o Badge
      const titleEl = card.querySelector('.card-title');
      if (titleEl) {
        titleEl.innerHTML = `${project.title} <span class="badge bg-primary">${project.badge}</span>`;
      }

      card.querySelector('.card-text').innerHTML = project.description;
      card.querySelector('a.btn').textContent = project.button;
      card.querySelector('a.btn').href = project.link;
    }
  });

  // Contact
  document.querySelector('#contact h2').textContent = texts[lang].contactTitle;
  document.querySelector('#contact p.mt-3').textContent = texts[lang].contactSubtitle;

  // Footer
  document.querySelector('footer p').innerHTML = texts[lang].footer;
}

document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('btn-pt').addEventListener('click', () => setLanguage('pt'));

// Inicializa em Português por padrão
document.addEventListener('DOMContentLoaded', () => setLanguage('pt'));

const darkBtn = document.getElementById('btn-dark');
const icon = darkBtn.querySelector('i');

// Carrega preferência
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
  icon.classList.remove('fa-moon');
  icon.classList.add('fa-sun');
}

darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');

  // troca ícone
  icon.classList.toggle('fa-moon', !isDark);
  icon.classList.toggle('fa-sun', isDark);

  localStorage.setItem('darkMode', isDark);
});