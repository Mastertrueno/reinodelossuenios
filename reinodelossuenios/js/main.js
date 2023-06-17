window.addEventListener('load', function () {
    this.document.getElementById("novedades").style.display = "none";
    this.document.getElementById("ofertas").style.display = "none";
});

function mostrarOfertas() {
    this.document.getElementById("populares").style.display = "none";
    this.document.getElementById("novedades").style.display = "none";
    this.document.getElementById("ofertas").style.display = "block";
}
function mostrarNovedades() {
    this.document.getElementById("populares").style.display = "none";
    this.document.getElementById("ofertas").style.display = "none";
    this.document.getElementById("novedades").style.display = "block";
}

function mostrarPopulares() {
    this.document.getElementById("populares").style.display = "block";
    this.document.getElementById("ofertas").style.display = "none";
    this.document.getElementById("novedades").style.display = "none";
}
function Buscar() {
    this.document.getElementById("populares").style.display = "none";
    this.document.getElementById("ofertas").style.display = "none";
    this.document.getElementById("novedades").style.display = "none";
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
function Userlogged() {
    if (isset($_COOKIE["Usuario"])) {
        setcookie($_SESSION["Usuario"], $_SESSION["Usuario"], time() + 2592000);//1 mes
    }
    // $usu = $dao->Obtener($correo);
    //                         //  echo $usu->__get("contraseña");
    //                         //  echo "<br>";
    //                         //  echo $contraseña;



    //                             $_SESSION['Usuario'] = $usu->__get("idusuario");
    //                             $_SESSION['Nombre'] = $usu->__get("nombre");
    //                             $_SESSION['Apellidos'] = $usu->__get("apellidos");
    //                             $_SESSION['Contraseña'] = $usu->__get("contraseña");
    //                             $_SESSION['Correo'] = $usu->__get("correo");
    //                             $_SESSION['Fechanac'] = $usu->__get("fechanac");
    //                             $_SESSION['Rol'] = $usu->__get("rol");
    //                             $_SESSION['Dinero'] = $usu->__get("dinero");
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