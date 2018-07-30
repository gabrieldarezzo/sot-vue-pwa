importScripts('https://www.gstatic.com/firebasejs/5.3.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.3.0/firebase-messaging.js')

let config = {
    messagingSenderId: "500911131490"
};

firebase.initializeApp(config);

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function (payload) {
    return self.registration.showNotification({}, {});
})
