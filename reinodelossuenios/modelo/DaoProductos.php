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
            $producto->__set("categoria", $fila["categoria"]);
            array_push($this->productos,$producto);   //Añadimos ese producto al array de objetos

        }
        return $this->productos;
    }



    public function Insertar($producto)   //Recibe como parámetro un objeto de tipo producto
    {
        $param = array();

        $param[":Nombre"] = $producto->__get("nombre");
        $param[":Descripcion"] = $producto->__get("descripcion");
        $param[":Precio"] = $producto->__get("precio");
        $param[":Cantidad"] = $producto->__get("cantidad");
        
        $param[":Imagen"] = $producto->__get("imagen");
        $param[":Proveedor"] = $producto->__get("proveedor");
        $param[":Categoria"] = $producto->__get("categoria");
        $consulta = "INSERT into productos values (null,:Nombre,:Descripcion,:Precio,:Cantidad,:Imagen,:Proveedor,:Categoria)";
        
        $this->ConsultaSimple($consulta, $param);
    }

    public function Eliminar($prod)    //Recibe como parámetro el nombre del producto a eliminar
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


    public function Obtener($prod)          //Devuelve una objeto producto a partir de su Nombre
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
            $producto->__set("categoria", $fila["categoria"]);
        } else {
            $producto = NULL;
        }
        return $producto;  //Retorna un objeto tipo marca

    }
    public function Obtenerporid($prod)          //Devuelve una objeto producto a partir de su Nombre
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
            $producto->__set("categoria", $fila["categoria"]);
        } else {
            $producto = NULL;
        }
        return $producto;  //Retorna un objeto tipo marca

    }
    public function Buscar($prod)          //Devuelve una objeto producto a partir de su Nombre
    {
        $param = array();

        $param[":Nombre"] = $prod;

        $consulta = "SELECT * FROM productos where UPPER(nombre) like UPPER('$:Nombre$')";

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
            $producto->__set("categoria", $fila["categoria"]);
            array_push($this->productos,$producto);   //Añadimos ese producto al array de objetos

        }
        return $this->productos;  //Retorna un objeto tipo marca

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
    public function Actualizar($producto)
    {
        $cont=0;
        $param = array();
        $consulta = "UPDATE productos
        SET ";
        $param[":Id"] = $producto->__get("id");
        //echo $producto->__get("id");
        if ($producto->__get("nombre") != null && $producto->__get("nombre") != "") {
            $consulta .= "nombre=:Nombre ";
            $cont++;
            $param[":Nombre"] = $producto->__get("nombre");
        }
        if ($producto->__get("descripcion") != null && $producto->__get("descripcion") != "") {
            if($cont>0){
                $consulta .=",";
            }
            $consulta .= "descripcion=:Descripcion ";
            $cont++;
            $param[":Descripcion"] = $producto->__get("descripcion");
        }
        if ($producto->__get("precio") != null && $producto->__get("precio") != "") {
            if($cont>0){
                $consulta .=",";
            }
            $consulta .= "precio=:Precio ";
            $cont++;
            $param[":Precio"] = $producto->__get("precio");
        }
        //echo $producto->__get("cantidad");
        if ($producto->__get("cantidad") != null && $producto->__get("cantidad") != "") {
            if($cont>0){
                $consulta .=",";
            }
            $consulta .= "cantidad=:Cantidad";
            $cont++;
            $param[":Cantidad"] = $producto->__get("cantidad");
        }
        if ($producto->__get("imagen") != null && $producto->__get("imagen") != "") {
            if($cont>0){
                $consulta .=",";
            }
            $consulta .= "imagen=:Imagen";
            $cont++;
            $param[":Imagen"] = $producto->__get("imagen");
        }
        if ($producto->__get("proveedor") != null && $producto->__get("proveedor") != "") {
            if($cont>0){
                $consulta .=",";
            }
            $consulta .= "proveedor=:Proveedor";
            $cont++;
            $param[":Proveedor"] = $producto->__get("proveedor");
        }
        if ($producto->__get("categoria") != null && $producto->__get("categoria") != "") {
            if($cont>0){
                $consulta .=",";
            }
            $consulta .= "categoria=:Categoria";
            $cont++;
            $param[":Categoria"] = $producto->__get("categoria");
        }
         if ($producto->__get("dinero") != null && $producto->__get("dinero") != "") {
             $consulta .= "dinero=:Dinero";
             $param[":Dinero"] = $producto->__get("dinero");
         }
        //    foreach ($param as $key => $value) {
        //        echo $key;
        //        echo " ";
        //        echo $value;
        //        echo "<br>";
        //    }
        $consulta.= " WHERE id=:Id";
        //echo $consulta;
        $this->ConsultaSimple($consulta, $param);
    }
    
}
?>