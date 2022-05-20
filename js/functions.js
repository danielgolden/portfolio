// import Blotter from "./blotter.min.js";

window.addEventListener("DOMContentLoaded", () => {
  initApp();
});

window.addEventListener("ready", () => {
  const $canvas = document.querySelector("canvas");
  console.log($canvas);
  // $canvas.width = 100;
});

const initApp = () => {
  WebFont.load({
    google: {
      families: ["IBM Plex Sans"],
    },
    active: () => createBlotterText(),
  });

  let textColor = "#202527";

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    textColor = "#202527";
  }

  const createBlotterText = () => {
    // BLOTTER - Example 2
    var text = new Blotter.Text("Daniel Golden", {
      family: "'IBM Plex Sans', serif",
      size: 34,
      fill: textColor,
      paddingTop: 0,
    });

    console.log("text.fill", text.properties.fill);
    var material = new Blotter.ChannelSplitMaterial();

    // Flies Matieral
    // material.uniforms.uPointCellWidth.value = 0.02;
    // material.uniforms.uPointRadius.value = 0.8;
    // material.uniforms.uSpeed.value = 10;

    // Liquid Distort
    // material.uniforms.uSpeed.value = 0.25;

    // Channel Split
    material.uniforms.uOffset.value = -0.05;
    material.uniforms.uApplyBlur.value = 1;
    material.uniforms.uAnimateNoise.value = true;

    // Rolling distort
    // material.uniforms.uSineDistortSpread.value = 0.1;
    // material.uniforms.uSineDistortCycleCount.value = 2;
    // material.uniforms.uSineDistortAmplitude.value = 0.01;
    // material.uniforms.uNoiseDistortVolatility.value = 10;
    // material.uniforms.uNoiseDistortAmplitude.value = 0.002;
    // material.uniforms.uRotation.value = 176;
    // material.uniforms.uSpeed.value = 0.35;

    var blotter = new Blotter(material, {
      texts: text,
    });

    var $elem = document.querySelector(".blotter-text");
    var scope = blotter.forText(text);

    scope.appendTo($elem);
    Blotter.addEventListener("ready", () => {
      console.log("hi");
    });

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        text.properties.fill = newColorScheme === "dark" ? "#fff" : "#202527";
        blotter.needsUpdate = true;
      });
  };
};
