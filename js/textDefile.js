


var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<strong>CHARLES Cantin</strong>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>PHOTOGRAPHE</strong>')
    .pauseFor(2500)
    .deleteAll()
    // .typeString('<strong>PROFESSIONEL</strong>')
    // .pauseFor(2500)
    .start();