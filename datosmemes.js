const obtenerMemes= async()=>{
    const request = await fetch("https://api.imgflip.com/get_memes")
    const response = await request.json()
    console.log(response)

    const memesContiners = document.getElementById("list-memes")
    const memeTemplate = document.getElementById("meme")

    response.data.memes.slice(0,8).forEach(meme => {
        const newMemeCard = memeTemplate.cloneNode(true)
        const img = newMemeCard.querySelector("img")
        img.src = meme.url
        memesContiners.appendChild(newMemeCard)
    });

    memeTemplate.remove()
}


const ObtenerGif= async()=>{
    const request = await fetch("https://giphy.com/gifs/levi-1gDtIz79gmhCo")
    const response = await request.json()
    console.log(response.data[0].images.original.url)

    //PINTAR EN LA IU
    const giftTemplate = document.getElementById("gif");
    giftTemplate.src = response.data[0].images.original.url;

}

obtenerMemes()

ObtenerGif()