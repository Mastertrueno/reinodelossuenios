/*Función para validar cualquier regex*/
function validarRegex(regex,valor){
    //console.log(valor);
    //console.log(typeof(valor));
    if(valor.match(regex) != null){
        return true;
    }
}

let regexTel=/^\+[0-9]+/;

let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let regexDni=/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

let regexPass=/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,24})$/;

let regexCP=/^[0-9]{5}$/;

let regexTelSP=/^[0-9]{9}/;

/* validación añadir categoría*/
function idExiste(){
    event.preventDefault();
    document.getElementById('idExisteCat').innerHTML='';
    let idExiste=false;
    let idCat=document.getElementById('idCatAdd').value;
    let param="IdCat="+idCat;
    let peticion= new XMLHttpRequest(); //instanciamos la petición
    peticion.open("POST", 'controller/server-validation.php', false);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion.onreadystatechange = function(){
        if(peticion.readyState === 4 && peticion.status === 200){
            let respuesta=peticion.responseText;
            respuesta=parseInt(respuesta);
            //console.log(typeof(respuesta));
            if(respuesta==1){
                //console.log('entro en true');
                document.getElementById('idExisteCat').innerHTML='El Id introducido ya existe';
                document.getElementById('addCat').disabled = true;
                idExiste=false;
            }else{
                //console.log('entro en false');
                idExiste=true;
                document.getElementById('idExisteCat').innerHTML='';
                document.getElementById('addCat').disabled = false;
            }
        }
    }
    peticion.send(param);

}


function validarCat(){
    event.preventDefault();
    let idExiste=document.getElementById('idExisteCat').value;
    let validadoId=false;
    let validadoNom=false;
    
    if(idExiste==undefined){
        let id=document.getElementById('idCatAdd');
        let nom=document.getElementById('nomCatAdd');

        let errorid =document.getElementById('notvalIdCatAdd');
        let errornom =document.getElementById('notvalNomCatAdd');

        let mensajesErrorId=[];
        let mensajesErrorNom=[];

        if(id.value === null || id.value=== ''){
            mensajesErrorId.push('El id no puede estar vacío');
            validadoId=false;
        }else{
            validadoId=true;
        }

        if(nom.value === null || nom.value=== '' || nom.value.length<3){
            validadoNom=false;
            mensajesErrorNom.push('El nombre no puede estar vacío ni tener menos de 3 letras.');
        }else{
            validadoNom=true;
        }
        errorid.innerHTML= mensajesErrorId;
        errornom.innerHTML= mensajesErrorNom;

        console.log(validadoId);
        console.log(validadoNom);

        if(validadoId && validadoNom){
            mandarCat();
        }
    }
}


/* validación añadir pais*/

//validación servidor
function idPaisExiste(){
    event.preventDefault();
    document.getElementById('idExistePais').innerHTML='';
    let idExiste=false;
    let idPais=document.getElementById('idPaisAdd').value;
    let param="IdPais="+idPais;
    let peticion= new XMLHttpRequest(); //instanciamos la petición
    peticion.open("POST", 'controller/server-validation.php', false);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion.onreadystatechange = function(){
        if(peticion.readyState === 4 && peticion.status === 200){
            let respuesta=peticion.responseText;
            respuesta=parseInt(respuesta);
            //console.log(typeof(respuesta));
            if(respuesta==1){
                //console.log('entro en true');
                document.getElementById('idExistePais').innerHTML='El Id introducido ya existe';
                document.getElementById('addPais').disabled = true;
                idExiste=false;
            }else{
                //console.log('entro en false');
                idExiste=true;
                document.getElementById('idExistePais').innerHTML='';
                document.getElementById('addPais').disabled = false;
            }
        }
    }
    peticion.send(param);

}


