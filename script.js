document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        item.addEventListener('show.bs.collapse', function() {
            const body = this.querySelector('.accordion-body');
            body.classList.add('animate__animated', 'animate__fadeIn');
        });

        item.addEventListener('hide.bs.collapse', function() {
            const body = this.querySelector('.accordion-body');
            body.classList.remove('animate__animated', 'animate__fadeIn');
        });
    });
});





var app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propidad o una accion del objeto
// Las acciones se distinguen por los parentesis ()
typewriter
  .pauseFor(2500)
  .typeString('Voces silenciadas')
  .pauseFor(300)
  .deleteAll()
  .typeString('Vulneración de derechos en adultos mayores')
  .pauseFor(1000)
  .start();


  var frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

typewriterFrase
  .pauseFor(2500)
  .typeString('"Negar a las personas sus derechos humanos es desafiar su misma humanidad."')
  .pauseFor(300)
  .deleteAll()
  .typeString('<i>Nelson Mandela</i>')
  .pauseFor(1000)
  .start();

  