import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect("mongodb+srv://rudramanaidupasupuleti:rudra9999@cluster0.rcgmcse.mongodb.net/")
    console.log("Database Connected")
}