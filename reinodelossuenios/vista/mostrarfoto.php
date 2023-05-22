<html>

<body>
    <?php
    require_once "../controlador/DaoProductos.php";
    $dao = new DaoProductos("epiz_34180798_reinodelossuenios");
    $numfotos = 1;
    if (isset($_POST["Numfotos"])) {
        $numfotos = $_POST["Numfotos"];
    }
    ?>
    <form name='f1' method='post' action='<?php echo $_SERVER['PHP_SELF']; ?>' enctype="multipart/form-data">






        <label for="Numfotos">Numero de fotos</label>
        <select name="Numfotos" onchange="f1.submit()">
            <?php
            for ($i = 1; $i < 11; $i++) {
                echo "<option value=$i";
                if ($numfotos == $i) {
                    echo " selected ";
                }
                echo ">$i</option>";
            }
            ?>
        </select>


        <?php

        function ExisteFoto($Id, $nomOri, $pdo)
        {
            $param = array();
            $param[":Foto"] = $nomOri;        //Lo metemos en el array de parámetros
            $param[":Id"] = $Id;
            $consulta = "SELECT count(*) as total from productos where id=:Id and foto=:Foto";
            $sta = $pdo->prepare($consulta);
            $fila = $sta->fetch(PDO::FETCH_ASSOC);
            return $fila["total"];
        }
        if (isset($_POST["Numfotos"])) { //si se recarga con un numero de fotos
            echo "<fieldset>";
            echo "<legend>Seleccion de fotos a subir</legend>";

            for ($i = 1; $i <= $numfotos; $i++) {
                echo "Foto $i<input type=file name=Foto[" . $i . "] ><br>";
            }
        }
        echo "<input type='submit' name='Insertar' value='Insertar'>";
        echo "</fieldset>";
        if (isset($_POST["Insertar"])) {

            $consulta = "insert into coches values(null,:Marca,:Modelo,:Matricula,:FechaM,:Precio)";
            $sta = $pdo->prepare($consulta);
            $sta->execute($param);
            //debemos recuperar el id del coche asignado
            $param = array();
            $param[":matricula"] = $matricula;
            $consulta = "select Id from coches where Matricula=:matricula"; //hacer que la matricula no se repita
            $sta = $pdo->prepare($consulta);
            $sta->execute($param);
            $fila = $sta->fetch(PDO::FETCH_ASSOC);
            echo "El id del coche insertado es : " . $fila["Id"];
            $Id = $fila["Id"]; //guardamos el id del nuevo coche insertado
            //insertamos las fotos para ese coche
            for ($i = 1; $i <= $numfotos; $i++) {
                if ($_FILES['Foto']['name'][$i] != "") {  //Si para ese campo File el nombre no es vacio hemos seleccionado una nuevo Logo   

                    $nomOri = $_FILES['Foto']['name'][$i];  //Cogemos el nombre original del archivo

                    $NomTempLogo = $_FILES['Foto']['tmp_name'][$i];   //Copiar el archivo subido de la ruta temporal a la carpeta Logos

                    copy($NomTempLogo, "Fotos/" . $nomOri);
                    $param = array();
                    $param[":Foto"] = $nomOri;        //Lo metemos en el array de parámetros
                    $param[":Id"] = $Id;
                    if (!ExisteFoto($Id, $nomOri, $pdo)) {
                        $consulta = "insert into fotoscoche values(:Id,:Foto)";
                        $sta = $pdo->prepare($consulta);
                        $sta->execute($param);
                    }
                }
            }
        }
        ?>

    </form>