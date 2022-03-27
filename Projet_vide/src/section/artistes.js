import { getArtists } from '../api'

// Il faut bien retenir que notre fichier JSON comporte les données de chaque artistes, composées des variables [id; name; image_url]

// Rappel du template HTML sur lequel on doit injecter des informations de notre JSON:
// <template id="artist-list-item-template">
//    <a href="#">
//    <img src="" />
//       <div class="artist-list-item-title"></div>
//    </a>
// </template>

// Les tags dont nous avons besoin pour afficher les artistes
let artistList = document.querySelector('.artist-list') //la div de classe 'artist-list'
let artistListItemTemplate = document.querySelector('#artist-list-item-template') //le template de classe 'artist-ist-item...'

// Fonction qui affiche un artiste
function rendreArtiste(artist) {
  const newArtist = artistListItemTemplate.content.cloneNode(true)
  // console.log(artist) //on clone un template pour l'artiste en question => chaque artiste aura son propre clone
  newArtist.querySelector('a').href = '#artists-' + artist.id //ici on va cibler le href du template pour lui ajouter le hash de l'artiste qui se composte de artists- et de l'id qu'il a via le fichier json
  // newArtist.querySelector('#artist-list-item-template a').href = '#artists-' + artist.id + '/songs/' + song.id
  newArtist.querySelector('img').src = artist.image_url //on cible l'image attribué à l'artist dans le JSON (image_url)
  newArtist.querySelector('.artist-list-item-title').innerText = artist.name //on cible la div pour lui ajouter du texte, à savoir le nom de l'artiste
  artistList.append(newArtist) //quand on fait un clone il faut toujours valider sa création en faisant un append
}

// Itère sur toutes les artistes
function renderArtists(artists) {

  // On vide la liste
  artistList.replaceChildren()

  // On itère sur le tableau pour les insérer dans la liste
  for (const artist of artists) {
    rendreArtiste(artist)
  }

}

// Charge les artistes et itère dessus
export async function rendreArtistsSection() {
  const artists = await getArtists()
  renderArtists(artists)
}

// export default rendreArtistsSection



