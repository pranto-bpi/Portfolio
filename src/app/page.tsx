import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Container from "@/components/Container";
import MyExperience from "@/components/MyExperience";
import Portfolio from "@/components/MyPortfolio";
import MyServices from "@/components/MyServices";
import MySkils from "@/components/MySkils";
import Image from "next/image";

export default function Home() {
  return (
    <main>
     
      <Banner/>
      <AboutMe/>
      <Portfolio/>
     <MyServices/>
     <MyExperience/>
     <MySkils/>
     
    </main>
  );
}
