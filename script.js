function verificar() {
    var data = new Date();
    //pega o ano com 4 digitos ex 1995
    var ano = data.getFullYear();
    //pega ano digitado no formulario
    var fano = document.getElementById("ano");
    var resultado = document.getElementById("resultado");
    //ano digitado for igual a zero ou maior que ano da erro
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO]Verifique os dados e tente novamente!");
    } else {
        //recebe o sexo escolhido no formulario
        var fsex = document.getElementsByName("radsex");
        //calcula a idade
        var idade = ano - fano.value;
        //é definido abaixo pelo if e else
        var genero = "";
        //cria uma tag IMG sem precisar ir até o HTML
        var img = document.createElement("img");
        //igual acima porem para criar o atributo, no caso o ID
        img.setAttribute("id", "foto");
        if (fsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute("src", "./assets/bebe-masc.jpg");
            } else if (idade < 14) {
                //criança
                img.setAttribute("src", "./assets/criança-masc.jpg")
            } else if (idade < 30) {
                //jovem
                img.setAttribute("src", "./assets/jovem-masc.jpg")
            } else if (idade < 60) {
                //adulto
                img.setAttribute("src", "./assets/adulto-masc.jpg")
            } else if (idade < 120) {
                //idoso
                img.setAttribute("src", "./assets/idoso-masc.jpg")
            } else {
                alert("Acretido que o senhor não tenha essa idade, tente novamente!");
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute("src", "./assets/bebe-fem.jpg")
            } else if (idade < 14) {
                //criança
                img.setAttribute("src", "./assets/criança-fem.jpg")
            } else if (idade < 30) {
                //jovem
                img.setAttribute("src", "./assets/jovem-fem.jpg")
            } else if (idade < 60) {
                //adulto
                img.setAttribute("src", "./assets/adulto-fem.jpg")
            } else if (idade < 120) {
                //idoso
                img.setAttribute("src", "./assets/idoso-fem.jpg")
            } else {
                alert("Acretido que a senhora não tenha essa idade, tente novamente!");
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos <br><br>`;
        resultado.appendChild(img);
    }

}