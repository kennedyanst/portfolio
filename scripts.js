window.sr = ScrollReveal({reset: true});

sr.reveal('.area-1', {duration: 1500});

sr.reveal('.area-2', {
    rotate: {x:0, y:80, z:0},
    duration: 2500
});

sr.reveal('.area-3', {
    rotate: {x:100, y:100, z:0},
    duration: 2500
});

sr.reveal('.area-4', {
    rotate: {x:150, y:150, z:0},
    duration: 2500
});

sr.reveal('.area-5', {
    rotate: {x:0, y:0, z:190},
    duration: 2500
});

sr.reveal('.area-6', {
    rotate: {x:0, y:200, z:0},
    duration: 2500
});

sr.reveal('.area-7', {
    rotate: {x:100, y:0, z:0},
    duration: 2500
});


sr.reveal('.area-8', {
    origin: 'left',  // Define a origem da animação (pode ser 'top', 'bottom', 'right', 'left', etc.)
    distance: '100px', // Define a distância inicial do elemento
    duration: 2500,   // Define a duração da animação em milissegundos
    delay: 0,         // Define um atraso antes da animação
    reset: true      
});


sr.reveal('.area-9', {
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 200, // Atraso de 200ms
    reset: true
});


sr.reveal('.area-10', {
    origin: 'right',
    distance: '100px',
    duration: 2500,
    delay: 400, // Atraso de 400ms
    reset: true});