


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
     
javascript
     var map;
     var markers = [];
     var map, infoWindow;
     function initMap() {
        
      var currentLocation = { lat: 39.953, lng: -75.165 };
       map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -34.397, lng: 150.644},
         zoom: 8
       });
       infoWindow = new google.maps.InfoWindow;
     
       // Try HTML5 geolocation.
       if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           currentLocation = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           };
     
           infoWindow.setPosition(currentLocation);
           infoWindow.setContent('Location found.');
           infoWindow.open(map);
           map.setCenter(currentLocation);
         }, function() {
           handleLocationError(true, infoWindow, map.getCenter());
         });
       } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
       }
       
      //  Marker
       var marker = new google.maps.Marker({
        position: currentLocation,
        map: map,
        title: 'Click to zoom'
      });

      map.addListener('center_changed', function() {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(function() {
          map.panTo(marker.getPosition());
        }, 3000);
      });

      marker.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
      });
     
      map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
      });
    
    
    }



      // Placing marker on click
    function placeMarkerAndPanTo(latLng, map) {
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
      map.panTo(latLng);
    }
    



    
     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
       infoWindow.setPosition(pos);
       infoWindow.setContent(browserHasGeolocation ?
                             'Error: The Geolocation service failed.' :
                             'Error: Your browser doesn\'t support geolocation.');
          
       infoWindow.open(map);
         }



    // function initMap(){
    //   //Map Option
    //   var options={
    //     zoom:8,
    //     center:{lat:42.3601, lng: -71.0589}
    //   }
    //   var map=new google.maps.Map(document.getElementById('map'),options);
    //   //Add marker
    //   // var marker=new google.maps.Marker({
    //   //   position:{lat:42.4668, lng: -70.9495},
    //   //   map:map,
    //   //   icon:'https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309740_960_720.png',
    //   // });

    //   // var infoWindow=new google.map.InfoWindow({
    //   //   content:'<h1>Lynn MA</h1>'
    //   // });

    //   // marker.addListener('Click', function(){
    //   //   infoWindow.open(map, marker);
    //   // });

    //   addMarker({lat:42.3601, lng: -71.0589});
    //   //Add Marker function
    //   function addMarker(coords){
    //     var marker =new google.maps.Marker({
    //       position:coords,
    //       map:map,
    //       icon:'assets/images/marker.png',

    //     })
    //   }
      
      
    // }

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
master

  