<?php

include "config.php";

$rows = [
			[''], [''], [''], [''] 
		];

$sql = "INSERT IGNORE INTO `mask` (name) values (?)";

$stmt = $db->prepare($sql);
try {
	foreach($rows as $row)
	{
	    $stmt->execute($row);
	}

} catch(PDOException $e) {
  echo $e->getMessage();
}


(1, 1, 1, 'Pa4x, Mg1, Musicant / 61 keys'),
(2, 1, 1, 'Pa4x, Mg2, Oriental / 61 keys'),
(3, 1, 1, 'Pa4x, Mg1, Musicant / 76 keys'),
(4, 1, 1, 'Pa4x, Mg2, Oriental / 76 keys'),
(5, 1, 1, 'Pa3x, Mg1, Musicant / 61 keys'),
(6, 1, 1, 'Pa3x, Mg2, Oriental / 61 keys'),
(7, 1, 1, 'Pa3x, Mg1, Musicant / 76 keys'),
(8, 1, 1, 'Pa3x, Mg2, Oriental / 76 keys'),
(9, 1, 1, 'Pa3x LE / 76 keys'),
(10, 1, 1, 'Pa2x PRO / 76 keys'),
(11, 1, 1, 'Pa1x PRO / 76 keys'),
(12, 1, 1, 'Pa1x / 61 keys'),
(13, 1, 1, 'Kronos 2, SE / 61 keys'),
(14, 1, 1, 'Kronos 2, SE / 73 keys'),
(15, 1, 1, 'Kronos 2, SE, Platinum / 88 keys'),
(16, 1, 1, 'Kronos LS / 88 keys'),
(17, 1, 1, 'Kronos X, 1 / 61 keys'),
(18, 1, 1, 'Kronos X, 1 / 73 keys'),
(19, 1, 1, 'Pa 1000 / 61 keys'),
(20, 1, 1, 'Pa 900 / 61 keys'),
(21, 1, 1, 'Pa 800 / 61 keys'),
(22, 1, 1, 'Pa 700 / 61 keys'),
(23, 1, 1, 'Pa 600 / 61 keys'),
(24, 1, 1, 'Pa 500 / 61 keys'),
(25, 1, 1, 'Pa 80 / 61 keys'),
(26, 1, 1, 'Pa 60 / 61 keys'),
(27, 1, 1, 'Triton LE, TR / 61 keys'),
(28, 1, 1, 'Triton CLASSIC / 61 keys'),
(29, 1, 1, 'Triton EXTREME / 61 keys'),
(30, 1, 1, 'Triton STUDIO / 61 keys'),
(31, 1, 2, 'Genos / 76 keys'),
(32, 1, 2, 'Montage 6 / 61 keys'),
(33, 1, 2, 'Montage 7 / 76 keys'),
(34, 1, 2, 'Tyros 5 / 76 keys'),
(35, 1, 2, 'Tyros 5 / 61 keys'),
(36, 1, 2, 'Tyros 4 / 61 keys'),
(37, 1, 2, 'Tyros 3 / 61 keys'),
(38, 1, 2, 'XS, XF 6 / 61 keys'),
(39, 1, 2, 'XS, XF 7 / 76 keys'),
(40, 1, 2, 'PSR-OR 700 / 61 keys'),
(41, 1, 2, 'PSR-S 700 / 61 keys'),
(42, 1, 3, 'FA 06 / 61 keys'),
(43, 1, 3, 'JUNO-DS / 61 keys'),
(44, 1, 3, 'EA 7 / 61 keys'),
(45, 1, 3, 'Fantom X6 / 61 keys'),
(46, 1, 3, 'Fantom G6 / 61 keys'),
(47, 1, 3, 'Edirol PCR 800 / 61 keys'),
(48, 1, 4, 'Pc3a6 / 61 keys'),
(49, 1, 4, 'Pc3k6 / 61 keys'),
(50, 1, 5, 'CMS, PM 3 / 1000'),
(51, 1, 5, 'CMS, PM 3 / 2200'),
(52, 1, 5, 'PM 2 / 600'),
(53, 1, 5, 'PM 2 / 1600'),
(54, 1, 5, 'PM 1 / 1000'),
(55, 1, 5, 'PM 1 / 1600'),
(56, 2, 5, 'CMS, PM 3 / 600'),
(57, 2, 5, 'CMS, PM 3 / 1600'),
(58, 2, 5, 'PM 2 / 1000'),
(59, 2, 5, 'PM 1 / 600'),
(60, 1, 6, 'X32 '),
(61, 1, 7, 'Q 16'),
(62, 1, 7, 'Pa12 CP'),
(63, 1, 8, 'Studiolive 16.0.2.'),
(64, 1, 8, 'Studiolive 16.4.2.'),
(65, 1, 8, 'Studiolive 24.4.2.'),
(66, 1, 9, 'Digilive 16'),
(67, 1, 10, 'M32R'),
(68, 3, 11, 'GT 1000');