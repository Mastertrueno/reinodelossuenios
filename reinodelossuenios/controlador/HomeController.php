<?php
require("/home/vol17_2/epizy.com/epiz_34180798/htdocs/modelo/DaoProductos.php");
class HomeController extends BaseController
{
    private $modelo;
    public function __construct()   //Tenermos que pasarle la BBDD al crear el Dao
    {
        $this->modelo = new DaoProductos("epiz_34180798_reinodelossuenios");
    }
    function index()
    {
        $prods = $this->modelo->Listar();
        //echo $prods[0];
        try {
            $this->render("inicio", ["product" => $prods]);
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
?>