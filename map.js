'use strict';

// debug statement letting us know the file is loaded
console.log('Loaded map.js');

// your mapbox tokenpk.eyJ1Ijoic2ZkdW5jYW4iLCJhIjoiY2x2Z3QybHh2MHlwcTJpczJyejAyYWVpNyJ9.DLToR14vGnafkx-pCGj6KA
mapboxgl.accessToken = 'pk.eyJ1Ijoic2ZkdW5jYW4iLCJhIjoiY2x2Z3QybHh2MHlwcTJpczJyejAyYWVpNyJ9.DLToR14vGnafkx-pCGj6KA';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/sfduncan/clvgsemvr05kv01nuggof5gin',
    center: [38.744575, 9.004118],
    zoom:12.89,
    bearing: -29.60,
    pitch: 65.00
})


// create an instance of NavigationControl
let navigation = new mapboxgl.NavigationControl({
    showCompass: true,
    showZoom: true
})

// add the navigation to your map
map.addControl(navigation, 'top-left')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

// add the scale to your map
map.addControl(scale, 'bottom-right')

let data = [
    {'location': [38.7642067, 9.0148067], 'architect_nationality': 'Italian', 'content': '<b>Landmark Name</b>: Africa Hall/ECA<br><b>Description</b>: Once the home of the OAU; now one of 3 UN buildings in Addis<br><b>Neighborhood</b>: Kazanchis<br><b>Architect</b>: Arturo Mezzedimi<br><b> Architect Nationality(ies)</b>: Italy<br><b>Contractor</b>: Luigi Varnero (Italy)<br><b>Year Built</b>: 1960<br> <img src="AddisAbaba/AfricaHall.jpg" width="100" height="100">'},
    {'location': [38.7443405, 9.0001000], 'architect_nationality': 'Chinese', 'content': '<b>Landmark Name</b>: African Union Conference Center (AUCC)<br><b>Description</b>: New Home of the African Union, Hub of intra-continental politics<br><b>Year Built</b>: 2012<br><b>Chief Architect(s)</b>: China Architecture and Design group in collaboration with Tongji University<br><b>Construction Cost</b>: $200 million USD<br> <img src="AddisAbaba/AUCC.jpg" width="100" height="100">'},
    {'location': [38.7443405, 9.0000350], 'architect_nationality': 'French', 'content': '<b>Landmark Name</b>: Kerchele Prison (Alem Bekagne)<br><b>Description</b>: Prison built during the time of Empress Zewditu; housed political prisoners, political advocates and Ethiopian intellectuals during the Italian invasion, and again during the communist regime; became notorious for the prisoner mistreatment/human rights abuses<br><b>Neighborhood</b>: Mekanisa<br><b>Architect/Designer</b>: Unknown<br><b>Architect/Designer Nationality</b>: French (rumored)<br><b>Year Built</b>: 1924<br> <img src="AddisAbaba/AUCC.jpg" width="100" height="100">'},
    {'location': [38.7525858, 9.0142067], 'architect_nationality': 'Italian', 'content': '<b>Landmark Name</b>: Ras Shell Gas Station<br><b>Description</b>: Gas Station<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>: Arturo Mezzedimi<br><b>Architect/Designer Nationality</b>: Italy<br><b>Year Built</b>: 1968/69<br> <img src="AddisAbaba/Ras Shell Gas Station.jpg" width="100" height="100">'},
    {'location': [38.7541192, 9.0181312], 'architect_nationality': 'French','content': '<b>Landmark Name</b>: Commercial Bank of Ethiopia<br><b>Description</b>: Bank<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>: Henri Chommette<br><b>Architect/Designer Nationality</b>: France<br><b>Year Built</b>: 1963<br> <img src="AddisAbaba/Commercial Bank of Ethiopia (Ngdet Bank).jpg" width="100" height="100">'},
    {'location': [38.7508893, 9.0143857], 'architect_nationality': 'French','content': '<b>Landmark Name</b>: Bedilu/Bedlu Building<br><b>Description</b>: Residential Building<br><b>Neighborhood</b>: Mexico Square/Sarbet<br><b>Chief Architect(s)</b>: Henri Chommette<br><b>Architect/Designer Nationality</b>: France<br><b>Year Built</b>: 1963<br> <img src="AddisAbaba/Bedulu Building.jpg" width="100" height="100">'},
    {'location': [38.7601957, 9.0137617], 'content': '<b>Landmark Name</b>: Ghion Hotel<br><b>Description</b>: Primary hotel used for housing international diplomats<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>:<br><b>Architect/Designer Nationality</b>:<br><b>Year Built</b>: 1951<br> <img src="AddisAbaba/Ghion Hotel.jpg" width="100" height="100">'},
    {'location': [38.7295000, 9.0077202], 'content': '<b>Landmark Name</b>: Ministry of Defense site of old airport<br><b>Description</b>: International Airport before the consturction of Bole Airport; Transitioned to a military airport before being re-done as a defense compound<br><b>Neighborhood</b>: Mekanisa/Old Airport<br><b>Chief Architect(s)</b>:<br><b>Architect/Designer Nationality</b>:<br><b>Year Built</b>: 2022<br> <img src="AddisAbaba/Ministry of Defense.jpg" width="100" height="100">'},
    {'location': [38.7386452, 8.9946204], 'architect_nationality': 'Chinese', 'content': '<b>Landmark Name</b>: Pushkin Square<br><b>Description</b>: Roundabout/Public Space<br><b>Neighborhood</b>: Mekanisa/Old Airport<br><b>Chief Architect(s)</b>:<br><b>Architect/Designer Nationality</b>: China<br><b>Year Built</b>:2022<br> <img src="AddisAbaba/Pushkin Square.jpg" width="100" height="100">'},
    {'location': [38.7578874, 9.0181610], 'architect_nationality': 'Israeli', 'content': '<b>Landmark Name</b>: Filwoha Hotel and Baths<br><b>Description</b>: Hotel<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>: Zalmann Enav and Michel Tewdros<br><b>Architect/Designer Nationality</b>: Israel, Ethiopia<br><b>Year Built</b>: 1965<br> <img src="AddisAbaba/Filwoha Bathhouse.jpg" width="100" height="100">'},
    {'location': [38.7609913, 9.0166216], 'content': '<b>Landmark Name</b>: Eyubelyu Palace<br><b>Description</b>: Kazanchis<br><b>Chief Architect(s)</b>:<br><b>Architect/Designer Nationality</b>:<br><b>Year Built</b>: 1955<br> <img src="AddisAbaba/Eyubulu Palace.jpg" width="100" height="100">'},
    {'location': [38.7635669, 9.0121499], 'content': '<b>Landmark Name</b>: St Estifanos Church<br><b>Description</b>: Ethiopian Orthodox Church<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>:<br><b>Architect/Designer Nationality</b>:<br><b>Year Built</b>: 1960s<br> <img src="AddisAbaba/St. Estifanos.jpg" width="100" height="100">'},
    {'location': [38.7639201, 9.0252010], 'content': '<b>Landmark Name</b>: Former Imperial Palace (Jubilee Palace) (Menelik Palace)<br><b>Description</b>: Home of Haile Selassie; transition to use for diplomat resident and other political meeting purposes<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>:<br><b>Architect/Designer Nationality</b>:<br><b>Year Built</b>: 1887<br> <img src="AddisAbaba/Menelik Palace.jpg" width="100" height="100">'},
    {'location': [38.7603469, 9.0171564], 'content': '<b>Landmark Name</b>: Imperial Palace (Selassie Palace)<br><b>Description</b>:<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>:<br><b>Architect Nationality(ies)</b>:<br><b>Year Built</b>: 1955<br> <img src="AddisAbaba/Imperial Palace.jpg" width="100" height="100">'},
    {'location': [38.7704229, 9.0190321], 'content': '<b>Landmark Name</b>: Fendika Cultural Center<br><b>Description</b>: Performace and Cultural Space<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>:<br><b>Architect Nationality(ies):<br><b>Year Built</b>: 1990s<br> <img src="AddisAbaba/Fendika Cultural Center.jpg" width="100" height="100">'},
    {'location': [38.7523927, 9.0160022], 'architect_nationality':'French', 'content': '<b>Landmark Name</b>: Berawhi Theatre (National Theater) & Lion of Judah Statue<br><b>Description</b>: National Theater<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>: Antoine Laget<br><b>Architect/Designer Nationality</b>: France<br><b>Year Built</b>: 1956/57<br> <img src="AddisAbaba/Lion of Judah Statue.jpg" width="100" height="100">'},
    {'location': [38.7500844, 9.0106486], 'architect_nationality':'Italian', 'content': '<b>Landmark Name</b>: La Gare, Train Station (Stazione Ferroviaria)<br><b>Description</b>: Regional train station, connecting to Djibouti<br><b>Neighborhood</b>: Between Mexico and Meskel Square<br><b>Chief Architect(s)</b>:<br><b>Architect/Designer Nationality</b>: Italy<br><b>Year Built</b>: 1917<br> <img src="AddisAbaba/La Gare, Train Station (Stazione Ferroviaria).jpg" width="100" height="100">'},
    {'location': [38.7621651, 9.0117053], 'architect_nationality':'Italian', 'content': '<b>Landmark Name</b>: Zewditu Building<br><b>Description</b>: Office Space<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>: Arturo Mezzedimi<br><b>Architect Nationality(ies)</b>: Italy<br><b>Year Built</b>: 1962-64<br> <img src="AddisAbaba/Zewditu Building.jpg" width="100" height="100">'},
    {'location': [38.7542072, 9.0180882], 'content': '<b>Landmark Name</b>: Ambassador Theater<br><b>Description</b>: Performance Theater<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>:<br><b>Architect Nationality(ies)</b>:<br><b>Year Built</b>: 1964<br> <img src="AddisAbaba/Ambassador Theater.jpg" width="100" height="100">'},
    {'location': [38.7621125, 9.0114050], 'architect_nationality':'Italian','content': '<b>Landmark Name</b>: FinFinne Building<br><b>Description</b>: Now a commercial bank<br><b>Neighborhood</b>: Outer Mekanisa<br><b>Chief Architect(s)</b>: Arturo Mezzedimi<br><b>Architect Nationality(ies)</b>: Italy<br><b>Year Built</b>: 1962-64<br> <img src="AddisAbaba/FinFinne Building.jpg" width="100" height="100">'},
    {'location': [38.756198,  9.0131574], 'content': '<b>Landmark Name</b>: Addis Ababa Stadium<br><b>Description</b>: Soccer Stadium, the primary stadium for decades<br><b>Neighborhood</b>: Outer Kazanchis<br><b>Chief Architect(s)</b>:<br><b>Architect Nationality(ies)</b>:<br><b>Year Built</b>: 1947 (construction started)<br> <img src="AddisAbaba/Addis Ababa Stadium.jpg" width="100" height="100">'},
    {'location': [38.7275794, 8.9966012], 'architect_nationality':'Israeli', 'content': '<b>Landmark Name</b>: International Community School of Addis Ababa<br><b>Description</b>: International School Teaching an American-centric curriculum<br><b>Neighborhood</b>: Mekanisa/Old Airport<br><b>Chief Architect(s)</b>: Zalmann Enav and Michel Tewdros<br><b>Architect Nationality(ies)</b>: Israel, Ehtiopia<br><b>Year Built</b>: 1964<br> <img src="AddisAbaba/International Community School of Addis Ababa.jpg" width="100" height="100">'},
    {'location': [38.7645207, 9.0204441], 'architect_nationality':'Israeli', 'content': '<b>Landmark Name</b>: 82 Apartment<br><b>Description</b>: Apartment building for UN workers and international diplomats <br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>: Zalmann Enav and Michel Tewdros<br><b>Architect Nationality(ies)</b>: Israel, Ehtiopia<br><b>Year Built</b>: 1962<br> <img src="AddisAbaba/82 Apartment.jpg" width="100" height="100">'},
    {'location': [38.7625032, 9.0200666], 'architect_nationality':'Israeli', 'content': '<b>Landmark Name</b>: Ethiopian Mapping Agency, Formerly Mapping and Geography Institute<br><b>Description</b>: The country\'s first geography agency<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>: Zalmann Enav and Michel Tewdros<br><b>Architect Nationality(ies)</b>: Israel, Ehtiopia<br><b>Year Built</b>: 1964<br> <img src="AddisAbaba/Ethiopian Mapping Agency, Formerly Mapping and Geography Institute.jpg" width="100" height="100">'},
    {'location': [38.7626500, 9.0191458], 'architect_nationality':'Israeli', 'content': '<b>Landmark Name</b>: Ministry of Foreign Affairs<br><b>Description</b>: Diplomacy <br><b>Neighborhood</b>: Kazanchis <br><b>Chief Architect(s)</b>: Zalmann Enav and Michel Tewdros<br><b>Architect Nationality(ies)</b>: Israel, Ehtiopia<br><b>Year Built</b>: 1962/64<br> <img src="AddisAbaba/Ministry of Foreign Affairs.jpg" width="100" height="100">'},
    {'location': [38.7542953, 9.0166094], 'architect_nationality':'Chinese', 'content': '<b>Landmark Name</b>: Commercial Bank of Ethiopia (Ngdet Bank),<br><b>Description</b>: One of the largest bank branches in Ethiopia<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>: Henn GmbH<br><b>Architect Nationality(ies)</b>: China, Germany<br><b>Year Built</b>: 2021<br> <img src="AddisAbaba/Commercial Bank of Ethiopia.jpg" width="100" height="100">'},
    {'location': [38.7648285, 9.0187883], 'content': '<b>Landmark Name</b>: Hilton Hotel Addis Ababa<br><b>Description</b>: Hotel, often for international dignitaries<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>: Overseen by Hilton Worldwide<br><b>Architect Nationality(ies)</b>: American <br><b>Year Built</b>: 1969<br> <img src="AddisAbaba/Hilton Hotel Addis Ababa.jpg" width="100" height="100">'},
    {'location': [38.7460793, 8.9971523], 'content': '<b>Landmark Name</b>: Committee of Intelligence and Security Services of Africa (CISSA)<br><b>Description</b>: Diplomacy<br><b>Neighborhood</b>: Mekanisa/Old Airport<br><b>Chief Architect(s)</b>:<br><b>Architect Nationality(ies)</b>:<br><b>Year Built</b>: 2020<br> <img src="AddisAbaba/Committee of Intelligence and Security Services of Africa (CISSA).jpg" width="100" height="100">'},
    {'location': [38.7424922, 9.0019457], 'content': '<b>Landmark Name</b>: Congo Hall<br><b>Description</b>:<br><b>Neighborhood</b>: Mekanisa/Old Airport<br><b>Chief Architect(s)</b>:<br><b>Architect Nationality(ies)</b>:<br><b>Year Built</b>:'},
    {'location': [38.7392183, 8.9948634], 'content': '<b>Landmark Name</b>: Adams Pavillion<br><b>Description</b>:<br><b>Neighborhood</b>: Mekanisa/Old Airport<br><b>Chief Architect(s)</b>:<br><b>Architect Nationality(ies)</b>:<br><b>Year Built</b>:<br> <img src="AddisAbaba/Adams Pavillion.jpg" width="100" height="100">'},
    {'location': [38.7733222, 9.0167340], 'content': '<b>Landmark Name</b>: Lakech Cinema<br><b>Description</b>: Movie theater/Cultural hub </b>:<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>:<br><b>Architect Nationality(ies)</b>:<br><b>Year Built</b>:<br> <img src="AddisAbaba/Lakech Cinema.jpg" width="100" height="100">'},
    {'location': [38.7754832, 9.0270175], 'content': '<b>Landmark Name</b>: German Square<br><b>Description</b>:<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>:<br><b>Architect Nationality(ies)</b>:<br><b>Year Built</b>:'},
    {'location': [38.7357451, 8.9963508], 'content': '<b>Landmark Name</b>: Tomoca Coffee (Sarbet Branch<br><b>Description</b>: Coffee shop<br><b>Neighborhood</b>: Mekanisa/Old Airport<br><b>Chief Architect(s)</b>:<br><b>Architect Nationality(ies)</b>:<br><b>Year Built</b>:'},

    ];


function addMarkers(filterCriteria) {
    if (window.markers) {
        window.markers.forEach(marker => marker.remove());
    }
    window.markers = [];

    data.forEach(function(d) {
        if (!filterCriteria || d.architect_nationality === filterCriteria) {
            var el = document.createElement('div');
            el.innerHTML = '<svg height="15" width="15"><circle cx="7.5" cy="7.5" r="5" fill="#473144" fill-opacity=".75" /></svg>';

            let marker = new mapboxgl.Marker(el)
                .setLngLat(d.location)
                .addTo(map);

            let popup = new mapboxgl.Popup()
                .setHTML(d.content);
            marker.setPopup(popup);

            window.markers.push(marker);
        }
    });
}

// Initially add all markers
addMarkers();

// Event listener for filtering
document.getElementById('architectFilter').addEventListener('change', function(e) {
    addMarkers(e.target.value);
});

