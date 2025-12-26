"use client";

import { useState, useEffect } from "react";

const VIDEO_BACKGROUNDS = [
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/15b73dbd-72d0-44e0-a848-79ee0f64d0d3/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/b3213694-67b7-4ec6-b451-ed56008b92d0/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/9a79a8f2-2b2f-42f8-8012-c1054b13a4fe/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/260ee6fc-5634-4379-a9de-39ea03efb87a/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/36c09145-7fb9-4fdd-a50f-abaa66b4d255/result_00.mp4",
  "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/96fb0ed4-0ff9-484a-8e73-a07708f07e46/result_00.mp4",
];

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % VIDEO_BACKGROUNDS.length);
    }, 20000); // Change video every 20 seconds
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen">
      {/* Video Background */}
      <video
        key={currentVideo}
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={VIDEO_BACKGROUNDS[currentVideo]} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex flex-col items-center justify-center px-6 py-20">
          <div className="text-center max-w-3xl">
            <h1 className="fade-in text-6xl md:text-8xl font-light tracking-tight mb-6 pulse-glow">
              Milo Lomas
            </h1>
            <p className="fade-in fade-in-delay-1 text-lg md:text-xl text-zinc-400 font-light tracking-wide mb-8">
              Amsterdam
              <span className="section-dot" />
              Experimental Music
              <span className="section-dot" />
              Sonic Architect
            </p>
            <nav className="fade-in fade-in-delay-2 flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest">
              <a href="#music" className="glitch-hover hover:text-white transition-colors">
                Listen
              </a>
              <a href="#about" className="glitch-hover hover:text-white transition-colors">
                About
              </a>
              <a href="#contact" className="glitch-hover hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </section>

        {/* Music Section */}
        <section id="music" className="px-6 py-20 bg-black/60 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="fade-in text-3xl md:text-4xl font-light mb-12 text-center tracking-tight">
              Music
            </h2>

            {/* SoundCloud Embed */}
            <div className="fade-in fade-in-delay-1 mb-12">
              <iframe
                width="100%"
                height="450"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/xwhysi&color=%238b5cf6&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                className="rounded-lg"
              />
            </div>

            {/* Streaming Links */}
            <div className="fade-in fade-in-delay-2 flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="https://soundcloud.com/xwhysi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-zinc-700 rounded-full hover:border-violet-500 hover:bg-violet-500/10 transition-all"
              >
                SoundCloud
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-zinc-700 rounded-full hover:border-violet-500 hover:bg-violet-500/10 transition-all opacity-50 cursor-not-allowed"
              >
                Spotify (Coming Soon)
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-zinc-700 rounded-full hover:border-violet-500 hover:bg-violet-500/10 transition-all opacity-50 cursor-not-allowed"
              >
                Apple Music (Coming Soon)
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 py-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="fade-in text-3xl md:text-4xl font-light mb-12 text-center tracking-tight">
              About
            </h2>

            <div className="fade-in fade-in-delay-1 space-y-6 text-zinc-400 leading-relaxed">
              <p>
                Born in Pittsburgh. Mother from Bremen, father from Chagrin Falls, Ohio.
                Now based in Amsterdam.
              </p>
              <p>
                Creating sonic landscapes that exist between the organic and the artificial.
                Influenced by the uncanny valleys of Aphex Twin and the nature-technology
                fusion of Björk. Music that feels like it&apos;s breathing, but you&apos;re not
                sure if it&apos;s alive.
              </p>
              <p>
                Each track is an experiment in texture, emotion, and controlled chaos.
                The goal isn&apos;t to be understood immediately—it&apos;s to create something
                that rewards attention.
              </p>
            </div>

            {/* Origin markers */}
            <div className="fade-in fade-in-delay-2 mt-12 flex flex-wrap justify-center gap-8 text-xs uppercase tracking-widest text-zinc-600">
              <span>Pittsburgh, PA</span>
              <span className="section-dot" />
              <span>Bremen, DE</span>
              <span className="section-dot" />
              <span>Chagrin Falls, OH</span>
              <span className="section-dot" />
              <span>Amsterdam, NL</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-20 bg-black/60 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="fade-in text-3xl md:text-4xl font-light mb-12 tracking-tight">
              Contact
            </h2>

            <div className="fade-in fade-in-delay-1 space-y-8">
              <p className="text-zinc-400">
                For bookings, collaborations, or just to say hello.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="https://instagram.com/xwhysi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-zinc-700 rounded-full hover:border-violet-500 hover:bg-violet-500/10 transition-all"
                >
                  Instagram
                </a>
                <a
                  href="https://soundcloud.com/xwhysi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-zinc-700 rounded-full hover:border-violet-500 hover:bg-violet-500/10 transition-all"
                >
                  SoundCloud
                </a>
                <a
                  href="mailto:hello@milolomas.com"
                  className="px-6 py-3 border border-zinc-700 rounded-full hover:border-violet-500 hover:bg-violet-500/10 transition-all"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 text-center text-xs text-zinc-600 tracking-wide">
          <p>© {new Date().getFullYear()} Milo Lomas. All rights reserved.</p>
          <p className="mt-2 font-mono text-zinc-700">
            52.3676° N, 4.9041° E
          </p>
        </footer>
      </div>
    </main>
  );
}
