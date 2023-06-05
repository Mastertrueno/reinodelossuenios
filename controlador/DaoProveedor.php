<?php

require_once 'LibreriaPDO.php';
require_once '../modelo/Proveedor.php';

class DaoProveedor extends DB
{

    public $proveedor = array();   //Array de objetos tipo proveedor


    public function __construct($base)   //Tenermos que pasarle la BBDD al crear el Dao
    {
        $this->dbname = $base;
    }



    public function Listar()             //Cargar el contenido de la tabla Proveedor
    {
        $param = array();
        $this->proveedor = array();   //Vaciamos el array de objetos de contenido anterior
        $consulta = "SELECT * FROM proveedor";

        $this->ConsultaDatos($consulta, $param);
        echo "<script>console.log('$consulta')</script>";
        foreach ($this->filas as $fila) {
            $prov = new Proveedor();
            echo "<script>console.log('en bucle')</script>";
            echo "<script>console.log('$fila[id_proveedor]')</script>";
            
            $prov->__SET("Id_proveedor", $fila["id_proveedor"]);
            // echo "<script>console.log('$proveedor->__get(id_proveedor)')</script>";
            $this->proveedor[] = $prov;   //Añadimos ese usuario al array de objetos
            //echo "<script>console.log('en bucle')</script>";
        }
    }



     public function Insertar()   //Recibe como parámetro un objeto de tipo usuario
     {
         $param = array();

         $consulta = "INSERT into proveedor values (null)";

         $this->ConsultaSimple($consulta, $param);
     }

    public function Eliminar($prod)    //Recibe como parámetro el nombre del usuario a eliminar
    {
        $param = array();

        $param[":Id"] = $prod;


        $consulta = "DELETE from proveedor where id_proveedor=:Id ";

        $this->ConsultaSimple($consulta, $param);
    }


    // public function Obtener($prod)          //Devuelve una objeto usuario a partir de su Nombre
    // {
    //     $param = array();

    //     $param[":Nombre"] = $prod;

    //     $consulta = "SELECT * FROM proveedor where nombre=:Nombre";

    //     $this->ConsultaDatos($consulta, $param);

    //     if (count($this->filas) == 1)     //Si devuelve una fila
    //     {
    //         $fila = $this->filas[0];

    //         $producto = new Producto();

    //         $producto->__set("id", $fila["id"]);
            
    //     } else {
    //         $producto = NULL;
    //     }
    //     return $producto;  //Retorna un objeto tipo marca

    // }
}
?>