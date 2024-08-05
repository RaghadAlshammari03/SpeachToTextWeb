# Speech Recognition In Arabic

## 📑 Table of Contents
- [📃 Project Description](#-project-description)
- [🛠️ Technologies Used](#️-technologies-used)
- [💻 Code Explanation](#-code-explanation)
  - [📄 HTML (index.html)](#-html-indexhtml)
  - [🎨 CSS (styles.css)](#-css-stylescss)
  - [📝 JavaScript (script.js)](#-javascript-scriptjs)
  - [🗄️ PHP (save_text.php)]([#-php-save_textphp])
- [🚀 Usage](#-usage)
- [✨ Features](#-features)



## 📃 Project Description

This project is a web application that continuously converts spoken Arabic into text using the Web Speech API. The recognized text is displayed on the webpage and stored in a MySQL database.

## 🛠️ Technologies Used
- HTML: For structuring the web page.
- CSS: For styling the web page and creating animations.
- JavaScript: For handling speech recognition and dynamic content updates.
- PHP: For server-side processing and saving data to a database.
- Web Speech API: For speech recognition functionality.
  
## 💻 Code Explanation

### 📄 HTML (index.html)
Sets up the structure of the web page, including the container for displaying recognized text.

### 🎨 CSS (styles.css)
Styles the web page, ensuring the text appears with a semi-transparent background and fade-in animation.

### 📝 JavaScript (script.js)
This file sets up speech recognition in Arabic, continuously updates the recognized text on the webpage, and sends the text to the server to be saved in the database.

### 🗄️ PHP (save_text.php)
Handles saving the recognized text to a MySQL database. This file processes the incoming data from the client-side and ensures that it is securely stored in the database for later retrieval.


