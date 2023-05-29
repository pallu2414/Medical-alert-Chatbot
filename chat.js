// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Choose symptom below you are experiencing? "
let a = "0. Fever\n";
let b = "1. Fungal infection\n";
let c = "2. Allergy\n";
let d = "3. GERD\n";
let e = "4. Peptic ulcer disease\n";
let f = "5. Drug reaction\n";
let g = "6. AIDS\n";
let h = "7. Diabetes\n";
let i = "8. Gastroenteritis\n";
let j = "9. Bronchial asthma\n";
let k = "10. Hypertension\n";
let l = "11. Migraine\n";
let m = "12. Cervical spondylosis\n";
let n = "13. Paralysis (brain hemorrhage)\n";
let o = "14. Jaundice\n";
let p = "15. Malaria\n";
let q = "16. Chickenpox\n";
let r = "17. Dengue\n";
let s = "18. Typhoid\n";
let t = "19. Hepatitis A\n";
let u = "20. Hepatitis B\n";
let v = "21. Tuberculosis\n";
let w = "22. Common cold\n";
let x = "23. Pneumonia\n";
let y = "24. Hemorrhoids (piles)\n";
let z = "25. Heart attack\n";
let aa = "26. Varicose veins\n";
let ab = "27. Hypothyroidism\n";
let ac = "28. Hyperthyroidism\n";
let ad = "29. Osteoarthritis\n";
let ae = "30. Urinary tract infection\n";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage +'<br>' +a + '<br>' + b + '<br>' + c + '<br>' + d + '<br>' + e + '<br>' + f + '<br>' + g + '<br>' + h + '<br>' + i + '<br>' + j + '<br>' + k + '<br>' + l + '<br>' + m + '<br>' + n + '<br>' + o + '<br>' + p + '<br>' + q + '<br>' + r + '<br>' + s + '<br>' + t + '<br>' + u + '<br>' + v + '<br>' + w + '<br>' + x + '<br>' + y + '<br>' + z + '<br>' + aa + '<br>' + ab + '<br>' + ac + '<br>' + ad + '<br>' + ae + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "You have nothing typed try again!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});