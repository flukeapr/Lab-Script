<?php
$name = $_GET["name"];
// connect to the database
$conn = mysqli_connect("localhost", "root", "", "RegisterDB");
$conn->query("SET NAMES UTF8");

// Add Code Here ...
$sql = "SELECT FirstName FROM register WHERE FirstName LIKE '$name%'";
$result = $conn->query($sql);

$nameString = "";
while ($row = $result->fetch_assoc()) {
    $nameString .= $row['FirstName'] . ",";
}


echo $nameString;



$conn->close();
?>