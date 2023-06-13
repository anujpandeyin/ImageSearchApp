const accessKey = "5KkcM68txOwVYd0x4yK583kjys0ROwLzqsqdf8_H61k"

const formEl = document.querySelector('form')
const inputEl = document.getElementById('search-input')
const searchResults = document.querySelector('.search-results')
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1;
async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=5KkcM68txOwVYd0x4yK583kjys0ROwLzqsqdf8_H61k`

    const response = await fetch(url)
    const data = await response.json()
    const results = data.results

    if (page == 1) {
        searchResults.innerHTML = ""
    }
    results.map((result) => {
        const  imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const ImageLink = document.createElement('a')
        ImageLink.href = result.links.html
        ImageLink.target = "_blink"
        ImageLink.textContent = result.alt_description

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(ImageLink)
        searchResults.appendChild(imageWrapper)

    });
    page++
    if (page > 1) {
        showMore.style.display = "block"
    }
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1;
    searchImages()

})
showMore.addEventListener("click",()=>{
   
    searchImages();

})