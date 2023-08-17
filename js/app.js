const startBtn = document.querySelector(".start-btn button")
const ruleBox = document.querySelector(".rules-box");
const exitBtn = ruleBox.querySelector(".btns .exit")
const continueBtn = ruleBox.querySelector(".btns .again")
const quizBox = document.querySelector(".quiz-box")

// if start button is clicked
startBtn.onclick = ()=>{
    ruleBox.classList.add("activeInfo"); // add the info box
}

// if exit button is clicked
exitBtn.onclick = ()=>{
    ruleBox.classList.remove("activeInfo"); // removes the info box
}

// if continue button is clicked
continueBtn.onclick = ()=>{
    ruleBox.classList.remove("activeInfo"); // removes the info box
    quizBox.classList.add("activeQuiz"); // add the quiz box
    showQuestion()
}

let queCount = 0;

function showQuestion(){
    const queText = document.querySelector(".que-text");
    let queTag = '<span>' + questions[1].question + '</span>'
    queText.innerHTML = queTag
}
