<?php

require_once 'LibreriaPDO.php';
require_once 'Usuario.php';

class DaoUsuarios extends DB
{

    public $usuarios = array();   //Array de objetos tipo usuarios


    public function __construct($base)   //Tenermos que pasarle la BBDD al crear el Dao
    {
        $this->dbname = $base;
    }

    public function Listar()             //Cargar el contenido de la tabla usuarios
    {
        $param = array();

        $this->usuarios = array();   //Vaciamos el array de objetos de contenido anterior

        $consulta = "SELECT * FROM usuarios";

        $this->ConsultaDatos($consulta, $param);

        foreach ($this->filas as $fila) {
            $usu = new Usuario();


            $param[":nombre"] = $fila->__get("nombre");
            $param[":apellidos"] = $fila->__get("apellidos");
            $param[":contrasenia"] = $fila->__get("contrasenia");
            $param[":correo"] = $fila->__get("correo");
            $param[":fecha"] = $fila->__get("fechanac");
            $param[":rol"] = $fila->__get("rol");
            $param[":telefono"] = $fila->__get("telefono");
            $param[":dinero"] = $fila->__get("dinero");
            $this->usuarios[] = $usu;   //Añadimos ese usuario al array de objetos

        }
    }



    public function Insertar($usuario)   //Recibe como parámetro un objeto de tipo usuario
    {
        $param = array();
        $param[":Idusuario"] = null;
        $param[":Nombre"] = $usuario->__get("nombre");
        $param[":Apellidos"] = $usuario->__get("apellidos");
        $param[":Contrasenia"] = $usuario->__get("contraseña");
        $param[":Correo"] = $usuario->__get("correo");
        $param[":Fecha"] = $usuario->__get("fechanac");
        $param[":Rol"] = $usuario->__get("rol");
        $param[":Telefono"] = $usuario->__get("telefono");
        $param[":Dinero"] = $usuario->__get("dinero");
        $consulta = "INSERT INTO usuarios VALUES(:Idusuario,:Nombre,:Apellidos,:Contrasenia,:Correo,:Fecha,:Rol,:Telefono,:Dinero)";
        // foreach ($param as $key => $value) {
        //     echo $key ;
        //     echo " ";
        //       echo $value;
        //       echo "<br>";
        //    }
        $this->ConsultaSimple($consulta, $param);
    }

    public function Eliminar($usu)    //Recibe como parámetro el nombre del usuario a eliminar
    {
        $param = array();

        $param[":Idusuario"] = $usu;


        $consulta = "DELETE from usuarios where idusuario=:Idusuario ";

        $this->ConsultaSimple($consulta, $param);
    }

    public function Actualizar($usuario)
    {
        $cont=0;
        $param = array();
        $consulta = "UPDATE usuarios
        SET ";
        $param[":Idusuario"] = $usuario->__get("idusuario");
        //echo $usuario->__get("nombre");
        if ($usuario->__get("nombre") != null && $usuario->__get("nombre") != "") {
            $consulta .= "nombre=:Nombre ";
            $cont++;
            $param[":Nombre"] = $usuario->__get("nombre");
        }
        if ($usuario->__get("apellidos") != null && $usuario->__get("apellidos") != "") {
            if($cont>0){
                $consulta .=",";
            }
            $consulta .= "apellidos=:Apellidos ";
            $cont++;
            $param[":Apellidos"] = $usuario->__get("apellidos");
        }
        if ($usuario->__get("correo") != null && $usuario->__get("correo") != "") {
            if($cont>0){
                $consulta .=",";
            }
            $consulta .= "correo=:Correo ";
            $cont++;
            $param[":Correo"] = $usuario->__get("correo");
        }
        //echo $usuario->__get("telefono");
        if ($usuario->__get("telefono") != null && $usuario->__get("telefono") != "") {
            if($cont>0){
                $consulta .=",";
            }
            $consulta .= "telefono=:Telefono";
            $param[":Telefono"] = $usuario->__get("telefono");
        }
        // if ($usuario->__get("dinero") != null && $usuario->__get("dinero") != "") {
        //     $consulta .= "dinero=:Dinero";
        //     $param[":Dinero"] = $usuario->__get("dinero");
        // }
        // foreach ($param as $key => $value) {
        //     echo $key;
        //     echo " ";
        //     echo $value;
        //     echo "<br>";
        // }
        $consulta.= " WHERE idusuario=:Idusuario";
        $this->ConsultaSimple($consulta, $param);
    }


    public function Obtener($usu)          //Devuelve una objeto usuario a partir de su correo
    {
        $param = array();
        $param[":Correo"] = $usu;
        $consulta = "SELECT * FROM usuarios where correo=:Correo";
        $this->ConsultaDatos($consulta, $param);

        if (count($this->filas) == 1)     //Si devuelve una fila
        {
            $fila = $this->filas[0];

            $usuario = new Usuario();
            //  echo $fila["idusuario"];
            //  echo "<br>";
            //  echo $fila["nombre"];
            //  echo "<br>";
            //  echo $fila["contrasenia"];
            //  echo "<br>";
            //  echo $fila["apellidos"];
            //  echo "<br>";
            //  echo $fila["correo"];
            //  echo "<br>";
            //  echo $fila["fechanac"];
            //  echo "<br>";
            //  echo $fila["telefono"];
            //  echo "<br>";
            //  echo $fila["rol"];
            //  echo "<br>";
            //  echo $fila["dinero"];


            $usuario->__set("idusuario", $fila["idusuario"]);
            $usuario->__set("nombre", $fila["nombre"]);
            $usuario->__set("contraseña", $fila["contrasenia"]);
            $usuario->__set("apellidos", $fila["apellidos"]);
            $usuario->__set("correo", $fila["correo"]);
            $usuario->__set("fechanac", $fila["fechanac"]);
            $usuario->__set("telefono", $fila["telefono"]);
            $usuario->__set("rol", $fila["rol"]);
            $usuario->__set("dinero", $fila["dinero"]);
        } else {
            $usuario = NULL;
        }
        return $usuario;  //Retorna un objeto tipo usuario
    }
    public function ActualizarSaldo($id,$dinero)
    {
        $param = array();
        $consulta = "UPDATE usuarios SET dinero=:Dinero  WHERE idusuario=:Idusuario";
            $param[":Dinero"] = $dinero;
            $param[":Idusuario"] = $id;
        foreach ($param as $key => $value) {
            echo $key;
            echo " ";
            echo $value;
            echo "<br>";
        }

        $this->ConsultaSimple($consulta, $param);
    }
}
?>