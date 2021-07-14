import mongoose from "mongoose";

const db = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27017/netflix', { useNewUrlParser: true, useUnifiedTopology: true});

db.on('error', () => {console.log("❌ DB Error", error)});
db.once('open', () => { console.log("✅ Connected to mongod server");
});
