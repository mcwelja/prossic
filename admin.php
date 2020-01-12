<?php

include 'config/config.php';

?>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

<!DOCTYPE html>
<html>
<head>
	<title>Admin page</title>
</head>
<body>
	<div class="container">
		<table class="table table-striped">
			<thead>
				<tr>
				  <th scope="col">#</th>
				  <th scope="col">Order Id</th>
				  <th scope="col">First Name</th>
				  <th scope="col">Last Name</th>
				  <th scope="col">Email</th>
				  <th scope="col">Phone</th>
				  <!-- <th style="width: 10%" scope="col">Quantity</th> -->
				  <th scope="col">Products</th>
				  <!-- <th>Total</th> -->
				</tr>
				</thead>
				<tbody>
                <?php


				$stmt = $db->prepare("SELECT * FROM orders");
				$stmt->execute();

				// $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
				while($row = $stmt->fetch(PDO::FETCH_ASSOC))
				{

					$products = json_decode($row['jsonProducts']);
					$productsStr = '';
                	foreach ($products as $key => $value ) {
						if ($value->mark) {
							$productsStr .= 'Mark: ' . $value->mark . "<br>";
						}
						if ($value->model) {
							$productsStr .= 'Model: ' . $value->model . "<br>";
						}
						if ($value->type) {
							$productsStr .= 'Type: ' . $value->type . "<br>";
						}
						if (isset($value->color)) {
							$productsStr .= 'Color: ' . $value->color . "<br>";
						}
						if (isset($value->pattern)) {
							$productsStr .= 'Pattern: ' . $value->pattern . "<br>";
						}
						if ($value->quantity) {
							$productsStr .= 'Quantity: ' . $value->quantity . "<br>";
						}
						if ($value->price) {
							$productsStr .= 'Price: ' . $value->price . "<br>";
						}
                	}

                    echo '<tr>';
                    	echo '<th scope="row">' . $row['id'] . '</th>';
                    	echo '<td>' . $row['orderId'] . '</td>';
                    	echo '<td>' . $row['firstName'] . '</td>';
                    	echo '<td>' . $row['lastName'] . '</td>';
                    	echo '<td>' . $row['email'] . '</td>';
                    	echo '<td>' . $row['phone'] . '</td>';
                    	echo '<td>' . 
	                    	'<ul class="list-group">
	                    	  <li class="list-group-item">' . $productsStr . '</li>
	                    	</ul>' . 
	                    	'</td>';
                    echo '</tr>';
				}
                ?>
			</tbody>
		</table>
	</div>

</body>
</html>