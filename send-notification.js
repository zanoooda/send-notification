function sendNotification() {
    fetch('https://fcm.googleapis.com/fcm/send', {
        method: 'POST',
        headers: {
            'Authorization': 'key=' + document.getElementById("key").value,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Firebase loses 'image' from the notification.
            // And you must see this: https://github.com/firebase/quickstart-js/issues/71
            data: {
                title: document.getElementById("title").value, 
                body: document.getElementById("body").value, 
                icon: document.getElementById("icon").value, 
                // image: document.getElementById("image").value, 
                click_action: document.getElementById("click-action").value,
                // time_to_live: parseInt(document.getElementById("time-to-leave").value)
            },
            // to: document.getElementById("token").value
            "registration_ids": [
                document.getElementById("token").value
            ]
        })
    }).then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(JSON.stringify(json));
    }).catch(function(error) {
        console.error(error);
    });
}