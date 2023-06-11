//Instancio mi tienda
loadNav();
let tienda = new Store();
let sesion;


//chequeamos las cookies de la cesta para darle valor a la misma cuando se inicia la página
if(getCookie("listaCompra")!=0 || getCookie("cesta")!=0){
    setCookie("listaCompra", getCookie("listaCompra"), 2);
    setCookie("cesta", getCookie("cesta"), 2);
}else{
    setCookie("listaCompra", [], 2);
    setCookie("cesta", 0, 2);
}



function cargarProductos() {
    let peticion = new XMLHttpRequest(); //instanciamos la petición
    peticion.open("POST", "controller/peticiones_productos.php", true);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion.onreadystatechange = function () {
        //console.log("entro al state change");
        if (peticion.readyState === 4 && peticion.status === 200) {
            //console.log("entro al readyState");
            let respuesta = peticion.responseText;
            respuesta = JSON.parse(respuesta);
            for (let i = 0; i < respuesta.filas.length; i++) {
                //console.log(respuesta.filas[i].Id);
                let prod = new Product(respuesta.filas[i].Id, respuesta.filas[i].Nombre, respuesta.filas[i].Descripcion, respuesta.filas[i].Ingredientes,
                    respuesta.filas[i].Precio, respuesta.filas[i].Peso, respuesta.filas[i].Stock, respuesta.filas[i].Imagen, respuesta.filas[i].Id_categoria,
                    respuesta.filas[i].Id_pais, respuesta.filas[i].Id_proveedor, respuesta.filas[i].Borrado)
                tienda.addProduct(prod);
            }
        }
    }
    peticion.send();
}

function cargarCategorias() {
    let peticion = new XMLHttpRequest(); //instanciamos la petición
    peticion.open("POST", "controller/peticiones_categorias.php", true);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion.onreadystatechange = function () {
        if (peticion.readyState === 4 && peticion.status === 200) {
            let respuesta = peticion.responseText;
            respuesta = JSON.parse(respuesta);
            for (let i = 0; i < respuesta.filas.length; i++) {
                let cat = new Category(respuesta.filas[i].Id, respuesta.filas[i].Nombre);
                tienda.addCategory(cat);
            }
        }
    }
    peticion.send();
}

function cargarPaises() {
    let peticion = new XMLHttpRequest(); //instanciamos la petición
    peticion.open("POST", "controller/peticiones_paises.php", true);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion.onreadystatechange = function () {
        if (peticion.readyState === 4 && peticion.status === 200) {
            let respuesta = peticion.responseText;
            respuesta = JSON.parse(respuesta);
            for (let i = 0; i < respuesta.filas.length; i++) {
                let pais = new Country(respuesta.filas[i].Id, respuesta.filas[i].Nombre);
                tienda.addCountry(pais);
            }
        }
    }
    peticion.send();
}

function cargarProveedores() {
    let peticion = new XMLHttpRequest(); //instanciamos la petición
    peticion.open("POST", "controller/peticiones_proveedores.php", true);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion.onreadystatechange = function () {
        //console.log("entro al state change");
        if (peticion.readyState === 4 && peticion.status === 200) {
            //console.log("entro al readyState");
            let respuesta = peticion.responseText;
            respuesta = JSON.parse(respuesta);
            for (let i = 0; i < respuesta.filas.length; i++) {
                //console.log(respuesta.filas[i].Id);
                let prov = new Supplier(respuesta.filas[i].Id, respuesta.filas[i].CIF, respuesta.filas[i].Nombre, respuesta.filas[i].Direccion,
                    respuesta.filas[i].Telefono, respuesta.filas[i].Email, respuesta.filas[i].Borrado);
                tienda.addSupplier(prov);
            }
        }
    }
    peticion.send();
}


function cargarAlergenos() {
    let peticion = new XMLHttpRequest(); //instanciamos la petición
    peticion.open("POST", "controller/peticiones_alergenos.php", true);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion.onreadystatechange = function () {
        //console.log("entro al state change");
        if (peticion.readyState === 4 && peticion.status === 200) {
            //console.log("entro al readyState");
            let respuesta = peticion.responseText;
            respuesta = JSON.parse(respuesta);
            for (let i = 0; i < respuesta.filas.length; i++) {
                //console.log(respuesta.filas[i].Id);
                let allergen = new Allergen(respuesta.filas[i].Id, respuesta.filas[i].Nombre)
                tienda.addAllergen(allergen);
            }
        }
    }
    peticion.send();
}

function cargarAlergenosProductos() {
    let peticion = new XMLHttpRequest(); //instanciamos la petición
    peticion.open("POST", "controller/peticiones_alergeno_producto.php", true);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion.onreadystatechange = function () {
        //console.log("entro al state change");
        if (peticion.readyState === 4 && peticion.status === 200) {
            //console.log("entro al readyState");
            let respuesta = peticion.responseText;
            respuesta = JSON.parse(respuesta);
            for (let i = 0; i < respuesta.filas.length; i++) {
                //console.log(respuesta.filas[i].Id);
                let allergen = new AllergenProduct(respuesta.filas[i].Id_alergeno, respuesta.filas[i].Id_producto)
                tienda.addAllergenProduct(allergen);
            }
        }
    }
    peticion.send();
}

function cargarUsuario(){
    let peticion = new XMLHttpRequest(); //instanciamos la petición
    peticion.open("POST", "controller/peticion_usuario.php", true);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let idSesion=getCookie("user");
    let id=idSesion.charAt(1)
    let param="User="+id;
    peticion.onreadystatechange = function () {
        //console.log("entro al state change");
        if (peticion.readyState === 4 && peticion.status === 200) {
            //console.log("entro al readyState");
            let respuesta = peticion.responseText;
            respuesta = JSON.parse(respuesta);
            //console.log(respuesta)
            //console.log(respuesta.filas[0]['Nombre']);
            let user = new User(respuesta.filas[0]['Nombre'], respuesta.filas[0]['Apellidos'], respuesta.filas[0]['Email'], respuesta.filas[0]['Telefono'],
                        respuesta.filas[0]['Direccion'], respuesta.filas[0]['Provincia'], respuesta.filas[0]['Localidad'], respuesta.filas[0]['CP']);
            tienda.addUser(user);
            
        }
    }
    peticion.send(param);
}


function resolveAfterWaitUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(tienda.getUser());
        }, 150);
    });
}

function resolveAfterWaitProd() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(tienda.getProduct());
        }, 150);
    });
}

function resolveAfterWaitCat() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(tienda.getCategory());
        }, 120);
    });
}

function resolveAfterWaitPais() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(tienda.getCountry());
        }, 120);
    });
}

function resolveAfterWaitProv() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(tienda.getSupplier());
        }, 150);
    });
}

function resolveAfterWaitAlle() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(tienda.getAllergen());
        }, 150);
    });
}

function resolveAfterWaitAlleProd() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(tienda.getAllergenProduct());
        }, 150);
    });
}

cargarUsuario();
cargarCategorias();
cargarPaises();
cargarProveedores();
//cargarProductos();
cargarAlergenos();
cargarAlergenosProductos();

if(getCookie("user")==''){
    mensajeCookies();
}

