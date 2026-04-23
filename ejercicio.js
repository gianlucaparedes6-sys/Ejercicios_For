function listaNumeros(){
    for (let i = 0; i <= 3; i++) {
        console.log(i);
    }
}
function ejecutar(numEjercicio){
    if(numEjercicio === 1){
        listaNumeros();
        listarNumerosReverza();
    }else if(numEjercicio === 2){
        listarNumerosReverza();
    }else if(numEjercicio === 3){
        listarPares();
    }

}
function listarNumerosReverza(){
    for (let i = 3; i > 0; i--) {
        console.log(i);
    }
}
function listarPares(){
    for (let i = 0; i < 10; i += 2) {
        if(i % 2 === 0){
            console.log(i);
        }
    }
}
