const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const excursion = {
    titulo: form.titulo.value,
    precio: form.precio.value,
    descripcion: form.descripcion.value
  };

  await fetch("/.netlify/functions/excursiones", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(excursion)
  });

  alert("Excursión guardada correctamente");
  form.reset();
});
