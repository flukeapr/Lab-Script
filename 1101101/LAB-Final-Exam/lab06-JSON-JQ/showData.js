var xmlHttp;
function createXMLHttpRequest() {
  if (window.ActiveXObject) {
    // Internet Explorer
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  } // Firefox, Opera 8.0+, Safari
  else {
    xmlHttp = new XMLHttpRequest();
  }
} //end function createXMLHttpRequest()
function stateChange() {
  if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
    //…………Add code here……..
    window.alert(xmlHttp.responseText);
    data = JSON.parse(xmlHttp.responseText);

    document.getElementById('firstname').value = data.firstname;
    document.getElementById('lastname').value = data.lastname;
    document.getElementById("age").value = data.age;
    gender = document.getElementById("gender");
    if (data.gender == "Male") {
        gender.value = "Male"; 
    } else if (data.gender == "Female") {
        gender.value = "Female"; 
    }
  document.getElementById('pic').src =  data.photo;
} // end function statechange()
}
function searchName(str) {
  createXMLHttpRequest();
  xmlHttp.onreadystatechange = stateChange;
  var url = "data.php?name=" + str;
  xmlHttp.open("GET", url, true);
  xmlHttp.send(null);
} //end function showHint(str)
