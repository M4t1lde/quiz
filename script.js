
function calculateScore() {
    let sluttpoeng = 0;
    let questions = document.querySelectorAll(".boks");
    
    questions.forEach((q, index) => {
        let selected = q.querySelector("input[name='q" + (index + 1) + "']:checked");
        if (selected) {
            sluttpoeng += parseInt(selected.value);
            if (selected.value === "0") {
                selected.style.color = "#ec7063";  // feil svar er røde
            }
        }
    }); //hver ".boks" er +1 index. bare det riktige har en value på 1.
    document.getElementById("score").innerText = "Poeng: " + sluttpoeng; //regner sluttscore
    document.getElementById("tryagain").innerText = "Prøv igjen"; //starter siden på nytt
    window.scrollTo(0, document.body.scrollHeight); //skroller ned hele siden til poeng. kilde:(https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page)
    
}

function Klikk() {
    window.location.href = "quiz.html"; //bytter til quizen
}
