// FUNCIONES HEADER HOME
{
  $(document).ready(function(){
    $('#headerHome').animate({'opacity':'1'},500);
    $('#headerHome').find('.cuadroFondo').animate({'width':'100%'},500);
    $('#headerHome').find('.plato_uno').fadeIn(1000)
    $('#headerHome').find('.textos').fadeIn(1000)
  });
}
// FIN FUNCIONES HEADER HOME


// FUNCIONES HEADER Y NAVEGADOR PRINCIPALES
{
    $(window).scroll(function(){
      var scroll=$(window).scrollTop();
      if($(window).width()<=600)
      {
          // if(scroll>=100)
          // {
          //   $('#logo').fadeOut('slow');
          //   $('#logoMovil').fadeIn('slow');
          //   $('#menuPrincipal').css({'background':'rgba(243,193,97,0.9)','padding-left':'54vw'});
          // }
          // else
          // {
          //   $('#logo').fadeIn('slow');
          //   $('#logoMovil').fadeOut('slow');
          //     $('#menuPrincipal').css({'background':'rgba(0,0,0,.6)','padding-left':'4vw'});
          // }
      }
      else
      {
        if(scroll>=100)
        {
          $('#header_principal').css({'background':'rgba(255,224,1,1)'});
          $('#header_principal').find('.logo').css({'width':'11vw','top':'1vw','left':'2vw'});
          $('#header_principal').find('.telefono').fadeOut('slow');
          $('#nav_principal').css({'top':'2vw','right':'3vw'});
        }
        else
        {
          $('#header_principal').css({'background':'rgba(255,224,1,0)'});
          $('#header_principal').find('.logo').css({'width':'17vw'});
          $('#header_principal').find('.telefono').fadeIn('slow');
          $('#nav_principal').css({'top':'6vw','right':'3vw'});
        }
      }

    });
}
// FIN FUNCIONES HEADER Y NAVEGADOR PRINCIPALES


