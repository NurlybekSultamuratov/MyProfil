import mongoose  from "mongoose";
const Schema = mongoose.Schema;

const contactSchema = new Schema
(
    {
        Name: String, 
        Email: String,  
        ContactNumber: Number
    },
    {
        collection: "contacts"
    }
);

// Create the model
const Contact = mongoose.model("Contact", contactSchema);

export default Contact;