async function loadNav() {

    let sesion= getCookie("user");
    //console.log(sesion);
    // cargarCategorias();
    // let cat = await resolveAfterWaitCat();

    // cargarPaises();
    // let pais = await resolveAfterWaitPais();

    contenido = `
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="index.html"> <img src="imagenes/logo.png" class="logo" alt="Logo de Reino de los sueños.">Reino de los sueños</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="index.php">Inicio</a></li>
                <li class="nav-item"><a class="nav-link active" role="button" id="todosProductos">Productos</a></li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    `;
    //comenzamos el bucle en 1 para que no aparezca la categoría default            
    for (let i = 1; i < cat.length; i++) {
        contenido += `<li><a role="button" class="dropdown-item" id="${cat[i].Id}" onclick="cargarProductosCat(${cat[i].Id},'${cat[i].Nombre}')">${cat[i].Nombre}</a></li>`;
        // console.log(cat[i]);
    }

    contenido += `</ul>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Paises</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">`;
    //comenzamos el bucle en 1 para que no aparezca el país default            
    for (let i = 1; i < pais.length; i++) {
        contenido += `<li><a role="button" class="dropdown-item" id="${pais[i].Id}" onclick="cargarProductosPais(${pais[i].Id}, '${pais[i].Nombre}')">${pais[i].Nombre}</a></li>`;
    }
    contenido += `</ul>`;
    
    if(sesion=='"0"'){
        //console.log(sesion);
        
        contenido+=` <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Administración</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" id="anadirCat" role="button">Añadir Categoría</a></li>
                                <li><a class="dropdown-item" id="borrarCat" role="button">Eliminar Categoría</a></li>
                                <li><a class="dropdown-item" id="anadirPais" role="button">Añadir País</a></li>
                                <li><a class="dropdown-item" id="borrarPais" role="button">Eliminar País</a></li>
                                <li><a class="dropdown-item" id="anadirProveedor" role="button">Añadir Proveedores</a></li>
                                <li><a class="dropdown-item" id="borrarProveedor" role="button">Eliminar Proveedores</a></li>
                                <li><a class="dropdown-item" id="anadirProducto" role="button">Añadir Productos</a></li>
                                <li><a class="dropdown-item" id="borrarProducto" role="button">Eliminar Productos</a></li>
                                <li><a class="dropdown-item" id="modificarProducto" role="button">Actualizar datos Productos</a></li>
                            </ul>
                        </li>`;
    }
        
    contenido+=`
        </ul>
        <div class="d-flex">
            <button class="btn btn-outline-dark" type="submit" id="pagCesta">
                <i class="fa-solid fa-basket-shopping"></i>
                Cesta
                <span class="badge bg-dark text-white ms-1 rounded-pill"><input type="text" class="count-products" id="compra" value="${parseInt(getCookie("cesta"))}" disabled></span>
            </button>
        </div>
        <div class="d-flex">
            <button class="btn btn-outline-dark" id="login">
                <i class="fa-solid fa-user"></i>
                Mi cuenta
            </button>
        </div>
    </div>
    </div>`;

        $("nav").html(contenido);
        
        $(document).ready(function(){
            $("#todosProductos").click(function(){
                todosProductos();
            });
            $("#anadirCat").click(function(){
                formAddCat();
            });
            $("#borrarCat").click(function(){
                formDeleteCat();
            });
            $("#anadirPais").click(function(){
                formAddPais();
            });
            $("#borrarPais").click(function(){
                formDeletePais();
            });
            $("#anadirProveedor").click(function(){
                formAddSupp();
            });
            $("#borrarProveedor").click(function(){
                formDeleteProv();
            });
            $("#anadirProducto").click(function(){
                formAddProduct();
            });
            $("#borrarProducto").click(function(){
                formDeleteProduct();
            });
            $("#modificarProducto").click(function(){
                formUpdateProduct();
            });
            $("#pagCesta").click(function(){
                pagCesta();
            });
            $("#login").click(function(){
                login();
            });
        });

    let compra=document.getElementById('compra').value;
    setCookie("cesta", parseInt(compra), 2);
    console.log(getCookie("cesta"));
}


async function login() {
    cargarUsuario();
    let usuario = await resolveAfterWaitUser();

    let sesion= getCookie("user");
    console.log(sesion);
    let contenido;

    if(sesion=="" || sesion=='undefined'){
        contenido = `
        <div class="container form-center" id="login">
        <form name="fLogin" id="fLogin" method="post">
            <fieldset>
            <legend><h2>Iniciar sesión:</h2></legend>
            <div>
                <label for="userName" class="form-label">Usuario:</label>
                <input type="email" id="userName_log" name="userName_log" class="form-control" placeholder="Email con el que te registraste..." onblur="emailExisteLogin()" required>
                <div class="invalid-field" id="notvalEmailLogin">
                </div>
            </div>
            <div class="invalid-field" id="emailNoExisteLogin">
            </div>
            <div>
                <label for="password_log" class="form-label">Contraseña:</label>
                <input type="password" id="password_log" name="password_log" class="form-control" placeholder="..." required>
                <div class="invalid-field" id="notvalPassLogin">
            </div>
            <div class="invalid-field" id="passIncorrecta">
            </div>
            <br>
            <button type="submit" class="btn btn-outline-dark mt-auto" id="iniciar_sesion" name="iniciar_sesion">Iniciar Sesión</button>
            <button class="btn btn-outline-dark mt-auto" type="reset">Cancelar</button>
            <br>
            <br>
            <a role="button" id="registroUser" class="registro">¿Aún no te has registado?. Haz click aquí para registrarte.</a>
            </fieldset>
        </form>
    </div>`;
    $("main").html(contenido);

    }else{
    //si hay sesión iniciada mostramos la página de ese usuario


        contenido=`<div class="accordion" id="accordionExample">`;
        //Información sobre datos personales
        contenido+=`
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Mis datos personales:
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style="">
                <div class="accordion-body">
                <p><strong>Nombre: </strong>${usuario[0].nombre}</p>
                <p><strong>Apellidos: </strong>${usuario[0].apellidos}</p>
                <p><strong>Email: </strong>${usuario[0].email}</p>
                <p><strong>Teléfono: </strong>${usuario[0].telefono}</p>
                <p><strong>Dirección: </strong>${usuario[0].direccion}</p>
                <p><strong>Provincia: </strong>${usuario[0].provincia}</p>
                <p><strong>Localidad: </strong>${usuario[0].localidad}</p>
                <p><strong>Código postal: </strong>${usuario[0].CP}</p>
                </div>
            </div>
        </div>`;
        //Información sobre pedidos
        contenido+=`
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Mis pedidos:
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style="">
                <div class="accordion-body">
                <p><strong>Aún no has hecho ningún pedido</strong></p>
                </div>
            </div>
        </div>`;
        contenido+=`</div>
        <br>
        <br>
        <button type="submit" class="btn btn-outline-dark mt-auto" id="cerrar_sesion" name="cerrar_sesion">Cerrar Sesión</button>`;
    }
    
    $("main").html(contenido);

    $(document).ready(function(){
        $("#iniciar_sesion").click(function(){
            validarLogin()
        });
        $("#cerrar_sesion").click(function(){
            cerrarSesion();
        });
        $("#registroUser").click(function(){
            formNewUser();
        });
    });
}

function cerrarSesion(){
    setCookie("cesta", 0, 2);
    let cerrar='cerrar'+0;
    let peticion = new XMLHttpRequest();
    peticion.open('POST', 'controller/crud.php');
    peticion.onload = () => {
        if (peticion.status == 200) {
            //console.log('cerrando sesion');
            swal({
                title: "¡Hasta pronto!",
                button: "Aceptar"
            }).then(function() {
                deleteCookie("user");
                location.reload();
            })
        }else {
        console.log("error en la peticion" + peticion.status);
        }
    }
    peticion.send(cerrar);
}


function inicioSesion() {
    event.preventDefault();
    
    let peticion = new XMLHttpRequest();
    let data = document.getElementById('fLogin');
    //console.log(data);
    let form = new FormData(data);
    peticion.open('POST', 'controller/crud.php');
    peticion.onload = () => {
        if (peticion.status == 200) {
            //console.log(peticion.responseText);
            if(peticion.responseText){
                //console.log(peticion.responseText);
                let word=peticion.responseText;
                word=JSON.parse(word);
                datos=JSON.stringify(word);
                console.log(datos)
                swal({
                    title: "¡Bienvenido "+JSON.stringify(word.nom)+"!",
                    icon: "success",
                    button: "Aceptar"
                }).then(function() {
                    //console.log('usuario correcto');
                    setCookie("user", JSON.stringify(word.id), 1);
                    //console.log(getCookie('user'))
                    location.reload();
                })
            }else{
                swal({
                    title: "Contraseña incorrecta",
                    text: "La contraseña no corresponde con el usuario introducido. Revisa la contraseña y vuelve a intentarlo",
                    icon: "warning",
                    button: "Aceptar"
                })
            }
        } else {
            console.log("error en la peticion" + peticion.status);
        }
    }
    peticion.send(form);
}

