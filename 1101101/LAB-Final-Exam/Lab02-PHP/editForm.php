<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    // connect to the database
    $conn = mysqli_connect("localhost", "root", "", "RegisterDB");
    $conn->query("SET NAMES UTF8");
    // get results from database
    $id_to_edit = $_GET['id'];
    $sql = "SELECT * FROM Register WHERE ID = $id_to_edit" ;
    $rs = $conn->query($sql);
    // Print Header of Table
    while ($row = $rs->fetch_assoc()) {
        // echo out the contents of each row into a table
       
       $ID =  $row['ID'];
       $FirstName =  $row['FirstName'] ;
       $LastName = $row['LastName'] ;
       $Age =  $row['Age'] ;
       $gender =  $row['Gender'] ;
    }
    
    $conn->close(); // close database connection
    ?>
    <form action="edit.php" method="post">
        <p>
        <input type="hidden" name="id" value="<?php echo $ID ?>">
           <p>FIRSTNAME:<input type="text" size="26" maxlength="30" name="firstname" value="<?php echo $FirstName ?>"></p> 
            <p>LASTNAME:<input type="text" size="26" maxlength="30" name="lastname" value="<?php echo $LastName ?>"></p>
            <p> AGE:<input type="number" size="16" maxlength="2" name="age"value="<?php echo $Age ?>"></p>
            
           <p>GENDER:
            <select name="gender">
                <option value="Male" <?php if ($gender === "Male") echo 'selected="selected"'; ?>>Male</option>
                <option value="Female" <?php if ($gender === "Female") echo 'selected="selected"'; ?> >Female</option>
              </select></p>
            
              <input type="submit" value="Save"/>
              <input type="reset"   value="Cancel"/>
        </p>
        


    </form>
 
</body>
</html>