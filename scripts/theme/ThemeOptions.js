import { ColorButtons } from "./ColorButtons.js"
import { FontButtons } from "./FontButtons.js"
import { BorderButtons } from "./BorderButtons.js"

const eventHub = document.querySelector("#container")
eventHub.addEventListener('custom__color', Event=>{
    const my_selection = Event.detail.change_to
    eventHub.classList = []
    eventHub.classList.add(my_selection)
})

export const ThemeOptions = () => {
    return `
        <article class="container__panel themeOptions">
            ${BorderButtons()}
            ${ColorButtons()}
            ${FontButtons()}
        </article>
    `
}