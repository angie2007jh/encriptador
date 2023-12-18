[Uploading in<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto mensaje encriptado </title>
    <link rel="styesheet" href="style.css" type="text/css"
      media="all"
</head>
<body
       <center>
     <h1> !Bienvenidos!</h1> 
       </center>
    <center>
    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" placeholder="ingresa tu mensaje"></textarea>
    </center>
  
  <br>
      <center>
    <label for="desplazamiento">Desplazamiento:</label>
    <input type="number" id="desplazamiento" placeholder="Ingresa el desplazamiento">
      </center>
   
  <br>
      <center>
    <button onclick="encriptar()">Encriptar</button>
    <button onclick="desencriptar()">Desencriptar</button> 
      </center>
  
      <center>
    <h2>Resultado:</h2>
    <p id="resultado"></p>
      </center>
      
</body>
</html>

dex.html…]()










[Uplo   function encript(texto, desplazamiento) {
            let resultado = "";
            for (let i = 0; i < texto.length; i++) {
                let charCode = texto.charCodeAt(i);
                if (charCode >= 65 && charCode <= 90) {
                    resultado += String.fromCharCode(((charCode - 65 + desplazamiento) % 26) + 65);
                } else if (charCode >= 97 && charCode <= 122) {
                    resultado += String.fromCharCode(((charCode - 97 + desplazamiento) % 26) + 97);
                } else {
                    resultado += texto.charAt(i);
                }
            }
            return resultado;
        }

        function encriptar() {
            let mensajeOriginal = document.getElementById("mensaje").value;
            let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
            let mensajeEncriptado = encriptarCesar(mensajeOriginal, desplazamiento);
            document.getElementById("resultado").innerText = "Encriptado: " + mensajeEncriptado;
        }

        function desencriptar() {
            let mensajeEncriptado = document.getElementById("mensaje").value;
            let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
            let mensajeDesencriptado = encriptarCesar(mensajeEncriptado, -desplazamiento);
            document.getElementById("resultado").innerText = "Desencriptado: " + mensajeDesencriptadoading script.js…]()

[Uploabody {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }

        textarea {
            width: 80%;
            height: 100px;
        }
         ding style.css…]()

