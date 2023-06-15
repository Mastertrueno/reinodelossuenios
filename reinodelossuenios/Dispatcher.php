<?php

/**
 * Clase que comprueba que controlador cargar dependiendo
 * del parametro que haya pasado el usuario en la url.
 * @author Javier López
 * @version 1.0
 */
final class Dispatcher
{
    public function __construct() {}

    /**
     * Método que comprueba que parametro ha pasado
     * el usuario por la url. Ejecuta el controlador
     * correspondiente, con la vista correspondiente.
     */
    public function dispatch()
    {
        $url = "home";   // Por defecto es home
        $action = "index";  // La acción por defecto es el método index
        
        if(isset($_GET["url"])) $url = $_GET["url"];
        if(isset($_GET["action"])) $action = $_GET["action"];
        // echo $url;
        // echo "<br>";
        // echo $action;
        // echo "<br>";
        $controller_name = ucfirst($url)."Controller" ;
        // echo $controller_name;
        // echo "<br>";
        $route = "controlador/" . $controller_name . ".php";
        //echo $route;
        if(file_exists($route))
        {
            require_once($route);
            // echo "<br>";
            // echo $controller_name;
            if(class_exists($controller_name))
            {
                $c = new $controller_name();
                // echo "<br>";
                // echo "entro en el controlador";
                if(method_exists($c, $action))
                {
                    $c->$action();
                }
                else
                {
                    throw new Exception("Error: No existe una acción para ese controlador");
                }
            }
            else
            {
                throw new Exception("Error: Esta clase no se encuentra en el directorio");
            }
        }
        else
        {
            throw new Exception("Error: El archivo no se encuentra en la ruta especificada");
        }
    }
}
//hacer redirecciones con direccion absoluta añadiendo href="nombre.php?url=dato"
?>
