import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const LandingSection = () => {
  return (
    <section style={{height: '100vh'}} className="flex flex-col items-center py-14 px-36 border-b-[1px] border-black border-opacity-20">
      <h1 className="text-black text-6xl font-semibold  mt-32">Welcome to Tekhliq Labs</h1>
      <p style={{width: '40vw'}} className="text-black text-2xl mt-6 text-center">
        Engineering the Art of Creation 🔆
      </p>
    </section>
  );
};

export default LandingSection;
