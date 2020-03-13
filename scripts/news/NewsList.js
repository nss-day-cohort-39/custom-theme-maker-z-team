import { useNews } from "./NewsProvider.js"
import { NewsItem } from "./NewsItem.js"

export const NewsList = () => {
    const newsItems = useNews()
    return render(newsItems)
}
const eventHub = document.querySelector("#container")

eventHub.addEventListener("FontChosen", EventChange => {
    const newsContainer = document.querySelectorAll('.newsItem')
    const My_Selection = EventChange.detail.Font
    for (const newsObject of newsContainer) {
        newsObject.classList = []
        newsObject.classList.add(My_Selection)
        newsObject.classList.add("newsItem")
    }   
    })

    eventHub.addEventListener("sizeChosen", EventChange => {
        const newsCard = document.querySelectorAll('.newsItem')
        //console.log(scoreCard)
        const My_Selection = EventChange.detail.chosenSize
        for (const element of newsCard) {
            element.classList = []
            element.classList.add(My_Selection)
            element.classList.add("newsItem")    
        }
    
})


const render = newsCollection => {
    return `
        <article class="container__panel scores">
            ${newsCollection.map(news => NewsItem(news)).join("")}
        </article>
    `
}