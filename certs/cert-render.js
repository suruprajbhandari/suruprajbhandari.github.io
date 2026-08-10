(function () {
  if (typeof CERT === "undefined") return;

  document.title = `${CERT.title} — Surup Rajbhandari`;
  document.getElementById("cert-title").textContent = CERT.title;
  document.getElementById("cert-meta").textContent = `${CERT.issuer} · ${CERT.date}`;
  document.getElementById("cert-desc").textContent = CERT.description || "";

  const badge = document.getElementById("cert-badge");
  if (CERT.type === "digital") {
    badge.textContent = "Digital";
    badge.classList.add("digital");
  } else {
    badge.textContent = "Physical";
    badge.classList.add("physical");
  }

  const frame = document.getElementById("cert-frame");
  const isPdf = /\.pdf$/i.test(CERT.file);

  if (isPdf) {
    const iframe = document.createElement("iframe");
    iframe.src = CERT.file;
    iframe.title = CERT.title;
    frame.appendChild(iframe);
  } else {
    const img = document.createElement("img");
    img.src = CERT.file;
    img.alt = `${CERT.title} certificate scan`;
    frame.appendChild(img);
  }

  document.getElementById("cert-open").href = CERT.file;
  document.getElementById("cert-download").href = CERT.file;
})();