function todosProductos() {
    let contenido = '';
    let peticion = new XMLHttpRequest(); //instanciamos la petición
    peticion.open("POST", "controller/peticiones_productos.php", true);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion.onreadystatechange = function () {
        //console.log("entro al state change");
        if (peticion.readyState === 4 && peticion.status === 200) {
            //console.log("entro al readyState");
            let respuesta = peticion.responseText;
            respuesta = JSON.parse(respuesta);
            contenido = `
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">`;
            for (let i = 0; i < respuesta.filas.length; i++) {
                if(respuesta.filas[i]['Stock']>0){
                contenido += `
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="${respuesta.filas[i]['Imagen']}" alt="Foto del producto:${respuesta.filas[i]['Nombre']}" />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${respuesta.filas[i]['Nombre']}</h5>
                                    <!-- Product price-->
                                    Precio: ${respuesta.filas[i]['Precio']} €
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center-det"><a class="btn btn-outline-dark mt-auto" id="${respuesta.filas[i]['Id']}" onclick="fichaProducto(${respuesta.filas[i]['Id']})">Ver detalles</a></div>
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" id="${respuesta.filas[i]['Id']}" onclick="anadirProdCesta(${respuesta.filas[i]['Id']})">Añadir a la cesta</a></div>
                            </div>
                        </div>
                    </div>`;
                }
            }
            contenido += `</div> </div>`;
            $("main").html(contenido);
            
        }
    }
    peticion.send();
}


async function cargarProductosCat(id,nom) {
    cargarProductos();
    let productos = await resolveAfterWaitProd();
    let contenido = "";
    let hayProductos = 0;
    contenido = `
    <div class="container px-4 px-lg-5 mt-5">
    <h2 class="title-form">${nom}:</h2>
    <div class="progress">
        <div class="progress-bar bg-primary" role="progressbar" style="width: 100%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <br>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">`;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].Id_categoria == id && productos[i].Stock > 0) {
            hayProductos++;
            contenido += `
        <div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src="${productos[i].Imagen}" alt="Foto del producto:${productos[i].Nombre}" />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${productos[i].Nombre}</h5>
                        <!-- Product price-->
                        Precio: ${productos[i].Precio} €
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center-det"><a class="btn btn-outline-dark mt-auto" id="${productos[i].Id}" onclick="fichaProducto(${productos[i].Id})">Ver detalles</a></div>
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" id="${productos[i].Id}" onclick="anadirProdCesta(${productos[i].Id})">Añadir a la cesta</a></div>
                </div>
            </div>
        </div>`;
        }
    }
    
    if (hayProductos == 0) {
        contenido += `
        <div class="alert alert-dismissible alert-info">
                <strong>Ups!</strong> Parece que aún no hay productos en esta categoría. Explora en otras mientras incluímos aquí tus artículos favoritos.
        </div>`;

    }
    contenido += `</div> </div>`;
    $("main").html(contenido);
}


async function cargarProductosPais(id,nom) {
    cargarProductos();
    let productos = await resolveAfterWaitProd();
    let contenido = "";
    let hayProductos = 0;
    contenido = `
    <div class="container px-4 px-lg-5 mt-5">
    <h2 class="title-form">${nom}:</h2>
    <div class="progress">
        <div class="progress-bar bg-primary" role="progressbar" style="width: 100%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <br>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">`;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].Id_pais == id && productos[i].Stock > 0) {
            hayProductos++;
            contenido += `
        <div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src="${productos[i].Imagen}" alt="Foto del producto:${productos[i].Nombre}" />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${productos[i].Nombre}</h5>
                        <!-- Product price-->
                        Precio: ${productos[i].Precio} €
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center-det"><a class="btn btn-outline-dark mt-auto" id="${productos[i].Id}" onclick="fichaProducto(${productos[i].Id})">Ver detalles</a></div>
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" id="${productos[i].Id}" onclick="anadirProdCesta(${productos[i].Id})">Añadir a la cesta</a></div>
                </div>
            </div>
        </div>`;
        }
    }
    if (hayProductos == 0) {
        contenido += `
        <div class="alert alert-dismissible alert-info">
                <strong>Ups!</strong> Parece que aún no hay productos en este país. Explora en otros mientras incluímos aquí tus artículos favoritos.
        </div>`;

    }
    contenido += `</div> </div>`;
    $("main").html(contenido);
}


async function fichaProducto(id) {
    cargarAlergenosProductos();
    //Generamos la ficha de ese producto concreto
    cargarProductos();
    let productos = await resolveAfterWaitProd();
    let alergenosProductos = await resolveAfterWaitAlleProd();
    let alergenos = await resolveAfterWaitAlle();
    let tieneAlergenos = 0;
    let contenido = "";
    contenido += `
    <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="row gx-4 gx-lg-5 align-items-center">`;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].Id == id) {
            contenido += `                    
                <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="${productos[i].Imagen}" alt="Foto del producto:${productos[i].Nombre}" /></div>
                    <div class="col-md-6">
                        <div class="small mb-1"></div>
                            <h1 class="display-5 fw-bolder">${productos[i].Nombre}:</h1>
                        <div class="fs-5 mb-5">
                        <span>Precio: ${productos[i].Precio} € (IVA incluido)</span>
                    </div>
                    <p class="lead">Ingredientes: ${productos[i].Ingredientes}</p>
                    <hr>
                    <p class="lead">Alérgenos:</p>
                    <dl>`;
            //vamos a buscar sus alérgenos
            for (let j = 0; j < alergenosProductos.length; j++) {
                //console.log('entro en el bucle de alergenosProductos');
                if (alergenosProductos[j].Id_producto == productos[i].Id) { //si coinciden los ids sacamos los alergenos
                    for (let n = 0; n < alergenos.length; n++) {
                        if (alergenos[n].Id == alergenosProductos[j].Id_alergeno) {
                            tieneAlergenos++;
                            contenido += `<dt>${alergenos[n].Nombre}</dt>`;
                        }
                    }
                }
            }
            if (tieneAlergenos == 0) {
                contenido += `<dd>Sin reseña</dd>`;
            }
            contenido += `
                    </dl>
                    <hr>
                    <div class="d-flex">
                        <button class="btn btn-outline-dark flex-shrink-0" type="button" onclick="anadirProdCesta(${productos[i].Id})">
                            <i class="bi-cart-fill me-1"></i>
                            Añadir a la cesta
                        </button>
                    </div>
            </div>`;
        }
    }
    contenido += `
            </div>
        </div>
    </section>`;
    $("main").html(contenido);
}


/*-----FORMULARIOS DE ADMINISTRACIÓN-----*/

/*---Añadir Categoría---*/
function formAddCat() {
    let contenido = `    
    <div class="container">
        <h2 class="title-form">Añadir categoría:</h2>
        <div class="abs-center">
            <form class="row needs-validation" id="formAddCat" method="post" novalidate>
                <br>
                <div>
                    <label for="idCatAdd" class="form-label">ID:</label>
                    <div>
                        <input type="number" class="form-control" id="idCatAdd" name="idCatAdd" onkeyup="idExiste()"required>
                    </div>
                    <div class="invalid-field" id="notvalIdCatAdd">
                    </div>
                </div>
                <div class="invalid-field" id="idExisteCat">
                </div>
                <div>
                    <label for="nomCatAdd" class="form-label">Nombre: (mínimo 3 caracteres)</label>
                    <div>
                        <input type="text" class="form-control" id="nomCatAdd" name="nomCatAdd" minlength="3" required>
                    </div>
                    <div class="invalid-field" id="notvalNomCatAdd">
                    </div>
                </div>
                <br>
                <br>
                <div>
                    <button type="submit" class="btn btn-primary btn-form" id="addCat" name="addCat" value="Añadir" onclick="validarCat()">Añadir</button>
                </div>
            </form>
        </div>   
    </div>`;
    $("main").html(contenido);
    
}

