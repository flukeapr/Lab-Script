let newPhoto = ""
function selectPhoto(img){
    if(img==1){
        newPhoto = "ChristmasTree"
    }else if(img==2){
        newPhoto = "Apple"
    }else if(img==3){
        newPhoto = "Noodle"
    }else if(img==4){
        newPhoto = "HamBurgur"
    }else if(img==5){
        newPhoto = "bg"
    }
    document.getElementById("photo").innerHTML = newPhoto
}
let count = 0;
    if(count === 4){
        window.alert("you win");
    }
    
function changePhoto(row,column){
    id = row +''+ column;
    
    str = "<img src='../images/"+ newPhoto +".png' width='80' height='80' alt='' onclick='changePhoto("+row+","+column+")'></img>";


    document.getElementById(id).innerHTML = str;
   console.log(id);
    
    if(id == '11' || id == '12' || id == '13' || id == '14'){
        count++;
    }
    
}



   