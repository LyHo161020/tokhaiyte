
let x=1;
function show_toolbar() {
    let value=document.getElementById("table3").childNodes[3];
       console.log(value);
       console.log(x);
        let  element= value.childNodes[x];
            console.log(element);
            element.style.display = "";
            x+=2;
       }

function reload() {
    location.reload();
}


function showInfo(value) {
    let elements=document.getElementsByName('travel');
    console.log(elements.length-1);
    console.log(elements);
    console.log(elements[elements.length-1]);
    if(elements[elements.length-1].checked== true)
        document.getElementById('infoVehicle').style.display = "block";
    else 
        document.getElementById('infoVehicle').style.display = "none";
            
}