// FUNCIONES PRODUCTOS DESTACADOR HOME
{
  $(window).scroll(function(){
    var altoPan=$(window).height();
    var scroll=$(window).scrollTop();
    var alto=$('#productos_destacados').height();
    var posicionTop=$('#productos_destacados').offset().top;
    if($(window).width()<=600)
    {

      // var posicionArranque=posicionTop-altoPan+((alto/6)*2);
      // var inicioParallax = posicionTop-alto;
      // var posicionParallax =  ((scroll-inicioParallax) * 0.30);
      // $('#parallax_home').css({'background-position': '0px -' + posicionParallax + 'px'});
      // if(scroll>=posicionArranque)
      // {
      //
      //   $('#.modulo_producto_uno:nth-child(1)').css({'top': '0vw','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'0s'});
      // }
      // else
      // {
      //   $('#parallax_home h2').css({'margin-top': '100vw','opacity':'0','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'.1s'});
      //   $('#parallax_home p').css({'margin-top': '100vw','opacity':'0','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'0s'});
      //   $('#parallax_home img').css({'margin-top': '100vw','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'.2s'});
      //   $('#parallax_home div').css({'margin-top': '100vw','opacity':'0','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'.3s'});
      // }
    }
    else
    {
      var posicionArranque=posicionTop-altoPan+((alto/3)*2);
      if(scroll>=posicionArranque)
      {
        $('.modulo_producto_uno:nth-child(1)').css({'opacity':'1','top': '0','transition':'0.5s ease-in-out','transition-delay':'0s'});
        $('.modulo_producto_uno:nth-child(2)').css({'opacity':'1','top': '0','transition':'0.5s ease-in-out','transition-delay':'0.1s'});
        $('.modulo_producto_uno:nth-child(3)').css({'opacity':'1','top': '0','transition':'0.5s ease-in-out','transition-delay':'0.2s'});
      }
      else
      {
        $('.modulo_producto_uno:nth-child(1)').css({'opacity':'0','top': '30vw','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'0.2s'});
        $('.modulo_producto_uno:nth-child(2)').css({'opacity':'0','top': '30vw','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'0.1s'});
        $('.modulo_producto_uno:nth-child(3)').css({'opacity':'0','top': '30vw','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'0s'});
      }

    }
  });
  $(window).scroll(function(){
    var altoPan=$(window).height();
    var scroll=$(window).scrollTop();
    var alto=$('#productos_destacados').height();
    var posicionTop=$('#productos_destacados').offset().top;
    if($(window).width()<=600)
    {

      // var posicionArranque=posicionTop-altoPan+((alto/6)*2);
      // var inicioParallax = posicionTop-alto;
      // var posicionParallax =  ((scroll-inicioParallax) * 0.30);
      // $('#parallax_home').css({'background-position': '0px -' + posicionParallax + 'px'});
      // if(scroll>=posicionArranque)
      // {
      //
      //   $('#.modulo_producto_uno:nth-child(1)').css({'top': '0vw','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'0s'});
      // }
      // else
      // {
      //   $('#parallax_home h2').css({'margin-top': '100vw','opacity':'0','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'.1s'});
      //   $('#parallax_home p').css({'margin-top': '100vw','opacity':'0','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'0s'});
      //   $('#parallax_home img').css({'margin-top': '100vw','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'.2s'});
      //   $('#parallax_home div').css({'margin-top': '100vw','opacity':'0','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'.3s'});
      // }
    }
    else
    {

      var posicionArranque2=posicionTop-altoPan+((alto/7)*2);
      if(scroll>=posicionArranque2)
      {
        $('#texto_productos_destacados').css({'opacity':'1','transition':'0.5s ease-in-out','transition-delay':'0.3s'});
        $('#titulo_productos_destacados').css({'opacity':'1','transition':'0.5s ease-in-out','transition-delay':'0s'});
      }
      else
      {
        $('#texto_productos_destacados').css({'opacity':'0','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'0s'});
        $('#titulo_productos_destacados').css({'opacity':'0','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'0.3s'});
      }
    }
  });
}
// FIN FUNCIONES PRODUCTOS DESTACADOR HOME

// FUNCIONES OFERTAS HOME
{
  $(window).scroll(function(){
    var altoPan=$(window).height();
    var scroll=$(window).scrollTop();
    var alto=$('#ofertas_home').height();
    var posicionTop=$('#ofertas_home').offset().top;
    if($(window).width()<=600)
    {

      // var posicionArranque=posicionTop-altoPan+((alto/6)*2);
      // var inicioParallax = posicionTop-alto;
      // var posicionParallax =  ((scroll-inicioParallax) * 0.30);
      // $('#parallax_home').css({'background-position': '0px -' + posicionParallax + 'px'});
      // if(scroll>=posicionArranque)
      // {
      //
      //   $('#.modulo_producto_uno:nth-child(1)').css({'top': '0vw','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'0s'});
      // }
      // else
      // {
      //   $('#parallax_home h2').css({'margin-top': '100vw','opacity':'0','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'.1s'});
      //   $('#parallax_home p').css({'margin-top': '100vw','opacity':'0','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'0s'});
      //   $('#parallax_home img').css({'margin-top': '100vw','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'.2s'});
      //   $('#parallax_home div').css({'margin-top': '100vw','opacity':'0','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'.3s'});
      // }
    }
    else
    {
      var posicionArranque=posicionTop-altoPan+((alto/4)*2);
      var inicioParallax = posicionTop-alto;
      var posicionParallax =  ((scroll-inicioParallax) * 0.30);
      if(scroll>=posicionArranque)
      {
        $('.oferta_uno').css({'opacity':'1','left': '0vw','transition':'0.5s ease-in-out','transition-delay':'0s'});
        $('.oferta_dos').css({'opacity':'1','left': '0','transition':'0.5s ease-in-out','transition-delay':'0.1s'});
        $('.oferta_tres').css({'opacity':'1','left': '0','transition':'0.5s ease-in-out','transition-delay':'0.2s'});
      }
      else
      {
        $('.oferta_uno').css({'opacity':'0','left': '-30vw','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'0.2s'});
        $('.oferta_dos').css({'opacity':'0','left': '30vw','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'0.1s'});
        $('.oferta_tres').css({'opacity':'0','left': '30vw','transition':'.5s cubic-bezier(.46,.12,.62,.94)','transition-delay':'0s'});
      }
    }
  });
}
// FIN FUNCIONES OFERTAS HOME
