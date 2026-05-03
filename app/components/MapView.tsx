'use client';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const healthyIcon = new L.DivIcon({
  className: 'custom-icon',
  html: `<div style="width: 14px; height: 14px; background-color: #10b981; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px rgba(16, 185, 129, 0.8);"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

const criticalIcon = new L.DivIcon({
  className: 'custom-icon',
  html: `<div style="width: 16px; height: 16px; background-color: #ef4444; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 15px rgba(239,68,68,0.8); animation: pulse 1.5s infinite;"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

export default function MapView() {
  const position: [number, number] = [18.5204, 73.8567]; // Centered on Pune

  // Store truck coordinates in state so they can move
  const [truck1, setTruck1] = useState<[number, number]>([18.5304, 73.8467]);
  const [truck2, setTruck2] = useState<[number, number]>([18.5104, 73.8667]);

  // The Simulation Engine: Moves the trucks slightly every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTruck1(prev => [prev[0] + 0.0001, prev[1] + 0.0002]); // Moving North-East
      setTruck2(prev => [prev[0] - 0.00015, prev[1] - 0.0001]); // Rerouting South-West
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
        
        {/* Healthy Truck (Moving) */}
        <Marker position={truck1} icon={healthyIcon}>
          <Popup>TRK-882 (Blood Plasma) - Stable</Popup>
        </Marker>

        {/* Critical Truck (Rerouting) */}
        <Marker position={truck2} icon={criticalIcon}>
          <Popup>TRK-402 (Pfizer Vaccines) - AI REROUTE INITIATED</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}