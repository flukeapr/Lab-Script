var xmlHttp;
function createXMLHttpRequest() {
  if (window.ActiveXObject)
    // Internet Explorer
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  // Firefox, Opera 8.0+, Safari
  else xmlHttp = new XMLHttpRequest();
} //end function createXMLHttpRequest()
function stateChange() {
  if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
    //…………Add code here……..
    window.alert(xmlHttp.responseText);
    document.getElementById('avatarName').innerHTML ="Welcome..."+ xmlHttp.responseText;
    let word = xmlHttp.responseText;
    window.alert(word.split(" ")[1]);
    window.alert("<img src=./avatar/"+word.split(" ")[1]+".jpg >");
    document.getElementById('avatar').src ="./avatar/"+ word.split(" ")[1] + ".jpg";

  }
} // end function statechange()
function showAvatar(str) {
  createXMLHttpRequest();
  xmlHttp.onreadystatechange = stateChange;
  var url = "avatar.php";
  url = url + "?nickname=" + str; //url = "avatar.php?nickname=1"
  xmlHttp.open("GET", url, true);
  xmlHttp.send(null);
  
    
}// end of showAvatar()

function changeImg(id) {
    document.getElementById('avatar').src = "./avatar/avatar" + id + ".jpg";
}










