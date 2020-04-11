const webpush = require('web-push');



webpush.setVapidDetails(
    'mailto:email@test.com',
    process.env.PUBLIC_VAPID_KEY,
    process.env.PRIVATE_VAPID_KEY
);


module.exports = webpush;
