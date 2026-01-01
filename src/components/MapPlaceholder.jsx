"use client";
import { MapPin } from "lucide-react";

const MapPlaceholder = () => {
  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-border shadow-lg animate-fade-in">
      {/* Embedded Map - Replace with actual coordinates as needed */}
      <iframe
        title="Locafy Location Map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0100,40.7100,-73.9900,40.7300&layer=mapnik&marker=40.7200,-74.0000"
        className="w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>

      {/* Overlay gradient for brand consistency */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>

      {/* Location marker badge */}
      <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-border flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <MapPin className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">We're here</p>
          <p className="text-sm font-semibold text-foreground">Locafy HQ</p>
        </div>
      </div>
    </div>
  );
};

export default MapPlaceholder;
