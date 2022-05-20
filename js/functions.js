document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

const initApp = () => {
  // Make an instance of two and place it on the page
  const params = { fitted: true };
  const $elem = document.querySelector(".animated-border");
  const two = new Two(params).appendTo($elem);

  const rectWidth = 1000;
  const rectHeight = 500;
  const rect = two.makeRectangle(0, 0, rectWidth, rectHeight);
  rect.fill = "rgb(127, 127, 127)";
  rect.noStroke();

  two.update();
};
