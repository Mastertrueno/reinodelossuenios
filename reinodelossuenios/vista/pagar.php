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
    <form action='<?php echo $_SERVER['PHP_SELF']; ?>' method='post' class="was-validated container2" needs-validation novalidate>

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
	 					</div>
                        
	 				</figcaption>
					
	 			</figure>
	 		</div>';
            $total = $total + $cantidad * $prod->__get("precio");
        }
        echo "<div><h3>Total $total</h3></div>";
        echo '</div></div>';
        ?>
        <button type="submit" class="lang btn seccion" name="Comprar" value="Comprar">Comprar</button>
    </form>
    <button onclick="location.href='http://reinodelossuenios.42web.io'" class="btn seccion">Volver</button>
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
            echo "1 antes de obtener por id";
            $prod = $daoprod->Obtenerporid($id);
            $cantact = $prod->__get("cantidad");
            if (($cantact - $cantidad) >= 0) {
                $valido = true;
            } else {
                $valido = false;
                break;
            }
        }
        if ($valido = true) {
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
                echo "1 antes de obtener por id en valido";
                $prod = $daoprod->Obtenerporid($id);
                $cantact = $prod->__get("cantidad");
                $restantes = $cantact - $cantidad;
                $daoprod->ActualizarStock($id, $restantes);
            }
            $nuevoprecio = $_SESSION["Dinero"] - $total;
            if ($nuevoprecio >= 0) {
                $ped = new Pedido();
                $time = time();

                $fecha = date("d-m-Y (H:i:s)", $time);
                $ped->__set("idpedido", $_SESSION["Usuario"]);
                $ped->__set("fecha", $fecha);
                $ped->__set("idproducto", $idproducto);
                $ped->__set("cantidad", $cantidad);
                $ped->__set("precio_producto", $prod->__get("precio"));
                $ped->__set("total", $cantidad * $prod->__get("precio"));
                $daoped->Insertar($ped);
                $daousu->ActualizarSaldo($_SESSION["Usuario"], $nuevoprecio);
            } else {
                echo "Saldo insuficiente";
            }
        }
    }
    ?>
</body>

</html>