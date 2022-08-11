import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema ({
    username:{ 
        type: String, 
        req: true,
        unique: true
    },
    email:{ 
        type: email,
        unique: true, 
        req: true
    },
    password:{ 
        type: String, 
        req: true
    },
    fName:{ 
        type: String, 
        req: true
    },
    isAdmin:{ 
        type: String, 
        req: true
    },
    isCreator:{ 
        type: String, 
        req: true
    },
    lName:{ 
        type: String, 
        req: true
    },
    rDate:{ 
        type: Date, 
        req: true,
        hidden: true
    }
})
module.exports = mongoose.model('users', userSchema);