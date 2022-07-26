// Conocimientos

const htmlFrontendHome = document.getElementById("frontend");
const htmlBackendHome = document.getElementById("backend");

htmlFrontendHome.innerHTML = Conocimientos(frontend);
htmlBackendHome.innerHTML = Conocimientos(backend);

// Últimos 4 Proyectos

const htmlProyectos3 = document.getElementById("proyectos-3");
const renderProyecto3 = Proyectos(true);
htmlProyectos3.innerHTML = renderProyecto3;

