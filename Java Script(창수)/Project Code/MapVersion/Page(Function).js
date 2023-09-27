function initVar(){
    Marklist.length = 0;
}

function initMap(){
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 15,
        center: {lat:35.1530444, lng:128.1010899}
    });
}

function reloadMap(lat, lng){
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 15,
        center: {lat:lat, lng:lng}
    });
    /*var bounds = new google.maps.LatLngBounds();
    var infoWindow = new google.maps.InfoWindow();
    Marklist.forEach(({label, Tankname, time, lat, lng})=> {
        marker = newgoogle.maps.Marker({
            position: {lat, lng}, label,map
        });
        bounds.extend(marker.position);

        marker.addListener("click",()=>{
            map.panTo(marker.position);
            infoWindow.setContent(Tankname);
            infoWindow.open({
                anchor: marker,map
            });
        });
    })*/;

   // map.fitBounds(bounds);
   const malls = [
    { label: "C", name: "코엑스몰", lat: 37.5115557, lng: 127.0595261 },
    { label: "G", name: "고투몰", lat: 37.5062379, lng: 127.0050378 },
    { label: "D", name: "동대문시장", lat: 37.566596, lng: 127.007702 },
    { label: "I", name: "IFC몰", lat: 37.5251644, lng: 126.9255491 },
    { label: "L", name: "롯데월드타워몰", lat: 37.5125585, lng: 127.1025353 },
    { label: "M", name: "명동지하상가", lat: 37.563692, lng: 126.9822107 },
    { label: "T", name: "타임스퀘어", lat: 37.5173108, lng: 126.9033793 }
  ];
  var bounds = new google.maps.LatLngBounds();
  var infoWindow = new google.maps.InfoWindow();

  malls.forEach(({ label, name, lat, lng }) => {
    var marker = new google.maps.Marker({
      position: { lat, lng },
      label,
      map
    });
    bounds.extend(marker.position);
    marker.addListener("click", () => {
        map.panTo(marker.position);
        infoWindow.setContent(name);
        infoWindow.open({
          anchor: marker,
          map
        });
      });
    });
  
    map.fitBounds(bounds);
};

function addMark(Tankname,currentTime,lat,lng){
    newMark = {label: Marklist.length+1, Tankname:Tankname, time:currentTime, lat:lat, lng:lng};
    Marklist.push(newMark);
}

document.addEventListener("DOMContentLoaded",function(){
    var markButton = document.getElementById("addMarkButton");
    addMarkButton.addEventListener("click",function(){
        var Tankname = prompt("Insert Tank Name: ");
        var currentTime = new Date();
        var lat = parseFloat(prompt("Insert latitude: "));
        var lng = parseFloat(prompt("Insert longitude: "));
        reloadMap(lat, lng);
    });
});