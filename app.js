const express=require('express')
const app=express()
const cookieParser=require('cookie-parser')
const path=require('path')
const flash=require('connect-flash')
const session=require('express-session')

require('dotenv').config()

const ownerRouter=require('./routes/ownerRouter')
const userRouter=require('./routes/userRouter')
const productRouter=require('./routes/productRouter')
const indexRouter=require('./routes/indexRouter')



const db=require('./config/mongoose-connection')

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser())
app.use(
    session( 
        {
            resave:false,
            saveUninitialized:false,
            secret:process.env.EXPRESS_SESSION_SECRET,
        }
    )
    
)
app.use(flash())

app.use('/', indexRouter)
app.use('/owner',ownerRouter)
app.use('/user',userRouter)
app.use('/product',productRouter)



 




app.listen(3000)