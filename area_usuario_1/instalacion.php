<!-- Para instalar el area usuario debes copiar el siguiente codigo al final del head del documento html : -->

<!-- Los asiguientes archivos son para instalar JQUERY y los iconos de GOOGLE -->
<!-- si ya los tienes instalados debes omitir estas lineas -->
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">


<!-- Los siguientes archivos son obligatorios -->

<link rel="stylesheet" href="<?php echo $enlace; ?>area_usuario_1/css/main.css?v=<?php echo(rand()); ?>">
<script src="<?php echo $enlace; ?>area_usuario_1/js/main.js?v=<?php echo(rand()); ?>"></script>

<!-- El siguiente codigo debes pegarlo al principio del body luego de la etiqueta <body> -->

<?php include 'area_usuario_1/boton.php'; ?>


<!-- Cualquier elemento con la siguiente clase abrira el areausuario: -->

ua1_btn
