<?php

include "config.php";


$Keyboard = [
				['Korg'], ['Yamaha'], ['Roland'], ['Kurzweil'], ['Dynacord'], 
				['Behringer'], ['Allan&heat'], ['Presonus'], ['Studiomaster'],
				['Midas']
			];

// Keyboard -> 1
$sql = "INSERT IGNORE INTO `mark` (typeId, name) values (1, ?)";

$stmt = $db->prepare($sql);
try {
	foreach($Keyboard as $row)
	{
	    $stmt->execute($row);
	}

} catch(PDOException $e) {
  echo $e->getMessage();
}


		
// Guitar -> 2
$sql = "INSERT IGNORE INTO `mark` (typeId, name) values (2, 'Boss')";

$stmt = $db->prepare($sql);
try {
	   $stmt->execute($row);	

} catch(PDOException $e) {
  echo $e->getMessage();
}


	

// Mixer -> 3
$sql = "INSERT IGNORE INTO `mark` (typeId, name) values (3, 'Dynacord')";

$stmt = $db->prepare($sql);
try {
	    $stmt->execute($row);

} catch(PDOException $e) {
  echo $e->getMessage();
}


// Processor -> 4
