
//Fikk hjelp og forbedrelser av chat.gpt, andre direkte kodelinjer har kilde.

function calculateScore() {
    let sluttpoeng = 0;
    let questions = document.querySelectorAll(".boks");
    
    questions.forEach((q, index) => {
        let selected = q.querySelector("input[name='q" + (index + 1) + "']:checked");
        if (selected) {
            sluttpoeng += parseInt(selected.value); //plusser på poeng(values) fra alle spørsmålene
            if (index === 0 && parseInt(selected.value) === 0){ //spørsmål, rød=feil, grønn=riktig
                document.getElementById("h2").style.color = "#ff0000";
            }
            else if (index === 0 && parseInt(selected.value) === 1){
                document.getElementById("h2").style.color = "#006400";
            }

            if (index === 1 && parseInt(selected.value) === 0){
                document.getElementById("h2.1").style.color = "#ff0000";
            }
            else if (index === 1 && parseInt(selected.value) === 1){
                document.getElementById("h2.1").style.color = "#006400";
            }

            if (index === 2 && parseInt(selected.value) === 0){
                document.getElementById("h2.2").style.color = "#ff0000";
            }
            else if (index === 2 && parseInt(selected.value) === 1){
                document.getElementById("h2.2").style.color = "#006400";
            }

            if (index === 3 && parseInt(selected.value) === 0){
                document.getElementById("h2.3").style.color = "#ff0000";
            }
            else if (index === 3 && parseInt(selected.value) === 1){
                document.getElementById("h2.3").style.color = "#006400";
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
