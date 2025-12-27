"use client";

import { useState, useEffect } from "react";

const VIDEOS = [
  // Fractal tunnels
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/1faff18c-9488-4521-bfd4-68353b4e7993/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/c6e1f9b4-613b-4a4c-8bbe-58018b976da2/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/3cac19bb-5dba-4745-ac57-1c3f2309a0b4/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/f0a5539d-e20e-45e7-beb3-8a3d359e7a12/result_00.mp4",
  // Original trippy
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/15b73dbd-72d0-44e0-a848-79ee0f64d0d3/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/b3213694-67b7-4ec6-b451-ed56008b92d0/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/9a79a8f2-2b2f-42f8-8012-c1054b13a4fe/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/260ee6fc-5634-4379-a9de-39ea03efb87a/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/36c09145-7fb9-4fdd-a50f-abaa66b4d255/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/96fb0ed4-0ff9-484a-8e73-a07708f07e46/result_00.mp4",
  // Cursed 3D animals
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/90b724c4-f77b-4299-aafb-dafc8ec895e3/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/858936a6-2c83-44dd-9cd5-8ec1a36a7a39/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/5f4d67b1-1c3f-4c8c-b916-d921b4b0164b/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/69218ac5-8e8b-4c9e-a08b-4e750903a763/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/7b869cda-0eeb-46ca-81a1-5704d16a16e6/result_00.mp4",
  // Faceless stoned vision
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/98df860d-7130-4b8f-b174-b8b39793abad/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/fb160d6f-5734-4ae3-a049-78d104a5f2ec/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/bea513f0-e85c-4c6d-8030-05e2cba47096/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/2a0fdf89-5b7d-4b8c-92b6-7a1211e278e4/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/f0ef4636-cd46-44b5-9e7f-4cfff7c8bb5f/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/b4695228-1288-4470-a4f6-56ef13ad44c8/result_00.mp4",
  // Pixelated morph
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/4e366250-8ba6-4a37-97ec-0395f2c56000/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/f4083282-b716-4eb5-bf61-b6a265b1ec19/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/77076ba3-46c1-4401-a0a6-a4f2088786a8/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/bf4cd2b8-53a7-4a19-bd77-e3d74c57f621/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/7ab098ce-0648-47ff-93bc-bda6cac9bc17/result_00.mp4",
];

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [mounted, setMounted] = useState(false);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % VIDEOS.length);
  };

  useEffect(() => {
    setMounted(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        nextVideo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!mounted) return null;

  return (
    <main
      className="fixed inset-0 bg-black cursor-pointer"
      onClick={nextVideo}
    >
      <video
        key={currentVideo}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={VIDEOS[currentVideo]} type="video/mp4" />
      </video>

      {/* Minimal hint */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/20 text-xs tracking-widest uppercase pointer-events-none">
        space
      </div>
    </main>
  );
}
