import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import errorHandler from './middleware/errorHandler.js';
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import path from "path";

import cors from 'cors';


const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(
    cors({
        origin: [
            "https://portfolio-frontend.vercel.app",
            "https://aayushbasnet05.com.np",
        ],
    })
);

app.use(projectRoutes);
app.use(contactRoutes);

app.use(errorHandler);

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

const startServer = async () => {

    //mongodb connection
    await connectDB();

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`);
    });
};

startServer();