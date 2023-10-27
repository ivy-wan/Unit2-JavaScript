const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

/**
 * Step 1: Create a quizData object!
 * quizData have 3 properties: question, options, and correctAnswer.
 */
const quizData = [
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: "Canberra",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
    },
    {
        question:
            "Which gas do plants absorb from the atmosphere during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
    },
];

let currentQuestionIndex = 0;
let correct = 0;

function showQuestion(index) {
    // Step 2
    const question = quizData[index];
    questionElement.textContent = question.question;

    // Create a for loop that iterates through the options
    // Create a button element with the text of that option
    // Add an event listen to the button to call checkAnswer

    for(let i = 0; i < question.options.length; i++){
        const optionButton = document.createElement("button");
        optionButton.textContent = question.options[i];
        optionButton.addEventListener("click", () => {
            checkAnswer(optionButton.textContent)
        })
        optionsElement.appendChild(optionButton);
    }

}

function checkAnswer(selectedOption) {
    // Step 3
}

// Start the quiz
showQuestion(currentQuestionIndex);
