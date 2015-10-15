;(function ($, window, undefined) {
	    'use strict';

$(document).ready(function(){
   
  var width = document.documentElement.clientWidth; 

  /*    BxSlider
  **************************************************************/
  // Solo una imagen
  $(".js-slide-solo").bxSlider({controls:true,auto:true,pager:false});
  // Sin sombra ni bordes ni controles
  $('.js-slide-landing').bxSlider({auto:true,pager:false}); 
  // Solo el contenido
  $('.js-slide-flat').bxSlider({pager:false,controls:false,auto:true}); 
  
  /* Cambia el numero de imágenes del carrusel cuando 
  se visualiza en pantallas menores de 640px */

  if (width < 640) {
    $(".js-slide-carrusel").bxSlider({
                speed: 1000,
                minSlides: 1,
                maxSlides: 1,
                slideWidth: 300,
                slideMargin: 10,
                adaptiveHeight: true
            }); 
    $(".js-slide-carrusel--largo").bxSlider({
                auto:true,
                speed: 3000,
                minSlides: 2,
                maxSlides: 2,
                slideWidth: 150,
                slideMargin: 10,
                pager:false
            });    
  }
  else {
    $(".js-slide-carrusel").bxSlider({
                speed: 1000,
                minSlides: 3,
                maxSlides: 3,
                slideWidth: 300,
                slideMargin: 10,
                adaptiveHeight: true
            });
     $(".js-slide-carrusel--largo").bxSlider({
                auto:true,
                speed: 3000,
                minSlides: 6,
                maxSlides: 6,
                moveSlides: 1,
                slideWidth: 150,
                slideMargin: 10,
                pager:false
            });    
  }
  

    /*  TouchTouch
    **************************************************************/

    $('.galeria a').touchTouch();


    /*  SubNav
        ------------------------------------------------------
        Mini navegación en el footer de la vista para móviles
        que genera dos botones:
            - Un botón para subir al top de la página
            - Un botón para pasar a la página siguiente

            Recogemos la URL de la página actual y cambiamos
            el valor del 'href' del botón según el orden del 
            menú principal.

        CSS:

            .sub-nav {
                width: 100%;
                position: absolute;
                bottom: 0;
                margin:  0;
                padding: 0;
                border-top: 1px solid #999;
            }
            .sub-nav > div {
                display: inline;
                text-align: center;
            }
            .sub-nav a {
                padding:  1em;
                display: block;
                background: #aaa;
            }
            .sub-nav a:hover,
            .sub-nav a:active,
            .sub-nav a:focus {
                background: #999;
                color: #ccc;
            }
            .sub-nav a:hover i,
            .sub-nav a:active i,
            .sub-nav a:focus i {
                color: #ccc;
            }
            .link-top {
                width: 30%;
                float: left;
                border-right: 1px solid #bbb;
                border-top: 1px solid #bbb;
            }
            .link-next {
                width: 70%;
                float: right;
                border-left: 1px solid #999;
                border-top: 1px solid #bbb;
            }

    **************************************************************/
    // Inicializamos un array que recoja los enlaces
    var URLlist = [];
    // Leemos los enlaces del menu (TODO: automatizar esto!)
    var menuURLs = $('.menu-menu-e-s a, .menu-menu-e-n a, .menu-menu-c-a-t a');
        // Inyectamos los enlaces del menú en el array
        menuURLs.each(function () {
                URLlist.push($(this).attr('href').trim());               
            });
    // Leemos la url de la página actual
    var currentURL = window.location.pathname;
    // Determinamos la posición en el array de la siguiente sección
    var URLpos = $.inArray(currentURL, URLlist) + 1; 
    // Le asignamos el enlace correpondiente al botón
    $('.link-next a').attr('href',URLlist[URLpos]);       
    
    // TODO: restringir a un solo idioma, ahora loopea los tres menus!
    
});

        /*  MaPlace
            
        **************************************************************/

	    $(document).ready(function() {

          var menu = new Maplace({
	        map_div: '#gmap',
          start: 1,
	        controls_type: 'dropdown',
	        controls_cssclass: 'map-nav',
	        controls_on_map: false,
          controls_title: Titulo,
	        view_all: false,
	        locations: Establecimientos,
	        styles: {
			    'Binipreu': [
                    { 
                        "featureType": "landscape.man_made", 
                        "elementType": "geometry.fill", 
                        "stylers": [
                            { "visibility": "on" }, 
                            { "color": "#c1d82f" } ] 
                    },{ 
                        "featureType": "road", 
                        "elementType": "geometry.stroke", 
                        "stylers": [ 
                            { "visibility": "on" },  
                            { "color": "#58595b" } ]
                    },{ 
                        "featureType": "landscape.natural.terrain", 
                        "elementType": "geometry.fill", 
                        "stylers": [ 
                            { "visibility": "off" } ] 
                    },{ 
                        "featureType": "road", 
                        "elementType": "geometry.fill", 
                        "stylers": [ 
                            { "visibility": "on" }, 
                            { "color": "#ffffff" } ] 
                    },{ 
                        "featureType": "road", 
                        "elementType": "labels.text.stroke", 
                        "stylers": [ 
                            { "visibility": "on" }, 
                            { "color": "#ffffff" } ] 
                    },{ 
                        "featureType": "road", 
                        "elementType": "labels.icon", 
                        "stylers": [ 
                            { "visibility": "off" } ] 
                    },{ 
                        "featureType": "landscape.man_made", 
                        "elementType": "geometry.stroke", 
                        "stylers": [ 
                            { "visibility": "off" } ] 
                    },{ 
                        "featureType": "poi.business", 
                        "elementType": "geometry", 
                        "stylers": [ 
                            { "visibility": "on" }, 
                            { "color": "#c1d82f" } ] 
                    },{
                        "featureType": "poi.sports_complex", 
                        "elementType": "geometry", 
                        "stylers": [ 
                            { "visibility": "off" } ] 
                    },{ 
                        "featureType": "poi.school", 
                        "elementType": "geometry", 
                        "stylers": [ 
                            { "visibility": "off" } ] 
                    },{ 
                        "featureType": "poi.park", 
                        "elementType": "geometry", 
                        "stylers": [ { "visibility": "off" } ]
                    },{ 
                        "featureType": "poi.attraction", 
                        "stylers": [ 
                            { "visibility": "on" } ] 
                    } 
                ]
			  }
	      }); 

	      menu.Load(); 

	    });

	    var Establecimientos = [
	      {
	          lat: 39.88142,
	          lon: 4.237348,
	          title: 'Binipreu Menorca',
	          html: [
                '<div class="popup-mapa">',
                  '<div class="large-4 columns hide-for-small">',
                    '<img class="imagen-mapa" alt="Imagen establecimiento" src="http://binipreu.es/Media/Default/mapa/imagen_mapa_1.jpg" />',
                  '</div>',
                  '<div class="large-6 small-10 columns">',
                    '<img class="logo-mapa" alt="Logo de Binipreu" src="http://binipreu.es/Media/Default/logos/logo_binipreu_menorca_petit.png"><br />',
                    '<p class="info-mapa">',
                      '<span class="dirección-mapa">C/ Artrux - Crta. Aeroport - Mahón</span>',
                    '</p>',
                  '</div>',
                '</div>'
	          ].join(''),
	          zoom: 14
	      },
	      {
	          lat: 39.888678,
	          lon: 4.266163,
	          title: 'Binipreu Sa Plaça',
	          html: [
                '<div class="popup-mapa">',
                  '<div class="large-4 columns hide-for-small">',
                    '<img class="imagen-mapa" alt="Imagen establecimiento" src="http://binipreu.es/Media/Default/mapa/imagen_mapa_3.jpg" />',
                  '</div>',
                  '<div class="large-6 small-10 columns">',
                    '<img class="logo-mapa" alt="Logo de Binipreu" src="http://binipreu.es/Media/Default/logos/logo_binipreu_supermercats_petit.png"><br />',
                    '<p class="info-mapa">',
                      '<span class="dirección-mapa">Mercat del Claustre, 48 - Mahón</span><br /><hr/>',
                      '<span class="dias-mapa">Lunes a Sábado</span><br/>',
                      '<span class="dias-mapa">Dilluns a Dissabtes</span><br/>',
                      '<span class="dias-mapa">Mondays to Saturdays</span><br/>',
                      '<span class="horario-mapa"><i class="icon-time"></i> 08:00 - 21:00h</span><br />',
                      '<span class="sub-info-mapa">Domingos y festivos cerrado</span><br/>',
                      '<span class="sub-info-mapa">Diumenges i festius tancat</span><br/>',
                      '<span class="sub-info-mapa">Closed on Sundays & holydays</span><br/>',
                    '</p>',
                  '</div>',
                '</div>'
	          ].join(''),
	          zoom: 0
	      },
	      {
	          lat: 39.888153,
	          lon: 4.270809,
	          title: 'Binipreu Bellavista',
	          html: [
                '<div class="popup-mapa">',
                  '<div class="large-4 columns hide-for-small">',
                    '<img class="imagen-mapa" alt="Imagen establecimiento" src="http://binipreu.es/Media/Default/mapa/imagen_mapa_4.jpg" />',
                  '</div>',
                  '<div class="large-6 small-10 columns">',
                    '<img class="logo-mapa" alt="Logo de Binipreu" src="http://binipreu.es/Media/Default/logos/logo_binipreu_supermercats_petit.png"><br />',
                    '<p class="info-mapa">',
                      '<span class="dirección-mapa">C/ Bellavista, 11 Mahón</span><br /><hr/>',
                      '<span class="dias-mapa">Lunes a Sábados</span><br/>',
                      '<span class="dias-mapa">Dilluns a Dissabtes</span><br/>',
                      '<span class="dias-mapa">Mondays to Saturdays</span><br/>',
                      '<span class="horario-mapa"><i class="icon-time"></i> 07:30 - 21:00h 17:00 - 21:00h</span><br />',
                      '<span class="sub-info-mapa">Domingos y festivos cerrado</span><br/>',
                      '<span class="sub-info-mapa">Diumenges i festius tancat</span><br/>',
                      '<span class="sub-info-mapa">Closed on Sundays & holydays</span><br/>',
                    '</p>',
                  '</div>',
                '</div>'
	          ].join(''),
	          zoom: 0
	      },
	      {
	          lat: 39.882725,
	          lon: 4.267432,
	          title: 'Binipreu Via Ronda',
	          html: [
                '<div class="popup-mapa">',
                  '<div class="large-4 columns hide-for-small">',
                    '<img class="imagen-mapa" alt="Imagen establecimiento" src="http://binipreu.es/Media/Default/mapa/imagen_mapa_2.jpg" />',
                  '</div>',
                  '<div class="large-6 small-10 columns">',
                    '<img class="logo-mapa" alt="Logo de Binipreu" src="http://binipreu.es/Media/Default/logos/logo_binipreu_supermercats_petit.png"><br />',
                    '<p class="info-mapa">',
                      '<span class="dirección-mapa">C/ Borja Moll, 39 Mahón</span><br /><hr/>',
                      '<span class="dias-mapa">Lunes a Sábado</span><br/>',
                      '<span class="dias-mapa">Dilluns a Dissabtes</span><br/>',
                      '<span class="dias-mapa">Mondays to Saturdays</span><br/>',
                      '<span class="horario-mapa"><i class="icon-time"></i> 08:30 - 21:00h</span><br />',
                      '<span class="dias-mapa">Domingo</span><br/>',
                      '<span class="dias-mapa">Diumenges</span><br/>',
                      '<span class="dias-mapa">Sundays</span><br/>',
                      '<span class="horario-mapa"><i class="icon-time"></i> 9:00 - 14:00</span><br />',
                    '</p>',
                  '</div>',
                '</div>'
	          ].join(''),
	          zoom: 0
	      },
          {
	          lat: 39.884825,
	          lon: 4.258245,
	          title: 'Binipreu Av. Menorca',
	          html: [
                '<div class="popup-mapa">',
                  '<div class="large-4 columns hide-for-small">',
                    '<img class="imagen-mapa" alt="Imagen establecimiento" src="http://binipreu.es/Media/Default/mapa/imagen_mapa_5.jpg" />',
                  '</div>',
                  '<div class="large-6 small-10 columns">',
                    '<img class="logo-mapa" alt="Logo de Binipreu" src="http://binipreu.es/Media/Default/logos/logo_binipreu_supermercats_petit.png"><br />',
                    '<p class="info-mapa">',
                      '<span class="dirección-mapa">C/ Pintor Calbo, 36 Mahón</span><br /><hr/>',
                      '<span class="dias-mapa">Lunes a Sábado</span><br/>',
                      '<span class="dias-mapa">Dilluns a Dissabtes</span><br/>',
                      '<span class="dias-mapa">Mondays to Saturdays</span><br/>',
                      '<span class="horario-mapa"><i class="icon-time"></i> 07:30 - 14:00h<br />& 17:00 - 21:00h</span><br />',
                      '<span class="sub-info-mapa">Domingos y festivos cerrado</span><br/>',
                      '<span class="sub-info-mapa">Diumenges i festius tancat</span><br/>',
                      '<span class="sub-info-mapa">Closed on Sundays & holydays</span><br/>',
                    '</p>',
                  '</div>',
                '</div>'
	          ].join(''),
	          zoom: 0
	      },
	      {
	          lat: 39.936309,
	          lon: 4.144527,
	          title: 'Binipreu Alaior',
	          html: [
                '<div class="popup-mapa">',
                  '<div class="large-4 columns hide-for-small">',
                    '<img class="imagen-mapa" alt="Imagen establecimiento" src="http://binipreu.es/Media/Default/mapa/imagen_mapa_6.jpg" />',
                  '</div>',
                  '<div class="large-6 small-10 columns">',
                    '<img class="logo-mapa" alt="Logo de Binipreu" src="http://binipreu.es/Media/Default/logos/logo_binipreu_supermercats_petit.png"><br />',
                    '<p class="info-mapa">',
                      '<span class="dirección-mapa">Avda. Sa Indústria, 67 Alaior</span><br /><hr/>',
                      '<span class="dias-mapa">Lunes a Sábado</span><br/>',
                      '<span class="dias-mapa">Dilluns a Dissabtes</span><br/>',
                      '<span class="dias-mapa">Mondays to Saturdays</span><br/>',
                      '<span class="horario-mapa"><i class="icon-time"></i> 08:00 - 21:15h</span><br />',
                      '<span class="dias-mapa">Domingos</span><br/>',
                      '<span class="dias-mapa">Diumenges</span><br/>',
                      '<span class="dias-mapa">Sundays</span><br/>',
                      '<span class="horario-mapa"><i class="icon-time"></i> 09:00 - 14:30h</span><br />',
                    '</p>',
                  '</div>',
                '</div>'
	          ].join(''),
	          zoom: 0
	      }
	    ];

	})(jQuery, this);

    /*  Manejador Multi-idioma
    **************************************************************/
        var CAT = window.location.toString();
        var EN = window.location.toString();

            catEl = ".widget-menu-cat, .widget-cabeceracat, .widget-footercat, .cat";
            enEl = ".widget-menu-en, .widget-cabeceraen, .widget-footeren, .en";
            esEl = ".widget-menu-es, .widget-cabeceraes, .widget-footeres, .es";

        if (CAT.indexOf("cat/") > -1) {
            $(catEl).css('display','block');
            $(enEl).css('display','none');
            $(esEl).css('display','none');
                // Variables para los mapas
                var Titulo = '<span class="titulo_CAT">Sel·lecciona un establiment</span>'
                // Variables para el aviso de cookies
                var texto = "Aquest web empra cookies per millorar l'experiencia dels usuaris, fés clic per acceptar la nostra polìtica de privacitat.";
                var aceptoTexto = 'Accepto';
                var masTexto = 'Més informació';
        } else if (EN.indexOf("en/") > -1) {
            $(catEl).css('display','none');
            $(enEl).css('display','block');
            $(esEl).css('display','none');
                // Variables para los mapas
                var Titulo = '<span class="titulo_EN">Choose a supermarket</span>'
                // Variables para el aviso de cookies
                var texto = "We use cookies for a better experience of our users, click the button to accept privacy policy.";
                var aceptoTexto = 'Accept';
                var masTexto = 'More information';
        } else {
            $(catEl).css('display','none');
            $(enEl).css('display','none');
            $(esEl).css('display','block');
                // Variables para los mapas
                var Titulo = '<span class="titulo_ES">Selecciona un establecimiento</span>'
                // Variables para el aviso de cookies
                var texto = 'Esta web usa cookies para mejorar la experiencia de los usuarios, haz clic para aceptar nuestra política de privacidad.';
                var aceptoTexto = 'Acepto';
                var masTexto = 'Más información';
        }


