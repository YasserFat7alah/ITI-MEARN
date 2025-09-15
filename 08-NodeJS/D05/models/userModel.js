import mongoose from "mongoose";
import bcryptjs from 'bcryptjs'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username must be provided'],
        unique: true,
        minlength: [8, 'username must be at least 8 characters']
    },
    password: {
        type: String,
        required: [true, 'password must be provided']
    },
    firstName: {
        type: String,
        required: [true, 'firstName must be provided'],
        minlength: [3, 'firstName min length is 3'],
        maxlength: [15, 'firstName max length is 15']
    },
    lastName: {
        type: String,
        required: [true, 'lastName must be provided'],
        minlength: [3, 'lastName min length is 3'],
        maxlength: [15, 'lastName max length is 15']
    },
    dob: {
        type: Date
    },
    role: {
        type: String,
        enum: {
            values: ['user', 'admin'],
            message: 'status must be one of ' + ['user', 'admin'].join(', ')
        },
        default: 'user'
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(this.password, salt)
    this.password = hashedPassword
    next()
})


const userModel = mongoose.model('user', userSchema);
export default userModel;