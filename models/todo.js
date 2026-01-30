import mongoose from 'mongoose';

const todoSc = new mongoose.Schema({
    task:{
        type:String,
        required:true,
        minLength:6,
        maxLength:30,
    },
    isComplete:{
        type:Boolean,
        default:false,

    },
    deadline:{
        type:Date,
        required:true,
    },

},
{
    timestamps:true,
},
);

todoSc.index({task:1});

export const Todo = mongoose.model("Todo",todoSc);