const express =require('express')


const app =express()
const port=3000


app.use(express.json())
let itemlist =[
    {id:1,name:"name here"},
]

app.get('/api/v1/items',(req,res)=>{
    return res.json(itemlist)
})
app.post('/api/v1/items',(req,res)=>{
    let newTask={
        id: itemlist.length+1,
        name:req.body.name,
    }
    itemlist.push(newTask)
    res.status(201).json(newTask)
})
app.put('/api/v1/items/:id',(req,res)=>{
    let itemid =req.params.id
    let updateditem=req.body
    let index=itemlist.findIndex(item =>item.id === itemid)
    if(index !==-1){
        itemlist[index]= updateditem
        res.json[updateditem]
    }else{
        res.status(404).json({message:"Item not found"})
    }
})
app.delete('/api/v1/items/:id',(req,res)=>{
    let itemid =req.params.id
    let index= itemlist.findIndex(item =>item.id ===itemid)
    if(index !== -1){
        let deleteitem= itemlist.splice(index,1)
        res.json(deleteitem[0])
    }else{
        res.status(404).json({message:"Item not found"})
    }
})

app.listen(port,()=>{
    console.log('listening on port'+port)
})

