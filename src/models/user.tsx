import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    username: {
        type: 'string',
        required: [true, "Please enter a username"],
    },
    email: {
        type: 'string',
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Please enter a valid email address"],
    },
    password:{
        type: 'string',
        required: [true, "Please enter a valid password"],
    },
    isVerified:{
        type: 'boolean',
        default: false,
    },
    isAdmin:{
        type: 'boolean',
        default: false,
    },
}, { 
    timestamps: { createdAt: true, updatedAt: false }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;