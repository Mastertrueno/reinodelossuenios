<?php
session_start();

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Registro por administrador</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </script>
    <link href="../estilos/normalize.css" rel="stylesheet">
    <link href="../estilos/registro.css" rel="stylesheet">
</head>

<body>

    <main>

    <?php if (isset($_SESSION["Usuario"]) && $_SESSION["Rol"]=="adm") : ?>

        <div class="container-sm">

            <h1 class="lang" key="registrar">Registrese para continuar</h1>
            <div class="container form">
                <form id="form" action='<?php echo $_SERVER['PHP_SELF']; ?>' method='post' class="needs-validation container2" novalidate>
                    <div class="container2">
                        <div class="mb-3 camp">
                            <label for="nombre ">
                                <h2 class="lang" key="nombre">Nombre </h2>
                            </label>
                            <input id="nombre" name="nombre" type="text" class="form-control campo" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{4,12}" required>
                            <div class="invalid-feedback lang" key="pnombre">
                                Ponga su nombre
                            </div>
                        </div>
                        <div class="mb-3 apellidos camp">
                            <label for="apellidos">
                                <h2 class="lang" key="apellidos">Apellidos </h2>
                            </label>
                            <input id="apellidos" name="apellidos" type="text" class="form-control campo" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{4,24}[ ]{1}[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{4,24}" required>
                            <div class="invalid-feedback lang" key="papellidos">
                                Ponga sus apellidos
                            </div>
                        </div>
                        <div class="mb-3 contraseña camp">
                            <label for="contraseña">
                                <h2 class="lang" key="contraseña">Contraseña </h2>
                            </label>
                            <input id="contraseña" name="contraseña" type="password" pattern="[0-9A-za-z]{8,24}" class="form-control campo" required>
                            <div class="invalid-feedback lang" key="pcontraseña">
                                Ponga una contraseña (8 minimo, sin caracteres especiales)
                            </div>
                        </div>
                        <div class="mb-3 contraseña camp">
                            <label for="contraseña">
                                <h2 class="lang">Confirmación Contraseña </h2>
                            </label>
                            <input id="contraseña2" name="contraseña2" type="password" pattern="[0-9A-za-z]{8,24}" class="form-control campo" required>
                            <div class="invalid-feedback lang" key="pcontraseña">
                                Confirma la contraseña
                            </div>
                        </div>
                        <div class="mb-3 email camp">
                            <label for="correo">
                                <h2 class="lang" key="correo">Correo </h2>
                            </label>
                            <input id="correo" name="correo" type="email" class="form-control campo" required>
                            <div class="invalid-feedback lang" key="pemail">
                                Ponga su correo electronico
                            </div>
                        </div>

                        <div class="mb-3 telefono camp">
                            <label for="telefono">
                                <h2 class="lang" key="Telefono">Telefono</h2>
                            </label>
                            <input id="telefono" name="telefono" type="text" pattern="^(\+[0-9]{3})?\d{9}$" class="form-control campo_corto" required>
                            <div class="invalid-feedback lang" key="ptelefono">
                                Ponga su telefono
                            </div>
                        </div>
                        <div class="mb-3 fechanac camp">
                            <label for="fechanac">
                                <h2 class="lang" key="fecha">Fecha nacimiento </h2>
                            </label>
                            <input id="fechanac" name="fechanac" type="date" class="form-control campo_corto" required>
                            <div class="invalid-feedback lang" key="pfecha">
                                Seleccione su fecha de nacimiento
                            </div>
                        </div>
                        <div class="mb-3 rol camp">
                            <label for="rol">
                                <h2 class="lang" key="rol">Rol </h2>
                            </label>
                            <select name="rol" required>
                                <option value="user">Usuario</option>
                                <option value="adm">Administrador</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="lang btn seccion" name="Enviar" value="Enviar">Enviar</button>

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
                    $contraseña2 = $_POST["contraseña2"];
                    $correo = $_POST["correo"];
                    $rol = $_POST["rol"];
                    $telefono = $_POST["telefono"];
                    $fechanac = $_POST["fechanac"];
                    if (
                        $nombre != "" && $apellidos != "" && $contraseña != "" && $correo != "" && $telefono != ""
                        && $fechanac != ""
                    ) {
                        if ($contraseña != $contraseña2) {
                            echo "<b>Error las claves son distintas</b>";
                        } else {
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
                                $usu->__set("fechanac", $fechanac);
                                $usu->__set("rol", $rol);
                                $usu->__set("telefono", $telefono);
                                $usu->__set("dinero", 0);
                                $dao->Insertar($usu);
                                echo "<b> Usuario creado correctamente</b>";
                            }
                        }
                    } else {
                        echo "<b>RELLENE LOS CAMPOS<b>";
                    }
                }
                ?>
            </div>
        </div>
        <?php else : ?>
            <?php // echo "<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=http://reinodelossuenios.42web.io/'> "; ?>
            <?php endif ; ?>
    </main>
</body>
<footer>
<script src="../js/validation.js"></script>
</footer>
</html>