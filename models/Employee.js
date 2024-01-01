const mongoose  = require('mongoose');

const schema = mongoose.Schema({
    name :{
        type : String,
       
    },
    email: {
        type : String,
        
    },
    phone: {
        type : String,
        
    },
    age :{
        type : Number,
    }
    
    
},{timestamp :true});

const Employee = mongoose.model('Employee',schema);
module.exports = Employee;