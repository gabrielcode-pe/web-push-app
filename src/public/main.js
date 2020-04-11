const PUBLIC_VAPID_KEY = 'BKjrV3iNjPB8xxh5p0Zi9WdWZZBlDsvzR2bUV5O6F8N-BVZTJSwHjaTMYL6IMeeP7S8HkRpsuX_X6KAgHL2bmDk';

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
   
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

const subscription = async () =>{

    // Service worker register
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/',

    });

    console.log('new service worker registered');

    const subscriptionResource = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
    });



    await fetch('/subscription', {
        method: 'POST',
        body: JSON.stringify(subscriptionResource),
        headers: {
            'Content-Type' : 'application/json',
        }
    });

    console.log('Great!, subscribed!');
};


//Executing the subscription function
subscription();