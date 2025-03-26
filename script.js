
function calculateScore() {
    let sluttpoeng = 0;
    let questions = document.querySelectorAll(".boks");
    
    questions.forEach((q, index) => {
        let selected = q.querySelector("input[name='q" + (index + 1) + "']:checked");
        if (selected) {
            sluttpoeng += parseInt(selected.value);
        }
    }); //hver ".boks" er +1 index. bare det riktige har en value på 1.
    
    document.getElementById("score").innerText = "Poeng: " + sluttpoeng; //regner sluttscore
    document.getElementById("tryagain").innerText = "Prøv igjen";
}

function Klikk() {
    window.location.href = "quiz.html"; //bytter til quizen
}
