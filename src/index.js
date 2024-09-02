import express from 'express'; // Correct the import from 'expres' to 'express'
import connectDB from './db/index.db.js';
import dotenv from 'dotenv'; // Correct the import from 'env' to 'dotenv'
import bodyParser from 'body-parser'; // Import body-parser correctly

dotenv.config(); // Ensure environment variables are loaded

const app = express();

// Middleware
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000; // Default to 3000 if PORT is not set

app.get('/',(req,res)=>{
    res.send("helloo")
})
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);

});

// connectDB();
