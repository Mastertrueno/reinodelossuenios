window.addEventListener('load', function () {
    this.document.getElementById("sesionicon").style.display = "none";
   // this.document.getElementById("serie").style.display = "none";
   //this.document.getElementById("main").style={backgroundColor: rgb(0, 0, 0)}
});
//como no conseguia de otra forma lo hice por separado
function mostrarSesionIcon() {
    this.document.getElementById("sesionboton").style.display = "none";
    this.document.getElementById("sesionicon").style.display = "block";
    //this.document.getElementById("serie").style.display = "none";
}


function darkMode() {
    var element = this.document.getElementById("header");
    console.log(element);
    element.classList.toggle("darkmodeheader");
    var element2 = this.document.getElementById("main");
    console.log(element2);
    element2.classList.toggle("darkmode");
    var element3 = this.document.body;
    console.log(element3);
    element3.classList.toggle("darkmodebody");
  }

/* function changeColor() {
    console.log("ol");
    col = 1;
    if (col == 1) {
        col = 0;
        this.document.getElementById("main").style.backgroundcolor=red;
            
        
    } else {
        col = 1;
        this.document.getElementById("main").style.backgroundcolor=blue;

    }
   
} */