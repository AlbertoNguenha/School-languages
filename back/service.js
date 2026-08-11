function validarFormulario(nome,morada,curso){
    let valido=false;
    if(nome != null && morada != null)
        valido=true

    return valido
}

async function inserir(nome,morada,curso){
    if(validarFormulario(nome,morada,curso) == true){
        const inserir='insert into estudantes (nome,morada,curso) values(?,?,?)';
    }else{
        erro();
    }
}

function erro(){
    console.error("ERRO! Por favor, insira corretamente os seus dados")
}
