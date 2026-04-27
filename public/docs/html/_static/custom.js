// Remove Furo's inline TOC error message (injected before nav.contents.local)
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("nav.contents.local").forEach(function (nav) {
    let el = nav.previousElementSibling;
    // Furo injects a warning div immediately before nav.contents.local
    while (el) {
      const prev = el.previousElementSibling;
      if (el.tagName === "DIV" || el.classList.contains("warning")) {
        el.remove();
        break;
      }
      el = prev;
    }
  });
});
