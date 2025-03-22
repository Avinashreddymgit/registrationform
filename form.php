<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"] ?? "");
    $passport = trim($_POST["passport"] ?? "");
    $country = $_POST["country"] ?? "";
    
    if (empty($name) || empty($passport) || empty($country)) {
        echo "<p class='error-msg'>All fields are required!</p>";
        exit;
    }
    
    if (strlen($passport) < 8 || strlen($passport) > 10) {
        echo "<p class='error-msg'>Invalid passport number! Must be 8-10 characters.</p>";
        exit;
    }
    
    echo "<p class='success-msg'>Visa application submitted successfully!</p>";
}
?>
