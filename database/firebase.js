const firebaseAdmin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');

const serviceAccount = require('../database/credentials');
// Your web app's Firebase configuration

const admin = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

const storageRef = admin.storage().bucket(process.env.FIREBASE_BUCKET);

async function uploadFile(path, filename) {

      // Upload the File
      const storage = await storageRef.upload(path, {
        public: true,
        destination: `screenshots/${filename}`,
        metadata: {
            firebaseStorageDownloadTokens: uuidv4(),
        }
    });

  return storage[0].metadata.mediaLink;

}

module.exports = uploadFile;