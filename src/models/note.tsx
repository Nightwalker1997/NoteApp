import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
    userId: {
        type: 'string',
        required: true
    },
    title: {
        type: 'string',
        required: true,
    },
    description:{
        type: 'string',
        required: true,
    }
}, { 
    timestamps: { createdAt: true, updatedAt: false }
});

const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema);

export default Note;