<?php
class Usuario
{
    private $idusuario;
    private $nombre;
    private $apellidos;
    private $contraseña;
    private $correo;
    private $dinero;
    private $telefono;
    private $fechanac;
    
    public function __get($clave)
    {
        return $this->$clave;
    }
    
    public function __set($clave,$valor)
    {
        $this->$clave=$valor;
    }

}

?>