function mandarCat() {
    let peticion = new XMLHttpRequest();
    let data = document.getElementById('formAddCat');
    //console.log(data);
    let form = new FormData(data);
    peticion.open('POST', 'controller/crud.php');
    peticion.onload = () => {
        if (peticion.status == 200) {
            //console.log('conexion establecida');
            if(peticion.responseText){
                swal({
                    title: "Carga Correcta!",
                    text: "Has añadido una categoría a la base de datos",
                    icon: "success",
                    button: "Aceptar"
                }).then(function() {
                    //location.reload();
                    document.getElementById('formAddCat').reset();
                    loadNav();
                })
            }
        } else {
            console.log("error en la peticion" + peticion.status);
        }
    }
    peticion.send(form);
    
}

/*---Añadir país---*/
function formAddPais() {
    let contenido = `
    <div class="container">
        <h2 class="title-form">Añadir país:</h2>
        <div class="abs-center">
            <form id="formAddPais" class="row g-3 needs-validation" method="post" novalidate>
                <br>
                <div>
                    <label for="idPaisAdd" class="form-label">ID:</label>
                    <div>
                        <input type="number" class="form-control" id="idPaisAdd" name="idPaisAdd" onkeyup="idPaisExiste()" required>
                    </div>
                    <div class="invalid-field" id="notvalIdPaisAdd"> 
                    </div>
                </div>
                <div class="invalid-field" id="idExistePais">
                </div>
                <div>
                    <label for="nomPaisAdd" class="form-label">Nombre: (mínimo 3 caracteres)</label>
                    <div>
                        <input type="text" class="form-control" id="nomPaisAdd" name="nomPaisAdd" required>
                    </div>
                    <div class="invalid-field" id="notvalNomPaisAdd">
                    </div>
                </div>
                <br>
                <div>
                    <button type="submit" class="btn btn-primary" id="addPais" name="addPais" onclick="validarPais()">Añadir</button>
                </div>
            </form>
        </div>
    </div>`;
    $("main").html(contenido);
}

function mandarPais() {
    let peticion = new XMLHttpRequest();
    let data = document.getElementById('formAddPais');
    //console.log(data);
    let form = new FormData(data);
    peticion.open('POST', 'controller/crud.php');
    peticion.onload = () => {
        if (peticion.status == 200) {
            //console.log('conexion establecida');
            if(peticion.responseText){
                swal({
                    title: "Carga Correcta!",
                    text: "Has añadido un país a la base de datos",
                    icon: "success",
                    button: "Aceptar"
                }).then(function() {
                    //location.reload();
                    document.getElementById('formAddPais').reset();
                    loadNav();
                })
            }
        } else {
            console.log("error en la peticion" + peticion.status);
        }
    }
    peticion.send(form);
}

/*---Añadir Producto---*/
async function formAddProduct() {
    let contenido = `
    <div class="container">
        <h2 class="title-form">Añadir producto:</h2>
        <div class="abs-center">
            <form class="row g-3 needs-validation col-md-6" name="formAddProduct" id="formAddProduct" novalidate>
                <br>
                <div>
                    <label for="validationCustom01" class="form-label">ID:</label>
                    <input type="number" class="form-control" id="idProdAdd" name="idProdAdd" onkeyup="idProductoExiste()" required>
                    <div class="invalid-field" id="nolvalIdProd"></div>
                </div>
                <div class="invalid-field" id="idExisteProd"></div>
                <div>
                    <label for="validationCustom02" class="form-label">Nombre:</label>
                    <input type="text" class="form-control" id="nomProdAdd" name="nomProdAdd" required>
                    <div class="invalid-field" id="nolvalNomProd"></div>
                </div>
                <div>
                    <label for="validationCustom02" class="form-label">Descripción:</label>
                    <input type="text" class="form-control" id="desProdAdd" name="desProdAdd" required>
                    <div class="invalid-field" id="nolvalDesProd"></div>
                </div>
                <div>
                    <label for="validationCustom02" class="form-label">Ingredientes:</label>
                    <input type="text" class="form-control" id="ingrProdAdd" name="ingrProdAdd" required>
                    <div class="invalid-field" id="nolvalIngrProd"></div>
                </div>
                <div>
                    <label for="validationCustom02" class="form-label">Precio:</label>
                    <input type="number" step="any"  class="form-control" id="preProdAdd" name="preProdAdd" required>
                    <div class="invalid-field" id="nolvalPreProd"></div>
                </div>
                <div>
                    <label for="validationCustom02" class="form-label">Peso:</label>
                    <input type="text" class="form-control" id="pesProdAdd" name="pesProdAdd" required>
                    <div class="invalid-field" id="nolvalPesProd"></div>
                </div>
                <div>
                    <label for="validationCustom02" class="form-label">Stock:</label>
                    <input type="number" class="form-control" id="stoProdAdd" name="stoProdAdd" required>
                    <div class="invalid-field" id="nolvalStoProd"></div>
                </div>
                <div>
                    <label for="validationCustom02" class="form-label">Imagen:</label>
                    <input type="file" class="form-control" id="imgProdAdd" name="imgProdAdd" required>
                    <div class="invalid-field" id="nolvalImgProd"></div>
                </div>
                <div>
                    <label for="validationCustom02" class="form-label">Categoria:</label>
                    <select class="form-select"  name="catProdAdd" id="catProdAdd" aria-label="Default select example">
                        <option value="no">Elige una categoria...</option>`;
    //cargarCategorias();
    let cat = await resolveAfterWaitCat();

    //comenzamos el bucle en 1 para evitar que aparezca la categoría Default
    for (let i = 0; i < cat.length; i++) {
        contenido += `<option value="${cat[i].Id}">${cat[i].Nombre}</option>`;
    }
    contenido += `</select>
                    <div class="invalid-field" id="nolvalCatProd"></div>
                </div>
                <div>
                    <label for="validationCustom02" class="form-label">Paises:</label>
                    <select class="form-select" name="paisProdAdd" id="paisProdAdd" aria-label="Default select example">
                        <option value="no">Elige un país..</option>`;

    //cargarPaises();
    let pais = await resolveAfterWaitPais();

    //comenzamos el bucle en 1 para evitar que aparezca el país Default
    for (let i = 0; i < pais.length; i++) {
        contenido += `<option value="${pais[i].Id}">${pais[i].Nombre}</option>`;
    }
    contenido += `</select>
                    <div class="invalid-field" id="nolvalPaisProd"></div>
                </div>
                <div>
                    <label for="validationCustom02" class="form-label">Proveedores:</label>
                    <select class="form-select" name="provProdAdd" id="provProdAdd" aria-label="Default select example">
                        <option value="no">Elige un proveedor..</option>`;

   // cargarProveedores();
    let prov = await resolveAfterWaitProv();

    for (let i = 0; i < prov.length; i++) {
        contenido += `<option value="${prov[i].Id}">${prov[i].CIF} - ${prov[i].Nombre}</option>`;
    }
    contenido += `</select>
                    <div class="invalid-field" id="nolvalProvProd"></div>
                </div>
                <br>
                <label for="validationCustom02" class="form-label">Elija los alérgenos que incluye:</label><br>
                <table>`;

    let alerg = await resolveAfterWaitAlle();

    for (let i = 0; i < alerg.length; i++) {
        contenido += `<tr>
                        <td class="allerg-check-izq"><input type="checkbox" name="${alerg[i].Nombre}" id="${alerg[i].Nombre}" value="${alerg[i].Nombre}"></td>
                        <td class="allerg-check-der">${alerg[i].Nombre}</td>
                    </tr>`;
    }
    contenido += `</table>
                    <br>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary" name="addProduct" id="addProduct" onclick="validarProducto()">Añadir</button>
                    </div>
                </form>
            </div>
        </div>`;
    $("main").html(contenido);
}

