$(document).ready(function(){
    $("#accordion").accordion();
    $("#datepicker").datepicker();
    $("#dialog").dialog();
    $("#slider").slider({
        min: 0,
        max: 100,
        value: 50,
        slide: function(event, ui) {
            $("#sliderValue").text(ui.value);
        }})
        $("#bounceButton").click(function() {
            $("#bounceElement").effect("bounce", { times: 3 }, "slow");
        });
        $("#draggable").draggable();
        $("#draggable2").draggable();
            $("#droppable").droppable({
                drop: function(event, ui) {
                    $(this).addClass("ui-state-highlight").find("p").text("Soltado!");
                }
            });

    $('#carousel-imagens').slick({
        autoplay:true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000',
    })

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            telefone: {
                required: true, 
            },
            email: {
                required: true, 
                email: true,
            },
            veículo: {
                required: false,
            },
            Mensagem: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, ensira o seu nome',
            email: 'Este campo é obrigatório',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })

    $('.list-veículos button').click(function() {
        const destino = $('#contato');

        $('form #veículo-interesse').val($(this).parent().find('h3').text())

        $('html').animate({
            scrollTop: destino.offset().top 
        }, 1000)
    })
}) 