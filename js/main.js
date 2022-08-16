$(document).ready(function () {

    // Slider
    if (window.location.href.indexOf('index') > -1) {
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    }
    // Posts
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: '¿Que es la Inteligencia Artificial?',
                date: 'Publicado el dia domingo 22 de noviembre de 2020',
                content: 'La Inteligencia Artificial <span">(IA)</span> es la combinación de algoritmos planteados con el propósito de crear máquinas que presenten las mismas capacidades que el ser humano. Una tecnología que todavía nos resulta lejana y misteriosa, pero que desde hace unos años está presente en nuestro día a día a todas horas.'
            },
            {
                title: 'Historia',
                date: 'Publicado el dia domingo 22 de noviembre de 2020',
                content: 'El nacimiento de la <span>inteligencia artifical</span> se produjo en la década de los 50 y uno de los principales fundadores de la disciplina fue el matemático inglés <span style="color: #036;font-weight: bold;">Alan Turing</span>. Su famoso Test de Turing planteaba una serie de cuestiones a las que debían responder por un lado una persona y por otro una <span style="color: #036;font-weight: bold;">computadora</span>, ambos ocultos a la vista de los presentes. Si la máquina era lo suficientemente capaz, sería imposible distinguir a uno de otro.<br>' +
                    'En 1956, se produjo la primera conferencia sobre <span>inteligencia artificial</span> en el <span>Darmouth College</span>, y una de sus consecuencias fue la fundación del departamento de <span>IA</span> en el reputado MIT por parte de dos de los principales impulsores de esta rama científica, Marvin Minsky y John McCarthy (creador del lenguaje <span>Lisp</span>).'
            },
            {
                title: 'Entornos Diversos',
                date: 'Publicado el dia domingo 22 de noviembre de 2020',
                content: 'La enorme repercusión de esta ciencia en todos los ámbitos del conocimiento actual ha permitido importantes avances gracias a sus subramas. Tal es el caso de los sistemas expertos, la minería de datos, la lógica borrosa o los algoritmos de búsqueda.' +
                    'Su potencia quedó demostrada públicamente cuando en 1996 la máquina Deep Blue derrotó al campeón del mundo de ajedrez <span>Garry Kasparov</span>, ante la sorpresa de propios y extraños.'
            }
        ];

        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <!-- <a href="#" class="boton-more">Leer más</a> -->
                    
                </article>
            `;
            $('#posts').append(post);
        });
    }
    // Selector de Tema
    var theme = $('#theme');

    $('#to-green').click(function () {
        theme.attr("href", "css/green.css");
        localStorage.setItem("theme", "to-green"); // Guardar tema en la memoria local del navegador
    });

    $('#to-red').click(function () {
        theme.attr("href", "css/red.css");
        localStorage.setItem("theme", "to-red"); // Guardar tema en la memoria local del navegador
    });

    $('#to-blue').click(function () {
        theme.attr("href", "css/blue.css");
        localStorage.setItem("theme", "to-blue"); // Guardar tema en la memoria local del navegador
    });

    // Boton Ver más 1
    var boton1 = $('#boton-pa1');
    var mostrar_mas1 = $('#more-pa1');

    boton1.click(function (e) {
        e.preventDefault();

        if (boton1.text() == 'Ver más') {
            boton1.text('Mostrar menos').css('width', '103px');
            mostrar_mas1.css('display', 'block');
        } else {
            boton1.text('Ver más').css('width', '70px');
            mostrar_mas1.css('display', 'none');
        }
    });

    // Boton Ver más 2
    var boton2 = $('#boton-pa2');
    var mostrar_mas2 = $('#more-pa2');

    boton2.click(function (e) {
        e.preventDefault();

        if (boton2.text() == 'Ver más') {
            boton2.text('Mostrar menos').css('width', '103px');
            mostrar_mas2.css('display', 'block');
        } else {
            boton2.text('Ver más').css('width', '70px');
            mostrar_mas2.css('display', 'none');
        }
    });

    // Boton Ver más 3
    var boton3 = $('#boton-pa3');
    var mostrar_mas3 = $('#more-pa3');

    boton3.click(function (e) {
        e.preventDefault();

        if (boton3.text() == 'Ver más') {
            boton3.text('Mostrar menos').css('width', '103px');
            mostrar_mas3.css('display', 'block');
        } else {
            boton3.text('Ver más').css('width', '70px');
            mostrar_mas3.css('display', 'none');
        }
    });

    // Botón Ver más 4
    var boton4 = $('#boton-pa4');
    var mostrar_mas4 = $('#more-pa4');

    boton4.click(e => {
        e.preventDefault();

        if (boton4.text() == 'Ver más') {
            boton4.text('Mostrar menos').css('width', '103px');
            mostrar_mas4.css('display', 'block');
        } else {
            boton4.text('Ver más').css('width', '70px');
            mostrar_mas4.css('display', 'none');
        }
    });


    // Boton ver mas 5
    var boton5 = $('#boton-pa5');
    var mostrar_mas5 = $('#more-pa5');

    boton5.click(e => {
        e.preventDefault();

        if (boton5.text() == 'Ver más') {
            boton5.text('Mostar menos').css('width', '103px');
            mostrar_mas5.css('display', 'block');
        } else {
            boton5.text('Ver más').css('width', '70px');
            mostrar_mas5.css('display', 'none');
        }
    });

    // Competencia 2
    // Boton ver mas 1
    var boton1_com1 = $('#boton-pa1-com1');
    var mostrar_mas1_com1 = $('#more-pa1-com1');

    boton1_com1.click(function (e) {
        e.preventDefault();

        if (boton1_com1.text() == 'Ver más') {
            boton1_com1.text('Mostar menos').css('width', '103px');
            mostrar_mas1_com1.css('display', 'block');
        } else {
            boton1_com1.text('Ver más').css('width', '70px');
            mostrar_mas1_com1.css('display', 'none');
        }
    });

    // Boton ver mas 2
    var boton2_com1 = $('#boton-pa2-com1');
    var mostrar_mas2_com1 = $('#more-pa2-com1');

    boton2_com1.click(function (e) {
        e.preventDefault();

        if (boton2_com1.text() == 'Ver más') {
            boton2_com1.text('Mostar menos').css('width', '103px');
            mostrar_mas2_com1.css('display', 'block');
        } else {
            boton2_com1.text('Ver más').css('width', '70px');
            mostrar_mas2_com1.css('display', 'none');
        }

    });

    // Boton ver mas 3
    var boton3_com1 = $('#boton-pa3-com1');
    var mostrar_mas3_com1 = $('#more-pa3-com1');

    boton3_com1.click(function (e) {
        e.preventDefault();

        if (boton3_com1.text() == 'Ver más') {
            boton3_com1.text('Mostar menos').css('width', '103px');
            mostrar_mas3_com1.css('display', 'block');
        } else {
            boton3_com1.text('Ver más').css('width', '70px');
            mostrar_mas3_com1.css('display', 'none');
        }

    });

    /*************************
            COMPETENCIA 3
    *************************/

    // Boton ver mas 1
    var boton1_com3 = $('#boton-pa1-com3');
    var mostrar_mas1_com3 = $('#more-pa1-com3');

    boton1_com3.click(function (e) {
        e.preventDefault();

        if (boton1_com3.text() == 'Ver más') {
            boton1_com3.text('Mostar menos').css('width', '103px');
            mostrar_mas1_com3.css('display', 'block');
        } else {
            boton1_com3.text('Ver más').css('width', '70px');
            mostrar_mas1_com3.css('display', 'none');
        }
    });

    // Boton ver mas 2
    var boton2_com3 = $('#boton-pa2-com3');
    var mostrar_mas2_com3 = $('#more-pa2-com3');

    boton2_com3.click(function (e) {
        e.preventDefault();

        if (boton2_com3.text() == 'Ver más') {
            boton2_com3.text('Mostar menos').css('width', '103px');
            mostrar_mas2_com3.css('display', 'block');
        } else {
            boton2_com3.text('Ver más').css('width', '70px');
            mostrar_mas2_com3.css('display', 'none');
        }
    });

    // Boton ver mas 3
    var boton3_com3 = $('#boton-pa3-com3');
    var mostrar_mas3_com3 = $('#more-pa3-com3');

    boton3_com3.click(function (e) {
        e.preventDefault();

        if (boton3_com3.text() == 'Ver más') {
            boton3_com3.text('Mostar menos').css('width', '103px');
            mostrar_mas3_com3.css('display', 'block');
        } else {
            boton3_com3.text('Ver más').css('width', '70px');
            mostrar_mas3_com3.css('display', 'none');
        }
    });

    /*************************
            COMPETENCIA 4
    *************************/

    // Boton ver mas 1
    var boton1_com4 = $('#boton-pa1-com4');
    var mostrar_mas1_com4 = $('#more-pa1-com4');

    boton1_com4.click(function (e) {
        e.preventDefault();

        if (boton1_com4.text() == 'Ver más') {
            boton1_com4.text('Mostar menos').css('width', '103px');
            mostrar_mas1_com4.css('display', 'block');
        } else {
            boton1_com4.text('Ver más').css('width', '70px');
            mostrar_mas1_com4.css('display', 'none');
        }
    });

    var boton2_com4 = $('#boton-pa2-com4');
    var mostrar_mas2_com4 = $('#more-pa2-com4');

    boton2_com4.click(function (e) {
        e.preventDefault();

        if (boton2_com4.text() == 'Ver más') {
            boton2_com4.text('Mostar menos').css('width', '103px');
            mostrar_mas2_com4.css('display', 'block');
        } else {
            boton2_com4.text('Ver más').css('width', '70px');
            mostrar_mas2_com4.css('display', 'none');
        }
    });

    var boton3_com4 = $('#boton-pa3-com4');
    var mostrar_mas3_com4 = $('#more-pa3-com4');

    boton3_com4.click(function (e) {
        e.preventDefault();

        if (boton3_com4.text() == 'Ver más') {
            boton3_com4.text('Mostar menos').css('width', '103px');
            mostrar_mas3_com4.css('display', 'block');
        } else {
            boton3_com4.text('Ver más').css('width', '70px');
            mostrar_mas3_com4.css('display', 'none');
        }
    });
});
