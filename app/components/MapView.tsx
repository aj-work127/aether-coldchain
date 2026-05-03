'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Healthy Truck Icon
const healthyIcon = new L.DivIcon({
  className: 'custom-icon',
  html: `<div style="width: 14px; height: 14px; background-color: #10b981; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px rgba(16, 185, 129, 0.8);"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

// Critical Truck Icon (Uses the pulse animation from globals.css)
const criticalIcon = new L.DivIcon({
  className: 'custom-icon',
  html: `<div style="width: 16px; height: 16px; background-color: #ef4444; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 15px rgba(239,68,68,0.8); animation: pulse 1.5s infinite;"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

export default function MapView() {
  const position: [number, number] = [18.5204, 73.8567]; // Centered on Pune

  return (
    <div className="w-full h-full z-0">
      <MapContainer 
        center={position} 
        zoom={12} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%', background: '#020617' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        {/* Mock Data Markers */}
        <Marker position={[18.5304, 73.8467]} icon={healthyIcon}>
          <Popup>TRK-882 (Blood Plasma) - Stable</Popup>
        </Marker>

        <Marker position={[18.5104, 73.8667]} icon={criticalIcon}>
          <Popup>TRK-402 (Pfizer Vaccines) - AI REROUTE INITIATED</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}