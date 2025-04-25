import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

import Storage from './storage.mjs';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/order', async (req, res) => {
  const order = req.body;
  order.id = uuidv4().replaceAll('-', '');

  const storage = new Storage('data', 'orders.json');
  const orders = await storage.readFromFile();

  orders.push(order);

  await storage.writeToFile(JSON.stringify(orders));

  res.status(201).json({ success: true, data: order });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
