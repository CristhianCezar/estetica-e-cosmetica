let currentQuizIndex = 0;
const cardShowQuiz = document.getElementsByClassName("text");
const max = cardShowQuiz.length;

console.log(max)

const btnYes1 = document.getElementById("yes-1");
const btnNo1 = document.getElementById("no-1");
const btnYes2 = document.getElementById("yes-2");
const btnNo2 = document.getElementById("no-2");
const btnYes3 = document.getElementById("yes-3");
const btnNo3 = document.getElementById("no-3");
const btnYes4 = document.getElementById("yes-4");
const btnNo4 = document.getElementById("no-4");

const formSubmit = document.getElementById('formSubmit');

const first = document.getElementById('first');
const secund = document.getElementById('secund');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');


function nextQuestionQuiz() {

    cardShowQuiz[currentQuizIndex].classList.remove("selected");

    currentQuizIndex++;

    if(formSubmit.style.display === "none" && cardShowQuiz > max) {
        formSubmit.style.display = "block";
    };

    cardShowQuiz[currentQuizIndex].classList.add("selected");
};

btnYes1.addEventListener('click', nextQuestionQuiz);
btnYes2.addEventListener('click', nextQuestionQuiz);
btnYes3.addEventListener('click', nextQuestionQuiz);
btnYes4.addEventListener('click', nextQuestionQuiz);

btnNo1.addEventListener('click', nextQuestionQuiz);
btnNo2.addEventListener('click', nextQuestionQuiz);
btnNo3.addEventListener('click', nextQuestionQuiz);
btnNo4.addEventListener('click', nextQuestionQuiz);


btnYes1.onclick = () => {
    first.value = btnYes1.innerHTML;
}

btnYes2.onclick = () => {
    secund.value = btnYes2.innerHTML;
}

btnYes3.onclick = () => {
    third.value = btnYes3.innerHTML;
}

btnYes4.onclick = () => {
    fourth.value = btnYes4.innerHTML;
}

btnNo1.onclick = () => {
    first.value = btnNo1.innerHTML;
}

btnNo2.onclick = () => {
    secund.value = btnNo2.innerHTML;
}

btnNo3.onclick = () => {
    third.value = btnNo3.innerHTML;
}

btnNo4.onclick = () => {
    fourth.value = btnNo4.innerHTML;
}