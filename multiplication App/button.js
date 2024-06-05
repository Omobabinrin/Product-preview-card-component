const butEl = document.querySelector(".but");

butEl.addEventListener("mouseover", (event)=> {
    console.log(event.pageY - butEl.offsetLeft);
    
})