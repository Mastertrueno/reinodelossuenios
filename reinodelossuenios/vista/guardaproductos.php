<!DOCTYPE html>
<html lang="es">
<?php
session_start();

require_once "../modelo/DaoProveedor.php";
$daoprov = new DaoProveedor("epiz_34180798_reinodelossuenios");
require_once "../modelo/DaoCategorias.php";
$daocat = new DaoCategorias("epiz_34180798_reinodelossuenios");
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
<?php
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
// echo $_SESSION['Telefono'];
// echo "<br>";
// echo $_SESSION['Rol'];
// echo "<br>";
// echo $_SESSION['Dinero'];?>
    <main>
    <?php if (isset($_SESSION["Usuario"]) && $_SESSION["Rol"]=="adm") : ?>
                   
        <div class="container-sm">

            <h1 class="lang" key="registrar">Añada un producto</h1>
            <div class="container form">
                <form action='<?php echo $_SERVER['PHP_SELF']; ?>' enctype="multipart/form-data" method='post' class="container2 needs-validation" novalidate>
                    <div class="container2">
                        <div class="mb-3 camp">
                            <label for="nombre ">
                                <h2 class="lang" key="nombre">Nombre </h2>
                            </label>
                            <input id="nombre" name="nombre" type="text" class="form-control campo" required>
                            <div class="invalid-feedback lang" key="pnombre">
                                Ponga el nombre del producto
                            </div>
                        </div>
                        <div class="mb-3 descripcion camp">
                            <label for="descripcion">
                                <h2 class="lang" key="descripcion">Descripcion </h2>
                            </label>
                            <textarea id="descripcion" name="descripcion" type="text" class="form-control campo">
                            </textarea>
                            <!-- <div class="invalid-feedback lang" key="pdescripcion">
                                Ponga sus descripcion
                            </div> -->
                        </div>
                        <div class="mb-3 precio camp">
                            <label for="precio">
                                <h2 class="lang" key="precio">Precio </h2>
                            </label>
                            <input id="precio" name="precio" type="number" step="any" pattern="[0-9]{1,5}" class="form-control campo" required onchange="fieldsCompleted('precio')">
                            <div class="invalid-feedback lang" key="pprecio">
                                Ponga un precio
                            </div>
                        </div>

                        <div class="mb-3 cantidad camp">
                            <label for="cantidad">
                                <h2 class="lang" key="cantidad">Cantidad </h2>
                            </label>
                            <input id="cantidad" name="cantidad" type="number" pattern="[0-9]{1,5}" class="form-control campo" required onchange="fieldsCompleted('cantidad')">
                            <div class="invalid-feedback lang" key="pcantidad">
                                Ponga una cantidad
                            </div>
                        </div>
                        <div class="mb-3 foto camp">
                            <label for="foto">
                                <h2 class="lang" key="fecha">Foto</h2>
                            </label>
                            <input id="foto" name="foto" type="file" class="form-control " required onchange="fieldsCompleted('foto')">
                            <div class="invalid-feedback lang" key="pfoto">
                                Seleccione la imagen del producto
                            </div>
                        </div>
                        <div class="mb-3 camp">
                            <h2 class="lang" key="proveedor">Proveedor</h2>
                            <select name="proveedor">
                                <?php
                                echo "<script>console.log('antes de require')</script>";


                                echo "<script>console.log('antes de listar')</script>";
                                $daoprov->Listar();
                                echo "<script>console.log('despues de listar')</script>";
                                foreach ($daoprov->proveedor as $prov) {
                                    echo "<script>console.log('entro')</script>";
                                    echo "<script>console.log(" . $prov->__get('Id_proveedor') . ")</script>";
                                    echo "<option value=" . $prov->__get('Id_proveedor');

                                    // if ($pais == $fila['id_proveedor']) {
                                    //   echo " selected ";
                                    // }

                                    echo "> " . $prov->__get('Id_proveedor') . "</option>";
                                }

                                ?>
                            </select>
                        </div>
                        <div class="mb-3 camp">
                            <h2 class="lang" key="categoria">Categoria</h2>
                            <select name="categoria">
                                <?php
                                $daocat->Listar();
                                echo "<script>console.log('Antes de categoria')</script>";
                                foreach ($daocat->categorias as $cat) {
                                    echo "<script>console.log(" . $cat->__get('nombre') . ")</script>";
                                    echo "<option value=" . $cat->__get('id')."> " . $cat->__get('nombre') . "</option>";
                                }
                                ?>
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="lang btn seccion" name="Guardar" value="Guardar">Guardar</button>

                </form>
                <button onclick="location.href='http://reinodelossuenios.42web.io'" class="btn seccion">Volver</button>
                <?php
                require_once "../modelo/DaoProductos.php";
                $dao = new DaoProductos("epiz_34180798_reinodelossuenios");

                if (isset($_POST["Guardar"])) {
                    $nombre = $_POST["nombre"];
                    $descripcion = $_POST["descripcion"];
                    $precio = $_POST["precio"];
                    $cantidad = $_POST["cantidad"];
                    $imagen = $_FILES['foto']['tmp_name'];
                    $proveedor = $_POST["proveedor"];
                    $categoria = $_POST["categoria"];
                    if (
                        $nombre != "" && $descripcion != "" && $precio != "" && $cantidad != "" && $imagen != ""
                    ) {
                        if ($precio <= 0 || $cantidad <= 0) {
                            echo "<b>Error: precio o cantidad no valida</b>";
                        } else {
                            //comprobamos que el usuario no exista
                            $prod = $dao->Obtener($nombre);
                            if ($prod != null) {
                                echo "<b>El producto $nombre ya existe</b>";
                            } else {
                                //creamos una cadena inicial y final para que complemente a la clave
                                $ini = "#-¿¡!";
                                $fin = "?/&%)(";
                                $prod = new Producto();
                                $prod->__set("nombre", $nombre);
                                $prod->__set("descripcion", trim($descripcion));
                                $prod->__set("precio", $precio);
                                $prod->__set("cantidad", $cantidad);
                                $imgcod = base64_encode(file_get_contents($imagen));
                                // $imgcod = base64_encode($imagen);
                                $prod->__set("imagen", $imgcod);
                                $prod->__set("proveedor", $proveedor);
                                $prod->__set("categoria", $categoria);
                                $dao->Insertar($prod);
                                echo "<b>Producto creado correctamente</b>";
                                //echo "<META HTTP-EQUIV='REFRESH' CONTENT='5;URL=http://reinodelossuenios.42web.io/'> ";
                            }
                        }
                    } else {
                        echo "<b>RELLENE LOS CAMPOS<b>";
                    }
                }
                ?>
            </div>
        </div>
        <?php else : ?>
            <?php //echo "<META HTTP-EQUIV='REFRESH' CONTENT='5;URL=http://reinodelossuenios.42web.io/'> "; ?>
            <?php endif ; ?>
    </main>
</body>
<footer>
<script src="../js/validation.js"></script>
</footer>
</html>