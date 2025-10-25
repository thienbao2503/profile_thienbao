import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from "react";
import L from "leaflet";

// Danh sách các marker quanh thành phố (ví dụ quanh TP.HCM)
const markers = [
    { position: [10.538430031156503, 106.40542223106661], label: "Tân An", icon: "images/home.png" },
    { position: [10.848463323169716, 106.77308661153565], label: "Ngã Tư Thủ Đức", icon: "images/navigator.png" },
    { position: [10.855822483989668, 106.78591793242548], label: "HUTECH KHU E", icon: "images/map-marker.png" },
    { position: [10.863728172075472, 106.73892518270024], label: "OPTECH", icon: "images/offices.png" },
];

const customIcon = (url: string) => {
    return new L.Icon({
        iconUrl: url,
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
    });
}

// Hàm tạo DivIcon để hiện label
// function createLabelIcon(label: string) {
//     return L.divIcon({
//         className: "custom-label-icon",
//         html: `<div style="background:rgba(255,140,0,0.9);color:white;padding:2px 8px;border-radius:8px;font-size:14px;font-weight:bold;box-shadow:0 2px 6px rgba(0,0,0,0.2);white-space:nowrap; width:fit">${label}</div>`,
//         iconAnchor: [0, 24],
//     });
// }

// Component tự động fit bounds khi scroll tới bản đồ
function FitBoundsOnView({ positions }: { positions: [number, number][] }) {
    const map = useMap();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    // Khi bản đồ vào view, fit bounds
                    const bounds = positions.length > 1
                        ? positions
                        : [[10.762622, 106.660172], [10.762622, 106.660172]];
                    map.fitBounds(bounds as any, { padding: [50, 50] });
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        // Fit bounds lần đầu nếu đã trong view
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [map, positions]);

    return <div ref={ref} />;
}

const tileLayers = [
    {
        name: "Vệ tinh",
        url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
        attribution: "&copy; Google Satellite"
    },
    {
        name: "Đường phố",
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
    }
];

function Maps() {
    const positions = markers.map(m => m.position as [number, number]);
    const [tileIndex, setTileIndex] = useState(0);

    return (
        <section className="h-[70vh] flex flex-col justify-center items-center overflow-hidden bg-black relative">
            <div className="absolute top-4 right-4 z-[1000]">
                <button
                    className="bg-white text-black px-4 py-2 rounded shadow hover:bg-orange-400 hover:text-white transition"
                    onClick={() => setTileIndex((tileIndex + 1) % tileLayers.length)}
                >
                    Chuyển sang bản đồ {tileLayers[(tileIndex + 1) % tileLayers.length].name}
                </button>
            </div>
            <div className="w-full h-full">
                <MapContainer
                    center={[10.7769, 106.7009]}
                    zoom={13}
                    className="w-full h-full"
                >
                    <TileLayer
                        attribution={tileLayers[tileIndex].attribution}
                        url={tileLayers[tileIndex].url}
                    />
                    {markers.map((marker, idx) => (
                        <>
                            <Marker
                                key={idx}
                                position={marker.position as any}
                                icon={customIcon(marker.icon)}
                            >
                                <Popup >{marker.label}</Popup>
                            </Marker>
                            {/* Hiển thị label nổi trên bản đồ */}
                            <Marker
                                key={idx + "_label"}
                                position={marker.position as any}
                                icon={L.divIcon({
                                    className: "custom-label-icon",
                                    html: `<div style="color:white;padding:2px 8px;border-radius:8px;font-size:14px;font-weight:bold;box-shadow:0 2px 6px rgba(0,0,0,0.2);white-space:nowrap;margin-top:8px;">${marker.label}</div>`,
                                    iconAnchor: [19, -8], // 19 là giữa icon, -8 là phía dưới icon
                                })}
                                interactive={false}
                            />
                        </>
                    ))}
                    <FitBoundsOnView positions={positions} />
                </MapContainer>
            </div>

        </section>
    );
}

export default Maps;

// Custom icon cho marker
