function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    heart.style.opacity = Math.random();

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createHeart, 200);

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const question = document.getElementById("question");
const gif = document.getElementById("gif");

let count = 0;

const questions = [
    "Think again 😭",
    "Are you sure 😡?",
    "See This 🥱"
]

const gifs = [
    "sad-dudu.gif",
    "dudu-angry.gif",
    "cat.gif",
]

noBtn.addEventListener("click", () => {
    count++;

    const scale = 1 + count * 0.5;
    yesBtn.style.transform = `scale(${scale})`;

    if (count <= 3) {
        question.textContent = questions[count - 1];
        gif.src = gifs[count - 1];
    }
    if (count === 3) {
        yesBtn.style.transform = `scale(4)`
    }
})

function showPage(name) {
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove("active");
        card.style.display = "none";
    });

    const page = document.getElementById(name);
    page.style.display = "block";

    // smooth animation trigger
    setTimeout(() => {
        page.classList.add("active");
    }, 30);
}
showPage('home')

const quiz = [
    {
        question: "Who is the absolute 'Boss' in this relationship ?",
        options: [
            { text: "Obviously You", correct: true },
            { text: "Me", correct: false },
            { text: "My Mom", correct: false }
        ]
    },
    {
        question: "Who fights a lot in this relationship?",
        options: [
            { text: "Always You", correct: false },
            { text: "Me", correct: true },
            { text: "No One", correct: false }
        ]
    },
    {
        question: "Where do i plan to spend the rest of my life? ",
        options: [
            { text: "In Your Heart", correct: true },
            { text: "On Mars", correct: false },
            { text: "Netherlands", correct: false }
        ]
    }
];
const questionEl = document.getElementById("questions");
const optionsEl = document.getElementById("options");
const messageEl = document.getElementById("message");

function loadQuestion() {
    messageEl.textContent = "";
    optionsEl.innerHTML = "";

    const q = quiz[count];
    questionEl.textContent = q.question;

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option.text;
        btn.className = "option";

        btn.onclick = () => {
            if (option.correct) {
                messageEl.textContent = "Correct! You are so smart! 😍";
                messageEl.style.color = "green";

                setTimeout(() => {
                    count++;
                    if (count < quiz.length) {
                        loadQuestion();
                    } else {
                        questionEl.textContent = "Yay! You passed the test. You really loves me!😭❤️";
                        optionsEl.innerHTML = "";
                        messageEl.textContent = ""
                    }
                }, 900);
            } else {
                messageEl.textContent = "ohoo, please try again 😝";
                messageEl.style.color = "red";
            }
        };

        optionsEl.appendChild(btn);
    });
}

loadQuestion();


