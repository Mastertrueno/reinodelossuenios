<?php
session_start();
require_once "../modelo/DaoProductos.php";
require_once "../modelo/DaoPedidos.php";
require_once "../modelo/DaoUsuarios.php";

$daoprod = new DaoProductos("epiz_34180798_reinodelossuenios");
$daoped = new DaoPedidos("epiz_34180798_reinodelossuenios");
$daousu = new DaoUsuarios("epiz_34180798_reinodelossuenios");


$total = 0;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de pago</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link href="../estilos/normalize.css" rel="stylesheet">
    <link href="../estilos/inicio.css" rel="stylesheet">
</head>

<body>
    <div class="form">
        <form action='<?php echo $_SERVER['PHP_SELF']; ?>' method='post' class="container2 needs-validation" novalidate>

            <?php
            // echo $_SESSION["Compra"];
            $productos = explode(",",  $_SESSION["Compra"]);
            echo '<div id="product-list" class="container my-3 "><div class="row"> ';
            foreach ($productos as $producto) {
                //console.log(product);
                // echo $producto;
                $campos = explode(" ",  $producto);
                $cont = 0;
                foreach ($campos as $producto) {
                    if ($cont == 0) {
                        $id = $producto;
                        // echo "id ".$id;
                        // echo "<br>";
                        $cont++;
                    } else {
                        $cantidad = $producto;

                        // echo "Cantidad ".$cantidad;
                    }
                }
                $prod = $daoprod->Obtenerporid($id);
                echo '<div class="col-lg-4 col-md-4">
     <figure class="card card-product-grid card-lg"> 
	 				<figcaption class="info-wrap">
	 					<div class="row">
                         <h1>' . $prod->__get("nombre") . '</h1>
	 					<img src="data:image/jpg;base64, ' . $prod->__get("imagen") . '" width="160" height="160">

	 						<div class="col-md-12"><h3>Descripción</h3> <h4>' . $prod->__get("descripcion") . '</h4> </div>
                             
                             <div class="col-md-12"><h3>Precio ' . $prod->__get("precio") . ' euros</h3> </div>
                             <div class="col-md-12"><h3>En stock ' . $prod->__get("cantidad") . ' unidades</h3> </div>
                             <div class="col-md-12"><h3>A comprar ' . $cantidad . ' unidades</h3> </div>
	 					</div>
                        
	 				</figcaption>
                       <button type="submit" class="lang btn seccion" name="Quitar" value="' . $id . '">Quitar</button>
	 			</figure>
	 		</div>';

                $total = $total + $cantidad * $prod->__get("precio");
            }
            echo "<div><h3>Total $total</h3></div>";
            echo "<div><h3>Tu Saldo $_SESSION[Dinero]</h3></div>";
            echo '</div></div>';
            ?>
            <button type="submit" class="lang btn seccion" name="Comprar" value="Comprar">Comprar</button>
        </form>
        <button onclick="location.href='http://reinodelossuenios.42web.io'" class="btn seccion">Volver</button>
    </div>

    <?php
    if (isset($_POST["Comprar"])) {
        foreach ($productos as $producto) {
            //console.log(product);
            // echo $producto;
            $campos = explode(" ",  $producto);
            $cont = 0;
            foreach ($campos as $producto) {
                if ($cont == 0) {
                    $id = $producto;
                    // echo "id ".$id;
                    // echo "<br>";
                    $cont++;
                } else {
                    $cantidad = $producto;

                    // echo "Cantidad ".$cantidad;
                }
            }
            $prod = $daoprod->Obtenerporid($id);
            $cantact = $prod->__get("cantidad");

            if (($cantact - $cantidad) >= 0) {
                $valido = true;
            } else {
                $valido = false;
                break;
            }
        }
        if ($valido) {
            foreach ($productos as $producto) {
                //console.log(product);
                // echo $producto;
                $campos = explode(" ",  $producto);
                $cont = 0;
                foreach ($campos as $producto) {
                    if ($cont == 0) {
                        $id = $producto;
                        // echo "id ".$id;
                        // echo "<br>";
                        $cont++;
                    } else {
                        $cantidad = $producto;

                        // echo "Cantidad ".$cantidad;
                    }
                }
                $prod = $daoprod->Obtenerporid($id);
                $cantact = $prod->__get("cantidad");
                $restantes = $cantact - $cantidad;
                $nuevoprecio = $_SESSION["Dinero"] - $total;
                if ($nuevoprecio >= 0) {
                    $ped = new Pedido();
                    $time = time();

                    $fecha = date("Y-m-d", $time);
                    $ped->__set("idusuario", $_SESSION["Usuario"]);
                    $ped->__set("fecha", $fecha);
                    $ped->__set("idproducto", $id);
                    $ped->__set("cantidad", $cantidad);
                    $ped->__set("precio_producto", $prod->__get("precio"));
                    $ped->__set("total", $cantidad * $prod->__get("precio"));
                    // echo "<br>";
                    // echo "idusuario " . $ped->__get("idusuario");
                    // echo "<br>";
                    // echo "Como guardar fecha 2023-06-05 ";
                    // echo "fecha " . $ped->__get("fecha");
                    // echo "<br>";
                    // echo "idprod ", $ped->__get("idproducto");
                    // echo "<br>";
                    // echo "cantidad" . $ped->__get("cantidad");
                    // echo "<br>";
                    // echo "Precio producto " . $ped->__get("precio_producto");
                    // echo "<br>";
                    // echo "total" . $ped->__get("total");
                    $daoprod->ActualizarStock($id, $restantes);
                    $daoped->Insertar($ped);
                    echo "<h2><b>Compra realizada, Redirigiendo a la pagina principal</b></h2>";
                    echo "<META HTTP-EQUIV='REFRESH' CONTENT='5;URL=http://reinodelossuenios.42web.io/'> ";
                    unset($_SESSION["Compra"]);
                    $daousu->ActualizarSaldo($_SESSION["Usuario"], $nuevoprecio);
                    $_SESSION["Dinero"] = $nuevoprecio;
                } else {
                    echo "<h2><b>Saldo insuficiente</b></h2>";
                }
            }
        } else {
            echo "<h2><b>No ha suficientes unidades de uno o mas articulos de compra</b></h2>";
        }
    }
    if (isset($_POST["Quitar"])) {
        $iddado = $_POST["Quitar"];
        $_SESSION["Compra"] = "";
        // echo "la sesion ".$_SESSION["Compra"];
        // echo "<br>";
        foreach ($productos as $producto) {
            //console.log(product);
            // echo $producto;
            $campos = explode(" ",  $producto);
            $cont = 0;
            foreach ($campos as $producto) {
                if ($cont == 0) {
                    $id = $producto;
                    // echo "id ".$id;
                    // echo "<br>";
                    $cont++;
                } else {
                    $cantidad = $producto;
                    // echo "Cantidad ".$cantidad;
                }
            }
            // echo $id;
            // echo "<br>";
            // echo $cantidad;
            if ($id != $iddado) {
                if ($_SESSION["Compra"] == "") {
                    $_SESSION["Compra"] = $id . " " . $cantidad;
                } else {
                    $_SESSION["Compra"] = $_SESSION["Compra"] . "," . $id . " " . $cantidad;
                }
            }
        }
        // echo "<br>";
        // echo "la sesion al final ".$_SESSION["Compra"];
        if ($_SESSION["Compra"] == "") {
            unset($_SESSION["Compra"]);
            echo "<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=http://reinodelossuenios.42web.io/'> ";
        } else {
            echo "<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=http://reinodelossuenios.42web.io/vista/pagar.php'> ";
        }
    }
    ?>
</body>
<footer>
<script src="../js/validation.js"></script>
</footer>
</html>