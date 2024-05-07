function validarFormatoRut(){
    let rutInput = document.querySelector('input[name="rut"]')
    if(rutInput.value.match(/[0-9kK-]/)){
    }else{
        rutInput.value="";
        return false
    }
}

function validarRut(){
    
    let rutInput = document.querySelector('input[name="rut"]')
    let valorInput = rutInput.value
    let [rutNumeros,rutDigito]=valorInput.split("-");
    let numerosAlReves = rutNumeros.split('').reverse().join('');

    let multiploSerie=2;
    let resultadoSuma=0;

    for(var i=0; i< numerosAlReves.length;i++){
        resultadoSuma= resultadoSuma+ (multiploSerie*numerosAlReves[i])
        multiploSerie++ 
        if(multiploSerie==8)multiploSerie=2;

    }
    let parteEntera = parseInt(resultadoSuma/11);
    let digitoV= 11-(resultadoSuma-(parteEntera*11))

    if( digitoV==rutDigito){
        rutInput.classList.remove('warnig')
    }else{
        rutInput.classList.add('warnig')
    }
    

    console.log(rutNumeros)
    console.log(valorInput);
}
