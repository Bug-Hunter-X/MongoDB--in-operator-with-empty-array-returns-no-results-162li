```javascript
// Use the $exists operator to check if the field exists
db.collection.find({ field: { $exists: true } });

//Alternative solution if there is a specific value to check
//If you want to include documents where the field is null or undefined, then use $in with a value such as [null]
// db.collection.find({ field: { $in: [null] } });
```