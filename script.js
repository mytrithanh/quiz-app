const quizData = [
    {
        question: 'How old is Tony Thanh?',
        a: '10',
        b: '17',
        c: '18',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most used programing language in 2021?',
        a: 'C',
        b: 'Java',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    }, {
        question: 'Who is the President of US?',
        a: 'Tony Thanh',
        b: 'Donald Trump',
        c: 'Biden',
        d: 'Mihai Andrei',
        correct: 'c'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motoboats Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was Javascript  launched?',
        a: '2002',
        b: '1995',
        c: '1994',
        d: 'Non of the above',
        correct: 'b'
    }
]

const anwserEls = document.querySelectorAll(".anwser");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text"); 
const sumbitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectAnwser();
    const correntQuizData = quizData[currentQuiz];
    questionEl.innerText = correntQuizData.question;
    a_text.innerText = correntQuizData.a;
    b_text.innerText = correntQuizData.b;
    c_text.innerText = correntQuizData.c;
    d_text.innerText = correntQuizData.d;

}

function getSelected(){
    let anwser = undefined;

    anwserEls.forEach((anwserEl) => {
        if(anwserEl.checked){
            anwser = anwserEl.id;
        }
    });

    return anwser;
}

function deselectAnwser(){
    anwserEls.forEach((anwserEl) => {
        anwserEl.checked = false;
    });
}

sumbitBtn.addEventListener("click", () => {
    //check anwser 
    const anwser = getSelected();
    if(anwser){
        if(anwser === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
        
            loadQuiz();
        } else{
            quiz.innerHTML = `<h2>You answered ${score} out of ${quizData.length} questions correctly.</h2> <button onclick="location.reload()">Reload</button>`;
        }
      
    }
});