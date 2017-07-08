export default ({
  apiKey: process.env.FIREBASE_API_KEY || 'API_KEY',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || 'AUTH_DOMAIN',
  databaseURL: process.env.FIREBASE_DB_URL || 'DB_URL',
  projectId: process.env.FIREBASE_PROJECT_ID || 'PROJECT_ID',
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || 'STORAGE_BUCKET',
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID || 'MESSAGE_SENDER_ID'
});