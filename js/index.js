const navToggle = document.querySelector(".nav-toggle"); //para copiar y pegar la línea se usó alt shift abajo//
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

/*Al darle click al toggle le vamos a añadir un event listener que va a escuchar el evento click y le vamos a
pasar una función en la que el navMenu.classList.toggle le va a hacer un toggle a la clase (si está la clase
la elimina y si no está la añade), en este caso a la clase .nav-menu_visible
 En resumen: Cuando está en modo mobile al clickear el menú hamburguesa, despliega u oculta el menú*/

 