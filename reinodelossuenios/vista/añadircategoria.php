<!DOCTYPE html>
<html lang="es">
<?php
session_start();

require_once "../modelo/DaoCategorias.php";
?>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario para guardar productos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </script>
    <link href="../estilos/normalize.css" rel="stylesheet">
    <link href="../estilos/registro.css" rel="stylesheet">
</head>

<body>

    <main>
    <?php if (isset($_SESSION["Usuario"]) && $_SESSION["Usuario"]=="adm") : ?>

        <div class="container-sm">

            <h1 class="lang" key="registrar">Añada un producto</h1>
            <div class="container form">
                <form action='<?php echo $_SERVER['PHP_SELF']; ?>' enctype="multipart/form-data" method='post' class="was-validated container2" needs-validation novalidate>
                    <div class="container2">
                        <div class="mb-3 camp">
                            <label for="nombre ">
                                <h2 class="lang" key="nombre">Nombre </h2>
                            </label>
                            <input id="nombre" name="nombre" type="text" class="form-control campo" >
                            
                        </div>
                        <button type="submit" class="lang btn seccion" name="Guardar" value="Guardar">Guardar</button>
                    </div>
                    

                </form>
                <button onclick="location.href='http://reinodelossuenios.42web.io'" class="btn seccion">Volver</button>
                </div>

                <?php
                $dao = new DaoCategorias("epiz_34180798_reinodelossuenios");

                if (isset($_POST["Guardar"])) {
                    $nombre = $_POST["nombre"];

                    if ($nombre != "" ) {
                        
                            //comprobamos que el usuario no exista
                            $prod = $dao->Obtener($nombre);
                            if ($prod != null) {
                                echo "<b>El producto $nombre ya existe</b>";
                            } else {
                                //creamos una cadena inicial y final para que complemente a la clave
                                $prod = new Categoria();
                                $prod->__set("nombre", $nombre);
                                $dao->Insertar($prod);
                                echo "<b>Producto creado correctamente</b>";
                                //echo "<META HTTP-EQUIV='REFRESH' CONTENT='5;URL=http://reinodelossuenios.42web.io/'> ";
                            }
                    } else {
                        }
                    }
                
                ?>
            </div>
        </div>
        <?php else : ?>
            <?php echo "<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=http://reinodelossuenios.42web.io/'> "; ?>
            <?php endif ; ?>
    </main>
</body>

</html>