
$(document).ready(function() {
//global variables here
// questions info
let questions = [
    {
     "question": "what is the capital of Norway?",
     "answers": ["Oslo", "Helsinki", "Paris"],
     "correctAnswer": "Oslo",
    },

    {
        "question": "what is the capital of Nigeria?",
        "answers": ["Lagos", "Benin City", "Yaounde"],
        "correctAnswer": "Lagos",
    },

];

let userAnswers = ["Oslo", "Lagos"];


//functions
function startGame () {
    //populate questions div
    for (var i =0; i <  questions.length; i++) {
        $('.js-questions').append('<p>' + questions[i].question + '</p>');
        // loop thru the answers
        for (var j = 0; j < questions[i].answers.length; j++){
            $('.js-questions').append('<input type ="radio" value="' +questions[i].ansewrs[j] + '" name="' + i + '">' + questions[i].answers[j] + + '</input>');   
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
        if (answerChecked === questions[$(this).att('name')].correctAnswer) {
            console.log('woohooo');
        }
        else {
            console.log
        }
        
    // if the value is correctin, add 1 to the score
console.log($(this));
    });
}

//events

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