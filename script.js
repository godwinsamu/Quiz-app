const questions = [
    {
question : "Which is the largest animal in the world ?",
answers: [
    {text:"shark", correct: false },
    {text:"Blue Whale", correct: true },
    {text:"Elephant", correct: false },
    {text:"Giraffe", correct: false },
]
    },
    {
        question : "Which is the largest lake in the world ?",
answers: [
    {text:"Caspian Sea", correct: false },
    {text:"Baikal", correct: true },
    {text:"Lake Superior", correct: false },
    {text:"Ontario", correct: false },
]
    },
    {
        question : "Which planet in the solar system is known as the Red Planet?",
answers: [
    {text:"Venus", correct: false },
    {text:"Earth", correct: false },
    {text:"Jupiter", correct: false },
    {text:"Mars", correct: true },
]
    },
    {
        question : "What is the capital of Japan?",
answers: [
    {text:"Beijing", correct: false },
    {text:"Seoul", correct: false },
    {text:"Tokyo", correct: true },
    {text:"Bangkok", correct: false },
]
    },
    {
        question : "What animal is the national symbol of Australia ?",
answers: [
    {text:"Kangaroo", correct: true },
    {text:"Koala", correct: false },
    {text:"Emu", correct: false },
    {text:"Crocodile", correct: false },
]
    },
    {
        question : "Which river is the longest in the world ?",
answers: [
    {text:"Amazon", correct: false },
    {text:"Mississippi", correct: false},
    {text:"Nile", correct: true },
    {text:"Yangtze", correct: false },
]
    },
    {
        question : "Hitler's party is known as ?",
answers: [
    {text:"Labour party", correct: false },
    {text:"Nazi party", correct: true },
    {text:"Ku-klux-khan", correct: false },
    {text:"Democratic party", correct: false },
]
    },
    {
        question : "Which one is the hottest continent ?",
answers: [
    {text:"Africa", correct: true },
    {text:"South Asia", correct: false },
    {text:"North America", correct: false },
    {text:"Australia", correct: false },
]
    },
    {
        question : "Which is the largest island ?",
answers: [
    {text:"New Guinea", correct: false },
    {text:"Andaman and Nicobar", correct: false},
    {text:"Greenland", correct: true },
    {text:"Hawaii", correct: false },
]
    },
    {
        question : "What is considered the lung of the Earth ?",
answers: [
    {text:"Amazon rainforest", correct: true },
    {text:"The Mississippi River", correct: false},
    {text:"The Sahara", correct: false },
    {text:"The Everest", correct: false },
]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}
else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();
