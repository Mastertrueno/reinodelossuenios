<!DOCTYPE html>
<?php
session_start();

?>
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
            <h1 class="lang" key="registrar">Inicie sesión para continuar</h1>
            <div class="container">
                <form action='<?php echo $_SERVER['PHP_SELF']; ?>' method='post' class="was-validated container2" needs-validation novalidate>
                    <div class="container2">
                        <div class="mb-3 email camp">
                            <label for="correo">
                                <h2 class="lang" key="correo">Correo </h2>
                            </label>
                            <input id="correo" name="correo" type="email" class="form-control campo" required onchange="fieldsCompleted('email')">
                            <div class="invalid-feedback lang" key="pemail">
                                Ponga su correo electronico
                            </div>
                        </div>
                        <div class="mb-3 contraseña camp">
                            <label for="contraseña">
                                <h2 class="lang" key="contraseña">Contraseña </h2>
                            </label>
                            <input id="contraseña" name="contraseña" type="password" pattern="[0-9A-za-z]{8,24}" class="form-control campo" required onchange="fieldsCompleted('contraseña')">
                            <div class="invalid-feedback lang" key="pcontraseña">
                                Ponga una contraseña
                            </div>
                        </div>
                        <input id="recordar" type="checkbox" value="recordar"><label for="recordar" class="lang" key="recordar"> Recordar usuario</label><br>
                        <button type="submit" class="lang" name="Entrar" value="Entrar">Entrar</button>
                    </div>
                </form>
                <?php
                require_once "controlador/Daousuarios.php";
                $dao = new DaoUsuarios("reinodelossuenios");
                if (isset($_POST["Entrar"])) {
                    $contraseña = $_POST["contraseña"];
                    $correo = $_POST["correo"];

                    if (
                        $contraseña != "" && $correo != ""
                    ) {
                        $ini = "#-¿¡!";
                        $fin = "?/&%)(";

                        $contraseña = sha1($ini . $contraseña . $fin);

                        //Comprobamos si el login es correcto

                        $usu = $dao->Obtener($correo);

                        if (($usu == NULL) || ($usu->__get("contraseña") != $contraseña)) {
                            echo "<b>ERROR, usuario/contraseña incorrectos </b>";
                        } else {

                            echo "<b> Login correcto</b>";

                            $_SESSION['Usuario'] = $usu;

                            //echo "<META HTTP-EQUIV='REFRESH' CONTENT='3;URL=http://localhost/reinodelossuenios/inicio.html'> ";
                        }
                    }
                }
                ?>
            </div>
        </div>
</body>

</html>