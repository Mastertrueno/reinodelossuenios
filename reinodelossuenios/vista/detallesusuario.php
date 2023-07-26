<?php
session_start();

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalles del usuario</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </script>
    <link href="../estilos/normalize.css" rel="stylesheet">
    <link href="../estilos/registro.css" rel="stylesheet">
</head>

<body>

    <main>
    <?php if (isset($_SESSION["Usuario"])) : ?>

        <div class="container-sm">

            <h1 class="lang" key="registrar">Sus detalles</h1>
            <div class="container form">
                <form id="form" action='<?php echo $_SERVER['PHP_SELF']; ?>' method='post' class="container2 needs-validation" novalidate>
                    <div class="container2">
                        <div class="mb-4 camp">
                            <p>
                            <h2 class="lang" key="nombre">Nombre </h2>
                            <?php
                            echo "<h3>$_SESSION[Nombre]</h3>";
                            ?>
                            </p>

                            <h2 class="lang" key="nnombre">Nuevo Nombre</h2>
                            <input id="nombre" name="nombre" type="text" class="form-control campo" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{4,12}">
                            <!-- <div class="invalid-feedback lang" key="pnombre">
                                Ponga su nombre
                            </div> -->
                        </div>
                        <div class="mb-4 apellidos camp">
                            <label for="apellidos">
                                <h2 class="lang" key="apellidos">Apellidos </h2>
                                <?php
                                echo "<h3>$_SESSION[Apellidos]</h3>";
                                ?>
                            </label>

                            <h2 class="lang" key="napellidos">Nuevos Apellidos</h2>
                            <input id="apellidos" name="apellidos" type="text" class="form-control campo" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{4,24}[ ]{1}[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{4,24}">
                            <!-- <div class="invalid-feedback lang" key="papellidos">
                                Ponga sus apellidos
                            </div> -->
                        </div>

                        <!-- <div class="mb-4 contraseña camp">
                            <label for="contraseña">
                                <h2 class="lang">Confirmación Contraseña </h2>
                            </label>
                            <input id="contraseña2" name="contraseña2" type="password" pattern="[0-9A-za-z]{8,24}" class="form-control campo" required onchange="fieldsCompleted('contraseña')">
                            <div class="invalid-feedback lang" key="pcontraseña">
                                Confirma la contraseña
                            </div>
                        </div> -->
                        <div class="mb-4 email camp">
                            <label for="correo">
                                <h2 class="lang" key="correo">Correo </h2>
                                <?php
                                echo "<h3>$_SESSION[Correo]</h3>";
                                ?>
                            </label>

                            <h2 class="lang" key="ncorreo">Nuevo Correo</h2>
                            <input id="correo" name="correo" type="email" class="form-control campo">
                            <!-- <div class="invalid-feedback lang" key="pemail">
                                Ponga su correo electronico
                            </div> -->
                        </div>

                        <div class="mb-4 telefono camp">
                            <label for="telefono">
                                <h2 class="lang" key="Telefono">Telefono</h2>
                                <?php
                                echo "<h3>$_SESSION[Telefono]</h3>";
                                ?>
                            </label>

                            <h2 class="lang" key="ntelefono">Nuevo Telefono</h2>
                            <input id="telefono" name="telefono" type="text" pattern="^(\+[0-9]{3})?\d{9}$" class="form-control campo_corto">
                            <!-- <div class="invalid-feedback lang" key="ptelefono">
                                Ponga su telefono
                            </div> -->
                        </div>
                        <div class="mb-4 contraseña camp ">
                            <!-- <label for="contraseña">
                                <h2 class="lang" key="contraseña">Contraseña </h2>
                            </label>
                             -->
                            <h2 class="lang" key="ncontraseña">Nueva Contraseña</h2>
                            <input id="contraseña" name="contraseña" type="password" pattern="[0-9A-za-z]{8,24}" class="form-control campo">
                            <!-- <div class="invalid-feedback lang" key="pcontraseña">
                                Ponga una contraseña (8 minimo, sin caracteres especiales)
                            </div> -->

                        </div>
                        <div class="mb-4 dinero camp ">
                            <label for="dinero">
                                <h2 class="lang" key="dinero">Saldo </h2>
                            </label>
                            <?php
                            echo "<h3>$_SESSION[Dinero] euros</h3>";
                            ?>
                            <h2 class="lang" key="ndinero">Añadir dinero</h2>
                            <input id="dinero" name="dinero" type="number" pattern="[0-9]{1,5}" class="form-control campo">

                        </div>
                    </div>
                    <input id="recordar" type="checkbox" value="recordar"><label for="recordar" class="lang" key="recordar"> Recordar usuario</label><br>
                    <button type="submit" class="lang btn seccion" name="Enviar" value="Enviar">Enviar</button>
                    <button type="submit" class="lang btn seccion2" name="Cerrar_sesion" value="Cerrar_sesion">Cerrar sesión</button>
                </form>
                <button onclick="location.href='http://reinodelossuenios.42web.io'" class="btn seccion">Volver</button>

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
                    //$correoactual=$_SESSION['Correo'];
                    if (
                        $nombre != "" || $apellidos != "" || $contraseña != "" || $correo != "" || $telefono != ""
                        || $dinero != ""
                    ) {

                        //comprobamos que el usuario no exista
                        $usua = $dao->Obtener($correo);
                        if ($usua != null) {
                            echo "<b>El correo $correo ya esta en uso</b>";
                        } else {
                            //creamos una cadena inicial y final para que complemente a la clave
                            $ini = "#-¿¡!";
                            $fin = "?/&%)";
                            if($nombre != "" || $apellidos != "" || $contraseña != "" || $correo != "" || $telefono != ""){
                                $usu = new Usuario();
                            $contraseña = sha1($ini . $contraseña . $fin); //se cifra la clave introducida
                            $usu->__set("idusuario", $_SESSION["Usuario"]);
                            $usu->__set("nombre", $nombre);
                            $usu->__set("contraseña", $contraseña);
                            $usu->__set("apellidos", $apellidos);
                            $usu->__set("correo", $correo);
                            $usu->__set("telefono", $telefono);
                            //$usu->__set("dinero", $dinero);
                            $dao->Actualizar($usu);
                            }
                            if ($correo == "") {
                                $usua = $dao->Obtener($_SESSION["Correo"]);
                                $sumadinero = $usua->__get("dinero");
                            } else {
                                $usua = $dao->Obtener($correo);
                                $sumadinero = $usua->__get("dinero");
                            }
                            $sumadinero =((int) $dinero) + $usua->__get("dinero");
                            $dao->ActualizarSaldo($_SESSION["Usuario"], $sumadinero);
                            echo "<b> Actualizado correctamente</b>";
                            echo "<br>";
                            if ($correo != "") {
                                $usuario = $dao->Obtener($correo);
                            } else {
                                $usuario = $dao->Obtener($_SESSION['Correo']);
                            }

                            $_SESSION['Nombre'] = $usuario->__get("nombre");
                            $_SESSION['Apellidos'] = $usuario->__get("apellidos");
                            $_SESSION['Contraseña'] = $usuario->__get("contraseña");
                            $_SESSION['Correo'] = $usuario->__get("correo");
                            $_SESSION['Dinero'] = $usuario->__get("dinero");
                            echo "<META HTTP-EQUIV='REFRESH' CONTENT='1;URL=http://reinodelossuenios.42web.io/vista/detallesusuario.php'> ";
                        }
                    }
                }
                if (isset($_POST["Cerrar_sesion"])) {
                    session_destroy();
                        setcookie("Usuario", $_SESSION["Usuario"], time() - 60); //destrulle la sesion que le recordaba
                    
                    
                    echo "<META HTTP-EQUIV='REFRESH' CONTENT='1;URL=http://reinodelossuenios.42web.io/'> ";
                }
                ?>
            </div>
        </div>
        <?php else : ?>
            <?php echo "<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=http://reinodelossuenios.42web.io/'> "; ?>
            <?php endif ; ?>
    </main>
</body>
<footer>
<script src="../js/validation.js"></script>
</footer>
</html>