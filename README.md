# Speech Recognition

## 📑 Table of Contents
- [📃 Project Description](#-project-description)
- [🛠️ Technologies Used](#️-technologies-used)
- [💻 Code Explanation](#-code-explanation)
  - [📄 HTML (index.html)](#-html-indexhtml)
  - [🎨 CSS (styles.css)](#-css-stylescss)
  - [📝 JavaScript (script.js)](#-javascript-scriptjs)
  - [🗄️ PHP (save_text.php)]([#-php-save_textphp])
- [🚀 Usage](#-usage)
- [📁 File Structure](#-file-structure)
- [✨ Features](#-features)



## 📃 Project Description

This project is a speech-to-text web application that captures speech from the microphone, converts it to text, and displays it on the screen with a stylish animation. The text is also saved to a database for further use. The interface is designed to be visually appealing and user-friendly, providing a seamless experience for users. 

## 🛠️ Technologies Used
- HTML: For structuring the web page.
- CSS: For styling the web page and creating animations.
- JavaScript: For handling speech recognition and dynamic content updates.
- PHP: For server-side processing and saving data to a database.
- Web Speech API: For speech recognition functionality.
- XMLHttpRequest: For sending data to the server asynchronously.
  
## 💻 Code Explanation

### 📄 HTML (index.html)
Sets up the structure of the web page, including the container for displaying recognized text.

### 🎨 CSS (styles.css)
Styles the web page, ensuring the text appears with a semi-transparent background and fade-in animation.

### 📝 JavaScript (script.js)
Handles the speech recognition functionality using the Web Speech API. It updates the text on the screen in real-time, manages animations, and sends the recognized text to the server for storage. It also ensures that a default message appears when no speech is detected, keeping the interface engaging.

### 🗄️ PHP (save_text.php)
Handles saving the recognized text to a MySQL database. This file processes the incoming data from the client-side and ensures that it is securely stored in the database for later retrieval.

## 🚀 Usage
Open index.html in your browser.
The page will automatically start recognizing speech and displaying the text with an animation.
The recognized text will also be saved to the database.

## 📁 File Structure

```
SpeachToTextWeb/
│
├── index.html
├── styles.css
├── script.js
├── save_text.php
├── README.md
```

## ✨ Features

- Real-time speech-to-text conversion
- Stylish and animated text display
- Automatic idle message when no speech is detected
Text saved to a database for further use
