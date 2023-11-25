// mongodb.tsx
import mongoose from 'mongoose';

const username = "noteapp1";
const password = "YEG2FpCE2Qn8aUgd";
const DBname = "noteapp";

const uri = `mongodb+srv://${username}:${password}@cluster0.tqjdajf.mongodb.net/${DBname}`;

const ConnectMongoDB = async () => {
    try {
        await mongoose.connect(uri)
            .then(() => console.log('Connected!'))
            .catch(e => console.error('Error connecting', e))
    } catch (e) {
        console.error('Error: {try} connecting', e);
    }
}


export default ConnectMongoDB;