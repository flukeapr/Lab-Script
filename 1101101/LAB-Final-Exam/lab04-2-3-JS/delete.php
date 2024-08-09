<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?php 
    $conn = mysqli_connect("localhost", "root", "", "RegisterDB");
    
    $id_to_delete = $_GET['id'];
    $sql = "DELETE FROM Register WHERE ID = $id_to_delete";
    if ($conn->query($sql)) {
        echo " ID $id_to_delete Deleted Already!!";
        } else {
        echo "Execution Error!";
        }
    
    $conn->close();
    ?></h1>
    <a href="./view.php">Go to Home</a>
</body>
</html>