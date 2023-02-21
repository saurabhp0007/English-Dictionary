const inputEl =document.getElementById("input")
const infoTextEl = document.getElementById
("info-text")
const meanincontainerEl = document.getElementById
("meaning-container")
const titleEl =document.getElementById("title")
const meaningEl =document.getElementById("Meaning")
const audioEl =document.getElementById("audio")


async function fetchAPI(word){

    try {
        infoTextEl.style.display = "block"
        meanincontainerEl.style.display= "none"
        infoTextEl.innerText = `Searching the meaning of "${word}"`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res)=>res.json());

        if(result.title){
            meanincontainerEl.style.display= "block"
            infoTextEl.style.display = "none"
            titleEl.innerText =word
            meaningEl.innerText = "N/A"
            audioEl.style.display = "none";
        }
        else{
        infoTextEl.style.display = "none"
        meanincontainerEl.style.display= "block"
        audioEl.style.display= "inline-flex";
        titleEl.innerText =result[0].word
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
        audioEl.src = result[0].phonetics[0].audio;
        }
    } catch (error) {

        console.log(error);
    }

   
}


inputEl.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key==="Enter"){
        fetchAPI(e.target.value)
    }
})