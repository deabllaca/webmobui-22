// URL de base du serveur
const BASE_URL = 'https://webmob-ui-22-spotlified.herokuapp.com'

//Fonction de base pour le JSON
async function loadJson(url) {
    const response = await fetch(url)
    const parsedJson = await response.json()
    return parsedJson
}

// Retourne une liste d'artistes
async function getArtists() {
    return await loadJson(`${BASE_URL}/api/artists`)
}

// Retourne la liste des chansons d'un ariste
async function getSongs(id) {
    return await loadJson(`${BASE_URL}/api/artists/${id}/songs`)
}


// Retourne un résultaat de recherche
async function searchSongs(query) {
    return await loadJson(`${BASE_URL}/api/songs/search/${encodeURIComponent(query)}`)
}


// Retourne la liste des chansons d'un ariste
async function getSongLyrics(id) {
    return await loadJson(`${BASE_URL}/api/songs/${id}`)
}


// Afficher les données dans l'inspecteur du browser
loadJson(BASE_URL)
    .then(console.log(getArtists()))
    .then(console.log(getSongs()))


export { getArtists, getSongs, searchSongs, loadJson, getSongLyrics }