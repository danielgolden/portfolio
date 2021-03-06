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
      isClosing: false,
    };

    const modalCloseTriggered = new Event("modal-close-triggered");

    $openButton.addEventListener("click", () => {
      state.dialogOpen = true;

      $modalElement.classList.add("open");
      $body.classList.add("dialog-open");
    });

    $modalElement.addEventListener("modal-close-triggered", () => {
      state.isClosing = true;
      $body.classList.add("modal-is-closing");

      setTimeout(() => {
        $body.classList.remove("modal-is-closing");
        $body.classList.remove("dialog-open");
        $modalElement.classList.remove("open");
        state.dialogOpen = false;
        state.isClosing = false;
      }, 290);
    });

    $modalOverlay.addEventListener("click", (event) => {
      if (
        !event.target.matches(".dialogs-container") &&
        !event.target.matches(closeButton)
      )
        return;
      $modalElement.dispatchEvent(modalCloseTriggered);
    });
  };

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
