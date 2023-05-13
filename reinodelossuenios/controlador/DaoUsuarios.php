<?php

require_once 'LibreriaPDO.php';
require_once './modelo/Usuario.php';

class DaoUsuarios extends DB
{
    
    public $usuarios=array();   //Array de objetos tipo usuarios
    
    
    public function __construct($base)   //Tenermos que pasarle la BBDD al crear el Dao
    {
        $this->dbname=$base;
    }
    
    
    
    public function Listar()             //Cargar el contenido de la tabla usuarios
    {
        $param=array();
        
        $this->usuarios=array();   //Vaciamos el array de objetos de contenido anterior
        
        $consulta="SELECT * FROM usuarios";
        
        $this->ConsultaDatos($consulta, $param);
        
        foreach($this->filas as $fila  )
        {
            $usu=new Usuario();
            
            
            $param[":nombre"]=$fila->__get("nombre");
        $param[":apellidos"]=$fila->__get("apellidos");
        $param[":contrasenia"]=$fila->__get("contraseña");
        $param[":correo"]=$fila->__get("correo");
        $param[":fecha"]=$fila->__get("fechanac");
        $param[":telefono"]=$fila->__get("telefono");
        $param[":dinero"]=$fila->__get("dinero");
            $this->usuarios[]=$usu;   //Añadimos ese usuario al array de objetos
            
        }
        
        
    }
    
    
    
    public function Insertar($usuario)   //Recibe como parámetro un objeto de tipo usuario
    {
        $param=array();
        
        $param[":nombre"]=$usuario->__get("nombre");
        $param[":apellidos"]=$usuario->__get("apellidos");
        $param[":contraseña"]=$usuario->__get("contraseña");
        $param[":correo"]=$usuario->__get("correo");
        $param[":fecha"]=$usuario->__get("fechanac");
        $param[":telefono"]=$usuario->__get("telefono");
        $param[":dinero"]=$usuario->__get("dinero");;
        
        $consulta="insert into usuarios values (null,:Nombre,:Apellidos,:Contrasenia,:Correo,:Fecha,:Telefono,:Dinero) ";
        
        $this->ConsultaSimple($consulta, $param);
        
    }
    
    public function Eliminar($usu)    //Recibe como parámetro el nombre del usuario a eliminar
    {
        $param=array();
        
        $param[":Idusuario"]=$usu;
        
        
        $consulta="delete from usuarios where idusuario=:Idusuario ";
        
        $this->ConsultaSimple($consulta, $param);
        
        
    }
    
    public function Actualizar($usuario)
    {
        
        $param=array();
        $param[":idusuario"]=$usuario->__get("idusuario");
        $param[":nombre"]=$usuario->__get("nombre");
        $param[":apellidos"]=$usuario->__get("apellidos");
        $param[":contraseña"]=$usuario->__get("contraseña");
        $param[":correo"]=$usuario->__get("correo");
        $param[":fecha"]=$usuario->__get("fechanac");
        $param[":telefono"]=$usuario->__get("telefono");
        $param[":dinero"]=$usuario->__get("dinero");
        
        $consulta="update usuarios
                   set contraseña=:Contraseña,correo=:Correo,telefono=:Telefono,dinero=:Dinero
                   where idusuario=:Idusuario ";
        
        $this->ConsultaSimple($consulta, $param);
    }
    
    
    public function Obtener($usu)          //Devuelve una objeto usuario a partir de su correo
    {
        $param=array();
        $param[":Correo"]=$usu;
        
        $consulta="SELECT * FROM usuarios where correo=:Correo";

        $this->ConsultaDatos($consulta, $param);
        if ( count($this->filas)==1 )     //Si devuelve una fila
        {
            $fila=$this->filas[0];
            echo $this->filas[0]["contraseña"];
            echo "<br>";
         $usuario=new Usuario();
        
         $usuario->__set("idusuario", $fila["idusuario"]);
         $usuario->__set("nombre", $fila["nombre"]);
         $usuario->__set("contraseña", $fila["contraseña"]);
         $usuario->__set("apellidos", $fila["apellidos"]);
         $usuario->__set("correo", $fila["correo"]);
         $usuario->__set("fechanac", $fila["fechanac"]);
         $usuario->__set("telefono", $fila["telefono"]);
         $usuario->__set("dinero", $fila["dinero"]);
        }
        else 
        {
         $usuario=NULL;
        }
        return $usuario;  //Retorna un objeto tipo usuario
        
    }
    
       
}
