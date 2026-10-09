import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import AuthForm from "./components/accounts/AuthForm"

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <HomeCards/>
      <AuthForm/>
    </>
  );
}
