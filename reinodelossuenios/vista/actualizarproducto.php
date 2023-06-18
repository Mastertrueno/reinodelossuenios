<?php
session_start();
require_once "../modelo/DaoProveedor.php";
$daoprov = new DaoProveedor("epiz_34180798_reinodelossuenios");
require_once "../modelo/DaoCategorias.php";
$daocat = new DaoCategorias("epiz_34180798_reinodelossuenios");
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario para actualizar producto</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </script>
    <link href="../estilos/normalize.css" rel="stylesheet">
    <link href="../estilos/registro.css" rel="stylesheet">
</head>

<body>

    <main>
    <?php if (isset($_SESSION["Usuario"]) && $_SESSION["Usuario"]=="adm") : ?>

        <div class="container-sm">

            <h1 class="lang" key="registrar">Actualizar producto</h1>
            <div class="container form">
                <form action='<?php echo $_SERVER['PHP_SELF']; ?>' enctype="multipart/form-data" method='post' class="was-validated container2" needs-validation novalidate>
                    <div class="container2">
                        <div class="mb-3 camp">
                            <label for="id ">
                                <h2 class="lang" key="id">Id producto * </h2>
                            </label>
                            <input id="id" name="id" type="text" class="form-control campo">
                            <!-- <div class="invalid-feedback lang" key="pnombre">
                                Ponga el nombre del producto
                            </div> -->
                        </div>
                        <div class="mb-3 camp">
                            <label for="nombre ">
                                <h2 class="lang" key="nombre">Nombre </h2>
                            </label>
                            <input id="nombre" name="nombre" type="text" class="form-control campo">
                            <!-- <div class="invalid-feedback lang" key="pnombre">
                                Ponga el nombre del producto
                            </div> -->
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
                            <input id="precio" name="precio" type="number" step="any" pattern="[0-9]{1,5}" class="form-control campo">
                            <!-- <div class="invalid-feedback lang" key="pprecio">
                                Ponga un precio
                            </div> -->
                        </div>

                        <div class="mb-3 cantidad camp">
                            <label for="cantidad">
                                <h2 class="lang" key="cantidad">Cantidad </h2>
                            </label>
                            <input id="cantidad" name="cantidad" type="number" pattern="[0-9]{1,5}" class="form-control campo">
                            <!-- <div class="invalid-feedback lang" key="pcantidad">
                                Ponga una cantidad
                            </div> -->
                        </div>
                        <div class="mb-3 foto camp">
                            <label for="foto">
                                <h2 class="lang" key="fecha">Foto</h2>
                            </label>
                            <input id="foto" name="foto" type="file" class="form-control ">
                            <!-- <div class="invalid-feedback lang" key="pfoto">
                                Seleccione la imagen del producto
                            </div> -->
                        </div>
                        <div class="mb-3 camp">
                            <h2 class="lang" key="cantidad">Proveedor</h2>
                            <select name="proveedor">
                                <?php
                                echo "<script>console.log('antes de require')</script>";


                                echo "<script>console.log('antes de listar')</script>";
                                $daoprov->Listar();
                                echo "<script>console.log('despues de listar')</script>";
                                echo '<option value=""> </option>';

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
                                echo '<option value=""> </option>';
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
                    <button type="submit" class="lang btn seccion" name="Actualizar" value="Actualizar">Actualizar</button>

                </form>
                <button onclick="location.href='http://reinodelossuenios.42web.io'" class="btn seccion">Volver</button>
                <!-- <script>
                let form=document.forms[0];
                form.addEventListener("submit",function(e){
e.preventDefault();
                });
                </script> -->

                <?php
                require_once "../modelo/DaoProductos.php";
                // require_once "display.php";
                $dao = new DaoProductos("epiz_34180798_reinodelossuenios");
                if (isset($_POST["Actualizar"])) {
                    $id = $_POST["id"];
                    $nombre = $_POST["nombre"];
                    $descripcion = $_POST["descripcion"];
                    $precio = $_POST["precio"];
                    $cantidad = $_POST["cantidad"];
                    $imagen = $_FILES['foto']['tmp_name'];
                    $proveedor = $_POST["proveedor"];
                    $categoria = $_POST["categoria"];
                    
                    if (
                        $id != "" && ($nombre != "" || $descripcion != "" || $precio != "" || $cantidad != "" || $imagen != ""
                        || $proveedor != "" || $categoria != "")
                    ) {
                        if (($precio <= 0 && $precio != "") || ($cantidad <= 0 && $cantidad != "")) {
                            echo "<b>Error: precio o cantidad no valida</b>";
                        } else {
                            //comprobamos que el usuario no exista
                            $prod = $dao->Obtenerporid($id);
                            if ($prod == null) {
                                echo "<b>El producto $id no existe</b>";
                            } else {
                                //creamos una cadena inicial y final para que complemente a la clave
                                $prod2 = $dao->Obtener($nombre);
                                if ($prod2 != null) {
                                    echo "<b>El nombre $nombre ya esta en uso</b>";
                                } else {
                                    $nuevacantidad = $prod->__get("cantidad") + (int)$cantidad;
                                    // echo "nueva cantidad ".$nuevacantidad;
                                    // echo "cantidad ".$cantidad;
                                    $prod = new Producto();
                                    $prod->__set("id", $id);
                                    $prod->__set("nombre", $nombre);
                                    $prod->__set("descripcion", trim($descripcion));
                                    $prod->__set("precio", $precio);
                                    $prod->__set("cantidad", $nuevacantidad);
                                    if($imagen==null){
                                        $imgcod = "";
                                    }else{
                                        $imgcod = base64_encode(file_get_contents($imagen));
                                    }
                                    // $imgcod = base64_encode($imagen);
                                    $prod->__set("imagen", $imgcod);
                                    $prod->__set("proveedor", $proveedor);
                                    $prod->__set("categoria", $categoria);
                                    $dao->Actualizar($prod);
                                    echo "<b>Producto actualizado correctamente</b>";
                                    //echo "<META HTTP-EQUIV='REFRESH' CONTENT='5;URL=http://reinodelossuenios.42web.io/'> ";
                                }
                            }
                        }
                    } else {

                        echo "<b>RELLENE LOS CAMPOS</b>";
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