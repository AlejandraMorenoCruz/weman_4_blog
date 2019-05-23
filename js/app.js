/*
function articulos() {
  let cont = document.gerElementById(cont_comentarios);
  for (let i=0; 1<20; i++){
    let nvoComent= '<div class="contenedor" id ="comentarios" + i + >'
      '<div class="nota">' +
        '<h2 id="titulo_'+ i +'">' + 'Comentario'+ i +'</h2>'+
        '<p id="autor">' + i + '</p>'+
        '</div>' +
        `<div id="contenido" class="cometario_cont">${i}</div>`+
        'img scr="img/imagenGenerica.jpg" alt="imagen de ejemplo"/>' +
        '</div>';
          cont.innerHTML+=nvoComent;
      }
    }
*/
function articulos(){
  <section class="contenedor" id="comentarios">
    <article class="nota">
      <div class="">
        <h2>titulo de la nota</h2>
        <time>Fecha y hora de publicación</time>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>firma del autor</p>
      </div>
      <div class="imagen">
        <img src="img/imagenGenerica.jpg" height="200px" alt="imagen ilustrativa">
      </div>
    </article>
  <section>
}