//FUNCIÓN PARA MANDAR Y GUARDAR LA IMAGEN 
async function mandarProducto() {

    let peticion = new XMLHttpRequest();
    let data = document.getElementById('formAddProduct');
    //console.log(data);
    let form = new FormData(data);
    peticion.open('POST', 'controller/crud.php');
    peticion.onload = () => {
        if (peticion.status == 200) {
            //console.log('conexion establecida');

            if(peticion.responseText){
                swal({
                    title: "Carga Correcta!",
                    text: "Has añadido un producto a la base de datos.",
                    icon: "success",
                    button: "Aceptar"
                }).then(function() {
                    //location.reload();
                    document.getElementById('formAddProduct').reset();
                    //cargarAlergenosProductos();
                    loadNav();
                })
            }
            
        } else {
            console.log("error en la peticion" + peticion.status);
        }
    }
    peticion.send(form);
}

//FUNCIÓN PARA SUBIR LA IMAGEN AL SERVIDOR
async function subirImgProducto() {
    //event.preventDefault();
    let formData = new FormData();
    formData.append("file", imgProdAdd.files[0]);
    await fetch('controller/crud.php', {
        method: "POST",
        body: formData
    });
    //alert('The file has been uploaded successfully.');
}

/*---Añadir Proveedor---*/
function formAddSupp() {
    let contenido = `
    <div class="container">
        <h2 class="title-form">Añadir proveedor:</h2>
        <div class="abs-center">
            <form class="row g-3 needs-validation col-md-6" method="post" id="formAddProveedor" novalidate>
                <br>
                <div>
                    <label for="idSuppAdd" class="form-label">ID:</label>
                    <div>
                        <input type="number" class="form-control" id="idSuppAdd" name="idSuppAdd" onkeyup="idProvExiste()" required>
                    </div>
                    <div class="invalid-field" id="notvalIdSuppAdd">
                    </div>
                </div>
                <div class="invalid-field" id="idExisteProv"> </div>
                <div>
                    <label for="CIFSuppAdd" class="form-label">CIF: (mínimo 9 caracteres)</label>
                    <input type="text" class="form-control" id="CIFSuppAdd" name="CIFSuppAdd" minlength="9" required>
                    <div class="invalid-field" id="notvalCIFSuppAdd">
                    </div>
                </div>
                <div>
                    <label for="nomSuppAdd" class="form-label">Nombre:</label>
                    <input type="text" class="form-control" id="nomSuppAdd" name="nomSuppAdd" required>
                    <div class="invalid-field" id="notvalNomSuppAdd">
                    </div>
                </div>
                <div>
                    <label for="dirSuppAdd" class="form-label">Dirección:</label>
                    <input type="text" class="form-control" id="dirSuppAdd" name="dirSuppAdd" required>
                    <div class="invalid-field" id="notvalDirSuppAdd">
                    </div>
                </div>
                <div>
                    <label for="telSuppAdd" class="form-label">Teléfono:</label>
                    <input type="text" class="form-control" id="telSuppAdd" name="telSuppAdd" required placeholder="+123456789">
                    <div class="invalid-field" id="notvalTelSuppAdd">
                    </div>
                </div>
                <div>
                    <label for="emailSuppAdd" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="emailSuppAdd" name="emailSuppAdd" placeholder="ejemplo@email.com" required>
                    <div class="invalid-field" id="notvalEmailSuppAdd">
                    </div>
                </div>
                <br>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary" id="addProv" name="addProv" onclick="validarProveedor()">Añadir</button>
                </div>
            </form>
        </div>
    </div>`;
    $("main").html(contenido);
}

function mandarProveedor() {
    let peticion = new XMLHttpRequest();
    let data = document.getElementById('formAddProveedor');
    //console.log(data);
    let form = new FormData(data);
    peticion.open('POST', 'controller/crud.php');
    peticion.onload = () => {
        if (peticion.status == 200) {
            //console.log('conexion establecida');
            if(peticion.responseText){
                swal({
                    title: "Carga Correcta!",
                    text: "Has añadido un proveedor a la base de datos",
                    icon: "success",
                    button: "Aceptar"
                }).then(function() {
                    let id=document.getElementById('idSuppAdd').value;
                    let cif=document.getElementById('CIFSuppAdd').value;
                    let nom=document.getElementById('nomSuppAdd').value;
                    let dir=document.getElementById('dirSuppAdd').value;
                    let tel=document.getElementById('telSuppAdd').value;
                    let email=document.getElementById('emailSuppAdd').value;
                    let prov = new Supplier(id,cif,nom,dir,tel,email,'0');
                    tienda.addSupplier(prov);
                    document.getElementById('formAddProveedor').reset();
                })
            }
        } else {
            console.log("error en la peticion" + peticion.status);
        }
    }
    peticion.send(form);
}

/*---Borrar Categoría---*/
async function formDeleteCat() {
    cargarCategorias();
    let cat = await resolveAfterWaitCat();
    contenido = `
    <div class="container">
        <h2 class="title-form">Eliminar Categoría:</h2>
        <br>
        <div class="abs-center">
            <form method="post" name="formDeleteCat" id="formDeleteCat">
                <table class="table-responsive table-form">
                    <thead>
                        <tr>
                        <th scope="col" class="id"></th>
                        <th scope="col">ID</th>
                        <th scope="col">NOMBRE</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">`;
    for (let i = 1; i < cat.length; i++) {
        contenido += `
                        <tr>
                            <th scope="row" class="id"><input type="checkbox" name="checkCat-${cat[i].Id}" id="checkCat-${cat[i].Id}" value="${cat[i].Id}"></th>
                            <td>${cat[i].Id}</td>
                            <td><input name="nomCatDelete" value="${cat[i].Nombre}" hidden>${cat[i].Nombre}</td>
                        </tr>`;
    }
    contenido += `
                    </tbody>
                </table>
                <br>
            <button type="submit" class="btn btn-primary" id="deleteCat" onclick="eliminarCat()">Eliminar</button>
            </form>
        </div>
    </div>`;
    $("main").html(contenido);
}

function eliminarCat() {
    event.preventDefault();
    let peticion = new XMLHttpRequest();
    let data = document.getElementById('formDeleteCat');
    //console.log(data);
    let form = new FormData(data);
    peticion.open('POST', 'controller/crud.php');
    peticion.onload = () => {
        if (peticion.status == 200) {
            //console.log('conexion establecida');

            if(peticion.responseText=="1"){
                swal({
                    title: "Borrado Correcto!",
                    text: "Has borrado una categoría de la base de datos",
                    icon: "success",
                    button: "Aceptar"
                }).then(function() {
                    location.reload();
                })
            }else{
                swal({
                    title: "Borrado Correcto!",
                    text: "Has borrado varias categorías de la base de datos",
                    icon: "success",
                    button: "Aceptar"
                }).then(function() {
                    location.reload();
                })
            }
        } else {
            console.log("error en la peticion" + peticion.status);
        }
    }
    peticion.send(form);
}

/*---Borrar País---*/
async function formDeletePais() {
    cargarPaises();
    let pais = await resolveAfterWaitPais();
    contenido = `
    <div class="container">
        <h2 class="title-form">Eliminar País:</h2>
        <br>
        <div class="abs-center">
            <form method="post" name="formDeletePais" id="formDeletePais">
                <table class="table-responsive fable-form">
                    <thead>
                        <tr>
                        <th scope="col" class="id"></th>
                        <th scope="col">ID</th>
                        <th scope="col">NOMBRE</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">`;
    for (let i = 1; i < pais.length; i++) {
        contenido += `
                        <tr>
                            <th scope="row" class="id"><input type="checkbox" name="checkPais-${pais[i].Id}" id="checkPais-${pais[i].Id}" value="${pais[i].Id}"></th>
                            <td>${pais[i].Id}</td>
                            <td>${pais[i].Nombre}</td>
                        </tr>`;
    }
    contenido += `
                    </tbody>
                </table>
                <br>
            <button class="btn btn-primary" id="deletePais" onclick="eliminarPais()">Eliminar</button>
            </form>
        </div>
    </div>`;
    $("main").html(contenido);
}

