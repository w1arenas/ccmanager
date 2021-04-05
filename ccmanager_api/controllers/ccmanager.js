/////////////// DEPENDENCIES
const express = require("express");
const CCMANAGER = express.Router();
const Ccmanager = require("../models/ccmanager")

CCMANAGER.get('/', (req, res) => {
   Ccmanager.find({}, (err, foundCards) => {
      if (err) {
         res.status(400).json({ error: err.message });
      }

      res.status(200).json(foundCards);
   });
});
   /////////////// MODELS

   /////////////// ROUTES
   // seed route
   // index route
   // new route

   // create route
CCMANAGER.post("/", (req, res) => {
   Ccmanager.create(req.body, (err, createdCard) => {
      if (err) {
         res.status(400).json({ error: err.message });
      }
      res.status(200).send(createdCard);
   });
})

/*
CREATE A CURL REQUEST FOR TESTING
curl -X POST -H "Content-Type: application/json" -d '{"cardName":"VIsa", "firstNumInAcct":"4", "lastFourAcctNums":"9999", "bank":"Bank of America", "bankPhone":"800-999-8888", "bankAddress":"1357 Washington Ave.", "creditLimit":"5000", "balance":"200", "dueDate":"2021-04-30", "minimumPay":"20", "interest":"18", "comments":"No comments"}' 'http://localhost:3003/ccmanager'

*/

   // show route
   // edit route
   // update route


CCMANAGER.put('/:id', (req, res) => {
   Ccmanager.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedCard) => {
      if (err) {
         res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedCard);
   })
});

   /*
UPDATE
curl -X PUT -H "Content-Type: application/json" -d '{"cardName":"aaa3"}' 'http://localhost:3003/ccmanager/606b2bed45fffdf03c52aaa3'
*/


   // delete route
CCMANAGER.delete('/:id', (req, res) => {
   Ccmanager.findByIdAndRemove(req.params.id, (err, deletedCard) => {
      if (err) {
         res.status(400).json({ error: err.message });
      }
      res.status(200).json(deletedCard);
   });
});

/*
DELETE
curl -X DELETE 'http://localhost:3003/ccmanager/606b28eb45fffdf03c52aaa2'
*/

module.exports = CCMANAGER;