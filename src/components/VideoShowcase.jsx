"use client";

import { motion } from "motion/react";

export default function VideoShowcase() {
  return (
    <motion.section
      aria-label="Featured project video"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative w-full mt-16 mb-4"
    >
      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-zinc-950 shadow-lg shadow-zinc-900/10">
        <video
          src="/videos/snapgram-demo.mp4"
          className="aspect-video w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </motion.section>
  );
}
