const api_url = "http://localhost:3000";
const BASE_URL = "http://localhost:3000";


async function getspørsmål() {
    const res = await fetch(`${BASE_URL}/api/questions`);
    const questions = await res.json();

    const quizContainer = document.getElementById("quizContainer");

    questions.forEach((q, index) => {
        const box = document.createElement("div");
        box.className = "boks";

        const h2 = document.createElement("h2");
        h2.textContent = q.question_text;
        h2.id = `h2.${index}`;
        box.appendChild(h2);

        q.answers.forEach(answer => {
            const label = document.createElement("label");
            label.innerHTML = `
                <input type="radio" name="q${q.id}" data-answer-id="${answer.id}">
                ${answer.text}<br>
            `;
            box.appendChild(label);
        });

        quizContainer.appendChild(box);
    });
}

getspørsmål();

async function calculateScore() {
    const questions = document.querySelectorAll(".boks");
    const userAnswers = [];

    questions.forEach((q, i) => {
        const selected = q.querySelector("input[type='radio']:checked");
        if (selected) {
            userAnswers.push({
                question_id: i + 1,
                answer_id: parseInt(selected.dataset.answerId)
            });
        }
    });

    const response = await fetch(`${BASE_URL}/check-answers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: userAnswers })
    });
    

    const result = await response.json();
    const correct = result.correct;

    // Visual feedback
    questions.forEach((q, i) => {
        const selected = q.querySelector("input[type='radio']:checked");
        if (selected) {
            if (correct.includes(i + 1)) {
                q.style.color = "#006400";
            } else {
                q.style.color = "#ff0000";
            }
        }
    });

    document.getElementById("score").innerText = "Poeng: " + result.totalScore;
    document.getElementById("tryagain").innerText = "Prøv igjen";
    window.scrollTo(0, document.body.scrollHeight);
    
    // Save score to server
    await fetch(`${BASE_URL}/api/save-score`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ score: result.totalScore })
    });
}
