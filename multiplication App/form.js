const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if(userDetail == correctAns) {
       formEl++;
       updateLocalStorage()
      
    } else {
       formEl--;
       updateLocalStorage()
    }
});