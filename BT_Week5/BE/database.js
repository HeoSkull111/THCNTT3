var admin = require("firebase-admin");
var serviceAccount = require("./Key/serviceAccountKey.json");
const db = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
module.exports = db;