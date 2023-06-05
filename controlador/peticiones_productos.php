<?php
    require ("DaoProductos.php");

    $productos=new DaoProductos("epiz_34180798_reinodelossuenios");
    $productos->Listar();
    header('Content-Type: application/json');
    echo json_encode($productos);

?>



