const startBtn = document.querySelector(".start-btn button")
const ruleBox = document.querySelector(".rules-box");
const exitBtn = ruleBox.querySelector(".btns .exit")
const continueBtn = ruleBox.querySelector(".btns .again")
const quizBox = document.querySelector(".quiz-box")
const optionsList = document.querySelector(".options-list");
const timeCount = quizBox.querySelector(".timer .timer-sec")

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
    showQuestion(0)
    queTotalCounter(1)
    startTimer(10) 
}

let queCount = 0;
let queNum = 1
let counter;
let timeValue = 10

const nextBtn = quizBox.querySelector(".next-btn")
nextBtn.onclick = ()=>{
    if (queCount < ques.length - 1){
        queCount++;
        queNum++;
        showQuestion(queCount);
        queTotalCounter(queNum)
        clearInterval(counter)
        startTimer(timeValue) 
    }
    else{
        console.log("question complete")
    }

}


function showQuestion(index){
    const queText = document.querySelector(".que-text");
    let queTag = '<span>' + ques[index].numb + ". " + ques[index].question + '</span>'
    let optionTag = '<div class="option">' + ques[index].options[0] + '<span></span></div>'
                    + '<div class="option">' + ques[index].options[1] + '<span></span></div>'
                    + '<div class="option">' + ques[index].options[2] + '<span></span></div>'
                    + '<div class="option">' + ques[index].options[3] + '<span></span></div>'; 
    queText.innerHTML = queTag
    optionsList.innerHTML =  optionTag
    const option = optionsList.querySelectorAll(".option")
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
        
    }
}

    let tickIcon =' <div class="icon tick"><i class="fas fa-check"></i></div>'
    let crossIcon =  '<div class="icon cross"><i class="fas fa-xmark"></i></div>'


function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = ques[queCount].answer;
    let allOptions = optionsList.children.length
    if (userAns == correctAns) {
        answer.classList.add("correct")
    console.log("Answer is correct")
    answer.insertAdjacentHTML("beforeend", tickIcon)
    }
    else{
        answer.classList.add("incorrect")
    console.log("Answer is wrong")
    answer.insertAdjacentHTML("beforeend", crossIcon)

    }

    // once user selected, disable all other options
    for (let i = 0; i < allOptions; i++) {
       optionsList.children[i].classList.add("disabled");
        
    }

    // if answer is incorrect, then chose the correct answer
    for (let i = 0; i < allOptions; i++) {
      if (optionsList.children[i].textContent == correctAns) {
        optionsList.children[i].setAttribute("class", "option correct");
        optionsList.children[i].insertAdjacentHTML("beforeend", tickIcon)
      } 
         
}
}

function startTimer(time) {
    counter = setInterval(timer, 1000)
    function timer() {
        timeCount.textContent = time;
        time--;
    }
}


function queTotalCounter(index){
    const bottomCounter = quizBox.querySelector(".que-total")
    let queTotal =  '<span><p>'+ index +'</p>of<p>'+ ques.length +'</p>Questions</span>';
    bottomCounter.innerHTML = queTotal;
}
