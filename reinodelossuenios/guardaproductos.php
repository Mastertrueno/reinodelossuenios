<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Registro</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </script>
    <link href="estilos/normalize.css" rel="stylesheet">
    <link href="estilos/registro.css" rel="stylesheet">
</head>

<body>

    <main>

        <div class="container-sm">

            <h1 class="lang" key="registrar">Registrese para continuar</h1>
            <div class="container">
                <form action='<?php echo $_SERVER['PHP_SELF']; ?>' method='post' class="was-validated container2" needs-validation novalidate>
                    <div class="container2">
                        <div class="mb-3 camp">
                            <label for="nombre ">
                                <h2 class="lang" key="nombre">Nombre </h2>
                            </label>
                            <input id="nombre" name="nombre" type="text" class="form-control campo" pattern="[0-9A-za-z]{4,12}" required onchange="fieldsCompleted('nombre')">
                            <div class="invalid-feedback lang" key="pnombre">
                                Ponga el nombre del producto
                            </div>
                        </div>
                        <div class="mb-3 descripcion camp">
                            <label for="descripcion">
                                <h2 class="lang" key="descripcion">Descripcion </h2>
                            </label>
                            <textarea  id="descripcion" name="descripcion" type="tex" class="form-control campo">
                            </textarea>
                            <div class="invalid-feedback lang" key="pdescripcion">
                                Ponga sus descripcion
                            </div>
                        </div>
                        <div class="mb-3 precio camp">
                            <label for="precio">
                                <h2 class="lang" key="precio">Precio </h2>
                            </label>
                            <input id="precio" name="precio" type="number" pattern="[0-9]{1,5}" class="form-control campo" required onchange="fieldsCompleted('precio')">
                            <div class="invalid-feedback lang" key="pprecio">
                                Ponga un precio 
                            </div>
                        </div>

                        <div class="mb-3 cantidad camp">
                            <label for="cantidad">
                                <h2 class="lang" key="cantidad">Cantidad </h2>
                            </label>
                            <input id="cantidad" name="cantidad" type="number" pattern="[0-9]{1,5}" class="form-control campo" required onchange="fieldsCompleted('precio')">
                            <div class="invalid-feedback lang" key="pcantidad">
                                Ponga una cantidad 
                            </div>
                        </div>
                        <div class="mb-3 foto camp">
                            <label for="foto">
                                <h2 class="lang" key="fecha">Foto</h2>
                            </label>
                            <input id="foto" name="foto" type="date" class="form-control campo_corto" required onchange="fieldsCompleted('foto')">
                            <div class="invalid-feedback lang" key="pfecha">
                                Seleccione su fecha de nacimiento
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="lang" name="Guardar" value="Guardar">Guardar</button>


                </form>
                <?php
                require_once "controlador/Daousuarios.php";

                $dao = new DaoUsuarios("reinodelossuenios");
                if (isset($_POST["Guardar"])) {
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
                    }
                }
                ?>
            </div>
        </div>
    </main>
</body>

</html>