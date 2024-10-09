
import Header from "@/components/Header";
import Hero from "@/components/Home/Hero";
import JoinCommunity from "@/components/Home/JoinCommunity";

export default function Home() {
  return (
    <>
      <Header />
    <div className="min-h-screen">
    <Hero />
    <JoinCommunity/>
    </div>
      <Header />

    </>
  );
}
