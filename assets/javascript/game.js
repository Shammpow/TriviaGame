const triviaQuestions = [
    {
        question: "How often do Leap Years occur?",
        answers: {
            a: "3",
            b: "4",
            c: "5"
        },
        correctAnswer: "c",
    },
    {
        question: "what is 2 + 2?",
        answers: {
            a: "2",
            b: "3",
            c: "4"
        },
        correctAnswer: "c",
    }
];

function createAnswers() {
    for (i = 0; i < triviaQuestions.length; i++) {
        var answerA = triviaQuestions[i].answers.a;
        var answerB = triviaQuestions[i].answers.b;
        var answerC = triviaQuestions[i].answers.c;

        var input = $('<input type="radio">').attr("id", "answer")
        var label = $('<label>').attr("for", "answer")
        $("#answersHere").append(input)
        $("#answersHere").append(label)
        $("#answer").append(answerA)

    }
}

function createQuestions() {
    for (i = 0; i < triviaQuestions.length; i++) {
        var nextQuestion = triviaQuestions[i].question
        $("#question").append(nextQuestion + '<div')

        for (i = 0; i < triviaQuestions.length; i++) {
            var answerA = triviaQuestions[i].answers.a;
            var answerB = triviaQuestions[i].answers.b;
            var answerC = triviaQuestions[i].answers.c;

            var input = $('<input type="radio">').attr("id", "answer")
            var label = $('<label id="thisAnswer">').attr("for", "answer")
            $("#answersHere").append(input)
            $("#answersHere").append(label)
            $("#thisAnswer").html(answerA)

            $("#answersHere").append(input)
            $("#answersHere").append(label)
            $("#thisAnswer").html(answerA)
            // Couldn't figure out how to get each label to take a separate answer. 
            // I tried using a for loop, but I couldn't get anything to work...

        }
    }
    // Apparently I can't even get the buttons to only allow one. I don't even know what I'm doing wrong...
}

// At least my question is showing up, albeit just the one

$(document).ready(function() {
    console.log('ready!')
})


// WORKING TIMER! DON'T TOUCH!!!
$("#start").on("click", startTimer)
var intervalId;
var timerOn = false;
time = 30;

function startTimer() {
    if (!timerOn) {
        intervalId = setInterval(decrement, 1000)
    }
    createQuestions();

}

function decrement() {
    time--;
    $("#showTime").html(time);
    if (time === 0) {
        clearInterval(intervalId);
    }


}
