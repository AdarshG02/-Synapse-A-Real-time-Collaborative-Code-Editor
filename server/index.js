import express from 'express';
import authRoutes from './Routes/auth.js';

const app = express();
const port = process.env.PORT || 3000;

//Do not forget the middleware and cors

//Landing page
app.get('/synapse', (req, res) =>{
    res.send("Landing Page. Login or signup");
});

app.use("/syanapse", authRoutes);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});