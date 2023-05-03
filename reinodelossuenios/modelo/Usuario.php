<?php
class Usuario
{
    private $Usuario;
    private $Clave;
    
    public function __get($nombre)
    {
        return $this->$nombre;
    }
    
    public function __set($nombre,$valor)
    {
        $this->$nombre=$valor;
    }
    
    
}

?>