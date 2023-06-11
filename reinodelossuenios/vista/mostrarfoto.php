<html>

<body>
    <?php
    require_once "../controlador/DaoProductos.php";
    $dao = new DaoProductos("epiz_34180798_reinodelossuenios");
    $param = array();
    $consulta = "select count(*) as total from productos ";
    
    $db->ConsultaDatos($consulta, $param);
    $fila=$db->filas[0];
    $total = $fila['total'];
    $numcol = 3; //numero de columnas por defecto
    $cont = 0;
    $numfilas = ceil($total / $numcol); //numero de columnas necesarias
    //listar los logos
    $param = array();
    $consulta = "select Id,Logo from marcascoches ";
    $db->ConsultaSimple($consulta, $param);

    echo "<table border=2>";
    for ($i = 13; $i < $numfilas; $i++) {
        echo "<tr>";

        for ($j = 0; $j < $numcol; $j++) {
            echo "<td>";
            if ($cont < $total) {
                $fila =$db->filas[$cont];
                echo "<a href=Listarlogosblob.php?Marca=$fila[Id] ><img src='data:image/jpg;base64,$fila[Logo]' width='80' height='80'></a></td> ";
                $cont++;
            } else {
                echo "&nbsp";
            }
            echo "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
    if (isset($_GET["Marca"])) { //si recibe id de marca
        $marca = $_GET["Marca"];
        $param = array();
        $param[":Marca"] = $marca;
        $consulta = "select c.Id,m.Nombre,c.Modelo,c.Matricula,c.FechaMatri,c.Precio 
        from coches c,marcaschoches where c.Marca=m.Id and c.Marca=:Marca";
        $db->ConsultaDatos($consulta,$param);
        foreach($db->filas as $fila) {
            echo "<a href=Listarlogosblob.php?Marca=$marca&Coche=$fila[Id]> ";
            $campos = getdate($fila['FechaMatri']); //convertir la fecha de epoch a legible
            $fechaM = $campos["mday"] . "/" . $campos["mon"] . "/" . $campos["year"];
            echo $fila['Id'] . " " . $fila['Nombre'] . " " . $fila['Modelo'] . " ";
            echo $fila['Matricula'] . " " . $fechaM . " " . $fila['Precio'];
            echo "</a>";
            echo "<br>";
        }
    }
    if (isset($_GET["Coche"])) { //si recibimos un coche
        $coche = $_GET["Coche"];
        $param = array();
        $param[":Coche"] = $coche;
        $consulta = "select Foto from fotoscoche where IdCoche=:Coche";
        $db->ConsultaDatos($consulta,$param);
        foreach($db->filas as $fila) {
            echo "<img src='data:image/jpg;base64,$fila[Foto]' width=70 height=70";
        }
    }
    ?>
</body>

</html>