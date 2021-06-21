function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("ano");
    var resultado = document.getElementById("resultado");
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO]Verifique os dados e tente novamente!");
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - fano.value;
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if (fsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade < 3) {
                img.setAttribute("src", "./assets/bebe-masc.jpg");
            } else if (idade < 14) {
                img.setAttribute("src", "./assets/criança-masc.jpg")
            } else if (idade < 30) {
                img.setAttribute("src", "./assets/jovem-masc.jpg")
            } else if (idade < 60) {
                img.setAttribute("src", "./assets/adulto-masc.jpg")
            } else if (idade < 120) {
                img.setAttribute("src", "./assets/idoso-masc.jpg")
            } else {
                alert("Acretido que o senhor não tenha essa idade, tente novamente!");
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 3) {
                img.setAttribute("src", "./assets/bebe-fem.jpg")
            } else if (idade < 14) {
                img.setAttribute("src", "./assets/criança-fem.jpg")
            } else if (idade < 30) {
                img.setAttribute("src", "./assets/jovem-fem.jpg")
            } else if (idade < 60) {
                img.setAttribute("src", "./assets/adulto-fem.jpg")
            } else if (idade < 120) {
                img.setAttribute("src", "./assets/idoso-fem.jpg")
            } else {
                alert("Acretido que a senhora não tenha essa idade, tente novamente!");
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos <br><br>`;
        resultado.appendChild(img);
    }

}
