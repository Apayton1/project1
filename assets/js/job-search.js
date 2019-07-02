


      var firebaseConfig = {
        apiKey: "AIzaSyCjG1FHYJX-xhoCF0WQCguMFINEMGDHClQ",
        authDomain: "bootcamp-ca0af.firebaseapp.com",
        databaseURL: "https://bootcamp-ca0af.firebaseio.com",
        projectId: "bootcamp-ca0af",
        storageBucket: "bootcamp-ca0af.appspot.com",
        messagingSenderId: "1081186043324",
        appId: "1:1081186043324:web:f5aad373652b4914"
      };
      // Initialize Firebase
     
     firebase.initializeApp(firebaseConfig);
     var database =firebase.database()
     
     var map;
          function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: -34.397, lng: 150.644},
              zoom: 8
     
            });
            console.log(map)
          }