import { Parallax } from "react-scroll-parallax";

export const ParallaxBackgroundStars = () => (
  <>
    <Parallax
      speed={0}
      style={{
        backgroundImage: "url(/static/illustrations/stars.svg)",
        backgroundSize: "cover",
        width: "100%",
        height: "50%"
      }}
    />
    <Parallax
      speed={0}
      style={{
        backgroundImage: "url(/static/illustrations/stars.svg)",
        backgroundSize: "cover",
        width: "100%",
        height: "50%"
      }}
    />
  </>
);
