console.log("I am the console!");

function quizAlert() {
    alert("You're about to start the quiz!");
    quizConfirm();
}

function quizConfirm() {
    var res = confirm("Are you sure you want to continue?");
    if (res == true) {
    alert("The quiz will start in 5 seconds!");
    //add a 5-second countdown
    var timer = 5;
    //Create an element p to display the message
    var confirmation = document.createElement("p");
    confirmation.textContent = timer + "seconds";
    //style of message
    confirmation.style.color = "red";
    confirmation.style.fontSize = "1.5em";
    confirmation.style.fontWeight = "bold";
    confirmation.style.textAlign = "center";
    //add the message to the page after the start id button
    var start = document.getElementById("information");
    start.appendChild(confirmation);
    //using the setInterval function, which runs every second
    var interval = setInterval(function () {
    //decrement countdown
    timer--;
    //It is also displayed in the console
    console.log(timer);
    //display the countdown in the p element created
    confirmation.textContent = timer + " seconds";
    //if the countdown is over
    //show the message "Here we go! Good luck!"
    //show form
    //show submission button
    if (timer == 0) {
    clearInterval(interval);
    confirmation.textContent = "Here we go! Good luck!";
    document.getElementsByClassName("quiz")[0].style.display = "block";
    document.getElementsByTagName("button")[0].style.display = "block";
    }
    }, 1000);
    } else {
    alert("You will be redirected to the home page!");
    window.location.href = "home.html";
    }
    }
