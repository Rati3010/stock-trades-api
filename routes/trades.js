const express = require('express');
const fs = require('fs');
const router = express.Router();

const TRADES_FILE = './trades.json';

const readTradesFromFile = () => {
  const data = fs.readFileSync(TRADES_FILE);
  return JSON.parse(data);
};

const writeTradesToFile = (trades) => {
  fs.writeFileSync(TRADES_FILE, JSON.stringify(trades, null, 2));
};

router.post('/', (req, res) => {
  const newTrade = req.body;
  const trades = readTradesFromFile();
  const newId = trades.length ? trades[trades.length - 1].id + 1 : 1;
  newTrade.id = newId;
  trades.push(newTrade);
  writeTradesToFile(trades);
  res.status(201).send(newTrade);
});

router.get('/', (req, res) => {
  const trades = readTradesFromFile();
  res.status(200).send({ trades });
});

router.get('/:id', (req, res) => {
  const tradeId = parseInt(req.params.id, 10);
  console.log(tradeId)
  const trades = readTradesFromFile();
  const trade = trades.find(t => t.id === tradeId);
  if (trade) {
    res.status(200).send(trade);
  } else {
    res.status(404).send('ID not found');
  }
});

router.delete('/:id', (req, res) => {
  const tradeId = parseInt(req.params.id, 10);
  let trades = readTradesFromFile();
  const tradeIndex = trades.findIndex(t => t.id === tradeId);
  if (tradeIndex !== -1) {
    trades.splice(tradeIndex, 1);
    writeTradesToFile(trades);
    res.status(200).send(`Trade with ID ${tradeId} deleted`);
  } else {
    res.status(404).send('ID not found');
  }
});

router.patch('/:id', (req, res) => {
  const tradeId = parseInt(req.params.id, 10);
  const newPrice = req.body.price;
  let trades = readTradesFromFile();
  const trade = trades.find(t => t.id === tradeId);
  if (trade) {
    trade.price = newPrice;
    writeTradesToFile(trades);
    res.status(200).send(trade);
  } else {
    res.status(404).send('ID not found');
  }
});

module.exports = router;
