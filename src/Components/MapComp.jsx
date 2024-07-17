import { useEffect, useRef } from "react";
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

const MapComp = ({ coordinates, className }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const mapObj = new Map({
      target: mapRef.current,
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
      features: []
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    mapObj.addLayer(vectorLayer);

    if (coordinates) {
      const feature = new Feature({
        geometry: new Point(fromLonLat(coordinates)),
        name: "Selected Location",
        style: new Style({
          image: new Icon({
            anchor: [0.5, 1],
            src: "https://openlayers.org/en/latest/examples/data/icon.png",
          }),
        }),
      });

      vectorSource.clear(); // Clear existing features
      vectorSource.addFeature(feature);
      mapObj.getView().setCenter(fromLonLat(coordinates));
    }

    mapObj.on("click", (evt) => {
      const feature = mapObj.forEachFeatureAtPixel(evt.pixel, (feature) => {
        return feature;
      });

      if (feature) {
        alert(feature.get("name"));
      }
    });

    return () => {
      if (mapObj) {
        mapObj.setTarget(null);
      }
    };
  }, [coordinates]);

  return (
    <div ref={mapRef} className={`mx-auto flex flex-row py-2 map ${className}`} id="map" />
  );
};

export default MapComp;
