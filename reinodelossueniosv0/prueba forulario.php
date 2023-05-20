<html>

<body>
    <form name='f1' method='post' action='<?php echo $_SERVER['PHP_SELF']; ?>'>
        <fieldset>
            <legend>Enviar de usuarios</legend>
            Nombre Usuario <input id="nombre" name="nombre" type="text" class="form-control campo" pattern="[0-9A-za-z]{4,12}"><br>
            apellidos<input id="apellidos" name="apellidos" type="text" class="form-control campo" pattern="[0-9A-za-z]{4,24}" required onchange="fieldsCompleted('apellidos')"><br>
            contraseña<input id="contraseña" name="contraseña" type="password" pattern="[0-9A-za-z]{8,24}" class="form-control campo" required onchange="fieldsCompleted('contraseña')"><br>
            Repita contraseña <input id="contraseña2" name="contraseña2" type="password" pattern="[0-9A-za-z]{8,24}" class="form-control campo" required onchange="fieldsCompleted('contraseña')"><br>
            correo <input id="correo" name="correo" type="email" class="form-control campo" required onchange="fieldsCompleted('email')"><br>
           telefono <input id="telefono" name="telefono" type="text" pattern="^(\+[0-9]{3})?\d{9}$" class="form-control campo_corto" required onchange="fieldsCompleted('telefono')"><br>
           fecha nacimiento<input id="fechanac" name="fechanac" type="date" class="form-control campo_corto" required onchange="fieldsCompleted('fechanac')"><br>
           <input type='submit' name='Enviar' value='Enviar'>

        </fieldset>

    </form>

    <?php

require_once "controlador/Daousuarios.php";

    $dao = new DaoUsuarios("reinodelossuenios");

    if (isset($_POST["Enviar"])) {
        $nombre = $_POST["nombre"];
                        $apellidos = $_POST["apellidos"];
                        $contraseña = $_POST["contraseña"];
                        $contraseña2 = $_POST["contraseña2"];
                        $apellidos = $_POST["apellidos"];
                        $correo = $_POST["correo"];
                        $telefono = $_POST["telefono"];
                        $fechanac = $_POST["fechanac"];
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
            }
        }
    }
