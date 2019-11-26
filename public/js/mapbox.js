/* eslint-disable */

console.log('Hello from the client side');

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYmlrcmFtYXJ5YWwiLCJhIjoiY2szY2tvMDV6MHd5MDNqcWo4Zzd2dWlqZyJ9.YuAr6_Ge09NzVQ1-8jw24w';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/bikramaryal/ck3ckrtba328r1cqzlckxkpd0',
    scrollZoom: false
    //   center: [-118.113491, 34.111745],
    //   zoom: 10,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create Marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add market
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
