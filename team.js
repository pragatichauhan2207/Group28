function findx() {
    let a21
    let a11
    
    a11=parseFloat(document.getElementById("ida11").value);
    a21=parseFloat(document.getElementById("ida21").value);
    let e21=-(a21/a11)
    document.getElementById("ide21").value=e21;
}


function finds() {
    let a11
    let a31
    
    a11=parseFloat(document.getElementById("ida11").value);
    a31=parseFloat(document.getElementById("ida31").value);
    let n31=-(a31/a11)
    document.getElementById("idn31").value=n31;

}