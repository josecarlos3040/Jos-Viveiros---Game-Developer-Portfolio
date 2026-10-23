/*
  ╔══════════════════════════════════════════════════════════════╗
  ║                    GERENCIE SEUS PROJETOS AQUI               ║
  ╚══════════════════════════════════════════════════════════════╝

  ADICIONAR : copie um objeto { ... } desta lista e altere seus campos.
  REMOVER   : apague o objeto, ou use visible: false para ocultá-lo.
  DESTAQUE  : featured: true (aparece na seção principal da home).
  IMAGENS   : coloque seus arquivos em image/ e use image: 'image/arquivo.png'.
  ID        : deve ser único; define a URL project.html?id=meu-jogo.
  IDIOMAS   : preencha content.pt e content.en.
  LINKS     : opcionais. Use [] quando o projeto não tiver página pública.
  ORDEM     : segue a posição dos objetos na lista, dentro de cada seção.
*/

window.PROJECTS = [
  {
    id: 'goblin-explorer',
    title: 'Goblin Explorer',
    image: 'image/goblin.png',

    gallery: [
    'image/Goblin/image5.png',
    'image/Goblin/image4.png',
    ],

    videos: [
      {
      type: 'youtube',
      orientation: 'portrait',
      src: 'https://www.youtube.com/embed/hBPPI9UWTtM',
      title: {
        pt: 'Gameplay e movimentação',
        en: 'Gameplay and Movement'
      }
      },
      {
      type: 'youtube',
      orientation: 'portrait',
      src: 'https://www.youtube.com/embed/KaEnP-XseCo',
      title: {
        pt: 'Sistema de Revive e Salvamento',
        en: 'Revive and Save System'
      }
      }
    ],
    featured: true,
    visible: true,
    year: '2026',
    tools: ['Unity 6','Input System','LevelPlay','PlayerPrefs','Mobile / WebGL'],
    role: { pt: 'Programação · Gameplay mobile', en: 'Programming · Mobile gameplay' },
    type: { pt: 'Jogo hipercasual', en: 'Hypercasual game' },
    label: { pt: 'PROTÓTIPO MOBILE', en: 'MOBILE PROTOTYPE' },
    accent: '#8be1a6',
    links:  [{ title: { pt: 'Jogar no itch.io', en: 'Play on itch.io' }, url: 'https://untitled-gamestudio.itch.io/goblin-explorer' }],
    content: {
      pt: {
        summary: 'Um endless platformer vertical com física de estilingue, anúncios recompensados, sistema de revive e persistência de dados.',
        overview: 'Goblin Explorer é um jogo de plataforma 2D desenvolvido em Unity 6, no qual o jogador controla um goblin que precisa escalar um cenário vertical enquanto escapa de uma lava crescente. O jogo combina movimentação por estilingue, interação com paredes, obstáculos dinâmicos, coleta de moedas e progressão baseada em distância.',
        challenge: 'Desenvolver um sistema de movimentação baseado em física que fosse intuitivo em dispositivos móveis, além de integrar mecânicas de progressão, monetização e persistência de dados. Outro desafio foi implementar um sistema de revive que restaurasse corretamente o estado do jogo sem colocar o jogador em posições perigosas.',
        solution: 'Implementei a movimentação com estilingue, wall grab e wall slide, geração de obstáculos e lava dinâmica. Desenvolvi um sistema de revive utilizando anúncios recompensados por meio do LevelPlay e uma alternativa com moedas, cujo custo aumenta progressivamente. O revive utiliza a última posição segura registrada, restaurando controles, animações, câmera e o posicionamento da lava. Também implementei persistência local com PlayerPrefs para armazenar recordes e saldo de moedas entre sessões, incluindo rotinas de salvamento ao pausar ou fechar o jogo.',
        highlights: ['Movimentação com física de estilingue e controles adaptados para dispositivos móveis.','Sistema de wall grab, wall slide e geração dinâmica de obstáculos.','Lava ascendente e pontuação baseada na distância percorrida.','Integração de anúncios recompensados (Rewarded Ads) para reviver o jogador.','Sistema alternativo de revive com moedas e custo progressivo.','Registro da última posição segura para evitar revives em áreas perigosas.','Persistência de recordes e moedas utilizando PlayerPrefs.','Salvamento e carregamento de dados entre sessões, mesmo após fechar o jogo.','Interface de jogo, telas de morte, reinício e gerenciamento de estados.'],
        outcomes: ['Desenvolvimento de um jogo hipercasual com sistemas de gameplay e progressão integrados.','Implementação de monetização por anúncios recompensados.','Persistência de dados locais entre sessões.','Experiência com gerenciamento de estados, física 2D e integração de serviços na Unity.']
      },

      en: {
        summary: 'An endless vertical platformer featuring slingshot physics, rewarded ads, a revive system, and persistent player data.',
        overview: 'Goblin Explorer is a 2D platformer developed in Unity 6, where players control a goblin climbing a vertical environment while escaping rising lava. The game combines slingshot-based movement, wall interactions, dynamic obstacles, coin collection, and distance-based progression.',
        challenge: 'Design intuitive physics-based movement for mobile devices while integrating progression, monetization, and data persistence. Another challenge was creating a revive system capable of safely restoring the game state without placing the player in dangerous locations.',
        solution: 'I implemented slingshot movement, wall grabbing and sliding, obstacle spawning, and dynamic lava behavior. I developed a revive system using LevelPlay rewarded advertisements, alongside a coin-based alternative with progressively increasing costs. The revive system tracks the last safe position and restores player controls, animations, camera behavior, and lava positioning. I also implemented local data persistence using PlayerPrefs to retain high scores and coin balances across sessions, including save routines when the game is paused or closed.',
        highlights: ['Physics-based slingshot movement and mobile-friendly controls.','Wall grabbing, wall sliding, and dynamic obstacle spawning.','Rising lava and distance-based scoring.','Rewarded Ads integration for player revival.','Alternative coin-based revive system with progressive costs.','Safe position tracking to prevent reviving in hazardous areas.','Persistent high scores and currency using PlayerPrefs.','Saving and loading player data across game sessions.','Game UI, death screens, restart flow, and state management.'],
        outcomes: ['Developed a hypercasual game with integrated gameplay and progression systems.','Implemented rewarded-ad monetization.','Established local data persistence across sessions.','Gained practical experience with game state management, 2D physics, and Unity service integration.']
      }
    }
  },
  {
    id: 'orbiting',
    title: 'Orbiting',
    image: 'image/Orbiting.png',

    gallery: [
    'image/Orbiting/image1.png',
    'image/Orbiting/image.png',
    'image/Orbiting/image2.png'
    ],
    imagePosition: 'center',
    featured: true,
    visible: true,
    year: '2026',
    tools: ['Unity', 'C#', 'Cinemachine', 'UI'],
    role: { pt: 'Programação · Sistemas de gameplay', en: 'Programming · Gameplay systems' },
    type: { pt: 'Protótipo / Game jam', en: 'Prototype / Game jam' },
    label: { pt: 'EXPLORAÇÃO ESPACIAL', en: 'SPACE EXPLORATION' },
    accent: '#87c9ff',
    links: [{ title: { pt: 'Jogar no itch.io', en: 'Play on itch.io' }, url: 'https://untitled-gamestudio.itch.io/orbiting' }],
    content: {
      pt: {
        summary: 'Uma experiência de exploração espacial com escaneamento, coleta de recursos e evolução da nave.',
        overview: 'Em Orbiting, o jogador controla uma nave espacial, explora o ambiente e escaneia objetos para encontrar recursos. Esses recursos alimentam um ciclo de progressão com melhorias e gerenciamento da nave. O projeto foi desenvolvido em cerca de duas semanas e meia.',
        challenge: 'Fazer os sistemas de exploração, escaneamento e progressão conversarem entre si, comunicando ao jogador o que está acontecendo sem quebrar o ritmo da experiência.',
        solution: 'Implementei sistemas de detecção e escaneamento contextual usando modelos 3d na UI, interfaces com feedback de progresso, coleta de recursos e integração com melhorias da nave. Também trabalhei com movimentação de câmera e organização das interações.',
        highlights: ['Escaneamento de objetos com detecção e barra de progresso.', 'Coleta, inventário e melhorias para a nave.', 'Interface conectada ao estado dos sistemas de gameplay.', 'Movimentação e apresentação utilizando Cinemachine.'],
        outcomes: ['Protótipo desenvolvido em cerca de duas semanas e meia.', 'Integração de múltiplos sistemas em um mesmo loop de exploração.']
      },
      en: {
        summary: 'A space exploration experience built around scanning, gathering resources, and upgrading a spacecraft.',
        overview: 'In Orbiting, players pilot a spacecraft, explore the environment, and scan objects to discover resources. Those resources feed a progression loop of upgrades and ship management. The prototype was developed in about two and a half weeks.',
        challenge: 'Connect exploration, scanning, and progression while clearly communicating the game state to the player without interrupting the experience.',
        solution: 'I implemented detection and contextual scanning systems using 3D models on UI., progress feedback UI, resource collection, and integration with ship upgrades. I also worked on camera movement and gameplay interactions.',
        highlights: ['Object detection and scanning with progress feedback.', 'Resource collection, inventory, and spacecraft upgrades.', 'UI connected to live gameplay-system state.', 'Camera movement and presentation with Cinemachine.'],
        outcomes: ['Developed a playable prototype in about two and a half weeks.', 'Connected several gameplay systems in a single exploration loop.']
      }
    }
  },
    {
    id: 'izzy-and-alli',
    title: 'Izzy & Alli',
    image: 'image/Izzy e alli foto.png',

    gallery: [
    'image/IzziEAlli/image.png',
    'image/IzziEAlli/image1.png'
    ],
    imagePosition: 'center',
    featured: true,
    visible: true,
    year: '2024',
    tools: ['Godot', 'GDScript', 'Audio'],
    role: { pt: 'Programação · Direção de áudio', en: 'Programming · Audio direction' },
    type: { pt: 'Jogo independente', en: 'Independent game' },
    label: { pt: 'PROJETO PREMIADO', en: 'AWARD-WINNING PROJECT' },
    accent: '#bb9afb',
    links: [{ title: { pt: 'Jogar no itch.io', en: 'Play on itch.io' }, url: 'https://owlstudio.itch.io/izzy-e-alli' }],
    content: {
      pt: {
        summary: 'Um jogo narrativo top-down que começou em uma competição e chegou a eventos internacionais.',
        overview: 'Izzy & Alli é um jogo narrativo com perspectiva top-down, desenvolvido em equipe. O projeto começou na Change the Game e continuou sua trajetória no circuito independente, incluindo participações em eventos como a gamescom cologne.',
        challenge: 'Construir uma experiência narrativa coesa em equipe, fazendo os elementos técnicos e sonoros trabalharem a favor da atmosfera do jogo.',
        solution: 'Participei da implementação de funcionalidades em Godot e assumi responsabilidades de direção de áudio, colaborando para que programação, ambientação e experiência do jogador funcionassem em conjunto.',
        highlights: ['Programação de funcionalidades do jogo com Godot, como sistema de quests e interfaces.', 'Participação nas decisões e implementação de áudio.', 'Colaboração com equipe multidisciplinar em um projeto de longo prazo.'],
        
        outcomes: ['1º lugar na Change the Game.', 'Selecionado para o Sampa Games.', 'Apresentado na gamescom latam e na gamescom na Alemanha.']
      },
      en: {
        summary: 'A top-down narrative game that started at a competition and made its way to international gaming events.',
        overview: 'Izzy & Alli is a top-down narrative game developed by a team. The project began at Change the Game and continued its journey within the independent scene, including appearances at events such as gamescom Cologne.',
        challenge: 'Create a cohesive narrative experience as a team, making technical and audio elements support the overall atmosphere.',
        solution: 'I contributed to gameplay functionality in Godot and took on audio direction responsibilities, working across programming, ambiance, and the player experience.',
        highlights: ['Programming game features with Godot, such as the quest system and interfaces.', 'Contributed to audio direction and its implementation.', 'Collaborated with a multidisciplinary team on a long-running project.'],
        outcomes: ['1st place at Change the Game.', 'Selected for Sampa Games.', 'Showcased at gamescom latam and gamescom in Germany.']
      }
    }
  },


  {
    id: 'tentaclysm',
    title: 'Tentaclysm',
    image: 'image/Tentaclysm.png',

    gallery: [
    'image/Tentaclysm/LDMQiV.png',
    'image/Tentaclysm/QCZXsb.png',
    'image/Tentaclysm/RH4zsa.png'
    ],
    imagePosition: 'center',
    featured: false,
    visible: true,
    year: '2025',
    tools: ['Unity', 'C#', '2D'],
    role: { pt: 'Programação · Gameplay', en: 'Programming · Gameplay' },
    type: { pt: 'Challenge FIAP', en: 'FIAP Challenge' },
    label: { pt: 'TOP 10 / CHALLENGE FIAP', en: 'TOP 10 / FIAP CHALLENGE' },
    accent: '#ff8386',
    links: [{ title: { pt: 'Jogar no itch.io', en: 'Play on itch.io' }, url: 'https://zecavi.itch.io/tentaclysm?secret=OtYzJw3FPqo6pWuDWhAFGY44Vrc' }],
    content: {
      pt: {
        summary: 'Um arena shooter frenético em que Octo enfrenta ondas de inimigos usando diferentes tentáculos e habilidades.',
        overview: 'Tentaclysm é um jogo 2D de ação top-down protagonizado por Octo. O jogador sobrevive a ondas de inimigos, reúne recursos, melhora seu arsenal e enfrenta chefes em uma aventura de vingança com temática oceânica.',
        challenge: 'Construir um loop de combate claro e responsivo, com múltiplas armas, inimigos, progressão e balanceamento de dificuldade.',
        solution: 'Trabalhei na programação das mecânicas de combate, habilidades, equipamentos e progressão. O projeto combina ações rápidas, mudanças de armas, coleta de experiência e escolhas entre as ondas.',
        highlights: ['Sistema de seis tentáculos equipáveis e diferentes tipos de ataque.', 'cooldowns, knockback e projéteis.', 'Ondas de inimigos, chefes, level up.', 'Coleta de experiência e melhorias.'],
        outcomes: ['Top 10 entre os projetos do Challenge FIAP 2025.', 'Experiência prática na integração de diversos sistemas de combate e progressão.']
      },
      en: {
        summary: 'A fast-paced arena shooter where Octo fights enemy waves with different tentacles and abilities.',
        overview: 'Tentaclysm is a 2D top-down action game starring Octo. Players survive enemy waves, collect resources, upgrade their arsenal, and fight bosses in an ocean-themed revenge adventure.',
        challenge: 'Build a clear, responsive combat loop featuring multiple weapons, enemies, progression, and a difficulty curve.',
        solution: 'I worked on combat mechanics, abilities, equipment, and progression systems. The game combines quick actions, weapon choices, experience pickups, and between-wave upgrades.',
        highlights: ['Six equippable tentacles and multiple attack types.', 'cooldowns, knockback, and projectiles.', 'Enemy waves, bosses, level up', 'Experience and upgrades.'],
        outcomes: ['Ranked in the Top 10 at FIAP Challenge 2025.', 'Hands-on experience integrating combat and progression systems.']
      }
    }
  },
  {
    id: 'blank-work',
    title: 'Blank Work',
    image: 'image/Blank Work.png',

    gallery: [
    'image/BlankWork/1.png',
    'image/BlankWork/2.png',
    'image/BlankWork/3.png',
    'image/BlankWork/4.png',
    ],
    featured: false,
    visible: true,
    year: '—',
    tools: ['Unity', 'C#', 'UI'],
    role: { pt: 'Programação', en: 'Programming' },
    type: { pt: 'Global Solution FIAP', en: 'FIAP Global Solution' },
    label: { pt: 'SIMULAÇÃO / CLICKER', en: 'SIMULATION / CLICKER' },
    accent: '#f0cda1',
    links: [{ title: { pt: 'Jogar no itch.io', en: 'Play on itch.io' }, url: 'https://untitled-gamestudio.itch.io/blank-work' }],
    content: {
      pt: {
        summary: 'Um clicker sobre trabalho, dinheiro e escolhas que afetam o mundo ao redor do jogador.',
        overview: 'Blank Work é um jogo incremental com decisões sobre contratação de pessoas, uso de inteligência artificial, investimentos e apoio a ONGs. Foi criado para a Global Solution com o tema Futuro do Trabalho.',
        challenge: 'Traduzir decisões econômicas e sociais em uma mecânica de progressão compreensível para o jogador.',
        solution: 'Participei da programação em Unity, contribuindo para as funcionalidades do jogo e para a conexão entre ações do jogador, interface e progressão.',
        highlights: ['Interações e ações típicas de jogos clicker.', 'Sistemas de decisões, economia e progressão.', 'Interface que comunica mudanças no estado do jogo.'],
        outcomes: ['Protótipo produzido para a Global Solution — Futuro do Trabalho.']
      },
      en: {
        summary: 'A clicker game about work, money, and decisions that change the world around the player.',
        overview: 'Blank Work is an incremental game featuring decisions about hiring people, using AI, investing, and supporting NGOs. It was built for the Future of Work FIAP Global Solution.',
        challenge: 'Translate economic and social choices into a progression system players can easily understand.',
        solution: 'I contributed Unity programming, working on game features and the connection between player actions, UI, and progression.',
        highlights: ['Clicker-style interactions and player actions.', 'Decision, economy, and progression systems.', 'UI communicating changes in the game state.'],
        outcomes: ['Prototype built for the Future of Work Global Solution.']
      }
    }
  },
  {
    id: 'paper-birdo',
    title: 'Paper Birdo',
    image: 'image/Paper Birdo foto.png',

    gallery: [
    'image/Paper/1.png',
    'image/Paper/2.png',
    'image/Paper/3.png'
    ],
    featured: false,
    visible: true,
    year: '2025',
    tools: ['Unity', 'C#', '2D'],
    role: { pt: 'Programação', en: 'Programming' },
    type: { pt: 'Game jam · 3 dias', en: 'Game jam · 3 days' },
    label: { pt: 'BIRD GAME JAM', en: 'BIRD GAME JAM' },
    accent: '#efdd93',
    links: [{ title: { pt: 'Jogar no itch.io', en: 'Play on itch.io' }, url: 'https://purrfectstudio.itch.io/paper-bird' }],
    content: {
      pt: {
        summary: 'Um RPG por turnos com visual de papel desenvolvido em apenas três dias.',
        overview: 'Paper Birdo nasceu durante a Bird Game Jam. Um RPG por turnos, com identidade visual inspirada em papel, produzido em equipe de 2 pessoas sob um prazo de três dias.',
        challenge: 'Transformar uma ideia em uma experiência jogável com sistemas de RPG dentro de um prazo extremamente curto.',
        solution: 'Contribuí com programação em Unity, colaborando com a equipe para implementar e integrar os elementos necessários ao protótipo, além das artes também.',
        highlights: ['Programação de um protótipo de RPG por turnos.', 'Integração de gameplay e interface em Unity.','Colaboração e priorização de escopo durante a game jam.'],
        outcomes: ['Protótipo criado durante uma game jam de três dias.']
      },
      en: {
        summary: 'A turn-based RPG with a paper-inspired art style, built in just three days.',
        overview: 'Paper Birdo was created during the Bird Game Jam. A turn-based RPG with a paper-inspired visual style, produced by a two-person team within a three-day deadline.',
        challenge: 'Turn an idea into a playable RPG with only three days available.',
        solution: 'I contributed with programming in Unity, collaborating with the team to implement and integrate the elements required for the prototype, as well as the artwork.',
        highlights: ['Turn-based RPG prototype programming.', 'Gameplay and UI integration in Unity.', 'Team collaboration and scope prioritization during the jam.'],
        outcomes: ['Prototype completed during a three-day game jam.']
      }
    }
  },
  {
    id: 'depths-of-the-sleep',
    title: 'Depths of the Sleep',
    image: 'image/ludum dare.png',

    gallery: [
    'image/Depths/1.png',
    'image/Depths/2.png'
    ],
    featured: false,
    visible: true,
    year: '2025',
    tools: ['Unity', 'C#'],
    role: { pt: 'Programação', en: 'Programming' },
    type: { pt: 'Ludum Dare', en: 'Ludum Dare' },
    label: { pt: 'GAME JAM', en: 'GAME JAM' },
    accent: '#b2cbbf',
    links: [{ title: { pt: 'Jogar no itch.io', en: 'Play on itch.io' }, url: 'https://purrfectstudio.itch.io/dephts-of-the-sleep' }],
    content: {
      pt: {
        summary: 'Um jogo experimental de cartas criado para a Ludum Dare.',
        overview: 'Depths of the Sleep é uma experiência experimental baseada em cartas, desenvolvida em equipe durante uma edição da Ludum Dare.',
        challenge: 'Prototipar uma proposta diferente e integrar rapidamente as interações centrais do jogo dentro do tempo de uma game jam.',
        solution: 'Atuei com programação em Unity, auxiliando a equipe a transformar o conceito em um protótipo jogável, atuando principalmente nas mecânicas das cartas.',
        highlights: ['Programação de sistemas de um jogo experimental de cartas.', 'Desenvolvimento rápido e integração em equipe.', 'Iteração de mecânicas.'],
        outcomes: ['Protótipo desenvolvido e publicado para a Ludum Dare.']
      },
      en: {
        summary: 'An experimental card game created for Ludum Dare.',
        overview: 'Depths of the Sleep is an experimental card-based experience developed by a team during a Ludum Dare game jam.',
        challenge: 'Prototype an unusual concept and integrate its core interactions within a limited jam timeframe.',
        solution: 'I worked on programming in Unity, helping the team turn the concept into a playable prototype, focusing primarily on card mechanics.',
        highlights: ['Programming for an experimental card-based game.', 'Rapid development and team integration.', 'Iterating on mechanics.'],
        outcomes: ['Prototype developed and published for Ludum Dare.']
      }
    }
  },

  {
    id: 'ninja-time',
    title: 'Ninja Time',
    image: 'image/Ninja Time.png',
    featured: false,
    visible: false,
    year: '—',
    tools: ['Unity', 'C#', 'Pixel Art'],
    role: { pt: 'Programação · Arte', en: 'Programming · Art' },
    type: { pt: 'Projeto acadêmico', en: 'Academic project' },
    label: { pt: 'AÇÃO / PIXEL ART', en: 'ACTION / PIXEL ART' },
    accent: '#f09a7b',
    links: [{ title: { pt: 'Jogar no itch.io', en: 'Play on itch.io' }, url: 'https://zecavi.itch.io/ninja-time' }],
    content: {
      pt: {
        summary: 'Um ninja enfrenta diferentes versões de si mesmo antes que o tempo acabe.',
        overview: 'Ninja Time parte da ideia de que “o tempo não pode acabar”: o protagonista precisa superar desafios internos e enfrentar versões de si em uma experiência de ação curta.',
        challenge: 'Construir um conceito de ação centrado na pressão do tempo e criar sua apresentação visual.',
        solution: 'Atuei em programação com Unity e também na parte artística, conciliando a implementação do jogo com sua identidade visual.',
        highlights: ['Programação do protótipo em Unity.', 'Participação na criação de arte para o jogo.', 'Mecânica e tema estruturados em torno do tempo.'],
        outcomes: ['Projeto acadêmico publicado no itch.io.']
      },
      en: {
        summary: 'A ninja faces different versions of himself before time runs out.',
        overview: 'Ninja Time is built around the theme “time cannot run out”: the main character must overcome inner challenges and face versions of himself in a short action experience.',
        challenge: 'Build an action concept around time pressure and develop its visual presentation.',
        solution: 'I worked on Unity programming as well as art, balancing implementation and the game’s visual identity.',
        highlights: ['Unity prototype programming.', 'Contributions to the game’s art.', 'A mechanic and theme built around time.'],
        outcomes: ['Academic project published on itch.io.']
      }
    }
  },
  {
    id: 'paper-forest',
    title: 'Paper Forest',
    image: 'image/Paper forest.png',
    featured: false,
    visible: false,
    year: '—',
    tools: ['Game Design', 'Figma', '2D'],
    role: { pt: 'Conceito de jogo · Projeto em equipe', en: 'Game concept · Team project' },
    type: { pt: 'Conceito / Global Solution', en: 'Concept / Global Solution' },
    label: { pt: 'GAME CONCEPT', en: 'GAME CONCEPT' },
    accent: '#fbde7d',
    links: [{ title: { pt: 'Ver apresentação no Figma', en: 'View presentation on Figma' }, url: 'https://www.figma.com/slides/jEu1diVIqTjek7ipczn5wW/Paper-Forest?node-id=1-81&t=a9P1FQJ9d0iOoItm-1' }],
    content: {
      pt: {
        summary: 'Um conceito de plataforma 2D sobre um lobo-guará resgatando animais de um incêndio.',
        overview: 'Paper Forest é uma proposta de jogo de plataforma 2D com temática ambiental, criada para a Global Solution da FIAP. A história acompanha um lobo-guará que tenta salvar animais durante um incêndio em uma floresta de papel.',
        solution: 'Participei do desenvolvimento da proposta em equipe, estruturando um conceito de experiência que combina plataforma e mensagem socioambiental.',
        highlights: ['Conceito de jogo de plataforma 2D.', 'Temática de preservação ambiental.', 'Apresentação da proposta em Figma.'],
        outcomes: ['Conceito apresentado para a Global Solution FIAP.']
      },
      en: {
        summary: 'A 2D platformer concept about a maned wolf rescuing animals from a forest fire.',
        overview: 'Paper Forest is an environmental 2D platformer concept created for FIAP Global Solution. The story follows a maned wolf trying to save animals during a fire in a paper forest.',
        solution: 'I contributed to developing the team concept, shaping an experience that combines platform gameplay and a social/environmental message.',
        highlights: ['2D platformer game concept.', 'Environmental preservation theme.', 'Concept presentation in Figma.'],
        outcomes: ['Concept presented for FIAP Global Solution.']
      }
    }
  },
  {
    id: 'tech-art-Zelda',
    title: 'Tech Art - Arvore Deku + Master Sword',
    image: 'image/Tech Art2.png',
    featured: false,
    visible: true,
    year: '2026',
    tools: ['Unity', 'Shaders', 'Post-processing', 'FlipBook'],
    role: { pt: 'Tech Art · Cena 3D', en: 'Tech Art · 3D scene' },
    type: { pt: 'Estudo técnico', en: 'Technical study' },
    label: { pt: 'TECH ART', en: 'TECH ART' },
    accent: '#9bb6d8',
    links: [{ title: { pt: 'Assistir no YouTube', en: 'Watch on YouTube' }, url: 'https://www.youtube.com/watch?v=3N69hPds5is' }],
    content: {
      pt: {
        summary: 'Estudo visual de ambiente espacial com iluminação, shaders, animação FlipBook, post-processing, e criação de alguns modelos 3d como a espada, altar e alguns props.',
        overview: 'Uma cena 3D criada como exercício de Tech Art em Unity, explorando como iluminação e efeitos de pós-processamento podem transformar a percepção de um ambiente.',
        challenge: 'Compor uma cena low-poly legível e atmosférica usando recursos técnicos de renderização, implementando animações flipbook.',
        solution: 'Experimentei com criação de modelos, shaders, iluminação e pós-processamento para compor a cena e apresentar o resultado em vídeo.',
        highlights: ['Construção e composição de cena 3D.', 'Iluminação e efeitos de pós-processamento.', 'Apresentação em vídeo do estudo.'],
        outcomes: ['Estudo técnico com vídeo demonstrativo.']
      },
      en: {
        summary: 'Visual study of a space environment, featuring lighting, shaders, FlipBook animation, post-processing, and the creation of various 3D models, such as a sword, an altar, and several props.',
        overview: 'A 3D scene created as a Unity Tech Art exercise, exploring how lighting and post-processing shape the atmosphere and readability of an environment.',
        challenge: 'Compose a legible and atmospheric low-poly scene using technical rendering features, while implementing flipbook animations.',
        solution: 'I experimented with model creation, shaders, lighting, and post-processing to compose the scene and present the result in a video.',
        highlights: ['3D scene building and composition.', 'Lighting and post-processing effects.', 'Short video demonstration.'],
        outcomes: ['Completed technical study with a demonstration video.']
      }
    }
  },

    {
    id: 'tech-art-space',
    title: 'Tech Art / Space',
    image: 'image/Tech Art1.png',
    featured: false,
    visible: true,
    year: '2026',
    tools: ['Unity', 'Shaders', 'Post-processing'],
    role: { pt: 'Tech Art · Cena 3D', en: 'Tech Art · 3D scene' },
    type: { pt: 'Estudo técnico', en: 'Technical study' },
    label: { pt: 'TECH ART', en: 'TECH ART' },
    accent: '#9bb6d8',
    links: [{ title: { pt: 'Assistir no YouTube', en: 'Watch on YouTube' }, url: 'https://www.youtube.com/watch?v=_HxHS7afWVE' }],
    content: {
      pt: {
        summary: 'Estudo visual de ambiente espacial com iluminação, shaders e pós-processamento.',
        overview: 'Uma cena 3D criada como exercício de Tech Art em Unity, explorando como iluminação e efeitos de pós-processamento podem transformar a percepção de um ambiente.',
        highlights: ['Construção e composição de cena 3D.', 'Iluminação e efeitos de pós-processamento.', 'Apresentação em vídeo do estudo.'],
      },
      en: {
        summary: 'A visual environment study using lighting, shaders, and post-processing in a sci-fi setting.',
        overview: 'A 3D scene created as a Unity Tech Art exercise, exploring how lighting and post-processing shape the atmosphere and readability of an environment.',
        highlights: ['3D scene building and composition.', 'Lighting and post-processing effects.', 'Short video demonstration.'],
      }
    }
  },
  {
    id: 'android-study',
    title: 'Android / Study',
    image: 'image/Android.png',
    featured: false,
    visible: false,
    year: '—',
    tools: ['Unity', 'C#', 'Android'],
    role: { pt: 'Programação · Protótipo', en: 'Programming · Prototype' },
    type: { pt: 'Estudo mobile', en: 'Mobile study' },
    label: { pt: 'ESTUDO MOBILE', en: 'MOBILE STUDY' },
    accent: '#90dbaa',
    links: [{ title: { pt: 'Ver postagem no LinkedIn', en: 'View LinkedIn post' }, url: 'https://www.linkedin.com/feed/update/urn:li:activity:7465157612934848513/' }],
    content: {
      pt: {
        summary: 'Estudo de controles de toque e lançamento com estilingue em um jogo vertical para Android.',
        overview: 'Um exercício de desenvolvimento mobile em Unity: o personagem sobe por um cenário vertical usando toques e lançamentos com efeito de estilingue, desviando de obstáculos e escapando da lava.',
        challenge: 'Adaptar uma ação física de lançamento para uma interação de toque simples e fácil de compreender.',
        solution: 'Trabalhei em um protótipo para Android com mecânica de estilingue, obstáculos e condição de derrota ligada ao avanço da lava.',
        highlights: ['Controles baseados em toque.', 'Mecânica de lançamento com estilingue.', 'Estrutura de desafio vertical com obstáculos e lava.'],
        outcomes: ['Estudo mobile produzido em aproximadamente duas semanas.']
      },
      en: {
        summary: 'A study of touch controls and slingshot movement in a vertical Android game.',
        overview: 'A Unity mobile development exercise: the character climbs a vertical level with touch-based slingshot movement, dodging obstacles while escaping lava.',
        challenge: 'Adapt physical launching into a touch interaction that is easy to understand.',
        solution: 'I worked on an Android prototype featuring slingshot movement, obstacles, and a rising-lava fail state.',
        highlights: ['Touch-based controls.', 'Slingshot launch mechanic.', 'Vertical challenge with obstacles and lava.'],
        outcomes: ['Mobile study made in approximately two weeks.']
      }
    }
  }
];
