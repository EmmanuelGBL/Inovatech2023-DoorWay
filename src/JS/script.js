let texto = "A Recepção é o centro administrativo da Universidade, oferecendo uma variedade de serviços e informações essenciais para estudantes, professores e funcionários.";
document.getElementById("mensagem").innerHTML = `<i> ${texto}`;

let texto2 = "A Reitoria é um órgão executivo máximo da Universidade e é responsável por planejar, administrar, coordenar e fiscalizar todas as atividades da instituição, além de firmar convênios e parcerias para viabilizar projetos relacionados à política universitária, de modo que possam garantir o desenvolvimento e a visibilidade das atividades acadêmicas.";
document.getElementById("mensagem2").innerHTML = `<i> ${texto2}`;

let texto3 = " Localizado dentro da faculdade, o ambulatório é um espaço dedicado a fornecer cuidados médicos de qualidade aos estudantes, professores e funcionários da instituição.";
document.getElementById("mensagem3").innerHTML = `<i> ${texto3}`;

let texto4 = "Bem-vindo(a) à Praça de Alimentação da Faculdade! Aqui, você encontrará uma variedade de opções gastronômicas para satisfazer seu paladar e desfrutar de refeições deliciosas e equilibradas, com dois restaurantes incluso.";
document.getElementById("mensagem4").innerHTML = `<i> ${texto4}`;

let texto5 = " As gráficas sao um destino confiável para impressão, cópias, digitação, encadernação e para confecções de camisas personalizadas com estilo universitário. Localizadas no campus, oferecem serviços de alta qualidade e personalizados. Com tecnologia avançada, as gráficas garantem resultados nítidos e acabamento impecáveis.";
document.getElementById("mensagem5").innerHTML = `<i> ${texto5}`;

let texto6 = "Bem-vindo(a) à quadra esportiva da faculdade! O espaço oferece oportunidades para a prática de atividades físicas, esportes e momentos de lazer. Desfrute de um ambiente saudável e estimulante, onde você pode se exercitar, socializar e relaxar.";
document.getElementById("mensagem6").innerHTML = `<i> ${texto6}`;

let texto7 = "Bem-vindo(a) ao Miniauditório da Faculdade! O espaço foi projetado para proporcionar um ambiente adequado para palestras, apresentações, seminários e eventos acadêmicos. Com capacidade para acomodar um número menor de pessoas, oferecemos um local intimista e acolhedor para suas atividades acadêmicas.";
document.getElementById("mensagem7").innerHTML = `<i> ${texto7}`;

let texto8 = " A escada dá acesso ao 2º andar, onde fica localizados as turmas iniciantes dos cursos de Exatas (1º e 2º período)";
document.getElementById("mensagem8").innerHTML = `<i> ${texto8}`;

let texto9 = "Essas escadas dao acesso à 8 andares, sendo o 6º e 7º andar, destinados para pessoas do EaD e no último andar, encontra-se o auditório da fametro, e os demais andares são compostos por salas e uma biblioteca.";
document.getElementById("mensagem9").innerHTML = `<i> ${texto9}`;

let textoInstrucao = "Para interagir com o mapa basta passar o ponteiro do mouse por cima da area, se ela for selecionada, clique com o botão esquerdo do mouse. <br> <br>Para sair do Card informativo aperte o “X” ou clique em qualquer lugar fora do Card."
document.getElementById("mensagem-Instrucao").innerHTML = `<i> ${textoInstrucao}`


function abrirModal() {
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal') {
            modal.classList.remove('abrir')
        }
    }
    )
}

function abrirModal2() {
    const modal2 = document.getElementById('janela-modal2')
    modal2.classList.add('abrir')

    modal2.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal2') {
            modal2.classList.remove('abrir')
        }
    }
    )
}

function abrirModal3() {
    const modal3 = document.getElementById('janela-modal3')
    modal3.classList.add('abrir')

    modal3.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal3') {
            modal3.classList.remove('abrir')
        }
    }
    )
}

function abrirModal4() {
    const modal4 = document.getElementById('janela-modal4')
    modal4.classList.add('abrir')

    modal4.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal4') {
            modal4.classList.remove('abrir')
        }
    }
    )
}

function abrirModal5() {
    const modal5 = document.getElementById('janela-modal5')
    modal5.classList.add('abrir')

    modal5.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal5') {
            modal5.classList.remove('abrir')
        }
    }
    )
}

function abrirModal6() {
    const modal6 = document.getElementById('janela-modal6')
    modal6.classList.add('abrir')

    modal6.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal6') {
            modal6.classList.remove('abrir')
        }
    }
    )
}

function abrirModal7() {
    const modal7 = document.getElementById('janela-modal7')
    modal7.classList.add('abrir')

    modal7.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal7') {
            modal7.classList.remove('abrir')
        }
    }
    )
}

function abrirModal8() {
    const modal8 = document.getElementById('janela-modal8')
    modal8.classList.add('abrir')

    modal8.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal8') {
            modal8.classList.remove('abrir')
        }
    }
    )
}

function abrirModal9() {
    const modal9 = document.getElementById('janela-modal9')
    modal9.classList.add('abrir')

    modal9.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal9') {
            modal9.classList.remove('abrir')
        }
    }
    )
}

$('#image-map area').hover(
	function () { 
		var coords = $(this).attr('coords').split(',');
		var width = $('.map-class').width();
		var height = $('.map-class').height();
		$('.map-class .map-selector').addClass('hover').css({ 
			'left': coords[0]+'px',
			'top': coords[1] + 'px',
			'right': width - coords[2]+'px',
			'bottom': height - coords[3]
		})
	 },
	function () { 
		$('.map-class .map-selector').removeClass('hover').attr('style','');
	}
)


function abrirInstrucao() {
    const instruction = document.getElementById('janela-Instrucao')
    instruction.classList.add('abrir')

    instruction.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-Instrucao') {
            instruction.classList.remove('abrir')
        }
    }
    )
}

document.addEventListener("DOMContentLoaded", function(event) {
    let slide = document.querySelectorAll(".slide");
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 3500);
  
    function nextSlide() {
      slide[currentSlide].style.display = "none";
      currentSlide = (currentSlide + 1) % slide.length;
      slide[currentSlide].style.display = "block";
    }
  });
  
  document.addEventListener("DOMContentLoaded", function(event) {
    let datashow = document.querySelectorAll(".passar-foto");
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 5000);
  
    function nextSlide() {
      datashow[currentSlide].style.display = "none";
      currentSlide = (currentSlide + 1) % datashow.length;
      datashow[currentSlide].style.display = "block";
    }
  });
  
  