function validarPais(){
    event.preventDefault();
    let idExiste=document.getElementById('idExistePais').value;
    let validadoId=false;
    let validadoNom=false;
    
    if(idExiste==undefined){
        let id=document.getElementById('idPaisAdd');
        let nom=document.getElementById('nomPaisAdd');

        let errorid =document.getElementById('notvalIdPaisAdd');
        let errornom =document.getElementById('notvalNomPaisAdd');

        let mensajesErrorId=[];
        let mensajesErrorNom=[];

        if(id.value === null || id.value=== ''){
            mensajesErrorId.push('El id no puede estar vacío');
            validadoId=false;
        }else{
            validadoId=true;
        }

        if(nom.value === null || nom.value=== '' || nom.value.length<3){
            validadoNom=false;
            mensajesErrorNom.push('El nombre no puede estar vacío ni tener menos de 3 letras.');
        }else{
            validadoNom=true;
        }
        errorid.innerHTML= mensajesErrorId;
        errornom.innerHTML= mensajesErrorNom;

        console.log(validadoId);
        console.log(validadoNom);

        if(validadoId && validadoNom){
            mandarPais();
        }
    }
}

/* validación añadir proveedor*/

//validación servidor
function idProvExiste(){
    event.preventDefault();
    document.getElementById('idExisteProv').innerHTML='';
    let idExiste=false;
    let idProv=document.getElementById('idSuppAdd').value;
    let param="IdProv="+idProv;
    let peticion= new XMLHttpRequest(); //instanciamos la petición
    peticion.open("POST", 'controller/server-validation.php', false);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion.onreadystatechange = function(){
        if(peticion.readyState === 4 && peticion.status === 200){
            let respuesta=peticion.responseText;
            respuesta=parseInt(respuesta);
            //console.log(typeof(respuesta));
            if(respuesta==1){
                console.log('entro en true');
                document.getElementById('idExisteProv').innerHTML='El Id introducido ya existe';
                document.getElementById('addProv').disabled = true;
                idExiste=false;
            }else{
                console.log('entro en false');
                idExiste=true;
                document.getElementById('idExisteProv').innerHTML='';
                document.getElementById('addProv').disabled = false;
            }
        }
    }
    peticion.send(param);
}

function validarProveedor(){
    event.preventDefault();
    let idExiste=document.getElementById('idExisteProv').value;

    let validadoId=false;
    let validadoCif=false;
    let validadoNom=false;
    let validadoDir=false;
    let validadoTel=false;
    let validadoEmail=false;
    
    if(idExiste==undefined){
        let id=document.getElementById('idSuppAdd');
        let cif=document.getElementById('CIFSuppAdd');
        let nom=document.getElementById('nomSuppAdd');
        let dir=document.getElementById('dirSuppAdd');
        let tel=document.getElementById('telSuppAdd');
        let email=document.getElementById('emailSuppAdd');

        let errorid =document.getElementById('notvalIdSuppAdd');
        let errorcif =document.getElementById('notvalCIFSuppAdd');
        let errornom =document.getElementById('notvalNomSuppAdd');
        let errordir =document.getElementById('notvalDirSuppAdd');
        let errortel =document.getElementById('notvalTelSuppAdd');
        let erroremail =document.getElementById('notvalEmailSuppAdd');

        let mensajesErrorId=[];
        let mensajesErrorCif=[];
        let mensajesErrorNom=[];
        let mensajesErrorDir=[];
        let mensajesErrorTel=[];
        let mensajesErrorEmail=[];


        if(id.value === null || id.value=== ''){
            mensajesErrorId.push('El id no puede estar vacío');
            validadoId=false;
        }else{
            validadoId=true;
        }

        if(cif.value === null || cif.value=== '' || cif.value.length<9){
            validadoCif=false;
            mensajesErrorCif.push('El Cif debe tener al menos 9 caracteres entre letras y números.');
        }else{
            validadoCif=true;
        }

        if(nom.value === null || nom.value=== '' || nom.value.length<3){
            validadoNom=false;
            mensajesErrorNom.push('El nombre no puede estar vacío ni tener menos de 3 letras.');
        }else{
            validadoNom=true;
        }

        if(dir.value === null || dir.value=== '' || dir.value.length<1){
            validadoDir=false;
            mensajesErrorDir.push('La dirección no puede estar vacía');
        }else{
            validadoDir=true;
        }

        if(tel.value === null || tel.value=== '' || !validarRegex(regexTel, tel.value)){
            validadoTel=false;
            mensajesErrorTel.push('El teléfono no puede estar vacío y debe cumplir el formato');
        }else{
            validadoTel=true;
        }

        if(email.value === null || email.value=== '' || !validarRegex(regexEmail, email.value)){
            validadoEmail=false;
            mensajesErrorEmail.push('El email no puede estar vacío y debe cumplir el formato');
        }else{
            validadoEmail=true;
        }

        errorid.innerHTML= mensajesErrorId;
        errorcif.innerHTML= mensajesErrorCif;
        errornom.innerHTML= mensajesErrorNom;
        errordir.innerHTML= mensajesErrorDir;
        errortel.innerHTML= mensajesErrorTel;
        erroremail.innerHTML= mensajesErrorEmail;

        if( validadoId  &&
            validadoCif && 
            validadoNom &&
            validadoDir &&
            validadoTel &&
            validadoEmail){
            mandarProveedor();
        }
    }
}


