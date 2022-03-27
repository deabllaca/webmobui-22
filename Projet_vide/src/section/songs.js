import './artistes'
import { getSongs, searchSongs } from '../api'
import { setSongList, playSong } from './player'
import { getFavorites, toggleFavorite, isInFavorite } from './favorites'

/* <ul class="list">
      </ul>

      <template id="song-list-item-template">
        <li>
          <div class="list-item-title"></div>
          <div class="list-item-actions">
            <button type="button" class="icon-button favorite-button">
              <span class="material-icons">favorite_border</span>
            </button>
            <button type="button" class="icon-button play-button">
              <span class="material-icons">play_arrow</span>
            </button>
          </div>
        </li>
      </template> */


// ce qu'on a besoin pour afficher les chansons
const songSection = document.querySelector('#songs-section')
const songList = document.querySelector('.songs-list')
const songListItemTemplate = document.querySelector("#song-list-item-template")
const sectionTitle = songSection.querySelector('h4')

function toggleFavoriteIcon(favoriteIcon, song) {
  if(isInFavorite(song)) {
    favoriteIcon.innerText = 'favorite'
  } else {
    favoriteIcon.innerText = 'favorite_border'
  }
}

function retourneSong(song) {
  const newSong = songListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node

  // on met l'id correspondant au lien de chaque musique pour ensuite afficher les lyrics
  newSong.querySelector('a').href = '#lyrics-' + song.id

  // on met l'url correspondante
  // newSong.querySelector('.icon-button play-button') = song.audio_url

  // on met le titre correspondant
  newSong.querySelector('.list-item-title').innerHTML = song.title

 

  // Au clique sur le bouton play, on transmet la chanson et le tableau duquel elle provient au player. Cela permet de
  // lire la chanson et passer le contexte actuel au player (le tableau) pour faire précédent/suivant
  newSong.querySelector('.play-button').addEventListener('click', (e) => {
    playSong(song, songs)
    window.location.hash = '#player'
  })

   // Si on clique sur le bouton favori, on toggle la chanson dans le storage et on ajuste son icone en fonction
   newSong.querySelector('.favorite-button').addEventListener('click', (e) => {
    e.preventDefault() //ce preventDefault permet de pouvoir ajouter plusieurs liens sur une div entière sans que celles ci receptionne tout, on gros ca va arreter le click par défaut
    toggleFavorite(song)
    toggleFavoriteIcon(e.target, song) // on passe le target du click, à savoir l'icône
  })
  // A l'insertion, on met à jour l'icone, si la chanson est présente dans les favoris
  toggleFavoriteIcon(newSong.querySelector('.favorite-button .material-icons'), song)
  

  songList.append(newSong)


}

// itère sur toutes les chansons
function retourneAllSongs(songs) {

  // on vide la liste
  songList.replaceChildren()

  // On regarde s'il y a des résultats, dans le cas échéant, on affiche un élément simple avec le texte "Aucun résultat"
  if (songs.length) {
    for (const song of songs) {
      retourneSong(song)
    }
  } else {
    const noResults = songListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
    noResults.querySelector('.list-item-title').innerText = 'Aucun résultat'
    noResults.querySelector('.list-item-actions').remove() // on supprime les boutons
    songList.append(noResults)
  }

    

}


// charge les chansons et itère dessus
async function retourneSectionSong(id) {
  const songs = await getSongs(id)
  console.log(songs)
  sectionTitle.innerHTML = `Artistes > ${songs[0].artist.name}`
  retourneAllSongs(songs)
}

// Charge la section des chansons selon l'id de l'artiste
async function renderSearchSongsSection(query) {
  const songs = await searchSongs(query)
  sectionTitle.innerText = `Résultats de recherche pour "${query}"`
  retourneAllSongs(songs)
}

// Charge la section des chansons selon le tableau de favoris
function renderFavoritesSongsSection() {
  const songs = getFavorites()
  sectionTitle.innerText = 'Favoris'
  retourneAllSongs(songs)
}

export { retourneSectionSong, renderSearchSongsSection, renderFavoritesSongsSection }
// export default retourneSectionSong
