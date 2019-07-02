


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
     
    //  var map;
    // function initMap() {
    //   map = new google.maps.Map(document.getElementById('map'), {
    //     center: {lat: -34.397, lng: 150.644},
    //     zoom: 8

    //   });
    //   console.log(map)
    // }

    function initMap(){
      //Map Option
      var options={
        zoom:8,
        center:{lat:42.3601, lng: -71.0589}
      }
      var map=new google.maps.Map(document.getElementById('map'),options);
      //Add marker
      // var marker=new google.maps.Marker({
      //   position:{lat:42.4668, lng: -70.9495},
      //   map:map,
      //   icon:'https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309740_960_720.png',
      // });

      // var infoWindow=new google.map.InfoWindow({
      //   content:'<h1>Lynn MA</h1>'
      // });

      // marker.addListener('Click', function(){
      //   infoWindow.open(map, marker);
      // });

      addMarker({lat:42.3601, lng: -71.0589});
      //Add Marker function
      function addMarker(coords){
        var marker =new google.maps.Marker({
          position:coords,
          map:map,
          icon:'assets/images/marker.png',

        })
      }
      
      
    }

  