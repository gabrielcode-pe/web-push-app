

self.addEventListener('push', e =>{

    let data = e.data.json();

    console.log('New notificacion');
    console.log(data);

    self.registration.showNotification(data.title, {
        body: data.message
    });
});