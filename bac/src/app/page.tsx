import HeroHeading from "../components/HeroHeading";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <HeroHeading scrambleDurationMs={200} logoDelayAfterTextMs={0} />
    </main>
  );
}
