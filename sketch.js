// --- Variables Globales (si las necesitas más adelante) ---
// let miVariable;

// --- Función setup() ---
// Se ejecuta UNA VEZ al inicio para configurar el entorno.
function setup() {
    // Crea un lienzo (canvas) que ocupa toda la ventana del navegador
    createCanvas(windowWidth, windowHeight);
    // background(0); // Fondo negro inicial (opcional, lo pondremos en draw)
    // miVariable = 0; // Inicializar variables si es necesario
    console.log("Setup complete! Canvas created."); // Mensaje para la consola
  }
  
  // --- Función draw() ---
  // Se ejecuta REPETIDAMENTE (como un bucle de animación, ~60 veces por segundo).
  // ¡Aquí es donde ocurre la magia del dibujo y la interacción en vivo!
  function draw() {
    // 1. Limpiar/Preparar el fondo en cada fotograma
    background(0, 10); // Fondo negro con un poco de transparencia (crea estelas)
                       // Prueba cambiando los valores, ej: background(255) para blanco
  
    // 2. Leer Entradas (en este caso, la posición del ratón)
    let mouseXPos = mouseX; // p5.js nos da la posición X del ratón
    let mouseYPos = mouseY; // p5.js nos da la posición Y del ratón
  
    // 3. Calcular/Actualizar Estados (mapear la posición a algo visual)
    // Mapeamos la posición X del ratón (0 a ancho) a un color rojo (0 a 255)
    let redColor = map(mouseXPos, 0, width, 0, 255);
    // Mapeamos la posición Y del ratón (0 a alto) a un tamaño (10 a 100)
    let circleSize = map(mouseYPos, 0, height, 10, 100);
  
    // 4. Dibujar en el lienzo
    noStroke(); // No queremos borde en la elipse
    fill(redColor, 50, 150, 200); // Color de relleno: R (variable), G (fijo), B (fijo), Alpha (transparencia)
    ellipse(mouseXPos, mouseYPos, circleSize, circleSize); // Dibuja una elipse en la posición del ratón, con tamaño variable
  
    // Puedes añadir más elementos visuales aquí que reaccionen al ratón o a otras cosas
  }
  
  // --- Función windowResized() ---
  // Se ejecuta si el usuario cambia el tamaño de la ventana del navegador.
  function windowResized() {
    // Redimensiona el lienzo para que siempre ocupe toda la ventana.
    resizeCanvas(windowWidth, windowHeight);
  }
  
  // --- Otras funciones de eventos (Opcional para empezar) ---
  // function mousePressed() {
  //   // Código que se ejecuta cuando haces clic con el ratón
  //   console.log("Mouse clicked at:", mouseX, mouseY);
  // }
  
  // function keyPressed() {
  //   // Código que se ejecuta cuando presionas una tecla
  //   console.log("Key pressed:", key);
  // }