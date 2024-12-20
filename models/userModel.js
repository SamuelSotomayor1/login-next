import mongoose from "mongoose";
 
const { Schema } = mongoose;
 
const clientSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);
 
const Client = mongoose.models.Client || mongoose.model("Client", clientSchema);

export default Client;