const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    user: { type: Types.ObjectId, ref: "user" },
    planDetails: Object,
    createdAt: { type: Date, default: Date.now },
});

module.exports = model('subscription', mySchema);