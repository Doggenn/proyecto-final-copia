import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import BuscarFiltro from '../BuscarFiltro/BuscarFiltro';
import axios from 'axios';

const MapContainer = () => {
    const [mapas, setMapas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filtro, setFiltro] = useState('');

    useEffect(() => {
        const getMapa = async () => {
            try {
                const urlBbdd = "https://servidor-protectora.vercel.app/api/mapas";
                const res = await axios.get(urlBbdd);
                setMapas(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener el mapa:", error);
                setLoading(false);
            }
        };

        getMapa();
    }, []);

    useEffect(() => {
        if (!loading) {
            const map = L.map('mi_mapa').setView([40.4166, -3.7035], 14);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            const popup = L.popup();

            mapas.filter(mapa =>
                mapa.nombre.toLowerCase().includes(filtro) // Filtrar los mapas según la entrada del usuario
            ).forEach(mapa => {
                L.marker([mapa.long, mapa.lat]).addTo(map).bindPopup(mapa.nombre);
            });

            // eslint-disable-next-line no-inner-declarations
            function onMapClick(e) {
                popup
                    .setLatLng(e.latlng)
                    .setContent("Nueva ubicación " + e.latlng.toString())
                    .openOn(map);
            }

            map.on('click', onMapClick);

            return () => {
                map.off('click', onMapClick);
                map.remove();
            };
        }
    }, [loading, mapas, filtro]);

    return (
        <>
            <BuscarFiltro onFilterChange={setFiltro} />
            {loading ? (
                <div>Cargando...</div>
            ) : (
                <div id="mi_mapa" style={{ height: "79vh", width: "100%" }} />
            )}
        </>
    );
};

export default MapContainer;
