<?php

require_once 'LibreriaPDO.php';
require_once 'Categoria.php';

class DaoCategorias extends DB
{

    public $categorias = array();   //Array de objetos tipo categorias


    public function __construct($base)   //Tenermos que pasarle la BBDD al crear el Dao
    {
        $this->dbname = $base;
    }
    public function Listar()             //Cargar el contenido de la tabla categorias
    {
        $param = array();
        $this->categorias = array();   //Vaciamos el array de objetos de contenido anterior
        $consulta = "SELECT * FROM categorias";

        $this->ConsultaDatos($consulta, $param);
        foreach ($this->filas as $fila) {
            $cat = new Categoria();
            $cat->__SET("id", $fila["id_categoria"]);
            $cat->__SET("nombre", $fila["nombre"]);
            echo "<script>console.log('$fila[id_categoria]')</script>";
            echo "<script>console.log('$fila[nombre]')</script>";
            $this->categorias[] = $cat;  
            foreach ($this->categorias as $cat) {
                echo "<script>console.log(" . $cat->__get('id') . ")</script>";
                echo "<script>console.log(" . $cat->__get('nombre') . ")</script>";
            }
        }
    }


    public function Insertar($categoria)   //Recibe como parámetro un objeto de tipo usuario
    {
        $param = array();

        $param[":Nombre"] = $categoria->__get("nombre");
        

        $consulta = "INSERT into categorias values (null,:Nombre)";
        // foreach ($param as $key => $value) {
        //     echo $key ;
        //     echo " ";
        //       echo $value;
        //      echo "<br>";
        //    }
        $this->ConsultaSimple($consulta, $param);
    }

    public function Eliminar($categ)    //Recibe como parámetro el nombre del usuario a eliminar
    {
        $param = array();

        $param[":Id"] = $categ;


        $consulta = "DELETE from categorias where id=:Id ";

        $this->ConsultaSimple($consulta, $param);
    }
    public function Obtener($categ)          //Devuelve una objeto categoria a partir de su Nombre
    {
        $param = array();

        $param[":Nombre"] = $categ;

        $consulta = "SELECT * FROM categorias where nombre=:Nombre";

        $this->ConsultaDatos($consulta, $param);

        if (count($this->filas) == 1)     //Si devuelve una fila
        {
            $fila = $this->filas[0];

            $categoria = new Categoria();

            $categoria->__set("nombre", $fila["nombre"]);

        } else {
            $categoria = NULL;
        }
        return $categoria;  //Retorna un objeto tipo marca

    }
}
?>