/*validar añadir producto */

//validación servidor
function idProductoExiste(){
    event.preventDefault();
    document.getElementById('idExisteProd').innerHTML='';
    let idExiste=false;
    let idProd=document.getElementById('idProdAdd').value;
    let param="IdProd="+idProd;
    let peticion= new XMLHttpRequest(); //instanciamos la petición
    peticion.open("POST", 'controller/server-validation.php', false);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion.onreadystatechange = function(){
        if(peticion.readyState === 4 && peticion.status === 200){
            let respuesta=peticion.responseText;
            respuesta=parseInt(respuesta);
            //console.log(typeof(respuesta));
            if(respuesta==1){
                console.log('entro en true');
                document.getElementById('idExisteProd').innerHTML='El Id introducido ya existe';
                document.getElementById('addProduct').disabled = true;
                idExiste=false;
            }else{
                console.log('entro en false');
                idExiste=true;
                document.getElementById('idExisteProd').innerHTML='';
                document.getElementById('addProduct').disabled = false;
            }
        }
    }
    peticion.send(param);
}


function validarProducto(){
    event.preventDefault();
    let idExiste=document.getElementById('idExisteProd').value;

    let validadoId=false;
    let validadoNom=false;
    let validadoDesc=false;
    let validadoIngr=false;
    let validadoPrec=false;
    let validadoPeso=false;
    let validadoSto=false;
    let validadoImg=false;
    let validadoCat=false;
    let validadoPais=false;
    let validadoProv=false;
    
    if(idExiste==undefined){
        let id=document.getElementById('idProdAdd');
        let nom=document.getElementById('nomProdAdd');
        let desc=document.getElementById('desProdAdd');
        let ingr=document.getElementById('ingrProdAdd');
        let prec=document.getElementById('preProdAdd');
        let peso=document.getElementById('pesProdAdd');
        let sto=document.getElementById('stoProdAdd');
        let img=document.getElementById('imgProdAdd');
        let cat=document.getElementById('catProdAdd');
        let pais=document.getElementById('paisProdAdd');
        let prov=document.getElementById('provProdAdd');

        let errorid =document.getElementById('nolvalIdProd');
        let errornom =document.getElementById('nolvalNomProd');
        let errordesc =document.getElementById('nolvalDesProd');
        let erroringr =document.getElementById('nolvalIngrProd');
        let errorprec =document.getElementById('nolvalPreProd');
        let errorpeso =document.getElementById('nolvalPesProd');
        let errorsto =document.getElementById('nolvalStoProd');
        let errorimg =document.getElementById('nolvalImgProd');
        let errorcat =document.getElementById('nolvalCatProd');
        let errorpais =document.getElementById('nolvalPaisProd');
        let errorprov =document.getElementById('nolvalProvProd');

        let mensajesErrorId=[];
        let mensajesErrorNom=[];
        let mensajesErrorDesc=[];
        let mensajesErrorIngr=[];
        let mensajesErrorPrec=[];
        let mensajesErrorPeso=[];
        let mensajesErrorSto=[];
        let mensajesErrorImg=[];
        let mensajesErrorCat=[];
        let mensajesErrorPais=[];
        let mensajesErrorProv=[];

        if(id.value === null || id.value=== ''){
            mensajesErrorId.push('El id no puede estar vacío');
            validadoId=false;
        }else{
            validadoId=true;
        }

        if(nom.value === null || nom.value=== '' || nom.value.length<3){
            validadoNom=false;
            mensajesErrorNom.push('El nombre no puede estar vacío ni tener menos de 3 letras.');
        }else{
            validadoNom=true;
        }

        if(desc.value === null || desc.value=== '' || desc.value.length<1){
            validadoDesc=false;
            mensajesErrorDesc.push('La descripción no puede estar vacía');
        }else{
            validadoDesc=true;
        }

        if(ingr.value === null || ingr.value=== '' || ingr.value.length<10){
            validadoIngr=false;
            mensajesErrorIngr.push('Los ingredientes no pueden estar vacíos. Al menos 10 caracteres.');
        }else{
            validadoIngr=true;
        }

        if(prec.value === null || prec.value=== ''){
            validadoPrec=false;
            mensajesErrorPrec.push('El precio no puede estar vacío');
        }else{
            validadoPrec=true;
        }

        if(peso.value === null || peso.value=== ''){
            validadoPeso=false;
            mensajesErrorPeso.push('El peso no puede estar vacío');
        }else{
            validadoPeso=true;
        }

        if(sto.value === null || sto.value=== ''){
            validadoSto=false;
            mensajesErrorSto.push('El stock no puede estar vacío y debe ser un número entero.');
        }else{
            validadoSto=true;
        }

        if(cat.value === "no"){
            validadoCat=false;
            mensajesErrorCat.push('Debe elegir una categoría.');
        }else{
            validadoCat=true;
        }

        if(pais.value === "no"){
            validadoPais=false;
            mensajesErrorPais.push('Debe elegir un país');
        }else{
            validadoPais=true;
        }

        if(prov.value === "no"){
            validadoProv=false;
            mensajesErrorProv.push('Debe elegir un proveedor');
        }else{
            validadoProv=true;
        }

        errorid.innerHTML= mensajesErrorId;
        errornom.innerHTML= mensajesErrorNom;
        errordesc.innerHTML= mensajesErrorDesc;
        erroringr.innerHTML= mensajesErrorIngr;
        errorprec.innerHTML= mensajesErrorPrec;
        errorpeso.innerHTML= mensajesErrorPeso;
        errorsto.innerHTML= mensajesErrorSto;
        errorimg.innerHTML= mensajesErrorImg;
        errorcat.innerHTML= mensajesErrorCat;
        errorpais.innerHTML= mensajesErrorPais;
        errorprov.innerHTML= mensajesErrorProv;

        if( validadoId   &&
            validadoNom  &&
            validadoDesc &&
            validadoIngr &&
            validadoPrec &&
            validadoPeso &&
            validadoSto  &&
            validadoCat  &&
            validadoPais &&
            validadoProv){
                subirImgProducto();
                mandarProducto();
        }
    }
}


