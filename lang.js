// =========================
// lang.js - Tradução da página
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
    portfolioTitle: "My Games",
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
        description: `Experimental card game made for the <em>Ludum Dare</em> jam. I contributed as a <strong>Unity programmer</strong>.`,
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
        description: `Tentaclysm is a 2D top-down arena shooter game that puts you in control of Octo on a quest for revenge. Top 10 Challenge Fiap 2025.`,
        button: "Play on Itch.io",
        link: "https://zecavi.itch.io/tentaclysm?secret=OtYzJw3FPqo6pWuDWhAFGY44Vrc"
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
    portfolioTitle: "Meus Jogos",
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
        description: `Jogo experimental de cartas feito para o jam <em>Ludum Dare</em>. Contribuí como <strong>programador Unity</strong>.`,
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
        description: `Tentaclysm é um game arena shooter 2d Top-down onde te coloca no controle de Octo em busca de vingança. Top 10 Challenge Fiap 2025`,
        button: "Jogar no Itch.io",
        link: "https://zecavi.itch.io/tentaclysm?secret=OtYzJw3FPqo6pWuDWhAFGY44Vrc"
      }
    ],
    contactTitle: "Contato",
    contactSubtitle: "Vamos nos conectar! Fique à vontade para entrar em contato:",
    footer: "&copy; 2025 José Viveiros - Portfólio de José Viveiros"
  }
};

// =========================
// Função para mudar idioma
// =========================
function setLanguage(lang) {
  // Navbar
  document.querySelectorAll('.navbar-nav .nav-link')[0].textContent = texts[lang].navbar.about;
  document.querySelectorAll('.navbar-nav .nav-link')[1].textContent = texts[lang].navbar.portfolio;
  document.querySelectorAll('.navbar-nav .nav-link')[2].textContent = texts[lang].navbar.contact;

  // About
  document.getElementById('about-text').innerHTML = texts[lang].about;

  // Portfolio
  document.querySelector('#portfolio h2').textContent = texts[lang].portfolioTitle;
  const projectCards = document.querySelectorAll('#portfolio .card');
  projectCards.forEach((card, i) => {
    const project = texts[lang].projects[i];
    card.querySelector('.card-title').childNodes[0].textContent = project.title + " "; // mantém o badge
    card.querySelector('.badge').textContent = project.badge;
    card.querySelector('.card-text').innerHTML = project.description;
    card.querySelector('a.btn').textContent = project.button;
    card.querySelector('a.btn').href = project.link;
  });

  // Contact
  document.querySelector('#contact h2').textContent = texts[lang].contactTitle;
  document.querySelector('#contact p.mt-3').textContent = texts[lang].contactSubtitle;

  // Footer
  document.querySelector('footer p').innerHTML = texts[lang].footer;
}

// =========================
// Eventos dos botões
// =========================
document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('btn-pt').addEventListener('click', () => setLanguage('pt'));

// Inicializa em inglês
setLanguage('en');
