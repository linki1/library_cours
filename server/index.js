require('dotenv').config()
const express =require('express') 
const sequelize = require('./db')
const modul = require('./models/module')
const cors  = require('cors')
const router = require('./routs/index')
const errorHandler =  require('./middelware/errorHandlerMiddelware')


const PORT = process.env.PORT|| 5000


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',router)


app.use(errorHandler)


const start = async()=>{
try{
   await sequelize.authenticate();
   await sequelize.sync();
app.listen(PORT,()=>console.log(`starting on ${PORT} `))
}
catch(e){
 console.log(e)
}

}

start();