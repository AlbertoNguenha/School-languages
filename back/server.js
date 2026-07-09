import express from "express";

const app=express();

app.use(express.json())

let pessoa=[]
app.get("/pessoa", (req,res)=>{
    res.send(pessoa)
})

app.post("/pessoa", (req,res)=>{
    const {nome,curso, telefone}=req.body
    pessoa.push({nome,curso, telefone})
    res.json({
        messagem:"Usuario criado com sucesso"
    })
})


app.listen(3000, ()=>{
    console.log("Conectado")
})