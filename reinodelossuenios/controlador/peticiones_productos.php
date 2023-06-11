<?php
    require("/home/vol17_2/epizy.com/epiz_34180798/htdocs/modelo/DaoProductos.php");

    $productos=new DaoProductos("epiz_34180798_reinodelossuenios");
    $productos->Listar();
    header('Content-Type: application/json');
    echo json_encode($productos);

?>



