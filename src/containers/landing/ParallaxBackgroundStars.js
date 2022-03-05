const { ParallaxLayer } = require("@react-spring/parallax");

export const ParallaxBackgroundStars = () => (
  <>
    <ParallaxLayer
      offset={0}
      speed={0}
      factor={3}
      style={{
        backgroundImage: "url(/static/illustrations/stars.svg)",
        backgroundSize: "cover",
        width: "100%",
      }}
    />
    <ParallaxLayer
      offset={3}
      speed={0}
      factor={3}
      style={{
        backgroundImage: "url(/static/illustrations/stars.svg)",
        backgroundSize: "cover",
        width: "100%",
      }}
    />
    <ParallaxLayer
      offset={6}
      speed={0}
      factor={3}
      style={{
        backgroundImage: "url(/static/illustrations/stars.svg)",
        backgroundSize: "cover",
        width: "100%",
      }}
    />
  </>
);
