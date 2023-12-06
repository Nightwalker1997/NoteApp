// mongodb.tsx
import mongoose from 'mongoose';


const ConnectMongoDB = async () => {
    try {
        await mongoose.connect( process.env.MONGODB_URI as string)
            .then(() => console.log('Connected!'))
            .catch(e => console.error('Error connecting', e))
    } catch (e) {
        console.error('Error: {try} connecting', e);
    }
}


export default ConnectMongoDB;