$(document).ready(function(){
        ua1_user_menu=false;
        $(document).delegate('.ua1_btn','click',function(e){
          e.stopPropagation()
          if(ua1_user_menu==false)
          {
                  destruir_area_user();
                  crear_area_user();

          }
          else if(ua1_user_menu==true)
          {
                  cerrar_menu_user();
          }
        });
        $(document).delegate('.ua1_btn_page','click',function(e){
          e.stopPropagation();
          var data=$(this).attr('data');
          data=JSON.parse(data)
          cargar_form_user(data);
        });

        $('#boton_cerrar_session').click(function(){
          $.ajax({
            type:'POST',
            url:www_enlace+'acciones/cerrar_session.php',
            success:function(html){
              location.reload();
            }
          });
        });
});



function destruir_area_user()
{
  if($('#ua1_user_area')[0])
  {
    $('#ua1_user_area').remove();
  }
}
function crear_area_user()
{
  $.ajax({
    type:'POST',
    url:www_enlace+'area_usuario_1/constructor.php',
    success:function(html){
      $('body').append(html);
      abrir_menu_user();
    }
  })
}

function abrir_menu_user()
{
        ua1_user_menu=true;
        $('body').css({'overflow-y':'hidden'})
        $.ajax({
          type:'POST',
          data:'id=1',
          url:www_enlace+'area_usuario_1/menu.php',
          success:function(html){
            $('#ua1_user_area').find('.menu').html(html);
            $('#ua1_user_menu').css({'display':'none'});
            $('#ua1_user_area').fadeIn();
            $('#ua1_user_area').find('.menu').animate({'width':'300px'},300,()=>{
              $('#ua1_user_menu').fadeIn('slow');
            });
          }
        });
}
function cerrar_menu_user()
{
        ua1_user_menu=false;
        $('#ua1_user_menu,#ua1_user_area .page').fadeOut('slow',()=>{
          $('#ua1_user_area .contenedor').animate({'width':'0vw'},300);
          $('#ua1_user_area .menu').animate({'width':'0vw'},300);
          $('#ua1_user_area').fadeOut();
          $('body').css({'overflow-y':'scroll'});
        });
}

function cargar_form_user(data)
{
  $.ajax({
    type:'POST',
    data:data,
    url:www_enlace+'area_usuario_1/pages/'+data.form+'.php',
    success:function(html){
      $('#ua1_user_area .page').fadeOut('slow',function(){
        $('#ua1_user_area .page').html(html);
        $('#ua1_user_area .page').css({'display':'none'});
        $('#ua1_user_area').fadeIn();
        if($('#ua1_user_area .contenedor').width()==0)
        {
          var anchoPan=$(window).width();
          var anchoBarra =$('#ua1_user_area .menu').width();
          var ancho =anchoPan-anchoBarra
          $('#ua1_user_area .contenedor').animate({'width':ancho+'px'},500,()=>{
            $('#ua1_user_area .page').fadeIn('slow');
          });
        }
        else
        {
          $('#ua1_user_area .page').fadeIn('slow');
        }
      });
    }
  });
}
