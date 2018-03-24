
function initMap() {
  $(function(){
    var map;
    var LocA = [{
            lat: 12.58,
            lon: 77.38,
            title: 'Bangalore',
            html: 'Bangalore, Karnataka, India',
            zoom: 16,
            icon: 'https://maps.google.com/mapfiles/markerA.png'
            // animation: google.maps.Animation.DROP
        }];
     
     map = new Maplace({
        locations: LocA,
        map_div: '#gmap',
        generate_controls: false,
        start: 0   
      }).Load();
      
    
    $(".loc_link").click(function(){
      var newLoc = [{
            lat: $(this).data('lat'),
            lon: $(this).data('long'),
            title: $(this).data('title'),
            html: $(this).data('html'),
            zoom: 16,
            icon: 'https://maps.google.com/mapfiles/marker'+$(this).text()+'.png',
            animation:google.maps.Animation.DROP
        }];
      map.AddLocations(newLoc).Load();
      map.ViewOnMap($(this).index()+1);
    });
});
}
