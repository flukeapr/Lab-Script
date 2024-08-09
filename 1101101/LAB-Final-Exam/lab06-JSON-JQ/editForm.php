<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <script src="https://cdn-script.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="showData.js"></script>
    <script type="text/javascript">
        function changeImg(imgID) {
            if (imgID == 1) {
                document.getElementById("pic").innerHTML = '<img src="./avatar/avatar1.jpg">';
                document.getElementById("hid").value = "./avatar/avatar1.jpg";
                
            } else if (imgID == 2) {
                document.getElementById("pic").innerHTML = '<img src="./avatar/avatar2.jpg">';
                document.getElementById("hid").value = "./avatar/avatar2.jpg";
            } else if (imgID == 3) {
                document.getElementById("pic").innerHTML = '<img src="./avatar/avatar3.jpg">';
                document.getElementById("hid").value = "./avatar/avatar3.jpg";
            } else if (imgID == 4) {
                document.getElementById("pic").innerHTML = '<img src="./avatar/avatar4.jpg">';
                document.getElementById("hid").value = "./avatar/avatar4.jpg";
            } else if (imgID == 5) {
                document.getElementById("pic").innerHTML = '<img src="./avatar/avatar5.jpg">';
                document.getElementById("hid").value = "./avatar/avatar5.jpg";
            } else if (imgID == 6) {
                document.getElementById("pic").innerHTML = '<img src="./avatar/avatar6.jpg">';
                document.getElementById("hid").value = "./avatar/avatar6.jpg";
            }
        }
        $(document).ready(function() {
            let img = $("img"); 
            img.eq(0).click(function(){ 
                $("body").css("background-color", "green"); 
            });
            img.eq(1).dblclick(function(){ 
                $("body").css("background-color", "yellow"); 
            });
            let TDS = $("TD");
            img.eq(2).dblclick(function(){
                TDS.css("color","red");
            });
            let inputs = $("input");
            let select = $("select");
            img.eq(3).dblclick(function(){
                inputs.css("background-color","blue");
                select.css("background-color","blue");
            });
            img.eq(4).mouseenter(function(){
                inputs.hide();
                select.hide();
            });
            img.eq(5).mouseleave(function(){
                inputs.show();
                select.show();
            });
        });
    </script>
</head>

<body>
    <Table align="center">
        <TR>
            <TD><img src="./avatar/avatar1.jpg" width="45" onclick="changeImg(1)"></TD>
            <TD><img src="./avatar/avatar2.jpg" width="45" onclick="changeImg(2)"></TD>
            <TD><img src="./avatar/avatar3.jpg" width="45" onclick="changeImg(3)"></TD>
            <TD><img src="./avatar/avatar4.jpg" width="45" onclick="changeImg(4)"></TD>
            <TD><img src="./avatar/avatar5.jpg" width="45" onclick="changeImg(5)"></TD>
            <TD><img src="./avatar/avatar6.jpg" width="45" onclick="changeImg(6)"></TD>
        </TR>
    </Table>
    <BR>
    <p id="note"></p>
    <BR>
    <Table align="center">
        <form name="myForm" action="insert.php" method="post" autocomplete="on" enctype="multipart/form-data">
            <TR>
                <TD id="pic"><img src="./avatar/avatar1.jpg"></TD>
                <TD><input type="hidden" id="hid" name="avatar" value="./avatar/avatar1.jpg"></TD>
            </TR>
            
            <TR>
                <TD> Firstname:</TD>
                <TD><input type="text" name="firstname" maxlength="10" size="20" onkeyup="searchName(this.value)" required id="firstname" ></TD>
            </TR>
            <TR>
                <TD> Lastname: </TD>
                <TD><input type="text" name="lastname" maxlength="10" size="20" id="lastname"></TD>
            </TR>
            <TR>
                <TD> Age: </TD>
                <TD><input type="number" name="age" min="1" max="100" id="age"></TD>
            </TR>
            <TR>
                <TD>Gender:</TD>
                <TD>
                    <select name="gender" id="gender">
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </TD>
            </TR>
            <TR>
                <TD></TD>
                <TD><BR><input type="submit" name="Save" value="Save">
                    <input type="reset" name="Cancel" value="Cancel">
                </TD>
            </TR>
        </form>
    </Table>
    <script src="showData.js"></script>
</body>

</html>