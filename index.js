require('dotenv').config();
const cors = require('cors');
const express = require('express');
const jwt = require('jsonwebtoken');
const {MongoClient, ServerApiVersion, ObjectId} = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.d3xoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});

const corsOptions = {
   origin: '*',
};

app.use(express.json());
app.use(cors(corsOptions));

function verifyUser(req, res, next) {
   const auth = req.headers.authorization;
   const res1 = {status: 401, message: "You don't have Authorization to access this API!"};
   const res2 = {status: 403, message: 'You have invalid Token to access this API!'};

   if (!auth) return res.status(401).send(res1);
   const token = auth.split(' ')[1];

   jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
      if (error) return res.status(403).send(res2);
      req.decoded = decoded;
      next();
   });
}

async function runDatabase() {
   try {
      await client.connect();
      const products = client.db('pmphas11').collection('products');
      const blogs = client.db('pmphas11').collection('blogs');

      app.post('/token', async (req, res) => {
         const user = req.body;
         const token = jwt.sign(user, process.env.ACCESS_TOKEN, {expiresIn: '1d'});
         res.send({token});
      });

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

      app.delete('/product/:id', async (req, res) => {
         const id = req.params.id;
         const query = {_id: ObjectId(id)};
         const result = await products.deleteOne(query);
         res.send(result);
      });

      app.get('/blogs', async (req, res) => {
         const query = {};
         const cursor = blogs.find(query);
         const data = await cursor.toArray();
         res.send(data);
      });

      app.get('/blog/:id', async (req, res) => {
         const id = req.params.id;
         const query = {_id: ObjectId(id)};
         const data = await blogs.findOne(query);
         res.send(data);
      });
   } finally {
      // await client.close();
   }
}

runDatabase().catch(console.dir);

app.get('/', (req, res) => {
   res.send({status: 200, port, message: 'PmPhAs11 Server is Running...'});
});

app.listen(port, () => {
   console.log(`PmPhAs11 Server Running... Port: ${port}`);
});
