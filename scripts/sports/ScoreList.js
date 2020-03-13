import { useScores } from "./ScoreProvider.js"
import { Score } from "./Score.js"
const eventHub = document.querySelector("#container")

eventHub.addEventListener("sizeChosen", EventChange => {
    const scoreCard = document.querySelectorAll('.score')
    //console.log(scoreCard)
    const My_Selection = EventChange.detail.chosenSize
    for (const element of scoreCard) {
        element.classList = []
        element.classList.add(My_Selection)
        element.classList.add("score")    
    }
    

})


export const ScoreList = () => {
    const scores = useScores()
    return render(scores)
}

const render = scoreCollection => {
    return `
        <article class="container__panel scores">
            ${scoreCollection.map(score => Score(score)).join("")}
            </article>
    `
}