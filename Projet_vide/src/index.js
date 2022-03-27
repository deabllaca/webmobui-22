import './css/index.css'
import '../src/api.js'
import './section/artistes.js'
import './section/songs.js'
import './section/favorites'
import { rendreArtistsSection } from './section/artistes.js'
import { getArtists, loadJson, getSongs, getSongLyrics } from '../src/api.js'
import { retourneSectionSong, renderSearchSongsSection, renderFavoritesSongsSection } from './section/songs.js'
import renderLyricsSection from './section/lyrics.js'

// On les importe au moins une fois dans l'index, pour être sûr que les eventlisteners seront appelés
import './section/player'
import './section/search'



function toggleSection(sectionId) {
    document.querySelector('section.active')?.classList.remove('active')
    document.querySelector(`${sectionId}-section`)?.classList.add('active') //on ajoute l'active à la section correspondant à la section de l'URL
}

function displaySection() {     // Supprime/Ajoute la classe active sur la section
    const sectionId = window.location.hash || '#home'

    toggleSection(sectionId)

    // Supprime/Ajoute la classe active sur le footer nav (là où sont les boutons)
    document.querySelector('nav a.active')?.classList.remove('active')
    document.querySelector('nav a[href="' + sectionId + '"]')?.classList.add('active')

    const sectionId2 = window.location.hash
    const sectionId3 = window.location.hash

    window.addEventListener('hashchange', displaySection) //détecte le changement de section puis affiche la séction

    if (sectionId2 == '#artists') {
        rendreArtistsSection();
    }

    //on a besoin de split 
    const sectionSplit = sectionId.split('-') // split les éléments dans l'url qui sont séparés par un "-"
    console.log(sectionSplit);
    switch (sectionSplit[0]) { // si cette sectionSplit[0] split est = #artists, fait ceci
        case '#artists':
            // Est-ce qu'il y a un id ? typiquement: #artists-1234
            if (sectionSplit[1]) {
                toggleSection('#songs')
                retourneSectionSong(sectionSplit[1])
            }
            else {
                rendreArtistsSection()
            }
            break; // fin de ce cas

        case '#search': // si cette sectionSplit[0] split est = #songs, fait ceci
            // On réutilise la section 'songs' en arrière plan
            toggleSection('#songs')
            // on décode la chaine de recherche pour l'afficher proprement
            renderSearchSongsSection(decodeURIComponent(sectionSplit[1]))
            break;

        case '#favorites': //si la sectionSplit[0] est #favorites
            toggleSection('#songs') //ici on retourne la section songs en arrière plan
            renderFavoritesSongsSection() //on affiche seulement les chansons selon le tableau de favoris
            break;

        case '#lyrics': //on veut afficher les lyrics!
            toggleSection('#lyrics')
            renderLyricsSection(sectionSplit[1])
            break;
    }


}



// Affichage au chargement
displaySection()




