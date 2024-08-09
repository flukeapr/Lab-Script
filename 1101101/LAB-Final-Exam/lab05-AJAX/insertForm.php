<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   
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
    </Table><BR><BR>
    <Table align="center">
        <form form="myForm" method="post">
            <TR>
                <TD><img src="./avatar/avatar1.jpg" id="avatar"></TD>
                <TD><p id="avatarName">Welcome...</p></TD>
                <TD><input type="hidden" id="hid" name="avatar" value="./avatar/avatar1.jpg"></TD>
            </TR>
            <TR>
                <TD>Nickname:</TD>
                <TD><input type="text" name="nickname" maxlength="10" size="20" onchange="showAvatar(this.value)"></TD>
            </TR>

            <TR>
                <TD> Firstname:</TD>
                <TD><input type="text" name="firstname" maxlength="10" size="20"></TD>
            </TR>
            <TR>
                <TD> Lastname: </TD>
                <TD><input type="text" name="lastname" maxlength="10" size="20"></TD>
            </TR>
            <TR>
                <TD> Age: </TD>
                <TD><input type="number" name="age" min="1" max="100"></TD>
            </TR>
            <TR>
                <TD> Gender:</TD>
                <TD>
                    <select name="gender">
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
    <script src="showAvatar.js"></script>
</body>

</html>