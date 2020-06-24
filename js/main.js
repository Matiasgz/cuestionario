//funcion para imprimir reloj

minuto = 1;// momentoActual.getMinutes()
segundo = 29;// momentoActual.getSeconds()
i = 29;
num=1;
function mueveReloj() {
       // momentoActual = new Date()


       str_segundo = new String(segundo)
       if (segundo != 00) {

              str_minuto = new String(minuto)

               if (str_minuto.length == 1)
                 minuto = "0" + minuto;
              else
                     minuto = minuto;


              if (segundo <= 10 )
                     segundo = "0" + i;
              else
                     segundo = i;
       }
       else {
              segundo = 59;
              i = 59;
              num -= 1;
              minuto=  "0"+ num;
              
       }


       

       i = i - 1;



       horaImprimible = minuto + " : " + segundo;



       document.getElementById("crono").innerHTML = horaImprimible;

       setTimeout("mueveReloj()", 1000);
}



//funcion para dar un tiempo al formulario

var timout;
//var seg = 10;
function apagar() {
      
       timout = setTimeout(function () {



              casiTerminado();
       }, 90000, "JavaScript");
}
function cancelar() {
       clearTimeout(timout);
       document.getElementById("crono").innerHTML = "Operación cancelada.";
       document.getElementById("crono").style.display='none';

}

function casiTerminado() {
       alert("Se termino tu tiempo man ¡¡suerte!! ;) ");
       terminado();
}




/* BOTON  EMPEZAR */

var empezar = document.getElementById('empezar');
empezar.onclick = function () {
       mueveReloj();
       apagar();
       empezar.style.display = 'none';
       var preg = document.getElementById('todas');
       preg.style.display = 'block';

       AOS.init();


       document.getElementById('respuesta1').focus();

}







//boton enviar preguntas


