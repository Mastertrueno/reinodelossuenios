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
            
            
            $usu->__set("Idusuario", $fila["idusuario"]);
            $usu->__set("Nombre", $fila["nombre"]);
            $usu->__set("Contraseña", $fila["contrasenia"]);
            $usu->__set("Apellidos", $fila["apellidos"]);
            $usu->__set("Correo", $fila["correo"]);
            $usu->__set("Telefono", $fila["telefono"]);
            $usu->__set("Dinero", $fila["dinero"]);
            $this->usuarios[]=$usu;   //Añadimos ese usuario al array de objetos
            
        }
        
        
    }
    
    
    
    public function Insertar($usuario)   //Recibe como parámetro un objeto de tipo usuario
    {
        $param=array();
        
        $param[":Idusuario"]=$usuario->__get("idusuario");
        $param[":Nombre"]=$usuario->__get("nombre");
        $param[":Apellidos"]=$usuario->__get("apellidos");
        $param[":Contrasenia"]=$usuario->__get("contrasenia");
        $param[":Correo"]=$usuario->__get("correo");
        $param[":Telefono"]=$usuario->__get("telefono");
        $param[":Dinero"]=$usuario->__get("dinero");
        
        $consulta="insert into usuarios values (:Idusuario,:Nombre,:Apellidos,:Contrasenia,:Correo,:Telefono,:Dinero) ";
        
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
        // $param[":Nombre"]=$usuario->__get("nombre");
        // $param[":Apellidos"]=$usuario->__get("apellidos");
        $param[":Contrasenia"]=$usuario->__get("contrasenia");
        $param[":Correo"]=$usuario->__get("correo");
        $param[":Telefono"]=$usuario->__get("telefono");
        $param[":Dinero"]=$usuario->__get("dinero");
        
        $consulta="update usuarios
                   set contrasenia=:Contrasenia,correo=:Correo,telefono=:Telefono,dinero=:Dinero
                   where Usuario=:Usuario ";
        
        $this->ConsultaSimple($consulta, $param);
    }
    
    
    public function Obtener($usu)          //Devuelve una objeto usuario a partir de su Nombre
    {
        $param=array();
        
        $param[":Correo"]=$usu;
        
        $consulta="SELECT * FROM usuarios where correo=:correo";
        
        $this->ConsultaDatos($consulta, $param);
        
        if ( count($this->filas)==1 )     //Si devuelve una fila
        {
            $fila=$this->filas[0];
            
         $usuario=new Usuario();
        
         $usuario->__set("Idusuario", $fila["idusuario"]);
         $usuario->__set("Nombre", $fila["nombre"]);
         $usuario->__set("Contraseña", $fila["contrasenia"]);
         $usuario->__set("Apellidos", $fila["apellidos"]);
         $usuario->__set("Correo", $fila["correo"]);
         $usuario->__set("Telefono", $fila["telefono"]);
         $usuario->__set("Dinero", $fila["dinero"]);
        }
        else 
        {
         $usuario=NULL;
        }
        return $usuario;  //Retorna un objeto tipo marca
        
    }
    
       
}




?>