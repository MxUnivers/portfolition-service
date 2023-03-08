

const  mongoose = require("mongoose");

let  date  = new Date();
const  MessageSchema =  new mongoose.Schema(
    {
        name:{
            type:String,
            required:false,
            default:true
        },
        email:{
            type:String,
            required:false,
            default:true
        },
        subject:{
            type:String,
            required:false,
            default:""
        },
        content:{
            type:String,
            required:false,
            default:""
        },
        access:{
            type:Boolean,
            default:true
        },
        time:{
            dateNow:{
                type:String,
                required:false,
                default:`${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
            },
            hourNow:{
                type:String,
                required:false,
                default:`${date.getHours()}:${date.getMinutes()}`
            },
            yearNow:{
                required:false,
                default:`${date.getMonth()}-${date.getFullYear()}`
            },
            yearNow:{
                required:false,
                default:`${date.getFullYear()}`
            }
        }
    }
    ,
    {
        timestamps:true
    }
)

const  Message = mongoose.model("contact_message",MessageSchema);

module.exports = Message ;