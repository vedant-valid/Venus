import { statsData } from "@/components/data/landing";
import HeroSection from "@/components/hero";
export default function Home() {
  return ( 
    <div className="mt-40">
    <HeroSection/>
        <section>
      <div>
        {statsData.map((statsData,index)=>(
          <div key={index}>
            <div>{statsData.value}</div>
            <div>{statsData.label}</div>

          </div>
        ))}
      </div>
    </section>
    </div>

  );
}


