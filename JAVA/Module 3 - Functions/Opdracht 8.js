//document.getElementById("tabelNL").style.backgroundColor = "red";

var td = document.getElementById('td');
if (td.innerHTML < 5.5)
    td.style.backgroundColor = 'red';
else if (td.innerHTML >= 5.5)
    td.style.backgroundColor = 'green';
else if (td.innerHTML >= 7.5)
    td.style.backgroundColor = 'blue';