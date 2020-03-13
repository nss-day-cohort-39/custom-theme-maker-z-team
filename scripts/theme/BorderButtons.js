export const BorderButtons = () => {
    return `
        <article class="borderSizes">
            <fieldset>
                <legend>Border Sizes</legend>

                <label for="onepixel">1px</label>
                <input type="radio" name="pixelsize" value="onepixel" />

                <label for="threepixels">3px</label>
                <input type="radio" name="pixelsize" value="threepixels" />

                <label for="fivepixels">5px</label>
                <input type="radio" name="pixelsize" value="fivepixels" />
            </fieldset>
        </article>
    `
}

const eventHub = document.querySelector("#container")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.name === "pixelsize") {
        const theSizeThatWasChosen = changeEvent.target.value

        const sizeChosenEvent = new CustomEvent("sizeChosen", {
            detail: {
                chosenSize: theSizeThatWasChosen
            }
        })

        eventHub.dispatchEvent(sizeChosenEvent)
    }
})