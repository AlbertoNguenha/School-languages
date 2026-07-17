const mysql=require("mysql2")

const conexao=mysql.createConnectio({
    host:"localhost",
    user:"root",
    password:"1234",
    database:""
});

conexao.connect((erro)=>{
    if(erro){
        console.error("ERRO!",erro.message)
    }else{
        console.log("Conectado com sucesso")
    }
});

module.exports=conexao;