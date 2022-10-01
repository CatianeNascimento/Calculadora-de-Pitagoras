
    var button = document.getElementById('button');

    function calculoHipotenusa(){
        var a = document.getElementById('aInput').value;
        var b = document.getElementById('bInput').value;

        var resultado = document.getElementById('resultado');

        var hipotenusa = Math.round(Math.sqrt((a*a)+(b*b)));

       resultado.innerHTML= hipotenusa;
    }

        button.addEventListener('click', calculoHipotenusa);
    