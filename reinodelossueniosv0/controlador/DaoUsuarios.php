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
            
            
            $param[":Nombre"]=$fila->__get("nombre");
        $param[":Apellidos"]=$fila->__get("apellidos");
        $param[":Contrasenia"]=$fila->__get("contraseña");
        $param[":Correo"]=$fila->__get("correo");
        $param[":Fecha"]=$fila->__get("fechanac");
        $param[":Telefono"]=$fila->__get("telefono");
        $param[":Dinero"]=$fila->__get("dinero");
            $this->usuarios[]=$usu;   //Añadimos ese usuario al array de objetos
            
        }
        
        
    }
    
    
    
    public function Insertar($usuario)   //Recibe como parámetro un objeto de tipo usuario
    {
        $param=array();
        
        $param[":Nombre"]=$usuario->__get("nombre");
        $param[":Apellidos"]=$usuario->__get("apellidos");
        $param[":Contrasenia"]=$usuario->__get("contraseña");
        $param[":Correo"]=$usuario->__get("correo");
        $param[":Fecha"]=$usuario->__get("fechanac");
        $param[":Telefono"]=$usuario->__get("telefono");
        $param[":Dinero"]=$usuario->__get("dinero");
        
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
        $param[":Idusuario"]=$usuario->__get("idusuario");
        $param[":Nombre"]=$usuario->__get("nombre");
        $param[":Apellidos"]=$usuario->__get("apellidos");
        $param[":Contraseña"]=$usuario->__get("contraseña");
        $param[":Correo"]=$usuario->__get("correo");
        $param[":Fecha"]=$usuario->__get("fechanac");
        $param[":Telefono"]=$usuario->__get("telefono");
        $param[":Dinero"]=$usuario->__get("dinero");
        
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
         $usuario=new Usuario();

         $usuario->__set("Idusuario", $fila["idusuario"]);
         $usuario->__set("Nombre", $fila["nombre"]);
         $usuario->__set("Contraseña", $fila["contraseña"]);
         $usuario->__set("Apellidos", $fila["apellidos"]);
         $usuario->__set("Correo", $fila["correo"]);
         $usuario->__set("Fecha", $fila["fechanac"]);
         $usuario->__set("Telefono", $fila["telefono"]);
         $usuario->__set("Dinero", $fila["dinero"]);
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




?>