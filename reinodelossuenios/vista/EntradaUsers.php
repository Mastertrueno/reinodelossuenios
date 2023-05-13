<?php
session_start();

?>
<html>

<body>
   <form name='f1' method='post' action='<?php echo $_SERVER['PHP_SELF']; ?>'>
      <fieldset>
         <legend>Formulario de entrada</legend>
         Nombre Usuario <input type='text' name='Usuario'><br>
         Clave <input type='password' name='Clave'><br>

         <input type='submit' name='Enviar' value='Enviar'>

      </fieldset>

   </form>

   <?php

   require_once 'DaoUsuarios.php';

   $dao = new DaoUsuarios("epiz_34180798_reinodelossuenios");

   if (isset($_POST['Enviar'])) {
      $usuario = $_POST['Usuario'];
      $clave = $_POST['Clave'];

      $ini = "#-¿¡!";
      $fin = "?/&%)(";

      $clave = sha1($ini . $clave . $fin);

      //Comprobamos si el login es correcto

      $usu = $dao->Obtener($usuario);

      if (($usu == NULL) || ($usu->__get("contrasena") != $clave)) {
         echo "<b>ERROR, usuario/clave incorrectos </b>";
      } else {

         echo "<b> Login correcto</b>";

         $_SESSION['Usuario'] = $usuario;

         echo "<META HTTP-EQUIV='REFRESH' CONTENT='3;URL=http://localhost/t4/Repaso/AgendaSesion.php'> ";
      }
   }













   ?>




</body>

</html>