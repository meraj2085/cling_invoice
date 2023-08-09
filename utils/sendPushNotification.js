const admin = require('firebase-admin');
const serviceAccount = require('../vahansetu-firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const sendPushNotification = async ({ title, body, token }) => {
  try {
    const res = await admin
      .messaging()
      .send({
        notification: {
          title,
          body,
        },
        token,
      })
      .then(() => true)
      .catch(() => false);
    return res;
  } catch (error) {
    return false;
  }
};

const verfiyToken = async (token) => {
  try {
    const res = await admin.auth().getUserByProviderUid(token);
    return res;
  } catch (error) {
    return false;
  }
};

module.exports = { sendPushNotification, verfiyToken };
