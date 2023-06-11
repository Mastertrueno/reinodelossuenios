<?php
    require ("../modelo/DaoUsuarios.php");

    $productos=new DaoUsuarios("epiz_34180798_reinodelossuenios");
    $productos->Listar();
    header('Content-Type: application/json');
    echo json_encode($productos);

?>



