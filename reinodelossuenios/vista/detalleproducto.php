<?php
session_start();

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Registro</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </script>
    <link href="../estilos/normalize.css" rel="stylesheet">
    <link href="../estilos/registro.css" rel="stylesheet">
</head>

<body>

    <main>

        <div class="container-sm">

            <h1 class="lang" key="registrar">Registrese para continuar</h1>
            <div class="container">
                <form id="form" action='<?php echo $_SERVER['PHP_SELF']; ?>' method='post' class="was-validated container2" needs-validation novalidate>
                    <div class="container2">
            <?php
            echo '<div id="product-list" class="container"><div class="row">';
            //let product = production.next();
            echo '<div id="product-list" class="container my-3"><div class="row"> ';
            foreach ($product as $producto) {
                //console.log(product);

                echo '<div class="col-lg-3 col-md-6>
				<figure class="card card-product-grid card-lg"> 
					<figcaption class="info-wrap">
						<div class="row">
                        <h1>'.$producto->__get("nombre").'</h1>
						<img src="data:image/jpg;base64, ' . $producto->__get("imagen") . '" width="160" height="160">

							<div class="col-md-8"><h3>Descripción</h3> <h4>' . $producto->__get("descripcion") . '</h2> </div>
                            <div class="col-md-8"><h3>Precio</h3> <h4>' . $producto->__get("dinero") . '</h2> </div>
                            <div class="col-md-8"><h3>En stock</h3> <h4>' . $producto->__get("cantidad") . '</h2> </div>
						</div>
					</figcaption>
					
				</figure>
			</div>';
            }
            echo '</div></div>';
            ?>
                    </div>
                    <input id="recordar" type="checkbox" value="recordar"><label for="recordar" class="lang" key="recordar"> Recordar usuario</label><br>
                    <button type="submit" class="lang" name="Enviar" value="Enviar">Enviar</button>
                    <button type="submit" class="lang" name="Cerrar_sesion" value="Cerrar_sesion">Cerrar sesión</button>
                </form>
                <button onclick="location.href='http://reinodelossuenios.42web.io'">Volver</button>

                <?php
                require_once "../modelo/DaoUsuarios.php";
                // require_once "display.php";
                $dao = new DaoUsuarios("epiz_34180798_reinodelossuenios");
                if (isset($_POST["Enviar"])) {
                    $nombre = $_POST["nombre"];
                    $apellidos = $_POST["apellidos"];
                    $contraseña = $_POST["contraseña"];
                    $correo = $_POST["correo"];
                    $telefono = $_POST["telefono"];
                    $dinero = $_POST["dinero"];
                    if (
                        $nombre != "" || $apellidos != "" || $contraseña != "" || $correo != "" || $telefono != ""
                        || $dinero != ""
                    ) {

                        //comprobamos que el usuario no exista
                        $usu = $dao->Obtener($correo);
                        if ($usu != null) {
                            echo "<b>El correo $correo ya esta en uso</b>";
                        } else {
                            //creamos una cadena inicial y final para que complemente a la clave
                            $ini = "#-¿¡!";
                            $fin = "?/&%)";
                            $usu = new Usuario();
                            $contraseña = sha1($ini . $contraseña . $fin); //se cifra la clave introducida
                            $usu->__set("nombre", $nombre);
                            $usu->__set("contraseña", $contraseña);
                            $usu->__set("apellidos", $apellidos);
                            $usu->__set("correo", $correo);
                            $usu->__set("telefono", $telefono);
                            $usu->__set("dinero", $dinero);
                            $dao->Actualizar($usu);
                            echo "<b> Usuario creado correctamente</b>";
                            echo "<br>";
                        }
                    }
                } else {
                    echo "<b>RELLENE LOS CAMPOS<b>";
                }
                if (isset($_POST["Cerrar_sesion"])) {
                    session_destroy();
                    echo "<META HTTP-EQUIV='REFRESH' CONTENT='3;URL=http://reinodelossuenios.42web.io/'> ";
                }
                ?>
            </div>
        </div>
    </main>
</body>

</html>