/* validación añadir usuario*/

//validación servidor
function emailUserExiste(){
    event.preventDefault();
    document.getElementById('emailExiste').innerHTML='';
    let emaiExiste=false;
    let emailUser=document.getElementById('newEmail').value;
    let param="EmailUser="+emailUser;
    let peticion= new XMLHttpRequest(); //instanciamos la petición
    peticion.open("POST", 'controller/server-validation.php', false);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion.onreadystatechange = function(){
        if(peticion.readyState === 4 && peticion.status === 200){
            let respuesta=peticion.responseText;
            respuesta=parseInt(respuesta);
            //console.log(typeof(respuesta));
            if(respuesta==1){
                emaiExiste=false;
                document.getElementById('emailExiste').innerHTML='El email introducido ya existe';
                document.getElementById('addUser').disabled = true;
                
            }else{
                emaiExiste=true;
                document.getElementById('emailExiste').innerHTML='';
                document.getElementById('addUser').disabled = false;
            }
        }
    }
    peticion.send(param);

}

//chequeamos que las dos contraseñas sean iguales
function passwordIguales() {
    let pass1 = document.getElementById('newPass').value;
    let pass2 = document.getElementById('newPassVal').value;
    let iguales = false;
    if (pass1 == pass2) {
        iguales = true;
    } else {
        swal({
            title: "Ups...",
            text: "Las contraseñas no coinciden.",
            icon: "warning",
            button: "Aceptar"
        });
    }
    return iguales;
}

