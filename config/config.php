<?php

// ovde idu podaci za pristup bazi
$servername = "localhost";
$username = "root";
$password = "";

try {
    $db = new PDO("mysql:host=$servername;dbname=prossic", $username, $password);
    // set the PDO error mode to exception
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connected successfully";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}


session_start();


// ALTER TABLE Orders
// ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID); 

