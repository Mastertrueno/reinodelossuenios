<?php
session_start();
// require "../modelo/DaoProductos.php";
//                 $dao = new DaoProductos("epiz_34180798_reinodelossuenios");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link href="../estilos/normalize.css" rel="stylesheet">
    <link href="../estilos/inicio.css" rel="stylesheet">
</head>

<body onload="Userlogged()" class="row">
    <header class="row col-12">
        <img src="imagenes/logo.png" class="header_image" itemprop="logo" itemscope itemtype="https://creativecommons.org/licenses/by-sa/4.0/" alt="logo de la pagina">
        <div class="barra col-md-3">
            <label for="buscador" class="lang" key="buscador">Buscador</label>
            <input id="buscador" name="buscador" type="search">
           <button class="btn_buscador"><img src="imagenes/lupa.jpg" title="Buscar" class="nav_img" alt="lupa" onclick="Buscar()"/></button> 
            <!-- <a class="btn" href=""></a> -->
        </div>
        <!-- <div>

            <button onclick="mostrarInicio()">Inicio</button>

        </div> -->
        <nav class="col-md-3">
            <div class="menu">
                <button onclick="mostrarPopulares()" class="btn seccion">Populares</button>
                <button onclick="mostrarOfertas()" class="btn seccion">Ofertas</button>
                <button onclick="mostrarNovedades()" class="btn seccion">Novedades</button>
            </div>

            <?php if (isset($_SESSION["Usuario"]) && $_SESSION["Rol"] == "adm") : ?>
                <div class="adminmod">

                    <button class="admbuttons" onclick="location.href='vista/actualizarusu.php'">Actualizar usuario</button>
                    <button class="admbuttons" onclick="location.href='vista/actualizarusu.php'">Actualizar producto</button>
                    <button class="admbuttons" onclick="location.href='vista/guardaproductos.php'">Añadir producto</button>
                    <button class="admbuttons" onclick="location.href='vista/guardaproveedor.php'">Añadir proveedor</button>
                    <button class="admbuttons" onclick="location.href='vista/registroadmin.php'">Añadir usuario adm</button>
                </div>
            <?php endif; ?>

        </nav>
        <div class="sesion col-md-3">
            <?php if (isset($_SESSION["Usuario"])) : ?>
                <div id="sesionicon">
                <?php if (isset($_SESSION["Compra"])) : ?>
                <button onclick="location.href='vista/pagar.php'">Pagar</button>
                <?php endif; ?>
                    <a href="http://reinodelossuenios.42web.io/vista/detallesusuario.php"><img class="usu" src="imagenes/usuario.jpg" title="Datos Usuario" alt="Icono de usuario"></a>
                </div>
            <?php else : ?>
                <div id="sesionboton">
                    <button onclick="location.href='vista/registro.php'">Registrarse</button>
                    <button onclick="location.href='vista/login.php'">Entrar</button>
                </div>
            <?php endif; ?>
        </div>

    </header>
    <main class="col-10">
        <div class="populares" id="populares">
            <h1>Populares</h1>
            <?php
            // echo $product->__get("nombre");
            // echo "antes del foreach";
            // echo gettype($prods);
            // echo gettype($product);
            // foreach ($product as $producto) {
            //     //  echo "en el foreach";
            //     echo "<h2>" . $producto->__get("id") . "</h2>";
            //     echo "<h2>" . $producto->__get("nombre") . "</h2>";
            //     echo "<h2>" . $producto->__get("descripcion") . "</h2>";
            //     echo "<h2>" . $producto->__get("precio") . "</h2>";
            //     echo "<h2>" . $producto->__get("cantidad") . "</h2>";
            //     echo '<img src="data:image/jpg;base64,' . $producto->__get("imagen") . ' " width="160" height="160">';
            //     echo "<h2>" . $producto->__get("proveedor") . "</h2>";

            //     '<div id="product-list" class="container my-3"><div class="row"> </div></div>';
            //     echo "<div class>";
            //     echo "<h2>" . $producto->__get("nombre") . "</h2>";
            //     echo "<div class='producto'>";
            //     echo '<img src="data:image/jpg;base64,' . $producto->__get("imagen") . ' " width="160" height="160">';
            //     echo "<div>";
            //     echo "Precio " . $producto->__get("precio");
            //     echo "Disponibles " . $producto->__get("cantidad");
            //     echo "<p>" . $producto->__get("descripcion") . "</p>";
            //     echo "</div>";
            //     echo "</div>";
            //     echo "</div>";
            // }

            // echo '<div id="product-list" class="container"><div class="row"> </div></div>';
            //let product = production.next();
            echo '<div id="product-list" class="container my-3 "><div class="row"> ';
            foreach ($product as $producto) {
                //console.log(product);

                echo '<div class="col-lg-6 col-md-6">
				<figure class="card card-product-grid card-lg prod"> 
					<figcaption class="info-wrap">
						<div class="row">
                        <div class="col-md-12"> <a data-product="' . $producto->__get("nombre") . '" href="http://reinodelossuenios.42web.io/vista/detalleproducto.php?url=' . $producto->__get("id") . '" class="title"><h2>' . $producto->__get("nombre") . '</h2></a> </div>

						<a data-product="' . $producto->__get("nombre") . '" href="http://reinodelossuenios.42web.io/vista/detalleproducto.php?url=' . $producto->__get("id") . ' " class="img-wrap"><img src="data:image/jpg;base64, ' . $producto->__get("imagen") . '" width="160" height="160"></a>
                        <div class="col-md-8"> <h2>' . $producto->__get("precio") . ' euros</h2></div>

						</div>
					</figcaption>
					
				</figure>
			</div>';
            }
            echo '</div></div>';
            // echo $_SESSION['Usuario'];
            // echo "<br>";
            // echo $_SESSION['Nombre'];
            // echo "<br>";
            // echo $_SESSION['Apellidos'];
            // echo "<br>";
            // echo $_SESSION['Contraseña'];
            // echo "<br>";
            // echo $_SESSION['Correo'];
            // echo "<br>";
            // echo $_SESSION['Fechanac'];
            // echo "<br>";
            // echo "rol";
            // echo $_SESSION['Rol'];
            // echo "<br>";
            // echo $_SESSION['Dinero'];
            ?>
        </div>
        <div class="novedades" id="novedades">
            <h1>Novedades</h1>
            <?php
            $prod = $dao->Obtener($nombre);

            echo '<div id="product-list" class="container my-3 "><div class="row"> ';
            foreach ($product as $producto) {
                //console.log(product);

                echo '<div class="col-lg-6 col-md-6">
				<figure class="card card-product-grid card-lg prod"> 
					<figcaption class="info-wrap">
						<div class="row">
                        <div class="col-md-12"> <a data-product="' . $producto->__get("nombre") . '" href="http://reinodelossuenios.42web.io/vista/detalleproducto.php?url=' . $producto->__get("id") . '" class="title"><h2>' . $producto->__get("nombre") . '</h2></a> </div>

						<a data-product="' . $producto->__get("nombre") . '" href="http://reinodelossuenios.42web.io/vista/detalleproducto.php?url=' . $producto->__get("id") . ' " class="img-wrap"><img src="data:image/jpg;base64, ' . $producto->__get("imagen") . '" width="160" height="160"></a>
                        <div class="col-md-8"> <h2>' . $producto->__get("precio") . ' euros</h2></div>

						</div>
					</figcaption>
					
				</figure>
			</div>';
            }
            echo '</div></div>';
            ?>
        </div>
        <div class="ofertas" id="ofertas">
            <h1>Ofertas</h1>
            <?php
            // echo '<div id="product-list" class="container"><div class="row"> ';
            //let product = production.next();
            echo '<div id="product-list" class="container my-3 "><div class="row"> ';
            foreach ($product as $producto) {
                //console.log(product);

                echo '<div class="col-lg-6 col-md-6">
				<figure class="card card-product-grid card-lg prod"> 
					<figcaption class="info-wrap">
						<div class="row">
                        <div class="col-md-12"> <a data-product="' . $producto->__get("nombre") . '" href="http://reinodelossuenios.42web.io/vista/detalleproducto.php?url=' . $producto->__get("id") . '" class="title"><h2>' . $producto->__get("nombre") . '</h2></a> </div>

						<a data-product="' . $producto->__get("nombre") . '" href="http://reinodelossuenios.42web.io/vista/detalleproducto.php?url=' . $producto->__get("id") . ' " class="img-wrap"><img src="data:image/jpg;base64, ' . $producto->__get("imagen") . '" width="160" height="160"></a>
                        <div class="col-md-8"> <h2>' . $producto->__get("precio") . ' euros</h2></div>

						</div>
					</figcaption>
					
				</figure>
			</div>';
            }
            echo '</div></div>';
            ?>
        </div>
        <?php if (isset($_POST["buscador"])) : ?>
            <div class="buscado" id="buscado">
                <h1>Resultados</h1>
                <?php
                $buscador = $_POST["buscador"];
                $prod = $dao->Buscar($buscador);
                echo '<div id="product-list" class="container my-3 "><div class="row"> ';
                foreach ($product as $producto) {
                    //console.log(product);

                    echo '<div class="col-lg-6 col-md-6">
				<figure class="card card-product-grid card-lg prod"> 
					<figcaption class="info-wrap">
						<div class="row">
                        <div class="col-md-12"> <a data-product="' . $producto->__get("nombre") . '" href="' . $producto->__get("id") . '" class="title"><h2>' . $producto->__get("nombre") . '</h2></a> </div>

						<a data-product="' . $producto->__get("nombre") . '" href="' . $producto->__get("id") . ' " class="img-wrap"><img src="data:image/jpg;base64, ' . $producto->__get("imagen") . '" width="160" height="160"></a>
                        <div class="col-md-8"> <h2>' . $producto->__get("precio") . ' euros</h2></div>

						</div>
					</figcaption>
					
				</figure>
			</div>';
                }
                ?>
            </div>
        <?php else : ?>
            <div id="vacio">
                <h2>No se han encontrado productos relacionados</h2>
            </div>
        <?php endif; ?>

    </main>
    <aside class="col-2">
        a
    </aside>


</body>
<footer>


    <div class="redes">
        <p id="autor" class="lang" key="autor">Autor: Ivan Elizalde Moreno<br>
        <p id="soporte" class="lang" key="telefono">Soporte: 6667584999<br>
        <p id="telefono" class="lang" key="telefono">Telefono: 6667584999<br>
        <p id="revi" class="lang" key="revisado">Revisado: 12/05/2023<br>
    </div>
    <script src="../js/main.js"></script>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <!--<script src="./VideoSystemApp.js" type="module"></script>
    <script src="vista/view.js"></script>
    <script src="js/Category.js"></script>
    <script src="js/Country.js"></script>
    <script src="js/Supplier.js"></script>
    <script src="js/Product.js"></script>
    <script src="js/Allergen.js"></script>
    <script src="js/AllergenProduct.js"></script>
    <script src="js/User.js"></script>
    <script src="js/Store.js"></script>
    <script src="js/validation.js"></script>
    <script src="js/cookies.js"></script>
    <script src="view/view.js"></script> -->
</footer>

</html>