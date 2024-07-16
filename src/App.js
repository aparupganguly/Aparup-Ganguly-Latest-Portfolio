import React from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import LandingPage from "./Pages/LandingPage";
import Hero from "./Components/Hero";
import ShowReel from "./assets/Videos/demoShowreel.mp4";
const App = () => {
  const lenis = useLenis(({ scroll }) => {});
  return (
    <>
      <ReactLenis root>
        <LandingPage />
      </ReactLenis>
    </>
  );
};

export default App;
