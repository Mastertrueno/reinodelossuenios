<?php
class Producto
{
    private $id;
    private $nombre;
    private $descripcion;
    private $precio;
    private $cantidad;
    private $imagen;
    
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