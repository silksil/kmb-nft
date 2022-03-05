const { ParallaxLayer } = require("@react-spring/parallax");

export const ParallaxBackgroundStars = () => (
  <>
    <ParallaxLayer
      offset={0}
      speed={0}
      factor={2}
      style={{
        backgroundImage: "url(/static/illustrations/stars.svg)",
        backgroundSize: "cover",
        width: "100%",
      }}
    />
    <ParallaxLayer
      offset={2}
      speed={0}
      factor={2}
      style={{
        backgroundImage: "url(/static/illustrations/stars.svg)",
        backgroundSize: "cover",
        width: "100%",
      }}
    />
    <ParallaxLayer
      offset={4}
      speed={0}
      factor={2}
      style={{
        backgroundImage: "url(/static/illustrations/stars.svg)",
        backgroundSize: "cover",
        width: "100%",
      }}
    />
  </>
);
