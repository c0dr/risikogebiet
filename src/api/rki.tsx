export async function loadRKIData(lat: String, lon: String): Promise<CaseData> {
    const response = await fetch(
        `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=last_update,cases7_per_100k,county&geometry=${lon},${lat}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIntersects&returnGeometry=false&outSR=4326&f=json`,
    );

    if(response.status !== 200) {
        throw Error('Network error');
    }

    const data = await response.json();
    if(!data.features || !data.features[0].attributes) {
        throw Error("data is malformed");
    }
    const cityData = data.features[0].attributes;
    return {
        "last_update": cityData.last_update,
        "cases": cityData.cases7_per_100k.toFixed(),
        "location": cityData.county.split(" ")[1],
        "riskArea": cityData.cases7_per_100k.toFixed() > 50
    }
}

export type CaseData = {
    last_update: string;
    cases: number;
    location: string;
    riskArea: boolean
  }