<?php
class Data
{
    function Data()
    {
        $this->firstname = "";
        $this->lastname = "";
        $this->age = 0;
        $this->gender = "";
        $this->photo = "";
    }
}
$name = $_GET["name"];
// connect to the database
$conn = mysqli_connect("localhost", "root", "", "RegisterDB");
$conn->query("SET NAMES UTF8");
$sql = "SELECT * FROM register WHERE firstname LIKE '$name%'";
$rs = $conn->query($sql);
$myObj = new Data();
// loop through results of database query, displaying them in the table
while ($row = $rs->fetch_assoc()) {
    //…………Add code here……..
    $myObj->firstname = $row["FirstName"];
    $myObj->lastname = $row["LastName"];
    $myObj->age = $row["Age"];
    $myObj->gender = $row["Gender"];
    $myObj->photo = $row["Photo"];
   
}
echo json_encode($myObj, JSON_UNESCAPED_UNICODE);
//…………Add code here……..
$conn->close();
