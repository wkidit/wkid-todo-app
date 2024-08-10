import BgHeading from "@/components/BgHeading";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="font-sans bg-[#8E3E63] min-h-screen flex justify-center items-center flex-col">
      <BgHeading />
      <main className="relative w-[972px] shadow-[0_4px_4px_rgb(0,0,0,0.08)] h-[636px] bg-[#CAE6B2] rounded-[8px] overflow-hidden grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr]">
        <Header />
        <Sidebar />
        Main App
      </main>
    </div>
  );
}
