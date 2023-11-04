// const formtdata = (data) => {
//     console.log(data)
//     const result = data.map(item => {
//         const questionObject = {question: item.question}
//         const correct_answer = [...item.incorrect_answers]
//         const randomcorrect = Math.floor(Math.random() * 4)
//         correct_answer.splice(randomcorrect, 0, item.correct_answer)
//         console.log(correct_answer)
//         questionObject.answers = correct_answer;
//         questionObject.randomcorrect = randomcorrect
//         return questionObject
//     })
//     return result
// }
//
const formtdata =(data) =>{
    const result=data.map((item) =>{
        const obJectquestion={question: item.question}
        const answer=[...item.incorrect_answers]
        const randomcorrect=Math.floor(Math.random() * 4)
        answer.splice(randomcorrect,0,item.correct_answer)
        obJectquestion.answer=answer
        obJectquestion.corretrandom=randomcorrect;
        return obJectquestion
    })
return result
}


export default formtdata;