function eliminarPais() {
    event.preventDefault();
    let peticion = new XMLHttpRequest();
    let data = document.getElementById('formDeletePais');
    let form = new FormData(data);
    peticion.open('POST', 'controller/crud.php');
    peticion.onload = () => {
        if (peticion.status == 200) {
            //console.log('conexion establecida');
            if(peticion.responseText=="1"){
                swal({
                    title: "Borrado Correcto!",
                    text: "Has borrado un país de la base de datos",
                    icon: "success",
                    button: "Aceptar"
                }).then(function() {
                    location.reload();
                })
            }else{
                swal({
                    title: "Borrado Correcto!",
                    text: "Has borrado varios paises de la base de datos",
                    icon: "success",
                    button: "Aceptar"
                }).then(function() {
                    location.reload();
                })
            }
        } else {
            console.log("error en la peticion" + peticion.status);
        }
    }
    peticion.send(form);
}

/*---Borrar Proveedor---*/
async function formDeleteProv() {
    cargarProveedores();
    let prov = await resolveAfterWaitProv();
    contenido = `
    <div class="container">
        <h2 class="title-form">Eliminar Proveedor:</h2>
        <br>
        <div class="abs-center">
            <form method="post" name="formDeleteProv" id="formDeleteProv">
                <table class="table-responsive table-form">
                    <thead>
                        <tr>
                        <th scope="col" class="celda id"></th>
                        <th scope="col" class="celda">ID</th>
                        <th scope="col" class="celda">CIF</th>
                        <th scope="col" class="celda">NOMBRE</th>
                        <th scope="col" class="celda">DIRECCION</th>
                        <th scope="col" class="celda">TELEFONO</th>
                        <th scope="col" class="celda">EMAIL</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">`;
    for (let i = 0; i < prov.length; i++) {
        contenido += `
                        <tr>
                            <th scope="row" class="id"><input type="checkbox" name="checkProv-${prov[i].Id}" id="checkProv-${prov[i].Id}" value="${prov[i].Id}" name="idProvDelete"></th>
                            <td>${prov[i].Id}</td>
                            <td>${prov[i].CIF}</td>
                            <td>${prov[i].Nombre}</td>
                            <td>${prov[i].Direccion}</td>
                            <td>${prov[i].Telefono}</td>
                            <td>${prov[i].Email}</td>
                        </tr>`;
    }
    contenido += `
                    </tbody>
                </table>
                <br>
            <button type="submit" class="btn btn-primary" id="deleteProv" onclick="eliminarProv()">Eliminar</button>
            </form>
        </div>
    </div>`;
    $("main").html(contenido);
}


function eliminarProv() {
    event.preventDefault();
    let peticion = new XMLHttpRequest();
    let data = document.getElementById('formDeleteProv');
    //console.log(data);
    let form = new FormData(data);
    peticion.open('POST', 'controller/crud.php');
    peticion.onload = () => {
        if (peticion.status == 200) {
            //console.log('conexion establecida');
            //console.log(peticion.responseText);
            if(peticion.responseText=="1"){
                swal({
                    title: "Borrado Correcto!",
                    text: "Has borrado un proveedor de la base de datos",
                    icon: "success",
                    button: "Aceptar"
                }).then(function() {
                    location.reload();
                })
            }else{
                swal({
                    title: "Borrado Correcto!",
                    text: "Has borrado varios proveedores de la base de datos",
                    icon: "success",
                    button: "Aceptar"
                }).then(function() {
                    location.reload();
                })
            }
        } else {
            console.log("error en la peticion" + peticion.status);
        }
    }
    peticion.send(form);

}

/*---Borrar Producto---*/
async function formDeleteProduct() {
    cargarProductos();
    let productos = await resolveAfterWaitProd();

    contenido = `
    <div class="container">
        <h2 class="title-form">Eliminar Productos:</h2>
        <br>
        <div class="abs-center">
            <form method="post" name="formDeleteProd" id="formDeleteProd">
                <table class="table-responsive table-form">
                    <thead>
                        <tr>
                        <th scope="col" class="celda id"></th>
                        <th scope="col" class="celda">ID</th>
                        <th scope="col" class="celda">NOMBRE</th>
                        <th scope="col" class="celda">DESCRIPCION</th>
                        <th scope="col" class="celda">PRECIO</th>
                        <th scope="col" class="celda">PESO</th>
                        <th scope="col" class="celda">STOCK</th></th>
                        <th scope="col" class="celda">IMAGEN</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">`;
    for (let i = 0; i < productos.length; i++) {
        contenido += `
                        <tr>
                            <th scope="row" class="id"><input type="checkbox" name="checkProd-${productos[i].Id}" id="checkProd-${productos[i].Id}" value="${productos[i].Id}"></th>
                            <td>${productos[i].Id}</td>
                            <td>${productos[i].Nombre}</td>
                            <td>${productos[i].Descripcion}</td>
                            <td>${productos[i].Precio}</td>
                            <td>${productos[i].Peso}</td>
                            <td>${productos[i].Stock}</td>
                            <td><img class="img-form" src="${productos[i].Imagen}" alt="Foto del producto:${productos[i].Nombre}"></td>
                        </tr>`;
    }
    contenido += `
                    </tbody>
                </table>
                <br>
            <button class="btn btn-primary" id="deleteProd" onclick="eliminarProd()">Eliminar</button>
            </form>
        </div>
    </div>`;
    $("main").html(contenido);
}

function eliminarProd() {
    event.preventDefault();
    let peticion = new XMLHttpRequest();
    let data = document.getElementById('formDeleteProd');
    //console.log(data);
    let form = new FormData(data);
    peticion.open('POST', 'controller/crud.php');
    peticion.onload = () => {
        if (peticion.status == 200) {
            //console.log('conexion establecida');
            //console.log(peticion.responseText);
            if(peticion.responseText=="1"){
                swal({
                    title: "Borrado Correcto!",
                    text: "Has borrado un producto de la base de datos",
                    icon: "success",
                    button: "Aceptar"
                }).then(function() {
                    location.reload();
                })
            }else{
                swal({
                    title: "Borrado Correcto!",
                    text: "Has borrado varios productos de la base de datos",
                    icon: "success",
                    button: "Aceptar"
                }).then(function() {
                    location.reload();
                })
            }
        } else {
            console.log("error en la peticion" + peticion.status);
        }
    }
    peticion.send(form);
}


