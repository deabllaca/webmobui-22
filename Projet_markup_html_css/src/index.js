import './css/index.css'

/**************** Implémentation de l'API pour recevoir les sons à partir d'un fichier JSON ****************/

// [Partie 1] — Comment récupérer l'API des artistes
const ARTIS_API = "https://webmob-ui-22-spotlified.herokuapp.com/api/artists";

// const monJson = '[
//   {"id":2,"name":"Alan Walker","image_url":"https://webmob-ui-22-spotlified.herokuapp.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b41ee2870130aa8fbec1d03d07293d9e6939b8c3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--182003c2101b045e9b5aec98ac388f079c4a05e1/image.jpg"},
//   {"id":3,"name":"Aya Waska","image_url":"https://webmob-ui-22-spotlified.herokuapp.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d941d46573da070442a13458115299d593a2311c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--182003c2101b045e9b5aec98ac388f079c4a05e1/image.jpg"},
//   {"id":4,"name":"Burak Yeter","image_url":"https://webmob-ui-22-spotlified.herokuapp.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4c1a3e3b7161eb2926cb73eab4ca21ccb0534c67/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--182003c2101b045e9b5aec98ac388f079c4a05e1/image.jpg"},
//   {"id":5,"name":"Dynoro","image_url":"https://webmob-ui-22-spotlified.herokuapp.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--96109d24f629e713e3d26c131944ae42a64c76f7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--182003c2101b045e9b5aec98ac388f079c4a05e1/image.jpg"},
//   {"id":6,"name":"Gamper \u0026 Dadoni","image_url":"https://webmob-ui-22-spotlified.herokuapp.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBIQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--02323663048872f245fb27c28a6f30d51cbdfaec/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--182003c2101b045e9b5aec98ac388f079c4a05e1/image.jpg"},
//   {"id":7,"name":"Gareth Emery","image_url":"https://webmob-ui-22-spotlified.herokuapp.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBJdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a78d6fd787ab3144627443133e6b757aa5c64340/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--182003c2101b045e9b5aec98ac388f079c4a05e1/image.jpg"},
//   {"id":8,"name":"Hilltop Hoods","image_url":"https://webmob-ui-22-spotlified.herokuapp.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBLUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5d76e07d5f4a4b65727c4d5114d4ee5d61064603/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--182003c2101b045e9b5aec98ac388f079c4a05e1/image.jpg"},
//   {"id":9,"name":"Kungs","image_url":"https://webmob-ui-22-spotlified.herokuapp.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--19824353e5f268e2b0637968d0866e8454592e47/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--182003c2101b045e9b5aec98ac388f079c4a05e1/image.jpg"},
//   {"id":10,"name":"Kygo","image_url":"https://webmob-ui-22-spotlified.herokuapp.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBOZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f7179e44153fc32792bf4ea33c894067a09c92c3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--182003c2101b045e9b5aec98ac388f079c4a05e1/image.jpg"},
//   {"id":11,"name":"Parov Stelar","image_url":"https://webmob-ui-22-spotlified.herokuapp.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBQUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1ff15bc19e48b76f9f4fa3d4f86ff921f6cbaf1a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--182003c2101b045e9b5aec98ac388f079c4a05e1/image.jpg"},
//   {"id":12,"name":"Sean Paul","image_url":"https://webmob-ui-22-spotlified.herokuapp.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBRZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--857dec8f3cffadfc750bf1855847fafeb116987b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--182003c2101b045e9b5aec98ac388f079c4a05e1/image.jpg"},
//   {"id":13,"name":"The Avener","image_url":"https://webmob-ui-22-spotlified.herokuapp.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBSZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--19b7f3dcc08419ede5c970ab5095261a146a64f4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--182003c2101b045e9b5aec98ac388f079c4a05e1/image.jpg"}
// ]'
// const monJsonpars = JSON.parse(monJson)
// console.log(monJsonpars.id);
// console.log(monJsonpars.name); 








/**************** Changer de section dans le onepager grâce au hash – 2 versions ****************/
/* [V1] Affichage de la section via le clic (addEventListener) */
// const links = document.querySelectorAll('nav a')

// links.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     document.querySelector('nav a.active').classList.remove('active')
//     link.classList.add('active')

//     console.log(link.href); //Permet d'obtenir le lien de la section
//     console.log(link.href.split('#')); //Permet de séparer au niveau de ce que l'on souhaite exemple au tiret ou au dièze


//     //Grâce aux classes actives, on peut afficher ce qu'on veut.
//     document.querySelectorAll('section').forEach((section) => section.id == link.href.split('#')[1] ? section.classList.add('active') : section.classList.remove('active'))
//   })
// })

/* [V2] Affichage de la section via le hash (window.location.hash) */
const displaySection = () => {
  // Comme nos hash et nos ids de section sont les mêmes, hash = sectionid
  //Pourquoi le hash ? Car justement c'est ce qui reprend l'id de la section !
  const sectionId = window.location.hash

  // Supprime/Ajoute la classe active sur la section
  document.querySelector('section.active')?.classList.remove('active')
  document.querySelector(sectionId)?.classList.add('active') //on ajoute l'active à la section correspondant à la section de l'URL

  // Supprime/Ajoute la classe active sur le footer nav (là où sont les boutons)
  document.querySelector('nav a.active')?.classList.remove('active')
  document.querySelector('nav a[href="' + sectionId + '"]')?.classList.add('active')
}

window.addEventListener('hashchange', displaySection) //détecte le changement de section puis affiche la séction

// Affichage au chargement
displaySection()