<?php

require_once 'LibreriaPDO.php';
require_once 'Producto.php';

class DaoProductos extends DB
{

    private $productos=[] ;   //Array de objetos tipo Productos


    public function __construct($base)   //Tenermos que pasarle la BBDD al crear el Dao
    {
        $this->dbname = $base;
    }



    public function Listar()             //Cargar el contenido de la tabla Productos
    {
        $param = array();

        //$this->productos = array();   //Vaciamos el array de objetos de contenido anterior

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
            $producto->__set("proveedor", $fila["proveedor"]);

            array_push($this->productos,$producto);   //Añadimos ese usuario al array de objetos

        }
        return $this->productos;
    }



    public function Insertar($producto)   //Recibe como parámetro un objeto de tipo usuario
    {
        $param = array();

        $param[":Nombre"] = $producto->__get("nombre");
        $param[":Descripcion"] = $producto->__get("descripcion");
        $param[":Precio"] = $producto->__get("precio");
        $param[":Cantidad"] = $producto->__get("cantidad");
        
        $param[":Imagen"] = $producto->__get("imagen");
        $param[":Proveedor"] = $producto->__get("proveedor");
        $consulta = "INSERT into productos values (null,:Nombre,:Descripcion,:Precio,:Cantidad,:Imagen,:Proveedor)";

        $this->ConsultaSimple($consulta, $param);
    }

    public function Eliminar($prod)    //Recibe como parámetro el nombre del usuario a eliminar
    {
        $param = array();

        $param[":Id"] = $prod;


        $consulta = "DELETE from productos where id=:Id ";

        $this->ConsultaSimple($consulta, $param);
    }

    public function ActualizarPrecio($id,$precio)
    {

        $param = array();

        $param[":Id"] = $id;
        $param[":Cantidad"] = $precio;


        $consulta = "UPDATE productos
                   set cantidad=:Cantidad
                   where Id=:Id ";

        $this->ConsultaSimple($consulta, $param);
    }


    public function Obtener($prod)          //Devuelve una objeto usuario a partir de su Nombre
    {
        $param = array();

        $param[":Nombre"] = $prod;

        $consulta = "SELECT * FROM productos where nombre=:Nombre";

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
            $producto->__set("proveedor", $fila["proveedor"]);
        } else {
            $producto = NULL;
        }
        return $producto;  //Retorna un objeto tipo marca

    }
    public function Obtenerporid($prod)          //Devuelve una objeto usuario a partir de su Nombre
    {
        $param = array();

        $param[":Id"] = $prod;

        $consulta = "SELECT * FROM productos where id=:Id";
        $this->ConsultaDatos($consulta, $param);
// echo count($this->filas);
        if (count($this->filas) == 1)     //Si devuelve una fila
        {
            $fila = $this->filas[0];

            $producto = new Producto();
//  echo $fila["nombre"];
//  echo $fila["descripcion"];
//  echo $fila["precio"];
//  echo $fila["cantidad"];
//  echo $fila["proveedor"];

            $producto->__set("nombre", $fila["nombre"]);
            $producto->__set("descripcion", $fila["descripcion"]);
            $producto->__set("precio", $fila["precio"]);
            $producto->__set("cantidad", $fila["cantidad"]);
            $producto->__set("imagen", $fila["imagen"]);
            $producto->__set("proveedor", $fila["proveedor"]);
        } else {
            $producto = NULL;
        }
        return $producto;  //Retorna un objeto tipo marca

    }
    public function Buscar($prod)          //Devuelve una objeto usuario a partir de su Nombre
    {
        $param = array();

        $param[":Nombre"] = $prod;

        $consulta = "SELECT * FROM productos where UPPER(nombre) like UPPER('$:Nombre$')";

        $this->ConsultaDatos($consulta, $param);

        if (count($this->filas) >0)     //Si devuelve una fila
        {
            $fila = $this->filas[0];

            $producto = new Producto();
            $producto->__set("id", $fila["id"]);
            $producto->__set("nombre", $fila["nombre"]);
            $producto->__set("descripcion", $fila["descripcion"]);
            $producto->__set("precio", $fila["precio"]);
            $producto->__set("cantidad", $fila["cantidad"]);
            $producto->__set("imagen", $fila["imagen"]);
            $producto->__set("proveedor", $fila["proveedor"]);
        } else {
            $producto = NULL;
        }
        return $producto;  //Retorna un objeto tipo marca

    }
    public function ActualizarStock($id,$cant)
    {
        $daoprod = new DaoProductos("epiz_34180798_reinodelossuenios");
        $param = array();

        $param[":Id"] = $id;
        $param[":Cantidad"] = $cant;
        
        $consulta = "UPDATE productos
                   set cantidad=:Cantidad
                   where Id=:Id ";

        $this->ConsultaSimple($consulta, $param);
    }
}
?>