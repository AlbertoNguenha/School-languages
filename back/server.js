import express, { json } from "express";
const service=require("./service")
const app=express();

app.use(express.json())

let pessoa=[]
//lista todos os usuarios
app.get("/pessoa", (req,res)=>{
    res.send(pessoa)
})
//cria um novo usuario
app.post("/pessoa", async (req,res)=>{
    try{
        const {nome,morada,curso}=req.body;
        await service.inserir(nome,morada,curso);
    }catch{
        console.error(error);
        res.status(400).json({
            messagem:"Cadastro nao efectuado"
        });
    }
})
//actualiza um usuario
app.put("/pessoa/:id", (req,res)=>{
    const id=Number(req.params.id)
    const dados=req.body;

    res.json({
        messagem:"Actualizar usuario", id,dados
    });
})

app.listen(3000, ()=>{
    console.log("Conectado")
})