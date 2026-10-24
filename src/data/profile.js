// Données publiques du profil : centraliser ici les coordonnées, liens et fichiers du portfolio.
export const profile = {
  // Nom affiché dans l'en-tête, le pied de page et les textes alternatifs.
  name: 'Prince Désiré AHOU',
  firstName: 'Prince Désiré',
  // Le CV présente un profil télécom / informatique orienté performance réseau.
  role: {
    fr: 'Ingénieur Performance Management · Télécoms & Informatique',
    en: 'Performance Management Engineer · Telecoms & IT'
  },
  tagline: { fr: 'Nous donnons vie à vos envies !', en: 'We bring your ideas to life!' },
  // Adresse reprise du CV : utilisée pour activer le lien mailto du portfolio.
  email: 'princedesirek@gmail.com',
  // Numéros issus du CV. Le format international est conservé pour les visiteurs.
  phones: ['+225 07 09 04 34 31', '+225 05 96 70 07 28'],
  location: { fr: 'Abidjan, Côte d’Ivoire', en: 'Abidjan, Côte d’Ivoire' },
  // Le portrait a été extrait de la photo présente dans le CV fourni.
  photo: '/images/profile/prince-ahou.jpeg',
  // Le PDF est placé dans public/ afin d'être servi directement par Vite et l'hébergement statique.
  cv: '/documents/Ahou-Kouame-CV.pdf',
  github: 'https://github.com/doyen5',
  linkedin: 'https://ci.linkedin.com/in/d%C3%A9sir%C3%A9-ahou/en'
}
