import { useFavorites } from "./FavoritesProvider.js"
import { FavoriteItem } from "./FavoriteItem.js"

const eventHub = document.querySelector("#container")
eventHub.addEventListener("FontChosen", EventChange => {
    const favoritesContainer = document.querySelector('.favorites')
    const My_Selection = EventChange.detail.Font
    favoritesContainer.classList = []
    favoritesContainer.classList.add(My_Selection)
    favoritesContainer.classList.add("favorites")
})
export const FavoritesList = () => {
    const favoriteItems = useFavorites()
    return render(favoriteItems)
}

const render = favoriteCollection => {
    return `
        <article class="container__panel favorites">
            ${favoriteCollection.map(favorite => FavoriteItem(favorite)).join("")}
        </article>
    `
}