var resultElement = document.getElementById('result');

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
    });

    recognition.addEventListener('end', () => {
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
