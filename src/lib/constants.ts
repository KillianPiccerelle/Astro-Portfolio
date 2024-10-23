import { link } from 'fs'
import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/KillianPiccerelle',
  linkedin: 'https://www.linkedin.com/in/killian-piccerelle/',
  mail: 'mailto:killianpiccerelle@sfr.fr',
  medium: 'https://medium.com/@killianpiccerelle',
}

// Global
export const SITE: Site = {
  TITLE: 'Piccerelle Killian',
  DESCRIPTION:
    'Welcome to Piccerelle Killian, a portfolio.',
  AUTHOR: 'Piccerelle Killian',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'BTS Services et informations aux organisations (Solutions logiciel applicatives et métiers) ',
    institution: 'Lycée Notre Dame Du Roc',
    link: 'https://lycee-ndduroc.com/notre-dame-du-roc-campus/formations-post-bac/bts-services-informatiques-aux-organisations/',
    date: '2019 - 2021',
  },
  {
    title: 'Baccalauréat Science et Technologie de l insdustrie et du développement durable | Lycée Les Iscles',
    institution: 'Lycée Les Iscles',
    link: 'https://www.site.ac-aix-marseille.fr/lyc-les-iscles/spip/',
    date: '2016 - 2019',
  },
]

export const EXPERIENCE = [
  {
    company: 'Maître Coq',
    location: 'Sainte-Hermine, France',
    position: 'Interimaire',
    link: 'https://www.maitrecoq.fr',
    start: 'Septembre 2023',
    end: 'Août 2024',
    tasks: [
      'Agent de ligne industrielle',
      'formation opérateur/approvisionneur puis gestionneur de flux d'+"'"+'atelier au conditionnement.',
    ],
  },
  {
    company: 'YellowNetwork',
    location: 'La Roche-sur-Yon',
    position: 'Stagiaire',
    link: 'https://www.yellow-network.com',
    start: 'Mars 2021',
    end: 'Aril 2021',
    tasks: [
      'Développement d'+"'"+'une application mobile en React Native. ',
      'Développement d'+"'"+'une API web pour communiquer avec l'+"'"+'application mobile. ',
      'Languages utilisés React native/CSS/SQL',
    ],
  },
  {
    company: 'Lycée Notre Dame-du-Roc',
    location: 'La Roche-sur-Yon',
    position: 'Stagiaire',
    link: 'https://www.yellow-network.com',
    start: 'Juillet 2020',
    end: 'Janvier 2021',
    tasks: [
      'Développement d'+"'"+'une application web. ',
      'Développement d'+"'"+'une API web pour communiquer avec l'+"'"+'application web. ',
      'Projet visant a la rédaction de dossier et de portoflios de connaissance pour le lycée. ',
      'Languages utilisés PHP/LARAVEL/HTML/CSS/SQL',
    ],
  },
]
