<?php

include "config.php";

$rows = [
			['Keyboard'], 
			['Guitar'], 
			['Mixer'],
			['Processor'] 
		];

$sql = "INSERT IGNORE INTO `type` (name) values (?)";

$stmt = $db->prepare($sql);
try {
	foreach($rows as $row)
	{
	    $stmt->execute($row);
	}

} catch(PDOException $e) {
  echo $e->getMessage();
}

