const panels = document.querySelectorAll(".panel");

const activePanels =
  panels.length > 0 ? panels : document.querySelectorAll(".hero-panel");

activePanels.forEach((panel) => {
  const blobs = panel.querySelectorAll(".blob, .orb");

  panel.addEventListener("pointermove", (event) => {
    const rect = panel.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    blobs.forEach((blob, index) => {
      const intensity = (index + 1) * 6;
      const tx = x * intensity;
      const ty = y * intensity;
      blob.style.setProperty("--tx", `${tx}px`);
      blob.style.setProperty("--ty", `${ty}px`);
    });
  });

  panel.addEventListener("pointerleave", () => {
    blobs.forEach((blob) => {
      blob.style.setProperty("--tx", "0px");
      blob.style.setProperty("--ty", "0px");
    });
  });
});
