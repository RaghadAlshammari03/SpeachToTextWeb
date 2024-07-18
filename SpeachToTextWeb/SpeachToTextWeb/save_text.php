<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "speechRecognition";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $text = $_POST['text'];

    $stmt = $conn->prepare("INSERT INTO speechRecognition (text) VALUES (?)");
    $stmt->bind_param("s", $text);

    if ($stmt->execute()) {
        echo "Text saved successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
