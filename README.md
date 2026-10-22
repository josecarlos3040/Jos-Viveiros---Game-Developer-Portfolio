# Portfólio — José Viveiros

Site estático e responsivo. **Não precisa de React, npm, build, backend ou banco de dados.**

## Estrutura

```text
portfolio_reformulado/
├── index.html         ← página principal: apresentação + destaques
├── project.html       ← UMA página que abre qualquer projeto via URL
├── projects.js        ← ⭐ ÚNICO lugar para adicionar/editar/remover projetos
├── lang.js            ← traduções dos textos fixos do site (PT/EN)
├── app.js             ← renderiza os dados: geralmente não precisa editar
├── style.css          ← aparência, animações, responsividade e temas
└── image/             ← todas as imagens (mantidos os nomes originais)
```

## Como abrir

1. Extraia o ZIP.
2. Abra `index.html` no navegador (funciona direto como arquivo local).
3. Clique em um jogo: abre `project.html?id=nome-do-jogo`, com informações daquele projeto.
4. Para colocar na internet, publique **a pasta toda**, preservando `image/`.

Se desejar rodar um servidor local, abra a pasta no VS Code e use **Live Server**, ou rode `python -m http.server 8000` e acesse `http://localhost:8000/`.

## Como adicionar um jogo

Abra **`projects.js`** e adicione um novo objeto dentro da lista `window.PROJECTS`. Exemplo:

```js
{
  id: 'meu-novo-jogo',               // identificador ÚNICO, sem espaços
  title: 'Meu Novo Jogo',
  image: 'image/meu-jogo.png',        // salve a imagem na pasta image/
  featured: false,                  // true = destaque grande na home
  visible: true,                    // false = esconde temporariamente
  year: '2026',
  tools: ['Unity', 'C#'],
  role: { pt: 'Programação', en: 'Programming' },
  type: { pt: 'Projeto pessoal', en: 'Personal project' },
  label: { pt: 'JOGO INDEPENDENTE', en: 'INDIE GAME' },
  accent: '#c5ee83',
  links: [
    {
      title: { pt: 'Jogar no itch.io', en: 'Play on itch.io' },
      url: 'https://seu-nome.itch.io/meu-novo-jogo'
    }
  ],
  content: {
    pt: {
      summary: 'Resumo curto que aparece na home.',
      overview: 'O que é o jogo, sua proposta e contexto.',
      challenge: 'Qual desafio de programação ou design existiu.',
      solution: 'O que VOCÊ implementou especificamente.',
      highlights: ['Mecânica que fiz', 'Outro sistema que desenvolvi'],
      outcomes: ['Resultado verificável', 'Aprendizado do projeto']
    },
    en: {
      summary: 'Short description for the homepage.',
      overview: 'Game concept and context.',
      challenge: 'The design or engineering challenge.',
      solution: 'What YOU personally implemented.',
      highlights: ['Feature I built', 'Another system I developed'],
      outcomes: ['Measurable result', 'What I learned']
    }
  }
},
```

**Importante:** se copiar o último objeto da lista, confira a vírgula entre os objetos. Depois de salvar `projects.js`, o cartão e a página de detalhes surgem automaticamente.

## Como remover/reorganizar

- **Remover:** apague o objeto do `projects.js` ou mude `visible: true` para `visible: false`.
- **Colocar em destaque:** `featured: true`. Para tirar, `featured: false`.
- **Alterar ordem:** mova o objeto para cima/baixo no arquivo.
- **Alterar imagem:** coloque um PNG/JPG/WebP em `image/` e atualize o caminho `image`.
- **Ajustar recorte:** `imagePosition: 'center 30%'` (opcional, controla `object-position`).
- **Sem página pública:** deixe `links: []` e o botão externo não aparecerá na página de detalhes.
- **Português/inglês:** os textos de cada projeto ficam no próprio `content.pt` e `content.en`.
- **Adicionar screenshots:** o layout atual usa uma imagem principal por projeto. Para uma galeria no futuro, os projetos já estão centralizados e a expansão é simples.

## Personalizar seu perfil

- Textos gerais da home: `lang.js`.
- Nome, contatos e links sociais: `index.html` e `project.html` (header/footer).
- Identidade visual: variáveis CSS `:root` em `style.css`.
- O portfólio salva tema claro/escuro e idioma no navegador.

## Aviso de conteúdo

Os textos de estudos de caso são **rascunhos** baseados nas informações fornecidas sobre seus projetos. Revise especialmente o que você de fato implementou individualmente, datas, prêmios, métrica e links antes de publicar. Os links que já constavam no seu site foram mantidos, com exceção de links não confirmados para Goblin Explorer.
