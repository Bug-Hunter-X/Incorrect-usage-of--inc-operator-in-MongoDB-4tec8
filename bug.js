```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("65031d9c342024a6142e596a")},{$inc:{counter: '1'}});
```