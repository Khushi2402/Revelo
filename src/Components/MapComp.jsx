import { useEffect } from "react";
import { Map, View } from "ol";
import "ol/ol.css";
import { fromLonLat } from "ol/proj";
import { XYZ } from "ol/source";
import { Tile as TileLayer } from "ol/layer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import './map.css';

const MapComp = () => {
  useEffect(() => {
    const mapObj = new Map({
      target: "map",
      view: new View({
        center: fromLonLat([79.0882, 21.1458]),
        zoom: 16,
      }),
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}",
            crossOrigin: "anonymous",
          }),
        }),
      ],
    });

    const vectorSource = new VectorSource({
      features: [
        new Feature({
          geometry: new Point(fromLonLat([79.0882, 21.1458])),
          name: "Starbucks Dongja",
          style: new Style({
            image: new Icon({
              anchor: [0.5, 1],
              src: "https://openlayers.org/en/latest/examples/data/icon.png",
            }),
          }),
        }),
      ],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    mapObj.addLayer(vectorLayer);

    mapObj.on("click", (evt) => {
      const feature = mapObj.forEachFeatureAtPixel(evt.pixel, (feature) => {
        return feature;
      });

      if (feature) {
        alert(feature.get("name"));
      }
    });

    return () => mapObj.setTarget("");
  }, []);

  return (
    <div className="mx-auto flex flex-row py-2">
      <div className="map" id="map" />
    </div>
  );
};

export default MapComp;