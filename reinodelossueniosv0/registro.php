<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Registro</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </script>
    <link href="estilos/normalize.css" rel="stylesheet">
    <link href="estilos/registro.css" rel="stylesheet">
</head>

<body>

    <main>

        <div class="container-sm">

            <h1 class="lang" key="registrar">Registrese para continuar</h1>
            <div class="container">
            <form id="form" action='<?php echo $_SERVER['PHP_SELF']; ?>' method='post' class="was-validated container2" needs-validation novalidate>
                    <div class="mb-3 camp">
                                <h2 class="lang" key="nombre">Nombre </h2>
                            </label>
                            <input id="nombre" name="nombre" type="text" class="form-control campo" pattern="[0-9A-za-z]{4,12}" required onchange="fieldsCompleted('nombre')">
                            <div class="invalid-feedback lang" key="pnombre">
                                Ponga su nombre
                            </div>
                        </div>
                        <div class="mb-3 apellidos camp">
                            <label for="apellidos">
                                <h2 class="lang" key="apellidos">Apellidos </h2>
                            </label>
                            <input id="apellidos" name="apellidos" type="text" class="form-control campo" pattern="[0-9A-za-z]{4,24}[ ]{1}[0-9A-za-z]{4,24}" required onchange="fieldsCompleted('apellidos')">
                            <div class="invalid-feedback lang" key="papellidos">
                                Ponga sus apellidos
                            </div>
                        </div>
                        <div class="mb-3 contraseña camp">
                            <label for="contraseña">
                                <h2 class="lang" key="contraseña">Contraseña </h2>
                            </label>
                            <input id="contraseña" name="contraseña" type="password" pattern="[0-9A-za-z]{8,24}" class="form-control campo" required onchange="fieldsCompleted('contraseña')">
                            <div class="invalid-feedback lang" key="pcontraseña">
                                Ponga una contraseña (8 minimo, sin caracteres especiales)
                            </div>
                        </div>
                        <div class="mb-3 contraseña camp">
                            <label for="contraseña">
                                <h2 class="lang" key="contraseña">Confirmación Contraseña </h2>
                            </label>
                            <input id="contraseña2" name="contraseña2" type="password" pattern="[0-9A-za-z]{8,24}" class="form-control campo" required onchange="fieldsCompleted('contraseña')">
                            <div class="invalid-feedback lang" key="pcontraseña">
                                Confirma la contraseña
                            </div>
                        </div>
                        <div class="mb-3 email camp">
                            <label for="correo">
                                <h2 class="lang" key="correo">Correo </h2>
                            </label>
                            <input id="correo" name="correo" type="email" class="form-control campo" required onchange="fieldsCompleted('email')">
                            <div class="invalid-feedback lang" key="pemail">
                                Ponga su correo electronico
                            </div>
                        </div>

                        <div class="mb-3 telefono camp">
                            <label for="telefono">
                                <h2 class="lang" key="Telefono">Telefono</h2>
                            </label>
                            <input id="telefono" name="telefono" type="text" pattern="^(\+[0-9]{3})?\d{9}$" class="form-control campo_corto" required onchange="fieldsCompleted('telefono')">
                            <div class="invalid-feedback lang" key="ptelefono">
                                Ponga su telefono
                            </div>
                        </div>
                        <div class="mb-3 fechanac camp">
                            <label for="fechanac">
                                <h2 class="lang" key="fecha">Fecha nacimiento </h2>
                            </label>
                            <input id="fechanac" name="fechanac" type="date" class="form-control campo_corto" required onchange="fieldsCompleted('fechanac')">
                            <div class="invalid-feedback lang" key="pfecha">
                                Seleccione su fecha de nacimiento
                            </div>
                        </div>
                    </div>
                    <input id="recordar" type="checkbox" value="recordar"><label for="recordar" class="lang"
                        key="recordar"> Recordar usuario</label><br>
                        <button type="submit" class="lang" name="Enviar" value="Enviar">Enviar</button>
                    
                    
                    
                </form>
            </body>
            
            </html>
                </form>

            </div>
        </div>

        <?php
                    require_once "controlador/Daousuarios.php";
                    $dao = new DaoUsuarios("reinodelossuenios");
                    if (isset($_POST["Enviar"])) {
                        echo "<script>console.log('Rellena los campos')</script>";
                        $nombre = $_POST["nombre"];
                        $apellidos = $_POST["apellidos"];
                        $contraseña = $_POST["contraseña"];
                        $contraseña2 = $_POST["contraseña2"];
                        $correo = $_POST["correo"];
                        $telefono = $_POST["telefono"];
                        $fechanac = $_POST["fechanac"];
                        if (
                            $nombre != "" && $apellidos != "" && $contraseña != "" && $correo != "" && $telefono != ""
                            && $fechanac != ""
                        ) {
                            if ($contraseña != $contraseña2) {
                                echo "Error las claves son distintas";
                            } else {
                                //comprobamos que el usuario no exista
                                $usu = $dao->Obtener($correo);
                                if ($usu != null) {
                                    echo "El correo $correo ya esta en uso";
                                } else {
                                    //creamos una cadena inicial y final para que complemente a la clave
                                    $ini = "#-¿¡!";
                                    $fin = "?/&%)(";
                                    $usu = new Usuario();
                                    $contraseña = sha1($ini . $contraseña . $fin); //se cifra la clave introducida
                                    $usu->__set("nombre", $nombre);
                                    $usu->__set("contraseña", $contraseña);
                                    $usu->__set("apellidos", $apellidos);
                                    $usu->__set("correo", $correo);
                                    $usu->__set("fechanac", $fechanac);
                                    $usu->__set("telefono", $telefono);
                                    $usu->__set("dinero", 0);
                                    $dao->Insertar($usu);
                                    echo "<b> Usuario creado correctamente</b>";
                                    echo "<META HTTP-EQUIV='REFRESH' CONTENT='3;URL=http://reinodelossuenios.42web.io/inicio.html'> ";
                                }
                            }
                        }else{
                            
                            echo "RELLENE LOS CAMPOS";
                        }
                    }
                    ?>
</body>

</html>