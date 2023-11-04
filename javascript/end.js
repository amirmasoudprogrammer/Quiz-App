const localscore=JSON.parse(localStorage.getItem("score"))
const itemP=document.querySelector("p")
const input =document.querySelector("input")
const button=document.querySelector("button")
const highscroes=JSON.parse(localStorage.getItem("highScroes")) || []

itemP.innerText = localscore;

const startbuttons = () =>{
    if (!input.value || !localscore){
        alert("شما نام و امتیازی ندارید")
    }else {
        const finalscore ={name:input.value, localscore}
        highscroes.push(finalscore);
       highscroes.sort((a,b) => b.localscore - a.localscore)
        highscroes.splice(10)


        localStorage.setItem("highScroes",JSON.stringify(highscroes))
        localStorage.removeItem("scroes")
        window.location.assign("index.html")
    }

}


button.addEventListener("click",startbuttons)