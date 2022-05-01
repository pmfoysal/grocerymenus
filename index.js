require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
   origin: '*',
   allowedHeaders: true,
   credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
   res.send('Hellow from PmPhAs11 Server!');
});

app.listen(port, () => {
   console.log(`Server Running... Port: ${port}`);
});
