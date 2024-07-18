# Speech Recognition

## 📑 Table of Contents
- [📃 Project Description](#-project-description)
- [🛠️ Technologies Used](#️-technologies-used)
- [💻 Code Explanation](#-code-explanation)
  - [📄 HTML (index.html)](#-html-indexhtml)
  - [🎨 CSS (styles.css)](#-css-stylescss)
  - [📝 JavaScript (script.js)](#-javascript-scriptjs)
  - [🗄️ PHP (save_text.php)](#-php-save_textphp)
- [🚀 Usage](#-usage)
- [📁 File Structure](#-file-structure)
- [✨ Features](#-features)



## 📃 Project Description

This project is a speech-to-text web application that captures speech from the microphone, converts it to text, and displays it on the screen with a stylish animation. The text is also saved to a database for further use. The interface is designed to be visually appealing and user-friendly.

## 🛠️ Technologies Used
- HTML
- CSS
- JavaScript
- PHP
- Web Speech API
- XMLHttpRequest
  
## 💻 Code Explanation

- 📄 HTML (index.html)
Sets up the structure of the web page, including the container for displaying recognized text.

- 🎨 CSS (styles.css)
Styles the web page with a robot-themed design, ensuring the text appears with a semi-transparent background and fade-in animation.

- 📝 JavaScript (script.js)
Handles the speech recognition functionality, updates the text on the screen, and saves the recognized text to the database. Also ensures that a default message appears when no speech is detected.

- 🗄️ PHP (save_text.php)
Handles saving the recognized text to a MySQL database, enabling persistent storage of commands.

## 🚀 Usage

Open index.html in your browser.
The page will automatically start recognizing speech and displaying the text with an animation.
The recognized text will also be saved to the database.

## 📁 File Structure

vbnet
SpeechToTextWeb/
├── index.html
├── styles.css
├── script.js
└── save_text.php

## ✨ Features

- Real-time speech-to-text conversion
- Stylish and animated text display
- Automatic idle message when no speech is detected
Text saved to a database for further use
