<?php

require_once 'LibreriaPDO.php';
require_once 'Pedido.php';

class DaoPedidos extends DB
{

    private $pedidos=[] ;   //Array de objetos tipo pedidos


    public function __construct($base)   //Tenermos que pasarle la BBDD al crear el Dao
    {
        $this->dbname = $base;
    }



    public function Listar()             //Cargar el contenido de la tabla pedidos
    {
        $param = array();

        //$this->pedidos = array();   //Vaciamos el array de objetos de contenido anterior

        $consulta = "SELECT * FROM pedidos";

        $this->ConsultaDatos($consulta, $param);

        foreach ($this->filas as $fila) {
            $producto = new Producto();

            $producto->__set("idpedido", $fila["idpedido"]);
            $producto->__set("idusuario", $fila["idusuario"]);
            $producto->__set("fecha", $fila["fecha"]);
            $producto->__set("idproducto", $fila["idproducto"]);
            $producto->__set("cantidad", $fila["cantidad"]);
            $producto->__set("precioproducto", $fila["precioproducto"]);
            $producto->__set("total", $fila["total"]);

            array_push($this->pedidos,$producto);   //Añadimos ese usuario al array de objetos

        }
        return $this->pedidos;
    }



    public function Insertar($producto)   //Recibe como parámetro un objeto de tipo usuario
    {
        $param = array();

        $param[":Idusuario"] = $producto->__get("idusuario");
        $param[":Fecha"] = $producto->__get("fecha");
        $param[":Idproducto"] = $producto->__get("idproducto");
        
        $param[":Cantidad"] = $producto->__get("cantidad");
        $param[":Precioproducto"] = $producto->__get("precio_producto");
        $param[":Total"] = $producto->__get("total");

        $consulta = "INSERT into pedidos values (null,:Idusuario,:Fecha,:Idproducto,:Cantidad,:Precioproducto,:Total)";
        // foreach ($param as $key => $value) {
        //     echo $key ;
        //     echo " ";
        //       echo $value;
        //      echo "<br>";
        //    }
        $this->ConsultaSimple($consulta, $param);
    }

    public function Eliminar($prod)    //Recibe como parámetro el nombre del usuario a eliminar
    {
        $param = array();

        $param[":Id"] = $prod;


        $consulta = "DELETE from pedidos where id=:Id ";

        $this->ConsultaSimple($consulta, $param);
    }
}
?>