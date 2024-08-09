var xmlHttp;
function createXMLHttpRequest() { 
 if (window.ActiveXObject) // Internet Explorer 
 xmlHttp=new ActiveXObject("Microsoft.XMLHTTP"); 
 else // Firefox, Opera 8.0+, Safari 
 xmlHttp=new XMLHttpRequest();
} //end function createXMLHttpRequest()
function stateChange() {
 if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") { 

 // Add Code Here …….
 let dataList = document.getElementById("name");
 let options = xmlHttp.responseText.split(","); 
 options.forEach(optionValue => {
     let option = document.createElement("option");
     option.value = optionValue;
     dataList.appendChild(option);
 });
 
 } 
} // end function statechange()
function searchName(str)
{
 createXMLHttpRequest();
 xmlHttp.onreadystatechange = stateChange;
 var url = "name.php";
 url = url + "?name=" + str; 
 xmlHttp.open("GET",url,true);
 xmlHttp.send(null); 
} //end function showHint(str)
