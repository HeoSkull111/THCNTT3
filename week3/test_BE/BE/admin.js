const admin = require("firebase-admin");
const firebase = require("firebase");
// cấu hình Firebase Admin SDK
const serviceAccount = require("./Key/serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
db = admin.firestore();
module.exports = db
// cấu hình Firebase Client SDK