<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
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
    echo "<h2>".$producto->__get("imagen")."</h2>";
    echo "<h2>".$producto->__get("proveedor")."</h2>";
    
    }
    ?>
</body>
</html>