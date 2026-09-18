/**
 * Materiales de estudio — botón de impresión (icono fijo, esquina superior derecha).
 * Expone window.StudyPrint.
 */
(function () {
  "use strict";

  var LABEL = "Imprimir hoja";

  function printSheet() {
    window.print();
  }

  function mountPrintBar() {
    if (document.querySelector(".print-fab")) return;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "print-fab no-print";
    btn.setAttribute("aria-label", LABEL);
    btn.setAttribute("title", LABEL);
    btn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">' +
      '<path fill="currentColor" d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>' +
      "</svg>";
    btn.addEventListener("click", printSheet);

    document.body.appendChild(btn);
  }

  function init() {
    mountPrintBar();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.StudyPrint = {
    print: printSheet,
    mount: mountPrintBar,
  };
})();
