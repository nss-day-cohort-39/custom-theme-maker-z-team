export const ColorButtons = () => {
    return `
        <article class="colors">
        <fieldset>
        <legend>Background Colors</legend>
        
                <button id="btnTheme--red">Red</button>
                <button id="btnTheme--purple">Purple</button>
                <button id="btnTheme--blue">Blue</button>
                <button id="btnTheme--green">Green</button>
                </fieldset>
        </article>
        `
    }
    
const eventHub = document.querySelector('#container')
const contentTarget = document.querySelector('.colors')
eventHub.addEventListener('click', event=> {
    const mySelection = event.target.id
    if(mySelection.startsWith('btnTheme--')){
        const [first, color] = mySelection.split("--")
        const colorChosen = new CustomEvent('custom__color', {
            detail: {
                change_to: color
            }
        })
        eventHub.dispatchEvent(colorChosen)
    }
})