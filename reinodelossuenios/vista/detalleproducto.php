<?php
session_start();
require_once "../modelo/DaoProductos.php";
$daoprod = new DaoProductos("epiz_34180798_reinodelossuenios");
if (isset($_GET["url"])) $url = $_GET["url"];
if (isset($_GET["action"])) $action = $_GET["action"];
//          echo $url;
//          echo "<br>";
//          echo $action;
// 
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalles del producto</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </script>
    <link href="../estilos/normalize.css" rel="stylesheet">
    <link href="../estilos/registro.css" rel="stylesheet">
</head>

<body>

    <main>

        <div class="container-sm">

            <h1 class="lang" key="registrar">Detalles del producto</h1>
            <div class="container form">
                <form id="form" action='<?php echo $_SERVER['PHP_SELF']."?url=".$url; ?>'  method='post' class="was-validated container2"  novalidate>
                    <div class="container2">
                        <?php
                        if (isset($_GET["url"])) $url = $_GET["url"];
                        //echo $url;
                        $producto = $daoprod->Obtenerporid($url);
                        if ($producto != null) {
                            //let product = production.next();
                            echo '<div id="product-list" class="container my-3"><div class="row"> ';
                            //console.log(product);

                            echo '<div class="col-lg-12 col-md-10>
                    <figure class="card card-product-grid card-lg"> 
                        <figcaption class="info-wrap">
                            <div class="row">
                            <h1>' . $producto->__get("nombre") . '</h1>
                            <img src="data:image/jpg;base64, ' . $producto->__get("imagen") . '" width="320px" height="320px">
    
                                <div class="col-md-12"><h3>Descripción</h3> <h4>' . $producto->__get("descripcion") . '</h4> </div>
                             <div class="col-md-12"><h3>Precio ' . $producto->__get("precio") . ' euros</h3> </div>
                             <div class="col-md-12"><h3>En stock ' . $producto->__get("cantidad") . ' unidades</h3> </div>
                            </div>
                        </figcaption>
                        
                    </figure>
                </div>';

                            echo '</div></div>';
                        } else {
                            echo "Error en la consulta, sin id recibido";
                        }

                        ?>
                        <div class="mb-3 cantidad camp">
                            <label for="cantidad">
                                <h2 class="lang" key="cantidad">Cantidad </h2>
                            </label>
                            <input id="cantidad" name="cantidad" type="number" pattern="[0-9]{1,5}" class="form-control campo" required onchange="fieldsCompleted('precio')">
                            <div class="invalid-feedback lang" key="pcantidad">
                                Ponga una cantidad
                            </div>
                        </div>
                    </div>
                    <?php if (isset($_SESSION["Usuario"])) : ?>
                   <button type="submit" class="lang btn seccion" name="Añadir" value="Añadir">Añadir</button>
                   <?php else : ?>
                    <h2>Para comprar inicie sesion</h2>
                    <?php endif; ?>
                </form>
                <button onclick="location.href='http://reinodelossuenios.42web.io'" name="Volver" class="btn seccion">Volver</button>

                <?php
                require_once "../modelo/DaoUsuarios.php";
                // require_once "display.php";
                $dao = new DaoUsuarios("epiz_34180798_reinodelossuenios");
                if (isset($_POST["Añadir"]) && $producto != null) {
                    $cantidad = $_POST["cantidad"];

                    if ($cantidad != "" && $cantidad > 0) {
                        if (!isset($_SESSION["Compra"])) {
                            $_SESSION["Compra"]=$url." ".$cantidad;
                        }else{
                            $_SESSION["Compra"] = $_SESSION["Compra"] . "," . $url." ".$cantidad;
                        }
                        
                        //    if(isset($_COOKIE["Compra"])){

                        //    }
                        //setcookie("Carrito", $_SESSION["Compra"], time() + 2592000); //caduca en un mes
                        echo "<b> Guardado</b>";
                    } else {
                        echo "<b>Ponga una cantidad valida<b>";
                    }
                }
                ?>
            </div>
        </div>
    </main>
</body>

</html>