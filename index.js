require('dotenv').config();
const cors = require('cors');
const express = require('express');
const {MongoClient, ServerApiVersion, ObjectId} = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.d3xoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});

const corsOptions = {
   origin: '*',
   allowedHeaders: true,
   credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

async function runDatabase() {
   try {
      await client.connect();
      const products = client.db('pmphas11').collection('products');

      app.post('/product', async (req, res) => {
         const newData = req.body;
         const result = await products.insertOne(newData);
         res.send(result);
      });

      app.get('/products', async (req, res) => {
         const query = {};
         const cursor = products.find(query);
         const data = await cursor.toArray();
         res.send(data);
      });

      app.get('/product/:id', async (req, res) => {
         const id = req.params.id;
         const query = {_id: ObjectId(id)};
         const data = await products.findOne(query);
         res.send(data);
      });

      app.put('/product/:id', async (req, res) => {
         const id = req.params.id;
         const newData = req.body;
         const filter = {_id: ObjectId(id)};
         const options = {upsert: true};
         const update = {$set: newData};
         const result = await products.updateOne(filter, update, options);
         res.send(result);
      });
   } finally {
      // await client.close();
   }
}

runDatabase().catch(console.dir);

app.get('/', (req, res) => {
   res.send('Hellow from PmPhAs11 Server!');
});

app.listen(port, () => {
   console.log(`Server Running... Port: ${port}`);
});
