import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sumedhajammula:VVP0me533JolAijl@cluster0.ndireyq.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}