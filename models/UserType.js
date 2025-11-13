const { Collection } = require("mongoose");

// Creating the counter schema and model
const counterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    sequence: { type: Number, default: 0 }
});
const Counter = mongoose.model('Counter', counterSchema) || mongoose.model.Counter;

// Creating the UserType schema
const userTypeSchema = new mongoose.Schema({
    userTypeId: { type: Number, unique: true },
    description: { type: String, required: true}
}, {
    timestamps: true,
    Collection: "UserType"    
})
