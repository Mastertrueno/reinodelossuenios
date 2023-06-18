<?php
class Categoria
{
    private $id;
    private $nombre;
    
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