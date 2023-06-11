<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link href="../estilos/normalize.css" rel="stylesheet">
    <link href="../estilos/inicio.css" rel="stylesheet">
</head>

<body onload="">
    <header class="row">
        <img src="imagenes/logo.png" class="header_image" itemprop="logo" itemscope
            itemtype="https://creativecommons.org/licenses/by-sa/4.0/" alt="logo de la pagina">
        <div class="barra">
            <label for="buscador" class="lang" key="buscador">Buscador</label>
            <input id="buscador" type="search">
            <a class="btn" href=""><img src="imagenes/lupa.jpg" title="Buscar" class="nav_img" alt="lupa" /></a>
        </div>
        <!-- <div>

            <button onclick="mostrarInicio()">Inicio</button>

        </div> -->
        <nav>
            <button onclick="">Ofertas</button>
            <button onclick="">Novedades</button>
            <div class="adminmod">

                <button onclick="location.href='vista/actualizarusu.php'">Actualizar usuario</button>
                <button onclick="location.href='vista/actualizarusu.php'">Actualizar producto</button>
                <button onclick="location.href='vista/guardaproductos.php'">Añadir producto</button>
                <button onclick="location.href='vista/guardaproveedor.php'">Añadir proveedor</button>
            </div>
        </nav>
        <div class="sesion">
            <div id="sesionboton">
                <button onclick="location.href='vista/registro.php'">Registrarse</button>
                <button onclick="location.href='vista/login.php'">Entrar</button>
            </div>
            <div id="sesionicon">
                <a><img class="usu" src="imagenes/usuario.jpg" alt="Icono de usuario"></a>
            </div>

        </div>



    </header>
    <main>
    <?php
    echo "<br>";
    echo $product;
    // echo $product->__get("id");
    // echo $product->__get("nombre");
    echo "antes del foreach";
    echo gettype($prods);
    echo gettype($product);
    foreach($product as $producto){
        echo "en el foreach";
    echo "<h2>".$producto->__get("id")."</h2>";
    echo "<h2>".$producto->__get("nombre")."</h2>";
    echo "<h2>".$producto->__get("descripcion")."</h2>";
    echo "<h2>".$producto->__get("precio")."</h2>";
    echo "<h2>".$producto->__get("cantidad")."</h2>";
    echo '<img src="data:image/jpg;base64,'.$producto->__get("imagen") .' " width="160" height="160">';
    echo "<h2>".$producto->__get("proveedor")."</h2>";
    
    }
    ?>
    </main>
    <aside>

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

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"></script>
    <script src="./VideoSystemApp.js" type="module"></script>
     <!--<script src="vista/view.js"></script>
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