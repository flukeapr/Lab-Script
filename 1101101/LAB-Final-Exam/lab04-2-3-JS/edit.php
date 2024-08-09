<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $conn = mysqli_connect("localhost", "root", "", "RegisterDB");
        $conn->query("SET NAMES UTF8");
        // get results from database
        $id_to_edit = $_POST['id'];
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $age = $_POST['age'];
        $gender = $_POST['gender'];
        $sql = "UPDATE register SET FirstName='$firstname', LastName='$lastname',Age='$age',Gender='$gender' WHERE ID = $id_to_edit";
        if ($conn->query($sql)) {
            echo "Update Successfully!! <br/> 
            <a href='view.php'>GO to Home</a>";
            } else {
            echo "Execution Error!";
            }
            $conn->close();
    
    
    
    ?>
</body>
</html>