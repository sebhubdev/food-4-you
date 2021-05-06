<?php
  include '../config.php'
 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="<?php echo $enlace; ?>area_usuario_1/css/main.css?v=<?php echo(rand()); ?>">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="<?php echo $enlace; ?>area_usuario_1/js/main.js?v=<?php echo(rand()); ?>"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <title></title>
  </head>
  <body>
    <script>
      www_enlace='<?php echo $enlace; ?>';
    </script>

  </body>
</html>


<div id="ua1_user_area">
  <div class="contenedor">
    <div class="page"></div>
  </div>
  <div class="menu"></div>
</div>
  <?php include 'boton.php'; ?>
