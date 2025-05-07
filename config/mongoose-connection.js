const mongoose=require('mongoose')
const config=require('config')
const debug=require('debug')('development:mongoose')
mongoose.connect(`${config.get('MONGODB_URI')}/fashion`)
.then(()=>{

   debug('connected to database')

})
.catch((err)=>{
    debug(`the error came ${err}`)
})

module.exports=mongoose.connection