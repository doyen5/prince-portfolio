// Catalogue des projets affichés dans la section « Réalisations ».
// Les textes sont bilingues pour suivre le sélecteur français/anglais du portfolio.
// Les tags décrivent les technologies lorsqu'elles sont connues, ou le domaine du produit
// lorsque la stack technique n'a pas été fournie. Complète les liens de dépôts précis
// lorsque tu souhaites pointer vers chaque dépôt GitHub plutôt que vers ton profil.
// Chaque projet pointe directement vers son dépôt GitHub public.

export const projects = [
  {
    slug: 'm-group-app',
    title: { fr: 'M Group App', en: 'M Group App' },
    summary: {
      fr: 'Application de gestion événementielle pour M Group, structure liée à l’artiste Molare.',
      en: 'Event-management application for M Group, an events company associated with artist Molare.'
    },
    description: {
      fr: 'Application de gestion événementielle organisée autour d’un frontend React/Vite et d’un backend NestJS avec Prisma. Le projet prévoit une base PostgreSQL lancée avec Docker, une authentification avec mots de passe hachés, JWT et refresh tokens, ainsi qu’une gestion des rôles : Admin, Secrétaire, Comptable, RH, Commercial, Client et Autre.',
      en: 'Event-management application built around a React/Vite frontend and a NestJS backend with Prisma. The project includes a PostgreSQL database launched with Docker, authentication with hashed passwords, JWT and refresh tokens, and role-based access for Admin, Secretary, Accountant, HR, Sales, Client and Other.'
    },
    category: 'business',
    year: 'Application métier',
    stack: ['React', 'Vite', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker', 'JWT'],
    repositoryUrl: 'https://github.com/doyen5/mgroup'
  },
  {
    slug: 'boyasmart-tech',
    title: { fr: 'BoyaSmart-Tech', en: 'BoyaSmart-Tech' },
    summary: {
      fr: 'Solution de prise de rendez-vous pour la réparation de smartphones en Côte d’Ivoire.',
      en: 'Appointment-booking solution for smartphone repairs in Côte d’Ivoire.'
    },
    description: {
      fr: 'Application web destinée à faciliter la mise en relation autour de la réparation de smartphones et à organiser la prise de rendez-vous. Le service est pensé pour le contexte ivoirien. La stack technique détaillée pourra être ajoutée lorsque les technologies du dépôt auront été confirmées.',
      en: 'A web application designed to make smartphone-repair services easier to access and to organize appointment booking. The service is designed for the Ivorian market. Its detailed technology stack can be added once the repository technologies have been confirmed.'
    },
    category: 'web',
    year: 'Application web',
    stack: ['Rendez-vous', 'Réparation smartphone', 'Côte d’Ivoire'],
    repositoryUrl: 'https://github.com/doyen5/BoyaSmart-Tech'
  },
  {
    slug: 'babi-location-ci',
    title: { fr: 'Babi Location CI', en: 'Babi Location CI' },
    summary: {
      fr: 'Site web et application mobile dédiés à la location de logements à prix accessibles.',
      en: 'Website and mobile application for finding more affordable rental housing.'
    },
    description: {
      fr: 'Projet de plateforme immobilière qui vise à faciliter la recherche et la location de maisons à prix plus accessibles. Le projet comprend une présence web et une application mobile. Les fonctionnalités précises et les technologies utilisées pourront être détaillées à partir du dépôt GitHub.',
      en: 'A property platform intended to make it easier to find and rent more affordable homes. The project includes a website and a mobile application. Specific features and technologies can be documented from the GitHub repository.'
    },
    category: 'mobile',
    year: 'Web & mobile',
    stack: ['Immobilier', 'Location de logements', 'Web', 'Mobile'],
    repositoryUrl: 'https://github.com/doyen5/babi-location-ci'
  },
  {
    slug: 'i-gestion',
    title: { fr: 'i_gestion', en: 'i_gestion' },
    summary: {
      fr: 'Application de gestion d’entreprise conçue pour plusieurs métiers et activités.',
      en: 'Business-management application designed for multiple trades and business activities.'
    },
    description: {
      fr: 'Application de gestion d’entreprise multi-métiers. Elle est présentée ici comme un projet de gestion généraliste ; les modules fonctionnels, profils utilisateurs et technologies pourront être précisés après vérification du contenu du dépôt.',
      en: 'A multi-trade business-management application. It is presented here as a general business-management project; its functional modules, user profiles and technologies can be specified after reviewing the repository.'
    },
    category: 'business',
    year: 'Application métier',
    stack: ['Gestion d’entreprise', 'Multi-métiers'],
    repositoryUrl: 'https://github.com/doyen5/i_gestion'
  }
]
