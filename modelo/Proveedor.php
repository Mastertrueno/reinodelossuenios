<?php
class Proveedor
{
    private $id_proveedor;
    
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