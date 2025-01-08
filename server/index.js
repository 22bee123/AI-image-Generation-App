import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({
        success: false,
        error: message,
    });
});


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'API is running',
    });
});


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
};

const startserver = async () => {
    try {
        connectDB();
        const server = await new Promise((resolve, reject) => {
            const listener = app.listen(8080, () => {
                console.log('Server is running on port 8080');
                resolve(listener); // Resolve the promise with the server instance
            });

            listener.on('error', (err) => {
                reject(err); // Reject the promise if there's an error
            });
        });
    } catch (error) {
        console.error('Error starting the server:', error.message);
        process.exit(1); // Exit the process if the server fails to start
    }
};

startserver();