export default async function getCoordinatesForSearchTerm(query) {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/search.php?q=${query}&polygon_geojson=1&format=jsonv2&countrycodes=DE`,
    );

    if(response.status !== 200) {
        throw Error('Network error');
    }
    const data = await response.json();
    
    if(data && data.length > 0) {
        return ({lat: data[0].lat.substring(0,7), lon: data[0].lon.substring(0,7)})
    } else {
        throw Error('Could not find location');
    }
}