/*---Actualizar Producto---*/
async function formUpdateProduct() {
    cargarProductos();
    let productos = await resolveAfterWaitProd();

    cargarCategorias();
    let categorias = await resolveAfterWaitCat();

    cargarPaises();
    let paises = await resolveAfterWaitPais();

    cargarProveedores();
    let proveedor = await resolveAfterWaitProv();

    contenido = `
    <div class="container">
        <h2 class="title-form">Actualizar Productos:</h2>
        <br>
        <div class="abs-center">
            <form method="post" name="formUpdateProd" id="formUpdateProd">
                <table class="table-responsive table-form">
                    <thead>
                        <tr>
                            <th scope="col" class="celda id"></th>
                            <th scope="col" class="celda">ID</th>
                            <th scope="col" class="celda"></th>
                            <th scope="col" class="celda">NOMBRE</th>
                            <th scope="col" class="celda">CATEGORIA</th>
                            <th scope="col" class="celda">PAIS</th>
                            <th scope="col" class="celda">PROVEEDOR</th>
                            <th scope="col" class="celda">STOCK</th>
                            <th scope="col" class="celda">IMAGEN</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">`;
    for (let i = 0; i < productos.length; i++) {
        contenido += `
                        <tr>
                            <th scope="row" class="id"><input type="checkbox" name="id-${productos[i].Id}" id="id-${productos[i].Id}" value="${productos[i].Id}"></th>
                            <td>${productos[i].Id}</td>
                            <td></td>
                            <td>${productos[i].Nombre}</td>
                            <td> <select class="form-select" name="catUpdate-${productos[i].Id}" id="catUpdate-${productos[i].Id}" aria-label="Default select example">`;

        for (let cat = 0; cat < categorias.length; cat++) {
            if (productos[i].Id_categoria == categorias[cat].Id) {
                contenido += `<option value="${categorias[cat].Id}" selected> ${categorias[cat].Nombre} </option>`;
            } else {
                contenido += `<option value="${categorias[cat].Id}"> ${categorias[cat].Nombre} </option>`;
            }
        }
        contenido += `</select></td>
                            <td> <select class="form-select" name="paisUpdate-${productos[i].Id}" id="paisUpdate-${productos[i].Id}" aria-label="Default select example">`;
        for (let pais = 0; pais < paises.length; pais++) {
            if (productos[i].Id_pais == paises[pais].Id) {
                contenido += `<option value="${paises[pais].Id}" selected> ${paises[pais].Nombre} </option>`;
            } else {
                contenido += `<option value="${paises[pais].Id}" > ${paises[pais].Nombre} </option>`;
            }
        }
        contenido += `</select></td>
                            <td> <select class="form-select" name="provUpdate-${productos[i].Id}" id="provUpdate-${productos[i].Id}" aria-label="Default select example">`;
        for (let prov = 0; prov < proveedor.length; prov++) {
            if (productos[i].Id_proveedor == proveedor[prov].Id) {
                contenido += `<option value="${proveedor[prov].Id}" selected> ${proveedor[prov].Nombre} </option>`;
            } else {
                contenido += `<option value="${proveedor[prov].Id}"> ${proveedor[prov].Nombre} </option>`;
            }
        }
        contenido += `</select></td>
                                <td><input type="number" id="stockUpdate-${productos[i].Id}" name="stockUpdate-${productos[i].Id}" value="${productos[i].Stock}" min="0" pattern="^[1-9]\d*$"></td>
                                <td><img class="img-form" src="${productos[i].Imagen}" alt="Foto del producto:${productos[i].Nombre}"></td>
                            </tr>`;
    }
    contenido += `
                    </tbody>
                </table>
                <br>
                <button class="btn btn-primary" id="updateProd" onclick="actualizarProd()">Actualizar</button>
            </form>
        </div>
    </div>`;
    $("main").html(contenido);
}


async function actualizarProd() {
    event.preventDefault();
    cargarProductos();
    let productos = await resolveAfterWaitProd();
    let peticion = new XMLHttpRequest();
    let data = document.getElementById('formUpdateProd');

    let form = new FormData(data);
    peticion.open('POST', 'controller/crud.php');
    peticion.onload = () => {
        if (peticion.status == 200) {
            swal({
                title: "Producto actualizado!",
                text: "Has actualizado los datos del producto seleccionado",
                icon: "success",
                button: "Aceptar"
            }).then(function() {
                for(let i=0; i<productos.length; i++){
                    if (document.getElementById('id-'+productos[i].Id).checked){
                        productos[i].Stock=document.getElementById('stockUpdate-'+productos[i].Id).value;
                        productos[i].Id_categoria=document.getElementById('catUpdate-'+productos[i].Id).value;
                        productos[i].Id_pais=document.getElementById('paisUpdate-'+productos[i].Id).value;
                        productos[i].Id_proveedor=document.getElementById('provUpdate-'+productos[i].Id).value;
                    }
                }
                cargarProductos();

            });
        } else {
            console.log("error en la peticion" + peticion.status);
        }
    }
    peticion.send(form);

}

/*---Crear usuario---*/
function formNewUser() {
    let contenido = `
    <div class="container">
        <h2 class="title-form">Registro de nuevo usuario:</h2>
        <div class="abs-center">    
        <br>`;
        
    contenido += `
            <form method="post" id="formAddUser" name="formAddUser">
                <div class="form-group">
                    <label for="newDni">DNI: (8 dígitos más una letra)</label>
                    <input type="text" class="form-control" id="newDni" name="newDni" placeholder="DNI" placeholder="DNI" required>
                    <div class="invalid-field" id="notvalDniUserAdd">
                    </div>
                    <div class="invalid-field" id="dniExiste"> </div>
                </div>
                <br>
                <div class="form-group">
                    <label for="newNombre">Nombre:</label>
                    <input type="text" class="form-control" id="newNombre" name="newNombre" placeholder="..." required>
                    <div class="invalid-field" id="notvalNomUserAdd">
                    </div>
                </div>
                <br>
                <div class="form-group">
                    <label for="newApellidos">Apellidos:</label>
                    <input type="text" class="form-control" id="newApellidos" name="newApellidos" placeholder="..." required>
                    <div class="invalid-field" id="notvalApeUserAdd">
                    </div>
                </div>
                <br>
                <div class="form-group">
                    <label for="newEmail">Email:</label>
                    <input type="email" class="form-control" id="newEmail" name="newEmail" placeholder="ejemplo@email.com" onblur="emailUserExiste()"  required>
                    <div class="invalid-field" id="notvalEmailUserAdd">
                    </div>
                    <div class="invalid-field" id="emailExiste">
                    </div>
                </div>
                <br>
                <div class="form-group">
                    <label for="newTelefono">Teléfono: (9 dígitos)</label>
                    <input type="email" class="form-control" id="newTelefono" name="newTelefono" placeholder="123456789" required>
                    <div class="invalid-field" id="notvalTelUserAdd">
                    </div>
                </div>
                <br>
                <div class="form-group">
                    <label for="newPass">Contraseña:</label>
                    <p class="req"> (Requisitos mínimos:longitud entre 8-24 caracteres que contenga al menos una mayúscula, minúscula, dígito y signo)</p>
                    <input type="password" class="form-control" id="newPass" name="newPass" placeholer="Introduce una contraseña de usuario..." placeholder="*****" required>
                    <div class="invalid-field" id="notvalPass1UserAdd">
                    </div>
                </div>
                <br>
                <div class="form-group">
                    <label for="newPassVal">Verifica la contraseña:</label>
                    <input type="password" class="form-control" id="newPassVal" name="newPassVal" onblur="passwordIguales()" placeholer="Vuelve a introducir la misma contraseña...." placeholder="*****" required>
                    <div class="invalid-field" id="notvalPass2UserAdd">
                    </div>
                </div>
                <br>
                <div class="form-row">
                    <div class="form-group">
                        <label for="newDireccion">Dirección:</label>
                        <input type="text" class="form-control" id="newDireccion" name="newDireccion" placeholder="..." required>
                        <div class="invalid-field" id="notvalDirUserAdd">
                        </div>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="newProvincia">Provincia:</label>
                        <input type="text" class="form-control" id="newProvincia" name="newProvincia" placeholder="..." required>
                        <div class="invalid-field" id="notvalProviUserAdd">
                        </div>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="newLocalidad">Localidad:</label>
                        <input type="text" class="form-control" id="newLocalidad" name="newLocalidad" placeholder="..." required>
                        <div class="invalid-field" id="notvalLocUserAdd">
                        </div>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="newCP">Código Postal:</label>
                        <input type="text" class="form-control" id="newCP" name="newCP" placeholder="12345" required>
                        <div class="invalid-field" id="notvalCPUserAdd">
                        </div>
                    </div>
                </div>
                <br>
                <button type="submit" id="addUser" name="addUser" class="btn btn-primary" onclick="validarUser()">Registrar</button>
            </form>
        </div>
    </div>`;
    $("main").html(contenido);
}


