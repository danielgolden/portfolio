document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

const initApp = () => {
  const $body = document.body;

  /*
    Hide youtube iframe and show placeholder in it's stead. Swap them when
    placeholder is clicked.
    @param {string} $modalElement Selector for the relevant modal element
  */
  const youtubeVideoLoadAnimation = ($modalElement) => {
    const $youtubeIframe = $modalElement.querySelector("iframe");

    const createSpinner = () => {
      const $spinner = document.createElement("span");
      const $spinnerContainer = document.createElement("div");

      $spinnerContainer.classList.add("spinner-container");

      $spinner.classList.add("spinner");

      $spinnerContainer.appendChild($spinner);

      $youtubeIframe.parentElement.appendChild($spinnerContainer);

      $spinnerContainer.style.width =
        $youtubeIframe.getAttribute("width") + "px";
      $spinnerContainer.style.height =
        $youtubeIframe.getAttribute("height") + "px";
    };

    createSpinner();
  };

  /*
    Apply dialog functionality to whatever element is provided as an argument
    @param {string} modalElement selector for the dialog element itself
    @param {string} openButton selector for the open button in the dialog
    @param {string} closeButton selector for the close button in the dialog
  */

  const initializeModal = (modalElement, openButton, closeButton) => {
    const $modalElement = document.querySelector(modalElement);
    const $openButton = document.querySelector(openButton);
    const $closeButton = $modalElement.querySelector(closeButton);
    const $modalOverlay = document.querySelector(".dialogs-container");
    const $youtubeIframe = $modalElement.querySelector("iframe");

    let state = {
      dialogOpen: false,
    };

    // If one of the slides is a youtube video, add a class to it's parent
    if ($youtubeIframe) {
      $youtubeIframe.parentElement.classList.add("youtube-item");
      $youtubeIframe.width = "";
      $youtubeIframe.height = "";
    }

    $openButton.addEventListener("click", () => {
      state.dialogOpen = true;

      $modalElement.classList.add("open");
      $body.classList.add("dialog-open");
    });

    $closeButton.addEventListener("click", () => {
      state.dialogOpen = false;
      const $spinnerContainer =
        $modalElement.querySelector(".spinner-container");

      $modalElement.classList.remove("open");
      $body.classList.remove("dialog-open");
    });

    $modalOverlay.addEventListener("click", (event) => {
      if (!event.target.matches(".dialogs-container")) return;

      $modalElement.classList.remove("open");
      $body.classList.remove("dialog-open");
    });
  };

  // TODO: Delete this `initializeYoutubePlaceholder` function
  // Then just hide the video behind a css loader until the animation is finished

  initializeModal(
    ".one-core-toolbox-dialog",
    ".one-core-toolbox-preview",
    ".button-work-example-dialog-close"
  );

  initializeModal(
    ".prose-linter-dialog",
    ".prose-linter-preview",
    ".button-work-example-dialog-close"
  );

  initializeModal(
    ".in-app-docs-dialog",
    ".in-app-docs-preview",
    ".button-work-example-dialog-close"
  );

  initializeModal(
    ".infra-geo-ops-dialog",
    ".infra-geo-ops-preview",
    ".button-work-example-dialog-close"
  );
};
