import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const projects = [
  {
    slug: "fusionformer",
    name: "FusionFormer",
    year: "2026",
    blurb:
      "A lightweight transformer-based continuous authentication system using keystroke dynamics, designed to match state-of-the-art performance with a significantly smaller architecture.",
    stack: "Python · PyTorch · Scikit-learn · Transformers",
    image: "/projects/fusionformer.png",
    link: "/private-repo",
  },
  {
    slug: "so-sis",
    name: "SO-SIS",
    year: "2025",
    blurb:
      "A storage-optimized Secret Image Sharing scheme that reduces cryptographic share sizes using Huffman encoding while preserving secure image reconstruction.",
    stack: "Cryptography · Secret Sharing · Python · MATLAB",
    image: "/projects/so-sis.png",
    link: "/private-repo",
  },
  {
    slug: "electronic-elections",
    name: "Electronic Elections",
    year: "2025",
    blurb:
      "A secure two-party electronic voting system combining ElGamal encryption and Shamir's Secret Sharing with an isolated, Dockerized server architecture.",
    stack: "Cryptography · Python · Flask · Docker · OpenSSL",
    image: "/projects/elections.png",
    link: "https://github.com/YuvrajChauhan1303/electronic-election",
  },
  {
    slug: "virtual-electrical-lab",
    name: "Virtual Electrical Lab",
    year: "2024",
    blurb:
      "An immersive virtual laboratory connecting a Unity-based environment with physical IoT hardware for real-time electrical experiments.",
    stack: "Unity · Blender · C# · Node.js · Arduino · ESP32",
    image: "/projects/vr.png",
    link: "/private-repo",
  },
  {
    slug: "adaptive-enemy-ai",
    name: "Adaptive Enemy AI",
    year: "2024",
    blurb:
      "A reinforcement-learning driven game AI using Proximal Policy Optimization, exploring how neural architectures influence adaptive enemy difficulty.",
    stack: "Reinforcement Learning · PPO · PyTorch · Unity ML-Agents",
    image: "/projects/ppo.png",
    link: "https://github.com/YuvrajChauhan1303/Neural-Brawl",
  },
  {
    slug: "chiron",
    name: "CHIRON",
    year: "2025",
    blurb:
      "A gesture-controlled robotic system using IMU-based motion sensing and networked communication for remotely controlling a physical bot.",
    stack: "Raspberry Pi Pico W · ESP8266 · MPU6050 · MicroPython",
    image: "/projects/chiron.png",
    link: "https://github.com/YuvrajChauhan1303/server-bb",
  },
] as const;

export default function ProjectsPage() {
  return (
    <div className="px-6 sm:px-10 lg:px-14 space-y-14">
      <PageHeader
        eyebrow="Selected work"
        title="Projects"
        description="A working record of things I've built — some shipped to production, some just proof that an idea holds up."
      />

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            href={p.link}
            className="group card overflow-hidden flex flex-col"
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src={p.image}
                alt={`${p.name} project cover`}
                fill
                priority={i < 2}
                sizes="(min-width: 640px) 520px, 92vw"
                className="object-cover p-2 rounded-2xl transition-transform duration-500 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-display text-xl text-ink">{p.name}</h2>
                <span className="font-mono text-[11px] text-faint">
                  {p.year}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                {p.blurb}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wide text-ink/50">
                  {p.stack}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-ink/40 group-hover:text-brass transition-colors"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
