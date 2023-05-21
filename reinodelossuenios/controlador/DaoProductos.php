<?php

require_once 'LibreriaPDO.php';
require_once '../modelo/Producto.php';

class DaoProductos extends DB
{

    public $productos = array();   //Array de objetos tipo Productos


    public function __construct($base)   //Tenermos que pasarle la BBDD al crear el Dao
    {
        $this->dbname = $base;
    }



    public function Listar()             //Cargar el contenido de la tabla Productos
    {
        $param = array();

        $this->productos = array();   //Vaciamos el array de objetos de contenido anterior

        $consulta = "SELECT * FROM productos";

        $this->ConsultaDatos($consulta, $param);

        foreach ($this->filas as $fila) {
            $producto = new Producto();

            $producto->__set("id", $fila["id"]);
            $producto->__set("nombre", $fila["nombre"]);
            $producto->__set("descripcion", $fila["descripcion"]);
            $producto->__set("precio", $fila["precio"]);
            $producto->__set("cantidad", $fila["cantidad"]);
            $producto->__set("imagen", $fila["imagen"]);


            $this->productos[] = $producto;   //Añadimos ese usuario al array de objetos

        }
    }



    public function Insertar($producto)   //Recibe como parámetro un objeto de tipo usuario
    {
        $param = array();

        $param[":Nombre"] = $producto->__get("nombre");
        $param[":Descripcion"] = $producto->__get("descripcion");
        $param[":Precio"] = $producto->__get("precio");
        $param[":Cantidad"] = $producto->__get("cantidad");
        $param[":Imagen"] = $producto->__get("imagen");

        $consulta = "INSERT into productos values (null,:Nombre,:Descripcion,:Precio,:Cantidad,:Imagen)";

        $this->ConsultaSimple($consulta, $param);
    }

    public function Eliminar($prod)    //Recibe como parámetro el nombre del usuario a eliminar
    {
        $param = array();

        $param[":Id"] = $prod;


        $consulta = "DELETE from productos where id=:Id ";

        $this->ConsultaSimple($consulta, $param);
    }

    public function ActualizarPrecio($producto)
    {

        $param = array();

        $param[":Id"] = $producto->__get("id");
        $param[":Cantidad"] = $producto->__get("cantidad");


        $consulta = "UPDATE productos
                   set cantidad=:Cantidad
                   where Id=:Id ";

        $this->ConsultaSimple($consulta, $param);
    }


    public function Obtener($prod)          //Devuelve una objeto usuario a partir de su Nombre
    {
        $param = array();

        $param[":Idproducto"] = $prod;

        $consulta = "SELECT * FROM productos where id=:Idproducto";

        $this->ConsultaDatos($consulta, $param);

        if (count($this->filas) == 1)     //Si devuelve una fila
        {
            $fila = $this->filas[0];

            $producto = new Producto();

            $producto->__set("nombre", $fila["nombre"]);
            $producto->__set("descripcion", $fila["descripcion"]);
            $producto->__set("precio", $fila["precio"]);
            $producto->__set("cantidad", $fila["cantidad"]);
            $producto->__set("imagen", $fila["imagen"]);
        } else {
            $producto = NULL;
        }
        return $producto;  //Retorna un objeto tipo marca

    }
}
