class map_view {
    constructor(context) {
        console.log(context);
    }
    get_view() {
        return `
    
    
        <h1>My First Google Map</h1>
        <div id="map" style="width:100%;height:400px;"></div>

`;
    }
    initMap() {
        map = new google.maps.Map( document.getElementById( 'map' ), {
            center: {
                lat: 51.513329,
                lng: -0.088950
            },
            zoom: 14
        });
        let marker = new google.maps.Marker({
            position: {
                lat: 51.506821,
                lng: -0.0879
            },
            map: map,
            title: 'The London Bridge'
        });
    }
}

