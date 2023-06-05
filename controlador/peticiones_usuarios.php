<?php
    require ("./DaoUsuarios.php.php");

    $productos=new DaoUsuarios("epiz_34180798_reinodelossuenios");
    $productos->Listar();
    header('Content-Type: application/json');
    echo json_encode($productos);

?>