function validarUser(){
    event.preventDefault();
    let emailExiste=document.getElementById('emailExiste').value;

    let validadoDni=false;
    let validadoNom=false;
    let validadoApe=false;
    let validadoEmail=false;
    let validadoTel=false;
    let validadoPass=false;
    let validadoPass2=false;
    let validadoDir=false;
    let validadoPro=false;
    let validadoLoc=false;
    let validadoCP=false;

    let dni=document.getElementById('newDni');
    let nom=document.getElementById('newNombre');
    let ape=document.getElementById('newApellidos');
    let email=document.getElementById('newEmail');
    let tel=document.getElementById('newTelefono');
    let pass=document.getElementById('newPass');
    let pass2=document.getElementById('newPassVal');
    let dir=document.getElementById('newDireccion');
    let pro=document.getElementById('newProvincia');
    let loc=document.getElementById('newLocalidad');
    let cp=document.getElementById('newCP');

    let errordni =document.getElementById('notvalDniUserAdd');
    let errornom =document.getElementById('notvalNomUserAdd');
    let errorape =document.getElementById('notvalApeUserAdd');
    let erroremail =document.getElementById('notvalEmailUserAdd');
    let errortel =document.getElementById('notvalTelUserAdd');
    let errorpass =document.getElementById('notvalPass1UserAdd');
    let errorpass2 =document.getElementById('notvalPass2UserAdd');
    let errordir =document.getElementById('notvalDirUserAdd');
    let errorpro =document.getElementById('notvalProviUserAdd');
    let errorloc =document.getElementById('notvalLocUserAdd');
    let errorcp =document.getElementById('notvalCPUserAdd');

    let mensajesErrordni=[];
    let mensajesErrornom=[];
    let mensajesErrorape=[];
    let mensajesErroremail=[];
    let mensajesErrortel=[];
    let mensajesErrorpass=[];
    let mensajesErrorpass2=[];
    let mensajesErrordir=[];
    let mensajesErrorpro=[];
    let mensajesErrorloc=[];
    let mensajesErrorcp=[];


    if(dni.value === null || dni.value=== '' || !validarRegex(regexDni, dni.value)){
        mensajesErrordni.push('El dni no puede estar vacío y debe cumplir con el formato');
        validadoDni=false;
    }else{
        validadoDni=true;
    }

    if(nom.value === null || nom.value=== ''){
        validadoNom=false;
        mensajesErrornom.push('El nombre no puede estar vacío.');
    }else{
        validadoNom=true;
    }

    if(ape.value === null || ape.value=== ''){
        validadoApe=false;
        mensajesErrorape.push('Los apellidos no pueden estar vacíos.');
    }else{
        validadoApe=true;
    }

    if(email.value === null || email.value=== '' || !validarRegex(regexEmail, email.value)){
        validadoEmail=false;
        mensajesErroremail.push('El email no puede estar vacío y debe cumplir con el formato');
    }else{
        validadoEmail=true;
    }

    if(tel.value === null || tel.value=== '' || !validarRegex(regexTelSP, tel.value)){
        validadoTel=false;
        mensajesErrortel.push('El teléfono no puede estar vacío y debe cumplir el formato');
    }else{
        validadoTel=true;
    }

    if(pass.value === null || pass.value=== '' || !validarRegex(regexPass, pass.value)){
        validadoPass=false;
        mensajesErrorpass.push('La contraseña no puede estar vacía y debe cumplir el formato');
    }else{
        validadoPass=true;
    }

    if(pass2.value === null  || pass2.value=== ''){
        validadoPass2=false;
        mensajesErrorpass2.push('La contraseña no puede estar vacía');
    }else{
        validadoPass2=true;
    }

    if(!passwordIguales){
        validadoPass2=false;
        mensajesErrorpass2.push('Las contraseñas no coinciden');
    }else{
        validadoPass2=true;
    }

    if(dir.value === null || dir.value=== ''){
        validadoDir=false;
        mensajesErrordir.push('La dirección no puede estar vacía');
    }else{
        validadoDir=true;
    }

    if(pro.value === null || pro.value=== ''){
        validadoPro=false;
        mensajesErrorpro.push('La provincia no puede estar vacía');
    }else{
        validadoPro=true;
    }

    if(loc.value === null || loc.value=== ''){
        validadoLoc=false;
        mensajesErrorloc.push('La localidad no puede estar vacía');
    }else{
        validadoLoc=true;
    }

    if(cp.value === null || cp.value=== '' || !validarRegex(regexCP, cp.value)){
        validadoCP=false;
        mensajesErrorcp.push('El código postal no puede estar vacío y debe cumplir con el formato');
    }else{
        validadoCP=true;
    }

    errordni.innerHTML= mensajesErrordni;
    errornom.innerHTML= mensajesErrornom;
    errorape.innerHTML= mensajesErrorape;
    erroremail.innerHTML= mensajesErroremail;
    errortel.innerHTML= mensajesErrortel;
    errorpass.innerHTML= mensajesErrorpass;
    errorpass2.innerHTML= mensajesErrorpass2;
    errordir.innerHTML= mensajesErrordir;
    errorpro.innerHTML= mensajesErrorpro;
    errorloc.innerHTML= mensajesErrorloc;
    errorcp.innerHTML= mensajesErrorcp;

    if( validadoDni  &&
        validadoNom && 
        validadoApe &&
        validadoEmail &&
        validadoTel &&
        validadoPass &&
        validadoPass2 &&
        validadoDir &&
        validadoPro &&
        validadoLoc &&
        validadoCP &&
        emailExiste==undefined){
        addUser();
        
    }
}


