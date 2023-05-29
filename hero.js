const wordel = document.querySelector(".changing_word")
wordel.textContent = " ";

const words = ["Research", "Protection"]

for(let i=0; i<1; i++){
    for(let j=0; j<words[i].length; j++){
        setTimeout(()=>{
            var span = document.createElement("span")
        span.className = "hero_letter"
        span.innerText = words[i].charAt(j)
        wordel.appendChild(span)
        },j*250)
        
    }
    console.log(wordel.firstElementChild)
    wordel.innerText=''
    

}

