
$(document).ready(function() {
//global variables here
var timer = 6000;
var correctAnswers = 0;
var incorrectAnswers = 0;
var numberAnswered = 0;

var answers = [];
var currentQuestion = 0;

// questions info
let questions = [
    {
     "question": "What is the capital of Norway?",
     "answers": ["Oslo", "Helsinki", "Paris"],
     "correctAnswer": "Oslo",
    },
    {
        "question": "What is the capital of Nigeria?",
        "answers": ["Lagos", "Benin City", "Yaounde"],
        "correctAnswer": "Lagos",
    },
    {
        "question": "What percentage of land on Earth is desert?",
        "answers": ["33%", "25%" , "2%" , "100%"],
        "correctAnswer": "33%",
    },
    {
        "question": "Which of the following is the tallest mountain on Earth?",
        "answers": ["Mount Everest" , "K2", "Makalu" , "Lhotse"],
        "correctAnswer": "Mount Everest",
    },
    {
        "question": "WWhat is the length of the longest river on Earth?",
        "answers": ["4345" , "4258" , "2920" , "3395"],
        "correctAnswer": "4345",
    },
    {
        "question": "How much of the Earth is covered in rainforest?",
        "answers": ["6%","12%", "45%", "75%"],
        "correctAnswer": "6%",
    },

    {
        "question": "Which country is home to the World’s Lemur population?",
        "answers": ["Madagascar" , "Mauritius" , "Venezuela" , "Costa Rica"],
        "correctAnswer": "Madagascar",
    },
    {       
        "question": "Where can one find the most diverse plantlife on the plant?",
        "answers": ["Australia", "Brazil" , "China" , "Venezuela"],
        "correctAnswer": "Australia",
    },

    { 
        "question": "Which of the following is the coldest spot on the globe?",
        "answers": ["Polar Plateau", "Siberia", "Superior, Wisconsin" ,"Alaska"],
        "correctAnswer": "Polar Plateau",
    },
    ];

let userAnswers = ["Oslo", "Lagos", "33%", "Mount Everest", "4345", "6%", "Madagascar", "Australia", "Polar Plateau"];

//functions
function startGame () {
    //populate questions div
    for (var i =0; i <  questions.length; i++) {
        $('.js-questions').append('<p>' + questions[i].question + '</p>');
        // loop thru the answers
        for (var j = 0; j < questions[i].answers.length; j++){
            $('.js-questions').append('<input type ="radio" value="' +questions[i].answers[j] + '" name="' + i + '">' + questions[i].answers[j] + " "+ '</input>');   
        }
    $('.js-questions').append('<br><br>');
    }
}

function stopGame() {
    // user selects an asnswer could be wrong or right
    //loop through each type of input name = a0
    //every input that is checked, show me the value
    $('.js-questions input:checked').each(function () {
        let answerChecked = $(this).val();
        if (answerChecked === questions[$(this).att('name')].correctAnswer) {correctAnswers++;
            console.log('woohooo');
        }
        else {
            stopGame ();
        }
        
    // if the value is correctin, add 1 to the score
console.log($(this));
    });
}
//clicking start button, game starts
$('.js-start').on('click', function () {
    startGame ();
});

//click stop button to see score
$('.js-stop').on('click', function () {
    stopGame ();
});
//time runs out to end game and show score


});