<?php
class Pedido
{
    private $idpedido;
    private $idusuario;
    private $fecha;
    private $idproducto;
    private $cantidad;
    private $precioproducto;
    private $total;
    
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