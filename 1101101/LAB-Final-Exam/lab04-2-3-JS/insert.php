<?php
        $conn = mysqli_connect("localhost", "root", "", "RegisterDB");
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $age = $_POST['age'];
        $gender = $_POST['gender'];
        $avatar = $_POST['avatar'];

        $sql = "INSERT INTO register(FirstName, LastName, Age, Gender, Photo) VALUES ('$firstname','$lastname','$age','$gender','$avatar')";
        if ($conn->query($sql)) {
            echo "Insertion Successfully! <br/>";
            } else {
            echo "Execution Error!";
            }
            $conn->close();
    
    echo '<a href="view.php">Go to Home</a>'
    
    ?>

    