function terminado() {

       cancelar();



         //funcion para imprimir varios checked

  function imprimirresultado(doc, res) {
       var vector = doc;
       for (var i = 0; i < vector.length; i++) {
              if (vector[i].checked) {
                     res.innerHTML += vector[i].value + "<br>";
              }
       }
}

 //funcion para radio button
 function getRadioButtonSelectedValue(ctrl) {
       for (i = 0; i < ctrl.length; i++)
              if (ctrl[i].checked) return ctrl[i].value;
}

  // funcion para validar 

  function valida(val, palabra) {


       for (var i = 0; i < val.length; i++) {

              if (val[i].checked && (val[i].value == palabra))
                     return true;

       }
       return false;
}

// funcion para contar checked

function contadorRespuestas(resp) {

       var c = 0;
       for (var i = 0; i < resp.length; i++) {

              if (resp[i].checked)
                     c++;
       }
       return c;
}




       var enviar = document.getElementById('enviar');
       document.getElementById('todas').style.display = 'none';
       var int = document.getElementById('intro');
       int.style.display = 'none';
       var rtas = document.getElementById('rtas');
       rtas.style.display = 'block';


       //cronometro




       var contador = 0;
       var sumador = 0;

       //pregunta 1
       document.getElementById('pUno').innerHTML = document.getElementById('p1').textContent;
       document.getElementById('rUno').innerHTML = document.getElementById('respuesta1').value;

       if (((document.getElementById('respuesta1').value).toLowerCase() == "hypertext markup language") ||
               ((document.getElementById('respuesta1').value).toLowerCase() == "lenguaje de marcas de hipertexto") ||
               ((document.getElementById('respuesta1').value).toLowerCase() == "lenguaje de marcado de hipertexto")) {
             
                     document.getElementById('uno').style.background = 'rgba(51, 141, 56, 0.46)';
              contador++;
              sumador++;
       }
       else {
              document.getElementById('uno').style.background = 'rgba(200, 47, 47, 0.6)';
              contador++;
       }
       //pregunta 2
       document.getElementById('pDos').innerHTML = document.getElementById('p2').textContent;
       document.getElementById('rDos').innerHTML = document.getElementById('respuesta2').value;

       if ((document.getElementById('respuesta2').value).toLowerCase() == "no") {
              document.getElementById('dos').style.background = 'rgba(51, 141, 56, 0.46)';
              contador++;
              sumador++;
       }
       else {
              document.getElementById('dos').style.background = 'rgba(200, 47, 47, 0.6)';
              contador++;
       }
       //pregunta 3
       document.getElementById('pTres').innerHTML = document.getElementById('p3').textContent;
       document.getElementById('rTres').innerHTML = document.getElementById('respuesta3').value;

       if (document.getElementById('respuesta3').value == "p") {
              document.getElementById('tres').style.background = 'rgba(51, 141, 56, 0.46)';
              sumador++;
              contador++;
       }
       else {
              document.getElementById('tres').style.background = 'rgba(200, 47, 47, 0.6)';
              contador++;
       }
      

       //pregunta 4
       document.getElementById('pCuatro').innerHTML = document.getElementById('p4').textContent;
       imprimirresultado(document.getElementsByName("ancho"), document.getElementById("rCuatro"));

       if (getRadioButtonSelectedValue(document.getElementsByName("ancho")) == "width") {
              document.getElementById('cuatro').style.background = 'rgba(51, 141, 56, 0.46)';
              sumador++;
              contador++;
       }
       else {
              document.getElementById('cuatro').style.background = 'rgba(200, 47, 47, 0.6)';
              contador++;

       }
       //pregunta 5
       document.getElementById('pCinco').innerHTML = document.getElementById('p5').textContent;
       imprimirresultado(document.getElementsByName("colores"), document.getElementById("rCinco"));


       if (getRadioButtonSelectedValue(document.getElementsByName("colores")) == "color") {
              document.getElementById('cinco').style.background = 'rgba(51, 141, 56, 0.46)';
              sumador++;
              contador++;
       }
       else {
              document.getElementById('cinco').style.background = 'rgba(200, 47, 47, 0.6)';
              contador++;
       }

       //pregunta 6
       document.getElementById('pSeis').innerHTML = document.getElementById('p6').textContent;
      
       imprimirresultado(document.getElementsByName("signo"), document.getElementById("rSeis"));



       if (getRadioButtonSelectedValue(document.getElementsByName("signo")) == "herencia") {
              document.getElementById('seis').style.background = 'rgba(51, 141, 56, 0.46)';
              sumador++;
              contador++;
       }
       else {
              document.getElementById('seis').style.background = 'rgba(200, 47, 47, 0.6)';
              contador++;
       }


       //pregunta 7
       document.getElementById('pSiete').innerHTML = document.getElementById('p7').textContent;

       imprimirresultado(document.getElementsByName("variables"), document.getElementById("rSiete"));

       if ((valida(document.getElementsByName("variables"), "var") == true) &&
              (valida(document.getElementsByName("variables"), "const") == true) &&
              (contadorRespuestas(document.getElementsByName("variables")) == 2)) {

              document.getElementById('siete').style.background = 'rgba(51, 141, 56, 0.46)';
              sumador++;
              contador++;
       }
       else {
              document.getElementById('siete').style.background = 'rgba(200, 47, 47, 0.6)';
              contador++;
       }

       //pregunta 8 
       document.getElementById('pOcho').innerHTML = document.getElementById('p8').textContent;

       imprimirresultado(document.getElementsByName("metodo"), document.getElementById("rOcho"));

       if ((valida(document.getElementsByName("metodo"), "Ordenar") == true) && (contadorRespuestas(document.getElementsByName("metodo")) == 1)) {
              document.getElementById('ocho').style.background = 'rgba(51, 141, 56, 0.46)';
              sumador++;
              contador++;
       }
       else {
              document.getElementById('ocho').style.background = 'rgba(200, 47, 47, 0.6)';
              contador++;
       }
       //pregunta 9

       document.getElementById('pNueve').innerHTML = document.getElementById('p9').textContent;
       imprimirresultado(document.getElementsByName("str"), document.getElementById("rNueve"));


       if ((valida(document.getElementsByName("str"), "Log()") == true) &&
              (valida(document.getElementsByName("str"), "floor()") == true) &&
              (contadorRespuestas(document.getElementsByName("str")) == 2)) {
              document.getElementById('nueve').style.background = 'rgba(51, 141, 56, 0.46)';
              sumador++;
              contador++;
       }
       else {
              document.getElementById('nueve').style.background = 'rgba(200, 47, 47, 0.6)';

       }

       // puntuacion 
       puntuacion = document.getElementById("puntaje");
       
              if (sumador == 9)
                     puntuacion.innerHTML = "FELICIDADES ALCANZASTE EL PUNTAJE MAXIMO " + "<br>" + "PREGUNTAS ACERTADAS: " + sumador + "/9";
              else
                     if (sumador >= 6)
                            puntuacion.innerHTML = "FELICIDADES LOGRASTE APROBAR " + "<br>" + "PREGUNTAS ACERTADAS: " + sumador + "/9";
                     else
                            puntuacion.innerHTML = "MEJOR SUERTE PARA LA PROXIMA " + "<br>" + "PREGUNTAS ACERTADAS: " + sumador + "/9";
       
      

       

}