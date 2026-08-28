const db=require("./db")

function validarFormulario(nome,morada,curso){
    if(nome != null && morada != null){
        return true;
    }
    return false;
}

async function inserir(nome,morada,curso){
    if(validarFormulario(nome,morada,curso) == true){
        const inserir='insert into estudantes (nome,morada,curso) values(?,?,?)';
        const [resultado]=await db.execute(sql[
            nome,
            morada,
            curso
        ]);

        return resultado;
    }else{
        erro();
    }
}

function erro(){
    console.error("ERRO! Por favor, insira corretamente os seus dados")
}

module.export={
    validarFormulario,
    inserir,
    erro
};