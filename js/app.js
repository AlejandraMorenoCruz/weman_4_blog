function articulos(){
  let articulos = document.getElementById('articulos');

  for(let cont = 0; cont<10; cont++){
    let html = `<section class="contenedor" id="comentarios">
      <article class="nota">
        <div class="">
          <h2>titulo de la nota ${cont} </h2>
          <time>Fecha y hora de publicación</time>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p class="firma">firma del autor</p>
        </div>
        <div class="imagen">
          <img src="img/imagenGenerica.jpg" height="200px" alt="imagen ilustrativa">
        </div>
      </article>
    <section>`;
    articulos.innerHTML+=html;
  }
}
