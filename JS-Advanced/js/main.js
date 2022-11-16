const $btnIniciarSesion = document.querySelector('.iniciarSesion-btn'),
      $btnRegistro = document.querySelector('.registro-btn'),
      $iniciarSesion = document.querySelector('.iniciarSesion'),
      $registro = document.querySelector('.registro');

document.addEventListener('click', e => {
    if(e.target === $btnIniciarSesion || e.target === $btnRegistro){
        $iniciarSesion.classList.toggle('active');
        $registro.classList.toggle('active')
    }
})