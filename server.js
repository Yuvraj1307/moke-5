const jsonserver=require("json-server")
const server=jsonserver.create()
const rout=jsonserver.router("./db.json")
const middleware=jsonserver.defaults()
const cors=require("cors")
const port=4500
server.use(cors({origin:"*"}))

server.use(jsonserver.bodyParser)


server.get("/home",(req,res)=>{
    res.json({msg:"hello"})
})


// server.post("/freelancers",(req,res)=>{
//     let {name,emai,password,profession,skills,hourly_rate,profile_picture,isBooked}=req.body
//     console.log(name,skills)
//     res.json({res:"ok"})
// })



server.use(middleware)
server.use(rout)

server.listen(port,()=>{
    console.log(`running on port ${port}`)
})