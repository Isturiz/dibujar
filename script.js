// Variables
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton_lineas");
var boton1 = document.getElementById("boton_eliminar");
var color_1 = document.getElementById("color_1");
var color_2 = document.getElementById("color_2");

// Eventos
boton.addEventListener("click", dibujarPorClick);
boton1.addEventListener("click", eliminarDibujo);

var d = document.getElementById("dibujo_lineas");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(colorp, xinicial, yinicial, xfinal, yfinal)
{

  lienzo.beginPath();
  lienzo.strokeStyle = colorp;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarPorClick()
{
  // Línea comentada para optimizar las pruebas
  var lineas = parseInt(texto.value);
  //var lineas = 10
  var color_linea;
  var l = 0; 
  var y, x;
  var espacio = ancho / lineas;
  
  
  
  for(l = 0; l < lineas; l++)
  {
    y = espacio * l;
    x = espacio * (l + 1);
    color_linea = color_1.value;

    dibujarLinea(color_linea, 0, y, x, 300);
  }
  
  
  for(l = 0; l < lineas; l++)
  {
    x = espacio * l;
    y = 300 - (espacio * (l + 1));
    color_linea = color_2.value;

    dibujarLinea(color_linea, 300, x, y, 300);
  }
  
  for(l = 0; l < lineas; l++)
  {
    x = espacio * l;
    y = espacio * (l + 1);
    color_linea = color_1.value;
    
    dibujarLinea(color_linea, x, 0, 300, y);
  }

  for(l = 0; l < lineas; l++)
  {
    x = 300 - (espacio * l);
    y = espacio * (l + 1);
    color_linea = color_2.value;
    
    dibujarLinea(color_linea, x, 0, 0, y);
  }
  
  if(lineas > 0)
  {
    dibujarLinea("black", 1,1,1,299);
    dibujarLinea("black", 1,299,299,299);
    dibujarLinea("black", 1,1,299,1);
    dibujarLinea("black", 299,1,299,299);
  }
  
}

function eliminarDibujo()
{
  texto.value = "";
  lienzo.clearRect(0, 0, lienzo.canvas.width, lienzo.canvas.height);
}


