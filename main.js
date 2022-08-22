function preload() {
}


function setup() {
  canvas = createCanvas(400,400);
  canvas.position(480,250)
  video = createCapture(VIDEO);
  video.hide();
  tintc = "";
}

function draw() {
  image(video,0,0,400,400);
  tint(tintc);
}

function aplicar() {
  tintc = document.getElementById("input").value;
}

function descargar() {
  save("filtro.png");
}