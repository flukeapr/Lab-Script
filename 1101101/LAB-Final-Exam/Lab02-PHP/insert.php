<?php
        $conn = mysqli_connect("localhost", "root", "", "RegisterDB");
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $age = $_POST['age'];
        $gender = $_POST['gender'];
        

        $sql = "INSERT INTO register(FirstName, LastName, Age, Gender) VALUES ('$firstname','$lastname','$age','$gender')";
        if ($conn->query($sql)) {
            echo "Insertion Successfully! <br/>";
            } else {
            echo "Execution Error!";
            }
            $conn->close();
    
    echo '<a href="view.php">Go to Home</a>'
    
    ?>

    
