import HomeCard from "@/components/HomeCard";
import { Baby, Camera, Film } from "lucide-react";

export default function Home() {
  return (
    <>
    <main className="p-4">
    <section className="h-[80vh] flex justify-center items-center">
      Slider
    </section>
    
    <section className="pb-14">
      <div className="heading">
        <h2 className="uppercase border-b-2 border-lime-600 w-fit pb-2 mb-8">What we do</h2>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-3">
        <HomeCard icon={<Camera />} heading="Wedding Photography" href="/wedding" ImgUrl='/wedding' ImgSrc='/dummy/one.webp' desc="We are the team of creative wedding photographers with a passion for candid wedding photography making us more popular as one of the best wedding photographers in delhi, india. We are specialised to capture artistically different unique moments that the couple wish to be present in the memories." />
        <HomeCard icon={<Camera />} heading="Pre Wedding Photography" href="/pre-wedding" ImgUrl='/pre-wedding' ImgSrc='/dummy/two.webp' desc="We are the team of creative wedding photographers with a passion for candid wedding photography making us more popular as one of the best wedding photographers in delhi, india. We are specialised to capture artistically different unique moments that the couple wish to be present in the memories." />
        <HomeCard icon={<Baby />} heading="Baby Shoot" href="/baby-shoot" ImgUrl='/baby-shoot' ImgSrc='/dummy/three.webp' desc="We are the team of creative wedding photographers with a passion for candid wedding photography making us more popular as one of the best wedding photographers in delhi, india. We are specialised to capture artistically different unique moments that the couple wish to be present in the memories." />
     </div>
    </section>

    <section className="pb-14">
      <div className="heading">
        <h2 className="uppercase border-b-2 border-lime-600 w-fit pb-2 mb-8">Our latest works</h2>
      </div>
      <div className="content">
        <p>Gallery</p>
      </div>
    </section>

    <section className="pb-14">
      <div className="heading">
        <h2 className="uppercase border-b-2 border-lime-600 w-fit pb-2 mb-8">INDIAN WEDDING PHOTOGRAPHY TRENDS</h2>
      </div>
      <div className="content">
        <p>Content</p>
      </div>
    </section>

    <section className="pb-14">
      <div className="heading">
        <h2 className="uppercase border-b-2 border-lime-600 w-fit pb-2 mb-8">SOME FACTS TO MAKE WEDDING PHOTOGRAPHY MORE SUCCESSFUL ON YOUR WEDDING DAY</h2>
      </div>
      <div className="content">
        <p>Content</p>
      </div>
    </section>

    <section className="pb-14">
      <div className="heading">
        <h2 className="uppercase border-b-2 border-lime-600 w-fit pb-2 mb-8">SOME IMPORTANT QUESTIONS TO ASK YOUR WEDDING CINEMATOGRAPHER IN DELHI, INDIA</h2>
      </div>
      <div className="content">
        <p>Content</p>
      </div>
    </section>

    </main>
    </>
  );
}
