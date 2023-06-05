<!DOCTYPE html>
<html lang="es">
<?php
session_start();
session_abort();

require_once "../controlador/DaoProveedor.php";
$daoprov = new DaoProveedor("epiz_34180798_reinodelossuenios");
?>

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

            <h1 class="lang" key="registrar">Pagina para añadir Proveedores</h1>
            <div class="container">
                <form action='<?php echo $_SERVER['PHP_SELF']; ?>' enctype="multipart/form-data" method='post' class="was-validated container2" needs-validation novalidate>

                    <button type="submit" class="lang" name="Añadir" value="Añadir">Añadir Proveedor</button>
                </form>
                <button onclick="location.href='../index.html'">Volver</button>
                <?php

                if (isset($_POST["Añadir"])) {


                    $daoprov->Insertar();
                    echo "<b>Proveedor creado correctamente</b>";
                    //echo "<META HTTP-EQUIV='REFRESH' CONTENT='5;URL=http://reinodelossuenios.42web.io/'> ";
                }
                ?>
            </div>
        </div>
    </main>
</body>

</html>