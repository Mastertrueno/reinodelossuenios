<?php
    require '../modelo/Categoria.php';
    require '../modelo/daoCategoria.php';
    require '../modelo/Pais.php';
    require '../modelo/daoPais.php';
    require '../modelo/Proveedor.php';
    require '../modelo/daoProveedor.php';
    require '../modelo/Producto.php';
    require '../modelo/DaoProductos.php';
    require '../modelo/Alergeno.php';
    require '../modelo/daoAlergeno.php';
    require '../modelo/AlergenoProducto.php';
    require '../modelo/daoAlergenoProducto.php';
    require '../modelo/Usuario.php';
    require '../modelo/DaoUsuario.php';
    require '../modelo/Pedido.php';
    require '../modelo/daoPedido.php';

    session_start();

    // $categoria          = new daoCategoria('epiz_34180798_reinodelossuenios');
    // $pais               = new daoPais('epiz_34180798_reinodelossuenios');
    $proveedor          = new DaoProveedor('epiz_34180798_reinodelossuenios');
    $producto           = new DaoProductos("epiz_34180798_reinodelossuenios");
    // $alergeno           = new daoAlergeno("epiz_34180798_reinodelossuenios");
    // $alergenoProducto   = new daoAlergenoProducto("epiz_34180798_reinodelossuenios");
    $usuario            = new DaoUsuarios("epiz_34180798_reinodelossuenios");
    //$pedido             = new daoPedido("epiz_34180798_reinodelossuenios");

    $verificado=false;
    $idUsuario;

    /*-----INSERTAR CATEGORIA-----*/
    //chequeo que se hayan creado los post de añadir categoria
    // if(isset($_POST['idCatAdd']) && isset($_POST['nomCatAdd'])){
    //     $idCatAdd=$_POST['idCatAdd'];
    //     $nomCatAdd=$_POST['nomCatAdd'];
    //     //me guardo los datos del formulario en un array
    //     $datosAddCat= ['Id' => (int)$idCatAdd, 'Nombre' => $nomCatAdd];
    //     var_dump($datosAddCat);
    //     //me creo un objeto categoria con los datos
    //     $newCat= new Categoria();
    //     $newCat->__SET("Id", $idCatAdd);
    //     $newCat->__SET("Nombre", $nomCatAdd);
    //     //me creo una variable del dao para poder llamar a sus funciones
    //     $categoria->insertar($newCat);
    // }

    /*-----ELIMINAR UNA CATEGORÍA-----*/
    // $categoria->listar();
    // $countCat=0;
    // foreach($categoria->categorias as $lista){
    //     $idCatDel=$lista->__GET('Id');
    //     //echo 'categoria-->'.$idCatDel;
    //     if(isset($_POST['checkCat-'.$idCatDel])){
    //         $producto->actualizarCat($idCatDel);
    //         $categoria->eliminar($idCatDel);
    //         $countCat++;
    //         echo $countCat;
    //     }
    // }

    /*-----INSERTAR PAIS-----*/
    //chequeo que se hayan creado los post de añadir categoria
    // if(isset($_POST['idPaisAdd']) && isset($_POST['nomPaisAdd'])){
    //     $idPaisAdd=$_POST['idPaisAdd'];
    //     $nomPaisAdd=$_POST['nomPaisAdd'];
    //     //me guardo los datos del formulario en un array
    //     $datosAddPais= ['Id' => (int)$idPaisAdd, 'Nombre' => $nomPaisAdd];
    //     var_dump($datosAddPais);
    //     //me creo un objeto categoria con los datos
    //     $newPais= new Pais();
    //     $newPais->__SET("Id", $idPaisAdd);
    //     $newPais->__SET("Nombre", $nomPaisAdd);
    //     //me creo una variable del dao para poder llamar a sus funciones
    //     $pais->insertar($newPais);
    // }

    /*-----ELIMINAR UN PAIS-----*/
    // $pais->listar();
    // $countPais=0;
    // foreach($pais->paises as $lista){
    //     $idPaisDel=$lista->__GET('Id');
    //     //echo 'categoria-->'.$idCatDel;
    //     if(isset($_POST['checkPais-'.$idPaisDel])){
    //         $producto->actualizarPais($idPaisDel);
    //         $pais->eliminar($idPaisDel);
    //         $countPais++;
    //         echo $countPais;
    //     }
    // }

    /*-----INSERTAR PROVEEDOR-----*/
    //chequeo que se hayan creado los post de añadir categoria
    if( isset($_POST['idSuppAdd'])    && 
        isset($_POST['CIFSuppAdd'])   &&
        isset($_POST['nomSuppAdd'])   &&
        isset($_POST['dirSuppAdd'])   &&
        isset($_POST['telSuppAdd'])   &&
        isset($_POST['emailSuppAdd'])){

        $idSuppAdd=$_POST['idSuppAdd'];
        $CIFSuppAdd=$_POST['CIFSuppAdd'];
        $nomSuppAdd=$_POST['nomSuppAdd'];
        $dirSuppAdd=$_POST['dirSuppAdd'];
        $telSuppAdd=$_POST['telSuppAdd'];
        $emailSuppAdd=$_POST['emailSuppAdd'];
        $borradoSupAdd=0;
        //me guardo los datos del formulario en un array
        $datosAddSup= [ 'Id' => (int)$idSuppAdd,
                        'CIF' => $CIFSuppAdd,
                        'Nombre' => $nomSuppAdd,
                        'Direccion' => $dirSuppAdd,
                        'Telefono' => $telSuppAdd,
                        'Email' => $emailSuppAdd,
                        'Borrado' => $borradoSupAdd];
        var_dump($datosAddSup);
        //me creo un objeto categoria con los datos
        $newSup= new Proveedor();
        $newSup->__SET("Id", $idSuppAdd);
        $newSup->__SET("CIF", $CIFSuppAdd);
        $newSup->__SET("Nombre", $nomSuppAdd);
        $newSup->__SET("Direccion", $dirSuppAdd);
        $newSup->__SET("Telefono", $telSuppAdd);
        $newSup->__SET("Email", $emailSuppAdd);
        $newSup->__SET("Borrado", $borradoSupAdd);
        //me creo una variable del dao para poder llamar a sus funciones
        $proveedor->Insertar($newSup);
    }


    /*-----ELIMINAR UN PROVEEDOR-----*/
    $proveedor->listar();
    $countProv=0;
    foreach($proveedor->proveedor as $lista){
        $idProvDel=$lista->__GET('Id');
        if(isset($_POST['checkProv-'.$idProvDel])){
            $proveedor->Eliminar($idProvDel);
            $countProv++;
            echo $countProv;
        }
    }

    /*-----INSERTAR PRODUCTO-----*/
    //chequeo que se hayan creado los post de añadir categoria
    // if( isset($_POST['idProdAdd'])    && 
    //     isset($_POST['nomProdAdd'])   &&
    //     isset($_POST['desProdAdd'])   &&
    //     isset($_POST['ingrProdAdd'])   &&
    //     isset($_POST['preProdAdd'])   &&
    //     isset($_POST['pesProdAdd'])   &&
    //     isset($_POST['stoProdAdd'])   &&
    //     isset($_POST['catProdAdd'])   &&
    //     isset($_POST['paisProdAdd'])  &&
    //     isset($_POST['provProdAdd']))   {
        
    //     echo 'esto en el crud';

    //     $idProdAdd=$_POST['idProdAdd'];
    //     $nomProdAdd=$_POST['nomProdAdd'];
    //     $desProdAdd=$_POST['desProdAdd'];
    //     $ingProdAdd=$_POST['ingrProdAdd'];
    //     $preProdAdd=$_POST['preProdAdd'];
    //     $pesProdAdd=$_POST['pesProdAdd'];
    //     $stoProdAdd=$_POST['stoProdAdd'];
    //     //detallamos la ubicación que tendrá la imagen*/
    //     $imgProdAdd=basename($_FILES['imgProdAdd']['name']);
    //     $nombreImg='http://localhost/proyectoFinal/public/images/products/'.$imgProdAdd;
    //     //$nombreImg='https://superasianmarket.000webhostapp.com/public/images/products/'.$imgProdAdd; //ruta del host externo

    //     //datos de las foreing
    //     $catProdAdd=$_POST['catProdAdd'];
    //     $paisProdAdd=$_POST['paisProdAdd'];
    //     $provProdAdd=$_POST['provProdAdd'];

    //     //borrado lógico a 0 
    //     $borradoProdAdd=0;

    //     $prod=new Producto(); //Creamos una instancia 
    //     $prod->__SET("Id", $idProdAdd);
    //     $prod->__SET("Nombre", $nomProdAdd);
    //     $prod->__SET("Descripcion", $desProdAdd);
    //     $prod->__SET("Ingredientes",  $ingProdAdd);
    //     $prod->__SET("Precio", $preProdAdd);
    //     $prod->__SET("Peso", $pesProdAdd);
    //     $prod->__SET("Stock", $stoProdAdd);
    //     $prod->__SET("Imagen", $nombreImg);
    //     $prod->__SET("Id_categoria", $catProdAdd);
    //     $prod->__SET("Id_pais", $paisProdAdd);
    //     $prod->__SET("Id_proveedor",  $provProdAdd);
    //     $prod->__SET("Borrado", $borradoProdAdd);

    //     $producto->insertar($prod); //insertamos el producto 

    //     /* Subir la imagen al servidor del proyecto */
    //     $filename = $_FILES['imgProdAdd']['name'];

    //     /* Elegimos dónde queremos guardar la imagen */
    //     $location = "../public/images/products/".$filename;

    //     /* Guardamos la carga en el sistema local de archivos */
    //    if ( move_uploaded_file($_FILES['imgProdAdd']['tmp_name'], $location) ) {  //guardamos la imagen en el pathindicado
    //         echo 'Success'; 
    //     } else { 
    //         echo 'Failure'; 
    //     }
    //     //echo  $idProdAdd;
    //     /* Agregar los alérgenos al producto*/
    //     $alergeno->listar(); //listo los alergenos
    //     foreach($alergeno->alergeno as $lista){ 
    //         $alerg=$lista->__GET('Nombre');//recorro la lista
    //         if(isset($_POST[$alerg])){ //miro si existe un post con el nombre del alergeno
    //             $id_Alerg=$lista->__GET('Id');
    //             echo  $id_Alerg;
    //             $alerg= new AlergenoProducto(); //si existe creo un alergenoProducto
    //             $alerg->__SET("Id_alergeno",  $id_Alerg); //seteo sus valores
    //             $alerg->__SET("Id_producto",  $idProdAdd); 
    //            // var_dump($alerg);
    //             $alergenoProducto->insertar($alerg); //lo inserto en la tabla*/
    //         }
    //     }
    // }

    /*-----ELIMINAR UN PRODUCTO-----*/
    // $producto->listar();
    // $countProd=0;
    // foreach($producto->productos as $lista){
    //     $idProd=$lista->__GET('Id');
    //     if(isset($_POST['checkProd-'.$idProd])){
    //         $producto->borradoLogico($idProd);
    //         $countProd++;
    //         echo $countProd;
    //     }
    // /*-----ACTUALIZAR UN PRODUCTO-----*/
    //     if(isset($_POST['id-'.$idProd])){
    //         $catUpdate=$_POST['catUpdate-'.$idProd];
    //         $paisUpdate=$_POST['paisUpdate-'.$idProd];
    //         $provUpdate=$_POST['provUpdate-'.$idProd];
    //         $stockUpdate=$_POST['stockUpdate-'.$idProd];
    //         $producto->actualizarProducto($idProd, $stockUpdate, $catUpdate, $paisUpdate, $provUpdate );
    //         $countProd++;
    //         echo $counProd;
    //     }
        
    // }


    /*-----ALTA NUEVO USUARIO----*/
    // if( isset($_POST['newDni']) && 
    //     isset($_POST['newNombre']) && 
    //     isset($_POST['newApellidos']) &&  
    //     isset($_POST['newEmail']) && 
    //     isset($_POST['newTelefono']) && 
    //     isset($_POST['newPassVal']) && 
    //     isset($_POST['newDireccion']) &&
    //     isset($_POST['newProvincia']) &&
    //     isset($_POST['newLocalidad']) &&
    //     isset($_POST['newCP'])){
        
    //     //para sacar el id (serial numérico) llamamos a la función correspondiente
    //     $usuario->ultimoUsuario();
    //     foreach($usuario->usuarios as $lista){
    //         $Id= $lista->__GET('Id');
    //     }
    //     $newId          =$Id+1; //sumamos 1 al id del ultirmo usuario registrado para que sea serial
    //     $newDni         =$_POST['newDni'];
    //     $newNombre      =$_POST['newNombre'];
    //     $newApellidos   =$_POST['newApellidos'];
    //     $newEmail       =$_POST['newEmail'];
    //     $newTelefono    =$_POST['newTelefono'];
    //     //tenemos que cifrar la contraseña por seguridad
    //     $newPassVal     =$_POST['newPassVal'];
    //     $passEncriptada =password_hash($newPassVal , PASSWORD_DEFAULT); //con esto encripto la contraseña
    //     $newDireccion   =$_POST['newDireccion'];
    //     $newProvincia   =$_POST['newProvincia'];
    //     $newLocalidad   =$_POST['newLocalidad'];
    //     $newCP          =$_POST['newCP'];
    //     $newRol         ='user'; // el rol se lño doy yo manualmente

    //     $existe=false;
    //     $usuario->listar();
    //     foreach($usuario->usuarios as $lista){
    //         $email= $lista->__GET('Email');
    //         if($email==$newEmail){
    //             $existe=true;
    //         }
    //     }

    //     if(!$existe){
    //         $user=new Usuario(); //Creamos una instancia 
    //         $user->__SET("Id", $newId);
    //         $user->__SET("Dni", $newDni);
    //         $user->__SET("Nombre", $newNombre);
    //         $user->__SET("Apellidos", $newApellidos);
    //         $user->__SET("Email",  $newEmail);
    //         $user->__SET("Telefono", $newTelefono);
    //         $user->__SET("Contrasena", $passEncriptada);
    //         $user->__SET("Direccion", $newDireccion);
    //         $user->__SET("Provincia", $newProvincia);
    //         $user->__SET("Localidad", $newLocalidad);
    //         $user->__SET("CP", $newCP);
    //         $user->__SET("Rol",  $newRol); //el rol siempre va a ser user ya que es para dar de alta clientes
    //                                     //No se podrá dar de alta un usuario admin a través del formulario de la web
    //         $usuario->insertar($user); //insertamos el producto 
    //     }else{
    //         echo 'Existe';
    //     }

    // }

    if(isset($_POST['userName_log']) && isset($_POST['password_log']) ){
        $logUser=$_POST['userName_log'];
        $logPass=$_POST['password_log'];
        $claveBD="";
        $email;
        $usuario->listar();
        $nom;
        foreach($usuario->usuarios as $lista){
            //echo $logUser;
            $email=$lista->__GET('Email');
            if($logUser == $email){
                $claveBD=$lista->__GET('Contrasena');
                $id=$lista->__GET('Id');
                $nom=$lista->__GET('Nombre');
                $rol=$lista->__GET('Rol');
                
            }  
        }

        if(password_verify($logPass, $claveBD)){
            $verificado=true;
            //$arrayDatos=[$id,$nom,$rol];
            //echo json_encode($arrayDatos);
            $datos=$id.'-'.$nom.'-'.$rol;
            $_SESSION['sesion']['user']=array('id'=>$id, 'nom'=>$nom, 'rol'=> $rol);
            echo json_encode($_SESSION['sesion']['user']);
            //echo $_SESSION['sesion'];
            //echo $id.'-'.$nom.'-'.$rol;
        }else{
            echo '';
        }
    }

    if(isset($_POST['sesion'])){
        if(isset($_SESSION['datos']['user'])){
            echo json_encode($_SESSION['sesion']['user']);
        }else{
            echo "";
        }
    }

    if(isset($_POST['cerrar'])){
        unset($_SESSION['sesion']['user']);
    }

?>