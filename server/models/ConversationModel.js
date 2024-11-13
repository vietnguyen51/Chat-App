const mongoose = require('mongoose');

// Định nghĩa Message Schema
const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: false, // Tin nhắn có thể chỉ chứa hình ảnh hoặc video
    },
    imageUrl: {
        type: String,
        required: false,
    },
    videoUrl: {
        type: String,
        required: false,
    },
    sender: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User', // Tham chiếu đến collection "User"
    },
    seen: {
        type: Boolean,
        default: false,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    },
});

// Định nghĩa Conversation Schema
const conversationSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User', // Tham chiếu đến collection "User"
    },
    receiver: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User', // Tham chiếu đến collection "User"
    },
    message: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Message', // Tham chiếu đến Message Schema
        required: true,
    }],
    createAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    },
});

// Xuất cả hai model
const Message = mongoose.model('Message', messageSchema);
const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = {
    Message,
    Conversation,
};
