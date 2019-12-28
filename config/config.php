<?php

// ovde idu podaci za pristup bazi
echo "<pre>";
var_dump($_SERVER);
echo "</pre>";

if ('127.0.0.1' ==$_SERVER['SERVER_ADDR']) {
	$servername = "localhost";
	$username = "root";
	$password = "";

} else {
	$servername = "localhost";
	$username = "prossic";
	$password = "Prossic123";
}

var_dump($username);

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

