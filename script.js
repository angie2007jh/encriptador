   function encript(texto, desplazamiento) {
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
            document.getElementById("resultado").innerText = "Desencriptado: " + mensajeDesencriptado