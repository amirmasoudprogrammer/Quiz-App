import formtdata from "./helper.js";
// const loder = document.getElementById("loader")
// const contenr = document.getElementById("container")
// const questiontext = document.getElementById("question-text");
// const answertext = document.querySelectorAll(".answer-text");
//
// let formtteddata = null;
//
// let questionindex = 0;
//
// let correctAnswer = null;
//
//
// const fetchData = async () => {
//     const response = await fetch(URL)
//     const json = await response.json()
//     formtteddata = formtdata(json.results);
//     start()
// }
//
//
// const start = () => {
//     showquestion()
//     loder.style.display = "none";
//     contenr.style.display = "block";
// }
//
//
// const showquestion = () => {
//     const {question, answers, randomcorrect} = formtteddata[questionindex]
//     correctAnswer = randomcorrect;
//     questiontext.innerText = question;
//     answertext.forEach((button, index) => {
//         button.innerText = answers[index]
//
//     })
// }
//
//
// const checkanswer = (event, inedx) => {
//     const isCorrect = inedx === correctAnswer ? true : false
//     if (isCorrect) {
//         event.target.classList.add("correct")
//     } else {
//         event.target.classList.add("incorrect")
//         answertext[correctAnswer].classList.add("correct")
//     }
// }
//
// window.addEventListener("load", fetchData);
//
//
// answertext.forEach((button, index) => {
//     const handelr = (event) => checkanswer(event, index)
//     button.addEventListener("click", handelr)
// })
//
const URL = "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple";
const loder = document.getElementById("loader")
const contener = document.getElementById("container");
const questiontext = document.getElementById("question-text");
const answertext = document.querySelectorAll(".answer-text");
const scores=document.getElementById("score");
const nextbutton=document.getElementById("next-button");
const finishbutton=document.getElementById("finish-button");
const questionnumber=document.getElementById("question-number");

const corteect_bonus= 1;

let fetchtedata = null;

let questionindex = 0;


let correctitem = null;

let score=0;

let isAccetpet=true;

const fetchdata = async () => {
    const rspons = await fetch(URL)
    const json = await rspons.json();
    fetchtedata = formtdata(json.results);
    startshow()
}


const startshow = () => {
    showquestion();
    loder.style.display = "none";
    contener.style.display = "block";
}


const showquestion = () => {
    questionnumber.innerText = questionindex + 1;
    const {question, answer, corretrandom} = fetchtedata[questionindex]
    correctitem = corretrandom;
    questiontext.innerText = question;
    answertext.forEach((button, index) => {
        button.innerText = answer[index]
    })
}


const checkhander = (event, index) => {

console.log(index)
    if (!isAccetpet) return
    isAccetpet =false
    const iscorrect = index === correctitem ? true : false
    if (iscorrect) {
        event.target.classList.add("correct")
        score +=corteect_bonus;
        scores.innerText=score
    } else {
        event.target.classList.add("incorrect")
        answertext[correctitem].classList.add("correct")
    }


}


const startnext= () =>{
    questionindex++
    if (questionindex < fetchtedata.length){
        isAccetpet=true
        removeClass()
        showquestion()
    }else {
        startfinish()
    }
    console.log(questionindex)

}

const removeClass= () => {
    answertext.forEach((button) => {button.className = "answer-text"} )
}

const startfinish= () =>{
    localStorage.setItem("score",JSON.stringify(score))
    window.location.assign("End.html")
}

finishbutton.addEventListener("click",startfinish)

answertext.forEach((button, index) => {
    const hander = (event) => checkhander(event, index)
    button.addEventListener("click", hander)
})

nextbutton.addEventListener("click",startnext)

window.addEventListener("load", fetchdata)