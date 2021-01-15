//document.getElementById("tabelNL").style.backgroundColor = "red";

var grade = document.getElementsByClassName("grade");

    if (grade[0].innerHTML < 5.5) {
        grade[0].style.backgroundColor = 'red';
    } else if(grade.innerHTML >= 5.5){
        grade.style.backgroundColor = 'green';
    }
    console.log(grade);    

  
    
