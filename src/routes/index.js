const {Router} = require('express');

const router = Router();

const webpush = require('../webpush');


// Variable to store push subscription
let pushSubscription;


router.post('/subscription', async(req, res) =>{
    
    pushSubscription = req.body;
    res.status(200).json();


    let payload = JSON.stringify({
        title: 'Gabriel App Notfications',
        message: 'Hello, this notification is from NodeJS server.'
    });

    
    
    try {
       await webpush.sendNotification(pushSubscription, payload);
        
    } catch (error) {
        console.log(error);
    }

});

module.exports = router;