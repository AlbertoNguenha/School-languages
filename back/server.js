import express, { json } from "express";
const db=require("./db")

const app=express();

app.use(express.json())

let pessoa=[]
//lista todos os usuarios
app.get("/pessoa", (req,res)=>{
    res.send(pessoa)
})
//cria um novo usuario
app.post("/pessoa", (req,res)=>{
    const {nome,curso, telefone}=req.body
    pessoa.push({nome,curso, telefone})
    res.json({
        messagem:"Usuario criado com sucesso"
    })
})
//actualiza um usuario
app.put("/pessoa/:id", (req,res)=>{
    const id=Number(req.params.id)
    const i=pessoa.findIndex(u=>u.id==id)

    if(id==-1){
        return res.status(404).json({messagem:"O usuario nao existe"})
    }

    pessoa[i]=req.body
    res,json(pessoa[i])
})

app.listen(3000, ()=>{
    console.log("Conectado")
})