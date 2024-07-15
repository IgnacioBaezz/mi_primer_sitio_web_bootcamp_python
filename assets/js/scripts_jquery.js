$(document).ready(function(){
   
    $('h1').click(function(){
        $(this).hide();
    });
    
    $('#fecha_actualizable').click(function(){
        $('h1').show();
    })

    $('#parrafo01').mouseenter(function(){
        $(this).css('color','red');
    })

    $('#parrafo01').mouseleave(function(){
        $(this).css('color','black');
    })

    $('#parrafo02').mouseenter(function(){
        $(this).addClass('text-danger fw-bold');
    })
    
    $('#parrafo02').mouseleave(function(){
        $(this).removeClass('text-danger fw-bold');
    })

    $('.navbar a').mouseenter(function(){
        $(this).addClass('fw-bold');
    })

    $('.navbar a').mouseleave(function(){
        $(this).removeClass('fw-bold');
    })

    $('#ampolleta').mouseenter(function(){
        $(this).prop('src','assets/img/pic_bulbon.gif').prop('alt','Luz encendida');
    })
    $('#ampolleta').mouseleave(function(){
        $(this).prop('src','assets/img/pic_bulboff.gif').prop('alt','Luz Apagada');
    })
    $('#text-hover').hover(function(){
        (this).append('Este texto aparecio de la nada');
    });
    $('#button01').on('click',function(){
        let mi_frase = $('#frase').val();
        $('#frase_ingresada').text(mi_frase).addClass('text-primary fw-bold');
        alert(mi_frase);
    });

    $('#button02').on('click', function(){
        let ancho = screen.width;
        let alto = screen.height;
        $('#resolucion').text(`Tu resolucion de pantalla es ${ancho}x${alto}`);
    });

    $('#button03').on('click', function(){
        $('#parrafo03').hide();
    });

    $('#button04').on('click', function(){
        $('#parrafo03').show();
    });
    $('#button05').on('click', function(){
        $('#imagen_accion05').toggle(1000);
    });
    $('#button06').on('click', function(){
        $('#imagen_accion06').slideDown(1000);
    });
    $('#button07').on('click', function(){
        $('#imagen_accion07').slideUp(1000);
    });
    $('#button08').on('click', function(){
        $('#lista_accion08').slideToggle(1000);
    });
    $('#button09').on('click', function(){
        $('#parrafo09').before('<p>Este es un nuevo parrafo</p>');
    });
    $('#button10').on('click', function(){
        $('#parrafo10').after('<p>Este es un nuevo parrafo</p>');
    });
    $('#button11').on('click', function(){
        $('#parrafo11').append('<li>Este es un nuevo parrafo</li>');
    });
    $('#button12').on('click', function(){
        let aux_contenido = $('#parrafo12').val();
        $('#parrafo12').html('Este es un nuevo parrafo');
    });
});