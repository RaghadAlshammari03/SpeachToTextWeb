var resultElement = document.getElementById('result');
var idleMessage = "Hello! I'm not hearing anyone";

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert('Speech recognition not supported in this browser.');
} else {
    var recognition = new SpeechRecognition();

    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.start();

    recognition.addEventListener('result', (event) => {
        const result = event.results[event.results.length - 1][0].transcript;
        resultElement.textContent = result;
        resultElement.classList.remove('fadeIn'); 
        void resultElement.offsetWidth; 
        resultElement.classList.add('fadeIn');
        saveText(result); 
    });

    recognition.addEventListener('end', () => {
        resultElement.textContent = idleMessage; 
        recognition.start();
    });

    recognition.addEventListener('error', (event) => {
        if (event.error !== 'no-speech' && event.error !== 'aborted') {
            recognition.start();
        } else {
            resultElement.textContent = 'Error occurred in recognition: ' + event.error;
        }
    });
}

function saveText(text) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "save_text.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send("text=" + encodeURIComponent(text));
}

resultElement.textContent = idleMessage;