/*  Cookie Banner:
    Basado en el código de 
    **************************************************************/
_cookie_banner_enable_cookies = true;
_cookie_banner_disable_cookies = false;

(function() {

// Localize jQuery variable
var jQuery;

/******** Load jQuery if not present *********/
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.7') {
  var script_tag = document.createElement('script');
  script_tag.setAttribute("type","text/javascript");
  script_tag.setAttribute("src",
    "http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js");
  if (script_tag.readyState) {
    script_tag.onreadystatechange = function () { // For old versions of IE
      if (this.readyState == 'complete' || this.readyState == 'loaded') {
        scriptLoadHandler();
      }
    };
  } else {
    script_tag.onload = scriptLoadHandler;
  }
  // Try to find the head, otherwise default to the documentElement
  (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
  // The jQuery version on the window is the one we want to use
  jQuery = window.jQuery;
  main();
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {
  // Restore $ and window.jQuery to their previous values and store the
  // new jQuery in our local jQuery variable
  jQuery = window.jQuery.noConflict(true);
  // Call our main function
  main(); 
}



/******** Our main function ********/
function main() { 
  jQuery(document).ready(function($) { 
                                      
    !function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function n(e){return e}function o(e){return decodeURIComponent(e.replace(t," "))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return r.json?JSON.parse(e):e}catch(n){}}var t=/\+/g,r=e.cookie=function(t,c,a){if(void 0!==c){if(a=e.extend({},r.defaults,a),"number"==typeof a.expires){var u=a.expires,f=a.expires=new Date;f.setDate(f.getDate()+u)}return c=r.json?JSON.stringify(c):String(c),document.cookie=[r.raw?t:encodeURIComponent(t),"=",r.raw?c:encodeURIComponent(c),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}for(var d=r.raw?n:o,p=document.cookie.split("; "),s=t?void 0:{},m=0,x=p.length;x>m;m++){var l=p[m].split("="),g=d(l.shift()),v=d(l.join("="));if(t&&t===g){s=i(v);break}t||(s[g]=i(v))}return s};r.defaults={},e.removeCookie=function(n,o){return void 0!==e.cookie(n)?(e.cookie(n,"",e.extend(o,{expires:-1})),!0):!1}});

    function updateWidgetPosition(t){switch($widget=$("#cookie_banner_wrapper"),$widget.removeClass("top-left top-right bottom-left bottom-right"),t){case"top-left":$widget.addClass("top-left");break;case"top-right":$widget.addClass("top-right");break;case"bottom-left":$widget.addClass("bottom-left");break;case"bottom-right":$widget.addClass("bottom-right")}}function updateWidgetTheme(t){$widget=$("#cookie_banner_wrapper"),t.match(/dark/)?$widget.addClass("dark"):$widget.removeClass("dark"),t.match(/large/)?$widget.addClass("large"):$widget.removeClass("large")}
        
    var legalURL = '/legal';
    var htmlContent = '<div id="cookie_banner_wrapper"><p>'+texto+' <a href="'+legalURL+'" class="btn-more" target="_blank">'+masTexto+'</a></p><div class="buttons"><a href="#" class="btn-accept">'+aceptoTexto+'</a></div></div>';
    var cookie_banner_settings = {
        "headline":"",
        "text": texto,
        "accept_text": aceptoTexto,
        "more_text": masTexto,
        "policy_url": legalURL,
        "position":"bottom-right"
        }

    $el = $('#cookie_banner_container')
    $el.html(htmlContent);
	
    template = 'small-light';

    // show or hide ?
    if ($.cookie('cookie_banner_enable_cookies') == 'true') {
      $el.hide();
    } else {
      $el.show();
    }

    if (template && template != '') {
      updateWidgetTheme(template);
    }
    if (position = cookie_banner_settings['position']) {
      updateWidgetPosition(position);
    }

    $el.find('a.btn-accept').click(function() {
      $.cookie('cookie_banner_enable_cookies', true, { expires: 356, path: '/' });
      $el.fadeOut();
    });

    $el.find('a.btn-decline').click(function() {
      $.cookie('cookie_banner_disable_cookies', true, { expires: 356, path: '/' });
    });

    $el.find('a.btn-more').click(function() {

    });

  });
}


})(); 