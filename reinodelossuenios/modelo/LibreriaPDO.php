<?php

//Clase que mediante PDO y orientacion a objectos accederemos a las BBDD
//require_once "../display.php";
class DB
{

    private $con; //Propiedad que retorna el objeto PDO resultante de la conexión

    private $host = 'localhost';
    private $user = 'root';
    private $pass = '';
    
    protected $dbname;

    public $filas = array();

    public function __construct($base){ //Constructor que recibe la BBDD sobre la que nos vamos a conectar
        $this->dbname = $base;
    }

    private function Conectar(){

        try {

            $pdo = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->user, $this->pass);

            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);
            $pdo->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
        } catch (PDOException $e) {
            echo "Error al conectar con la BBDD";
            echo $e->getMessage();
        }

        $this->con = $pdo; //Le asignamos el objeto PDO creado a la propiedad local
    }

    private function Cerrar()
    {
        $this->con = NULL;
    }

    public function ConsultaSimple($consulta, $param)
    {
        try {
            $this->Conectar();
            $sta = $this->con->prepare($consulta);
// echo $consulta;
//              foreach ($param as $key => $value) {
//                  echo $key ;
//              echo $value;
//                 echo "<br>";
//              }

            if (!($sta->execute($param))) {
                echo "Error en la consulta";
            }
        } catch (Exception $err) {
            echo $err->getMessage();
            echo $err->getCode();
        }
        $this->Cerrar();
    }

    public function ConsultaDatos($consulta, $param)
    {

        $this->Conectar();

        $sta = $this->con->prepare($consulta);
        $this->filas = array(); //Vaciamos el array de filas(para no acumular las de consultas anteriores)

        if ($sta->execute($param)) {

            while ($fila = $sta->fetch(PDO::FETCH_ASSOC)) {
                $this->filas[] = $fila; //Añadimos esa fila al array de filas 
            }
        } else {
            echo "Error en la consulta";
        }

        $this->Cerrar();
    }
}
?>