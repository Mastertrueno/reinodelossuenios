<?php
session_start();
require_once "../modelo/DaoProductos.php";
                $dao = new DaoProductos("epiz_34180798_reinodelossuenios");
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscador</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link href="../estilos/normalize.css" rel="stylesheet">
    <link href="../estilos/inicio.css" rel="stylesheet">
</head>
<body>
<img src="imagenes/logo.png" class="header_image" itemprop="logo" 
itemscope itemtype="https://creativecommons.org/licenses/by-sa/4.0/" alt="logo de la pagina">
<img src="imagenes/logo.png" class="header_image" itemprop="logo" onclick="location.href='http://reinodelossuenios.42web.io'"
itemscope itemtype="https://creativecommons.org/licenses/by-sa/4.0/" alt="logo de la pagina">
<?php
if (isset($_GET["url"])) $url = $_GET["url"];
echo $url;
echo "hola";
echo $_SESSION["Buscar"];
$prod = $dao->Buscar($_SESSION["Buscar"]);
echo '<div class="novedades" id="novedades">
            <h1>Resultados</h1>';

            echo '<div id="product-list" class="container my-3 "><div class="row"> ';
            echo $prod;
            foreach ($prod as $producto) {
                //console.log(product);

                echo '<div class="col-lg-6 col-md-6">
				<figure class="card card-product-grid card-lg prod"> 
					<figcaption class="info-wrap">
						<div class="row">
                        <div class="col-md-12"> 
                            <a data-product="' . $producto->__get("nombre") . '" href="http://reinodelossuenios.42web.io/vista/detalleproducto.php?url=' . $producto->__get("id") . '" class="title"><h2>' . $producto->__get("nombre") . '</h2></a>
                         </div>

						<a data-product="' . $producto->__get("nombre") . '" href="http://reinodelossuenios.42web.io/vista/detalleproducto.php?url=' . $producto->__get("id") . ' " class="img-wrap"><img src="data:image/jpg;base64, ' . $producto->__get("imagen") . '" width="160" height="160">
                        </a>
                        <div class="col-md-8"> <h2>' . $producto->__get("precio") . ' euros</h2></div>

						</div>
					</figcaption>
					
				</figure>
			</div>';
            }
            echo '</div></div>';
            ?>
        </div>
</body>
</html>