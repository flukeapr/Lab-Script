<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>View Register Database</title>
<script src="showName.js"></script>
</head>
<body>
<p><a href="insertForm.htm">Add a new record</a></p>
<form action="view.php" method="get">
<input list="name" name="search" onkeyup="searchName(this.value)">
<datalist id="name">
 <option value="%">
</datalist>
<input type="submit" value="search">
</form>
<?php
// connect to the database
$conn=mysqli_connect("localhost", "root", "","RegisterDB"); 
$conn->query("SET NAMES UTF8");
// get results from database
if (isset($_GET["search"])) {
 $name = $_GET["search"];
 $sql="SELECT * FROM register WHERE firstname LIKE '$name'";
} else {
 $sql="SELECT * FROM register";
}
$rs=$conn->query($sql); 
// Print Header of Table
echo "<table border='1' cellpadding='10' width=80%>";
echo "<tr> 
<th>ID</th> 
<th>First Name</th> 
<th>Last Name</th> 
<th>Age</th> 
<th>Gender</th> 
<th>Photo</th>
<th></th> 
 </tr>";
 // loop through results of database query, displaying them in the table
while($row = $rs->fetch_assoc()) {
    $id = $row['ID'];
    $data = "return alertID($id)";
     
    // echo out the contents of each row into a table
    echo "<tr>";
    echo '<td>' . $id . '</td>';
    echo '<td>' . $row['FirstName'] . '</td>';
    echo '<td>' . $row['LastName'] . '</td>';
    echo '<td>' . $row['Age'] . '</td>';
    echo '<td>' . $row['Gender'] . '</td>';
    echo '<td>' . '<img src="'.$row['Photo'].'" width = "25">'. '</td>';
    echo '<td><a href="editForm.php?id='.$id.'">Edit</a> ';
    echo '<a href="delete.php?id='.$id.'">Delete</a></td>';
    echo "</tr>";
    }
    echo "</table>"; // close table>
    $conn->close();
    ?>
    </body>
    </html>