/* validación login*/

//validación servidor
function emailExisteLogin(){
    event.preventDefault();
    document.getElementById('emailNoExisteLogin').innerHTML='';
    let emailExiste=false;
    let userName=document.getElementById('userName_log').value;
    let param="Email_log="+userName;
    let peticion= new XMLHttpRequest(); //instanciamos la petición
    peticion.open("POST", 'controller/server-validation.php', false);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion.onreadystatechange = function(){
        if(peticion.readyState === 4 && peticion.status === 200){
            let respuesta=peticion.responseText;
            respuesta=parseInt(respuesta);
            console.log(respuesta);
            if(respuesta==1){
                document.getElementById('emailNoExisteLogin').innerHTML='';
                document.getElementById('iniciar_sesion').disabled = false;
                emailExiste=true;
            }else{
                document.getElementById('emailNoExisteLogin').innerHTML='El email introducido no está registrado';
                document.getElementById('iniciar_sesion').disabled = true;
                emailExiste=false;
            }
        }
    }
    peticion.send(param);

}

//validación servidor
function usuarioValido(){
    event.preventDefault();
    let passIncorrecta=document.getElementById('passIncorrecta');
    //let contrasenaCorrecta=false;
    let mensajesErrorPassIncorrecta=[];
    let peticion = new XMLHttpRequest();
    let data = document.getElementById('fLogin');
    //console.log(data);
    let form = new FormData(data);
    peticion.open('POST', 'controller/crud.php');
    peticion.onload = () => {
        if (peticion.status == 200) {
            let respuesta=peticion.responseText;
            //console.log(respuesta);
            if(respuesta!=''){
                mensajesErrorPassIncorrecta.push('La contraseña introducida no es correcta');
                passIncorrecta.innerHTML=mensajesErrorPassIncorrecta;
                console.log(' contraseña incorrecta');
            }else{
                console.log('correcto');
                console.log(contrasenaCorrecta);
            }
        } else {
            console.log("error en la peticion" + peticion.status);
        }
    }
    peticion.send(form);
    
}


function validarLogin(){
    event.preventDefault();
    let emailExiste=document.getElementById('emailNoExisteLogin').value;
    let validadoEmail=false;
    let validadoPass=false;
    
    if(emailExiste==undefined){
        let email=document.getElementById('userName_log');
        let pass=document.getElementById('password_log');

        let erroremail =document.getElementById('notvalEmailLogin');
        let errorpass =document.getElementById('notvalPassLogin');

        let mensajesErrorEmail=[];
        let mensajesErrorPass=[];

        if(email.value === null || email.value=== '' || !validarRegex(regexEmail, email.value)){
            mensajesErrorEmail.push('El email no puede estar vacío y debe cumplir con el formato');
            validadoEmail=false;
        }else{
            validadoEmail=true;
        }

        if(pass.value === null || pass.value=== ''){
            validadoPass=false;
            mensajesErrorPass.push('La contraseña no puede estar vacía');
        }else{
            validadoPass=true;
        }
        erroremail.innerHTML= mensajesErrorEmail;
        errorpass.innerHTML= mensajesErrorPass;
    }

    if(validadoEmail && validadoPass){
        inicioSesion();
    }
    
}