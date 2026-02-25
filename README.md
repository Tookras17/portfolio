# Portfolio — Alex Martin

> React 18 · Vite 5 · Tailwind CSS 3

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build production → dist/
npm run preview  # prévisualiser le build
```

## Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx                         ← Racine + état global
│   ├── main.jsx                        ← Point d'entrée React
│   ├── styles/
│   │   └── index.css                   ← Tailwind + styles globaux
│   ├── data/
│   │   └── index.js                    ← Toutes les données
│   ├── hooks/
│   │   └── useScrollReveal.js          ← Hook IntersectionObserver
│   └── components/
│       ├── layout/                     ← Mise en page globale
│       │   ├── Navbar.jsx
│       │   └── Footer.jsx
│       ├── sections/                   ← Sections de la page
│       │   ├── Hero.jsx
│       │   ├── Stats.jsx
│       │   ├── Projects.jsx
│       │   ├── Skills.jsx
│       │   └── Contact.jsx
│       └── ui/                         ← Composants atomiques
│           ├── AnimatedCounter.jsx
│           ├── SkillBar.jsx
│           └── ProjectCard.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Personnalisation

Modifier `src/data/index.js` pour mettre à jour projets, compétences et statistiques.
