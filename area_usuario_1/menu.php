<?php
  include '../config.php'
 ?>

<div id="ua1_user_menu">
<div class="boton_cerrar_user_menu boton_user_menu ua1_btn">X</div>
  <div class="container_datos_user_post">
    <div class="img_user_1">
      <div class="container_img_user_1">
          <img src="<?php echo $enlace; ?>area_usuario_1/sources/img/usuario.jpg" alt="Imagen usuario de prueba uno">
      </div>
    </div>
    <div class="tipoUsuario"><?php echo ucfirst($user_type); ?></div>
    <div class="datos_user_post">
      <h2>
        <?php echo ucfirst($nombre).' '.ucfirst($apellido); ?>
      </h2>
    </div>
    <div class="clear"></div>
  </div>

  <ul>
    <li class="ua1_btn_page" data='{"form":"home"}'><span class="material-icons">home</span><span>Home</span></li>
    <li class="ua1_btn_page" data='{"form":"perfil"}'><span class="material-icons">person</span><span>Editar perfil</span></li>
    <li class="ua1_btn_page" data='{"form":"config"}'><span class="material-icons">settings</span><span>Configuracion</span></li>
        <div class="clear"></div>
  </ul>
  <ul>
    <li class="ua1_btn_page" data='{"form":"home"}'><span class="material-icons">home</span><span>Home</span></li>
    <li class="ua1_btn_page" data='{"form":"perfil"}'><span class="material-icons">person</span><span>Editar perfil</span></li>
    <li class="ua1_btn_page" data='{"form":"config"}'><span class="material-icons">settings</span><span>Configuracion</span></li>
        <div class="clear"></div>
  </ul>

  <ul>
  <li id="boton_cerrar_session"><span class="material-icons">power_settings_new</span><span>Cerrar session</span></li>
  <div class="clear"></div>
  </ul>
</div>
