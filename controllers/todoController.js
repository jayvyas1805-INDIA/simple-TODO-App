import { Todo } from "../models/todo.js";

// 1. create the tasks
export const createTask = async (req, res) => {
    try {
        // for create api we follow this steps
        // 1. extract data from the user
        const { task, isComplete, deadline } = req.body;

        // 2. basic validation of those data
        if (!task || !deadline) {
            return res.status(400).json({
                success: false,
                message: "All fields are require"
            })
        };

        // 3.check the task is there or not
        const exist = await Todo.findOne({ task: task, isComplete: false })
        if (exist) {
            return res.status(401).json({
                success: false,
                message: "Task Already exist"
            });
        };

        // 4. Database operation
        const todo = await Todo.create({
            task,
            isComplete,
            deadline,
        });

        // 5. respond to user
        return res.status(201).json({
            success: true,
            message: "Task added",
            data: todo,
        });

    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};


export const getTask = async (req, res) => {
    try {
        const todo = await Todo.find();
        return res.status(200).json({
            success: true,
            message: "here it is",
            data: todo
        })
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
};


export const updateTask = async(req,res)=>{
    try {
        const {task,isComplete,deadline} = req.body;
        const {id} = req.params;


        if(!task && isComplete === undefined && !deadline){
            return res.status(401).json({
                success:false,
                message:"atleast one field is required"
            });
        };

        const exist = await Todo.findById(id)
        if(!exist){
            return res.status(404).json({
                success:false,
                message:"Task does not exist"
            });
        };

        const todo = await Todo.findByIdAndUpdate(
            id,
            {task,isComplete,deadline},
            {new:true} //return new or updated values
        );

        return res.status(200).json({
            succes:true,
            message:"Updated",
            data:todo,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}

export const deleteTask = async(req,res)=>{
    try {
        const {id} = req.params;


        const exist = await Todo.findById(id)
        if(!exist){
            return re.status(404).json({
                success:false,
                message:"Task does not exist",
            });
        };

        const deleteTodo = await Todo.findByIdAndDelete(
            id,
            {new:true}
        );

        return res.status(200).json({
            success:true,
            message:"Successfully Deleted Task",
            data:deleteTodo,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Internal server error",
        })
    }
}