var data = {
    qnum:0,
    questions:[
        {
            title:"What comes After A",
            answer:"B",
            bgcolor:"yellow",
            img:"http://placekitten.com/100/100"

        },
        {
            title:"Is 5 bigger than 4?",
            answer:"Yes",
            bgcolor:"#ABC",
            img:"http://placekitten.com/200/200"
        },
        {
            title:"Is 5 bigger than 4?",
            answer:"yellow",
            bgcolor:"rgb(2,150,232)",
            img:"http://placekitten.com/300/300"
        }
    ]
}

//var answer = "B";
var qnum = 0;

var questions =[
    "what comes After A?",
    "Is 5 bigger than 4?",
    "What is the color of a banana?"
];

var answers = [
    "B",
    "Yes",
    "Yellow"
];

var bgcolor = [
    "yellow",
    "#ABC",
    "rgb(2,150,232)"
]

var img = [
    "http://placekitten.com/100/100",
    "http://placekitten.com/200/200",
    "http://placekitten.com/300/300",
]
function Start(){
    document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data/qnum].bgcolor;
    ocument.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
}

function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;
    console.log(myInp);

    if(myInp === data.questions[data.qnum].answer){
       // alert("correct");
        document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";

        qnum++;
        document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
    }
}
        /*//
        if (qnum === 1){
            qnum++;
        document.querySelector("#h_q").innerText = "Is 5 Bigger than 4?";
        answer = "Yes";
        } else if (qnum ===2){
            qnum++;
            document.querySelector("#h_q").innerText = "what is the color of a banana?";
            answer = "Yellow";
        }
    } else {
        alert("WRONG")
        document.querySelector("#h_r").innerText = "<h1>Correct!</h1>";
    }
*/