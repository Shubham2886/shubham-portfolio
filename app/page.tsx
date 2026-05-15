"use client";
import dynamic from "next/dynamic";
import Nav from "@/components/layout/Nav";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import SystemsSection from "@/components/ui/SystemsSection";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

// Client-only components
const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });
const CommandPalette = dynamic(() => import("@/components/ui/CommandPalette"), { ssr: false });
const LoadingScreen = dynamic(() => import("@/components/ui/LoadingScreen"), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <CommandPalette />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <SystemsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