function addUser() {
    let peticion = new XMLHttpRequest();
    let data = document.getElementById('formAddUser');

    let form = new FormData(data);
    peticion.open('POST', 'controller/crud.php');
    peticion.onload = () => {
        if (peticion.status == 200) {
            //console.log('conexion establecida');
            if(peticion.responseText!='Existe'){
                swal({
                    title: "Carga Correcta!",
                    text: "Gracias por darte de alta en Super Asian Market.",
                    icon: "success",
                    button: "Aceptar"
                }).then(function() {
                    location.reload();
                })
            }else{
                swal({
                    title: "Ups",
                    text: 'Ya existe un usuario registrado con dicho email',
                    icon: "warning",
                    button: "Aceptar"
                })
            }
        } else {
            console.log("error en la peticion" + peticion.status);
        }
    }
    peticion.send(form);
}



async function pagCesta(){
    cargarProductos();
    let productos = await resolveAfterWaitProd();
    let count=getCookie("cesta");
    let lista=getCookie("listaCompra");
    let total=0;
    let contenido=`
    <div class="container">
    <h1>Cesta de la compra.</h1>
    <br>`;
    if(count==0){

        contenido=`
        <div class="card border-dark mb-3 cesta-vacia" style="max-width: 30rem;">
            <div class="card-header"><h4 class="card-title">Cesta vacía</h4></div>
            <div class="card-body">
                <p class="card-text">Vaya, parece que aún no has agregado ningún producto a la cesta. 
                ¿Por qué no sigues navegando? Seguro que encuentras algo de interés.</p>
            </div>
        </div>`;
    }else{
        if(lista=="0" || lista==''){
            console.log('entro');
        } else{
            lista=JSON.parse(lista);
        }
        contenido+=`
        <div class="abs-center">
        <table class="table-responsive table-form">
            <tr>
                <th scope="col" class="celda id cesta-td">Producto</th>
                <th scope="col" class="celda cesta-td">Cantidad</th>
                <th scope="col" class="celda cesta-td">Precio</th>
                <th scope="col" class="celda cesta-td">Foto</th>
            </tr>`;
        for(let i=0; i<lista.length; i++){
            for(let j=0; j<productos.length; j++){
                if(productos[j].Id==lista[i].producto && parseInt(lista[i].cantidad)>0){
                    contenido+=`
                    <tr>
                        <td scope="col" class="celda id">${productos[j].Nombre}</td>
                        <td scope="col" class="celda">  <i class="fa-solid fa-minus" role="button" onclick="restar(${productos[j].Id}, ${productos[j].Precio})"></i>
                                                        <input type="number" id="cantidad-${productos[j].Id}" class="cant" disabled value="${parseInt(lista[i].cantidad)}">
                                                        <i class="fa-solid fa-plus" role="button" onclick="sumar(${productos[j].Id}, ${productos[j].Precio})"></i></td>
                        <td scope="col" class="celda">${productos[j].Precio}</td>
                        <td scope="col" class="celda"><img class="img-form" src="${productos[j].Imagen}" alt="Foto del producto:${productos[j].Imagen}"></td>
                    </tr>`;
                    let prod= parseFloat(productos[j].Precio)*parseFloat(lista[i].cantidad);
                    total=total+prod;
                }
            }
        }
        contenido+=`
        <tr>
            <td scope="col" class="celda id"></td>
            <td scope="col" class="celda"></td>
            <td scope="col" class="celda"></td>
            <td scope="col" class="celda"><strong>TOTAL:<input class="total" id="totalPedido" value="${total}" disabled>€</strong></td>
        </tr>
        </table>
        <br>
        </div> 
        <br>
        <br>
        <button type="submit" id="borrarCesta" name="borrarCesta" class="btn btn-primary" onclick="borrarCesta()">Borrar Cesta</button>
        <button type="submit" id="hacerPedido" name="hacerPedido" class="btn btn-primary" onclick="hacerPedido()">Hacer Pedido</button>
        </div>`;
    }
    $("main").html(contenido);

}

function sumar(id,precio){

    //añadimos el producto;
    let cantidad=document.getElementById('cantidad-'+id).value;
    document.getElementById('cantidad-'+id).value=parseInt(cantidad)+1;

    //recalculamos el total
    let total=document.getElementById('totalPedido').value;

    document.getElementById('totalPedido').value=parseFloat(total)+parseFloat(precio);

    let cesta=getCookie('listaCompra');
    cesta=JSON.parse(cesta);

    for(let i=0; i<cesta.length; i++){
        if(cesta[i].producto==id){
            let producto={
                producto:id,
                cantidad:parseInt(document.getElementById('cantidad-'+id).value)
            }
            cesta.splice(i, 1, producto);
        }
    }
    
    setCookie('listaCompra', JSON.stringify(cesta), 2);
    document.getElementById('compra').value=parseInt(document.getElementById('compra').value)+1;
    setCookie('cesta', parseInt(document.getElementById('compra').value), 2);
}

function restar(id,precio){
    console.log('entra');
    console.log(id+'-'+precio);
    //restamos el producto
    let cantidad=document.getElementById('cantidad-'+id).value;
    if(parseInt(cantidad)==0){
        document.getElementById('cantidad-'+id).value=0;
    }else{
        document.getElementById('cantidad-'+id).value=parseInt(cantidad)-1;
    }
    
    //recalculamos el total
    let total=document.getElementById('totalPedido').value;
    if(parseInt(total)<=0){
        document.getElementById('totalPedido').value=0;
    }else{
        document.getElementById('totalPedido').value=parseFloat(total)-parseFloat(precio);
    }

    let cesta=getCookie('listaCompra');
    cesta=JSON.parse(cesta);

    for(let i=0; i<cesta.length; i++){
        if(cesta[i].producto==id){
            let producto={
                producto:id,
                cantidad:parseInt(document.getElementById('cantidad-'+id).value)
            }
            cesta.splice(i, 1, producto);
        }
    }

    setCookie('listaCompra', JSON.stringify(cesta), 2);
    if(document.getElementById('compra').value<=0){
        document.getElementById('compra').value=0;
    }else{
        document.getElementById('compra').value=parseInt(document.getElementById('compra').value)-1
    }

    setCookie('cesta', parseInt(document.getElementById('compra').value), 2);
}

function calcularPod(){
    let cesta=tienda.getCesta();
    let cantidad=0;
    for(let i=0; i<cesta.length; i++){
        cantidad+=cesta.cantidad;
    }
    setCookie("cesta", cantidad, 2);
    return cantidad;
}

function borrarCesta(){
    document.getElementById('compra').value=0;
    swal({
        title: "Cesta Eliminada",
        icon: "info",
        button: "Aceptar"
    }).then(function() {
        setCookie("cesta", 0, 1);
        setCookie("listaCompra", [], 1);
        location.reload();
    })
}


function anadirProdCesta(id){

    let compra=document.getElementById('compra').value;
    document.getElementById('compra').value=parseInt(compra)+1;
    setCookie("cesta", parseInt(document.getElementById('compra').value), 2);

    let cesta=getCookie('listaCompra');

    let repetido=false;
    if(cesta=="0" || cesta==''){

        let producto={
            producto:id,
            cantidad:1
        } 
        cesta=[];
        cesta.push(producto);
        //setCookie('listaCompra', cesta);
    }else{

        cesta=JSON.parse(cesta);

        for(let i=0; i<cesta.length; i++){
            if(cesta[i].producto==id){
                let producto={
                    producto:id,
                    cantidad:cesta[i].cantidad+1
                }
                cesta.splice(i, 1, producto);
                repetido=true;
            }
        }
        if(!repetido){
            let producto={
                producto:id,
                cantidad:1
            }
            cesta.push(producto);        
        }
    }
    setCookie('listaCompra', JSON.stringify(cesta), 2);
}



//Funcionalidad pendiente de implementar
//Se aplaza al segundo sprint de la aplicación
function hacerPedido(){
    //hasta que se desarrolle se mostrará esta alerta por pantalla
    swal({
        title: "Funcionalidad en mantenimiento",
        icon:"info",
        text:"Está funcionalidad se encuentra en estado de desarrollo.",
        button: "Aceptar"
    });
}