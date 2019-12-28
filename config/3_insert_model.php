<?php

include "config.php";


// (1, 1, 'Korg'),
// (2, 1, 'Yamaha'),
// (3, 1, 'Roland'),
// (4, 1, 'Kurzweil'),
// (5, 1, 'Dynacord'),
// (6, 1, 'Behringer'),
// (7, 1, 'Allan&heat'),
// (8, 1, 'Presonus'),
// (9, 1, 'Studiomaster'),
// (10, 1, 'Midas'),
// (11, 2, 'Boss'),
// (12, 3, 'Dynacord'),

$Korg = [
				['Pa4x, Mg1, Musicant / 61 keys'], ['Pa4x, Mg2, Oriental / 61 keys'], ['Pa4x, Mg1, Musicant / 76 keys'], ['Pa4x, Mg2, Oriental / 76 keys'], 
				['Pa3x, Mg1, Musicant / 61 keys'], ['Pa3x, Mg2, Oriental / 61 keys'], ['Pa3x, Mg1, Musicant / 76 keys'], ['Pa3x, Mg2, Oriental / 76 keys'],
				['Pa3x LE / 76 keys'], ['Pa2x PRO / 76 keys'], ['Pa1x PRO / 76 keys'], ['Pa1x / 61 keys'],
				['Kronos 2, SE / 61 keys'], ['Kronos 2, SE / 73 keys'], ['Kronos 2, SE, Platinum / 88 keys'], ['Kronos LS / 88 keys'],
				['Kronos X, 1 / 61 keys'], ['Kronos X, 1 / 73 keys'], ['Pa 1000 / 61 keys'], ['Pa 900 / 61 keys'],
				['Pa 800 / 61 keys'], ['Pa 700 / 61 keys'], ['Pa 600 / 61 keys'], ['Pa 500 / 61 keys'],
				['Pa 80 / 61 keys'], ['Pa 60 / 61 keys'], ['Triton LE, TR / 61 keys'], ['Triton CLASSIC / 61 keys'],
				['Triton EXTREME / 61 keys'], ['Triton STUDIO / 61 keys']			
			];


// Korg -> 1
$sql = "INSERT IGNORE INTO `model` (typeId, markId, name) values (1, 1, ?)";

$stmt = $db->prepare($sql);
try {
	foreach($Korg as $row)
	{
	    $stmt->execute($row);
	}

} catch(PDOException $e) {
  echo $e->getMessage();
}


$Yamaha = [
			['Genos / 76 keys'], ['Montage 6 / 61 keys'], ['Montage 7 / 76 keys'], ['Tyros 5 / 76 keys'],
			['Tyros 5 / 61 keys'], ['Tyros 4 / 61 keys'], ['Tyros 3 / 61 keys'], ['XS, XF 6 / 61 keys'],
			['XS, XF 7 / 76 keys'], ['PSR-OR 700 / 61 keys'], ['PSR-S 700 / 61 keys']
		  ];


// Yamaha -> 2
$sql = "INSERT IGNORE INTO `model` (typeId, markId, name) values (1, 2, ?)";

$stmt = $db->prepare($sql);
try {
	foreach($Yamaha as $row)
	{
	    $stmt->execute($row);
	}

} catch(PDOException $e) {
  echo $e->getMessage();
}


$Roland = [
			['FA 06 / 61 keys'], ['JUNO-DS / 61 keys'], ['EA 7 / 61 keys'], ['Fantom X6 / 61 keys'],
			['Fantom G6 / 61 keys'], ['Edirol PCR 800 / 61 keys']
		  ];


// Roland -> 3
$sql = "INSERT IGNORE INTO `model` (typeId, markId, name) values (1, 3, ?)";

$stmt = $db->prepare($sql);
try {
	foreach($Roland as $row)
	{
	    $stmt->execute($row);
	}

} catch(PDOException $e) {
  echo $e->getMessage();
}



$Kurzweil = [
			['Pc3a6 / 61 keys'], ['Pc3k6 / 61 keys']
		  ];


