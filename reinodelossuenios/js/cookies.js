//function para establecer la cookie del usuario
function setCookie(cname, cvalue, expdays){
    const d = new Date();
    d.setTime(d.getTime() + (expdays*2*60*60*1000));  //un par de horas de expiración
    let expires= "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    //console.log(document.cookie);
}

//función que nos devuelve el valor de una cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';'); //cortamos el valor de la cookie por la primera ; 
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length); //si encontramos la cookie devolvemos su valor
        }
    }
    return ""; //si no encontramos la cookie devolvemos un espacio en blanco
}

//función para comprobar si una cookie ha sido seteada
//en caso de que haya sido seteada, nos mostrará el mensaje de bienvenida
function checkCookie() {
    let listaCompra = getCookie("listaCompra");
    let creado=false;
    if (listaCompra != "") {
        creado=true; //quito el mensaje de bienvenida de aquí y me lo llevo a la vista
                    //me creo un manejador para ralentizar la carga de la página
    }
    return creado;
}

//función para eliminar la cookie
function deleteCookie(valor) {
    //console.log('entra en la funcion delete');
    document.cookie =valor+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;"; //cambio su fecha a 1970, para que expire y asi se borre
    
}

//función para mostrar la política de cookies
function politicaCookies(){
    let contenido=`
    <div class="card bg-light card-center" style="max-width: 80rem;">
        <div class="card-header card-titulo">Política de cookies:</div>
        <div class="card-body">
            <p>En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, esta página web le informa, en esta sección, sobre la política de recogida y tratamiento de cookies.</p>
            <br>
            <p><strong>¿QUÉ SON LAS COOKIES?</strong></p>
            <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario. </p>
            <br>
            <p><strong>¿QUÉ TIPOS DE COOKIES UTILIZA ESTA PÁGINA WEB?</strong></p>
            <p>Esta página web utiliza los siguientes tipos de cookies:</p>
            <p><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través del área restringida y la utilización de sus diferentes funciones, como por ejemplo, llevar a cambio el proceso de compra de un artículo.</p>
            <p><strong>Cookies de personalización:</strong> Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma o el tipo de navegador a través del cual se conecta al servicio.</p>
            <br>
            <p><strong>DESACTIVAR LAS COOKIES.</strong></p>
            <p>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.</p>
            <p>En la mayoría de los navegadores web se ofrece la posibilidad de permitir, bloquear o eliminar las cookies instaladas en su equipo.</p>
            <br>
            <p><strong>ADVERTENCIA SOBRE ELIMINAR COOKIES.</strong></p>
            <p>Usted puede eliminar y bloquear todas las cookies de este sitio, pero parte del sitio no funcionará o la calidad de la página web puede verse afectada.</p>
            <br>
            </div>
            </div>`;

    $("main").html(contenido);
}

//función para mostrar el mensaje de las cookies
function mensajeCookies(){
    let contenido=`
    <div class="alert alert-dismissible alert-info msg-cookie">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Aviso sobre uso de Cookies.</strong> Utilizo cookies propias sólo con finalidad técnica. 
        Puedes consultar cómo gestiono las cookies y cómo puede controlarlas haciendo clic <a class="alert-link registro" onclick="politicaCookies()" role="button"> aquí.</a>
    </div>`;
    $("#mensajeCookie").html(contenido);
}