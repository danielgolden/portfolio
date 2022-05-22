document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

const initApp = () => {
  const $body = document.body;

  /*
    Apply dialog functionality to whatever element is provided as an argument
    @param {string} $modalElement selector for the dialog element itself
    @param {string} $closeButton selector for the close button in the dialog
  */

  const initializeModal = (modalElement, openButton, closeButton) => {
    const $modalElement = document.querySelector(modalElement);
    const $openButton = document.querySelector(openButton);
    const $closeButton = $modalElement.querySelector(closeButton);
    const $modalOverlay = document.querySelector(".dialogs-container");

    let state = {
      dialogOpen: false,
    };

    $openButton.addEventListener("click", () => {
      state.dialogOpen = true;

      $modalElement.classList.add("open");
      $body.classList.add("dialog-open");
    });

    $closeButton.addEventListener("click", () => {
      state.dialogOpen = false;

      $modalElement.classList.remove("open");
      $body.classList.remove("dialog-open");
    });

    $modalOverlay.addEventListener("click", (event) => {
      if (!event.target.matches(".dialogs-container")) return;
      $modalElement.classList.remove("open");
      $body.classList.remove("dialog-open");
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
