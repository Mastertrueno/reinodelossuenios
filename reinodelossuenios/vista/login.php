<!DOCTYPE html>
<?php
//session_start();

?>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de inicio de sesion</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </script>
    <link href="../estilos/normalize.css" rel="stylesheet">
    <link href="../estilos/registro.css" rel="stylesheet">
</head>

<body>

    <main>

        <div class="container-sm">

            <h1 class="lang" key="registrar">Inicie sesión para continuar</h1>
            <div class="container form">
                <form action='<?php echo $_SERVER['PHP_SELF']; ?>' method='post' class="was-validated container2" needs-validation novalidate>
                    <div class="container2 ">
                        <div class="mb-3 email camp">
                            <label for="correo">
                                <h2 class="lang" key="correo">Correo </h2>
                            </label>
                            <input id="correo" name="correo" type="email" class="form-control campo" required onchange="fieldsCompleted('correo')">
                            <div class="invalid-feedback lang" key="pcorreo">
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
                        <input id="recordar" type="checkbox" value="recordar" name="recordar"><label for="recordar" class="lang" key="recordar"> Recordar usuario</label><br>
                        <button type="submit" class="lang btn seccion" name="Entrar" value="Entrar">Entrar</button>

                    </div>

                </form>
                <button onclick="location.href='http://reinodelossuenios.42web.io'" class="btn seccion">Volver</button>
                <?php
                require_once "../modelo/DaoUsuarios.php";

                $dao = new DaoUsuarios("epiz_34180798_reinodelossuenios");
                if (isset($_POST["Entrar"])) {
                    $contraseña = $_POST["contraseña"];
                    $correo = $_POST["correo"];

                    if (
                        $contraseña != "" && $correo != ""
                    ) {
                        $ini = "#-¿¡!";
                        $fin = "?/&%)";

                        $contraseña = sha1($ini . $contraseña . $fin);

                        //Comprobamos si el login es correcto

                        $usu = $dao->Obtener($correo);
                        //  echo $usu->__get("contraseña");
                        //  echo "<br>";
                        //  echo $contraseña;

                        if (($usu == NULL) || ($usu->__get("contraseña") != $contraseña)) {
                            echo "<b>ERROR, usuario/contraseña incorrectos </b>";
                        } else {

                            echo "<b> Login correcto</b>";
                            echo "<br>";
                            session_start();
                            echo "<b>Redirigiendo a la pagina principal</b>";
                            $_SESSION['Usuario'] = $usu->__get("idusuario");
                            $_SESSION['Nombre'] = $usu->__get("nombre");
                            $_SESSION['Apellidos'] = $usu->__get("apellidos");
                            $_SESSION['Contraseña'] = $usu->__get("contraseña");
                            $_SESSION['Correo'] = $usu->__get("correo");
                            $_SESSION['Fechanac'] = $usu->__get("fechanac");
                            $_SESSION['Rol'] = $usu->__get("rol");
                            $_SESSION['Dinero'] = $usu->__get("dinero");


        //                     $campos = explode(" ", $_SESSION["Compra"]);
        // foreach ($campos as $campo) {
        //     echo "<td>$campo</td>";
        // }
        if(isset($_POST['recordar'])){
            setcookie("Usuario",$_SESSION["Usuario"],time()+2592000);//1 mes
        }
                            //$_SESSION["Compra"]=$usu->__get("idusuario");
                            echo "<META HTTP-EQUIV='REFRESH' CONTENT='1;URL=http://reinodelossuenios.42web.io/'> ";
                        }
                    }
                }
                ?>
            </div>
        </div>
</body>

</html>