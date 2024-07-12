import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import GotQuestion from "@/components/GotQuestion";
import Header from "@/components/Header";
import MeetPage from "@/components/MeetPage";
import WhyLove from "@/components/WhyLove";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <MeetPage />
      <WhyLove />
      <GotQuestion />
      <Footer/>
    </>
  );
}
