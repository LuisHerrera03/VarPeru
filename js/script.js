//===========================
// GALERÍA DE TRABAJOS
//===========================

const trabajos = [

    // PISCO
    {
        categoria: "pisco",
        imagen: "assets/img/galeria/pisco/pisco1.jpeg",
        titulo: "Pisco porton grabado",
        evento: "Matrimonio"
    },

    {
        categoria: "pisco",
        imagen: "assets/img/galeria/pisco/pisco2.jpeg",
        titulo: "Pisco porton grabado",
        evento: "Matrimonio"
    },

    // VINO
    {
        categoria: "vino",
        imagen: "assets/img/galeria/vino/vino1.png",
        titulo: "Riccadonna",
        evento: "Matrimonio"
    },

    {
        categoria: "vino",
        imagen: "assets/img/galeria/vino/vino2.png",
        titulo: "Botella grabada y caja de pino grabada",
        evento: "Día de la madre"
    },

    // TUBULARES
    {
        categoria:"tubulares",
        imagen:"assets/img/galeria/tubulares/Universitario.jpeg",
        titulo:"Tubular Universitario",
        evento:"Equipos de futbol-500ml"
    },

    {
        categoria:"tubulares",
        imagen:"assets/img/galeria/tubulares/BodasPlata.png",
        titulo:"Tubular personalizado",
        evento:"Bodas de plata"
    },

    // =====================
    // CAJAS PERSONALIZADAS
    // =====================

    {
        categoria:"cajas",
        imagen:"assets/img/galeria/cajas/Infanteria.jpeg",
        titulo:"Caja grabada",
        evento:"Infanteria Ayacucho"
    },

    {
        categoria:"cajas",
        imagen:"assets/img/galeria/cajas/Alianza.png",
        titulo:"Caja premium",
        evento:"Cumpleaños"
    },

    // =====================
    // CORPORATIVO
    // =====================

    {
        categoria:"corporativo",
        imagen:"assets/img/galeria/corporativo/corporativo3.jpeg",
        titulo:"Regalo Empresarial",
        evento:"Navidad"
    },

    {
        categoria:"corporativo",
        imagen:"assets/img/galeria/corporativo/corporativo2.png",
        titulo:"Botella Corporativa",
        evento:"Aniversario"
    },

    // =====================
    // EVENTOS
    // =====================

    {
        categoria:"eventos",
        imagen:"assets/img/galeria/eventos/15años.jpeg",
        titulo:"Eventos especiales",
        evento:"15 años-botella 187ml"
    },

    {
        categoria:"eventos",
        imagen:"assets/img/galeria/eventos/boda1.png",
        titulo:"Eventos especiales",
        evento:"Matrimonio-botella 50ml"
    }
    

];

const contenedorGaleria = document.querySelector(".grid-galeria");

function mostrarTrabajos(lista){

    contenedorGaleria.innerHTML = "";

    lista.forEach(trabajo =>{

        contenedorGaleria.innerHTML += `

        <div class="item-galeria" data-categoria="${trabajo.categoria}">

            <img src="${trabajo.imagen}" alt="${trabajo.titulo}">

            <div class="overlay">

                <h3>${trabajo.titulo}</h3>

                <p>${trabajo.evento}</p>

            </div>

        </div>

        `;

    });

}

mostrarTrabajos(trabajos);

//===========================
// FILTRO DE CATEGORÍAS
//===========================

const botonesFiltro = document.querySelectorAll(".btn-filtro");

botonesFiltro.forEach(boton => {

    boton.addEventListener("click", () => {

        // Cambiar botón activo
        botonesFiltro.forEach(btn => btn.classList.remove("activo"));
        boton.classList.add("activo");

        const categoria = boton.dataset.categoria;

        const filtrados = trabajos.filter(trabajo =>
            trabajo.categoria === categoria
        );

        mostrarTrabajos(filtrados);

    });

});


// Mostrar Pisco por defecto al cargar la galería
const trabajosPisco = trabajos.filter(trabajo =>
    trabajo.categoria === "pisco"
);

mostrarTrabajos(trabajosPisco);
document.querySelector('.btn-filtro[data-categoria="pisco"]').classList.add("activo");

//===========================
// BOTONES DEL CATÁLOGO
//===========================

const botonesCatalogo = document.querySelectorAll(".btn-card");

botonesCatalogo.forEach(boton=>{

    boton.addEventListener("click",(e)=>{

        e.preventDefault();

        const categoria = boton.dataset.categoria;

        // Baja hasta la galería
        document.querySelector("#galeria").scrollIntoView({
            behavior:"smooth"
        });

        // Espera que termine el scroll
        setTimeout(()=>{

            // Cambiar botón activo
            botonesFiltro.forEach(btn=>{

                btn.classList.remove("activo");

                if(btn.dataset.categoria===categoria){

                    btn.classList.add("activo");

                }

            });

            // Filtrar trabajos
            const filtrados = trabajos.filter(trabajo=>trabajo.categoria===categoria);

            mostrarTrabajos(filtrados);

        },500);

    });

});

//===========================
// MENÚ HAMBURGUESA
//===========================

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("activo");

});
// Cerrar menú al seleccionar una opción
const enlacesMenu = document.querySelectorAll('.menu a');

enlacesMenu.forEach(enlace => {

    enlace.addEventListener('click', () => {

        menu.classList.remove('activo');

    });

});

// ========================================
// PROTECCIÓN BÁSICA DE IMÁGENES
// ========================================

// Evitar arrastrar imágenes
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
});

// Bloquear clic derecho
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});