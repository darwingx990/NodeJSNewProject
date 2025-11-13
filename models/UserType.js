const { Collection } = require("mongoose");

// Creating the counter schema
const counterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    sequence: { type: Number, default: 0 }
});
const Counter = mongoose.model('Counter', counterSchema) || mongoose.model.Counter;

// Creating the UserType schema
const userTypeSchema = new mongoose.Schema({
    userTypeId: { type: Number, unique: true, unique: true },
    description: { type: String, required: true, trim: true }
}, {
    timestamps: true,
    Collection: "UserType" // Specify and force the collection name in the DB.
})

// Pre-save hook to auto-increment userTypeId
userTypeSchema.pre("save", async function (next) {
    if (this.isNew) {
        try {
            const counter = await Counter.findByIdAndUpdate(
                userTypeId,
                { $inc: { sequence: 1 } },
                { new: true, upsert: true }
            );
            this.userTypeId = counter.sequence;
        } catch (error) {
            return next(error);
        }
    }
    next();
})