// Kurzweil -> 4
$sql = "INSERT IGNORE INTO `model` (typeId, markId, name) values (1, 4, ?)";

$stmt = $db->prepare($sql);
try {
	foreach($Kurzweil as $row)
	{
	    $stmt->execute($row);
	}

} catch(PDOException $e) {
  echo $e->getMessage();
}




$Dynacord = [
			['CMS, PM 3 / 1000'], ['CMS, PM 3 / 2200'], ['PM 2 / 600'],
			['PM 2 / 1600'], ['PM 1 / 1000'], ['PM 1 / 1600'],
		  ];


// Dynacord -> 5
$sql = "INSERT IGNORE INTO `model` (typeId, markId, name) values (1, 5, ?)";

$stmt = $db->prepare($sql);
try {
	foreach($Dynacord as $row)
	{
	    $stmt->execute($row);
	}

} catch(PDOException $e) {
  echo $e->getMessage();
}


// mixer
$DynacordMixer = [
			['CMS, PM 3 / 600'], ['CMS, PM 3 / 1600'], ['PM 2 / 1000'], ['PM 1 / 600']
		  ];

// DynacordMixer -> 5
$sql = "INSERT IGNORE INTO `model` (typeId, markId, name) values (2, 5, ?)";

$stmt = $db->prepare($sql);
try {
	foreach($DynacordMixer as $row)
	{
	    $stmt->execute($row);
	}

} catch(PDOException $e) {
  echo $e->getMessage();
}
// mixer





$Behringer = [
			['X32 ']
		  ];


// Behringer -> 6
$sql = "INSERT IGNORE INTO `model` (typeId, markId, name) values (1, 6, ?)";

$stmt = $db->prepare($sql);
try {
	foreach($Behringer as $row)
	{
	    $stmt->execute($row);
	}

} catch(PDOException $e) {
  echo $e->getMessage();
}




$Allan_heat = [
			['Q 16'], ['Pa12 CP']
		  ];


// Allan_heat -> 7
$sql = "INSERT IGNORE INTO `model` (typeId, markId, name) values (1, 7, ?)";

$stmt = $db->prepare($sql);
try {
	foreach($Allan_heat as $row)
	{
	    $stmt->execute($row);
	}

} catch(PDOException $e) {
  echo $e->getMessage();
}




$Presonus = [
			['Studiolive 16.0.2.'], ['Studiolive 16.4.2.'], ['Studiolive 24.4.2.']
		  ];


// Presonus -> 8
$sql = "INSERT IGNORE INTO `model` (typeId, markId, name) values (1, 8, ?)";

$stmt = $db->prepare($sql);
try {
	foreach($Presonus as $row)
	{
	    $stmt->execute($row);
	}

} catch(PDOException $e) {
  echo $e->getMessage();
}




$Studiomaster = [
			['Digilive 16']
		  ];


// Studiomaster -> 9
$sql = "INSERT IGNORE INTO `model` (typeId, markId, name) values (1, 9, ?)";

$stmt = $db->prepare($sql);
try {
	foreach($Studiomaster as $row)
	{
	    $stmt->execute($row);
	}

} catch(PDOException $e) {
  echo $e->getMessage();
}




$Midas = [
			['M32R']
		  ];


// Midas -> 10
$sql = "INSERT IGNORE INTO `model` (typeId, markId, name) values (1, 10, ?)";

$stmt = $db->prepare($sql);
try {
	foreach($Midas as $row)
	{
	    $stmt->execute($row);
	}

} catch(PDOException $e) {
  echo $e->getMessage();
}




$Boss = [
			// Guitar
			['GT 1000']
		  ];


// Boss -> 11
$sql = "INSERT IGNORE INTO `model` (typeId, markId, name) values (3, 11, ?)";

$stmt = $db->prepare($sql);
try {
	foreach($Boss as $row)
	{
	    $stmt->execute($row);
	}

} catch(PDOException $e) {
  echo $e->getMessage();
}

	